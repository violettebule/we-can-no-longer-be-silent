import{p as r,u as p,r as x,j as t,A as b,m as w,T as m}from"./vendor-CZJs0MCY.js";const N=[{className:"font-bebas",fontName:"Bebas Neue"},{className:"font-josefin",fontName:"Josefin Sans"},{className:"font-rubik",fontName:"Rubik Mono One"},{className:"font-xanh",fontName:"Xanh Mono"},{className:"font-viaoda",fontName:"Viaoda Libre"},{className:"font-cucurucho",fontName:"Cucurucho"},{className:"font-missionControl",fontName:"Mission Control"},{className:"font-ultraprint",fontName:"Ultraprint"},{className:"font-ztFormom",fontName:"ZT Formom"},{className:"font-pirataOne",fontName:"Pirata One"}],u=N.map(e=>e.className);async function k(e){const s=await fetch("https://script.google.com/macros/s/AKfycbxiTg8e9K17GaHf0INJzTndQ5hsHBG9yrtzkE0N8sa165I1m2I2emoNi6-ShrKZ_9MTvw/exec");if(!s.ok)throw new Error("Network response was not ok");const n=await s.json();console.log(n);const a=n.map(o=>({name:r.sanitize(o["Name / Nombre"]),timestamp:r.sanitize(o.Timestamp),response:r.sanitize(o["What would you say about Femicide? ¿Qué dirías sobre feminicidio?"])}));return e(a),a}function S(e){const{data:s}=e,n=JSON.parse(s).event.namedValues;return{name:r.sanitize(n["Name / Nombre"][0])||"",timestamp:r.sanitize(n.Timestamp[0])||"",response:r.sanitize(n["What would you say about Femicide? ¿Qué dirías sobre feminicidio?"][0])||""}}const j=e=>u[e%u.length],_=(e,s)=>s==="monitor-1"?e.filter((n,a)=>a%2===0):s==="monitor-2"?e.filter((n,a)=>a%2!==0):e;function z(e,s){const n=window.innerWidth*.8,a=window.innerHeight*.75,o=16,i=8,c=(e<55?400:200)*(s?3:1),l=e*c,d=o*1.5,f=Math.floor(a/d),h=Math.ceil(l/f);return n/h/i*o}const F=e=>e==="1";function E(){return new Date().toISOString()}const O=({item:e,index:s,fontSize:n,textfitRefs:a,showDescription:o,isFeatured:i})=>{const c=p();return x.useEffect(()=>{(async()=>{await c.start({opacity:0}),c.start({opacity:1})})()},[n,o,i]),t.jsx(b,{children:t.jsx(w.ul,{layout:!0,className:`flex flex-col grow ${i?"max-w-[50%] m-3 p-3 justify-center items-center min-w-[15%]":"m-1 items-end"}`,style:{fontSize:`${n}px`},initial:{opacity:0},animate:c,children:t.jsxs("div",{className:`relative grow text-justify bg-white bg-opacity-60 ${o?"max-w-52":i?"w-[80%]":""}`,children:[t.jsx("div",{className:"text-transparent",children:e.response}),t.jsxs("div",{className:"absolute inset-0 text-balance justify-end",ref:l=>l&&(a.current[e.timestamp]=l),children:[t.jsx(m,{className:`flex w-full items-end h-[75%] ${j(s)}`,min:3,children:t.jsx("p",{children:e.response})},e.timestamp+"_response_text"),t.jsx("div",{className:"flex text-right w-full h-[25%] justify-end ",children:t.jsx(m,{className:"flex underline h-full text-gray-500 w-[90%] justify-end items-center",max:i?35:17,children:t.jsx("p",{children:e.name})},e.timestamp+"_response_author")})]})]})},e.timestamp+"_response_item")})},y={en:{title:"We Can No Longer Be Silent",switchLanguage:"Ver en español",description:'In 1976, Diane E. Russell defined Femicide as "the killing of females by males because they are female." However, the majority of countries, including the U.S., do not have a formal legal definition of femicide, which makes it more difficult to monitor, and consequently, hinders efforts for prevention and response.',callToAction:"What would you say about Femicide? Take action and contribute a statement about Femicide. Submit your statement and your words will be instantly projected across the walls, becoming part of a living archive.",instructions:"Instructions for participation:",accessForm:"Use",seeContributions:"to access the form and use",linkText:"this link",seeAllContributions:"to see all the contributions."},sp:{title:"Ya No Podemos Callar",switchLanguage:"View in English",description:'En 1976, Diane E. Russell definió el Feminicidio como "el asesinato de mujeres por hombres debido a que son mujeres." Sin embargo, la mayoría de los países, incluidos los EE. UU., no tienen una definición legal formal de feminicidio, lo que dificulta su monitoreo y, en consecuencia, obstaculiza los esfuerzos de prevención y acción.',callToAction:"¿Qué dirías sobre Feminicidio? Toma acción contribuyendo con una frase sobre Feminicidio. Envía tu frase y tus palabras se proyectarán instantáneamente en las paredes, convirtiéndose parte de un archivo activo.",instructions:"Instrucciones para participar:",accessForm:"Usa",seeContributions:"para acceder al formulario y usa",linkText:"este enlace",seeAllContributions:"para ver todas las contribuciones."}},g=({languagePref:e,setLanguagePref:s})=>{const n=y[e],a=e==="en"?"sp":"en";return t.jsxs("div",{className:"flex min-h-[20%] w-full p-8 justify-around font-josephin",children:[t.jsxs("div",{className:"flex w-[30%] justify-between flex-col",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold",children:n.title}),t.jsx("a",{href:"https://www.violettebule.com/contact",target:"_blank",rel:"noopener noreferrer",children:t.jsx("h2",{className:"text-2xl",children:"Violette Bule"})})]}),t.jsxs("div",{className:"flex text-gray-400 gap-3",children:[t.jsx("div",{className:"cursor-pointer",onClick:()=>s(a),children:n.switchLanguage})," • ",t.jsx("a",{href:"https://www.violettebule.com",target:"_blank",rel:"noopener noreferrer",children:"@violettebule"})," • ",t.jsx("a",{href:"https://www.violettebule.com/contact",target:"_blank",rel:"noopener noreferrer",children:"Contact"})]})]}),t.jsxs("h4",{className:"w-[40%] text-sm",children:[n.description,t.jsx("br",{}),t.jsx("br",{}),n.callToAction,t.jsx("br",{}),t.jsx("br",{}),t.jsx("b",{children:n.instructions})," ",n.accessForm," ",t.jsx("a",{className:"text-blue-500 underline",href:"https://docs.google.com/forms/d/1r6tINayQ_aTQRv7TR-dZi4jrErXSQjp_VYwOKOFriQM/viewform?",target:"_blank",rel:"noopener noreferrer",children:n.linkText})," ",n.seeContributions," ",t.jsx("a",{className:"text-blue-500 underline",href:"/we-can-no-longer-be-silent",children:n.linkText})," ",n.seeAllContributions]})]})},A=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}));export{A as D,O as R,_ as a,F as b,z as c,k as d,N as f,E as g,S as t};
