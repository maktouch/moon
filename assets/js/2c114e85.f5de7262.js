"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8663],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),i=["components"],c={title:"project"},p=void 0,l={unversionedId:"commands/project",id:"commands/project",title:"project",description:"The project  command will display all available information about a project that has been",source:"@site/docs/commands/project.mdx",sourceDirName:"commands",slug:"/commands/project",permalink:"/docs/commands/project",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/project.mdx",tags:[],version:"current",frontMatter:{title:"project"},sidebar:"docs",previous:{title:"init",permalink:"/docs/commands/init"},next:{title:"project-graph",permalink:"/docs/commands/project-graph"}},s={},u=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Example output",id:"example-output",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"project <id>")," command will display all available information about a project that has been\nconfigured and exists within the graph. If a project does not exist, the program will return with a\n1 exit code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon project web\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<id>")," - ID of a project, as defined in ",(0,a.kt)("a",{parentName:"li",href:"../config/workspace#projects"},(0,a.kt)("inlineCode",{parentName:"a"},"projects")),".")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--json")," - Print the project and its configuration as JSON.")),(0,a.kt)("h2",{id:"example-output"},"Example output"),(0,a.kt)("p",null,"The following output is an example of what this command prints, using our very own\n",(0,a.kt)("inlineCode",{parentName:"p"},"@moonrepo/runtime")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RUNTIME\n\nID: runtime\nSource: packages/runtime\nRoot: /Projects/moon/packages/runtime\n\nTASKS\n\nbuild: packemon build --addEngines --addExports\nformat: prettier --check .\nlint: eslint --no-error-on-unmatched-pattern .\ntest: jest --passWithNoTests .\ntypecheck: tsc --build\n\nFILE GROUPS\n\nconfigs:\n - *.{js,json}\nsources:\n - src/**/*\n - types/**/*\ntests:\n - tests/**/*.test.*\n")))}d.isMDXComponent=!0}}]);