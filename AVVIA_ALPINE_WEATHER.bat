@echo off
setlocal EnableExtensions
title ALPINE WEATHER V45.2
cd /d "%~dp0"

echo.
echo === ALPINE WEATHER V45.2 ===
echo.

set "NODE_EXE="

where node >nul 2>nul
if not errorlevel 1 set "NODE_EXE=node.exe"

if not defined NODE_EXE if exist "%ProgramFiles%\nodejs\node.exe" set "NODE_EXE=%ProgramFiles%\nodejs\node.exe"
if not defined NODE_EXE if exist "%ProgramFiles(x86)%\nodejs\node.exe" set "NODE_EXE=%ProgramFiles(x86)%\nodejs\node.exe"
if not defined NODE_EXE if exist "%LocalAppData%\Programs\nodejs\node.exe" set "NODE_EXE=%LocalAppData%\Programs\nodejs\node.exe"

if not defined NODE_EXE (
  echo Node.js non trovato.
  echo.
  where winget >nul 2>nul
  if errorlevel 1 (
    echo Installa Node.js LTS e poi riavvia questo file.
    echo Il programma richiede Node.js 18 o superiore.
    echo.
    pause
    exit /b 1
  )
  echo Winget disponibile: provo a installare Node.js LTS.
  echo Potrebbe comparire una richiesta di conferma/UAC.
  echo.
  winget install --id OpenJS.NodeJS.LTS -e --source winget --accept-source-agreements --accept-package-agreements
  if errorlevel 1 (
    echo.
    echo Installazione automatica non riuscita.
    echo Installa manualmente Node.js LTS e rilancia questo file.
    pause
    exit /b 1
  )
  if exist "%ProgramFiles%\nodejs\node.exe" set "NODE_EXE=%ProgramFiles%\nodejs\node.exe"
  if exist "%ProgramFiles(x86)%\nodejs\node.exe" set "NODE_EXE=%ProgramFiles(x86)%\nodejs\node.exe"
  if exist "%LocalAppData%\Programs\nodejs\node.exe" set "NODE_EXE=%LocalAppData%\Programs\nodejs\node.exe"
)

if not defined NODE_EXE (
  echo Node.js e' stato installato ma non e' ancora visibile.
  echo Chiudi questa finestra e rilancia AVVIA_ALPINE_WEATHER.bat.
  pause
  exit /b 1
)

echo Node trovato: %NODE_EXE%
"%NODE_EXE%" -v
if errorlevel 1 (
  echo ERRORE: Node.js non eseguibile.
  pause
  exit /b 1
)

if not exist "node_modules\pngjs\package.json" (
  echo.
  echo Dipendenze mancanti: eseguo npm install...
  call npm install
  if errorlevel 1 (
    echo.
    echo ERRORE durante npm install.
    pause
    exit /b 1
  )
)

echo.
echo Avvio Alpine Weather...
start "" http://localhost:8787
call "%NODE_EXE%" server.js

echo.
echo Server arrestato.
pause
