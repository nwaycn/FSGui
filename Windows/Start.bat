title NwayFSGui - www.nway.com.cn
COLOR 0A

SET PATH=%CD%\FreeSWITCH;%CD%\NwayPBX;%CD%\Pgsql9\bin;%CD%\Redis;%PATH%



ping -n 35 127.0.0.1 > nul  

start "nway_pbx_auth" "%CD%\NwayPBX\nway_pbx_auth.exe" &

ping -n 5 127.0.0.1 > nul  

start "nway_pbx_web" "%CD%\NwayPBX\nway_pbx_web.exe" &

ping -n 5 127.0.0.1 > nul

start "nway_pbx" "%CD%\NwayPBX\nway_pbx.exe" &

