# -*- coding: cp936 -*-
import os
import shutil
os.chdir("E:\mPython\PythonExp\exp1")#Change the current work directory
print "Operate System Name: ",os.name;#Operate system name
print "Current Work Directory:",str(os.getcwd())#Get current work directory
print "Current Directories and Files List:",os.listdir(os.getcwd())#List all directory and file name
print "Split path into directory and file name",os.path.split("E:\mPython\PythonExp\exp1\exp_os.py")
print "os.path.exist() check the existense of a directory",os.path.exists("E:\mPython")
if os.path.exists("Make A Dir1"):
    shutil.rmtree("Make A Dir1")
if os.path.exists("Single Dir"):
    os.rmdir("Single Dir")
if os.path.exists("rtest.txt"):
    os.remove("rtest.txt")

print "Make a Dir..."
os.makedirs("Make A Dir1\Make Second Dir")
print "Make second Dir..."
os.makedirs("Make A Dir1\Make Second Dir1")
print "Remove Secon Dir..."
os.removedirs("Make A Dir1\Make Second Dir1")
print "Make a Single Dir..."
os.mkdir("Single Dir")
f = open("test.txt", "w+")
f.write("Hello! This is a test file of Python language.")
f.close()
f = open("new text.txt", "w+")
f.write("Hello! This is also a test file of Python language")
f.close()
print "List all the directorys an files in a directory:"
print str(os.listdir(os.getcwd()))
print "Remove a file(test.txt)..."
os.remove("test.txt")
print "After Removing:"
print str(os.listdir(os.getcwd()))
print "Rename a file...new text->rtest.txt"
os.rename("new text.txt","rtest.txt")
print "After Rename:"
print str(os.listdir(os.getcwd()))
print "Obtain file Information.."
print "The Info of rtest.txt:"
print str(os.stat("rtest.txt"))


