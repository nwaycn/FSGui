title NwayFSGui - www.nway.com.cn
COLOR 0A

SET PATH=%CD%\FreeSWITCH;%CD%\NwayPBX;%CD%\Pgsql9\bin;%CD%\Redis;%PATH%

%CD%\vcredist2013_x64.exe
ping -n 5 127.0.0.1 > nul 
%CD%\Pgsql9\bin\pg_ctl register -N PostgreSQL -D "%CD%\Pgsql9\data"

sc start PostgreSQL

%CD%\FreeSWITCH\FreeSwitchConsole.exe -install "FreeSWITCH" 
sc start FreeSWITCH

%CD%\Redis\redis-server.exe  --service-install %CD%\Redis\redis.conf --loglevel verbose

%CD%\Redis\redis-server --service-start