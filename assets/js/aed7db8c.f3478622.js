"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[16949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Emitters",date:"2020-02-25",sidebar_position:60},o=void 0,s={unversionedId:"migrated/collecting-data/collecting-from-own-applications/c-tracker/emitters/index",id:"migrated/collecting-data/collecting-from-own-applications/c-tracker/emitters/index",title:"Emitters",description:"Emitters are responsible for sending events to the collector. Each tracker is given a single emitter. Once the emitter receives an event from the Tracker a few things start to happen:",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/emitters/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/c-tracker/emitters",slug:"/migrated/collecting-data/collecting-from-own-applications/c-tracker/emitters/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/emitters/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:60,frontMatter:{title:"Emitters",date:"2020-02-25",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Tracking specific events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/tracking-specific-events/"},next:{title:"Client Sessions",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/client-sessions/"}},l={},c=[{value:"Event store",id:"event-store",level:2},{value:"Emitter request callback",id:"emitter-request-callback",level:2},{value:"HTTP request retry behavior",id:"http-request-retry-behavior",level:2},{value:"Request retry delay (back-off)",id:"request-retry-delay-back-off",level:2},{value:"Manual flushing",id:"manual-flushing",level:2},{value:"Using a custom HTTP Client",id:"using-a-custom-http-client",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Emitters are responsible for sending events to the collector. Each tracker is given a single emitter. Once the emitter receives an event from the Tracker a few things start to happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The event is added to a local SQLite3 database or custom event store (blocking execution)."),(0,r.kt)("li",{parentName:"ul"},"A long running daemon thread is started which will continue to send events as long as they can be found in the database (asynchronous)."),(0,r.kt)("li",{parentName:"ul"},"The emitter loop will grab a range of events from the database up until the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"batch_size"),"\xa0passed to it as configuration."),(0,r.kt)("li",{parentName:"ul"},"The emitter will send all of these events as determined by the Request, Protocol and ByteLimits.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Each request is sent in its thread."))),(0,r.kt)("li",{parentName:"ul"},"Once sent, it will process the results of all the requests sent and will remove all successfully sent events from the database. If the request failed, the events will be retried after a retry delay (see below).")),(0,r.kt)("p",null,"In\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/initialisation/"},"Initialisation"),", we discussed how to create a tracker with an emitter configured using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"EmitterConfiguration"),"\xa0or by instantiating an\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter"),"\xa0instance directly. Both of these options provide the same configuration functionality (e.g., storage options, byte limits, setting custom HTTP clients) that were discussed previously. This page will go into more detail on some of the configurable emitter properties."),(0,r.kt)("h2",{id:"event-store"},"Event store"),(0,r.kt)("p",null,"The event store is used to store an event queue with events scheduled to be sent. Events are added to the event store when they are tracked and removed when they are successfuly emitted or when emitting fails without any scheduled retries."),(0,r.kt)("p",null,"The tracker provides the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SqliteStorage"),"\xa0class that can be used as the event store. It uses SQLite to store the event queue. By default it will create the required files wherever the application is being run from."),(0,r.kt)("p",null,"You may also provide a custom event store implementation. To do so, define a class that inherits from the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"EventStore"),"\xa0struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"struct EventStore {\n  virtual void add_event(const Payload &payload) = 0;\n  virtual void get_event_rows_batch(list<EventRow> *event_list, int number_to_get) = 0;\n  virtual void delete_event_rows_with_ids(const list<int> &id_list) = 0;\n};\n")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"EventStore"),"\xa0struct defines functions to insert, retrieve, and remove events from the queue. Events are represented using their\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Payload"),"\xa0instance which is persisted in a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"EventRow"),"\xa0wrapper that also assigns IDs to each stored event (these event row IDs are different from event IDs used in the event payloads). There are three supported operations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"add_event")),(0,r.kt)("td",{parentName:"tr",align:null},"Insert event payload into event queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get_event_rows_batch")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve event rows from event queue up to the given limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"delete_event_rows_with_ids")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove event rows with the given event row IDs.")))),(0,r.kt)("h2",{id:"emitter-request-callback"},"Emitter request callback"),(0,r.kt)("p",null,"The emitter enables you to set a callback function to be called after events are attempted to be sent to the Collector. This callback is fired after HTTP requests are made and you can subscribe for specific emit statuses. The following statuses can be subscribed to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EmitStatus::SUCCESS"),"\xa0\u2013 events were successfuly sent to the Collector."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EmitStatus::FAILED_WILL_RETRY"),"\xa0\u2013 events failed to be sent to the Collector but will be retried later."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EmitStatus::FAILED_WONT_RETRY"),"\xa0\u2013 events failed to be sent to the Collector and won't be retried later (they will be dropped).")),(0,r.kt)("p",null,"The callback is given two arguments \u2013 list of event IDs, and their emit status. You can only set one callback at once but you can subscribe to multiple emit statuses using binary operations. The following example shows how to set a callback that is called for all three emit statuses and prints to standard output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'emitter_configuration.set_request_callback(\n    [](list<string> event_ids, EmitStatus emit_status) {\n      switch (emit_status) {\n      case EmitStatus::SUCCESS:\n        printf("Successfuly sent %lu events.\\n", event_ids.size());\n        break;\n      case EmitStatus::FAILED_WILL_RETRY:\n        printf("Failed to send %lu events, but will retry.\\n", event_ids.size());\n        break;\n      case EmitStatus::FAILED_WONT_RETRY:\n        printf("Failed to send %lu events and won\'t retry.\\n", event_ids.size());\n        break;\n      }\n    },\n    EmitStatus::SUCCESS | EmitStatus::FAILED_WILL_RETRY | EmitStatus::FAILED_WONT_RETRY);\n')),(0,r.kt)("p",null,"The callback is executed in a new thread. The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"set_request_callback"),"\xa0function can't be called when the Emitter is running."),(0,r.kt)("h2",{id:"http-request-retry-behavior"},"HTTP request retry behavior"),(0,r.kt)("p",null,"The Emitter has a retry functionality that repeatedly sends the same events to the Collector in case HTTP requests fail to get through. Requests are retried in case the connection to the Collector fails to be estabilished. They are also retried for all 3xx and 5xx HTTP status codes in server response and most 4xx status codes with the following exceptions \u2013 400, 401, 403, 410, and 422. These status codes signal a rejection of the events being sent to the Collector and, therefore, the events in the requests are dropped and not sent again."),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"EmitterConfiguration"),"\xa0provide an option to set custom retry behavior for 3xx, 4xx and 5xx HTTP status codes. You can call the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"set_retry_for_status_code"),"\xa0function on the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Emitter"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"EmitterConfiguration"),"\xa0instance to define whether to retry or not for a given HTTP status code. Here is an example that overrides the default behavior and enables retries on 422 status code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"emitter_configuration.set_retry_for_status_code(422, true);\n")),(0,r.kt)("h2",{id:"request-retry-delay-back-off"},"Request retry delay (back-off)"),(0,r.kt)("p",null,"Failed requests are retried with exponentially increasing delays between subsequent retry requests. This ensures that the Collector is not overwhelmed with too many requests and also saves resources on the client by reducing the number of requests during failures."),(0,r.kt)("p",null,"The retry delay calculation is an exponential function with multiplicative factor 2. To prevent spikes of traffic, small amount of randomness is added to the delay (at most 10% of the total value). Finally, it is limited to be no larger than around 2 minutes. The following is a sample sequence of the retry delays given 5 failed requests: 0.101s, 0.198s, 0.404s, 0.791s, 1.603s."),(0,r.kt)("h2",{id:"manual-flushing"},"Manual flushing"),(0,r.kt)("p",null,"You may want to force an emitter to send all events in its buffer, even if the buffer is not full. The Tracker class has a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"flush()"),"\xa0method which flushes its emitter."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker->flush();\n")),(0,r.kt)("h2",{id:"using-a-custom-http-client"},"Using a custom HTTP Client"),(0,r.kt)("p",null,"You may optionally configure the HTTP client to be used to make HTTP requests to the collector. This is done by passing a unique pointer to a class inheriting from\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"HttpClient"),"\xa0that the Emitter will take ownership of. If not configured, the Emitter will use the built-in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"HttpClientWindows"),"\xa0on Windows,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"HttpClientApple"),"\xa0on Apple operating systems, and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"HttpClientCurl"),"\xa0on other Unix systems."))}d.isMDXComponent=!0}}]);