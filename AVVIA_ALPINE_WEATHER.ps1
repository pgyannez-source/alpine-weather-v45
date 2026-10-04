$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
Write-Host '=== ALPINE WEATHER V45.1 ===' -ForegroundColor Cyan
try { $node = (Get-Command node -ErrorAction Stop).Source } catch { Write-Host 'ERRORE: Node.js non trovato. Installa Node.js 18+.' -ForegroundColor Red; Read-Host 'Premi Invio per chiudere'; exit 1 }
$major = [int]((& $node -p "process.versions.node.split('.')[0]"))
if ($major -lt 18) { Write-Host "ERRORE: serve Node.js 18+. Versione: $major" -ForegroundColor Red; Read-Host 'Premi Invio per chiudere'; exit 1 }
if (-not (Test-Path 'node_modules/pngjs')) {
  Write-Host 'Dipendenze mancanti: eseguo npm install...' -ForegroundColor Yellow
  & npm install --no-audit --no-fund
  if ($LASTEXITCODE -ne 0) { Write-Host 'ERRORE: npm install fallito. Controlla connessione Internet e riprova.' -ForegroundColor Red; Read-Host 'Premi Invio per chiudere'; exit 1 }
}
Write-Host 'Avvio server...' -ForegroundColor Green
$server = Start-Process -FilePath $node -ArgumentList 'server.js' -WorkingDirectory $PSScriptRoot -PassThru
$ready = $false
for ($i=0; $i -lt 30; $i++) {
  Start-Sleep -Seconds 1
  try { $h = Invoke-RestMethod -Uri 'http://localhost:8787/health' -TimeoutSec 2; if ($h.ok) { $ready = $true; break } } catch {}
  if ($server.HasExited) { break }
}
if (-not $ready) { Write-Host 'ERRORE: il server non risponde su http://localhost:8787' -ForegroundColor Red; if (-not $server.HasExited) { Stop-Process $server.Id -Force }; Read-Host 'Premi Invio per chiudere'; exit 1 }
Write-Host 'SERVER OK - apertura Alpine Weather...' -ForegroundColor Green
Start-Process 'http://localhost:8787'
Write-Host 'Alpine Weather e'' attivo. Chiudi questa finestra solo quando vuoi arrestare il server.' -ForegroundColor Cyan
while (-not $server.HasExited) { Start-Sleep -Seconds 2 }
