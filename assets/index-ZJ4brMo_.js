const __vite__fileDeps=["assets/Attractor-B15dMTZX.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-B9YuXzaE.js","assets/index-FZvN4Ibv.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-B9YuXzaE.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-B15dMTZX.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
