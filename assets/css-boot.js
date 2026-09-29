(async()=>{
const names=["css.gz.hex.0","css.gz.hex.1","css.gz.hex.2","css.gz.hex.3a","css.gz.hex.3b","css.gz.hex.4a","css.gz.hex.4b","css.gz.hex.5a","css.gz.hex.5b","css.gz.hex.6a","css.gz.hex.6b","css.gz.hex.7a","css.gz.hex.7b","css.gz.hex.8a","css.gz.hex.8b","css.gz.hex.9a","css.gz.hex.9b","css.gz.hex.10a","css.gz.hex.10b","css.gz.hex.11a","css.gz.hex.11b","css.gz.hex.12a","css.gz.hex.12b","css.gz.hex.13a","css.gz.hex.13b","css.gz.hex.14a","css.gz.hex.14b","css.gz.hex.15a","css.gz.hex.15b","css.gz.hex.16a","css.gz.hex.16b","css.gz.hex.17a","css.gz.hex.17b","css.gz.hex.18a","css.gz.hex.18b","css.gz.hex.19a","css.gz.hex.19b","css.gz.hex.20a","css.gz.hex.20b"];
const hex=(await Promise.all(names.map(n=>fetch(new URL('./'+n, import.meta.url)).then(r=>{if(!r.ok)throw new Error(n);return r.text()})))).join('').replace(/\s+/g,'');
const bin=new Uint8Array(hex.length/2);
for(let i=0;i<bin.length;i++) bin[i]=parseInt(hex.substr(i*2,2),16);
const ds=new DecompressionStream('gzip');
const css=await new Response(new Blob([bin]).stream().pipeThrough(ds)).text();
const s=document.createElement('style');
s.textContent=css;
document.documentElement.appendChild(s);
})().catch(e=>console.error('css-boot',e));
