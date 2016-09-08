需要自行编译FreeSWITCH

需要自行安装postgresql,创建数据库nwaycc,并导入db.backup

需要编译运行Redis

用配置文件中autoload_configs/modules.conf.xml和xml_curl.conf.xml中替换已安装好的同名文件
替换dialplan/default.xml public.xml文件

配置 autoload_configs/event_socket.conf.xml文件中，让其监听于ipv4



然后先运行fs,redis,运行结束后，修改配置文件中dbstring,以及fs和redis信息后，依次运行

nway_pbx_auth

nway_pbx_web

nway_pbx

注： 尽量使用最新日期上传的二进制包和*.backup的数据库导出文件
