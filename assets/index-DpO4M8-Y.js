const __vite__fileDeps=["assets/PolygonDrawer-CWjVD5sj.js","assets/PolygonDrawerBase-DDFf9c8K.js","assets/index-D2sFVKJe.js","assets/index-tZPd0n9J.css","assets/TriangleDrawer-BGC2BYaV.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-D2sFVKJe.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CWjVD5sj.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-BGC2BYaV.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
