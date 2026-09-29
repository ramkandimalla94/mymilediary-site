(async()=>{
const names=["css.gz.b64.0", "css.gz.b64.1", "css.gz.b64.2", "css.gz.b64.3"];
const b64=(await Promise.all(names.map(n=>fetch(new URL('./'+n, import.meta.url)).then(r=>{if(!r.ok)throw new Error(n);return r.text()})))).join('');
const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
const ds=new DecompressionStream('gzip');
const css=await new Response(new Blob([bin]).stream().pipeThrough(ds)).text();
const s=document.createElement('style');
s.textContent=css;
document.documentElement.appendChild(s);
})().catch(e=>console.error('css-boot',e));
