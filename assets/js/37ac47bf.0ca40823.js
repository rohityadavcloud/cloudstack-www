"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5247],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={layout:"post",title:"CloudStack and OpenSSL CVE-2015-1793",slug:"cloudstack_and_openssl_cve_2015"},l=void 0,i={permalink:"/blog/cloudstack_and_openssl_cve_2015",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/blog/2015-07-10-cloudstack_and_openssl_cve_2015.md",source:"@site/blog/2015-07-10-cloudstack_and_openssl_cve_2015.md",title:"CloudStack and OpenSSL CVE-2015-1793",description:"Updated July 11th, 2015:",date:"2015-07-10T00:00:00.000Z",formattedDate:"July 10, 2015",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"CloudStack and OpenSSL CVE-2015-1793",slug:"cloudstack_and_openssl_cve_2015"},prevItem:{title:"Apache CloudStack 4.6 is released",permalink:"/blog/apache_cloudstack_4_6_is"},nextItem:{title:'CloudStack and the "Ghost" glibc vulnerability',permalink:"/blog/cloudstack_and_the_ghost_glibc"}},c={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("b",null,"Updated July 11th, 2015:"),(0,o.kt)("p",null,"After reviewing CloudStack components and seeing ",(0,o.kt)("a",{href:"https://security-tracker.debian.org/tracker/CVE-2015-1793"},"Debian's advisory"),' on CVE-2015-1793 (CloudStack\'s "system VM" is Debian based), it looks like CloudStack is not affected by this vulnerability.'),(0,o.kt)("p",null,"Original post follows..."),(0,o.kt)("p",null,"On the 9th of July, the OpenSSL project announced a high severity vulnerability within the OpenSSL library. While this particular vulnerability does not seem to affect SSL servers, there are security issues with SSL clients powered by OpenSSL.  Because of this, we suspect there may be issues with parts of CloudStack which initiate SSL connections."),(0,o.kt)("p",null,"At this point we are still reviewing which particular versions of OpenSSL are used by different versions of CloudStack. Once this review is complete, we will further update the community and this post as to our next steps."))}d.isMDXComponent=!0}}]);