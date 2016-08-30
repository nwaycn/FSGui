__author__ = 'Think'
#coding:utf-8
'''#coding:utf-8
import httplib
import urllib
import urllib2
import json
from xml.etree.ElementTree import XML
import xml.dom.minidom

url = 'http://192.168.1.115:8082/api'


#url = 'http://www.someserver.com/cgi-bin/register.cgi'
values = {'name' : 'Michael Foord',
       'location' : 'Northampton',
       'language' : 'Python' }
data = urllib.urlencode(values)
req = urllib2.Request(url, data)   #send post
response = urllib2.urlopen(req)
page = response.read()
'''
from rest_fs_client import *
import time

if __name__ == "__main__":
    login("admin","admin")
    #get_uuid()


    originate(get_uuid(),'1002','1002','1000','','','1002','1000','false','false')
    time.sleep(1)
    get_phone_uuid('1002')

    hold('1002')
    unhold('1002')
    #hangup('1002')