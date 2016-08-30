restful接口

token 认证:

curl -d '{"username": "admin", "password": "admin"}' -H "Content-Type:application/json" http://192.168.1.115:8082/api/login

获取一个系统生成的uuid:

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUxNzMyNzUsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTE2OTY3NX0.bcg0zDwqwyczAFzdgzlW3eTwIkE1crHXgr97HJd8Bo8" http://192.168.1.115:8082/api/get_uuid

获取一个正在通话中的电话的uuid：

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUxNzMyNzUsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTE2OTY3NX0.bcg0zDwqwyczAFzdgzlW3eTwIkE1crHXgr97HJd8Bo8" http://192.168.1.115:8082/api/get_phone_uuid/1002

挂断一个正通话中电话

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyMDU3OTYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTIwMjE5Nn0.WvLVi8D90LavD_BlQENMudGpMMDRF21bwJqnF90H_HM" http://192.168.1.115:8082/api/hangup/1002

hold一个通话

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjMzNzIsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI1OTc3Mn0.f0C4IudCmjZdo1XpRztVhlhPzObWgzxHuzd6ydYVFL8" http://192.168.1.115:8082/api/hold/1002

unhold一个通话

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjMzNzIsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI1OTc3Mn0.f0C4IudCmjZdo1XpRztVhlhPzObWgzxuzd6ydYVFL8" http://192.168.1.115:8082/api/unhold/1002

发起一个呼叫

curl -H "Content-Type: application/json" -d '{"Job_uuid":"1234","Callername":"1002","Callernum":"1002","Calleenum":"1000","A_gatewayname":"","B_gatewayname":"","A_effective_caller_id_num":"1002","B_effective_caller_id_num":"1000","A_external":"false","B_external":"false"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjQ4NjcsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2MTI2N30.FNK8c2CyAfFbHJey7irXJb7C5TtrsRqEDXQJlWZxxzU" http://192.168.1.115:8082/api/originate

按uuid桥接两个通话通道

curl -H "Content-Type: application/json" -d '{"A_uuid":"aleguuid","B_uuid":"bleguuid"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjQ4NjcsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2MTI2N30.FNK8c2CyAfFbHJey7irXJb7C5TtrsRqEDXQJlWZxxzU" http://192.168.1.115:8082/api/bridge

按号码桥接两个通话通道

curl -H "Content-Type: application/json"  -d '{"A_phone":"1002","B_phone":"1003"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjA0NTQsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI1Njg1NH0.BbixrdNhbnaR265dWsoekrhomfglJLJVTF0n1mYrwyI" http://192.168.1.115:8082/api/bridge_phone

park一个通话

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjQ4NjcsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2MTI2N30.FNK8c2CyAfFbHJey7irXJb7C5TtrsRqEDXQJlWZxxzU" http://192.168.1.115:8082/api/park/1002

抢接一个来电

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjkyMDMsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NTYwM30.ER1yOKxhBwVqY9IS18DOOZox15eOVUJR7bJF1mjtsfM" http://192.168.1.115:8082/api/intercept/1002

由平台应答

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjkyMDMsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NTYwM30.ER1yOKxhBwVqY9IS18DOOZox15eOVUJR7bJF1mjtsfM" http://192.168.1.115:8082/api/answer/1002

按号码监听

curl -H "Content-Type: application/json" -d '{"EvdedPhone":"1002","EvdPhone":"1003","EvdGateway":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/eavesdrop

多方通话

curl -H "Content-Type: application/json" -d '{"EvdedPhone":"1002","EvdPhone":"1003","EvdGateway":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzE0MTQsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzgxNH0.sDzTstNN3Urd2uNZf82qpg0CvaEFHeDuczOi-NTNI3U" http://192.168.1.115:8082/api/threeway

耳语

curl -H "Content-Type: application/json" -d '{"EvdedPhone":"1002","EvdPhone":"1003","EvdGateway":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHiOjE0NjUyNzE0MTQsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzgxNH0.sDzTstNN3Urd2uNZf82qpg0CvaEFHeDuczOi-NTNI3U" http://192.168.1.115:8082/api/whisper

preanswer

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzE3MTAsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2ODExMH0.ElXZwvGwU0VB9Mf1ZN6KRcjEbJXg9QEE3oYEpbjy3s" http://192.168.1.115:8082/api/preanswer/1002

给已answer的通道放音

curl -H "Content-Type: application/json" -d '{"PhoneNumber":"1002","FilePath":"D:\nwaytest.wav","Loopplay":"true"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6kpXVCJ9.eyJleHAiOjE0NjUyNzE3MTAsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2ODExMH0.ElXZwvGwU0VB9Mf1ZN6KRcjEbJXg9QEEN3oYEpbjy3s" http://192.168.1.115:8082/api/playback

中止相关操作

curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzI3MzYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2OTEzNn0.ztfc77equjck1NkMUAM-Qe-anwv0fYSBRTTIyL88PLg" http://192.168.1.115:8082/api/break/1002

录音

curl -H "Content-Type: application/json" -d '{"PhoneNumber":"1002","Filepath":"nwaytestr.wav","Flag":"start","Limit":"0"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzE3MTAsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2ODExMH0.ElXZwvGwU0VB9Mf1ZN6KRcjEbJXg9QEEN3oYEpbjy3s" http://192.168.1.115:8082/api/record

发送dtmf

curl -H "Content-Type: application/json" -d '{"PhoneNumber":"1002","Dtmf":"18621575908"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzE3MTAsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2ODExMH0.ElXZwvGwU0VB9Mf1ZN6KRcjEbJXg9QEEN3oYEpbjy3s" http://192.168.1.115:8082/api/senddtmf

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
会议相关

/这里的会议以3000为主，主被叫号码1002,1003,1000,1004/

    //  conference

//创建一个3000名称的会议室，主持人号码是1002,不经过落地网关

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","PhoneNumber":"1002","GatewayName":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_create

     "/conference_create"

//增加一个成员并呼叫

//由系统呼叫号码为1002的号码，不经过落地网关，IsMute为默认是禁止发方与否

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","PhoneNumber":"1002","GatewayName":"","IsMute":"false"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_add

     "/conference_add"

//获得一个会议中某号码的memberid

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","CallerNumber":"1002"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_memberid

    "/conference_memberid"

//踢掉所有与会成员

     curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjkyMDMsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NTYwM30.ER1yOKxhBwVqY9IS18DOOZox15eOVUJR7bJF1mjtsfM" http://192.168.1.115:8082/api/conference_kick_all/3000

     "/conference_kick_all/:conference"

//会议自动增益

    //param on/off
    //level a number

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","param":"on","level":"4"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_agc

     "/conference_agc"

//检查录音状态

     curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjkyMDMsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NTYwM30.ER1yOKxhBwVqY9IS18DOOZox15eOVUJR7bJF1mjtsfM" http://192.168.1.115:8082/api/conference_chkrecord/3000

     "/conference_chkrecord"

//禁听
//memberid是用getmemberid获得 //Flag |all|last|non_moderator

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_deaf

    "/conference_deaf"

//发送dtmf到会议成员 //Flag |all|last|non_moderator

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":"", "Dtmf":"520"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_dtmf

    "/conference_dtmf"

//调整某个会议成员的energy //Flag |all|last|non_moderator //Newval

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":"", "Newval":"520"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_energy

    "/conference_energy"

//进入会议时的语音 //flag on|off|none|file //Filename Flag为file时有效 curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Flag":"3","Filename":""}' -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_enter_sound

   "/conference_enter_sound"

//退出会议的语音

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Flag":"3","Filename":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_exit_sound

     "/conference_exit_sound"

// "切换会议人员状态" //Flag member_id|all|last|non_moderator

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_floor

     "/conference_floor"

//挂断某个member,但不播放退出音

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_hup

    "/conference_hup"

//挂断某个member,播放退出音

   curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_kick

    "/conference_kick"

//列出会议 //Flag [pretty|summary|count|delim ]

    curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjkyMDMsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NTYwM30.ER1yOKxhBwVqY9IS18DOOZox15eOVUJR7bJF1mjtsfM" http://192.168.1.115:8082/api/conference_list/pretty

   "/conference_list/:flag"

//锁定某个会议，不允许新的人员进入

     curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjkyMDMsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NTYwM30.ER1yOKxhBwVqY9IS18DOOZox15eOVUJR7bJF1mjtsfM" http://192.168.1.115:8082/api/conference_lock/3000

    "/conference_lock/:conference"

//解锁某个会议，允许新的会议人员进入

     curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjkyMDMsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NTYwM30.ER1yOKxhBwVqY9IS18DOOZox15eOVUJR7bJF1mjtsfM" http://192.168.1.115:8082/api/conference_unlock/3000

    "/conference_unlock/:conference"         
    //////////////////////////////////////////

//禁言 //Flag |all|last|non_moderator

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":"","Quiet":"quiet"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_mute

    "/conference_mute"

//允许发言 //Flag |all|last|non_moderator

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":"","Quiet":"quiet"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_unmute                        
     "/conference_unmute"

//移除当前会议的录音 //Flag |all

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Flag":"all"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_norecord                                             
     "/conference_norecord"

//会议暂停录音 //Flag

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Flag":"all"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_pause                                                   
     "/conference_pause"

//设置会议呼入时的口令 //Flag

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Flag":"all"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_pin                                                                               
     "/conference_pin"

//播放相关文件给会议 //Flag [{vol=,full-screen=true,png_ms=100}] [async| [nomux]]

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Flag":"all"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_play                                                                                                             
     "/conference_play"

//会议录音 //Flag

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Flag":"all"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_record                                                                                                                                        
     "/conference_record"

//会议录音控制

// recording start

// recording check

// recording stop |all

// recording pause

// recording resume

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Flag":"start","Filename":"/home/recording/abc.wav"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_recording                                                   
     "/conference_recording"

//恢复会议录音
//Flag

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Flag":"/home/recording/abc.wav"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_resume                                                                                                                                                           
     "/conference_resume"


     "/conference_say"

//设置一些会议参数

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Param":"Value","Filename":"/home/recording/abc.wav"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_set                                                                           
     "/conference_set"

//停止播放一些语音 //Flag [current|all] []

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_stop                            
     "/conference_stop"

//切换禁言 //Flag |all|last|non_moderator

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":"","Quiet":"quiet"}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_tmute                                    
     "/conference_tmute"

//解除禁听 //Flag |all|last|non_moderator

    curl -H "Content-Type: application/json" -d '{"ConferenceName":"3000","Member_id":"3","Flag":""}'  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNzA4MjYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NzIyNn0.cSUqEoc5hmZ747y6LP6llmfChoOahXN0BOwi-rxDmq8" http://192.168.1.115:8082/api/conference_undeaf                                                             
     "/conference_undeaf"                     
    //////////////////////////////////////////

//移除会议口令

     curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjkyMDMsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NTYwM30.ER1yOKxhBwVqY9IS18DOOZox15eOVUJR7bJF1mjtsfM" http://192.168.1.115:8082/api/conference_nopin/3000

    "/conference_nopin/:conference"

//暂停播放

     curl  -H "Authorization:Nway eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjUyNjkyMDMsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTQ2NTI2NTYwM30.ER1yOKxhBwVqY9IS18DOOZox15eOVUJR7bJF1mjtsfM" http://192.168.1.115:8082/api/conference_pause_play/3000

     "/conference_pause_play/:conference"

    //
