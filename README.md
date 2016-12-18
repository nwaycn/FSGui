# FSGui

QQ群： 293697898 FreeSWITCH+Kamailio+OpenSIPS

由于是商业应用，二进制包和配置等上传到github也较慢，改用百度云盘存储：详情见： http://freeswitch.net.cn/100.html   ，freeswitch,redis,nwaypbx等的二进制包，下载地址： http://pan.baidu.com/s/1o77qz8Y 

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
暂时需要自行安装 FreeSwitch,Redis,Postgresql 编译好的基于debian 8 64位的FreeSwitch二进制包可以下载： http://pan.baidu.com/s/1hrMvI0s

或者，freeswitch,redis,nwaypbx等的二进制包，下载地址： http://pan.baidu.com/s/1o77qz8Y 需要预先安装一些第三方包,如下：

        wget -O - https://files.freeswitch.org/repo/deb/debian/freeswitch_archive_g0.pub | apt-key add -

        echo "deb http://files.freeswitch.org/repo/deb/freeswitch-1.6/ jessie main" >         /etc/apt/sources.list.d/freeswitch.list

        apt-get update && apt-get install -y freeswitch-meta-all
如果是FSGui-Debian8-20161217.zip,则要如下操作：

解压压缩包到/usr/local下，保证 /usr/local/freeswitch/bin/freeswitch路径、/usr/local/nwaypbx/nway_pbx 、 /usr/local/redis/src/redis-server 是有效的
+---db
+---freeswitch
+---nwaypbx
|   +---assets
|   |   +---avatars
|   |   +---bootstrap-datepicker-1.6.4-dist
|   |   |   +---css
|   |   |   +---js
|   |   |   \---locales
|   |   +---css
|   |   |   +---images
|   |   |   \---img
|   |   +---examples
|   |   +---font-awesome
|   |   |   +---4.1.0
|   |   |   |   +---css
|   |   |   |   \---fonts
|   |   |   \---4.2.0
|   |   |       +---css
|   |   |       \---fonts
|   |   +---fonts
|   |   +---img
|   |   +---js
|   |   \---locales
|   +---conf
|   +---controllers
|   +---entity
|   +---libs
|   +---models
|   +---routers
|   +---service
|   +---static
|   |   +---css
|   |   +---img
|   |   \---js
|   +---tests
|   \---views
|       +---agent
|       +---baseconfig
|       +---cdr
|       +---conference
|       +---dialplan
|       +---dialplandetail
|       +---error
|       +---extension
|       +---fifo
|       +---gateway
|       +---gatewaygroup
|       +---ivr
|       +---ivrdetail
|       +---layout
|       |   \---sections
|       +---log
|       +---main
|       +---report
|       +---ring
|       +---system
|       +---timeplan
|       \---user
\---redis
 +---deps
 |   +---geohash-int
 |   +---hiredis
 |   |   +---adapters
 |   |   \---examples
 |   +---jemalloc
 |   |   +---bin
 |   |   +---doc
 |   |   +---include
 |   |   |   +---jemalloc
 |   |   |   |   \---internal
 |   |   |   \---msvc_compat
 |   |   |       \---C99
 |   |   +---lib
 |   |   +---src
 |   |   \---test
 |   |       +---include
 |   |       |   \---test
 |   |       +---integration
 |   |       +---src
 |   |       +---stress
 |   |       \---unit
 |   +---linenoise
 |   \---lua
 |       +---doc
 |       +---etc
 |       +---src
 |       \---test
 +---src
 +---tests
 |   +---assets
 |   +---cluster
 |   |   +---tests
 |   |   |   +---helpers
 |   |   |   \---includes
 |   |   \---tmp
 |   +---helpers
 |   +---integration
 |   +---sentinel
 |   |   +---tests
 |   |   |   \---includes
 |   |   \---tmp
 |   +---support
 |   +---tmp
 |   \---unit
 |       \---type
 \---utils
     +---create-cluster
     +---hashtable
     +---hyperloglog
     +---lru
     \---releasetools
按 http://freeswitch.net.cn/27.html 安装postgresql
使用pg_dump导入解压包中db/nwaycc161216.backup 确保postgresql已启动
chmod +x /usr/local/freeswitch/bin/*
chmod +x /usr/local/nwaypbx/nway_pbx*
chmod +x /usr/local/redis/src/redis-*
启动freeswitch # /usr/local/freeswitch/bin/freeswitch -nc
启动redis # /usr/local/redis/redis-server
启动nway_pbx相关的 #cd /usr/local/nwaypbx/
nohup ./nway_pbx & && nohup ./nway_pbx_web & && nohup ./nway_pbx_auth &


-------------------------------------------------------------------------------------------------------------------------------------

Changelog:

-------------------------------------------------------------------------------------------------------------------------------------
2016-10-20
v2.0.3

下载： http://pan.baidu.com/s/1kVpsOHD

增加自动按区域智能路由分发

可以按省，市等选择不同的路由
在以前的安装包安装好后，使用这个版本的zip中的文件覆盖原来的文件，并把原来的postgresql数据库drop database后，重新create database nwaycc;然后导入dbstruct/public.sql中的表结构和数据

2016-10-1
1.把存于redis中的分机状态或者说座席状态，通过分机列表页中的状态进行查看
2.增加对fusionpbx的分机用户进行认证的multidomain认证模块

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
