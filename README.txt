ALPINE WEATHER V19 – OFFLINE MOUNTAIN MODE

V19 aggiunge una modalità offline-first sopra V18.

Funzioni:
- service worker con cache dell'app shell e Leaflet;
- stato Online/OFFLINE visibile;
- ultimo stato meteo conservato localmente;
- snapshot locale di stato, GPX, forecast percorso e timeline;
- esportazione/importazione dello snapshot JSON;
- GPS continua a funzionare offline dopo il consenso del browser, se il dispositivo fornisce la posizione;
- radar e nuove previsioni richiedono una connessione.

Avvio:
npm install
npm start

Per una vera app installabile usare HTTPS oppure localhost.

Nota sicurezza: i dati offline sono una copia dell'ultimo dato disponibile, non una previsione aggiornata. Mostrare sempre timestamp e fonte prima di un'uscita in montagna.


## V45.2
Launcher Windows One-Click robusto con rilevamento Node.js e installazione dipendenze.
