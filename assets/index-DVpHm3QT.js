const __vite__fileDeps=["assets/LifeUpdater-CqkEwZfA.js","assets/ValueWithRandom-CxVc8gIN.js","assets/index-DdadS9cr.js","assets/index-BqSmqUMA.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-DdadS9cr.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CqkEwZfA.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
