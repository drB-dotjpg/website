import{p as x}from"./projects-Dy_C1Lsl.js";import{e as f}from"./experience-ctLUuPVF.js";import{d as _,c as a,a as s,f as d,t as l,u as e,b as h,w as g,g as u,F as p,r as m,h as b,o,R as w}from"./index-Da47HIoN.js";const k={class:"flex flex-col gap-6"},v={class:"flex flex-col gap-1"},j={class:"text-4xl font-bold underline underline-offset-4"},y={class:"text-xl font-semibold"},B={class:"flex flex-wrap gap-2"},D={class:"px-3 py-2 bg-black/40 rounded backdrop-blur-sm"},L=["innerHTML"],V={key:1,class:"flex flex-wrap gap-4"},C=["src","alt"],H=_({__name:"ProjectsDetailView",setup(N){const i=b(),t=x[i.params.slug],c=f[t.with];return(R,n)=>(o(),a("main",k,[s("div",v,[n[1]||(n[1]=s("div",{class:"font-semibold text-2xl"},"Projects /",-1)),s("h2",j,[d(l(e(t).name),1),n[0]||(n[0]=s("br",null,null,-1)),d(l(e(t).involvement),1)])]),e(t).with?(o(),h(e(w),{key:0,class:"px-3 py-2 flex flex-col bg-black/40 rounded backdrop-blur-sm hover:bg-white hover:text-black transition-colors no-underline",to:"/experience/"+e(t).with},{default:g(()=>[s("div",y,"With "+l(e(c).name),1),s("div",null,l(e(c).preview),1)]),_:1},8,["to"])):u("",!0),s("div",B,[(o(!0),a(p,null,m(e(t).tags,r=>(o(),a("div",D,l(r),1))),256))]),s("p",{innerHTML:e(t).body},null,8,L),e(t).img&&e(t).img.length>0?(o(),a("div",V,[(o(!0),a(p,null,m(e(t).img,r=>(o(),a("img",{src:`/img/projects/${e(i).params.slug}/${r}`,alt:e(t).name,class:"rounded shadow h-auto max-h-96 w-[24rem] max-w-full object-contain bg-black/20"},null,8,C))),256))])):u("",!0)]))}});export{H as default};