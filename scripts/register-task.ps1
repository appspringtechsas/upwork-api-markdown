# scripts/register-task.ps1 — register (or remove) the Windows Task Scheduler job
# that runs the Upwork docs sync every day.
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File scripts\register-task.ps1              # daily 08:00
#   powershell -ExecutionPolicy Bypass -File scripts\register-task.ps1 -Time 18:30  # custom time
#   powershell -ExecutionPolicy Bypass -File scripts\register-task.ps1 -RunNow      # test immediately
#   powershell -ExecutionPolicy Bypass -File scripts\register-task.ps1 -Unregister  # remove the job
#
# The sync itself (scripts/update-docs.mjs) does: git pull -> fetch docs -> compare ->
# regenerate markdown -> commit -> push. Console output is appended to logs\update.log.
#
# On Linux/macOS use cron instead, e.g.:
#   crontab -l;  0 8 * * * cd /path/to/upwork-api-markdown && node scripts/update-docs.mjs >> logs/cron.log 2>&1

[CmdletBinding()]
param(
    [string]$Time = '08:00',
    [string]$TaskName = 'UpworkApiDocsSync',
    [switch]$RunNow,
    [switch]$Unregister
)

$ErrorActionPreference = 'Stop'
$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$Script = Join-Path $RepoRoot 'scripts\update-docs.mjs'
$LogsDir = Join-Path $RepoRoot 'logs'

if ($Unregister) {
    if (Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue) {
        Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
        Write-Host "Removed scheduled task '$TaskName'."
    } else {
        Write-Host "No scheduled task '$TaskName' found."
    }
    return
}

# sanity: node must be on PATH, script must exist, git must work
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'node not found on PATH — install Node.js first.' }
if (-not (Test-Path $Script)) { throw "sync script not found: $Script" }
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'git not found on PATH.' }
New-Item -ItemType Directory -Force -Path $LogsDir | Out-Null

$node = (Get-Command node).Source
$action = New-ScheduledTaskAction -Execute $node -Argument "`"$Script`"" -WorkingDirectory $RepoRoot
$trigger = New-ScheduledTaskTrigger -Daily -At $Time
$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -MultipleInstances IgnoreNew `
    -ExecutionTimeLimit (New-TimeSpan -Hours 2)
$principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive -RunLevel Limited
$description = "Daily sync of the Upwork GraphQL API documentation (pull, fetch, convert, commit, push). Repo: $RepoRoot"

Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Description $description -Force | Out-Null
Write-Host "Registered scheduled task '$TaskName' — daily at $Time."
Write-Host "  runs: node `"$Script`"  (working dir: $RepoRoot)"
Write-Host "  output log: $LogsDir\update.log"
Write-Host "Manage with: Get-ScheduledTask -TaskName $TaskName | Unregister-ScheduledTask -Confirm:`$false"

if ($RunNow) {
    Write-Host "Starting task now…"
    Start-ScheduledTask -TaskName $TaskName
    Write-Host "Task started. Follow $LogsDir\update.log"
}
