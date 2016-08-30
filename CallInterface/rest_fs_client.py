__author__ = 'Think'
#coding:utf-8
import requests
import json
baseurl = 'http://192.168.1.115:8082/api/'
import  global_vars

#s = requests.session()
def login(username,password):
    url = baseurl+ "login"
    data = '{"username":"'+ username + '", "password":"'+ password +'"}'

    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    response = requests.post(url, data=data,headers=headers)

    if (response.ok):
        rdata = response.content
        jData = json.loads(rdata)
        global_vars.token = jData['token']
    else:
        print(response.content)



def get_uuid():
    url = baseurl +"get_uuid"
    headers= {'Authorization':'Nway '+ global_vars.token}

    response = requests.get(url,headers=headers)
    if (response.ok):
        jData = json.loads(response.content)
        uuid = jData['uuid']
        print(uuid)
        return uuid
    else:
        print(response.content)
    return ''

def get_phone_uuid(PhoneNumber):
    url = baseurl +"get_phone_uuid/"+ PhoneNumber
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)
    if (response.ok):
        jData = json.loads(response.content)
        uuid = jData['uuid']
        print(uuid)
        return uuid
    else:
        print(response.content)
    return ''

def hangup(PhoneNumber):
    url = baseurl +"hangup/"+ PhoneNumber
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)

    print(response.content)

def hold(PhoneNumber):
    url = baseurl +"hold/"+ PhoneNumber
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

def unhold(PhoneNumber):
    url = baseurl +"unhold/"+ PhoneNumber
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)


'''Job_uuid, Callername, Callernum, Calleenum, A_gatewayname,
	B_gatewayname, A_effective_caller_id_num, B_effective_caller_id_num string
	A_external, B_external string
'''
def originate(job_uuid,callername,callernum,calleenum,agateway,bgateway,aeff_id_num, beff_id_num,a_external,b_external):
    url = baseurl +"originate"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"Job_uuid":"'+ job_uuid + '", "Callername":"'+ callername +'"'
    data += ',"Callernum":"'+ callernum +'", "Calleenum":"' + calleenum +'"'
    data += ',"A_gatewayname":"'+ agateway + '","B_gatewayname":"' + bgateway + '"'
    data += ',"A_effective_caller_id_num":"'+ aeff_id_num + '","B_effective_caller_id_num":"'+ beff_id_num+ '"'
    data += ',"A_external":"' + a_external +'","B_external":"'+ b_external +'"}'
    print(data)
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

def bridge( auuid,buuid):
    url = baseurl +"originate"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"A_uuid":"'+ auuid + '", "B_uuid":"'+ buuid +'"}'

    response = requests.post(url, data=data,headers=headers)
    print(response.content)

def bridge_phone(aphone,bphone):
    url = baseurl +"originate"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"A_phone":"'+ aphone + '", "B_phone":"'+ bphone +'"}'

    response = requests.post(url, data=data,headers=headers)
    print(response.content)


def park(PhoneNumber):
    url = baseurl +"park/"+ PhoneNumber
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

def intercept(PhoneNumber):
    url = baseurl +"intercept/"+ PhoneNumber
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

def answer(PhoneNumber):
    url = baseurl +"answer/"+ PhoneNumber
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

def eavesdrop(EvdedPhone, EvdPhone, EvdGateway):
    url = baseurl +"eavesdrop"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"EvdedPhone":"'+ EvdedPhone + '", "EvdPhone":"'+ EvdPhone +'","EvdGateway":"'+EvdGateway+'"}'

    response = requests.post(url, data=data,headers=headers)
    print(response.content)

def threeway(EvdedPhone, EvdPhone, EvdGateway):
    url = baseurl +"threeway"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"EvdedPhone":"'+ EvdedPhone + '", "EvdPhone":"'+ EvdPhone +'","EvdGateway":"'+EvdGateway+'"}'

    response = requests.post(url, data=data,headers=headers)
    print(response.content)

def whisper(EvdedPhone, EvdPhone, EvdGateway):
    url = baseurl +"whisper"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"EvdedPhone":"'+ EvdedPhone + '", "EvdPhone":"'+ EvdPhone +'","EvdGateway":"'+EvdGateway+'"}'

    response = requests.post(url, data=data,headers=headers)
    print(response.content)

def transfer(EvdedPhone, EvdPhone, EvdGateway):
    url = baseurl +"transfer"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"EvdedPhone":"'+ EvdedPhone + '", "EvdPhone":"'+ EvdPhone +'","EvdGateway":"'+EvdGateway+'"}'

    response = requests.post(url, data=data,headers=headers)
    print(response.content)

def preanswer(PhoneNumber):
    url = baseurl +"preanswer/"+ PhoneNumber
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

#// curl -H "Content-Type: application/json" -d '{"PhoneNumber":"1002","FilePath":"D:\\nwaytest.wav","Loopplay":"true"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6kpXVCJ9.eyJleHAiOjE0NjUyNzE3MTAsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2ODExMH0.ElXZwvGwU0VB9Mf1ZN6KRcjEbJXg9QEEN3oYEpbjy3s" http://192.168.1.115:8082/api/playback

def playback(PhoneNumber, FilePath, Loopplay):
    url = baseurl +"playback"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"PhoneNumber":"'+ PhoneNumber + '", "FilePath":"'+ FilePath +'","Loopplay":"'+Loopplay+'"}'

    response = requests.post(url, data=data,headers=headers)
    print(response.content)

def break_phone(PhoneNumber):
    url = baseurl +"break/"+ PhoneNumber
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

def send_dtmf(PhoneNumber, Dtmf):
    url = baseurl +"send_dtmf"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"PhoneNumber":"'+ PhoneNumber + '", "Dtmf":"'+ Dtmf +'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

def record(PhoneNumber, Filepath, Flag, Limit):
    url = baseurl +"transfer"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"PhoneNumber":"'+ PhoneNumber + '", "Filepath":"'+ Filepath +'","Flag":"'+Flag+'","Limit":"'+ Limit+ '"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)