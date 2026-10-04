Alpine Weather V24 - GPX -> GIS ufficiale -> zona -> bollettino

V24 introduce un layer GIS modulare per associare una traccia GPX ai poligoni ufficiali disponibili.
Non contiene un dataset nazionale inventato: carica GeoJSON ufficiali per regione/provincia quando forniti.

Flusso:
1. GPX -> punti della traccia
2. point-in-polygon / segment intersection sui layer GeoJSON disponibili
3. zone attraversate, mantenute separate
4. associazione a bollettino e fascia altimetrica
5. fallback trasparente se il layer non è disponibile

Perimetrazione valanghe e bollettino sono layer distinti.
