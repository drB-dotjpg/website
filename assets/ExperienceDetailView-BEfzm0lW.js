import{e as g}from"./experience-BF7lFdKv.js";import{p as m}from"./projects-CYYazRtS.js";import{d as h,e as b,c as l,a as o,f as x,t as r,u as e,F as d,r as u,g as f,h as v,o as a,b as k,w,R as j}from"./index-B6RzhrJj.js";const y={class:"flex flex-col gap-6"},B={class:"flex flex-col gap-1"},D={class:"text-4xl font-bold underline underline-offset-4"},L={class:"flex flex-wrap gap-2"},V={class:"px-3 py-2 bg-black/40 rounded backdrop-blur-sm"},C=["innerHTML"],E={key:0,class:"flex flex-col gap-2"},N={class:"text-2xl font-semibold"},R={class:"text-xl font-semibold"},T={key:1,class:"flex flex-wrap gap-4"},$=["src","alt"],P=h({__name:"ExperienceDetailView",setup(F){const c=v(),t=g[c.params.slug],p=b(()=>{const i={};for(const n in m){const s=m[n];s.with===c.params.slug&&(i[n]=s)}return i});return(i,n)=>(a(),l("main",y,[o("div",B,[n[1]||(n[1]=o("div",{class:"font-semibold text-2xl"},"Experience /",-1)),o("h2",D,[x(r(e(t).name),1),n[0]||(n[0]=o("br",null,null,-1)),x(r(e(t).position),1)])]),o("div",L,[(a(!0),l(d,null,u(e(t).tags,s=>(a(),l("div",V,r(s),1))),256))]),o("p",{innerHTML:e(t).body},null,8,C),Object.values(p.value).length>0?(a(),l("div",E,[o("h3",N,"Projects associated with "+r(e(t).name)+":",1),(a(!0),l(d,null,u(p.value,(s,_)=>(a(),k(e(j),{to:`/projects/${_}`,class:"px-3 py-2 bg-black/40 rounded flex flex-col hover:bg-white hover:text-black no-underline transition-colors backdrop-blur-sm"},{default:w(()=>[o("div",R,r(s.name),1),o("p",null,r(s.preview),1)]),_:2},1032,["to"]))),256))])):f("",!0),e(t).img&&e(t).img.length>0?(a(),l("div",T,[(a(!0),l(d,null,u(e(t).img,s=>(a(),l("img",{src:`/img/experience/${e(c).params.slug}/${s}`,alt:e(t).name,class:"rounded shadow max-w-[28rem] h-auto max-h-96 w-fit object-cover"},null,8,$))),256))])):f("",!0)]))}});export{P as default};
