ALPINE WEATHER V43 — BACKEND UNIFICATO

Obiettivo
V43 collega automaticamente il frontend al backend locale. Non serve più impostare manualmente l'URL del backend per usare meteo e API principali.

REQUISITI
- Node.js 18 o superiore
- connessione Internet per dati meteo/radar/stazioni

AVVIO RAPIDO
1. Apri un terminale nella cartella del progetto.
2. Esegui:
   npm install
   npm start
3. Apri:
   http://localhost:8787

API PRINCIPALI
GET /health
GET /weather?lat=...&lon=...&elevation=...
GET /models?lat=...&lon=...
GET /radar
POST /storm-segments
GET /stations-nearby?lat=...&lon=... (richiede METEOSTAT_RAPIDAPI_KEY)

VARIABILI AMBIENTE
PORT=8787
METEOSTAT_RAPIDAPI_KEY=...   # opzionale; serve per le stazioni Meteostat via RapidAPI

V42
La calibrazione locale V42 resta nel frontend/browser: forecast originale, bias locale, forecast calibrato, campioni e finestra temporale. Il forecast originale non viene sovrascritto.

NOTE
- RainViewer fornisce radar osservato; la proiezione delle celle è sperimentale e non è un nowcast provider.
- Le soglie e le analisi di rischio non sono certificate per sicurezza in montagna.
- Per uso pubblico/produzione: aggiungere HTTPS, autenticazione, rate limiting, caching persistente, logging e gestione segreti.
