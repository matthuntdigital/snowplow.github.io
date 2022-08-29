"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[21247],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,i(i({ref:a},p),{},{components:t})):n.createElement(f,i({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60467:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const o={title:"Setup",date:"2020-10-28",sidebar_position:1e3},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/setup/index",id:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/setup/index",title:"Setup",description:"The Tracker is published to Maven Central and JCenter, which should make it easy to add it as a dependency into your own Scala app.",source:"@site/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/setup/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/setup",slug:"/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/setup/",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/setup/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/setup/index.md",tags:[],version:"current",lastUpdatedAt:1661536087,formattedLastUpdatedAt:"Aug 26, 2022",sidebarPosition:1e3,frontMatter:{title:"Setup",date:"2020-10-28",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Scala Tracker (0.6.0)",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/"},next:{title:"Initialization",permalink:"/docs/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-6-0/initialization/"}},c={},s=[{value:"SBT",id:"sbt",level:2},{value:"Gradle",id:"gradle",level:2},{value:"Maven",id:"maven",level:2}],p={toc:s};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Tracker is published to Maven Central and JCenter, which should make it easy to add it as a dependency into your own Scala app."),(0,r.kt)("h2",{id:"sbt"},"SBT"),(0,r.kt)("p",null,"Add the Scala Tracker to your build.sbt like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'libraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-tracker-core" % "0.6.1"\nlibraryDependencies += "com.snowplowanalytics" %% "snowplow-scala-tracker-emitter-id" % "0.6.1"\n')),(0,r.kt)("h2",{id:"gradle"},"Gradle"),(0,r.kt)("p",null,"If you are using Gradle in your own Scala application, then add our Maven repository in your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\xa0file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"repositories {\n    ...\n    jcenter()\n}\n")),(0,r.kt)("p",null,"Then add into the same file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies {\n    ...\n    // Snowplow Scala Tracker\n    compile 'com.snowplowanalytics:snowplow-scala-tracker-core_2.12:0.6.1'\n    compile 'com.snowplowanalytics:snowplow-scala-tracker-emitter-id_2.12:0.6.1'\n}\n")),(0,r.kt)("p",null,"Notice a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"_2.12"),"\xa0postfix in artifactId. This is used for Scala libraries and denote Scala version which artifact (in our case\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),") is compiled against. It also means that this library will bring a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"org.scala-lang:scala-library_2.12.x"),"\xa0as transitive dependency and if you're using any other Scala dependency you should keep these postfixes in accordance (",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),"\xa0is also compiled against Scala 2.11)."),(0,r.kt)("h2",{id:"maven"},"Maven"),(0,r.kt)("p",null,"If you are using Maven for building your Scala application, then add into your project's\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.snowplowanalytics</groupId>\n    <artifactId>snowplow-scala-tracker_2.12</artifactId>\n    <version>0.6.1</version>\n</dependency>\n")),(0,r.kt)("p",null,"Notice a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"_2.12"),"\xa0postfix in artifactId. This is used for Scala libraries and denote Scala version which artifact (in our case\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),") is compiled against. It also means that this library will bring a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"org.scala-lang:scala-library_2.12.x"),"\xa0as transitive dependency and if you're using any other Scala dependency you should keep these postfixes in accordance (",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-scala-tracker"),"\xa0is also compiled against Scala 2.11)."))}d.isMDXComponent=!0}}]);