# Alpine Weather V44 — Database persistente

V44 mantiene V43 e aggiunge un archivio persistente lato server in `data/alpine-weather-v44.json`.

## Avvio
```bash
npm install
npm start
```
Aprire `http://localhost:8787`.

## API database
- `GET /db/summary`
- `POST /db/observations`
- `GET /db/observations?model=ECMWF&variable=temperature_2m&days=30`
- `POST /db/forecasts`
- `GET /db/calibration?model=ECMWF&variable=temperature_2m&days=30`

Il forecast originale non viene modificato: la calibrazione V42 rimane reversibile.
