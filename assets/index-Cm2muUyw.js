const __vite__fileDeps=["assets/OutOfCanvasUpdater-BjlMJphu.js","assets/index-SaYpX_O7.js","assets/index-DpWSCd6z.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-SaYpX_O7.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-BjlMJphu.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
