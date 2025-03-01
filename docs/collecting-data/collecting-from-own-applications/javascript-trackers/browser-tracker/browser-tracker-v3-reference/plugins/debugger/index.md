---
title: "Debugger"
date: "2021-04-07"
sidebar_position: 5000
---

```mdx-code-block
import Block5966 from "@site/docs/reusable/javascript-tracker-release-badge-v3/_index.md"

<Block5966/>
```

## Installation

- `npm install @snowplow/browser-plugin-debugger`
- `yarn add @snowplow/browser-plugin-debugger`
- `pnpm add @snowplow/browser-plugin-debugger`

## Initialization

```
import { newTracker, trackPageView } from '@snowplow/browser-tracker';
import { DebuggerPlugin } from '@snowplow/browser-plugin-debugger';

newTracker('sp1', '{{collector_url}}', { 
   appId: 'my-app-id', 
   plugins: [ DebuggerPlugin() ],
});
```

### Debugging

Adding this plugin will automatically start printing out `debug` logs to your Developer Tools console. This will help you debug what events are being tracked and what properties are included in each event that is being tracked and to what tracker instance.

**Note:** You may need to enable `Verbose` logs in your Developer Tools, as this plugin uses `console.debug` to output results.

![](https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/03/Screenshot-2021-03-28-at-20.08.35.png?w=1024)

An example of the output from this plugin
