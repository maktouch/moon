"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[323],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(25773),o=(n(27378),n(35318));const a={title:"clean"},c=void 0,l={unversionedId:"commands/clean",id:"commands/clean",title:"clean",description:"The moon clean command will clean the current workspace by deleting stale cache. For the most",source:"@site/docs/commands/clean.mdx",sourceDirName:"commands",slug:"/commands/clean",permalink:"/docs/commands/clean",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/clean.mdx",tags:[],version:"current",frontMatter:{title:"clean"},sidebar:"docs",previous:{title:"check",permalink:"/docs/commands/check"},next:{title:"completions",permalink:"/docs/commands/completions"}},i={},s=[{value:"Options",id:"options",level:3}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moon clean")," command will clean the current workspace by deleting stale cache. For the most\npart, the action pipeline will clean automatically, but this command can be used to reset the\nworkspace entirely."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon clean\n\n# Delete cache with a custom lifetime\n$ moon clean --lifetime '24 hours'\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--lifetime"),' - The maximum lifetime of cached artifacts before being marked as stale. Defaults to\n"7 days".')))}p.isMDXComponent=!0}}]);