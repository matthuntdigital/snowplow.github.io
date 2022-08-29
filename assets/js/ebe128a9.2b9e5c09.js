"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[73860],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=u(t),v=o,p=y["".concat(s,".").concat(v)]||y[v]||c[v]||a;return t?n.createElement(p,i(i({ref:r},d),{},{components:t})):n.createElement(p,i({ref:r},d))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},51617:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={title:"Starting a new recovery",date:"2021-10-13",sidebar_position:1e3},i=void 0,l={unversionedId:"managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/starting-a-new-recovery/index",id:"managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/starting-a-new-recovery/index",title:"Starting a new recovery",description:"Naming your recovery",source:"@site/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/starting-a-new-recovery/index.md",sourceDirName:"managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/starting-a-new-recovery",slug:"/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/starting-a-new-recovery/",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/starting-a-new-recovery/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/starting-a-new-recovery/index.md",tags:[],version:"current",lastUpdatedAt:1661536087,formattedLastUpdatedAt:"Aug 26, 2022",sidebarPosition:1e3,frontMatter:{title:"Starting a new recovery",date:"2021-10-13",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Using the Recovery Builder to design your recovery",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/"},next:{title:"Adding recovery steps",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/using-the-recovery-builder-to-design-your-recovery/adding-recovery-steps/"}},s={},u=[{value:"Naming your recovery",id:"naming-your-recovery",level:3},{value:"Uploading example raw data",id:"uploading-example-raw-data",level:3},{value:"Paste in a single event",id:"paste-in-a-single-event",level:4},{value:"Upload a batch of events",id:"upload-a-batch-of-events",level:4}],d={toc:u};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"naming-your-recovery"},"Naming your recovery"),(0,o.kt)("p",null,"You'll first be asked to give your event a descriptive name. This must be alphanumeric and any spaces will be converted to hyphens."),(0,o.kt)("h3",{id:"uploading-example-raw-data"},"Uploading example raw data"),(0,o.kt)("p",null,"Next you'll need fetch an example of the failed event you wish to recover. You'll find the raw events in file storage (S3 on AWS, GCS on GCP). Follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/"},"guides on retrieving raw failed event data")," to download an example raw event."),(0,o.kt)("p",null,"Once you have an example of your failed event you have two options for upload."),(0,o.kt)("h4",{id:"paste-in-a-single-event"},"Paste in a single event"),(0,o.kt)("p",null,"To use this option you'll need to open the file you've downloaded from file storage in a text editor and extract the JSON blob for the event you wish to base your recovery design on."),(0,o.kt)("h4",{id:"upload-a-batch-of-events"},"Upload a batch of events"),(0,o.kt)("p",null,"To use this option you'll unzip the you've downloaded from file storage (where required) and then upload it in the UI. The events within the file will be extracted and you'll be able to view and select the event you wish to base your recovery design on."))}c.isMDXComponent=!0}}]);