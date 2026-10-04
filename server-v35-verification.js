// V35 helper: verification metrics over matched observation/forecast pairs.
function metricStats(pairs){
  const e=pairs.map(x=>x.obs-x.fc);
  const n=e.length;
  if(!n)return {n:0,mae:null,bias:null,rmse:null};
  const mae=e.reduce((a,x)=>a+Math.abs(x),0)/n;
  const bias=e.reduce((a,x)=>a+x,0)/n;
  const rmse=Math.sqrt(e.reduce((a,x)=>a+x*x,0)/n);
  return {n,mae:+mae.toFixed(2),bias:+bias.toFixed(2),rmse:+rmse.toFixed(2)};
}
module.exports={metricStats};
