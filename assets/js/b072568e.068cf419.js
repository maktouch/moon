"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2433],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},39798:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378),a=r(38944);const o="tabItem_wHwb";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},33337:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(25773),a=r(27378),o=r(38944),l=r(83457),i=r(35595),u=r(76457);const s="tabList_J5MA",c="tabItem_l0OV";function m(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),f=e=>{const t=e.currentTarget,r=m.indexOf(t),n=s[r].value;n!==i&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=m.indexOf(e.currentTarget)+1;t=m[r]??m[0];break}case"ArrowLeft":{const r=m.indexOf(e.currentTarget)-1;t=m[r]??m[m.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:f},l,{className:(0,o.Z)("tabs__item",c,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function p(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=(0,i.Y)(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement(m,(0,n.Z)({},e,t)),a.createElement(p,(0,n.Z)({},e,t)))}function d(e){const t=(0,u.Z)();return a.createElement(f,(0,n.Z)({key:String(t)},e))}},35595:(e,t,r)=>{r.d(t,{Y:()=>p});var n=r(27378),a=r(35331),o=r(30654),l=r(70784),i=r(71819);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function s(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const l=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=s(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[p,f]=m({queryString:r,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=p??d;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),f(e),b(e)}),[f,b,o]),tabValues:o}}},3688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));r(33337),r(39798);const o={slug:"v0.17",title:"moon v0.17 - Webhooks, extended YAML, and improved runtime performance",authors:["milesj"],tags:["notifier","runner","config","editors","vscode"],image:"./img/v0.17.png"},l=void 0,i={permalink:"/blog/v0.17",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-10-21_v0.17.mdx",source:"@site/blog/2022-10-21_v0.17.mdx",title:"moon v0.17 - Webhooks, extended YAML, and improved runtime performance",description:"With this release, we're landing the first iteration of our notifier service, starting with",date:"2022-10-21T00:00:00.000Z",formattedDate:"October 21, 2022",tags:[{label:"notifier",permalink:"/blog/tags/notifier"},{label:"runner",permalink:"/blog/tags/runner"},{label:"config",permalink:"/blog/tags/config"},{label:"editors",permalink:"/blog/tags/editors"},{label:"vscode",permalink:"/blog/tags/vscode"}],readingTime:3.18,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"v0.17",title:"moon v0.17 - Webhooks, extended YAML, and improved runtime performance",authors:["milesj"],tags:["notifier","runner","config","editors","vscode"],image:"./img/v0.17.png"},prevItem:{title:"moon v0.18 - Improved configuration and initialization flow",permalink:"/blog/v0.18"},nextItem:{title:"New VS Code extension!",permalink:"/blog/vscode-extension"}},u={image:r(41249).Z,authorsImageUrls:[void 0]},s=[],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With this release, we're landing the first iteration of our notifier service, starting with\nwebhooks! We've also spent some time working on quality of life improvements."))}m.isMDXComponent=!0},41249:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/v0.17-b3ee056e98fbfd5e347375782f5dd335.png"}}]);