"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[13636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),g=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=g(r),c=n,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var g=2;g<o;g++)i[g]=r[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var a=r(87462),n=(r(67294),r(3905));const o={title:"HTTP Request Tag for GTM SS",date:"2022-01-06",sidebar_position:700},i=void 0,s={unversionedId:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/index",id:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/index",title:"HTTP Request Tag for GTM SS",description:"The HTTP Request Tag for GTM SS allows events to be forwarded to any JSON HTTP endpoint. This Tag works best with events from the Snowplow Client, but can also work with other GTM SS Clients such as GAv4.",source:"@site/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/index.md",sourceDirName:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss",slug:"/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:700,frontMatter:{title:"HTTP Request Tag for GTM SS",date:"2022-01-06",sidebar_position:700},sidebar:"tutorialSidebar",previous:{title:"Iterable Tag Configuration",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/iterable-tag-configuration/"},next:{title:"HTTP Request Tag Configuration",permalink:"/docsite-poc.github.io/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/http-request-tag-configuration/"}},l={},g=[{value:"Template installation",id:"template-installation",level:2},{value:"Tag Manager Gallery",id:"tag-manager-gallery",level:3},{value:"Manual Installation",id:"manual-installation",level:3},{value:"HTTP Request Tag Setup",id:"http-request-tag-setup",level:2}],u={toc:g};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The HTTP Request Tag for GTM SS allows events to be forwarded to any JSON HTTP endpoint. This Tag works best with events from the Snowplow Client, but can also work with other GTM SS Clients such as GAv4."),(0,n.kt)("h2",{id:"template-installation"},"Template installation"),(0,n.kt)("h3",{id:"tag-manager-gallery"},"Tag Manager Gallery"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From the Templates tab in GTM Server Side, click \u201cSearch Gallery\u201d in the Tag Templates section"),(0,n.kt)("li",{parentName:"ul"},"Search for \u201cHTTP Request\u201d and select the official \u201cBy Snowplow\u201d tag"),(0,n.kt)("li",{parentName:"ul"},'Click "Add to Workspace"'),(0,n.kt)("li",{parentName:"ul"},"Accept the permissions dialog by clicking \u201cAdd\u201d")),(0,n.kt)("h3",{id:"manual-installation"},"Manual Installation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download ",(0,n.kt)("inlineCode",{parentName:"li"},"template.tpl"),' \u2013 Ctrl+S (Win) or Cmd+S (Mac) to save the file, or right click the link on this page and select "Save Link As\u2026"'),(0,n.kt)("li",{parentName:"ul"},"Create a new Tag in the Templates section of a Google Tag Manager Server container"),(0,n.kt)("li",{parentName:"ul"},"Click the More Actions menu, in the top right hand corner, and select Import"),(0,n.kt)("li",{parentName:"ul"},"Import ",(0,n.kt)("inlineCode",{parentName:"li"},"template.tpl")," downloaded in Step 1"),(0,n.kt)("li",{parentName:"ul"},"Click Save")),(0,n.kt)("h2",{id:"http-request-tag-setup"},"HTTP Request Tag Setup"),(0,n.kt)("p",null,"With the template installed, you can now add the HTTP Request Tag to your GTM SS Container."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From the Tag tab, select \u201cNew\u201d, then select the HTTP Request Tag as your Tag Configuration"),(0,n.kt)("li",{parentName:"ul"},"Select your desired Trigger for the events you wish to forward to your custom destination."),(0,n.kt)("li",{parentName:"ul"},"Enter your destination URL"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/http-request-tag-configuration/"},"Configure the tag")," to construct the desired JSON request body"),(0,n.kt)("li",{parentName:"ul"},"Click Save")))}d.isMDXComponent=!0}}]);