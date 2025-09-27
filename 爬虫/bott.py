import sqlite3

# 连接到数据库文件。如果文件不存在，会自动在当前目录创建。
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# 创建一张名为 'users' 的表
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    age INTEGER
)
''')

# 插入一些示例数据
sample_users = [
    ('张三', 'zhangsan@example.com', 28),
    ('李四', 'lisi@example.com', 32),
    ('王五', 'wangwu@example.com', 25)
]

cursor.executemany('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', sample_users)

# 提交事务，确保更改保存到数据库
conn.commit()

# 查询并打印数据，验证是否成功
cursor.execute('SELECT * FROM users')
print("当前 users 表中的数据:")
for row in cursor.fetchall():
    print(row)

# 关闭连接
conn.close()