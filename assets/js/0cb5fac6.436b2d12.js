"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1719],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(b,s(s({ref:t},c),{},{components:n})):o.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(27378),r=n(38944);const a="tabItem_wHwb";function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,s),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(25773),r=n(27378),a=n(38944),s=n(83457),i=n(35595),l=n(76457);const u="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),o=u[n].value;o!==i&&(d(t),l(o))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:b,onClick:m},s,{className:(0,a.Z)("tabs__item",c,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function m(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement(p,(0,o.Z)({},e,t)),r.createElement(d,(0,o.Z)({},e,t)))}function b(e){const t=(0,l.Z)();return r.createElement(m,(0,o.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>d});var o=n(27378),r=n(35331),a=n(30654),s=n(70784),i=n(71819);function l(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=u(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[d,m]=p({queryString:n,groupId:r}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,i.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),k=(()=>{const e=d??b;return c({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!c({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),g(e)}),[m,g,a]),tabValues:a}}},36642:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(27378),r=n(54267),a=n(39798),s=n(33337);function i(e,t,n){let o=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?o+="--dev ":e.peer&&(o+="--peer "),n&&t&&!e.package&&(o+="-W "),o+=e.dep,o}function l(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function u(e){let t=i(e,!1,!0),n=l(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=i(e,!0,!0),n+=l(e,!0)),o.createElement(s.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(r.Z,{language:"shell"},i(e,!1,!1))),o.createElement(a.Z,{value:"yarn1"},o.createElement(r.Z,{language:"shell"},t)),o.createElement(a.Z,{value:"npm"},o.createElement(r.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),o.createElement(a.Z,{value:"pnpm"},o.createElement(r.Z,{language:"shell"},n)))}},11911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(25773),r=(n(27378),n(35318)),a=n(36642);const s={title:"Storybook example",sidebar_label:"Storybook"},i=void 0,l={unversionedId:"guides/examples/storybook",id:"guides/examples/storybook",title:"Storybook example",description:"Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of",source:"@site/docs/guides/examples/storybook.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/storybook",permalink:"/docs/guides/examples/storybook",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/storybook.mdx",tags:[],version:"current",frontMatter:{title:"Storybook example",sidebar_label:"Storybook"},sidebar:"guides",previous:{title:"Solid",permalink:"/docs/guides/examples/solid"},next:{title:"SvelteKit",permalink:"/docs/guides/examples/sveltekit"}},u={},c=[{value:"Setup",id:"setup",level:2},{value:"Vite integration",id:"vite-integration",level:3},{value:"Webpack integration",id:"webpack-integration",level:3},{value:"Jest integration",id:"jest-integration",level:3},{value:"Configuration",id:"configuration",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of\nteams use it for UI development, testing, and documentation. It\u2019s open source and free."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/7.0"},"Storybook v7")," is typically coupled with\n",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),". To scaffold a new Storybook project with Vite, run the following\ncommand in a project root. This guide assumes you are using React, however it is possible to use\nalmost any (meta) framework with Storybook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd <project> && npx storybook init\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We highly suggest reading our documentation on ",(0,r.kt)("a",{parentName:"p",href:"./vite"},"using Vite (and Vitest) with moon")," and\n",(0,r.kt)("a",{parentName:"p",href:"./jest"},"using Jest with moon")," for a more holistic view.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"This section assumes Storybook is being used with Vite, and is integrated on a per-project basis."),(0,r.kt)("p",null,"After setting up Storybook, ensure ",(0,r.kt)("a",{parentName:"p",href:"../../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," has the following tasks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"fileGroups:\n  storybook:\n    - 'src/**/*'\n    - 'stories/**/*'\n    - 'tests/**/*'\n    - '.storybook/**/*'\n\ntasks:\n  buildStorybook:\n    command: 'build-storybook --output-dir @out(0)'\n    inputs:\n      - '@group(storybook)'\n    outputs:\n      - 'build'\n\n  storybook:\n    local: true\n    command: 'start-storybook'\n    inputs:\n      - '@group(storybook)'\n")),(0,r.kt)("p",null,"To run the Storybook development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon run <project>:storybook\n")),(0,r.kt)("h3",{id:"vite-integration"},"Vite integration"),(0,r.kt)("p",null,"Storybook 7 uses Vite out of the box, and as such, no configuration is required, but should you\nchoose to extend the Vite config, you can do so by passing in ",(0,r.kt)("inlineCode",{parentName:"p"},"viteFinal"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".storybook/main.ts"',title:'".storybook/main.ts"'},"import { mergeConfig } from 'vite';\n\nexport default {\n  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],\n  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],\n  core: {\n    builder: '@storybook/builder-vite',\n  },\n  async viteFinal(config) {\n    // Merge custom configuration into the default config\n    return mergeConfig(config, {\n      // Use the same \"resolve\" configuration as your app\n      resolve: (await import('../vite.config.js')).default.resolve,\n      // Add dependencies to pre-optimization\n      optimizeDeps: {\n        include: ['storybook-dark-mode'],\n      },\n    });\n  },\n};\n")),(0,r.kt)("p",null,"For more information on how to integrate Vite with Storybook see the\n",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/7.0/react/builders/vite#configuration"},"relevant documentation"),"."),(0,r.kt)("h3",{id:"webpack-integration"},"Webpack integration"),(0,r.kt)("p",null,"If you want to use Webpack with your Storybook project, you can do so by installing the relevant\npackage and updating configuration."),(0,r.kt)(a.Z,{dev:!0,dep:"@storybook/builder-webpack5",package:"<project>",mdxType:"AddDepsTabs"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".storybook/main.ts"',title:'".storybook/main.ts"'},"export default {\n  core: {\n    builder: '@storybook/builder-webpack5',\n  },\n};\n")),(0,r.kt)("p",null,"For more information on how to integrate Webpack with Storybook, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/7.0/react/builders/webpack"},"relevant documentation"),"."),(0,r.kt)("h3",{id:"jest-integration"},"Jest integration"),(0,r.kt)("p",null,"You can use Jest to test your stories, but isn't a requirement. Storybook ships with first-party\nplugins for improved developer experience."),(0,r.kt)("p",null,"Install the test runner and any relevant packages:"),(0,r.kt)(a.Z,{dev:!0,dep:"@storybook/addon-interactions @storybook/addon-coverage @storybook/jest@next @storybook/testing-library@next @storybook/test-runner@next",package:"<project>",mdxType:"AddDepsTabs"}),(0,r.kt)("p",null,"Add the test task to your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n  testStorybook:\n    command: 'test-storybook'\n    inputs:\n      - '@group(storybook)'\n")),(0,r.kt)("p",null,"Then enable plugins and interactions in your Storybook project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".storybook/main.ts"',title:'".storybook/main.ts"'},"export default {\n  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],\n  addons: [\n    // Other Storybook addons\n    '@storybook/addon-interactions', // Addon is registered here\n    '@storybook/addon-coverage',\n  ],\n  features: {\n    interactionsDebugger: true, // Enable playback controls\n  },\n};\n")),(0,r.kt)("p",null,"You can now start writing your tests. For an extended guide on how to write tests within your\nstories, see\n",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-tests/interaction-testing#write-an-interaction-test"},"writing an interaction test"),"\non the Storybook docs."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Storybook requires a ",(0,r.kt)("inlineCode",{parentName:"p"},".storybook")," folder relative to the project root. Because of this, Storybook\nshould be scaffolded in each project individually. Configuration may be shared through package\nimports."))}d.isMDXComponent=!0}}]);