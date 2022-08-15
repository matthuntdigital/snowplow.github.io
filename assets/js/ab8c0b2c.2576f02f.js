"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[87734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(n),d=r,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},18239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Quick Start Guide",date:"2021-11-23",sidebar_position:20},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/quick-start-guide/index",id:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/quick-start-guide/index",title:"Quick Start Guide",description:"iOS TrackerAndroid Tracker",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/quick-start-guide/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/quick-start-guide",slug:"/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/quick-start-guide/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/quick-start-guide/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:20,frontMatter:{title:"Quick Start Guide",date:"2021-11-23",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/introduction/"},next:{title:"Tracking Events",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/mobile-trackers-v3-0/tracking-events/"}},c={},p=[{value:"iOS Tracker",id:"ios-tracker",level:2},{value:"Installation",id:"installation",level:3},{value:"Instrumentation",id:"instrumentation",level:3},{value:"Android Tracker",id:"android-tracker",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Instrumentation",id:"instrumentation-1",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#tab-ios-tracker"},"iOS Tracker"),(0,r.kt)("a",{parentName:"p",href:"#tab-android-tracker"},"Android Tracker")),(0,r.kt)("h2",{id:"ios-tracker"},"iOS Tracker"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The iOS Tracker SDK can be installed using various dependency managers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Swift Package Manager")," (Recommended)"),(0,r.kt)("p",null,"To install Snowplow Tracker with SPM:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Xcode, select File > Swift Packages > Add Package Dependency."),(0,r.kt)("li",{parentName:"ol"},"Add the url where to download the library: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-objc-tracker"},"https://github.com/snowplow/snowplow-objc-tracker"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cocoapods")),(0,r.kt)("p",null,"To install Snowplow Tracker with Cocoapods:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure that Cocoapods is installed on your system and correctly configured for your app.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the iOS Tracker SDK among the dependencies of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'SnowplowTracker', '~> 3.0'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," to add the tracker to your app project."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Carthage")),(0,r.kt)("p",null,"To install Snowplow Tracker with Carthage:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure that Carthage is installed on your system and correctly configured for your app.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the iOS Tracker SDK among the dependencies of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cartfile"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'github "snowplow/snowplow-objc-tracker" ~> 3.0\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"carthage update")," and drag the appropriate frameworks from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Carthage/build")," folder to your app project."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supported System Version")),(0,r.kt)("p",null,"The iOS Tracker SDK supports ",(0,r.kt)("strong",{parentName:"p"},"iOS 9.0+"),", ",(0,r.kt)("strong",{parentName:"p"},"macOS 10.9+"),", ",(0,r.kt)("strong",{parentName:"p"},"tvOS 9.0+")," and ",(0,r.kt)("strong",{parentName:"p"},"watchOS 2.0+")),(0,r.kt)("h3",{id:"instrumentation"},"Instrumentation"),(0,r.kt)("p",null,"Once the tracker SDK is correctly set as a dependency in your app project you have to instrument the tracker:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your application delegate ",(0,r.kt)("inlineCode",{parentName:"p"},"AppDelegate.swift")," add ",(0,r.kt)("inlineCode",{parentName:"p"},"import SnowplowTracker"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"application(_:didFinishLaunchingWithOptions:)")," method, set up the SDK as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let tracker = Snowplow.createTracker(namespace: "appTracker", endpoint: COLLECTOR_URL, method: .post)\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It creates a tracker instance which can be used to track events like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let event = Structured(category: "Category_example", action: "Action_example")\ntracker.track(event)\n')),(0,r.kt)("p",{parentName:"li"},"If you prefer to access the tracker when the reference is not directly accessible, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultTracker")," :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"Snowplow.defaultTracker().track(event)\n")))),(0,r.kt)("p",null,"The tracker has a default configuration where some settings are enabled by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"session tracking\n"),(0,r.kt)("li",{parentName:"ul"},"screen tracking\n"),(0,r.kt)("li",{parentName:"ul"},"platform contexts (mobile specific context fields)\n")),(0,r.kt)("p",null,"You can override the default configuration with a fine grained configuration when you create the tracker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let networkConfig = NetworkConfiguration(endpoint: COLLECTOR_URL, method: .post)\nlet trackerConfig = TrackerConfiguration()\n    .base64Encoding(false)\n    .sessionContext(true)\n    .platformContext(true)\n    .lifecycleAutotracking(true)\n    .screenViewAutotracking(true)\n    .screenContext(true)\n    .applicationContext(true)\n    .exceptionAutotracking(true)\n    .installAutotracking(true)\nlet sessionConfig = SessionConfiguration(\n    foregroundTimeout: Measurement(value: 30, unit: .minutes),\n    backgroundTimeout: Measurement(value: 30, unit: .minutes)\n)       \nSnowplow.createTracker(\n    namespace: "appTracker",\n    network: networkConfig,\n    configurations: [trackerConfig, sessionConfig]\n);\n')),(0,r.kt)("h2",{id:"android-tracker"},"Android Tracker"),(0,r.kt)("h3",{id:"installation-1"},"Installation"),(0,r.kt)("p",null,"The Android Tracker SDK can be installed using Gradle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gradle")),(0,r.kt)("p",null,"Add into your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"dependencies {\n  ...\n  // Snowplow Android Tracker\n  implementation 'com.snowplowanalytics:snowplow-android-tracker:3.+'\n  // In case 'lifecycleAutotracking' is enabled\n  implementation 'androidx.lifecycle:lifecycle-extensions:2.2.+'\n  ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supported System Version")),(0,r.kt)("p",null,"The Android Tracker SDK supports Android 5 (",(0,r.kt)("strong",{parentName:"p"},"API level 21+"),")"),(0,r.kt)("h3",{id:"instrumentation-1"},"Instrumentation"),(0,r.kt)("p",null,"Once the tracker SDK is correctly set as a dependency in your app project you have to instrument the tracker:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," subclass, set up the SDK as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TrackerController tracker = Snowplow.createTracker(context, "appTracker", COLLECTOR_URL, HttpMethod.POST);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It creates a tracker instance which can be used to track events like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Event event = new Structured("Category_example", "Action_example");\ntracker.track(event);\n')),(0,r.kt)("p",{parentName:"li"},"If you prefer to access the tracker when the reference is not directly accessible, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultTracker")," :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Snowplow.getDefaultTracker().track(event);\n")))),(0,r.kt)("p",null,"The tracker has a default configuration where some settings are enabled by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"session tracking\n"),(0,r.kt)("li",{parentName:"ul"},"screen tracking\n"),(0,r.kt)("li",{parentName:"ul"},"platform contexts (mobile specific context fields)\n")),(0,r.kt)("p",null,"You can override the default configuration with a fine grained configuration when you create the tracker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'NetworkConfiguration networkConfig = new NetworkConfiguration(COLLECTOR_URL, HttpMethod.POST);\nTrackerConfiguration trackerConfig = new TrackerConfiguration("appId")\n    .base64Encoding(false)\n    .sessionContext(true)\n    .platformContext(true)\n    .lifecycleAutotracking(true)\n    .screenViewAutotracking(true)\n    .screenContext(true)\n    .applicationContext(true)\n    .exceptionAutotracking(true)\n    .installAutotracking(true);\nSessionConfiguration sessionConfig = new SessionConfiguration(\n    new TimeMeasure(30, TimeUnit.SECONDS),\n    new TimeMeasure(30, TimeUnit.SECONDS)\n);\nSnowplow.createTracker(context,\n    "appTracker",\n    networkConfig,\n    trackerConfig,\n    sessionConfig\n);\n')))}u.isMDXComponent=!0}}]);