const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery-Buvo7r1Z.js","assets/app-CLGX1n_q.js","assets/app-CGM_433a.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-BWxP3HbI.js"])))=>i.map(i=>d[i]);
import{A as D,d as w,G as b,o as c,c as v,K as g,b as h,g as r,a4 as $,a5 as K,O as V,a6 as B,i,u as E,J as S,C as G,Q as O,W as Y,X as T,x as F,a7 as j,a8 as R,w as f,Y as L,f as a,H as M,F as U,Z as H,$ as I,j as N,a9 as W}from"./app-CLGX1n_q.js";import{_ as z}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BWxP3HbI.js";function J(s){const o=new TextEncoder;return window.crypto.subtle.importKey("raw",o.encode(s),"PBKDF2",!1,["deriveBits","deriveKey"])}function Q(s,o){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:o,iterations:1e5,hash:"SHA-256"},s,{name:"AES-CBC",length:256},!0,["encrypt","decrypt"])}function X(){const s=D(),{encrypt:o}=s.value,n=Uint8Array.from(Object.values(o.iv)),e=Uint8Array.from(Object.values(o.salt));return{decrypt:async(l,u)=>{if(!l)return;const d=await J(l),y=await Q(d,e),p=Uint8Array.from(u,_=>_.charCodeAt(0)),t=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:n},y,p);return new TextDecoder().decode(t)}}}const Z=w({__name:"YunGallery",props:{photos:{}},setup(s){return(o,n)=>{const e=b("VAGallery");return c(),v(e,{photos:o.photos},null,8,["photos"])}}}),q={key:0,"w-full":"","pt-14":"","pb-10":""},ee={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},te={key:1},oe=w({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(s){const o=s,n=g(""),e=g(""),l=g(!1),{decrypt:u}=X();async function d(){const p=o.encryptedPhotos;if(p)try{const t=await u(n.value,p);e.value=t||""}catch{l.value=!0}}function y(){e.value="",n.value=""}return(p,t)=>{const _=Z;return c(),h("div",null,[e.value?(c(),h("div",te,[i(_,{photos:JSON.parse(e.value)},null,8,["photos"]),r("div",{"w-full":"","text-center":"","mt-8":""},[r("button",{"m-auto":"",class:"btn","font-bold":"",onClick:y}," Encrypt Again ")])])):(c(),h("div",q,[r("div",ee,[$(r("input",{"onUpdate:modelValue":t[0]||(t[0]=m=>n.value=m),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:V(l.value&&"border-red"),onInput:t[1]||(t[1]=m=>l.value=!1),onKeyup:B(d,["enter"])},null,34),[[K,n.value]]),r("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:d})])]))])}}}),ne={text:"center",class:"yun-text-light",p:"2"},ae={class:"page-action",text:"center"},se=["title"],re=w({__name:"gallery",setup(s){const o=E(),{t:n}=S(),e=G(),l=O(e);Y([T({"@type":"CollectionPage"})]);const u=F(()=>e.value.photos||[]),y=j().value.addons["valaxy-addon-lightgallery"]?R(()=>W(()=>import("./YunGallery-Buvo7r1Z.js"),__vite__mapDeps([0,1,2,3]))):()=>null;return(p,t)=>{const _=H,m=z,x=oe,C=b("RouterView"),k=I,A=N;return c(),h(U,null,[i(k,null,{default:f(()=>[i(_),i(C,null,{default:f(({Component:P})=>[(c(),v(L(P),null,{"main-header":f(()=>[i(m,{title:a(l)||a(n)("title.gallery"),icon:a(e).icon||"i-ri-gallery-line",color:a(e).color,"page-title-class":a(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":f(()=>[r("div",ne,M(a(n)("counter.photos",u.value.length)),1),r("div",ae,[r("a",{class:"yun-icon-btn",title:a(n)("accessibility.back"),onClick:t[0]||(t[0]=()=>a(o).back())},t[1]||(t[1]=[r("div",{"i-ri-arrow-go-back-line":""},null,-1)]),8,se)]),a(e).encryptedPhotos?(c(),v(x,{key:0,"encrypted-photos":a(e).encryptedPhotos},null,8,["encrypted-photos"])):(c(),v(a(y),{key:1,photos:u.value},null,8,["photos"])),i(C)]),_:2},1024))]),_:1})]),_:1}),i(A)],64)}}}),ie=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{Z as _,ie as g};