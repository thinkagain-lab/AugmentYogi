const __vite__fileDeps=["assets/PolygonDrawer-D9QR_7B4.js","assets/PolygonDrawerBase-DEGGuLyg.js","assets/index-B7i69KTm.js","assets/index-B1sT4m4I.css","assets/TriangleDrawer-DfIRSKQj.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-B7i69KTm.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-D9QR_7B4.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-DfIRSKQj.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
