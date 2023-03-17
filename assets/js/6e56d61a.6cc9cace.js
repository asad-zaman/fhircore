"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[488],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||r;return t?a.createElement(m,s(s({ref:n},u),{},{components:t})):a.createElement(m,s({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={},s="FHIRPath Expressions",o={unversionedId:"advanced-fhir/fhir_path",id:"advanced-fhir/fhir_path",title:"FHIRPath Expressions",description:"Paths are defined using FhirPath, which is an expression language defined by FHIR. In its simplest form, this can take the form of a single dotted path:",source:"@site/docs/advanced-fhir/fhir_path.mdx",sourceDirName:"advanced-fhir",slug:"/advanced-fhir/fhir_path",permalink:"/advanced-fhir/fhir_path",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/advanced-fhir/fhir_path.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"CQL",permalink:"/advanced-fhir/cql"},next:{title:"Smart Vaccination Certificates",permalink:"/advanced-fhir/smart-vax-certs"}},l={},p=[{value:"Variable",id:"variable",level:2},{value:"How to evaluate the variable expression",id:"how-to-evaluate-the-variable-expression",level:3},{value:"Sample Questionnaire for Questionnaire level variable expressions",id:"sample-questionnaire-for-questionnaire-level-variable-expressions",level:4},{value:"API to evaluate variable expressions defined at the questionnaire level",id:"api-to-evaluate-variable-expressions-defined-at-the-questionnaire-level",level:4},{value:"Sample Questionnaire for Questionnaire item level variable expressions",id:"sample-questionnaire-for-questionnaire-item-level-variable-expressions",level:4},{value:"API to evaluate variable expressions defined at Questionnaire item level",id:"api-to-evaluate-variable-expressions-defined-at-questionnaire-item-level",level:4},{value:"Initial Expression",id:"initial-expression",level:2},{value:"EnableWhen Expression",id:"enablewhen-expression",level:2},{value:"Calculated Expression",id:"calculated-expression",level:2},{value:"Answer Expression",id:"answer-expression",level:2}],u={toc:p};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fhirpath-expressions"},"FHIRPath Expressions"),(0,i.kt)("p",null,"Paths are defined using ",(0,i.kt)("a",{parentName:"p",href:"http://hl7.org/fhirpath"},"FhirPath"),", which is an expression language defined by FHIR. In its simplest form, this can take the form of a single dotted path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Patient.name.given\n")),(0,i.kt)("p",null,"In the example above, the FHIRPath expression matches all of the patient's given names."),(0,i.kt)("h1",{id:"using-expressions"},"Using Expressions"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/behavior.html"},"Form Behavior"),", ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/populate.html"},"Questionnaire Population")," and ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/extraction.html"},"Data Extraction")," all rely on (or have features that rely on) the use of ",(0,i.kt)("a",{parentName:"p",href:"http://hl7.org/fhir/R4/metadatatypes.html#Expression"},"expressions"),"."),(0,i.kt)("h1",{id:"expression-extensions"},"Expression Extensions"),(0,i.kt)("p",null,"Expressions are introduced into Questionnaires using extensions - none of the 'core' data elements of Questionnaire makes use of extensions because they're considered an 'advanced' capability that is not currently supported by a large portion of the systems that make use of the Questioannaire resource. The extensions that make use of expressions and are supported in Android FHIR SDK are shown in the table below. Check out all types of ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions"},"available expression extensions"),"\n| Extension | Specs | Example |\n| --------- | ----- | ------- |\n| ",(0,i.kt)("a",{parentName:"p",href:"http://hl7.org/fhir/R4/extension-variable.html"},"variable")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions"},"purpose and usage")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/examples.html#calculatedexpression"},"Using variable")," |\n| ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-initialExpression.html"},"initialExpression")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions"},"purpose and usage")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/examples.html#initialexpression"},"Using initialExpression")," |\n| ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-enableWhenExpression.html"},"enableWhenExpression")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions"},"purpose and usage")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/examples.html#enableexamples"},"Using enableWhenExpression")," |\n| ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-calculatedExpression.html"},"calculatedExpression")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions"},"purpose and usage")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/examples.html#calculatedexpression"},"Using calculatedExpression")," |\n| ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-answerExpression.html"},"answerExpression")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions"},"purpose and usage")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/examples.html#reference-resource-profile-lookup"},"Using answerExpression")," |\n| ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-candidateExpression.html"},"candidateExpression")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions"},"purpose and usage")," | ",(0,i.kt)("a",{parentName:"p",href:"http://build.fhir.org/ig/HL7/sdc/examples.html#candidateExpression"},"Using candidateExpression")," |"),(0,i.kt)("h2",{id:"variable"},"Variable"),(0,i.kt)("p",null,"The variable expression sets a variable that is available for use in expressions within the same item and any descendant items. It has two main uses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It allows a complex calculation to be done once and used in multiple other places. (E.g. Determining the score for one group within the questionnaire response that will then be used in calculations on subsequent groups.)"),(0,i.kt)("li",{parentName:"ul"},"It allows a calculation to be done closer to the root of the questionnaire response or at the root of the questionnaire response where there is access to more of or all the answers from the questionnaire response. The calculated value might then be used as the answer to a descendant question. (Expressions cannot access answers that are not descendants of the current node.)")),(0,i.kt)("p",null,"The content type of a variable can be pretty much anything. It can be a collection or an individual item. It can be a simple element, a complex type, a resource or even a Bundle of resources.\nThe variable can be referenced by its name. Variable expressions SHALL specify a name. It is not allowed to define variable names that are already reserved by the base specification or by other variables in the questionnaire."),(0,i.kt)("h3",{id:"how-to-evaluate-the-variable-expression"},"How to evaluate the variable expression"),(0,i.kt)("p",null,"Variable expressions can be defined at the questionnaire and questionnaire item levels. The Structure Data Capture Library provides separate APIs to evaluate variable expressions defined at either questionnaire or questionnaire item level. "),(0,i.kt)("h4",{id:"sample-questionnaire-for-questionnaire-level-variable-expressions"},"Sample Questionnaire for Questionnaire level variable expressions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "resourceType": "Questionnaire",\n  "extension": [\n    {\n      "url": "http://hl7.org/fhir/StructureDefinition/variable",\n      "valueExpression": {\n        "name": "weight",\n        "language": "text/fhirpath",\n        "expression": "%resource.repeat(item).where(linkId=\'3.3.1\').item.answer.valueDecimal"\n      }\n    }\n  ],\n  "item": [\n    {\n      "extension": [\n        {\n          "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",\n          "valueCoding": {\n            "system": "http://unitsofmeasure.org",\n            "code": "kg"\n          }\n        }\n      ],\n      "linkId": "3.3.1",\n      "text": "Weight (kg)",\n      "type": "decimal"\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"api-to-evaluate-variable-expressions-defined-at-the-questionnaire-level"},"API to evaluate variable expressions defined at the questionnaire level"),(0,i.kt)("p",null,"To evaluate variable expressions defined at Questionnaire level, we have to pass a variable expression, Questionnaire, QuestionnaireResponse and an optional varaiblesMap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," internal fun evaluateQuestionnaireVariableExpression(\n    expression: Expression,\n    questionnaire: Questionnaire,\n    questionnaireResponse: QuestionnaireResponse,\n    variablesMap: MutableMap<String, Base?> = mutableMapOf()\n  ): Base?\n")),(0,i.kt)("h4",{id:"sample-questionnaire-for-questionnaire-item-level-variable-expressions"},"Sample Questionnaire for Questionnaire item level variable expressions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"item": [\n  {\n    "linkId": "/groupA",\n    "text": "Group A",\n    "type": "group",\n    "extension": [\n      {\n        "url": "http://hl7.org/fhir/StructureDefinition/variable",\n        "valueExpression": {\n          "name": "X",\n          "language": "text/fhirpath",\n          "expression": "item.where(linkId=\'/groupA/fieldB\').answer[0].valueInteger"\n        }\n      },\n      {\n        "url": "http://hl7.org/fhir/StructureDefinition/variable",\n        "valueExpression": {\n          "name": "Y",\n          "language": "text/fhirpath",\n          "expression": "%X + 2",\n          "comment": "References another variable on the same group"\n        }\n      }\n    ],\n    "item": [\n      {\n        "linkId": "/groupA/fieldB",\n        "text": "Field B",\n        "type": "integer"\n      }\n    ]\n  }\n]\n')),(0,i.kt)("h4",{id:"api-to-evaluate-variable-expressions-defined-at-questionnaire-item-level"},"API to evaluate variable expressions defined at Questionnaire item level"),(0,i.kt)("p",null,"To evaluate variable expressions defined at Questionnaire item level, we have to pass a variable expression, questionnaire, QuestionnaireResponse, questionnaireItemParentMap,QuestionnaireItem and an optional varaiblesMap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"internal fun evaluateQuestionnaireItemVariableExpression(\n    expression: Expression,\n    questionnaire: Questionnaire,\n    questionnaireResponse: QuestionnaireResponse,\n    questionnaireItemParentMap:\n      Map<Questionnaire.QuestionnaireItemComponent, Questionnaire.QuestionnaireItemComponent>,\n    questionnaireItem: Questionnaire.QuestionnaireItemComponent,\n    variablesMap: MutableMap<String, Base?> = mutableMapOf()\n  ): Base?\n")),(0,i.kt)("h2",{id:"initial-expression"},"Initial Expression"),(0,i.kt)("p",null,"Besides using ",(0,i.kt)("a",{parentName:"p",href:"http://hl7.org/fhir/R4/questionnaire-definitions.html#Questionnaire.item.initial"},"initial")," property in ",(0,i.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/R4/questionnaire.html"},"Questionnaire.item")," for providing a default answer on questionnaire load, ",(0,i.kt)("a",{parentName:"p",href:"https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-initialExpression.html"},"initial expression")," is another alternate way of providing default answer based on a FHIRPath expression i.e. rather than specifying a fixed value, the value is calculable. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is a Questionnaire.item-level extension"),(0,i.kt)("li",{parentName:"ul"},"Examples could be ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"current date i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"today() + 7 days")," or "),(0,i.kt)("li",{parentName:"ul"},"an expression based on current QuestionnaireResponse.item.answer. The QuestionnaireResponse in the current context can be referred to by %resource. i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%resource.item.where(linkId='weight').answer.first()")),(0,i.kt)("li",{parentName:"ul"},"an expression of based on launch context or information queried from external sources i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%patient.birthDate"),", full example questionnaire can be found ",(0,i.kt)("a",{parentName:"li",href:"https://build.fhir.org/ig/HL7/sdc/Questionnaire-demographics.json.html"},"here"),". "),(0,i.kt)("li",{parentName:"ul"},"an expression based on ",(0,i.kt)("inlineCode",{parentName:"li"},"variable")," extension. i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%weight * 0.25"),". See variable rules ",(0,i.kt)("a",{parentName:"li",href:"http://hl7.org/fhir/R4/extension-variable.html"},"here"))))),(0,i.kt)("p",null,"Both of the approaches are mutually exclusive and only one of these can be specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "item": [\n          {\n            "extension": [\n              {\n                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression",\n                "valueExpression": {\n                  "language": "text/fhirpath",\n                  "expression": "today() + 7 days"\n                }\n              }\n            ],\n            "linkId": "3.1",\n            "text": "Next follow up date",\n            "type": "date",\n          }\n        ]\n    }\n')),(0,i.kt)("h2",{id:"enablewhen-expression"},"EnableWhen Expression"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"enableWhen")," aka skip logic controls which questions, groups and display items would show or hide based on answers of other referenced questions within the response.\nBesides using ",(0,i.kt)("a",{parentName:"p",href:"http://hl7.org/fhir/R4/questionnaire-definitions.html#Questionnaire.item.enableWhen"},"enableWhen")," property in ",(0,i.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/R4/questionnaire.html"},"Questionnaire.item")," for providing skip logic, ",(0,i.kt)("a",{parentName:"p",href:"https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-enableWhenExpression.html"},"enableWhen expression")," is another alternate way of providing skip logic based on a dynamic fhirpath expression. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Elements that are not enabled are hidden from the user and can not be edited"),(0,i.kt)("li",{parentName:"ul"},"It needs to be evaluated each time any of the answers it depends on changes "),(0,i.kt)("li",{parentName:"ul"},"Any constraints associated with non-enabled elements i.e. ",(0,i.kt)("a",{parentName:"li",href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#required"},"required")," or ",(0,i.kt)("a",{parentName:"li",href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#minOccurs"},"minOccurs")," are ignored and no answers are stored for these."),(0,i.kt)("li",{parentName:"ul"},"Examples could be ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"an expression based on current QuestionnaireResponse.item.answer. The QuestionnaireResponse in current context can be referred by %resource. i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%resource.item.where(linkId='weight').answer.first() > 45")),(0,i.kt)("li",{parentName:"ul"},"an expression of based on launch context or information queried from external sources i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%patient.deceased = flase"),", full example questionnaire can be found ",(0,i.kt)("a",{parentName:"li",href:"https://build.fhir.org/ig/HL7/sdc/Questionnaire-demographics.json.html"},"here"),". "),(0,i.kt)("li",{parentName:"ul"},"an expression based on ",(0,i.kt)("inlineCode",{parentName:"li"},"variable")," extension. i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%weight > 60"),". See variable rules ",(0,i.kt)("a",{parentName:"li",href:"http://hl7.org/fhir/R4/extension-variable.html"},"here"))))),(0,i.kt)("p",null,"Both of the approaches are mutually exclusive and only one of these can specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "extension":[\n      {\n         "url":"http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression",\n         "valueExpression":{\n            "language":"text/fhirpath",\n            "expression":"%resource.repeat(item).where(linkId=\'gender\').answer.value.code =\'female\' and %resource.repeat(item).where(linkId=\'age\').answer.value > 49"\n         }\n      }\n   ],\n   "linkId":"3.1",\n   "text":"Is women or non reproductive age",\n   "type":"boolean"\n}\n\n')),(0,i.kt)("h2",{id:"calculated-expression"},"Calculated Expression"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-calculatedExpression.html"},"Calculated Expression")," is an extension which allows to set answers to ",(0,i.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/R4/questionnaire.html"},"Questionnaire.item")," (generally but not limited to ",(0,i.kt)("a",{parentName:"p",href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#readOnly"},"readOnly")," or ",(0,i.kt)("a",{parentName:"p",href:"https://build.fhir.org/ig/HL7/sdc/rendering.html#hidden"},"hidden"),"). The calculation is dynamic via a ",(0,i.kt)("a",{parentName:"p",href:"http://hl7.org/fhirpath"},"fhirpath")," expression which can be based on answers of other Questionnaire.items. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unlike ",(0,i.kt)("a",{parentName:"li",href:"https://build.fhir.org/ig/HL7/sdc/expressions.html#initialExpression"},"initialExpression")," extension, instead of only setting value on Questionnaire.item loading, this extension- keeps updating the value as soon as the answers of dependent questions change. "),(0,i.kt)("li",{parentName:"ul"},"Mostly it is used for displaying or calculating scores, patient age, BMI, estimated cost etc"),(0,i.kt)("li",{parentName:"ul"},"In most cases, 'calculated' answers are 'readOnly', however, the extension can be applied to any Questionnaire.item."),(0,i.kt)("li",{parentName:"ul"},"For modifiable Questionnaire.item if a user has edited the answer of calculated expression, it can no longer be changed based on expression i.e. an edited item does not update by expression anymore"),(0,i.kt)("li",{parentName:"ul"},"Examples could be ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"an expression based on current QuestionnaireResponse.item.answer. The QuestionnaireResponse in current context can be referred by %resource. i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%resource.item.where(linkId='weight').answer.first()")),(0,i.kt)("li",{parentName:"ul"},"an expression of based on launch context or information queried from external sources i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%patient.active"),", full example questionnaire can be found ",(0,i.kt)("a",{parentName:"li",href:"https://build.fhir.org/ig/HL7/sdc/Questionnaire-demographics.json.html"},"here"),". "),(0,i.kt)("li",{parentName:"ul"},"an expression based on ",(0,i.kt)("inlineCode",{parentName:"li"},"variable")," extension. i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%weight + 20"),". See variable rules ",(0,i.kt)("a",{parentName:"li",href:"http://hl7.org/fhir/R4/extension-variable.html"},"here"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"item": [\n    {\n      "linkId": "birthdate",\n      "text": "Birth Date",\n      "type": "date",\n      "extension": [\n        {\n          "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",\n          "valueExpression": {\n            "language": "text/fhirpath",\n            "expression": "%resource.repeat(item).where(linkId=\'age-years\' and answer.empty().not()).select(today() - answer.value)"\n          }\n        }\n      ]\n    },\n    {\n      "linkId": "age-years",\n      "text": "Age years",\n      "type": "quantity",\n      "initial": [{\n        "valueQuantity": {\n          "unit": "years",\n          "system": "http://unitsofmeasure.org",\n          "code": "years"\n        }\n      }]\n    }\n  ]\n  }\n')),(0,i.kt)("h2",{id:"answer-expression"},"Answer Expression"),(0,i.kt)("p",null,"The possible answers for a ",(0,i.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/R4/questionnaire.html"},"Questionnaire.item")," are restricted or validated based on it type. The allowed value of a Questionnaire.item must conform to an enumerated set. The answerOption the possible allowed values and the type of  answerOption must match the type of the question. (Coding type is used for choice and open-choice)"),(0,i.kt)("p",null,"Mainly answers can be enumerated  by three ways"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://build.fhir.org/ig/HL7/sdc/examples.html#answeroption"},"answerOption")," are hardcoded set of option values and works well when there is a small number of choices and support variety of question types"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#answerValueSet"},"answerValueSet")," element only supports 'string' and Coding elements. It is better when set of codes is large or dynamic e.g. SNOMED or LOINC codes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://build.fhir.org/ig/HL7/sdc/expressions.html#answerExpression"},"answerExpression")," extension")," allows a FHIR Query, FHIRPath, or CQL (not implemented yet) expression that can be resolved to a list of permitted answers. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Expression must evaluate to a collection with the same type as the Questionnaire.item.type"),(0,i.kt)("li",{parentName:"ul"},"If the type is Reference it should evaluate to resources allowed as the referenced type"),(0,i.kt)("li",{parentName:"ul"},"It is often used with ",(0,i.kt)("a",{parentName:"li",href:"https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-choiceColumn.html"},"Choice Column")," extension to provide display or UI definitions"),(0,i.kt)("li",{parentName:"ul"},"Currently Choice Column is applicable only for reference type. With a Reference choiceColumn allows selection of fields from the resource evaulated by x-fhir-query e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"name.first().given.first() + ' ' + name.first().family")," for the full name of a Patient or Practitioner."),(0,i.kt)("li",{parentName:"ul"},"For multiple repetitions of the Choice Column extension the columns (concatenated values separated by space) are displayed in the same order as the extensions appear on the Questionnaire.item. If multiple columns are marked with ",(0,i.kt)("inlineCode",{parentName:"li"},'"forDisplay": true'),", the display value used will be a space-separated concatenation of all column"))),(0,i.kt)("li",{parentName:"ul"},"Examples of expression are",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://hl7.org/fhir/R4/search.html"},"FHIR Query")," i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"Patient?active=true&name=john")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://hl7.org/fhirpath"},"FHIRPath")," which must conform to item type i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"%resource.item.where(type='choice' and answer.empty().not()).answer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://cql.hl7.org/"},"CQL")," - not implemented yet")))),(0,i.kt)("p",null,"All three mechanisms are mutually exclusive and only one can appear on same question"),(0,i.kt)("p",null,"Use of other ",(0,i.kt)("a",{parentName:"p",href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#value-constraint"},"Value Constraint")," elements is redundant and confusing, hence, when using any of these to restrict answers do not make use of any of the other Value Constraint extensions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"item": [\n  {\n    "extension": [\n      {\n        "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerExpression",\n        "valueExpression": {\n          "language": "application/x-fhir-query",\n          "expression": "Practitioner?active=true&_sort=family,given"\n        }\n      },\n      {\n        "extension": [\n          {\n            "url": "path",\n            "valueString": "name.where(use=\'official\').family + \', \' + name.where(use=\'official\').given.first()"\n          },\n          {\n            "url": "forDisplay",\n            "valueBoolean": true\n          }\n        ],\n        "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"\n      },\n      {\n        "extension": [\n          {\n            "url": "path",\n            "valueString": "\'(\' + gender + \')\'"\n          },\n          {\n            "url": "forDisplay",\n            "valueBoolean": true\n          }\n        ],\n        "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"\n      }\n    ],\n    "linkId": "1.0.0",\n    "text": "Preferred practitioner",\n    "type": "reference"\n  }\n]\n}\n')))}h.isMDXComponent=!0}}]);