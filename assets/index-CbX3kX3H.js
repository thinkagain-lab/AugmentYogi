const __vite__fileDeps=["assets/ColorUpdater-B0RG5sD6.js","assets/index-dPX_faAf.js","assets/index-6niqSNKv.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-dPX_faAf.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-B0RG5sD6.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
