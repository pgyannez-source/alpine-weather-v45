V42 - Forecast Calibration

Aggiunge una calibrazione automatica, trasparente e reversibile sopra V41.

- conserva il forecast originale;
- calcola il bias locale: osservato - modello;
- applica il bias solo al forecast calibrato;
- mostra originale, bias, calibrato, numero campioni e finestra temporale;
- permette di disattivare la calibrazione;
- supporta filtro opzionale per stazione;
- espone window.V42Calibration.getBias() e window.V42Calibration.apply();
- non sovrascrive i dati V41 e non modifica in modo distruttivo il forecast originale.

Nota: V42 calibra la temperatura usando lo storico V41, che registra osservato/ECMWF/GFS/ICON in °C. Non è una certificazione di accuratezza e non sostituisce bollettini ufficiali o valutazioni sul terreno.
