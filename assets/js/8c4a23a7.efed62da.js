"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[739],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(25773),o=(n(27378),n(35318));const a={title:"docker setup",sidebar_label:"setup"},c=void 0,i={unversionedId:"commands/docker/setup",id:"commands/docker/setup",title:"docker setup",description:"The moon docker setup command will efficiently install dependencies for focused projects. This is",source:"@site/docs/commands/docker/setup.mdx",sourceDirName:"commands/docker",slug:"/commands/docker/setup",permalink:"/docs/commands/docker/setup",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/docker/setup.mdx",tags:[],version:"current",frontMatter:{title:"docker setup",sidebar_label:"setup"},sidebar:"docs",previous:{title:"scaffold",permalink:"/docs/commands/docker/scaffold"},next:{title:"generate",permalink:"/docs/commands/generate"}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moon docker setup")," command will efficiently install dependencies for focused projects. This is\nan all-in-one command for all dependency installations, and should replace ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," and other\ncommands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon docker setup\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"View the official ",(0,o.kt)("a",{parentName:"p",href:"../../guides/docker"},"Docker usage guide")," for a more in-depth example of how to\nutilize this command.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This command ",(0,o.kt)("em",{parentName:"p"},"must be")," ran after ",(0,o.kt)("a",{parentName:"p",href:"./scaffold"},(0,o.kt)("inlineCode",{parentName:"a"},"moon docker scaffold"))," and is typically ran within a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"!")))}d.isMDXComponent=!0}}]);