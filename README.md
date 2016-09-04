# FSGui

QQ群： 293697898 FreeSWITCH+Kamailio+OpenSIPS

 FSGui是由上海宁卫信息技术有限公司自主研发的新一代的呼叫平台，它将云呼叫、VOIP、PSTN、IMS、DID、IVR等集成在一起，实现将IP网络和传统通信通过语音完美结合在一起。并为第三方呼叫及事件查询提供RESTful接口。
     
 针对FreeSWITCH开发的GUI及更底层的PBX功能扩展,小并发免费二进制
 
 整个系统分为如下的结构
 
 应用说明：
 
 WEBServer nway_pbx_web    用于处理所有的web访问，但不包括restful接口
 
 AUTHServer nway_pbx_auth  用于处理FreeSwitch的Register消息
 
 PBXServer nway_pbx        业务主应用，用于处理路由，网关，IVR等呼叫业务层
 
 FreeSwitch
 
 Postgresql
 
 Redis
 
 rings/common             用于报工号等通用的一些语音彩铃
 
 使用说明书：
 
 http://freeswitch.net.cn/100.html
 
 
 
 来去电，摘机，挂机，响铃等消息，使用代码
 
 https://github.com/nwaycn/FSGui/blob/master/EventOrCDR.py
 
 
 
 Restful接口调用示例：
 
 https://github.com/nwaycn/FSGui/tree/master/CallInterface
                                              
-------------------------------------------------------------------------------------------------------------------------------------
特别提醒： 注册防火墙

Windows下运行：

下载或用git clone windows binary package
https://github.com/nwaycn/FSGui/tree/master/Windows

web访问地址：

localhost:8080  默认用户名 admin,123456


先执行InstallPreService.bat后再执行 Start.bat,已测试windows 2003,2008,win10不可行

正常应会有nway_pbx_web.exe, nway_pbx_auth.exe, nway_pbx.exe三个启动，FreeSwitch和redis及Postgresql已作为服务运行
    
Debian 8 下运行：

暂时需要自行安装 FreeSwitch,Redis,Postgresql

1. 使用pg_dump导入 https://github.com/nwaycn/FSGui/blob/master/Debian8/db.backup 
2. 使用https://github.com/nwaycn/FSGui/tree/master/Debian8/Freeswitchconf/conf 替换FreeSwitch的默认配置
3. 启动Redis
4. 启动freeswitch 
5. 启动postgresql
6. 修改nway.conf和conf/app.conf  中的连接字符串及端口等数据
6. 等待大约1分钟后启动nway_pbx_web   nway_pbx_auth nway_pbx

-------------------------------------------------------------------------------------------------------------------------------------

Changelog:

-------------------------------------------------------------------------------------------------------------------------------------

2016-9-4
由于github会存在一些对代码或文件转义特点，从而会造成系统无法启动等原因，故而暂时将发布包打包存于：http://pan.baidu.com/s/1pLB2UfD  后，由以后再寻一些机会解决相关的问题.

changelog:

1. 修正PostgreSQL服务不能启动的原因。

2. 删除 Dialplan明细中是否外呼的问题与Dialplan中是否外呼冲突的部分。

3. 移除彩铃和IVR与Dialplan中的强制关联关系，删除彩铃不再出现异常部分。

4. 添加默认彩铃为老李录的一段欢迎词。

5. 配置路径为默认使用D:\FSGui。

6. 默认配置路径等信息完善到系统中，只为WINDOWS。
-------------------------------------------------------------------------------------------------------------------------------------

2016-8-31 14:30

增加批量生成网关或IMS对接的gateway页面及接口， 操作步骤：   网关管理 ->网关列表-> 批量创建    

然后下载模板按实际数据编辑excel表格后上传，并提交即可。

-------------------------------------------------------------------------------------------------------------------------------------
