ALPINE WEATHER V29 — DEM OFFLINE

V29 estende V28 con una cache locale delle tile MapTiler Terrain RGB.

USO:
1. Avvia l'app come in V28.
2. Inserisci una chiave MapTiler.
3. Importa il GPX.
4. Attiva il terreno DEM.
5. Premi "Pre-scarica DEM GPX".
6. Le tile scaricate vengono conservate nella Cache Storage del browser.

NOTE:
- Il pre-download usa zoom 9 per limitare lo spazio e il traffico.
- Il limite è 160 tile per operazione.
- Senza rete, il service worker restituisce le tile già in cache.
- Le nuove tile non possono essere ottenute offline.
- MapTiler Terrain RGB codifica elevazioni in tile raster; MapLibre usa una sorgente raster-dem per il terreno 3D.
