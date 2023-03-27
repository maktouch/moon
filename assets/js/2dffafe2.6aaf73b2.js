"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9631],{35318:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(27378);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?t.createElement(k,l(l({ref:n},c),{},{components:a})):t.createElement(k,l({ref:n},c))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39798:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(27378),o=a(38944);const r="tabItem_wHwb";function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},n)}},33337:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(25773),o=a(27378),r=a(38944),l=a(83457),i=a(35595),s=a(76457);const p="tabList_J5MA",c="tabItem_l0OV";function u(e){let{className:n,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const n=e.currentTarget,a=u.indexOf(n),t=p[a].value;t!==i&&(d(n),s(t))},k=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n)},p.map((e=>{let{value:n,label:a,attributes:l}=e;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:k,onClick:m},l,{className:(0,r.Z)("tabs__item",c,l?.className,{"tabs__item--active":i===n})}),a??n)})))}function d(e){let{lazy:n,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function m(e){const n=(0,i.Y)(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement(u,(0,t.Z)({},e,n)),o.createElement(d,(0,t.Z)({},e,n)))}function k(e){const n=(0,s.Z)();return o.createElement(m,(0,t.Z)({key:String(n)},e))}},35595:(e,n,a)=>{a.d(n,{Y:()=>d});var t=a(27378),o=a(35331),r=a(30654),l=a(70784),i=a(71819);function s(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:o}}=e;return{value:n,label:a,attributes:t,default:o}}))}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??s(a);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function c(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:a}=e;const l=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,r._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function d(e){const{defaultValue:n,queryString:a=!1,groupId:o}=e,r=p(e),[l,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[d,m]=u({queryString:a,groupId:o}),[k,h]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,i.Nk)(a);return[o,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:o}),g=(()=>{const e=d??k;return c({value:e,tabValues:r})?e:null})();(0,t.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),h(e)}),[m,h,r]),tabValues:r}}},9757:(e,n,a)=>{a.d(n,{ZP:()=>s});var t=a(25773),o=(a(27378),a(35318)),r=a(33337),l=a(39798);const i={toc:[]};function s(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "workspaces": ["apps/*", "packages/*"]\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".yarnrc.yml"',title:'".yarnrc.yml"'},"# ...\nnodeLinker: 'node-modules'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/features/workspaces"},"Documentation")))),(0,o.kt)(l.Z,{value:"yarn1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "workspaces": ["apps/*", "packages/*"]\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/workspaces"},"Documentation")))),(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "workspaces": ["apps/*", "packages/*"]\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v8/using-npm/workspaces"},"Documentation")))),(0,o.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n    - 'apps/*'\n    - 'packages/*'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pnpm.io/workspaces"},"Documentation"))))))}s.isMDXComponent=!0},47295:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>k});var t=a(25773),o=(a(27378),a(35318)),r=a(33337),l=a(39798),i=a(9757);const s={toc:[]};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("p",null,"Install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,o.kt)("p",null,"Add a package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# At the root\nnpm install <dependency>\n\n# In a project\nnpm install <dependency> --workspace <project>\n")),(0,o.kt)("p",null,"Remove a package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# At the root\nnpm install <dependency>\n\n# In a project\nnpm install <dependency> --workspace <project>\n")),(0,o.kt)("p",null,"Update packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx npm-check-updates --interactive\n"))),(0,o.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("p",null,"Install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm install\n")),(0,o.kt)("p",null,"Add a package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# At the root\npnpm add <dependency>\n\n# In a project\npnpm add <dependency> --filter <project>\n")),(0,o.kt)("p",null,"Remove a package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# At the root\npnpm remove <dependency>\n\n# In a project\npnpm remove <dependency> --filter <project>\n")),(0,o.kt)("p",null,"Update packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm update -i -r --latest\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("p",null,"Install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,o.kt)("p",null,"Add a package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# At the root\nyarn add <dependency>\n\n# In a project\nyarn workspace <project> add <dependency>\n")),(0,o.kt)("p",null,"Remove a package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# At the root\nyarn remove <dependency>\n\n# In a project\nyarn workspace <project> remove <dependency>\n")),(0,o.kt)("p",null,"Update packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn upgrade-interactive\n"))),(0,o.kt)(l.Z,{value:"yarn1",mdxType:"TabItem"},(0,o.kt)("p",null,"Install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,o.kt)("p",null,"Add a package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# At the root\nyarn add <dependency> -w\n\n# In a project\nyarn workspace <project> add <dependency>\n")),(0,o.kt)("p",null,"Remove a package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# At the root\nyarn remove <dependency> -w\n\n# In a project\nyarn workspace <project> remove <dependency>\n")),(0,o.kt)("p",null,"Update packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn upgrade-interactive --latest\n")))))}p.isMDXComponent=!0;const c={title:"Node.js handbook",toc_max_heading_level:6},u=void 0,d={unversionedId:"guides/javascript/node-handbook",id:"guides/javascript/node-handbook",title:"Node.js handbook",description:"Utilizing JavaScript (and TypeScript) in a monorepo can be a daunting task, especially when using",source:"@site/docs/guides/javascript/node-handbook.mdx",sourceDirName:"guides/javascript",slug:"/guides/javascript/node-handbook",permalink:"/docs/guides/javascript/node-handbook",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/javascript/node-handbook.mdx",tags:[],version:"current",frontMatter:{title:"Node.js handbook",toc_max_heading_level:6},sidebar:"guides",previous:{title:"Deno handbook",permalink:"/docs/guides/javascript/deno-handbook"},next:{title:"TypeScript project references",permalink:"/docs/guides/javascript/typescript-project-refs"}},m={},k=[{value:"moon setup",id:"moon-setup",level:2},{value:"Enabling the language",id:"enabling-the-language",level:3},{value:"Utilizing the toolchain",id:"utilizing-the-toolchain",level:3},{value:"Using <code>package.json</code> names and scripts",id:"using-packagejson-names-and-scripts",level:3},{value:"Repository structure",id:"repository-structure",level:2},{value:"Applications",id:"applications",level:3},{value:"Packages",id:"packages",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Dependency management",id:"dependency-management",level:2},{value:"Workspace commands",id:"workspace-commands",level:3},{value:"Developer tools at the root",id:"developer-tools-at-the-root",level:3},{value:"Product libraries in a project",id:"product-libraries-in-a-project",level:3},{value:"Code sharing",id:"code-sharing",level:2},{value:"Depending on packages",id:"depending-on-packages",level:3},{value:"Types of packages",id:"types-of-packages",level:3},{value:"Local only",id:"local-only",level:4},{value:"Internally published",id:"internally-published",level:4},{value:"Externally published",id:"externally-published",level:4},{value:"Bundler integration",id:"bundler-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3}],h={toc:k};function g(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Utilizing JavaScript (and TypeScript) in a monorepo can be a daunting task, especially when using\nNode.js, as there are many ways to structure your code and to configure your tools. With this\nhandbook, we'll help guide you through this process."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide is a living document and will continue to be updated over time!")),(0,o.kt)("h2",{id:"moon-setup"},"moon setup"),(0,o.kt)("p",null,"For this part of the handbook, we'll be focusing on ",(0,o.kt)("a",{parentName:"p",href:"/moon"},"moon"),", our task runner. To start,\nlanguages in moon act like plugins, where their functionality and support ",(0,o.kt)("em",{parentName:"p"},"is not")," enabled unless\nexplicitly configured. We follow this approach to avoid unnecessary overhead."),(0,o.kt)("h3",{id:"enabling-the-language"},"Enabling the language"),(0,o.kt)("p",null,"To enable JavaScript support via Node.js, define the ",(0,o.kt)("a",{parentName:"p",href:"../../config/toolchain#node"},(0,o.kt)("inlineCode",{parentName:"a"},"node"))," setting\nin ",(0,o.kt)("a",{parentName:"p",href:"../../config/toolchain"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),", even if an empty object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"# Enable Node.js\nnode: {}\n\n# Enable Node.js and override default settings\nnode:\n    packageManager: 'pnpm'\n")),(0,o.kt)("p",null,"Or by pinning a ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," version in ",(0,o.kt)("a",{parentName:"p",href:"../../proto/config"},(0,o.kt)("inlineCode",{parentName:"a"},".prototools"))," in the workspace root."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'node = "18.0.0"\npnpm = "7.29.0"\n')),(0,o.kt)("p",null,"This will enable the Node.js platform and provide the following automations around its ecosystem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node modules will automatically be installed if dependencies in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," have changed, or\nthe lockfile has changed, since the last time a task has ran.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We'll also take ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," workspaces into account and install modules in the correct\nlocation; either the workspace root, in a project, or both."))),(0,o.kt)("li",{parentName:"ul"},"Relationships between projects will automatically be discovered based on ",(0,o.kt)("inlineCode",{parentName:"li"},"dependencies"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"devDependencies"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"peerDependencies")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The versions of these packages will also be automatically synced when changed."))),(0,o.kt)("li",{parentName:"ul"},"Tasks can be ",(0,o.kt)("a",{parentName:"li",href:"../../config/toolchain#infertasksfromscripts"},"automatically inferred")," from\n",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," scripts."),(0,o.kt)("li",{parentName:"ul"},"And much more!")),(0,o.kt)("h3",{id:"utilizing-the-toolchain"},"Utilizing the toolchain"),(0,o.kt)("p",null,"When a language is enabled, moon by default will assume that the language's binary is available\nwithin the current environment (typically on ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"). This has the downside of requiring all\ndevelopers and machines to manually install the correct version of the language, ",(0,o.kt)("em",{parentName:"p"},"and to stay in\nsync"),"."),(0,o.kt)("p",null,"Instead, you can utilize ",(0,o.kt)("a",{parentName:"p",href:"../../concepts/toolchain"},"moon's toolchain"),", which will download and\ninstall the language in the background, and ensure every task is executed using the exact version\nacross all machines."),(0,o.kt)("p",null,"Enabling the toolchain is as simple as defining the ",(0,o.kt)("a",{parentName:"p",href:"../../config/toolchain#version"},(0,o.kt)("inlineCode",{parentName:"a"},"node.version")),"\nsetting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"# Enable Node.js toolchain with an explicit version\nnode:\n    version: '18.0.0'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Versions can also be defined with ",(0,o.kt)("a",{parentName:"p",href:"../../proto/config"},(0,o.kt)("inlineCode",{parentName:"a"},".prototools")),".")),(0,o.kt)("h3",{id:"using-packagejson-names-and-scripts"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"package.json")," names and scripts"),(0,o.kt)("p",null,"If you're looking to prototype moon, or reduce the migration effort to moon tasks, you can configure\nmoon to inherit ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," scripts, and internally convert them to moon tasks. This can be\nachieved with the ",(0,o.kt)("a",{parentName:"p",href:"../../config/toolchain#infertasksfromscripts"},(0,o.kt)("inlineCode",{parentName:"a"},"node.inferTasksFromScripts")),"\nsetting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"node:\n    inferTasksFromScripts: true\n")),(0,o.kt)("p",null,"Furthermore, if you'd like to reference projects by their package name (both in configuration and on\nthe command line), instead of the moon project name, enable the\n",(0,o.kt)("a",{parentName:"p",href:"../../config/toolchain#aliaspackagenames"},(0,o.kt)("inlineCode",{parentName:"a"},"node.aliasPackageNames"))," setting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"node:\n    aliasPackageNames: 'name-and-scope'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"These are not enabled by default as we want to encourage the\n",(0,o.kt)("a",{parentName:"p",href:"../../faq#can-we-use-packagejson-scripts"},"use of moon tasks"),".")),(0,o.kt)("h2",{id:"repository-structure"},"Repository structure"),(0,o.kt)("p",null,"JavaScript monorepo's work best when projects are split into applications and packages, with each\nproject containing its own ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," and dependencies. A root ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," must also exist\nthat pieces all projects together through workspaces."),(0,o.kt)("p",null,"For small repositories, the following structure typically works well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 .moon/\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 apps/\n\u2502   \u2514\u2500\u2500 client/\n|       \u251c\u2500\u2500 ...\n\u2502       \u2514\u2500\u2500 package.json\n\u2502   \u2514\u2500\u2500 server/\n|       \u251c\u2500\u2500 ...\n\u2502       \u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 packages/\n    \u251c\u2500\u2500 components/\n    |   \u251c\u2500\u2500 ...\n    \u2502   \u2514\u2500\u2500 package.json\n    \u251c\u2500\u2500 theme/\n    |   \u251c\u2500\u2500 ...\n    \u2502   \u2514\u2500\u2500 package.json\n    \u2514\u2500\u2500 utils/\n        \u251c\u2500\u2500 ...\n        \u2514\u2500\u2500 package.json\n")),(0,o.kt)("p",null,"For large repositories, grouping projects by team or department helps with ownership and\norganization. With this structure, applications and libraries can be nested at any depth."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 .moon/\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 infra/\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 internal/\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 payments/\n\u2502   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 shared/\n    \u2514\u2500\u2500 ...\n")),(0,o.kt)("h3",{id:"applications"},"Applications"),(0,o.kt)("p",null,"Applications are runnable or executable, like an HTTP server, and are pieced together with packages\nand its own encapsulated code. They represent the whole, while packages are the pieces. Applications\ncan import and depend on packages, but they ",(0,o.kt)("em",{parentName:"p"},"must not")," import and depend on other applications."),(0,o.kt)("p",null,"In moon, you can denote a project as an application using the ",(0,o.kt)("a",{parentName:"p",href:"../../config/project#type"},(0,o.kt)("inlineCode",{parentName:"a"},"type")),"\nsetting in ",(0,o.kt)("a",{parentName:"p",href:"../../config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"type: 'application'\n")),(0,o.kt)("h3",{id:"packages"},"Packages"),(0,o.kt)("p",null,"Packages (also known as a libraries) are self-contained reusable pieces of code, and are the\nsuggested pattern for ",(0,o.kt)("a",{parentName:"p",href:"#code-sharing"},"code sharing"),". Packages can import and depend on other\npackages, but they ",(0,o.kt)("em",{parentName:"p"},"must not")," import and depend on applications!"),(0,o.kt)("p",null,"In moon, you can denote a project as a library using the ",(0,o.kt)("a",{parentName:"p",href:"../../config/project#type"},(0,o.kt)("inlineCode",{parentName:"a"},"type"))," setting\nin ",(0,o.kt)("a",{parentName:"p",href:"../../config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"type: 'library'\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Every tool that you'll utilize in a repository will have its own configuration file. This will be a\nlot of config files, but regardless of what tool it is, where the config file should go will fall\ninto 1 of these categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Settings are inherited by all projects.")," These are known as universal tools, and enforce code\nconsistency and quality across the entire repository. Their config file must exist in the\nrepository root, but may support overrides in each project.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Examples: Babel, ",(0,o.kt)("a",{parentName:"li",href:"../examples/eslint"},"ESLint"),", ",(0,o.kt)("a",{parentName:"li",href:"../examples/prettier"},"Prettier"),",\n",(0,o.kt)("a",{parentName:"li",href:"../examples/typescript"},"TypeScript")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Settings are unique per project.")," These are developers tools that must be configured separately\nfor each project, as they'll have different concerns. Their config file must exist in each\nproject, but a shared configuration may exist as a base (for example, Jest presets).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Examples: ",(0,o.kt)("a",{parentName:"li",href:"../examples/jest"},"Jest"),", ",(0,o.kt)("a",{parentName:"li",href:"../examples/typescript"},"TypeScript")," (with project\nreferences)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Settings are one-offs.")," These are typically for applications or tools that require their own\nconfig, but aren't prevalent throughout the entire repository.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Examples: ",(0,o.kt)("a",{parentName:"li",href:"../examples/astro"},"Astro"),", ",(0,o.kt)("a",{parentName:"li",href:"../examples/next"},"Next"),", ",(0,o.kt)("a",{parentName:"li",href:"../examples/nuxt"},"Nuxt"),",\n",(0,o.kt)("a",{parentName:"li",href:"../examples/remix"},"Remix"),", Tailwind")))),(0,o.kt)("h2",{id:"dependency-management"},"Dependency management"),(0,o.kt)("p",null,"Dependencies, also known as node modules, are required by all projects, and are installed through a\npackage manager like npm, pnpm, or yarn. It doesn't matter which package manager you choose, but we\nhighly suggest choosing one that has proper workspaces support. If you're unfamiliar with\nworkspaces, they will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resolve all ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"'s in a repository using glob patterns."),(0,o.kt)("li",{parentName:"ul"},"Install dependencies from all ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"'s at once, in the required locations."),(0,o.kt)("li",{parentName:"ul"},"Create symlinks of local packages in ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," (to emulate an installed package)."),(0,o.kt)("li",{parentName:"ul"},"Deduplicate and hoist ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," when applicable.")),(0,o.kt)("p",null,"All of this functionality enables robust monorepo support, and can be enabled with the following:"),(0,o.kt)(i.ZP,{mdxType:"PackageWorkspaces"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Package workspaces are not a requirement for monorepos, but they do solve an array of problems\naround module resolution, avoiding duplicate packages in bundles, and general interoperability.\nProceed with caution for non-workspaces setups!")),(0,o.kt)("h3",{id:"workspace-commands"},"Workspace commands"),(0,o.kt)("p",null,"The following common commands can be used for adding, removing, or managing dependencies in a\nworkspace. View the package manager's official documentation for a thorough list of commands."),(0,o.kt)(p,{mdxType:"WsCommands"}),(0,o.kt)("h3",{id:"developer-tools-at-the-root"},"Developer tools at the root"),(0,o.kt)("p",null,"While not a strict guideline to follow, we've found that installing universal developer tool related\ndependencies (Babel, ESLint, Jest, TypeScript, etc) in the root ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\nto be a good pattern for consistency, quality, and the health of the repository. It provides the\nfollowing benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It ensures all projects are utilizing the same version (and sometimes configuration) of a tool."),(0,o.kt)("li",{parentName:"ul"},"It allows the tool to easily be upgraded. Upgrade once, applied everywhere."),(0,o.kt)("li",{parentName:"ul"},"It avoids conflicting or outdated versions of the same package.")),(0,o.kt)("p",null,"With that being said, this ",(0,o.kt)("em",{parentName:"p"},"does not")," include development dependencies that are unique to a project!"),(0,o.kt)("h3",{id:"product-libraries-in-a-project"},"Product libraries in a project"),(0,o.kt)("p",null,"Product, application, and or framework specific packages should be installed as production\n",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," in a project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". We've found this pattern to work well for the\nfollowing reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application dependencies are pinned per project, avoiding accidental regressions."),(0,o.kt)("li",{parentName:"ul"},"Applications can upgrade their dependencies and avoid breaking neighbor applications.")),(0,o.kt)("h2",{id:"code-sharing"},"Code sharing"),(0,o.kt)("p",null,'One of the primary reasons to use a monorepo is to easily share code between projects. When code is\nco-located within the same repository, it avoids the overhead of the "build -> version -> publish to\nregistry -> upgrade in consumer" workflow (when the code is located in an external repository).'),(0,o.kt)("p",null,"Co-locating code also provides the benefit of fast iteration, fast adoption, and easier migration\n(when making breaking changes for example)."),(0,o.kt)("p",null,"With ",(0,o.kt)("a",{parentName:"p",href:"#dependency-management"},"package workspaces"),", code sharing is a breeze. As mentioned above,\nevery project that contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," that is part of the workspace, will be symlinked into\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),". Because of this, these packages can easily be imported using their ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\nname."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Imports from /packages/utils/package.json\nimport utils from '@company/utils';\n")),(0,o.kt)("h3",{id:"depending-on-packages"},"Depending on packages"),(0,o.kt)("p",null,"Because packages are symlinked into ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", we can depend on them as if they were normal npm\npackages, but with 1 key difference. Since these packages aren't published, they do not have a\nversion to reference, and instead, we can use the special ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:^")," version (yarn and pnpm only,\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," for npm)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "@company/consumer",\n  "dependencies": {\n    "@company/provider": "workspace:^"\n  }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:"),' version basically means "use the package found in the current workspace". The ',(0,o.kt)("inlineCode",{parentName:"p"},":^"),"\ndetermines the version range to ",(0,o.kt)("em",{parentName:"p"},"substitute with when publishing"),". For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:^"),"\nabove would be replaced with version of ",(0,o.kt)("inlineCode",{parentName:"p"},"@company/provider")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"^<version>")," when the\n",(0,o.kt)("inlineCode",{parentName:"p"},"@company/consumer")," package is published."),(0,o.kt)("p",null,"There's also ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:~")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:*")," which substitutes to ",(0,o.kt)("inlineCode",{parentName:"p"},"~<version>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<version>"),"\nrespectively. We suggest using ",(0,o.kt)("inlineCode",{parentName:"p"},":^")," so that version ranges can be deduped."),(0,o.kt)("h3",{id:"types-of-packages"},"Types of packages"),(0,o.kt)("p",null,"When sharing packages in a monorepo, there's typically 3 different kinds of packages:"),(0,o.kt)("h4",{id:"local-only"},"Local only"),(0,o.kt)("p",null,"A local only package is just that, it's only available locally to the repository and ",(0,o.kt)("em",{parentName:"p"},"is not"),"\npublished to a registry, and ",(0,o.kt)("em",{parentName:"p"},"is not")," available to external repositories. For teams and companies\nthat utilize a single repository, this will be the most common type of package."),(0,o.kt)("p",null,"A benefit of local packages is that they do not require a build step, as source files can be\nimported directly (",(0,o.kt)("a",{parentName:"p",href:"#bundler-integration"},"when configured correctly"),"). This avoids a lot of\n",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," overhead, especially in regards to ",(0,o.kt)("inlineCode",{parentName:"p"},"exports"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"imports"),", and other import patterns."),(0,o.kt)("h4",{id:"internally-published"},"Internally published"),(0,o.kt)("p",null,"An internal package is published to a private registry, and ",(0,o.kt)("em",{parentName:"p"},"is not")," available to the public.\nPublished packages are far more strict than local packages, as the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," structure plays a\nmuch larger role for downstream consumers, as it dictates how files are imported, where they can be\nfound, what type of formats are supported (CJS, ESM), so on and so forth."),(0,o.kt)("p",null,"Published packages require a build step, for both source code and TypeScript types (when\napplicable). We suggest using ",(0,o.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild")," or\n",(0,o.kt)("a",{parentName:"p",href:"../examples/packemon"},"Packemon")," to handle this entire flow. With that being said, local projects\ncan still ",(0,o.kt)("a",{parentName:"p",href:"#bundler-integration"},"import their source files"),"."),(0,o.kt)("h4",{id:"externally-published"},"Externally published"),(0,o.kt)("p",null,"An external package is structured similarly to an internal package, but instead of publishing to a\nprivate registry, it's published to the npm public registry."),(0,o.kt)("p",null,"External packages are primarily for open source projects, and require the repository to also be\npublic."),(0,o.kt)("h3",{id:"bundler-integration"},"Bundler integration"),(0,o.kt)("p",null,"Co-locating packages is great, but how do you import and use them effectively? The easiest solution\nis to configure resolver aliases within your bundler (Webpack, Vite, etc). By doing so, you enable\nthe following functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoids having to build (and rebuild) the package everytime its code changes."),(0,o.kt)("li",{parentName:"ul"},"Enables file system watching of the package, not just the application."),(0,o.kt)("li",{parentName:"ul"},"Allows for hot module reloading (HMR) to work."),(0,o.kt)("li",{parentName:"ul"},"Package code is transpiled and bundled alongside application code.")),(0,o.kt)(r.Z,{groupId:"bundler",defaultValue:"vite",values:[{label:"Vite",value:"vite"},{label:"Webpack",value:"webpack"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"vite",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="vite.config.ts"',title:'"vite.config.ts"'},"import path from 'path';\nimport { defineConfig } from 'vite';\n\nexport default defineConfig({\n  // ...\n  resolve: {\n    alias: {\n      '@company/utils': path.join(__dirname, '../packages/utils/src'),\n    },\n  },\n});\n"))),(0,o.kt)(l.Z,{value:"webpack",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},"const path = require('path');\n\nmodule.exports = {\n  // ...\n  resolve: {\n    alias: {\n      '@company/utils': path.join(__dirname, '../packages/utils/src'),\n    },\n  },\n};\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When configuring aliases, we suggest using the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," name as the alias! This ensures that\non the consuming side, you're using the package as if it's a normal node module, and avoids\ndeviating from the ecosystem.")),(0,o.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,o.kt)("p",null,"We suggest using TypeScript project references. Luckily, we have an\n",(0,o.kt)("a",{parentName:"p",href:"./typescript-project-refs"},"in-depth guide on how to properly and efficiently integrate them"),"!"))}g.isMDXComponent=!0}}]);