import{o as c,c as l,a as s,b,r as m,d as u,w as f,F as x,e as y,u as $,p as L,f as w,g as k,h,t as B,n as I,i as O,j as N,k as S,l as q,m as C}from"./vendor.87f05abb.js";const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};P();var j="/vue3Blog/assets/dopee.600a269f.jpg",d=(n,r)=>{const a=n.__vccOpts||n;for(const[t,e]of r)a[t]=e;return a};const A={},E={class:"container px-4 bg-purple-300"},F=s("h1",null,"ABOUT",-1),H=s("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis explicabo nisi minima id accusamus nostrum optio, sit vero nihil.",-1),T=s("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, maiores.",-1),V=[F,H,T];function D(n,r){return c(),l("div",E,V)}var M=d(A,[["render",D]]);const z={},G={class:"container px-4 bg-blue-300"},K=s("h1",null,"NOTES",-1),R=s("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis explicabo nisi minima id accusamus nostrum optio, sit vero nihil.",-1),U=s("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, maiores.",-1),W=[K,R,U];function J(n,r){return c(),l("div",G,W)}var Q=d(z,[["render",J]]);const _="/vue3Blog/",g=[{path:`${_}about`,meta:{title:"\u95DC\u65BC\u6211"},component:M},{path:`${_}notes`,meta:{title:"\u524D\u7AEF\u958B\u767C\u7B46\u8A18"},component:Q},{path:"/:path(.*)",redirect:`${_}about`}];const v=n=>(L("data-v-13a226de"),n=n(),w(),n),X={class:"bg-white shadow py-1"},Y={class:"container px-4 mx-auto md:flex md:items-center"},Z={class:"flex justify-between items-center"},ee=v(()=>s("img",{class:"rounded-full h-16 w-16 py-2 px-2",src:j,alt:"logo"},null,-1)),te=h("BLOG DOPI"),oe=v(()=>s("button",{class:"hamberBtn md:hidden",id:"navbar-toggle"},[s("i",{class:"fas fa-bars"})],-1)),se={class:"hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 bg-gray-100 md:bg-white",id:"navbar-collapse"},ne={setup(n){const r=t=>{let e=document.querySelector("#navbar-collapse");e.classList.toggle("hidden"),e.classList.toggle("flex")};b(()=>{let t=document.querySelector("#navbar-toggle");t.onclick=r});const a=g.map(t=>{var e;if((e=t.meta)==null?void 0:e.title)return{name:t.meta.title,route:t.path}}).filter(t=>t);return(t,e)=>{const o=m("router-link");return c(),l("div",X,[s("div",Y,[s("div",Z,[ee,u(o,{class:"font-bold text-xl text-indigo-600 fontIkea",to:"/about"},{default:f(()=>[te]),_:1}),oe]),s("div",se,[(c(!0),l(x,null,y($(a),i=>(c(),k(o,{key:i.name,class:I(t.$route.path===i.route?"active":"menuItem"),to:i.route,onClick:r},{default:f(()=>[h(B(i.name),1)]),_:2},1032,["class","to"]))),128))])])])}}};var re=d(ne,[["__scopeId","data-v-13a226de"]]);const ie={class:"container mx-auto"},ae={setup(n){return O(0),(r,a)=>{const t=m("router-view");return c(),l("div",null,[u(re),s("main",ie,[u(t)])])}}},ce=N(),p=S(ae);p.use(ce);const le=q({history:C(),routes:g});p.use(le);p.mount("#app");