import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import random
import re
from datetime import datetime
import json
from urllib.parse import urljoin, urlparse, quote

# ==================== 【配置区域】====================
# 要爬取的主流媒体网站根域名
MEDIA_DOMAINS = [
    "people.com.cn",      # 人民网
    "xinhuanet.com",      # 新华网
    "cctv.com",           # 央视网
    "chinanews.com",      # 中国新闻网
    "gmw.cn",             # 光明网
    "huanqiu.com",        # 环球网
    "ce.cn",              # 中国经济网
    "chinadaily.com.cn",  # 中国日报网
    "china.com.cn",       # 中国网
    "youth.cn",           # 中国青年网
]

# 搜索关键词（用于站内搜索）
SEARCH_KEYWORDS = ["中国青年五四奖章", "五四奖章获得者", "青年五四奖章"]

# 请求头
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
}

# 输出文件
OUTPUT_CSV = "五四奖章报道_智能搜索结果.csv"
OUTPUT_JSON = "五四奖章报道_智能搜索结果.json"

# 爬虫参数
REQUEST_DELAY = (2, 5)  # 请求延迟范围(秒)，调高以避免被封
TIMEOUT = 15
MAX_ARTICLES_PER_DOMAIN = 10  # 每个域名最多抓取的文章数
# ==================== 【配置结束】====================

class SmartAwardCrawler:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update(HEADERS)
        self.results = []
        self.processed_urls = set()

    def construct_search_url(self, domain, keyword):
        """为不同媒体网站构造站内搜索URL"""
        encoded_keyword = quote(keyword)
        
        # 不同网站的搜索URL格式不同
        search_patterns = {
            "people.com.cn": f"http://search.people.com.cn/cn/search?keyword={encoded_keyword}",
            "xinhuanet.com": f"http://so.news.cn/getNews?keyword={encoded_keyword}",
            "cctv.com": f"http://search.cctv.com/search.php?qtext={encoded_keyword}",
            "chinanews.com": f"http://sousuo.chinanews.com/search?keyword={encoded_keyword}",
            "gmw.cn": f"http://search.gmw.cn/search.jsp?keyword={encoded_keyword}",
            "huanqiu.com": f"http://search.huanqiu.com/search?keyword={encoded_keyword}",
            "ce.cn": f"http://search.ce.cn/s?key={encoded_keyword}",
            "chinadaily.com.cn": f"http://www.chinadaily.com.cn/search?q={encoded_keyword}",
            "china.com.cn": f"http://search.china.com.cn/search?q={encoded_keyword}",
            "youth.cn": f"http://search.youth.cn/search?keyword={encoded_keyword}",
        }
        
        return search_patterns.get(domain, f"http://{domain}/search?q={encoded_keyword}")

    def extract_links_from_search(self, soup, base_url):
        """从搜索结果页面提取文章链接"""
        article_links = []
        
        # 常见搜索结果页面中的链接选择器
        link_selectors = [
            '.search-result-list a', '.news-list a', '.article-list a',
            '.result-list a', '.list-box a', 'h3 a', '.title a'
        ]
        
        for selector in link_selectors:
            links = soup.select(selector)
            for link in links:
                href = link.get('href')
                if href and not href.startswith(('javascript:', 'mailto:', '#')):
                    full_url = urljoin(base_url, href)
                    if self.is_valid_article_url(full_url):
                        article_links.append(full_url)
        
        return list(set(article_links))  # 去重

    def is_valid_article_url(self, url):
        """判断是否为有效的文章URL"""
        # 排除非文章链接
        excluded_exts = ['.pdf', '.doc', '.docx', '.jpg', '.png', '.gif', '.zip', '.rar']
        excluded_terms = ['video', 'photo', 'gallery', 'download', 'javascript:']
        
        if any(ext in url.lower() for ext in excluded_exts):
            return False
        if any(term in url.lower() for term in excluded_terms):
            return False
        
        # 包含文章相关路径的更可能是真实报道
        article_indicators = ['news', 'article', 'content', 'story', 'publish']
        if any(indicator in url.lower() for indicator in article_indicators):
            return True
            
        return True  # 默认允许

    def extract_article_content(self, soup, url):
        """提取文章主要内容"""
        # 提取标题
        title_selectors = ['h1', '.article-title', '.title', 'head title']
        title = "无标题"
        for selector in title_selectors:
            element = soup.select_one(selector)
            if element and element.get_text().strip():
                title = element.get_text().strip()
                break

        # 提取正文 - 多种选择器尝试
        content_selectors = [
            '.article-content', '.content', '.article', '.main-content',
            '#articleContent', '.text', '.content-main', '.TRS_Editor',
            '.article-body', '.main-body'
        ]
        
        content_text = ""
        for selector in content_selectors:
            content_elem = soup.select_one(selector)
            if content_elem:
                paragraphs = content_elem.find_all('p')
                if paragraphs:
                    content_text = ' '.join([p.get_text().strip() for p in paragraphs if p.get_text().strip()])
                    break
        
        # 备用方案: 提取所有段落
        if not content_text:
            all_paragraphs = soup.find_all('p')
            content_text = ' '.join([p.get_text().strip() for p in all_paragraphs if len(p.get_text().strip()) > 30])

        # 提取发布时间
        date_patterns = [r'\d{4}-\d{2}-\d{2}', r'\d{4}年\d{1,2}月\d{1,2}日', r'\d{4}/\d{2}/\d{2}']
        publish_date = "未知"
        
        date_selectors = [
            '.publish-time', '.date', '.time', '.source',
            '[property*="time"]', 'meta[name="publishdate"]',
            'meta[property*="date"]'
        ]
        
        for selector in date_selectors:
            element = soup.select_one(selector)
            if element:
                date_str = element.get('content', '') if element.name == 'meta' else element.get_text()
                if date_str:
                    for pattern in date_patterns:
                        match = re.search(pattern, date_str)
                        if match:
                            publish_date = match.group()
                            break
                    if publish_date != "未知":
                        break

        return {
            'title': title,
            'content': content_text[:1000] + '...' if len(content_text) > 1000 else content_text,
            'publish_date': publish_date,
            'url': url,
            'source': urlparse(url).netloc,
            'crawl_time': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }

    def crawl_domain(self, domain):
        """爬取单个域名下的相关内容"""
        print(f"\n开始处理域名: {domain}")
        
        for keyword in SEARCH_KEYWORDS:
            try:
                print(f"  搜索关键词: {keyword}")
                
                # 构造搜索URL
                search_url = self.construct_search_url(domain, keyword)
                print(f"  搜索URL: {search_url}")
                
                # 请求搜索页面
                time.sleep(random.uniform(*REQUEST_DELAY))
                response = self.session.get(search_url, timeout=TIMEOUT)
                response.encoding = response.apparent_encoding or 'utf-8'
                
                if response.status_code != 200:
                    print(f"  搜索请求失败，状态码: {response.status_code}")
                    continue
                
                # 解析搜索结果
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # 提取文章链接
                article_urls = self.extract_links_from_search(soup, search_url)
                print(f"  找到 {len(article_urls)} 个可能相关的文章链接")
                
                # 抓取文章内容
                success_count = 0
                for article_url in article_urls[:MAX_ARTICLES_PER_DOMAIN]:
                    if article_url in self.processed_urls:
                        continue
                    
                    try:
                        time.sleep(random.uniform(*REQUEST_DELAY))
                        article_response = self.session.get(article_url, timeout=TIMEOUT)
                        article_response.encoding = article_response.apparent_encoding or 'utf-8'
                        
                        if article_response.status_code == 200:
                            article_soup = BeautifulSoup(article_response.text, 'html.parser')
                            article_data = self.extract_article_content(article_soup, article_url)
                            
                            # 检查是否真的包含关键词
                            content_to_check = article_data['title'] + ' ' + article_data['content']
                            if any(kw in content_to_check for kw in SEARCH_KEYWORDS):
                                self.results.append(article_data)
                                self.processed_urls.add(article_url)
                                success_count += 1
                                print(f"    ✓ 成功抓取: {article_data['title']}")
                            else:
                                print(f"    ✗ 内容不相关: {article_data['title']}")
                        else:
                            print(f"    ✗ 文章请求失败: {article_url}")
                            
                    except Exception as e:
                        print(f"    ✗ 处理文章出错: {article_url}, 错误: {e}")
                        continue
                
                print(f"  关键词 '{keyword}' 抓取完成，成功: {success_count} 篇")
                
            except Exception as e:
                print(f"  处理关键词 '{keyword}' 时出错: {e}")
                continue

    def save_results(self):
        """保存结果到文件"""
        if not self.results:
            print("未抓取到任何结果，不生成输出文件")
            return False
        
        # 保存为CSV
        df = pd.DataFrame(self.results)
        df.to_csv(OUTPUT_CSV, index=False, encoding='utf_8_sig')
        
        # 保存为JSON
        with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, ensure_ascii=False, indent=2)
        
        print(f"\n抓取完成! 共获取 {len(self.results)} 篇报道")
        print(f"结果已保存至: {OUTPUT_CSV} 和 {OUTPUT_JSON}")
        return True

    def run(self):
        """运行爬虫"""
        print("开始智能抓取主流媒体五四奖章报道...")
        print("=" * 60)
        
        for domain in MEDIA_DOMAINS:
            self.crawl_domain(domain)
            time.sleep(random.uniform(5, 10))  # 域名间延迟
        
        return self.save_results()

# 运行爬虫
if __name__ == "__main__":
    crawler = SmartAwardCrawler()
    try:
        success = crawler.run()
        if success:
            print("\n抓取到的报道列表:")
            for i, item in enumerate(crawler.results, 1):
                print(f"{i}. [{item['source']}] {item['title']} ({item['publish_date']})")
        else:
            print("未能抓取到任何报道，请检查网络连接或尝试调整参数")
    except Exception as e:
        print(f"爬虫运行出错: {e}")
    finally:
        crawler.session.close()