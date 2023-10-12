"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Profile"},l="Profile configuration",o={unversionedId:"engineering/android-app/configurations/user-interface/profile-config",id:"engineering/android-app/configurations/user-interface/profile-config",title:"Profile",description:"These configurations are used to control the content of the profile screen as well as how to render the profile UI. Typically for every register in application there is a corresponding profile. Technically the same implementation is used for all profiles, however the content configured.",source:"@site/docs/engineering/android-app/configurations/user-interface/profile-config.mdx",sourceDirName:"engineering/android-app/configurations/user-interface",slug:"/engineering/android-app/configurations/user-interface/profile-config",permalink:"/engineering/android-app/configurations/user-interface/profile-config",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering/android-app/configurations/user-interface/profile-config.mdx",tags:[],version:"current",frontMatter:{title:"Profile"},sidebar:"defaultSidebar",previous:{title:"Navigation",permalink:"/engineering/android-app/configurations/user-interface/navigation-config"},next:{title:"Register",permalink:"/engineering/android-app/configurations/user-interface/register-config"}},p={},d=[{value:"Working with dynamic data queries",id:"working-with-dynamic-data-queries",level:3},{value:"Config properties",id:"config-properties",level:2},{value:"Dynamic data pass between profiles and registers",id:"dynamic-data-pass-between-profiles-and-registers",level:2},{value:"Practitioner <strong>LAUNCH_PROFILE</strong>",id:"practitioner-launch_profile",level:3},{value:"household_config.json",id:"household_configjson",level:3},{value:"Dynamic data pass between profiles config properties",id:"dynamic-data-pass-between-profiles-config-properties",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profile-configuration"},"Profile configuration"),(0,r.kt)("p",null,"These configurations are used to control the content of the profile screen as well as how to render the profile UI. Typically for every register in application there is a corresponding profile. Technically the same implementation is used for all profiles, however the content configured."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For every register in the application there should at least be one profile configuration. Similar registers can re-use the same profile configuration.")),(0,r.kt)("h3",{id:"working-with-dynamic-data-queries"},"Working with dynamic data queries"),(0,r.kt)("p",null,"Assume you would like to filter resource data based on a criteria that needs computation before application. e.g show patients who are under 5 years or over 18 below, then this is the config to use."),(0,r.kt)("p",null,"Before you use this rule on a dataQuery, you need  to execute it first. The rules are executed within a ",(0,r.kt)("inlineCode",{parentName:"p"},"configRules")," block which follows rules engine standard and default priority of 1 which can be change based on requirement."),(0,r.kt)("p",null,"Below is a JSON config that shows how to execute rules. Refer to working with rules section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appId": "appId",\n  "configType": "register",\n  "id": "childRegister",\n  "configRules": [\n    {\n      "name": "under5",\n      "condition": "true",\n      "actions": [\n        "data.put(\'under5\', dateService.addOrSubtractYearFromCurrentDate(5,\'-\'))"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Below is a sample dataQuery config to filter register data by configRules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"fhirResource": {\n  "baseResource": {\n    "resource": "Patient",\n    "dataQueries": [\n      {\n        "paramName": "birthdate",\n        "filterCriteria": [\n          {\n            "dataType": "DATE",\n            "computedRule": "under5",\n            "prefix": "GREATERTHAN_OR_EQUALS"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"config-properties"},"Config properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," - unique identifier for the application"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"configType")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of configuration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fhirResource")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FhirResourceConfig")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secondaryResources")),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("inlineCode",{parentName:"td"},"FhirResourceConfig"),"s"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managingEntity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ManagingEntityConfig")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profileParams")),(0,r.kt)("td",{parentName:"tr",align:null},"A list Strings"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rules")),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("inlineCode",{parentName:"td"},"RuleConfig"),"s"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emptyList()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"topAppBar")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TopBarConfig")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"views")),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("inlineCode",{parentName:"td"},"ViewProperties")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fabActions")),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("inlineCode",{parentName:"td"},"NavigationMenuConfig"),"s"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emptyList()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"overFlowMenuItems")),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("inlineCode",{parentName:"td"},"OverflowMenuItemConfig"),"s"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emptyList()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filterActiveResources")),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("inlineCode",{parentName:"td"},"ActiveResourceFilterConfig"),"s"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"listOf(ActiveResourceFilterConfig(resourceType = ResourceType.Patient, active = true), ActiveResourceFilterConfig(resourceType = ResourceType.Group, active = true))"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"configRules")),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("inlineCode",{parentName:"td"},"RuleConfig"),"s"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contentBackgroundColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#FFFFFF"))))),(0,r.kt)("h2",{id:"dynamic-data-pass-between-profiles-and-registers"},"Dynamic data pass between profiles and registers"),(0,r.kt)("p",null,"For you to pass data between profiles you can make use of ",(0,r.kt)("strong",{parentName:"p"},"action config params")," which are executed when ",(0,r.kt)("strong",{parentName:"p"},"LAUNCH_PROFILE")," is invoked."),(0,r.kt)("p",null,"Data extraction happens during rules execution and is persisted in ",(0,r.kt)("inlineCode",{parentName:"p"},"computedValuesMap")," which is later used to interpolate values annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@value"),"."),(0,r.kt)("p",null,"For example, assume the ",(0,r.kt)("inlineCode",{parentName:"p"},"LAUNCH_PROFILE")," ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," function of ",(0,r.kt)("inlineCode",{parentName:"p"},"practitioner_profile_config")," takes you to ",(0,r.kt)("inlineCode",{parentName:"p"},"household_profile")," screen and you would like pass send ",(0,r.kt)("inlineCode",{parentName:"p"},"practitionerId")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"practitioner_profile_config")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"household_profile"),", define it as described below."),(0,r.kt)("h3",{id:"practitioner-launch_profile"},"Practitioner ",(0,r.kt)("strong",{parentName:"h3"},"LAUNCH_PROFILE")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write rules to extract the data you need."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"rules":[\n  {\n    "name": "practitionerId",\n    "condition": "true",\n    "actions": [\n      "data.put(\'practitionerId\', fhirPath.extractValue(Practitioner, \'Practitioner.id.replace(\\"Practitioner/\\",\\"\\")\').split(\\"/\\").get(0))"\n    ]\n  }\n]\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add your params in ",(0,r.kt)("strong",{parentName:"p"},"LAUNCH_REGISTER")," section of ",(0,r.kt)("inlineCode",{parentName:"p"},"practition_register_config.json")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"actions": [\n  {\n    "trigger": "ON_CLICK",\n    "workflow": "LAUNCH_PROFILE",\n    "id": "practitionerProfile",\n    "params": [\n      {\n        "paramType": "PARAMDATA",\n        "key": "practitionerId",\n        "value": "@{practitionerId}"\n      }\n    ]\n  }\n]\n')))),(0,r.kt)("h3",{id:"household_configjson"},"household_config.json"),(0,r.kt)("p",null,"A dataquery config to filter by ",(0,r.kt)("inlineCode",{parentName:"p"},"practitionerId"),". For more info refer to dataquery section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "householdQueryPractitionerId",\n  "filterType": "TOKEN",\n  "key": "_tag",\n  "valueType": "CODING",\n  "valueCoding": {\n    "system": "https://smartregister.org/",\n    "code": "@{practitionerId}"\n  }\n}\n')),(0,r.kt)("h2",{id:"dynamic-data-pass-between-profiles-config-properties"},"Dynamic data pass between profiles config properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules name"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for the rules"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"condition")),(0,r.kt)("td",{parentName:"tr",align:null},"specification of execution"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actions")),(0,r.kt)("td",{parentName:"tr",align:null},"an array of the rule logic with a fhirPathExpression"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"trigger")),(0,r.kt)("td",{parentName:"tr",align:null},"application workflow action"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"workflow")),(0,r.kt)("td",{parentName:"tr",align:null},"An application event that can trigger a workflow"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of actionParameters to pass to another profile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"emptyArray")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"paramType")),(0,r.kt)("td",{parentName:"tr",align:null},"Action ParameterType to use e.g PREPOPULATE OR PARAMDATA"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},"Action ParameterType unique key if defined but not tag is given"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"Action ParameterType corresponding key's value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);