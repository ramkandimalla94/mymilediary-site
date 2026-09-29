const __jp = 14;
const __dp = 24;
const __base = new URL("./", import.meta.url).href;
const __texts = await Promise.all(
  Array.from({length: __jp}, (_, i) =>
    fetch(new URL(`./index-B62bK7Wg.p${i}.js`, import.meta.url)).then(r => {
      if (!r.ok) throw new Error("missing js part " + i);
      return r.text();
    })
  )
);
let __code = __texts.join("");
__code = __code.split('import("./maps3d-mock-1NReV1b1.js")').join('import("' + __base + 'maps3d-mock-1NReV1b1.js")');
const __repl =
  '(async()=>{const ps=await Promise.all(Array.from({length:' + __dp + '},(_,i)=>fetch(`${Dm}index.json.p${i}`).then(r=>r.text())));return new Response(ps.join(""),{status:200,headers:{"Content-Type":"application/json"}});})()';
__code = __code.split('fetch(`${Dm}index.json`)').join(__repl);
const __blob = new Blob([__code], {type: "text/javascript"});
await import(URL.createObjectURL(__blob));
