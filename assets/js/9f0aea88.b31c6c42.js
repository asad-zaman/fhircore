"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[520],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),d=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=d(e.components);return r.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(f,s(s({ref:a},l),{},{components:t})):r.createElement(f,s({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6594:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));const i={sidebar_position:3,sidebar_label:"Admin Dashboard Features"},s="Admin Dashboard Features",o={unversionedId:"features/admin-dashboard-features/readme",id:"features/admin-dashboard-features/readme",title:"Admin Dashboard Features",description:"Create practitioners",source:"@site/docs/features/admin-dashboard-features/readme.mdx",sourceDirName:"features/admin-dashboard-features",slug:"/features/admin-dashboard-features/",permalink:"/features/admin-dashboard-features/",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/features/admin-dashboard-features/readme.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Admin Dashboard Features"},sidebar:"defaultSidebar",previous:{title:"App Features",permalink:"/features/app-features/"},next:{title:"Supported Domains",permalink:"/features/supported-health-domains/"}},c={},d=[{value:"Create practitioners",id:"create-practitioners",level:3},{value:"Manage locations",id:"manage-locations",level:3},{value:"Manage care teams",id:"manage-care-teams",level:3},{value:"Manage and assign teams",id:"manage-and-assign-teams",level:3}],l={toc:d};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"admin-dashboard-features"},"Admin Dashboard Features"),(0,n.kt)("h3",{id:"create-practitioners"},"Create practitioners"),(0,n.kt)("p",null,"Enroll practitioners to use OpenSRP by capturing basic details such as name and username, then assigning roles and access permissions."),(0,n.kt)("h3",{id:"manage-locations"},"Manage locations"),(0,n.kt)("p",null,"Add and edit locations based on the health system's prebuilt location hierarchy (the hierarchy is defined when the dashboard is initially set up and is not editable). Locations include name, the parent location, status (active or inactive), and type (jurisdiction or building)."),(0,n.kt)("h3",{id:"manage-care-teams"},"Manage care teams"),(0,n.kt)("p",null,"A care team is a collection of practitioners that conduct similar activities. OpenSRP Admin Dashboard allows the ability to create a care team, add teams to an organization, mark the care team as active or inactive, and add practitioners to a care team."),(0,n.kt)("p",null,"It is required to assign care teams to locations. We assign caregiving practitioners to care teams, these care teams are assigned a managing organization. The Organization is the team. Organizations are then assigned to locations."),(0,n.kt)("h3",{id:"manage-and-assign-teams"},"Manage and assign teams"),(0,n.kt)("p",null,"Practitioners work at locations such as health facilities. Team assignment ensures navigation through the hierarchy of a country to the location where a team is to be assigned and assigning a team to a location."))}u.isMDXComponent=!0}}]);