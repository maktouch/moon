"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4536],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),i=["components"],c={title:"teardown"},l=void 0,u={unversionedId:"commands/teardown",id:"commands/teardown",title:"teardown",description:"The teardown command, as its name infers, will teardown and clean the current environment,",source:"@site/docs/commands/teardown.mdx",sourceDirName:"commands",slug:"/commands/teardown",permalink:"/docs/commands/teardown",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/teardown.mdx",tags:[],version:"current",frontMatter:{title:"teardown"},sidebar:"docs",previous:{title:"setup",permalink:"/docs/commands/setup"},next:{title:"Terminology",permalink:"/docs/terminology"}},s={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," command, as its name infers, will teardown and clean the current environment,\nopposite the ",(0,a.kt)("a",{parentName:"p",href:"./setup"},(0,a.kt)("inlineCode",{parentName:"a"},"setup"))," command. It achieves this by doing the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uninstalling all configured tools in the toolchain."),(0,a.kt)("li",{parentName:"ul"},"Removing any download or temporary files/folders.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon teardown\n")))}d.isMDXComponent=!0}}]);