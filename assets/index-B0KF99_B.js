const __vite__fileDeps=["assets/ColorUpdater-DqeyP1ZS.js","assets/index-QAw1Ea6v.js","assets/index-Dth7ETea.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-QAw1Ea6v.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DqeyP1ZS.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
