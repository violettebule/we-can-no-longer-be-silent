const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/components-ipOGQ4d3.js","assets/vendor-BVVgllYg.js"])))=>i.map(i=>d[i]);
import{r as u,F as C,u as R,a as T,b as D,c as N,d as U,j as t,Q as O,e as q,f as A,g as _,C as S,h as I,B as Q,R as z,i as P}from"./vendor-BVVgllYg.js";import{f as $,t as B,g as K,a as k,c as W,R as j,b as X,d as V}from"./components-ipOGQ4d3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function c(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(s){if(s.ep)return;s.ep=!0;const e=c(s);fetch(s.href,e)}})();const J="modulepreload",Y=function(o){return"/we-can-no-longer-be-silent/"+o},E={},G=function(r,c,d){let s=Promise.resolve();if(c&&c.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));s=Promise.all(c.map(i=>{if(i=Y(i),i in E)return;E[i]=!0;const f=i.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${p}`))return;const l=document.createElement("link");if(l.rel=f?"stylesheet":J,f||(l.as="script",l.crossOrigin=""),l.href=i,n&&l.setAttribute("nonce",n),document.head.appendChild(l),f)return new Promise((g,x)=>{l.addEventListener("load",g),l.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>r()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})},H=()=>{const[o,r]=u.useState(!1),[c,d]=u.useState([]);return u.useEffect(()=>{const s=$.map(({fontName:e})=>new C(e).load("",5e3).then(()=>({fontName:e,loaded:!0})).catch(()=>({fontName:e,loaded:!1})));Promise.all(s).then(e=>{const n=e.filter(i=>!i.loaded).map(i=>i.fontName);n.length>0?d(n):(r(!0),window.dispatchEvent(new Event("resize")))}).catch(e=>{console.error("Error during font loading process:",e)})},[]),{isFontsLoaded:o,failedFonts:c}},b=(o,r)=>{R(o,r),u.useEffect(()=>()=>{},[o])},M=(o,r)=>{b("form-submissions",d=>{const s=B(d);o(e=>[...e,s]),r(e=>{const n=new Set(e);return n.add(s.timestamp),n}),setTimeout(()=>{r(e=>{const n=new Set(e);return n.delete(s.timestamp),n})},1e4)})},Z=(o,r)=>{b("test-updates",()=>{const d={name:"Teresa",response:"This is my test response This is my test response This is my test response This is my test response",timestamp:K()};o(s=>[...s,d]),r(s=>{const e=new Set(s);return e.add(d.timestamp),e}),setTimeout(()=>{r(s=>{const e=new Set(s);return e.delete(d.timestamp),e})},5e3)})},ee=()=>{const o=T();b("sheet-update",()=>{o.invalidateQueries({queryKey:["data"]})})},se=u.lazy(()=>G(()=>import("./components-ipOGQ4d3.js").then(o=>o.D),__vite__mapDeps([0,1])));function F(){const[o,r]=D(),[c,d]=u.useState(o.get("lang")||"en");u.useEffect(()=>{r(a=>(a.set("lang",c),a))},[c,r]);const s=N(),e=new URLSearchParams(s.search),n=e.get("show"),i=e.get("show-desc"),[f,p]=u.useState([]),[l,g]=u.useState(new Set),x=u.useRef({}),{isLoading:L,error:v}=U({queryKey:["data"],queryFn:()=>V(p),staleTime:1/0});if(M(p,g),Z(p,g),ee(),!H())return t.jsx("div",{className:"w-screen h-screen flex items-center justify-center",children:t.jsx("p",{className:"text-xl",children:"Fonts loading..."})});if(L)return t.jsx("div",{children:"Loading..."});if(v)return t.jsxs("div",{children:["Error: ",v.message]});const y=k(f,n),w=W(y.length,!!l.size),h=X(i);return t.jsxs("div",{className:"flex w-screen h-screen items-center flex-col",children:[h?t.jsx(u.Suspense,{fallback:t.jsx("div",{children:"Loading description..."}),children:t.jsx(se,{languagePref:c,setLanguagePref:d})}):null,t.jsx("div",{className:`flex grow p-0 bg-feminicidio bg-repeat ${h?"w-[80%] border-4 border-gray-100 max-h-[70%]":"w-full h-full"}`,children:t.jsxs("li",{className:`flex flex-col ${h?"w-full h-full":"w-screen h-screen"}`,children:[t.jsx("div",{className:"flex grow flex-wrap",children:y.filter((a,m)=>m%2===0&&!l.has(a.timestamp)).map((a,m)=>t.jsx(j,{item:a,index:m,fontSize:w,textfitRefs:x,showDescription:h,isFeatured:!1},a.timestamp))}),t.jsx("div",{className:`flex justify-around flex-wrap ${l.size>0?"min-h-[30%]":""}`,children:y.filter(a=>l.has(a.timestamp)).map((a,m)=>t.jsx(j,{item:a,index:m,fontSize:w,textfitRefs:x,showDescription:h,isFeatured:!0},a.timestamp))}),t.jsx("div",{className:"flex grow flex-wrap",children:y.filter((a,m)=>m%2===1&&!l.has(a.timestamp)).map((a,m)=>t.jsx(j,{item:a,index:m,fontSize:w,textfitRefs:x,showDescription:h,isFeatured:!1},a.timestamp))})]})})]})}const te=new O,ne=new q.Realtime({key:"dDoULg.CBlbwg:iYgskWpW5sI4puyUDfHXAOfJ17X_DuyKVPb_QelkXNQ"});A(document.getElementById("root")).render(t.jsx(u.StrictMode,{children:t.jsx(_,{client:ne,children:t.jsx(S,{channelName:"test-updates",children:t.jsx(S,{channelName:"sheet-update",children:t.jsx(S,{channelName:"form-submissions",children:t.jsx(I,{client:te,children:t.jsx(Q,{children:t.jsxs(z,{children:[t.jsx(P,{path:"/",element:t.jsx(F,{})}),t.jsx(P,{path:"/*",element:t.jsx(F,{})})]})})})})})})})}));
