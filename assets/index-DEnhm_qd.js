const __vite__fileDeps=["assets/ParallaxMover-DOrB-e2s.js","assets/index-B7i69KTm.js","assets/index-B1sT4m4I.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-B7i69KTm.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-DOrB-e2s.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
