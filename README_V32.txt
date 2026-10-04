ALPINE WEATHER V32 — STAZIONI METEO REALI

Nuovo modulo:
- ricerca delle stazioni Meteostat entro 50 km dal punto selezionato;
- visualizzazione di distanza e quota della stazione;
- ultima osservazione oraria disponibile: temperatura, vento, raffica, umidità, pressione, precipitazione;
- distinzione esplicita tra osservazione misurata e previsione;
- chiave RapidAPI solo server-side tramite METEOSTAT_RAPIDAPI_KEY.

Configurazione server:
METEOSTAT_RAPIDAPI_KEY=...

Endpoint aggiunti:
/stations-nearby?lat=...&lon=...
/station-hourly?id=...

Nota: Meteostat documenta un ritardo tipico di circa 2-3 ore per i dati orari e possibili lacune.
