"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[23288],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,v=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?t.createElement(v,i(i({ref:n},s),{},{components:r})):t.createElement(v,i({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53046:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const a={title:"Flink",date:"2020-08-26",sidebar_position:10},i=void 0,l={unversionedId:"managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/flink/index",id:"managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/flink/index",title:"Flink",description:"The Flink job reads bad rows from an S3 location and stores the recovered payloads in Kinesis, unrecovered and unrecoverable in other S3 buckets.",source:"@site/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/flink/index.md",sourceDirName:"managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/flink",slug:"/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/flink/",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/flink/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/flink/index.md",tags:[],version:"current",lastUpdatedAt:1661536087,formattedLastUpdatedAt:"Aug 26, 2022",sidebarPosition:10,frontMatter:{title:"Flink",date:"2020-08-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"GCP - Beam",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/gcp-beam/"},next:{title:"Spark",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/spark/"}},u={},c=[{value:"Building",id:"building",level:4},{value:"Running",id:"running",level:4}],s={toc:c};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Flink job reads bad rows from an S3 location and stores the recovered payloads in Kinesis, unrecovered and unrecoverable in other S3 buckets."),(0,o.kt)("h4",{id:"building"},"Building"),(0,o.kt)("p",null,"To build the fat jar, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sbt flink/assembly\n")),(0,o.kt)("h4",{id:"running"},"Running"),(0,o.kt)("p",null,"Using flink CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"flink run \\\n  snowplow-event-recovery-flink-0.2.0.jar \\\n  --input s3://bad-rows-location/** \\\n  --output recovered-kinesis-topic \\  \n  --failedOutput s3://unrecovered-collector-payloads-location/ \\\n  --unrecoverableOutput s3://unrecoverable-collector-payloads-location/ \\\n  --config $JOB_CONFIG \\\n  --resolver $RESOLVER_CONFIG\n")))}p.isMDXComponent=!0}}]);