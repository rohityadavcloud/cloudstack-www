"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5752],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(o),h=r,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||i;return o?n.createElement(d,a(a({ref:t},l),{},{components:o})):n.createElement(d,a({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3737:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const i={id:"contributing",title:"How to Contribute"},a=void 0,s={unversionedId:"contributing",id:"contributing",title:"How to Contribute",description:"In order to build an active community to improve Kvrocks, we welcome and are eager to your contributions of all kinds, including but not limited to:",source:"@site/community/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/community/contributing",draft:!1,tags:[],version:"current",frontMatter:{id:"contributing",title:"How to Contribute"},sidebar:"community",previous:{title:"Community",permalink:"/community/"},next:{title:"Internals",permalink:"/community/category/internals"}},c={},u=[{value:"Submit patches to Kvrocks",id:"submit-patches-to-kvrocks",level:2},{value:"Submit patches to document or project website",id:"submit-patches-to-document-or-project-website",level:2},{value:"Find tasks and start to contribute",id:"find-tasks-and-start-to-contribute",level:2},{value:"Participate in the community and become a committer",id:"participate-in-the-community-and-become-a-committer",level:2}],l={toc:u},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to build an active community to improve Kvrocks, we welcome and are eager to your contributions of all kinds, including but not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"suggesting new ideas or feature requests (please refer to the ",(0,r.kt)("a",{parentName:"li",href:"/community/"},"Community")," page);"),(0,r.kt)("li",{parentName:"ul"},"reporting bugs and defects you find (please refer to the ",(0,r.kt)("a",{parentName:"li",href:"/community/"},"Community")," page); "),(0,r.kt)("li",{parentName:"ul"},"contributing code changes (whether they are minor typo fixes, improvements, or major feature contributions); "),(0,r.kt)("li",{parentName:"ul"},"fixing or improving the documentation or the project website.")),(0,r.kt)("h2",{id:"submit-patches-to-kvrocks"},"Submit patches to Kvrocks"),(0,r.kt)("p",null,"Before you submit a patch, we strongly recommend that you share your ideas with others in the community via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-kvrocks/issues"},"Issues"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-kvrocks/discussions"},"Discussions")," or ",(0,r.kt)("a",{parentName:"p",href:"/community/#mailing-list"},"Mailing Lists"),".\nOf course, you do not need to do this if you are submitting a patch that can already be associated with an issue, or a minor patch like a typo fix.\nYou can then submit your patch to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-kvrocks"},"apache/incubator-kvrocks")," via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-kvrocks/pulls"},"Pull Requests"),", which requires a GitHub account."),(0,r.kt)("p",null,"To help you familiarise yourself with the source tree, we have listed some important directories below, along with an explanation and the programming language used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/cmake                  CMake source code for configuring dependencies and other build processing\n/src                    C++ source code for the kvrocks server\n/tests/cppunit          C++ unit tests for some components in /src\n/tests/gocases          Golang test cases for unit, functional and integration tests\n/utils/kvrocks2redis    C++ source code for the kvrocks2redis tool\n")),(0,r.kt)("p",null,"Make sure you have C++ (at least GCC >= 7 or Clang >= 5, a higher-version compiler is highly recommended) and Go toolchains in your development environment, refering to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started#install-dependencies"},"Getting Started")," page for all build dependencies.\nIn addition to the source code listed above, the rest of the repository consists mainly of scripts written in python or shell.\nAnd you can read about how to build this project on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started#compile-kvrocks-from-source"},"Getting Started")," page."),(0,r.kt)("p",null,"If your patch contains changes to C++ code, make sure you format the code using Clang Format (",(0,r.kt)("inlineCode",{parentName:"p"},"./x.py format")," to quickly format all code).\nIn addition, after you submit your patch, the CI (currently ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-kvrocks/actions"},"GitHub Actions"),") will perform some checks using Clang Tidy to ensure that the code follows some good patterns (modern C++) and without some security issues.\nSo if the CI reports a problem, you can check the CI logs or run Clang Tidy locally (",(0,r.kt)("inlineCode",{parentName:"p"},"./x.py check tidy"),") to help you fix your code.\nAnd if your patch involves changes to Go code, make sure you run golangci-lint (",(0,r.kt)("inlineCode",{parentName:"p"},"./x.py check golangci-lint"),") before submitting the patch."),(0,r.kt)("p",null,"For any code changes, we encourage you to add test cases for your changes (C++ unit tests or Go test cases, which are mandatory for large patches) and make sure they all pass before submitting (you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"./x.py test cpp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"./x.py test go")," to run all test cases)."),(0,r.kt)("p",null,"After opening your pull request (PR), you can choose some reviewers, although it is not mandatory.\nWe suggest you to choose a reviewer recommended by GitHub based on code snippets you modified, or some active community members (which can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/community/#people"},"Community")," page).\nAfter one or more committers have approved your PR and the rest of the community has no objections, congratulations, your PR will be merged into the main branch as soon as possible."),(0,r.kt)("h2",{id:"submit-patches-to-document-or-project-website"},"Submit patches to document or project website"),(0,r.kt)("p",null,"Contributions to the documentation and the project website are strongly encouraged, as they are often much less frequent.\nThe source code for both can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-kvrocks-website"},"apache/incubator-kvrocks-website")," repository, with the documentation written in Markdown format and the website based on Docusaurus.\nWhen contributing to the documentation, it is important to note that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Currently, the website does not provide documentation for individual releases, only for code in the main branch of the kvrocks repository, so please be careful not to document behaviour specific to older releases when contributing (if you need to do so, please mark the release separately to avoid confusion)."),(0,r.kt)("li",{parentName:"ul"},"After making major changes to the documentation, we recommend that you preview the changed version locally first to avoid formatting errors; you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn start")," to build and preview the page locally."),(0,r.kt)("li",{parentName:"ul"},"Do not copy from other copyrighted documents.")),(0,r.kt)("h2",{id:"find-tasks-and-start-to-contribute"},"Find tasks and start to contribute"),(0,r.kt)("p",null,"A major obstacle for people just starting out and wanting to get involved in the community can be the difficulty of knowing where to start.\nTo solve this problem, here are some suggestions to help new contributors start with simple tasks to learn the structure of the code and participate in the community step by step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filter the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-kvrocks/issues"},"Issues")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"good first issue")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"help wanted")," label, pick a task from there, and get involved. Note that ",(0,r.kt)("inlineCode",{parentName:"li"},"good first issue")," indicates an easy task for newcomers, while ",(0,r.kt)("inlineCode",{parentName:"li"},"help wanted")," has no fixed task difficulty."),(0,r.kt)("li",{parentName:"ul"},"Check out the Kvrocks roadmap in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-kvrocks/projects/2"},"Projects")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-kvrocks/discussions"},"Discussions")," and pick the parts you are familiar with to contribute."),(0,r.kt)("li",{parentName:"ul"},"Keep up to date with Redis developments and feel free to contribute any features that exist in Redis and are missing in Kvrocks.")),(0,r.kt)("h2",{id:"participate-in-the-community-and-become-a-committer"},"Participate in the community and become a committer"),(0,r.kt)("p",null,"As you find tasks to start participating in the community, you will gradually learn about the workings and practices of the community.\nHere are some tips to help you feel more comfortable in the community:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try to express your intentions in as many words as possible, and do not be afraid of words."),(0,r.kt)("li",{parentName:"ul"},"Talk to other members to get support before starting a new idea.")),(0,r.kt)("p",null,"After being involved in the community for a while, some members may want to learn how to become a committer, who has write access to the project (this is limited to merging PRs that have been approved and passed the CI, as kvrocks protects the main branch), and the ability to review PRs from others."),(0,r.kt)("p",null,"The Kvrocks community does not set explicit thresholds or requirements for committers.\nIn theory, a community member can become a committer if a PMC member proposes to the PMC to grant committer privileges to the community member, and the PMC members vote on and approve the proposal.\nAnd in practice, contributors who have been active in the community for a while have a good chance of becoming committers."))}p.isMDXComponent=!0}}]);