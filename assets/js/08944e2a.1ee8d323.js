"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[3520],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),c=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?i.createElement(h,o(o({ref:t},s),{},{components:a})):i.createElement(h,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const l={title:"MailChimp",date:"2020-02-25",sidebar_position:40},o=void 0,r={unversionedId:"collecting-data/collecting-data-from-third-parties/mailchimp/index",id:"collecting-data/collecting-data-from-third-parties/mailchimp/index",title:"MailChimp",description:"Overview",source:"@site/docs/collecting-data/collecting-data-from-third-parties/mailchimp/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/mailchimp",slug:"/collecting-data/collecting-data-from-third-parties/mailchimp/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/mailchimp/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/mailchimp/index.md",tags:[],version:"current",lastUpdatedAt:1661536087,formattedLastUpdatedAt:"Aug 26, 2022",sidebarPosition:40,frontMatter:{title:"MailChimp",date:"2020-02-25",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Iterable",permalink:"/docs/collecting-data/collecting-data-from-third-parties/iterable/"},next:{title:"MailGun",permalink:"/docs/collecting-data/collecting-data-from-third-parties/mailgun/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"MailChimp",id:"mailchimp",level:2}],s={toc:c};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This webhook integration lets you track a variety of events logged by\xa0",(0,n.kt)("a",{parentName:"p",href:"http://mailchimp.com/"},"MailChimp"),"."),(0,n.kt)("p",null,"Available events are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Subscribes"),(0,n.kt)("li",{parentName:"ul"},"Unsubscribes"),(0,n.kt)("li",{parentName:"ul"},"Profile Updates"),(0,n.kt)("li",{parentName:"ul"},"Email Address Changes"),(0,n.kt)("li",{parentName:"ul"},"Cleaned Emails"),(0,n.kt)("li",{parentName:"ul"},"Campaign Sending Status")),(0,n.kt)("h3",{id:"compatibility"},"Compatibility"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/0.9.11"},"Snowplow 0.9.11"),"+"," (",(0,n.kt)("inlineCode",{parentName:"li"},"POST"),"-","capable collectors for event processing, will require\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"GET"),"\xa0for initial webhook validation)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mailchimp.com/developer/transactional/docs/webhooks/"},"MailChimp webhook API"))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"Integrating MailChimp's webhooks into Snowplow is a two-stage process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Configure MailChimp to send events to Snowplow"),(0,n.kt)("li",{parentName:"ol"},"(Optional) Create the MailChimp events tables into Amazon Redshift")),(0,n.kt)("h2",{id:"mailchimp"},"MailChimp"),(0,n.kt)("p",null,"First login to MailChimp. Select\xa0",(0,n.kt)("strong",{parentName:"p"},"Lists"),"\xa0from the menu panel along the left handside of the screen."),(0,n.kt)("p",null,"Then select\xa0",(0,n.kt)("strong",{parentName:"p"},"Create List"),"\xa0in the top right hand corner and fill in the required fields to create a new list."),(0,n.kt)("p",null,"Once we have a new list navigate to the\xa0",(0,n.kt)("strong",{parentName:"p"},"Settings"),"\xa0dropdown option and select\xa0",(0,n.kt)("strong",{parentName:"p"},"Webhooks"),"\xa0from the menu."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(52686).Z,width:"826",height:"434"})),(0,n.kt)("p",null,"For the\xa0",(0,n.kt)("strong",{parentName:"p"},"Callback URL"),"\xa0field you will need to provide the URI to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by MailChimp:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.mailchimp/v1\n")),(0,n.kt)("p",null,"Our Webhooks setup page should look like this after we have added our\xa0",(0,n.kt)("strong",{parentName:"p"},"Callback URL"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(68170).Z,width:"1212",height:"711"})),(0,n.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter by appending a query string to the end of the URL so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.mailchimp/v1?p=<platform code>\n")),(0,n.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/snowplow-tracker-protocol#1-common-parameters-platform-and-event-independent"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."),(0,n.kt)("p",null,"Before we save our MailChimp webhook we can configure what types of events MailChimp will send to our webhook and what channels will trigger these events. Simply select the boxes that are applicable to you and MailChimp will send these events to our webhook."),(0,n.kt)("p",null,"That's it - with this table deployed, your MailChimp events should automatically flow through into your data warehouse."))}m.isMDXComponent=!0},52686:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mailchimp-1-2d5f92127fd95b3c3b95d9955aba007b.png"},68170:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mailchimp-2-757c908d270b7a5c930b9f4a6202014b.png"}}]);