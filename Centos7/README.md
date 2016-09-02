    1. 需要把路径下的postgresql复制到/etc/init.d/下，并 chmod +x /etc/init.d/postgresql

    2. 把freeswitch/ 和pgsql全部移动到 /usr/local 下

    3. 配置权限

         ＃ 新增用户组
               
               groupadd postgres

         ＃ 新增用户
               
               useradd postgres -g postgres

               chown -R postgres /usr/local/pgsql/.

     4. 将 FSGui和redis 移动到 /opt/  下

     5. 检查相关权限，如果在实际应用中遇到不可执行的权限提示时，请chmod +x xxxx

     6. 启动 postgresql,    #/etc/init.d/postgresql restart

     7. 启动 freeswitch,    #/usr/local/freeswitch/bin/freeswitch -nc

     8. 启动 redis,      cd /opt/redis后， ./redis-server &启动，最好采用 nohup ./redis-server &

     9. 启动 nway_pbx等，  cd /opt/FSGui/
     
             nohup ./nway_pbx_auth &
             
             nohup ./nway_pbx_web &
            
             nohup ./nway_pbx &
   
   至此，整个应用就启动成功了
   
    提示，在启动freeswitch或postgresql时，如果有异常，则需要install它的依赖库，可以把以下存为脚本，让其直接安装,如果还有其它依赖，安装就可以了

      yum -y install  gcc gcc-c++ make binutils compat-libstdc++-33 glibc glibc-devel libaio libaio-devel libgcc libstdc++ libstdc++-devel unixODBC unixODBC-devel sysstat ksh
 
         yum install -y git subversion autoconf automake libtool gcc-c++ ncurses-devel make

      yum -y install expat-devel openssl-devel libtiff-devel libX11-devel unixODBC-devel libssl-devel python-devel 
      yum -y install zlib-devel libzrtpcpp-devel alsa-lib-devel libogg-devel libvorbis-devel perl-libs gdbm-devel 
      yum -y install libdb-devel uuid-devel @development-tools  patch

      yum -y install ldns-devel libidn-devel unbound-devel
      yum -y install libjpeg-devel
      yum -y install pcre-devel
      yum -y install speex-devel

       yum install sqlite-devel -y
 
      yum install libcurl-devel -y
 
       yum install libedit-devel -y

 
