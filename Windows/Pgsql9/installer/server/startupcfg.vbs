' Copyright (c) 2012-2016, EnterpriseDB Corporation.  All rights reserved
On Error Resume Next

' PostgreSQL server startup configuration script for Windows

' Check the command line
If WScript.Arguments.Count <> 6 Then
 Wscript.Echo "Usage: startupcfg.vbs <Major.Minor version> <Username> <Password> <Install dir> <Data dir> <ServerName>"
 Wscript.Quit 127
End If

strVersion = WScript.Arguments.Item(0)
strUsername = WScript.Arguments.Item(1)
strPassword = WScript.Arguments.Item(2)
strInstallDir = WScript.Arguments.Item(3)
strDataDir = WScript.Arguments.Item(4)
strServiceName = WScript.Arguments.Item(5)

Dim regExp, objShell, objFso, objTempFolder
'Escape the '%' as '%%', if present in the password
Set regExp = new regexp  
regExp.Pattern = "[%]"
strFormattedPassword = regExp.Replace(strPassword, "%%")

iWarn = 0

' Get temporary filenames
Set objShell = WScript.CreateObject("WScript.Shell")
Set objFso = CreateObject("Scripting.FileSystemObject")
Set objTempFolder = objFso.GetSpecialFolder(2)
strBatchFile = Replace(objFso.GetTempName, ".tmp", ".bat")
strOutputFile = objTempFolder.Path & "\" & objFso.GetTempName

' Execute a command
Function DoCmd(strCmd)
    Dim objBatchFile
    Set objBatchFile = objTempFolder.CreateTextFile(strBatchFile, True)
    objBatchFile.WriteLine "@ECHO OFF"
    objBatchFile.WriteLine "CHCP " & objShell.RegRead("HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Nls\CodePage\ACP")
    objBatchFile.WriteLine strCmd & " > """ & strOutputFile & """ 2>&1"
	objBatchFile.WriteLine "EXIT /B %ERRORLEVEL%"
    objBatchFile.Close
    DoCmd = objShell.Run(objTempFolder.Path & "\" & strBatchFile, 0, True)
    If objFso.FileExists(objTempFolder.Path & "\" & strBatchFile) = True Then
        objFso.DeleteFile objTempFolder.Path & "\" & strBatchFile, True
    End If
    If objFso.FileExists(strOutputFile) = True Then
        Set objOutputFile = objFso.OpenTextFile(strOutputFile, ForReading)
        WScript.Echo objOutputFile.ReadAll
        objOutputFile.Close
        objFso.DeleteFile strOutputFile, True
    End If
End Function

Sub Die(msg)
    WScript.Echo msg
    WScript.Quit 1
End Sub

Sub Warn(msg)
    WScript.Echo msg
    iWarn = 2
End Sub

' We'll let pg_ctl do all the heavy lifting
If strUsername = "NT AUTHORITY\NetworkService" Then
    iRet = DoCmd("""" & strInstallDir & "\bin\pg_ctl.exe"" register -N """ & strServiceName & """ -U """ & strUsername & """ -D """ & strDataDir & """ -w")
Else
    iRet = DoCmd("""" & strInstallDir & "\bin\pg_ctl.exe"" register -N """ & strServiceName & """ -U """ & strUsername & """ -P """ & strFormattedPassword & """ -D """ & strDataDir & """ -w")
End If

if iRet <> 0 Then
    Die "Failed to register the service with the service control manager"
End If

' Write the DisplayName manually
objShell.RegWrite "HKLM\SYSTEM\CurrentControlSet\Services\" & strServiceName & "\DisplayName", strServiceName & " - PostgreSQL Server " & strVersion, "REG_SZ"

WScript.Echo "startupcfg.vbs ran to completion"
WScript.Quit 0
