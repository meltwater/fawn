"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[839],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},c="Making a Client",u={unversionedId:"SQS/making-a-client",id:"SQS/making-a-client",title:"Making a Client",description:"To start off with SQS, we want to make an instance of SQSQueue to represent all the things we can do to a queue.",source:"@site/../docs-builder/target/mdoc/SQS/making-a-client.md",sourceDirName:"SQS",slug:"/SQS/making-a-client",permalink:"/fawn/docs/SQS/making-a-client",editUrl:"https://github.com/meltwater/fawn/edit/main/docs/../docs-builder/target/mdoc/SQS/making-a-client.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"FawnDecoder",permalink:"/fawn/docs/codecs/decoder"},next:{title:"Sending Data",permalink:"/fawn/docs/SQS/sending-data"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"making-a-client"},"Making a Client"),(0,o.kt)("p",null,"To start off with SQS, we want to make an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"SQSQueue")," to represent all the things we can do to a queue."),(0,o.kt)("p",null,"We'll start off by importing cats-effect, since this example will use ",(0,o.kt)("inlineCode",{parentName:"p"},"cats.effect.IO"),"."),(0,o.kt)("p",null,"We'll also be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Blaze")," client from http4s, so we'll want the builder for that."),(0,o.kt)("p",null,"Then we want all of the ",(0,o.kt)("inlineCode",{parentName:"p"},"common")," classes in Fawn, and all of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sqs")," classes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import cats.effect._\nimport org.http4s.client.blaze.BlazeClientBuilder\nimport com.meltwater.fawn.common._\nimport com.meltwater.fawn.sqs._\n\nimport scala.concurrent.ExecutionContext\n")),(0,o.kt)("p",null,"Next we'll want to create all of our settings, these would usually come from a config file or command line parser, but we'll instantiate them directly here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val credentials = AWSCredentials("KEYID", "SECRET")\n// credentials: AWSCredentials = AWSCredentials(\n//   accessKeyId = "KEYID",\n//   secretAccessKey = "SECRET"\n// )\nval region      = AWSRegion.`eu-west-1`\n// region: AWSRegion = AWSRegion(value = "eu-west-1")\nval accountId   = 123456L\n// accountId: Long = 123456L\nval queueName   = "my-queue"\n// queueName: String = "my-queue"\n')),(0,o.kt)("p",null,"We can then create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Resource")," for our ",(0,o.kt)("inlineCode",{parentName:"p"},"http4s")," client and map it into an ",(0,o.kt)("inlineCode",{parentName:"p"},"SQSQueue")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val queueResource: Resource[IO, SQSQueue[IO]] = \n  BlazeClientBuilder[IO](ExecutionContext.global).resource.map { client =>\n    SQSQueue[IO](client, credentials, region, accountId, queueName)\n  }\n")),(0,o.kt)("p",null,"You would then ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," it or tie it in with your program's other ",(0,o.kt)("inlineCode",{parentName:"p"},"Resource"),"s:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'queueResource.use { queue =>\n  queue.sendMessage("hello world")\n}\n')))}m.isMDXComponent=!0}}]);