"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[38566],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),g=n,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return a?i.createElement(m,l(l({ref:t},p),{},{components:a})):i.createElement(m,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));const r={title:"Setting up data quality alerts",date:"2021-01-14",sidebar_position:2500},l=void 0,o={unversionedId:"migrated/managing-data-quality/failed-events/setting-up-data-quality-alerts/index",id:"migrated/managing-data-quality/failed-events/setting-up-data-quality-alerts/index",title:"Setting up data quality alerts",description:"Overview",source:"@site/docs/migrated/managing-data-quality/failed-events/setting-up-data-quality-alerts/index.md",sourceDirName:"migrated/managing-data-quality/failed-events/setting-up-data-quality-alerts",slug:"/migrated/managing-data-quality/failed-events/setting-up-data-quality-alerts/",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/failed-events/setting-up-data-quality-alerts/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:2500,frontMatter:{title:"Setting up data quality alerts",date:"2021-01-14",sidebar_position:2500},sidebar:"tutorialSidebar",previous:{title:"Monitoring failed events in the Console",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/failed-events/failed-events-in-the-ui/"},next:{title:"Accessing failed event aggregates via the API",permalink:"/docsite-poc.github.io/docs/migrated/managing-data-quality/failed-events/accessing-failed-event-aggregates-via-the-api/"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Subscribing to alerts",id:"subscribing-to-alerts",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Snowplow can send two types of alerts to help you monitor Failed Events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"New failed event:")," receive an alert within 10 minutes of a new type of event failure being detected on your pipeline."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Failed event digest"),": receive a twice-daily digest of all Failed Event activity in the previous 12-hour period.")),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.kt)("p",null,"To receive alerts you must have the Failed Events monitoring feature switched on in the Snowplow BDP console."),(0,n.kt)("h2",{id:"subscribing-to-alerts"},"Subscribing to alerts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login to Snowplow BDP console"),(0,n.kt)("li",{parentName:"ul"},"Locate the pipeline you wish to set up alerts for in the left-hand navigation"),(0,n.kt)("li",{parentName:"ul"},"Find and select ",(0,n.kt)("inlineCode",{parentName:"li"},"Pipeline configuration")),(0,n.kt)("li",{parentName:"ul"},"Scroll down to ",(0,n.kt)("inlineCode",{parentName:"li"},"Pipeline alerts")," or use the page navigation to jump to it")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/01/image.png?w=1024",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Manage")," for the alert you wish to subscribe to"),(0,n.kt)("li",{parentName:"ul"},"Add one or more email addresses by typing them into the input and clicking ",(0,n.kt)("inlineCode",{parentName:"li"},"Add recipient")),(0,n.kt)("li",{parentName:"ul"},"Once you have added all recipients, click ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Changes"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/01/image-1.png?w=1024",alt:null})))}d.isMDXComponent=!0}}]);