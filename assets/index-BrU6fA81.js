const __vite__fileDeps=["assets/LifeUpdater-BTgKCwls.js","assets/ValueWithRandom-Dg4wzJ1r.js","assets/index-BTRUeeci.js","assets/index-BDCh_yI_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BTRUeeci.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BTgKCwls.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
