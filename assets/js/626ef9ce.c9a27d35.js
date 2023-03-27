"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2080],{35318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(25773),o=(t(27378),t(35318));const a={title:"check"},c=void 0,i={unversionedId:"commands/check",id:"commands/check",title:"check",description:"The moon check [...projects] (or moon c) command will run all",source:"@site/docs/commands/check.mdx",sourceDirName:"commands",slug:"/commands/check",permalink:"/docs/commands/check",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/check.mdx",tags:[],version:"current",frontMatter:{title:"check"},sidebar:"docs",previous:{title:"ci",permalink:"/docs/commands/ci"},next:{title:"clean",permalink:"/docs/commands/clean"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}],s={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moon check [...projects]")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"moon c"),") command will run ",(0,o.kt)("em",{parentName:"p"},"all"),"\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/task#types"},"build and test tasks")," for one or many projects. This is a convenience\ncommand for verifying the current state of a project, instead of running multiple\n",(0,o.kt)("a",{parentName:"p",href:"./run"},(0,o.kt)("inlineCode",{parentName:"a"},"moon run"))," commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Check project at current working directory\n$ moon check\n\n# Check project by name\n$ moon check app\n\n# Check multiple projects by name\n$ moon check client server\n\n# Check ALL projects (may be costly)\n$ moon check --all\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[...names]")," - List of project names or aliases to explicitly check, as defined in\n",(0,o.kt)("a",{parentName:"li",href:"../config/workspace#projects"},(0,o.kt)("inlineCode",{parentName:"a"},"projects")),".")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--all")," - Run check for all projects in the workspace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-u"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"--updateCache")," - Bypass cache and force update any existing items.")))}m.isMDXComponent=!0}}]);