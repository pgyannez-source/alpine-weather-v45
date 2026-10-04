// V28: real DEM terrain support (MapTiler Terrain RGB / MapLibre)
// Requires a user-provided MapTiler API key. Falls back to V27 profile if unavailable.
export function terrainConfig(key){return {key, tiles:`https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=${encodeURIComponent(key)}`, attribution:'Terrain RGB © MapTiler'};}
export function demAvailable(key){return !!(key && key.trim().length>10);}
