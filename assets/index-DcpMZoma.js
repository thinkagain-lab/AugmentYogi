const __vite__fileDeps=["assets/ColorUpdater-BmE3-xKH.js","assets/index-BSjvXBX6.js","assets/index-DAW8Z5i2.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-BSjvXBX6.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-BmE3-xKH.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
