const __vite__fileDeps=["assets/ColorUpdater-xOenMZlh.js","assets/index-FJP_hZpX.js","assets/index-DJqq__Fz.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-FJP_hZpX.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-xOenMZlh.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
