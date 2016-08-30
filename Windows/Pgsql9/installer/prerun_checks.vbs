' Copyright (c) 2012-2016, EnterpriseDB Corporation.  All rights reserved
' VBscript test script - check that the scripting host appears functional

Set WshShell = WScript.CreateObject("WScript.Shell")
Set WshSysEnv = WshShell.Environment("PROCESS")
strSystemRoot = WshSysEnv("TEMP")

If strSystemRoot = "" Then
   WScript.Echo "Unable to read the value of the TEMP environment variable."
   WScript.Quit 1
End If

' Check if temp path is writable
isWritable = IsPathWriteable(strSystemRoot)
If isWritable = False Then
   WScript.Echo "Unable to write inside TEMP environment variable path."
   WScript.Quit 1
End If

' check if we can run a script from temp folder 
Dim fso 'As Scripting.FileSystemObject
Dim Temp_Path 'As String
Set fso = CreateObject("Scripting.FileSystemObject")
Temp_Path = strSystemRoot & "\" & fso.GetTempName() & ".vbs"
On Error Resume Next
fso.CreateTextFile Temp_Path
WriteLineToFile(Temp_Path)

canExecute = WshShell.Run("Temp_Path")
fso.DeleteFile Temp_Path

If canExecute <> 0 Then
   WScript.Echo "Unable to execute from TEMP environment variable path."
   WScript.Quit 2
End If

WScript.Echo "The scripting host appears to be functional."

WScript.Quit 0

Function WriteLineToFile(Path)
   Const ForWriting = 2
   Dim fso, f
   Set fso = CreateObject("Scripting.FileSystemObject")
   Set f = fso.OpenTextFile(Path, ForWriting, True)
   f.WriteLine "a = 1" 
End Function

Function IsPathWriteable(Path)' As Boolean
	Dim fso 'As Scripting.FileSystemObject
	Dim Temp_Path 'As String
	Set fso = CreateObject("Scripting.FileSystemObject")
	Temp_Path = Path & "\" & fso.GetTempName()
	On Error Resume Next
	fso.CreateTextFile Temp_Path
	IsPathWriteable = Err.Number = 0
	fso.DeleteFile Temp_Path
	On Error Goto 0
End Function
