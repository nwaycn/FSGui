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
 
 
 使用说明书：
 
 http://freeswitch.net.cn/100.html
 
 
 
 来去电，摘机，挂机，响铃等消息，使用代码
 
 https://github.com/nwaycn/FSGui/blob/master/EventOrCDR.py
 
 
 
 Restful接口调用示例：
 
 https://github.com/nwaycn/FSGui/tree/master/CallInterface
                                              

    

-------------------------------------------------------------------------------------------------------------------------------------

Changelog:

-------------------------------------------------------------------------------------------------------------------------------------

2016-8-31 14:30

增加批量生成网关或IMS对接的gateway页面及接口， 操作步骤：   网关管理 ->网关列表-> 批量创建    

然后下载模板按实际数据编辑excel表格后上传，并提交即可。

-------------------------------------------------------------------------------------------------------------------------------------
