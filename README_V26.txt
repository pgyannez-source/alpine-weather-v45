Alpine Weather V25 - GPX -> GIS -> bollettino ufficiale

V25 estende V24 collegando i poligoni GIS alle informazioni di bollettino presenti nelle proprietà del GeoJSON.

Campi riconosciuti per il collegamento: bulletin_url, bollettino_url, aineva_url, official_url, source_url; codici: bulletin_code, bollettino_code, aineva_code, zone_code, code, id; fonte: source, fonte, authority, ente; validità: valid_from, valid_to, validity, validita.

Se il dataset non contiene un URL/codice ufficiale, l'app NON inventa una corrispondenza: mostra un fallback esplicito.

Il bollettino ufficiale resta distinto da qualsiasi analisi meteorologica o valutazione autonoma dell'app.

V26 - QUOTA + ESPOSIZIONE
- Analizza quota ed esposizione geometrica dei segmenti GPX.
- L'esposizione indica l'orientamento del tratto di traccia, non automaticamente l'aspetto del pendio.
- Il significato valanghivo viene mostrato solo se fornito dal bollettino/dataset ufficiale associato.
- Nessun grado di pericolo viene calcolato autonomamente.
