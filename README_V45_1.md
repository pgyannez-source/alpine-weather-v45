# Alpine Weather V45.1 — One Click robusto

## Avvio Windows
1. Scompattare lo ZIP.
2. Doppio clic su `AVVIA_ALPINE_WEATHER.bat`.
3. Il launcher controlla Node.js 18+, installa automaticamente le dipendenze mancanti, avvia il server e aspetta `/health` prima di aprire il browser.

URL: http://localhost:8787

## Requisiti
- Windows con PowerShell
- Node.js 18 o superiore
- Internet al primo avvio per `npm install` e per i servizi meteo online

## V45.1
Correzione del launcher V45: nessuna apertura anticipata del browser, controllo health, gestione errori npm e avvio server separato.
