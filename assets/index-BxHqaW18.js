const __vite__fileDeps=["assets/OutOfCanvasUpdater-hnLcRP1-.js","assets/index-0-dQYlWt.js","assets/index-Ctb-jPko.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-0-dQYlWt.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-hnLcRP1-.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
