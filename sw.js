const CACHE='alpine-weather-v30-shell';
const RUNTIME='alpine-weather-v30-runtime';
const ASSETS=['./','./index.html','./manifest.json','./sw.js','./README_V30.txt'];
const EXTERNAL=['https://unpkg.com/leaflet@1.9.4/dist/leaflet.css','https://unpkg.com/leaflet@1.9.4/dist/leaflet.js','https://unpkg.com/maplibre-gl@5.16.0/dist/maplibre-gl.js','https://unpkg.com/maplibre-gl@5.16.0/dist/maplibre-gl.css'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.concat(EXTERNAL))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);
 if(u.origin===location.origin || u.origin==='https://unpkg.com' || u.hostname==='api.maptiler.com'){
  const isTerrain=u.hostname==='api.maptiler.com' && u.pathname.includes('/tiles/terrain-rgb-v2/');
  const cacheName=isTerrain?'alpine-weather-v29-terrain':'alpine-weather-v30-runtime';
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(cacheName).then(c=>c.put(e.request,copy));return r}).catch(()=>cached)));
 }
});
