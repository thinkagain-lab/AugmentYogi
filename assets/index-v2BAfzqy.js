const __vite__fileDeps=["assets/Bouncer-BnbPIrcO.js","assets/index-D2sFVKJe.js","assets/index-tZPd0n9J.css","assets/Ranges-BDvOxCCo.js","assets/ExternalInteractorBase-CIi3zRdK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-D2sFVKJe.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-BnbPIrcO.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};
