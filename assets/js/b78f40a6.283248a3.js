"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6629],{5318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6243:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7378),i=t(8944),r="tabItem_lLGn";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:t},n)}},637:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(5773),i=t(7378),r=t(6457),l=t(784),o=t(9947),s=t(3457),u=t(8944),c="tabList_lSCs",p="tabItem_WhCL";function m(e){var n,t,r,m=e.lazy,d=e.block,g=e.defaultValue,b=e.values,h=e.groupId,f=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.l)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===g?g:null!=(n=null!=g?g:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=k[0])?void 0:r.props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),T=w.tabGroupChoices,C=w.setTabGroupChoices,I=(0,i.useState)(N),j=I[0],O=I[1],x=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=T[h];null!=D&&D!==j&&v.some((function(e){return e.value===D}))&&O(D)}var _=function(e){var n=e.currentTarget,t=x.indexOf(n),a=v[t].value;a!==j&&(E(n),O(a),null!=h&&C(h,a))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;t=x[i]||x[x.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,u.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:_,onClick:_},r,{className:(0,u.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),m?(0,i.cloneElement)(k.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function d(e){var n=(0,r.Z)();return i.createElement(m,(0,a.Z)({key:String(n)},e))}},1279:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=t(5773),i=t(808),r=(t(7378),t(5318)),l=t(637),o=t(6243),s=["components"],u={title:"Continuous integration"},c=void 0,p={unversionedId:"guides/ci",id:"guides/ci",title:"Continuous integration",description:"All companies and projects rely on continuous integration (CI) to ensure high quality code and to",source:"@site/docs/guides/ci.mdx",sourceDirName:"guides",slug:"/guides/ci",permalink:"/docs/guides/ci",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/ci.mdx",tags:[],version:"current",frontMatter:{title:"Continuous integration"},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Open source usage",permalink:"/docs/guides/open-source"}},m={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Configuring tasks",id:"configuring-tasks",level:2},{value:"Integrating",id:"integrating",level:2},{value:"Comparing revisions",id:"comparing-revisions",level:2},{value:"Parallelizing tasks",id:"parallelizing-tasks",level:2}],g={toc:d};function b(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All companies and projects rely on continuous integration (CI) to ensure high quality code and to\navoid regressions. Because this is such a critical piece of every developer's workflow, we wanted to\nsupport it as a first-class feature within moon, and we do just that with the\n",(0,r.kt)("a",{parentName:"p",href:"../commands/ci"},(0,r.kt)("inlineCode",{parentName:"a"},"moon ci"))," command."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ci")," command does all the heavy lifting necessary for effectively running jobs. It achieves this\nby automatically running the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Determines touched files by comparing the current HEAD against a base."),(0,r.kt)("li",{parentName:"ul"},"Determines all ",(0,r.kt)("a",{parentName:"li",href:"../concepts/target"},"targets")," that need to run based on touched files."),(0,r.kt)("li",{parentName:"ul"},"Additionally runs affected ",(0,r.kt)("a",{parentName:"li",href:"../concepts/target"},"targets")," dependencies ",(0,r.kt)("em",{parentName:"li"},"and")," dependents."),(0,r.kt)("li",{parentName:"ul"},"Generates an action and dependency graph."),(0,r.kt)("li",{parentName:"ul"},"Installs the toolchain, Node.js, and npm dependencies."),(0,r.kt)("li",{parentName:"ul"},"Runs all actions within the graph using a thread pool."),(0,r.kt)("li",{parentName:"ul"},"Displays stats about all passing, failed, and invalid actions.")),(0,r.kt)("h2",{id:"configuring-tasks"},"Configuring tasks"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("em",{parentName:"p"},"all tasks")," run in CI, as you should always be building, linting, type-checking,\ntesting, so on and so forth. However, this isn't always true, so this can be disabled on a per-task\nbasis through the ",(0,r.kt)("a",{parentName:"p",href:"../config/project#runinci"},(0,r.kt)("inlineCode",{parentName:"a"},"runInCI"))," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tasks:\n  dev:\n    command: 'webpack'\n    args: 'server'\n    options:\n      runInCI: false\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This option ",(0,r.kt)("em",{parentName:"p"},"must")," be set to false for tasks that spawn a long-running or never-ending process, like\nHTTP or development servers. To help mitigate this, tasks named ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," are false by\ndefault."))),(0,r.kt)("h2",{id:"integrating"},"Integrating"),(0,r.kt)("p",null,"Although moon has an ",(0,r.kt)("a",{parentName:"p",href:"../concepts/toolchain"},"integrated toolchain"),", we still require Node.js and\ndependencies to be installed ",(0,r.kt)("em",{parentName:"p"},"beforehand"),", as moon is currently shipped as an\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@moonrepo/cli"},"npm package"),". This is unfortunate and we're looking\ninto other distribution channels."),(0,r.kt)("p",null,"With that being said, the following examples can be referenced for setting up moon and its CI\nworkflow in popular services. The examples assume a\n",(0,r.kt)("a",{parentName:"p",href:"../install#adding-a-package-script"},"package script named ",(0,r.kt)("inlineCode",{parentName:"a"},"moon"))," and are using Yarn 3, but feel\nfree to replace with your chosen setup."),(0,r.kt)(l.Z,{groupId:"ci-env",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"github",label:"GitHub",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/ci.yml"',title:'".github/workflows/ci.yml"'},"name: 'Pipeline'\non:\n  push:\n    branches:\n      - 'master'\n  pull_request:\njobs:\n  ci:\n    name: 'CI'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n      - uses: actions/setup-node@v3\n      - run: yarn install --immutable\n      - run: yarn moon ci\n"))),(0,r.kt)(o.Z,{value:"buildkite",label:"Buildkite",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".buildkite/pipeline.yml"',title:'".buildkite/pipeline.yml"'},"steps:\n  - label: 'CI'\n    commands:\n      - yarn install --immutable\n      - yarn moon ci\n"))),(0,r.kt)(o.Z,{value:"circleci",label:"CircleCI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},"version: 2.1\norbs:\n  node: 'circleci/node@5.0.2'\njobs:\n  ci:\n    docker:\n      - image: 'cimg/base:stable'\n    steps:\n      - checkout\n      - node/install:\n          install-yarn: true\n          node-version: '16.13'\n      - node/install-packages:\n          check-cache: always\n          pkg-manager: yarn-berry\n      - run: yarn moon ci\nworkflows:\n  pipeline:\n    jobs:\n      - ci\n"))),(0,r.kt)(o.Z,{value:"travisci",label:"TravisCI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},"language: node_js\nnode_js:\n  - 16\ncache: yarn\nscript: moon ci\n")))),(0,r.kt)("h2",{id:"comparing-revisions"},"Comparing revisions"),(0,r.kt)("p",null,"By default the command will compare the current HEAD against a base revision, which is typically the\nconfigured ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#defaultbranch"},(0,r.kt)("inlineCode",{parentName:"a"},"vcs.defaultBranch"))," (master, main, trunk, etc). Both\nof these can be customized with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--base")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--head")," options respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon ci --base <BRANCH> --head <SHA>\n")),(0,r.kt)("h2",{id:"parallelizing-tasks"},"Parallelizing tasks"),(0,r.kt)("p",null,"If your CI environment supports sharding across multiple jobs, then you can utilize moon's built in\nparallelism by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--jobTotal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--job")," options. The ",(0,r.kt)("inlineCode",{parentName:"p"},"--jobTotal")," option is an integer of\nthe total number of jobs available, and ",(0,r.kt)("inlineCode",{parentName:"p"},"--job")," is the current index (0 based) amongst the total."),(0,r.kt)("p",null,"When these options are passed, moon will only run affected ",(0,r.kt)("a",{parentName:"p",href:"../concepts/target"},"targets")," based on\nthe current job slice."),(0,r.kt)(l.Z,{groupId:"ci-env",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"github",label:"GitHub",mdxType:"TabItem"},(0,r.kt)("p",null,"GitHub Actions do not support native parallelism, but it can be emulated using it's matrix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/ci.yml"',title:'".github/workflows/ci.yml"'},"# ...\njobs:\n  ci:\n    # ...\n    strategy:\n      matrix:\n        index: [0, 1]\n    steps:\n      # ...\n      - run: yarn moon ci --job ${{ matrix.index }} --jobTotal 2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs"},"Documentation")))),(0,r.kt)(o.Z,{value:"buildkite",label:"Buildkite",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".buildkite/pipeline.yml"',title:'".buildkite/pipeline.yml"'},"# ...\nsteps:\n  - label: 'CI'\n    parallelism: 10\n    commands:\n      # ...\n      - yarn moon ci --job $$BUILDKITE_PARALLEL_JOB --jobTotal $$BUILDKITE_PARALLEL_JOB_COUNT\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://buildkite.com/docs/tutorials/parallel-builds#parallel-jobs"},"Documentation")))),(0,r.kt)(o.Z,{value:"circleci",label:"CircleCI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},"# ...\njobs:\n  ci:\n    # ...\n    parallelism: 10\n    steps:\n      # ...\n      - run: yarn moon ci --job $CIRCLE_NODE_INDEX --jobTotal $CIRCLE_NODE_TOTAL\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://circleci.com/docs/2.0/parallelism-faster-jobs/"},"Documentation")))),(0,r.kt)(o.Z,{value:"travisci",label:"TravisCI",mdxType:"TabItem"},(0,r.kt)("p",null,"TravisCI does not support native parallelism, but it can be emulated using it's matrix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},"# ...\nenv:\n  global:\n    - TRAVIS_JOB_TOTAL=2\n  jobs:\n    - TRAVIS_JOB_INDEX=0\n    - TRAVIS_JOB_INDEX=1\nscript: moon ci --job $TRAVIS_JOB_INDEX --jobTotal $TRAVIS_JOB_TOTAL\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.travis-ci.com/user/speeding-up-the-build/"},"Documentation"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Your CI environment may provide environment variables for these 2 values.")))}b.isMDXComponent=!0}}]);