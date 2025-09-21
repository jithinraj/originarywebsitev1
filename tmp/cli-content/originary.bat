@echo off
set VERSION=0.9.13

if "%1"=="--version" goto version
if "%1"=="-v" goto version
if "%1"=="verify" goto verify
goto default

:version
echo Originary CLI v%VERSION%
exit /b 0

:verify
if exist "peac.txt" (
    echo ✓ PEAC policy file found
    exit /b 0
) else if exist ".well-known\peac.txt" (
    echo ✓ PEAC policy file found
    exit /b 0
) else (
    echo ✗ No peac.txt found in current directory or .well-known/
    exit /b 1
)

:default
echo Originary CLI v%VERSION%
echo Usage: originary [--version^|verify]
echo   --version    Show version
echo   verify       Check for peac.txt file
exit /b 0