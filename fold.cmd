@ECHO off
SETLOCAL
CALL :find_dp0
"%dp0%\node_modules\@adonisjs\fold\index.js"   %*
ENDLOCAL
EXIT /b %errorlevel%
:find_dp0
SET dp0=%~dp0
EXIT /b
