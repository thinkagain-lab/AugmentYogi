const __vite__fileDeps=["assets/Attractor-Dkd51zke.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-QAw1Ea6v.js","assets/index-Dth7ETea.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-QAw1Ea6v.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-Dkd51zke.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
