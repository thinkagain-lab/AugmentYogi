const __vite__fileDeps=["assets/LifeUpdater-Dx53y_Cm.js","assets/ValueWithRandom-C1R5vF23.js","assets/index-UQyvSHTQ.js","assets/index-Dth7ETea.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-UQyvSHTQ.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Dx53y_Cm.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
