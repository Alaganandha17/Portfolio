@echo off
title Alaganandha Portfolio

echo.
echo  Alaganandha Portfolio -- One-click Start
echo  ==========================================
echo.

:: Check Node
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo  ERROR: Node.js is not installed.
    echo  Download it from https://nodejs.org ^(LTS version^)
    echo.
    pause
    exit /b 1
)

for /f "tokens=1 delims=v." %%a in ('node -v') do set NODE_MAJOR=%%a
echo  Node.js detected

:: Move to script directory
cd /d "%~dp0"

:: Install dependencies if needed
if not exist "node_modules\" (
    echo.
    echo  Installing dependencies ^(first run -- takes ~1 min^)...
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo  ERROR: npm install failed.
        pause
        exit /b 1
    )
) else (
    echo  Dependencies already installed
)

echo.
echo  Starting portfolio at http://localhost:3000
echo  Close this window to stop the server.
echo.

:: Open browser after delay
start "" /b cmd /c "timeout /t 3 >nul && start http://localhost:3000"

call npm run dev
pause
