(()=>{var e={};e.id=746,e.ids=[746],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9936:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(8182),s(4753),s(5866);var r=s(3191),a=s(8716),n=s(7922),i=s.n(n),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["contact-us",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,8182)),"C:\\Users\\goril\\OneDrive\\Documents\\uk-hockey\\app\\contact-us\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,4753)),"C:\\Users\\goril\\OneDrive\\Documents\\uk-hockey\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\goril\\OneDrive\\Documents\\uk-hockey\\app\\contact-us\\page.tsx"],m="/contact-us/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/contact-us/page",pathname:"/contact-us",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2088:(e,t,s)=>{Promise.resolve().then(s.bind(s,1781))},8751:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},651:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,9404,23))},1781:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(326),a=s(7577);let n={_origin:"https://api.emailjs.com"},i=(e,t,s)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class o{constructor(e){this.status=e.status,this.text=e.responseText}}let l=(e,t,s={})=>new Promise((r,a)=>{let i=new XMLHttpRequest;i.addEventListener("load",({target:e})=>{let t=new o(e);200===t.status||"OK"===t.text?r(t):a(t)}),i.addEventListener("error",({target:e})=>{a(new o(e))}),i.open("POST",n._origin+e,!0),Object.keys(s).forEach(e=>{i.setRequestHeader(e,s[e])}),i.send(t)}),c={send:(e,t,s,r)=>{let a=r||n._userID;return i(a,e,t),l("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:a,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"})}};function d(){let[e,t]=(0,a.useState)({name:"",email:"",subject:"blog",message:"",toWhom:"Mariana Caceres"}),s=e=>{let{name:s,value:r}=e.target;t(e=>({...e,[s]:r}))};return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center py-10",children:[(0,r.jsxs)("div",{className:"w-full max-w-4xl text-center mb-5",children:[r.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Who to Email"}),r.jsx("h4",{className:"text-m font-medium mb-2",children:"Here is our team, feel free to enter the form, and email any one of us:"}),(0,r.jsxs)("ul",{className:"list-none space-y-3",children:[r.jsx("li",{children:"Head of UK HOCKEY: Mariana Caceres, Mjcc-0612@hotmail.com"}),r.jsx("li",{children:"Head of Blogs: -blank-"}),r.jsx("li",{children:"Support: -blank-"})]})]}),(0,r.jsxs)("form",{onSubmit:s=>{s.preventDefault();let r={"Mariana Caceres":"Mjcc-0612@hotmail.com",Option2:"caceres-camiloaga.mariana@bro.gdst.net",Option3:"option3@example.com"}[e.toWhom]||"default@example.com";c.send("mjcc-service-id","template_ofkz7ba",{name:e.name,email:e.email,subject:e.subject,message:e.message,toWhom:e.toWhom,recipient_email:r},"8q1iruLGhJQsgLDJ4").then(e=>{console.log("Success:",e.text),alert("Message sent successfully!"),t({name:"",email:"",subject:"blog",message:"",toWhom:"Mariana Caceres"})}).catch(e=>{console.error("Error sending email:",e),alert("Failed to send message, please try again.")})},className:"bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full",children:[r.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Contact Us"}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"toWhom",className:"block text-sm font-medium text-gray-700",children:"To Whom"}),(0,r.jsxs)("select",{id:"toWhom",name:"toWhom",value:e.toWhom,onChange:s,className:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[r.jsx("option",{value:"Mariana Caceres",children:"Mariana Caceres"}),r.jsx("option",{value:"Option2",children:"Option 2"}),r.jsx("option",{value:"Option3",children:"Option 3"})]})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),r.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:s,className:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:!0})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Your Email"}),r.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:s,className:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:!0})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700",children:"Subject"}),(0,r.jsxs)("select",{id:"subject",name:"subject",value:e.subject,onChange:s,className:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[r.jsx("option",{value:"blog",children:"Blog"}),r.jsx("option",{value:"news",children:"News"}),r.jsx("option",{value:"other",children:"Other"})]})]}),(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700",children:"Message"}),r.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:s,rows:"4",className:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:!0})]}),r.jsx("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Submit"})]})]})}},8182:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var r=s(8570);let a=(0,r.createProxy)(String.raw`C:\Users\goril\OneDrive\Documents\uk-hockey\app\contact-us\page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,r.createProxy)(String.raw`C:\Users\goril\OneDrive\Documents\uk-hockey\app\contact-us\page.tsx#default`)},4753:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p,metadata:()=>x});var r=s(9510),a=s(7366),n=s.n(a);s(7272);var i=s(1159),o=s(3025),l=s(791),c=s(650);let d=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=i.forwardRef(({className:e,variant:t,size:s,asChild:a=!1,...n},i)=>{let l=a?o.g7:"button";return r.jsx(l,{className:(0,c.cn)(d({variant:t,size:s,className:e})),ref:i,...n})});m.displayName="Button";var u=s(7371),h=s(5739);let x={title:"UK Hockey",description:"Generated by Mariana"};function p({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:n().className,children:[(0,r.jsxs)("header",{className:"bg-secondary text-primary py-4 px-6 md:px-10 flex items-center justify-between",children:[r.jsx(u.default,{href:"/",className:"text-2xl font-bold",prefetch:!1,children:"UK Hockey"}),(0,r.jsxs)("nav",{className:"hidden md:flex items-center space-x-6",children:[r.jsx(u.default,{href:"/players",className:"hover:underline",prefetch:!1,children:"Players"}),r.jsx(u.default,{href:"/teams",className:"hover:underline",prefetch:!1,children:"Teams"}),r.jsx(u.default,{href:"/pathways",className:"hover:underline",prefetch:!1,children:"Pathways"}),r.jsx(u.default,{href:"/wall-of-fame",className:"hover:underline",prefetch:!1,children:"Wall of Fame"}),r.jsx(u.default,{href:"/contact-us",className:"hover:underline",prefetch:!1,children:"Contact Us"}),r.jsx(u.default,{href:"/sign-in",passHref:!0,children:r.jsx(m,{variant:"default",children:"Sign In"})})]}),(0,r.jsxs)(m,{variant:"outline",size:"icon",className:"md:hidden",children:[r.jsx(h.Z,{className:"h-6 w-6"}),r.jsx("span",{className:"sr-only",children:"Toggle navigation"})]})]}),(0,r.jsxs)("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 w-24 bg-[url('/pic2.png')] bg-cover bg-no-repeat",style:{backgroundPosition:"left center"}}),r.jsx("div",{className:"absolute inset-y-0 right-0 w-24 bg-[url('/pic2.png')] bg-cover bg-no-repeat",style:{backgroundPosition:"right center"}}),r.jsx("main",{className:"relative py-8 px-2 md:px-4 bg-white max-w-4xl mx-auto",children:e})]}),r.jsx("footer",{className:"bg-muted text-muted-foreground py-6 px-6 md:px-10",children:(0,r.jsxs)("div",{className:"container mx-auto flex flex-col md:flex-row items-center justify-between",children:[r.jsx("p",{children:"\xa9 2024 Hockey Website"}),(0,r.jsxs)("nav",{className:"flex items-center space-x-4 mt-4 md:mt-0",children:[r.jsx(u.default,{href:"#",className:"hover:underline",prefetch:!1,children:"About"}),r.jsx(u.default,{href:"#",className:"hover:underline",prefetch:!1,children:"Privacy"}),r.jsx(u.default,{href:"#",className:"hover:underline",prefetch:!1,children:"Terms"})]})]})})]})})}},650:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var r=s(5761),a=s(2386);function n(...e){return(0,a.m6)((0,r.W)(e))}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,433,621],()=>s(9936));module.exports=r})();