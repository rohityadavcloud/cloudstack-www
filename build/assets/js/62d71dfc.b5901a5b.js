"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(r),g=i,d=l["".concat(c,".").concat(g)]||l[g]||m[g]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6252:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var n=r(7462),i=r(7294),a=r(3905);const s={imgWrapper:"imgWrapper_iOsZ",imgBox:"imgBox__9fJ",link:"link_P8X3"};var o=r(9960);const c=[{img:"/media/users/meitu.png",title:"Meitu",site:"https://pc.meitu.com/"},{img:"/media/users/trip.jpeg",title:"CTrip",site:"https://ctrip.com/"},{img:"/media/users/jiatou.png",title:"Jiatou",site:"https://www.jiaads.com/"},{img:"/media/users/baidu.png",title:"Baidu",site:"https://www.baidu.com/"},{img:"/media/users/baishancloud.png",title:"BaiShanCloud",site:"https://intl.baishancloud.com/"},{img:"/media/users/rgyun.png",title:"Ruangao Mobile Private Marketplace",site:"https://www.rgyun.com/"},{img:"/media/users/xueqiu.png",title:"Xueqiu",site:"https://xueqiu.com/"},{img:"/media/users/u-next.png",title:"U-NEXT",site:"https://unext.jp/"},{img:"/media/users/circl-lu.png",title:"circl.lu",site:"https://circl.lu/"},{img:"/media/users/datavisor.png",title:"datavisor",site:"https://datavisor.com/"},{img:"/media/users/huolala.png",title:"huolala",site:"https://www.huolala.cn/"},{img:"/media/users/opera.png",title:"Opera",site:"https://opera.com"},{img:"/media/users/coinindex.png",title:"CoinIndex",site:"https://coinindex.agency/"}];function p(){return i.createElement(i.Fragment,null,i.createElement("div",{className:s.imgWrapper},c.map((e=>i.createElement("div",{className:s.imgBox,key:e.title},i.createElement(o.Z,{className:s.link,rel:"noopener noreferrer",target:"_blank",href:e.site},i.createElement("img",{src:e.img,srcSet:e.img,alt:e.title})))))))}const u={},l="Our Users",m={type:"mdx",permalink:"/users",source:"@site/src/pages/users.mdx",title:"Our Users",description:"Various companies and organizations use Kvrocks for as a persistent storage replacement with Redis.",frontMatter:{}},g=[],d={toc:g},f="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"our-users"},"Our Users"),(0,a.kt)("p",null,"Various companies and organizations use Kvrocks for as a persistent storage replacement with Redis."),(0,a.kt)(p,{mdxType:"UserLogos"}),(0,a.kt)("p",null,"Users are encouraged to add themselves to this page. Send a pull request to add your company or organization ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-kvrocks-website/blob/main/src/components/UserLogos/index.tsx"},"information")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-kvrocks-website/blob/main/static/media/users"},"logo"),"."))}h.isMDXComponent=!0}}]);