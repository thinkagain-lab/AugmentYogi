const __vite__fileDeps=["assets/OutOfCanvasUpdater-DuiM9fbw.js","assets/index-CTULYlIn.js","assets/index-Dc7B3l4K.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-CTULYlIn.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-DuiM9fbw.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
