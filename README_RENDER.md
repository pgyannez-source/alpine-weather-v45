# Alpine Weather V45 - Render

Questa cartella è pronta per essere pubblicata su Render.

## Deploy rapido
1. Carica questa cartella in un repository GitHub.
2. In Render scegli **New + → Blueprint**.
3. Seleziona il repository GitHub.
4. Render leggerà `render.yaml` e creerà il servizio web.
5. Attendi il deploy e apri l'URL `*.onrender.com`.

## Configurazione
- Runtime: Node.js
- Node: >=18
- Build: `npm install --omit=dev`
- Start: `npm start`
- Health check: `/health`

## Nota database
Il progetto salva i dati in `data/alpine-weather-v45.json`. Il filesystem del piano gratuito di Render non è persistente tra alcuni redeploy/restart; per conservare definitivamente i dati serve un database esterno o un piano con storage persistente.

## API esterne
Il progetto utilizza Open-Meteo e RainViewer. La funzione Meteostat richiede `METEOSTAT_RAPIDAPI_KEY` se la si vuole usare.

## Versione test
Dopo il deploy apri `https://TUO-SERVIZIO.onrender.com/test` per eseguire i controlli automatici su health check, frontend, Open-Meteo, ECMWF/GFS/ICON, RainViewer e database.
