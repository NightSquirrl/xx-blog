import{K as s,au as o,av as t,aa as r}from"./app-CLGX1n_q.js";import{c as u}from"./index-x8TNrC4q.js";function y(i){const e=s(!1),{top:a}=o(i);return t(i,([{isIntersecting:n}])=>{e.value=n}),{show:()=>{e.value||window.scrollTo(0,a.value)}}}function d(i,e){r(i,{initial:{opacity:0,y:e.y||40},enter:{opacity:1,y:0,transition:{delay:e.i*(e.delay||50),type:"spring",ease:u.easeIn,damping:8,duration:e.duration||400}}})}export{d as a,y as u};