const __vite__fileDeps=["assets/ParallaxMover-BXRSeuYg.js","assets/index-CeZj4jFe.js","assets/index-DUSBDRfQ.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-CeZj4jFe.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-BXRSeuYg.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
