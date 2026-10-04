// V24: loader GIS modulare. Nessuna zona viene inventata.
export async function loadOfficialGeoJSON(url){
  const r=await fetch(url,{cache:'no-store'});
  if(!r.ok) throw new Error(`GIS ${r.status}`);
  const g=await r.json();
  if(g.type!=='FeatureCollection') throw new Error('GeoJSON non valido');
  return g;
}

export function pointInRing(point, ring){
  const [x,y]=point; let inside=false;
  for(let i=0,j=ring.length-1;i<ring.length;j=i++){
    const xi=ring[i][0], yi=ring[i][1], xj=ring[j][0], yj=ring[j][1];
    const hit=((yi>y)!==(yj>y)) && (x < (xj-xi)*(y-yi)/(yj-yi)+xi);
    if(hit) inside=!inside;
  }
  return inside;
}

export function pointInGeometry(point, geometry){
  if(!geometry) return false;
  if(geometry.type==='Polygon'){
    const [outer,...holes]=geometry.coordinates;
    return pointInRing(point,outer) && !holes.some(r=>pointInRing(point,r));
  }
  if(geometry.type==='MultiPolygon') return geometry.coordinates.some(p=>pointInGeometry(point,{type:'Polygon',coordinates:p}));
  return false;
}

export function matchRouteToZones(routePoints, geojson){
  return routePoints.map((p,i)=>({index:i, lat:p.lat, lon:p.lon,
    zones:geojson.features.filter(f=>pointInGeometry([p.lon,p.lat],f.geometry)).map(f=>({
      id:f.properties?.id ?? f.properties?.code ?? f.id ?? null,
      name:f.properties?.name ?? f.properties?.nome ?? 'Zona ufficiale',
      properties:f.properties||{}
    }))
  }));
}
