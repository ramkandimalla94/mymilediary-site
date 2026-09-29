(async()=>{
const names=["css.gz.hex.0","css.gz.hex.1","css.gz.hex.2","css.gz.hex.3a","css.gz.hex.3b","css.gz.hex.4","css.gz.hex.5","css.gz.hex.6","css.gz.hex.7","css.gz.hex.8","css.gz.hex.9","css.gz.hex.10","css.gz.hex.11","css.gz.hex.12","css.gz.hex.13","css.gz.hex.14","css.gz.hex.15","css.gz.hex.16","css.gz.hex.17","css.gz.hex.18","css.gz.hex.19","css.gz.hex.20"];
const hex=(await Promise.all(names.map(n=>fetch(new URL('./'+n, import.meta.url)).then(r=>{if(!r.ok)throw new Error(n);return r.text()})))).join('').replace(/\s+/g,'');
const bin=new Uint8Array(hex.length/2);
for(let i=0;i<bin.length;i++) bin[i]=parseInt(hex.substr(i*2,2),16);
const ds=new DecompressionStream('gzip');
const css=await new Response(new Blob([bin]).stream().pipeThrough(ds)).text();
const s=document.createElement('style');
s.textContent=css;
document.documentElement.appendChild(s);
})().catch(e=>console.error('css-boot',e));
