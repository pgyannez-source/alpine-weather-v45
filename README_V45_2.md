# Alpine Weather V45.2 — One Click robusto

V45.2 corregge il launcher Windows di V45.1.

- cerca Node.js nel PATH e nelle cartelle Windows comuni;
- se Node.js non è installato e `winget` è disponibile, propone/installla Node.js LTS;
- controlla `node_modules/pngjs`;
- esegue `npm install` se necessario;
- avvia il server;
- apre il browser.

Requisito: Windows con Node.js 18+ oppure `winget` disponibile per l'installazione automatica al primo avvio.
