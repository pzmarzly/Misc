@echo off
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
	start /max C:\"Program Files"\Google\Chrome\Application\chrome.exe -start-maximized %~dp0index.html
	goto :eof
)
if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
	start /max C:\"Program Files (x86)"\Google\Chrome\Application\chrome.exe -start-maximized %~dp0index.html
	goto :eof
)
if exist "C:\Documents and Settings\%USERNAME%\Local Settings\Application Data\Google\Chrome\Application\chrome.exe" (
	start /max C:\"Documents and Settings"\%USERNAME%\"Local Settings"\"Application Data"\Google\Chrome\Application\chrome.exe -start-maximized %~dp0index.html
	goto :eof
)
if exist "C:\Program Files\Mozilla Firefox\firefox.exe" (
	start /max C:\"Program Files"\"Mozilla Firefox"\firefox.exe %~dp0index.html
	goto :eof
	)
if exist "C:\Program Files (x86)\Mozilla Firefox\firefox.exe" (
	start /max C:\"Program Files (x86)"\"Mozilla Firefox"\firefox.exe %~dp0index.html
	goto :eof
	)
if exist "C:\Program Files (x86)\Opera\launcher.exe" (
	start /max C:\"Program Files (x86)"\Opera\launcher.exe %~dp0index.html
	goto :eof
	)
if exist "C:\Program Files\Opera\launcher.exe" (
	start /max C:\"Program Files"\Opera\launcher.exe %~dp0index.html
	goto :eof
	)

start iexplore %~dp0index.html

:eof
rem KONIEc