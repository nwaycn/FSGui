是呼入呼出都通知，还是只呼入或呼出，在Nway.conf配置文件中有个

#all,caller,callee
#all 所有 
#caller 呼出
#callee 呼入
event_direction=caller
在这里我们假设有一个工号为 8000,密码是1234，绑定的坐席是1001

python代码需要 pip install websocket-client

然后存为wspython.py

python wspython.py 即可

注册一个分机到139.196.40.50 ，这里的例子是1001,139.196.40.50:5062,密码1234 就等着看吧

```
__author__ = 'lihao,18621575908'

#https://github.com/websocket-client/websocket-client
import websocket
try:
    import thread
except ImportError:  # TODO use Threading instead of _thread in python3
    import _thread as thread
import time
import sys
import json

def on_message(ws, message):
    print(message)


def on_error(ws, error):
    print(error)


def on_close(ws):
    print("### closed ###")


def on_open(ws):
    def run(*args):

        s = '{"Agent":"8000","Password":"1234","Extension":"1001"}'

        ws.send(s)
        time.sleep(1)
     thread.start_new_thread(run, ())
if __name__ == "__main__":
    websocket.enableTrace(True)
    if len(sys.argv) < 2:
        host = "ws://139.196.40.50:8084/fsgui"
    else:
        host = sys.argv[1]
    ws = websocket.WebSocketApp(host,
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close)
    ws.on_open = on_open
    ws.run_forever()
    
```
那么就会有关分机1001的消息都会送过来

```
--- request header ---
GET /fsgui HTTP/1.1
Upgrade: websocket
Connection: Upgrade
Host: 139.196.40.50:8084
Origin: http://139.196.40.50:8084
Sec-WebSocket-Key: bDwhhTj9SsceStSxymMF+w==
Sec-WebSocket-Version: 13


-----------------------
--- response header ---
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: 1Es8igdAgQfSXWXoDx4j2rwpOck=
-----------------------
send: '\x81\xb54\xfedSO\xdc%4Q\x90\x10q\x0e\xdc\\c\x04\xceF\x7f\x16\xae\x05 G\x89\x0b!P\xdc^q\x05\xccWg\x16\xd2F\x16L\x8a\x01=G\x97\x0b=\x16\xc4Fb\x04\xceUqI'
{"Result":200,"Message":"ok"}

{"Evt_name":"1","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"10","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"3","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"6","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"11","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Caller_number":"1001","Dest_number":"2300","Gateway_name":"","Origination_name":"1001","Direction":"inbound","Start_time":"1490573255048643097","Answer_time":"0","Hangup_time":"1490573257092624848"}
```

以下部分为使用支持websocket的browser实现
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Sample of websocket with golang</title>

    <script src="jquery-3.2.0.min.js"></script>
    <script language="javascript"type="text/javascript">
      $(function() {
        var ws = new WebSocket("ws://192.168.1.10:8084/fsgui");
        ws.onmessage = function(e) {
          $('<li>').text(event.data).appendTo($ul);
        };
        ws.onopen= function(evt){
            ws.send("{\"Agent\":\"8000\",\"Password\":\"1234\",\"Extension\":\"1001\"}");

        }
        var $ul = $('#msg-list');
        $('#sendBtn').click(function(){
          var data = $('#name').val();
          ws.send(data);
        });
      });
    </script>
</head>
<body>
<input id="name" type="text"/>
<input type="button" id="sendBtn" value="send"/>
<ul id="msg-list"></ul>
</body>
</html>
```
输出
```
{"Result":200,"Message":"ok"}
{"Evt_name":"1","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"10","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"3","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"7","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"1","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"9","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"6","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Evt_name":"11","Callin_number":"1001","Dest_number":"2300","Domain":"","Dtmf":"","Gateway":"","Originate_number":"","Direction":"inbound"}
{"Caller_number":"1001","Dest_number":"2300","Gateway_name":"","Origination_name":"1001","Direction":"inbound","Start_time":"1490678017943194605","Answer_time":"1490678021438828016","Hangup_time":"1490678021588782886"}
```
