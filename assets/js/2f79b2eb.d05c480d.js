"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[426],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,g=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Sync configuration",c={unversionedId:"configurations/sync-config",id:"configurations/sync-config",title:"Sync configuration",description:"This configuration is used to configure which resources are to be synced to and from the server. For every resource there is an optional property for indicating how the data (per resource) should be filter (search parameter).",source:"@site/docs/configurations/sync-config.mdx",sourceDirName:"configurations",slug:"/configurations/sync-config",permalink:"/configurations/sync-config",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/configurations/sync-config.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Register configuration",permalink:"/configurations/register-config"},next:{title:"Hands-on",permalink:"/hands-on/"}},p={},l=[{value:"Sample JSON",id:"sample-json",level:2},{value:"Config properties",id:"config-properties",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sync-configuration"},"Sync configuration"),(0,o.kt)("p",null,"This configuration is used to configure which resources are to be synced to and from the server. For every resource there is an optional property for indicating how the data (per resource) should be filter (search parameter)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"An application should only have one ",(0,o.kt)("inlineCode",{parentName:"p"},"sync")," configuration")),(0,o.kt)("h2",{id:"sample-json"},"Sample JSON"),(0,o.kt)("p",null,"{}"),(0,o.kt)("h2",{id:"config-properties"},"Config properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"appId"),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifier for the application"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"configType"),(0,o.kt)("td",{parentName:"tr",align:null},"Type of configuration"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"sync"))))))}u.isMDXComponent=!0}}]);