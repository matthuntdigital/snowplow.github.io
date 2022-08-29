"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[19582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const o={title:"Subjects",date:"2020-02-26",sidebar_position:30},r=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/php-tracker/subjects/index",id:"collecting-data/collecting-from-own-applications/php-tracker/subjects/index",title:"Subjects",description:"The Subject object lets you send any additional information about your application's environment, current user etc to Snowplow.",source:"@site/docs/collecting-data/collecting-from-own-applications/php-tracker/subjects/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/php-tracker/subjects",slug:"/collecting-data/collecting-from-own-applications/php-tracker/subjects/",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/subjects/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/php-tracker/subjects/index.md",tags:[],version:"current",lastUpdatedAt:1661536087,formattedLastUpdatedAt:"Aug 26, 2022",sidebarPosition:30,frontMatter:{title:"Subjects",date:"2020-02-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Initialization",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/initialization/"},next:{title:"Emitters",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/emitters/"}},i={},p=[{value:"<code>setPlatform</code>",id:"setplatform",level:3},{value:"<code>setUserId</code>",id:"setuserid",level:3},{value:"<code>setScreenResolution</code>",id:"setscreenresolution",level:3},{value:"<code>setViewport</code>",id:"setviewport",level:3},{value:"<code>setColorDepth</code>",id:"setcolordepth",level:3},{value:"<code>setTimezone</code>",id:"settimezone",level:3},{value:"<code>setLanguage</code>",id:"setlanguage",level:3},{value:"<code>setIpAddress</code>",id:"setipaddress",level:3},{value:"<code>setUseragent</code>",id:"setuseragent",level:3},{value:"<code>setNetworkUserId</code>",id:"setnetworkuserid",level:3},{value:"<code>setDomainUserId</code>",id:"setdomainuserid",level:3},{value:"<code>setSessionId</code>",id:"setsessionid",level:3},{value:"<code>setSessionIndex</code>",id:"setsessionindex",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Subject object lets you send any additional information about your application's environment, current user etc to Snowplow."),(0,s.kt)("p",null,"To create a new subject:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject = new Subject();\n")),(0,s.kt)("p",null,"By default the subject has one piece information in it already, the platform ","[",'"p" => "srv"',"]","."),(0,s.kt)("p",null,"The Subject class contains a variety of 'set' methods to attach extra data to your event."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-platform"},(0,s.kt)("inlineCode",{parentName:"a"},"setPlatform"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-user-id"},(0,s.kt)("inlineCode",{parentName:"a"},"setUserId"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-screen-res"},(0,s.kt)("inlineCode",{parentName:"a"},"setScreenRes"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-viewport"},(0,s.kt)("inlineCode",{parentName:"a"},"setViewport"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-color-depth"},(0,s.kt)("inlineCode",{parentName:"a"},"setColorDepth"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-timezone"},(0,s.kt)("inlineCode",{parentName:"a"},"setTimezone"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[setLanguage](#set-lang)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-ip-address"},(0,s.kt)("inlineCode",{parentName:"a"},"setIpAddress"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-useragent"},(0,s.kt)("inlineCode",{parentName:"a"},"setUseragent"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-network-user-id"},(0,s.kt)("inlineCode",{parentName:"a"},"setNetworkUserId"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-session-id"},(0,s.kt)("inlineCode",{parentName:"a"},"setSessionId"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#set-session-index"},(0,s.kt)("inlineCode",{parentName:"a"},"setSessionIndex")))),(0,s.kt)("p",null,"These set methods can be called either directly onto a subject object:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$subject = new Subject();\n$subject->setPlatform("tv");\n')),(0,s.kt)("p",null,"Or they can be called through the tracker object:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$tracker->returnSubject()->setPlatform("tv");\n')),(0,s.kt)("h3",{id:"setplatform"},(0,s.kt)("inlineCode",{parentName:"h3"},"setPlatform")),(0,s.kt)("p",null,'The default platform is "srv". You can change the platform of the subject by calling:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setPlatform($platform);\n")),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$subject->setPlatform("tv") # Running on a Connected TV\n')),(0,s.kt)("p",null,"For a full list of supported platforms, please see the\xa0",(0,s.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"."),(0,s.kt)("h3",{id:"setuserid"},(0,s.kt)("inlineCode",{parentName:"h3"},"setUserId")),(0,s.kt)("p",null,"You can set the user ID to any string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setUserId($id);\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$subject->setUserId("jbeem");\n')),(0,s.kt)("h3",{id:"setscreenresolution"},(0,s.kt)("inlineCode",{parentName:"h3"},"setScreenResolution")),(0,s.kt)("p",null,"If your PHP code has access to the device's screen resolution, then you can pass this in to Snowplow too:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setScreenResolution($width, $height);\n")),(0,s.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setScreenResolution(1366, 768);\n")),(0,s.kt)("h3",{id:"setviewport"},(0,s.kt)("inlineCode",{parentName:"h3"},"setViewport")),(0,s.kt)("p",null,"If your PHP code has access to the viewport dimensions, then you can pass this in to Snowplow too:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setViewport($width, $height);\n")),(0,s.kt)("p",null,"Both numbers should be positive integers; note the order is width followed by height. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setViewport(300, 200);\n")),(0,s.kt)("h3",{id:"setcolordepth"},(0,s.kt)("inlineCode",{parentName:"h3"},"setColorDepth")),(0,s.kt)("p",null,"If your PHP code has access to the bit depth of the device's color palette for displaying images, then you can pass this in to Snowplow too:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setColorDepth($depth);\n")),(0,s.kt)("p",null,"The number should be a positive integer, in bits per pixel. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setColorDepth(32);\n")),(0,s.kt)("h3",{id:"settimezone"},(0,s.kt)("inlineCode",{parentName:"h3"},"setTimezone")),(0,s.kt)("p",null,"This method lets you pass a user's timezone in to Snowplow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setTimezone($timezone);\n")),(0,s.kt)("p",null,"The timezone should be a string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$subject->setTimezone("Europe/London");\n')),(0,s.kt)("h3",{id:"setlanguage"},(0,s.kt)("inlineCode",{parentName:"h3"},"setLanguage")),(0,s.kt)("p",null,"This method lets you pass a user's language in to Snowplow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setLanguage($language);\n")),(0,s.kt)("p",null,"The language should be a string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setLanguage('en');\n")),(0,s.kt)("h3",{id:"setipaddress"},(0,s.kt)("inlineCode",{parentName:"h3"},"setIpAddress")),(0,s.kt)("p",null,"This method lets you pass a user's IP Address in to Snowplow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setIpAddress($ip);\n")),(0,s.kt)("p",null,"The IP Address should be a string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setIpAddress('127.0.0.1');\n")),(0,s.kt)("h3",{id:"setuseragent"},(0,s.kt)("inlineCode",{parentName:"h3"},"setUseragent")),(0,s.kt)("p",null,"This method lets you pass a useragent in to Snowplow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setUseragent($useragent);\n")),(0,s.kt)("p",null,"The useragent should be a string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setUseragent('Agent Smith');\n")),(0,s.kt)("h3",{id:"setnetworkuserid"},(0,s.kt)("inlineCode",{parentName:"h3"},"setNetworkUserId")),(0,s.kt)("p",null,"This method lets you pass a Network User ID in to Snowplow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setNetworkUserId($networkUserId);\n")),(0,s.kt)("p",null,"The network user id should be a string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$subject->setNetworkUserId("network-id");\n')),(0,s.kt)("h3",{id:"setdomainuserid"},(0,s.kt)("inlineCode",{parentName:"h3"},"setDomainUserId")),(0,s.kt)("p",null,"This method lets you pass a Domain User ID in to Snowplow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$subject->setDomainUserId($domainUserId);\n")),(0,s.kt)("p",null,"The domain user id should be a string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$subject->setDomainUserId("domain-id");\n')),(0,s.kt)("h3",{id:"setsessionid"},(0,s.kt)("inlineCode",{parentName:"h3"},"setSessionId")),(0,s.kt)("p",null,"This method lets you pass a session ID in to Snowplow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$subject->setSessionId($sessionId);\n")),(0,s.kt)("p",null,"The session ID should be a string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'$subject->setSessionId("759e1c9a-6b74-403c-8b6f-18eb9f0c2f02");\n')),(0,s.kt)("h3",{id:"setsessionindex"},(0,s.kt)("inlineCode",{parentName:"h3"},"setSessionIndex")),(0,s.kt)("p",null,"This method lets you pass a session index in to Snowplow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$subject->setSessionIndex($sessionIndex);\n")),(0,s.kt)("p",null,"The session index should be a number:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$subject->setSessionIndex(1);\n")))}u.isMDXComponent=!0}}]);