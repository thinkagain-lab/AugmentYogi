const __vite__fileDeps=["assets/PolygonDrawer-Bi4Yj7TC.js","assets/PolygonDrawerBase-BX6y14oX.js","assets/index-CU5QcbwB.js","assets/index-DJqq__Fz.css","assets/TriangleDrawer-ekYT11SB.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-CU5QcbwB.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-Bi4Yj7TC.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-ekYT11SB.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
