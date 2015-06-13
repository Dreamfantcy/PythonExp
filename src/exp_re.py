
#coding=utf-8
import re

filepath = "E:\\mPython\\PythonExp\\需要的请留下邮箱——多年珍藏的经典之作，现在巨献.html"
mailprog = re.compile(r'\w+@\w+\.\w+')
f = open(filepath.decode('utf8'),'r')
for lines in f:
    m=mailprog.findall(lines)
    if m:
        for group in m:
            print group
f.close()
