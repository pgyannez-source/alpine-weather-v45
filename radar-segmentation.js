// Alpine Weather V12 - radar segmentation + geospatial tracking
function colorScore(r,g,b,a=255){
  if(a<20) return 0;
  const mx=Math.max(r,g,b), mn=Math.min(r,g,b);
  if(mx<35) return 0;
  // RainViewer Universal Blue: transparent pixels mean no radar return.
  // Warm colors are higher intensity; blue/cyan are precipitation too.
  if(r>180 && g<160) return 4;
  if(r>160 && g>100 && b<130) return 3;
  if(b>80 || g>80) return 1;
  return 0;
}
function segmentRGBA(data,width,height,opts={}){
  const minArea=opts.minArea||18, mask=new Uint8Array(width*height), seen=new Uint8Array(width*height);
  for(let p=0;p<width*height;p++){const i=p*4;mask[p]=colorScore(data[i],data[i+1],data[i+2],data[i+3])>0?1:0;}
  const cells=[], qx=new Int32Array(width*height), qy=new Int32Array(width*height);
  for(let sy=0;sy<height;sy++)for(let sx=0;sx<width;sx++){
    const seed=sy*width+sx;if(!mask[seed]||seen[seed])continue;
    let head=0,tail=0,area=0,sxsum=0,sysum=0,minx=sx,maxx=sx,miny=sy,maxy=sy,maxScore=0;
    qx[tail]=sx;qy[tail]=sy;tail++;seen[seed]=1;
    while(head<tail){const x=qx[head],y=qy[head];head++;area++;sxsum+=x;sysum+=y;minx=Math.min(minx,x);maxx=Math.max(maxx,x);miny=Math.min(miny,y);maxy=Math.max(maxy,y);
      const i=(y*width+x)*4,sc=colorScore(data[i],data[i+1],data[i+2],data[i+3]);maxScore=Math.max(maxScore,sc);
      for(const [nx,ny] of [[x+1,y],[x-1,y],[x,y+1],[x,y-1]]){if(nx<0||ny<0||nx>=width||ny>=height)continue;const k=ny*width+nx;if(mask[k]&&!seen[k]){seen[k]=1;qx[tail]=nx;qy[tail]=ny;tail++;}}
    }
    if(area>=minArea)cells.push({area,centroid:{x:sxsum/area,y:sysum/area},bbox:{minx,maxx,miny,maxy},maxScore});
  }
  return cells;
}
function matchCells(prev,next,maxDistance=90){
  const matches=[],used=new Set();
  for(let i=0;i<prev.length;i++){let best=-1,bestD=Infinity;
    for(let j=0;j<next.length;j++){if(used.has(j))continue;const dx=next[j].centroid.x-prev[i].centroid.x,dy=next[j].centroid.y-prev[i].centroid.y,d=Math.hypot(dx,dy);if(d<bestD){bestD=d;best=j;}}
    if(best>=0&&bestD<=maxDistance){used.add(best);matches.push({from:i,to:best,pixelDistance:bestD,dx:next[best].centroid.x-prev[i].centroid.x,dy:next[best].centroid.y-prev[i].centroid.y});}
  }return matches;
}
module.exports={colorScore,segmentRGBA,matchCells};
