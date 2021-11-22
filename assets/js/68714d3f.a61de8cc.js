(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[368],{8282:function(e,n,o){"use strict";o.r(n),o.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var t=o(7462),i=o(3366),c=(o(7294),o(3905)),a=o(3456),d=["components"],r={sidebar_position:2},s="Modules",l={unversionedId:"module-overview",id:"module-overview",isDocsHomePage:!1,title:"Modules",description:"Fawn is split into modules so you can just depend on the ones you need.",source:"@site/../docs-builder/target/mdoc/module-overview.md",sourceDirName:".",slug:"/module-overview",permalink:"/docs/module-overview",editUrl:"https://github.com/meltwater/fawn/edit/main/website/../docs-builder/target/mdoc/module-overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Intro",permalink:"/docs/codecs/intro"}},m=[{value:"auth",id:"auth",children:[],level:2},{value:"sqs",id:"sqs",children:[],level:2},{value:"codec",id:"codec",children:[],level:2},{value:"codec-circe",id:"codec-circe",children:[],level:2},{value:"common",id:"common",children:[],level:2},{value:"common-decline",id:"common-decline",children:[],level:2}],u={toc:m};function p(e){var n=e.components,o=(0,i.Z)(e,d);return(0,c.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"modules"},"Modules"),(0,c.kt)("p",null,"Fawn is split into modules so you can just depend on the ones you need."),(0,c.kt)(a.Mermaid,{chart:"flowchart TB\n    codec-circe[<a href=#codec-circe>codec-circe</a>]\n    codec[<a href=#codec>codec</a>]\n    sqs[<a href=#sqs>sqs</a>]\n    auth[<a href=#auth>auth</a>]\n    common[<a href=#common>common</a>]\n    common-decline[<a href=#common-decline>common-decline</a>]\n    codec-circe --\x3e codec\n    sqs --\x3e auth\n    sqs --\x3e common\n    sqs --\x3e codec\n    common-decline --\x3e common",config:{mermaid:{theme:"dark",themeVariables:{primaryColor:"#e5aa70"},securityLevel:"loose",flowchart:{htmlLabels:!0}}},mdxType:"Mermaid"}),(0,c.kt)("h2",{id:"auth"},"auth"),(0,c.kt)("p",null,"Depended on by all core functionality, this implements the ",(0,c.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"},"AWS V4 signing standard")," as an http4s middleware."),(0,c.kt)("p",null,"You can use this if you'd just like to call AWS and have your requests signed."),(0,c.kt)("h2",{id:"sqs"},"sqs"),(0,c.kt)("p",null,"Provides tagless interfaces for dealing with Amazon SQS, see the ",(0,c.kt)("a",{parentName:"p",href:"/docs/SQS/making-a-client"},"SQS Guide")),(0,c.kt)("h2",{id:"codec"},"codec"),(0,c.kt)("p",null,"The Codec module provides ",(0,c.kt)("inlineCode",{parentName:"p"},"FawnEncoder")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"FawnDecoder")," abstractions which are used by the other modules for payloads."),(0,c.kt)("h2",{id:"codec-circe"},"codec-circe"),(0,c.kt)("p",null,"The Codec Circe module provides ",(0,c.kt)("inlineCode",{parentName:"p"},"FawnEncoder")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"FawnDecoder")," instances based on those from circe, to encode and decode JSON payloads."),(0,c.kt)("h2",{id:"common"},"common"),(0,c.kt)("p",null,"The common module contains all of the basic types used to instantiate clients, these include ",(0,c.kt)("inlineCode",{parentName:"p"},"AWSCredentials"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"AWSRegion")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"AWSService"),"."),(0,c.kt)("h2",{id:"common-decline"},"common-decline"),(0,c.kt)("p",null,"Provides ",(0,c.kt)("a",{parentName:"p",href:"https://ben.kirw.in/decline/"},"decline")," ",(0,c.kt)("inlineCode",{parentName:"p"},"Argument"),"s and ",(0,c.kt)("inlineCode",{parentName:"p"},"Opts")," for CLI parsing of the types in ",(0,c.kt)("inlineCode",{parentName:"p"},"common")," to help users get started quicker."))}p.isMDXComponent=!0},1748:function(e,n,o){var t={"./locale":9234,"./locale.js":9234};function i(e){var n=c(e);return o(n)}function c(e){if(!o.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=c,e.exports=i,i.id=1748}}]);