const __vite__fileDeps=["assets/OpacityUpdater-BMEppZm5.js","assets/index-hEJWAlO1.js","assets/index-BzHv7PWc.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-hEJWAlO1.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-BMEppZm5.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
