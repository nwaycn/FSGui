' Copyright (c) 2012-2016, EnterpriseDB Corporation.  All rights reserved
On Error Resume Next

' PostgreSQL server shortcut creation script for Windows

' Note that on Windows, the shortcuts themselves are created by the installer,
' we just hack up the various helper scripts here.

Const ForReading = 1
Const ForWriting = 2

' Check the command line
If WScript.Arguments.Count <> 7 Then
 Wscript.Echo "Usage: createshortcuts.vbs <Major.Minor version> <Username> <Port> <Branding> <Install dir> <Data dir> <ServiceName>"
 Wscript.Quit 127
End If

strVersion = WScript.Arguments.Item(0)
strUsername = WScript.Arguments.Item(1)
iPort = CLng(WScript.Arguments.Item(2))
strBranding = WScript.Arguments.Item(3)
strInstallDir = WScript.Arguments.Item(4)
strDataDir = WScript.Arguments.Item(5)
strServiceName = WScript.Arguments.Item(6)

Dim objShell, objFso
Set objShell = WScript.CreateObject("WScript.Shell")
Set objFso = WScript.CreateObject("Scripting.FileSystemObject")

' Substitute values into a file ($in)
Sub FixupFile(strFile)
    WScript.Echo "Start FixupFile(" & strFile & ")..."
    WScript.Echo "   Opening file for reading..."
    Dim objFile, strData
    Set objFile = objFso.OpenTextFile(strFile, ForReading)
    strData = objFile.ReadAll
    objFile.Close
    WScript.Echo "   Closing file (reading)..."

    WScript.Echo "   Replacing placeholders..."
    strData = Replace(strData, "PG_MAJOR_VERSION", strVersion)
    strData = Replace(strData, "PG_USERNAME", strUsername)
    strData = Replace(strData, "PG_PORT", iPort)
    strData = Replace(strData, "PG_INSTALLDIR", strInstallDir)
    strData = Replace(strData, "PG_DATADIR", strDataDir)
    strData = Replace(strData, "PG_SERVICENAME", strServiceName)

    WScript.Echo "   Opening file for writing..."
    Set objFile = objFso.OpenTextFile(strFile, ForWriting)
    objFile.WriteLine strData
    objFile.Close
    WScript.Echo "   Closing file..."
    WScript.Echo "  End FixupFile()..."
End Sub

' Fixup the scripts
FixupFile strInstallDir & "\scripts\serverctl.vbs"
FixupFile strInstallDir & "\scripts\runpsql.bat"

WScript.Echo "createshortcuts.vbs ran to completion"
WScript.Quit 0

