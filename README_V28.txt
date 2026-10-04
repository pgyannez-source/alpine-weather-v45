ALPINE WEATHER V28 — VERO TERRENO 3D DEM

V28 aggiunge una superficie DEM reale tramite MapLibre GL JS + MapTiler Terrain RGB.

REQUISITI
- Una API key MapTiler fornita dall'utente.
- Connessione internet per scaricare le tile DEM.
- In assenza di chiave/rete resta disponibile il profilo 3D GPX della V27.

FONTI / TECNICA
- MapTiler Terrain RGB: DEM globale, circa 30 m, tile raster-dem.
- MapLibre GL JS: rendering terrain 3D.

PRIVACY
La chiave viene usata nel browser per le richieste tile; non viene inviata al backend Alpine Weather.

OFFLINE
Per una vera modalità offline DEM occorre aggiungere un pacchetto di tile DEM pre-scaricate/cache. V28 prepara il renderer; non finge di avere tile offline già incluse.
