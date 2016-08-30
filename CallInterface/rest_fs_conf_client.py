__author__ = 'Think'
#coding:utf-8
import requests
import json
baseurl = 'http:#192.168.1.115:8082/api/'
import  global_vars

 
		#  conference
		#"/conference_create", nway_rest_create_conference),
def conference_create(ConferenceName, PhoneNumber, GatewayName):
    url = baseurl +"conference_create"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "PhoneNumber":"'+ PhoneNumber +'","GatewayName":"'+GatewayName+'"}'

    response = requests.post(url, data=data,headers=headers)
    print(response.content)



		#增加一个成员并呼叫
		#"/conference_add", nway_rest_add_conference),
def conference_add(ConferenceName, PhoneNumber, GatewayName, IsMute):
    url = baseurl +"conference_add"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "PhoneNumber":"'+ PhoneNumber +'","GatewayName":"'+GatewayName+'","IsMute":"'+ IsMute+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#踢掉所有与会成员
		#"/conference_kick_all/:conference", nway_rest_kick_all_conference),

def conference_kick_all(ConfName):
    url = baseurl +"conference_kick_all/"+ ConfName
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)


		#会议自动增益
		#"/conference_agc", nway_rest_con_agc),

def conference_agc(ConferenceName, Param, Level):
    url = baseurl +"conference_agc"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Param":"'+ Param +'","Level":"'+Level+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_chkrecord", nway_rest_con_chkrecord),

def conference_chkrecord(ConfName):
    url = baseurl +"conference_chkrecord/"+ ConfName
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)
		#"/conference_deaf", nway_rest_con_deaf),

def conference_deaf(ConferenceName, Member_id, Flag):
    url = baseurl +"conference_deaf"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Member_id":"'+ Member_id +'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_dtmf", nway_rest_con_dtmf),
def conference_dtmf(ConferenceName, Member_id, Flag, Dtmf):
    url = baseurl +"conference_dtmf"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Member_id":"'+ Member_id +'","Flag":"'+Flag+'","Dtmf":"'+Dtmf+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_energy", nway_rest_con_energy),
def conference_energy(ConferenceName, Member_id, Flag, Newval):
    url = baseurl +"conference_energy"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Member_id":"'+ Member_id +'","Flag":"'+Flag+'","Newval":"'+Newval+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_enter_sound", nway_rest_con_enter_sound),
def conference_enter_sound(ConferenceName, Flag, Filename):
    url = baseurl +"conference_enter_sound"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Flag":"'+ Flag +'","Filename":"'+Filename+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)
		#"/conference_exit_sound", nway_rest_con_exit_sound),

def conference_exit_sound(ConferenceName, Flag, Filename):
    url = baseurl +"conference_exit_sound"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Flag":"'+ Flag +'","Filename":"'+Filename+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_floor", nway_rest_con_floor),
def conference_floor(ConferenceName, Member_id, Flag):
    url = baseurl +"conference_floor"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Member_id":"'+ Member_id +'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)
		#"/conference_hup", nway_rest_con_hup),

def conference_hup(ConferenceName, Member_id, Flag):
    url = baseurl +"conference_hup"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Member_id":"'+ Member_id +'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)


		#"/conference_kick", nway_rest_con_kick),
def conference_kick(ConferenceName, Member_id, Flag):
    url = baseurl +"conference_kick"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Member_id":"'+ Member_id +'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)


		#"/conference_list/:flag", nway_rest_con_list),
def conference_list(Flag):
    url = baseurl +"conference_chkrecord/"+ Flag
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

		#"/conference_lock/:conference", nway_rest_con_lock),
def conference_lock(ConfName):
    url = baseurl +"conference_lock/"+ ConfName
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

		#"/conference_unlock/:conference", nway_rest_con_unlock),
def conference_unlock(ConfName):
    url = baseurl +"conference_unlock/"+ ConfName
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

		############################/
		#"/conference_mute", nway_rest_con_mute),
def conference_mute(ConferenceName, Member_id, Flag, Quiet):
    url = baseurl +"conference_mute"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Member_id":"'+ Member_id +'","Flag":"'+Flag+'","Quiet":"'+Quiet+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_unmute", nway_rest_con_unmute),
def conference_unmute(ConferenceName, Member_id, Flag, Quiet):
    url = baseurl +"conference_unmute"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Member_id":"'+ Member_id +'","Flag":"'+Flag+'","Quiet":"'+Quiet+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_norecord", nway_rest_con_norecord),
def conference_norecord(ConferenceName, Flag):
    url = baseurl +"conference_norecord"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName+'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_pause", nway_rest_con_pause),
def conference_pause(ConferenceName, Flag):
    url = baseurl +"conference_pause"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName+'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_pin", nway_rest_con_pin),
def conference_pin(ConferenceName, Flag):
    url = baseurl +"conference_pin"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName+'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		##"/conference_nopin", nway_rest_con_nopin),
        #"/conference_nopin/:conference", nway_rest_con_nopin),
def conference_nopin(ConfName):
    url = baseurl +"conference_nopin/"+ ConfName
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)

		#"/conference_play", nway_rest_con_play),
def conference_play(ConferenceName, Flag):
    url = baseurl +"conference_play"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName+'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_record", nway_rest_con_record),
def conference_record(ConferenceName, Flag):
    url = baseurl +"conference_record"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName+'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_recording", nway_rest_con_recording),
def conference_recording(ConferenceName, Flag, Filename):
    url = baseurl +"conference_recording"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Filename":"'+ Filename +'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_resume", nway_rest_con_resume),
def conference_resume(ConferenceName, Flag):
    url = baseurl +"conference_resume"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName+'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)


		#"/conference_say", nway_rest_con_say),
def conference_say(ConferenceName, Flag):
    url = baseurl +"conference_say"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName+'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_set", nway_rest_con_set),
def conference_set(ConferenceName, Param, Value):
    url = baseurl +"conference_recording"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Param":"'+ Param +'","Value":"'+Value+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)


		#"/conference_stop", nway_rest_con_stop),
def conference_stop(ConferenceName, Flag, Filename):
    url = baseurl +"conference_stop"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Filename":"'+ Filename +'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)
		#"/conference_tmute", nway_rest_con_tmute),
def conference_tmute(ConferenceName, Member_id, Flag, Quiet):
    url = baseurl +"conference_tmute"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Member_id":"'+ Member_id +'","Flag":"'+Flag+'","Quiet":"'+Quiet+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		#"/conference_undeaf", nway_rest_con_undeaf),
def conference_undeaf(ConferenceName, Flag, Filename):
    url = baseurl +"conference_undeaf"
    headers= {'Content-type': 'application/json','Authorization':'Nway '+ global_vars.token}
    data = '{"ConferenceName":"'+ ConferenceName + '", "Filename":"'+ Filename +'","Flag":"'+Flag+'"}'
    response = requests.post(url, data=data,headers=headers)
    print(response.content)

		############################/

		#"/conference_pause_play/:conference", nway_rest_con_pause_play),
def conference_pause_play(ConfName):
    url = baseurl +"conference_pause_play/"+ ConfName
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)
		#
		#"/conference_memberid", nway_rest_con_get_memberid),
def conference_memberid(ConfName):
    url = baseurl +"conference_memberid/"+ ConfName
    headers= {'Authorization':'Nway '+ global_vars.token}
    response = requests.get(url,headers=headers)
    print(response.content)