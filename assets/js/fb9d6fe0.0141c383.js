"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[702],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={},i="Platform Components",s={unversionedId:"android-app/getting-started/platform-components",id:"android-app/getting-started/platform-components",title:"Platform Components",description:"FHIR Data Store",source:"@site/docs/android-app/getting-started/platform-components.md",sourceDirName:"android-app/getting-started",slug:"/android-app/getting-started/platform-components",permalink:"/android-app/getting-started/platform-components",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/android-app/getting-started/platform-components.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Getting started",permalink:"/android-app/getting-started/"},next:{title:"Configurations",permalink:"/android-app/configurations/"}},l={},p=[{value:"FHIR Data Store",id:"fhir-data-store",level:2},{value:"HAPI",id:"hapi",level:3},{value:"Google Cloud Healthcare API",id:"google-cloud-healthcare-api",level:3},{value:"Data warehouse and analytics database",id:"data-warehouse-and-analytics-database",level:2},{value:"Google Cloud Healthcare API and Big Query",id:"google-cloud-healthcare-api-and-big-query",level:3},{value:"Parquet and Spark SQL",id:"parquet-and-spark-sql",level:3},{value:"Identity and Access Management",id:"identity-and-access-management",level:2},{value:"FHIR Access Proxy",id:"fhir-access-proxy",level:3},{value:"Keycloak",id:"keycloak",level:3},{value:"Web data viewer",id:"web-data-viewer",level:2},{value:"FHIR Web",id:"fhir-web",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"platform-components"},"Platform Components"),(0,n.kt)("h2",{id:"fhir-data-store"},"FHIR Data Store"),(0,n.kt)("p",null,"OpenSRP relies on a FHIR data store to serve as a source of truth for all data, both configuration data and transactional health record data."),(0,n.kt)("h3",{id:"hapi"},"HAPI"),(0,n.kt)("p",null,"OpenSRP can be made to work with any FHIR data store but out of the box assumes extensions to the default FHIR API defined by a set of open source ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/opensrp/hapi-fhir-opensrp-extensions"},"HAPI FHIR extensions"),"."),(0,n.kt)("h3",{id:"google-cloud-healthcare-api"},"Google Cloud Healthcare API"),(0,n.kt)("p",null,"When extended by these ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/opensrp/hapi-fhir-opensrp-extensions"},"HAPI FHIR extensions")," the Cloud Healthcare API can be used as the data and configuration store for OpenSRP."),(0,n.kt)("h2",{id:"data-warehouse-and-analytics-database"},"Data warehouse and analytics database"),(0,n.kt)("p",null,"Although not required, we highly recommend replicating your transactional health data to a data warehouse to monitor and explore the data in your OpenSRP Healthcare projects."),(0,n.kt)("h3",{id:"google-cloud-healthcare-api-and-big-query"},"Google Cloud Healthcare API and Big Query"),(0,n.kt)("p",null,"A simple way and efficient way to move FHIR data from a transaction system into an analytics system is to replicate your data to the Cloud Healthcare API and then connect this data to Big Query."),(0,n.kt)("h3",{id:"parquet-and-spark-sql"},"Parquet and Spark SQL"),(0,n.kt)("p",null,"For on premise implementations the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/fhir-data-pipes"},"FHIR Data Pipes")," is an open source library can synchronize FHIR resources from HAPI to flat-files then transform those files to a relational format that is queryable using SQL."),(0,n.kt)("h2",{id:"identity-and-access-management"},"Identity and Access Management"),(0,n.kt)("p",null,"OpenSRP connects to a third party identity and access management (IAM) system to authenticate and authorize users of the system."),(0,n.kt)("h3",{id:"fhir-access-proxy"},"FHIR Access Proxy"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/fhir-access-proxy"},"FHIR Access Proxy")," is an open source endpoint agnostic interface between an IAM and a health store."),(0,n.kt)("h3",{id:"keycloak"},"Keycloak"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak")," is an open source IAM that stores users, groups, and the access roles of those groups."),(0,n.kt)("h2",{id:"web-data-viewer"},"Web data viewer"),(0,n.kt)("p",null,"This allows the user to view data in a health data store and perform common editing and management tasks on this data."),(0,n.kt)("h3",{id:"fhir-web"},"FHIR Web"),(0,n.kt)("p",null,"The open source ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/opensrp/web"},"FHIR Web")," web application allows you to view FHIR resources, create new FHIR resources, and manage user access to FHIR systems through FHIR Practitioner resources associated with an IAM."))}d.isMDXComponent=!0}}]);