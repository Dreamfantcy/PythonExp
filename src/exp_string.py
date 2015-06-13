'''
Created on 2015-6-8

@author: Yang
'''

import string

str1 = "hello world"
print "String Application Demo:"
print "1.Capitallized a string..."
print string.capitalize(str1)
str2 = "Hello\tworld and\nHi\tpython!"
print str2
sep = "\"o\""
print string.expandtabs(str2, 4)
print "Find ",sep," in the str1..."
print "The index of",sep,"is ",string.find(str1,"o")
print "Find highest index of",sep,"in the str1..."
print "The highest index of",sep,"is ",string.rfind(str1,"o")
print "The counts of",sep,"in the str1 is ",string.count(str1,"o")
str3 = "193.168.1.1"
print "Split {0} via \".\"".format(str3),string.split(str3,'.')
words1 = ["Hello","Python","World"]
print string.join(words1, '-')
print "|","{:<30}".format("Left Aligned"),"|"
print "|","{:>30}".format("Right Aligned"),"|"
print "|","{:^30}".format("Center Aligned"),"|"
print "|","{:*^30}".format("Center Aligned"),"|"