import pandas as pd

# 读取Excel文件（支持.xls和.xlsx格式）
excel_file = pd.read_excel('Python/统计建模/初步数据收集.xlsx', sheet_name='Sheet1')  # 可指定工作表名

# 转换为CSV
excel_file.to_csv('output.csv', index=False, encoding='utf-8')