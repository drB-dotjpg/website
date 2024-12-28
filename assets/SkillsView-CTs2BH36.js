import{i as h,d as b,c,a as t,F as u,r as v,u as g,o as a,t as p,b as w,w as S,g as _,n as f,j as C}from"./index-C6ThL2K_.js";/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=({size:l,strokeWidth:n=2,absoluteStrokeWidth:r,color:s,iconNode:m,name:e,class:o,...x},{slots:d})=>h("svg",{...i,width:l||i.width,height:l||i.height,stroke:s||i.stroke,"stroke-width":r?Number(n)*24/Number(l):n,class:["lucide",`lucide-${j(e??"icon")}`],...x},[...m.map(k=>h(...k)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(l,n)=>(r,{slots:s})=>h(L,{...r,iconNode:n,name:l},s);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=y("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),A=[{name:"Frontend Development",skills:[{name:"JavaScript",level:3},{name:"TypeScript",level:3,url:"https://www.typescriptlang.org/"},{name:"CSS",level:3},{name:"HTML",level:3},{name:"Vue",level:3,url:"https://vuejs.org/"},{name:"LitElement",level:3,url:"https://lit.dev/"},{name:"GSAP",level:3,url:"https://gsap.com/"},{name:"React",level:2,url:"https://react.dev/"},{name:"JSX",level:2,url:"https://react.dev/learn/writing-markup-with-jsx"},{name:"Vite",level:2,url:"https://vite.dev/"},{name:"Sass (SCSS)",level:2,url:"https://sass-lang.com/"},{name:"Tailwind CSS",level:2,url:"https://tailwindcss.com/"},{name:"Inertia JS",level:2,url:"https://inertiajs.com/"},{name:"Flask",level:1,url:"https://flask.palletsprojects.com/en/stable/"},{name:"Webpack",level:1,url:"https://webpack.js.org/"},{name:"Three.js",level:1,url:"https://threejs.org/"}]},{name:"Backend Development",skills:[{name:"Node.js",level:3,url:"https://nodejs.org"},{name:"Python",level:2,url:"https://www.python.org/"},{name:"C#",level:2},{name:"Java",level:2},{name:"SQL",level:2},{name:"PHP",level:1},{name:"GraphQL",level:1,url:"https://graphql.org/"},{name:"C",level:1},{name:"C++",level:1}]},{name:"Other Development",skills:[{name:"Git",level:3},{name:"Figma",level:2,url:"https://www.figma.com/"},{name:"Docker",level:1,url:"https://www.docker.com/"},{name:"AWS",level:1,url:"https://aws.amazon.com/"},{name:"Azure",level:1,url:"https://azure.microsoft.com/"}]},{name:"Platforms",skills:[{name:"Windows",level:3},{name:"Linux",level:2},{name:"Android",level:2},{name:"MacOS",level:1}]}],B={class:"flex flex-col gap-8"},F={class:"flex flex-col gap-4"},P={class:"text-3xl font-semibold"},T={class:"flex gap-3 flex-wrap"},V={class:"flex items-center gap-2 text-xl font-semibold"},M={class:"w-full flex gap-1"},q=b({__name:"SkillsView",setup(l){function n(r){switch(r){case 1:return"Familiar";case 2:return"Proficient";case 3:return"Strong"}}return(r,s)=>(a(),c("main",B,[s[0]||(s[0]=t("h2",{class:"text-4xl font-bold underline underline-offset-4"},"Skills",-1)),(a(!0),c(u,null,v(g(A),m=>(a(),c("div",F,[t("h3",P,p(m.name),1),t("div",T,[(a(!0),c(u,null,v(m.skills,e=>(a(),w(C(e.url?"a":"div"),{href:e.url,target:"_blank",class:f(["bg-black/40 rounded p-3 flex flex-col gap-2 w-full lg:w-56 backdrop-blur-sm transition-colors no-underline group",{"hover:bg-white hover:text-black":e.url}])},{default:S(()=>[t("div",V,[t("div",null,p(e.name),1),e.url?(a(),w(g(D),{key:0,class:"w-4 h-4"})):_("",!0)]),t("div",M,[(a(),c(u,null,v(3,o=>t("div",{class:f(["flex-grow h-1 transition-colors",{"bg-green-300 ":o<=e.level,"group-hover:bg-black":o<=e.level&&e.url,"bg-white/10":o>e.level,"group-hover:bg-black/20":o>e.level&&e.url}])},null,2)),64))]),t("div",null,p(n(e.level)),1)]),_:2},1032,["href","class"]))),256))])]))),256))]))}});export{q as default};
