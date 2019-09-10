
# FSGui

##智能实时质检

1. 基于FreeSwitch模块进行实时智能质检模块

2. 采用端口镜像进行抓包后进行实时智能质检

3. 实时分析，实时评分

##带场景变量的电话机器人

![](http://freeswitch.net.cn/static/images/20180919114357TIM%E6%88%AA%E5%9B%BE20180918100533.png)

![](http://freeswitch.net.cn/static/images/20180919114409TIM%E6%88%AA%E5%9B%BE20180918100554.png)

![](http://freeswitch.net.cn/static/images/20180919114419TIM%E6%88%AA%E5%9B%BE20180918100606.png)

![](http://freeswitch.net.cn/static/images/20180919114441TIM%E6%88%AA%E5%9B%BE20180918100633.png)

![](http://freeswitch.net.cn/static/images/20180919114450TIM%E6%88%AA%E5%9B%BE20180918100705.png)

###QQ群： 293697898 FreeSWITCH+Kamailio+OpenSIPS

###iso安装后默认root密码为Nway123

安装手册： [http://www.nway.com.cn/FSGUI%E5%AE%89%E8%A3%85%E6%89%8B%E5%86%8C.pdf](http://www.nway.com.cn/FSGUI%E5%AE%89%E8%A3%85%E6%89%8B%E5%86%8C.pdf  )

V2.3.5.4使用手册： http://note.youdao.com/noteshare?id=2e1e528374b3bebff038699d30f4feb2&sub=9211BC44FF82444E967280FB8BDFB8B5

V2.3.5.2使用手册: http://note.youdao.com/noteshare?id=df9a50e03ebf5d4b82fc2d15e4844efe&sub=0C1EFD748DFB48C495E09DF0296E6C3B

v2.2.1使用手册： [http://www.nway.com.cn/FSGui%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8CV2.2.1.pdf](http://www.nway.com.cn/FSGui%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8CV2.2.1.pdf  )

     FSGui是由上海宁卫信息技术有限公司自主研发的新一代的呼叫平台，它将云呼叫、VOIP、PSTN、IMS、DID、IVR等集成在一起，实现将IP网络和传统通信通过语音完美结合在一起。并为第三方呼叫及事件查询提供RESTful接口。

    FSGui 优势是什么？
    1. 处理能力更强，内存数据库+PG+ GOLang天生的高性能。
    2. 数据更安全，只要硬件到位，那我们的数据就可以进行实时热备，以及更多的如读写分离等，且数据库是PostgreSQL的，它是开源的。
    3. 对接设备更丰富，从思科到avaya到华为到其它厂商均可支持。
    4. 业务流与通信流分离，通信流保证最稳定的媒体能力，业务流来控制媒体内容。
    5. 扩展更丰富，可以方便的引申出更多通信领域的增值服务。
    6. 使用更简便，我们可以做到由GUI配置而减少初级工程师或客户人员的工作量。
    7. 服务更到位，专业的人可以做专业的事。
    8. 从2.5.0.1版本开始增加语音识别模块nway_power以及相关接口。

   #### 针对FreeSWITCH开发的GUI及更底层的PBX功能扩展,小并发免费二进制，但nway_power不免费提供,由于各种原因，windows相关服务，不再提供。

###整个系统分为如下的结构

####结构图

![](http://www.freeswitch.net.cn/static/images/20170114225936结构图.jpg)

####应用说明

- WEBServer nway_pbx_web 用于处理所有的web访问，但不包括restful接口

- AUTHServer nway_pbx_auth 用于处理FreeSwitch的Register消息

- PBXServer nway_pbx 业务主应用，用于处理路由，网关，IVR等呼叫业务层

- FreeSwitch

- Postgresql

- Redis

- rings/common 用于报工号等通用的一些语音彩铃

GUI测试登录： http://139.196.40.50:8080/index ,admin 123456

注：FSGui是基于FreeSwitch进行的二次封装，在特大并发时，我们采用各种优秀的其它商业套件或，Opensips、Kamailio作前置，可参考  http://www.6fok.com/topics/2

###功能概要
 ```   
1.    路由管理
2.    录音管理
3.    分机管理
4.    分机组管理
5.    网关管理
6.    网关组管理
7.    区域策略管理
8.    时间策略管理
9.    报工号
10.   按键IVR
11.   自动语音智能IVR
12.   排队管理
13.   报表管理
14.   黑名单管理
15.   彩铃管理
16.   电话会议管理
17.   控制接口，发起呼叫，记录通话过程中的各种状态，并与第三方应用进行交互
18.   会议控制接口 ，可与第三方应用进行交互
19.   与第三方CRM等对接接口，支持restful或socket,支持python php java c++ c ruby golang等开发语言
20.   转码服务(G711,G723,G722,G729,ILBC,OPUS,ARMNB,GSM...)
21.   IMS接入
22.   超级ACD排队机
23.   WEBRTC音频模式，SIP终端，S口设备注册
24.   FIFO排队，来电队列，座席队列
25.   。。。。。。
```
 
 
### 使用说明书：
 
 http://freeswitch.net.cn/100.html
 
 
 
 来去电，摘机，挂机，响铃等消息，使用代码
 
 https://github.com/nwaycn/FSGui/blob/master/EventOrCDR.py
 
 
 
 Restful接口调用示例：
 
 https://github.com/nwaycn/FSGui/tree/master/CallInterface
                                              
-------------------------------------------------------------------------------------------------------------------------------------

##安装和更新日志

###特别提醒： 注意防火墙

###Centos 6 FSGUI ISO镜像安装  (推荐)

####下载

V2.5.0.6 ISO:https://pan.baidu.com/s/1XZJNVpq5HEWC1Ro1tVImkQ

V2.5.0.1 ISO:https://pan.baidu.com/s/1bpSEcmr

V2.4.0.0 ISO:https://pan.baidu.com/s/1ck6sPo

V2.3.5.8 ISO: https://pan.baidu.com/s/1gf7wgPt

V2.3.5.4 beta ISO: https://pan.baidu.com/s/1i4XZegl

V2.3.5.2 beta ISO: https://pan.baidu.com/s/1jIurnD0

V2.3.2.0 alpha：http://pan.baidu.com/s/1mhF6Hza

V2.3.1.3 https://pan.baidu.com/s/1pL0MEmv

V2.3.1.2 https://pan.baidu.com/s/1gePiQY3

 

####安装

使用光盘刻录机或ultraiso等工具把iso镜像写入u盘，由光盘或u盘引导后启动，进行自动安装。

用户: root, 密码: Nway123

FSGUI主路径：  /opt/fsgui

Postgresql 路径： /usr/pgsql-9.6/

Postgresql data 路径 ： /db/pgsql/data

Postgresql 的超级用户 postgres的密码： Nway2017

如果修改了postgres的相关信息，则需要配置两项： 

/usr/local/FSGUI/conf/app.conf  文件中为web配置

/usr/local/FSGUI/Nway.conf     文件为后台和认证服务应用的配置


####配置

这里的配置，主要是网络ip的配置

#####vi /etc/sysconfig/network-scripts/ifcfg-eth0

```
DEVICE="eth0"
BOOTPROTO="static"                                        改为static
HWADDR="08:00:27:28:44:81"
IPV6INIT="no"
NM_CONTROLLED="yes"
ONBOOT="yes"                                             改为yes
TYPE="Ethernet"
UUID="7d03dad6-2c06-402a-8e6b-8224764e91d3"
IPADDR=192.168.1.205                                       改为自己的ip
GATEWAY=192.168.1.1                                       实际的路由网关
NETMASK=255.255.255.0                                     子网掩码
```

接着，就可以重启了，就可以用了

Web管理界面为 : http://ip:8080/index admin  123456

管理控制接口地址 ： http://ip:8085 认证用户在Nway.conf中：

    restuser=admin
    restpassword=admin

ip:8083为针对 FreeSwitch的OutBound服务

ip:3000为针对 FreeSwitch的认证服务

###更新说明

2.17-6-23 V2.3.5.4 beta 修改一些bug

将满意度评价从路由中去除，转而只提供在坐席中，当配置坐席的满意度评价为真时，与之绑定的分机则会在挂机后提示主叫进行满意度评价

默认打开FreeSwitch的日志，而之前是关闭大量的日志产生


2016-12-20更新：

增加来电黑名单管理、呼入电话会议等的GUI配置和功能

[http://pan.baidu.com/s/1nuUZjg1](http://pan.baidu.com/s/1nuUZjg1 "http://pan.baidu.com/s/1nuUZjg1")

2016-10-24更新包：

下载地址：
http://pan.baidu.com/s/1pLxZmY3

2016-10-3更新包：

第一个英文FSGUI版本压缩包：

[http://pan.baidu.com/s/1jI6oQG2](http://pan.baidu.com/s/1jI6oQG2 "http://pan.baidu.com/s/1jI6oQG2")

2016-09-13更新包：
[http://pan.baidu.com/s/1c260hsW](http://pan.baidu.com/s/1c260hsW "http://pan.baidu.com/s/1c260hsW")

2016-09-07更新包：
[http://pan.baidu.com/s/1c23HXPQ](http://pan.baidu.com/s/1c23HXPQ "http://pan.baidu.com/s/1c23HXPQ")

web访问地址：

localhost:8080  默认用户名 admin,123456


###先执行InstallPreService.bat后再执行 Start.bat,已测试windows 2003,2008下可以，win8,win10不可行,如有问题可以查看windows的服务中，redis freeswitch,postgresql三个的服务启动是否正常


正常应会有nway_pbx_web.exe, nway_pbx_auth.exe, nway_pbx.exe三个启动，FreeSwitch和redis及Postgresql已作为服务运行
    
 
 
 
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
```
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
```

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
