const __vite__fileDeps=["assets/Attractor-DaPaSSt1.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-BTRUeeci.js","assets/index-BDCh_yI_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-BTRUeeci.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DaPaSSt1.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
