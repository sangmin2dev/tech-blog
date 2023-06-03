"use strict";(self.webpackChunktechnical_blog=self.webpackChunktechnical_blog||[]).push([[1279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5088:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"TBD \ube0c\ub79c\uce58 \uc804\ub7b5",description:"trunk-based-development \uc804\ub7b5\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790",tags:["git","TBD","trunk-based-development","\ube0c\ub79c\uce58 \uc804\ub7b5"],last_update:{date:"2022-12-12"}},i=void 0,o={unversionedId:"cs/git/trunk-based-development",id:"cs/git/trunk-based-development",isDocsHomePage:!1,title:"TBD \ube0c\ub79c\uce58 \uc804\ub7b5",description:"trunk-based-development \uc804\ub7b5\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790",source:"@site/docs/cs/git/trunk-based-development.md",sourceDirName:"cs/git",slug:"/cs/git/trunk-based-development",permalink:"/Tech-Blog/docs/cs/git/trunk-based-development",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cs/git/trunk-based-development.md",tags:[{label:"git",permalink:"/Tech-Blog/docs/tags/git"},{label:"TBD",permalink:"/Tech-Blog/docs/tags/tbd"},{label:"trunk-based-development",permalink:"/Tech-Blog/docs/tags/trunk-based-development"},{label:"\ube0c\ub79c\uce58 \uc804\ub7b5",permalink:"/Tech-Blog/docs/tags/\ube0c\ub79c\uce58-\uc804\ub7b5"}],version:"current",frontMatter:{title:"TBD \ube0c\ub79c\uce58 \uc804\ub7b5",description:"trunk-based-development \uc804\ub7b5\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790",tags:["git","TBD","trunk-based-development","\ube0c\ub79c\uce58 \uc804\ub7b5"],last_update:{date:"2022-12-12"}},sidebar:"cs",previous:{title:"\ud604\uc7ac \uc791\uc5c5\ud55c \ube0c\ub79c\uce58\ub97c \ub2e4\ub978 \ube0c\ub79c\uce58\uc5d0 \ucee4\ubc0b\ud558\uae30",permalink:"/Tech-Blog/docs/cs/git/another-branch-push"}},p=[{value:"0. \ub4e4\uc5b4\uac00\uae30 \uc804\uc5d0",id:"0-\ub4e4\uc5b4\uac00\uae30-\uc804\uc5d0",children:[]},{value:"1. Trunk-Based-Development\uc774\ub780",id:"1-trunk-based-development\uc774\ub780",children:[]},{value:"2. Gitflow vs TBD",id:"2-gitflow-vs-tbd",children:[]},{value:"3. TBD + CI",id:"3-tbd--ci",children:[]},{value:"4. \uc2e4\ucc9c\ubc95",id:"4-\uc2e4\ucc9c\ubc95",children:[]},{value:"5. \ub3c4\uc785 \uc804 \uac80\ud1a0\ud574\ubcfc\ub9cc\ud55c \ubb38\uc81c",id:"5-\ub3c4\uc785-\uc804-\uac80\ud1a0\ud574\ubcfc\ub9cc\ud55c-\ubb38\uc81c",children:[{value:"1. \uc18c\uaddc\ubaa8 \ubc30\uce58\ub85c \uac1c\ubc1c\ud574\uc57c \ud55c\ub2e4.",id:"1-\uc18c\uaddc\ubaa8-\ubc30\uce58\ub85c-\uac1c\ubc1c\ud574\uc57c-\ud55c\ub2e4",children:[]},{value:"2. \ub3d9\uae30\uc2dd \ucf54\ub4dc \uac80\ud1a0\ub97c \uc218\ud589\ud55c\ub2e4.",id:"2-\ub3d9\uae30\uc2dd-\ucf54\ub4dc-\uac80\ud1a0\ub97c-\uc218\ud589\ud55c\ub2e4",children:[]},{value:"3. \ud3ec\uad04\uc801\uc778 \uc790\ub3d9 \ud14c\uc2a4\ud2b8\ub97c \uad6c\ud604\ud55c\ub2e4.",id:"3-\ud3ec\uad04\uc801\uc778-\uc790\ub3d9-\ud14c\uc2a4\ud2b8\ub97c-\uad6c\ud604\ud55c\ub2e4",children:[]}]},{value:"6. Feature flag (Feature toggle)",id:"6-feature-flag-feature-toggle",children:[{value:"Feature flag\ub780?",id:"feature-flag\ub780",children:[]}]},{value:"Reference",id:"reference",children:[]}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"0-\ub4e4\uc5b4\uac00\uae30-\uc804\uc5d0"},"0. \ub4e4\uc5b4\uac00\uae30 \uc804\uc5d0"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("strong",null,"\uae43 \ube0c\ub79c\uce58 \uc804\ub7b5"),(0,r.kt)("p",{parentName:"div"},"\uae43 \ube0c\ub79c\uce58 \uc804\ub7b5\uc774\ub780 \uc5ec\ub7ec \uac1c\ubc1c\uc790\uac00 \ud558\ub098\uc758 \uc800\uc7a5\uc18c\ub97c \uc0ac\uc6a9\ud558\ub294 \ud658\uacbd\uc5d0\uc11c \uc800\uc7a5\uc18c\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\uae30 \uc704\ud55c work-flow\ub2e4."))),(0,r.kt)("p",null,"\uae43 \ube0c\ub79c\uce58 \uc804\ub7b5\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0 \ubc29\ubc95\ub860\uc774 \uc788\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git flow"),": \uc911\uc2ec\uc774 \ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"master"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"develop")," \ube0c\ub79c\uce58\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"feature"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"release"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hotfix")," \ubcf4\uc870 \ube0c\ub79c\uce58\ub97c \ubcd1\ud569\ud55c \ub4a4 \ubcf4\uc870 \ube0c\ub79c\uce58\ub97c \uc0ad\uc81c\ud558\ub294 \uc804\ub7b5"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"github flow"),": 1\uac1c\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"master"),"\ube0c\ub79c\uce58\uc640 PR \ubc29\uc2dd\uc744 \ud65c\uc6a9\ud55c \uc804\ub7b5")),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \uc0c8\ub85c\uc774 \ub5a0\uc624\ub974\ub294 \ube0c\ub79c\uce58 \uc804\ub7b5\uc774 \uc788\ub2e4."),(0,r.kt)("h2",{id:"1-trunk-based-development\uc774\ub780"},"1. Trunk-Based-Development\uc774\ub780"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Trunk-Based-Development"),"\uc740\xa0\uac1c\ubc1c\uc790\uac00 \ud575\uc2ec ",(0,r.kt)("inlineCode",{parentName:"p"},"Trunk")," \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"main branch"),"\uc5d0 \ub300\ud55c \uc791\uace0 \ube48\ubc88\ud55c \uc5c5\ub370\uc774\ud2b8\ub97c \ubcd1\ud569\ud558\ub294\xa0\ubc84\uc804 \uc81c\uc5b4 \uad00\ub9ac \ubc29\ubc95\uc774\ub2e4.\xa0\uc791\uc740 \ucee4\ubc0b\uc73c\ub85c \uc218\uba85\uc774 \uc9e7\uc740 \ubd84\uae30\ub97c \ub9cc\ub4dc\ub294 \uac83\uc774 \ud575\uc2ec\uc774\ub2e4.\n\ucf54\ub4dc\ubca0\uc774\uc2a4 \ubcf5\uc7a1\uc131\uacfc \ud300 \uaddc\ubaa8\uac00 \ucee4\uc9d0\uc5d0 \ub530\ub77c TBD\ub294 \ud504\ub85c\ub355\uc158 \ub9b4\ub9ac\uc2a4 \ud750\ub984\uc744 \uc720\uc9c0\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub41c\ub2e4."),(0,r.kt)("h2",{id:"2-gitflow-vs-tbd"},"2. Gitflow vs TBD"),(0,r.kt)("p",null,"\uc8fc\uc694 \ucc28\uc774\uc810\uc740 \ubc94\uc704\uc774\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Gitflow"),"\ub294 \uc218\uba85\uc774 \uae34 feature branches\uc640 \uc5ec\ub7ec \uae30\ubcf8 \ubd84\uae30\ub97c \uc0ac\uc6a9\ud558\ub294 \ube0c\ub79c\uce58 \uc804\ub7b5\uc778\ub370 \uc77c\ubc18\uc801\uc73c\ub85c \uc5ec\ub7ec \uac1c\ubc1c\uc790\uac00 \uad00\uc5ec\ud558\uba70 \uba70\uce60, \uc2ec\uc9c0\uc5b4 \uba87 \uc8fc\uac00 \uc18c\uc694\ub41c\ub2e4. \ub54c\ubb38\uc5d0 \uc774 \uc804\ub7b5\uc740 \uac1c\ubc1c\uc790\uac00 feature branches\ub97c \ub9cc\ub4e4\uace0 \uae30\ub2a5\uc774 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 main trunk branch\uc5d0 \ubcd1\ud569\ud560 \uc218 \uc5c6\ub2e4. \uc774\ub7ec\ud55c \uc218\uba85\uc774 \uae34 feature branches\ub294 main trunk branch\uc5d0 \ubcd1\ud569\uc744 \uc2dc\ub3c4\ud558\ub294 \uc21c\uac04 \ucda9\ub3cc\ud560 \ud655\ub960\uc774 \ub192\uace0 \uadf8\ub9cc\ud07c \uc704\ud5d8\uc774 \ub192\uae30 \ub54c\ubb38\uc5d0 \ubcd1\ud569\ud558\ub824\uba74 \ub354 \ub9ce\uc740 \ud611\uc5c5\uc774 \ud544\uc694\ud558\ub2e4."),(0,r.kt)("p",null,"\uc55e\uc11c \ub9d0\ud588\ub4ef, ",(0,r.kt)("inlineCode",{parentName:"p"},"Gitflow"),"\uc5d0\ub294 \uac1c\ubc1c, \ud56b\ud53d\uc2a4, \uae30\ub2a5 \ubc0f \ub9b4\ub9ac\uc2a4\ub97c \uc704\ud55c \ubcc4\ub3c4\uc758 \ube0c\ub79c\uce58\uac00 \uc788\ub2e4. \uadf8\ub9cc\ud07c \uad00\ub9ac\ud574\uc57c \ud560 \uc9c0\uc810\uc774 \ub354 \ub9ce\uae30 \ub54c\ubb38\uc5d0 \ucd94\uac00 \uacc4\ud68d \uc138\uc158\uacfc \ud300\uc758 \uac80\ud1a0\uac00 \ub354 \ud544\uc694\ud558\ub2e4.\n",(0,r.kt)("img",{parentName:"p",src:"https://cloud.google.com/static/architecture/devops/images/devops-tech-trunk-based-development-typical-non-trunk-timeline.svg",alt:"\uc77c\ubc18\uc801\uc778 \ube0c\ub79c\uce58\uc804\ub7b5"})),(0,r.kt)("p",null,"\ubc18\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"TBD"),"\ub294 \uac1c\ubc1c\uc790\uac00 \ucf54\ub4dc\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"Trunk")," \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"main branch"),"\uc5d0 \uc9c1\uc811 \ud478\uc2dc\ud55c\ub2e4. \ucd9c\uc2dc \ubd84\uae30\uc5d0\uc11c \ubcc0\uacbd\ub41c \uc0ac\ud56d\uc740 \uac00\ub2a5\ud55c \ube68\ub9ac \ud2b8\ub801\ud06c\uc5d0 \ub2e4\uc2dc \ubcd1\ud569\ud574\uc57c \ud55c\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"TBD"),"\uc758 \uc8fc\uc694 \uc774\uc810\uc740 \uac1c\ubc1c \ub77c\uc778\uc744 \uc904\uc774\uace0 \uc18c\uaddc\ubaa8 \ubcd1\ud569\uc744 \ube48\ubc88\ud558\uac8c \uc218\ud589\ud558\uc5ec \uc774\ubca4\ud2b8\ub97c \ubcd1\ud569\ud558\ub294 \ub370 \ub530\ub978 \ubcf5\uc7a1\uc131\uc744 \uac10\uc18c\uc2dc\ud0a4\uace0 \ucf54\ub4dc\ub97c \ucd5c\uc2e0 \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud560 \uc218 \uc788\uac8c \ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.google.com/static/architecture/devops/images/devops-tech-trunk-based-development-typical-trunk-timeline.svg",alt:"TBD"})),(0,r.kt)("h2",{id:"3-tbd--ci"},"3. TBD + CI"),(0,r.kt)("p",null,"\uc774\ub54c main branch\ub294 \ud56d\uc0c1 \uc548\uc815\uc801\uc774\uace0 \ubb38\uc81c\uc5c6\uc774 \ubc30\ud3ec\ud560 \uc900\ube44\uac00 \ub418\uc5b4 \uc788\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4. \uc989, CI(\uc9c0\uc18d\uc801\uc778 \ud1b5\ud569)\ub97c \uc704\ud55c \ud544\uc218 \uc0ac\ub840\uc774\ub2e4. \uc9c0\uc18d\uc801 \ud1b5\ud569(CI)\uc740 TBD\uc640 \uc2dc\uc2a4\ud15c\uc758 \uc0c1\uc2dc \uc791\ub3d9\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574 \ud2b8\ub801\ud06c\ub85c \ucee4\ubc0b \ud6c4 \uc790\ub3d9\uc73c\ub85c \uc2e0\uc18d\ud558\uac8c \uc2e4\ud589\ub418\ub294 \uc77c\ub828\uc758 \ud14c\uc2a4\ud2b8\ub97c \uc720\uc9c0\uad00\ub9ac\ud558\ub294 \uc791\uc5c5\uc758 \uacb0\ud569\uc774\ub2e4."),(0,r.kt)("p",null,"\uc9c0\uc18d\uc801 \ud1b5\ud569\uc758 \uc8fc\uc694 \ud2b9\uc9d5\uc740 \uc18c\uaddc\ubaa8 \ucf54\ub4dc \ubc30\uce58\ub97c \uc790\uc8fc \ud1b5\ud569\ud558\uc5ec \uae34 \ud1b5\ud569 \ubc0f \uc548\uc815\ud654 \ub2e8\uacc4\ub97c \uc5c6\uc560\ub294 \uac83\uc774\uba70, \uc774\ub807\uac8c \ud558\uba74 \uac1c\ubc1c\uc790\ub294 \uc218\ud589 \uc911\uc778 \uc791\uc5c5\uc5d0 \ub300\ud574 \uc758\uc0ac\uc18c\ud1b5\ud560 \uc218 \uc788\uace0 \ud1b5\ud569 \uc2dc \ub2e4\ub978 \uac1c\ubc1c\uc790\uc640 \ud14c\uc2a4\ud130\uc5d0\uac8c \uc0c1\ub2f9\ud55c \uc791\uc5c5\uc744 \uc720\ubc1c\ud560 \uc218 \uc788\ub294 \ub300\uaddc\ubaa8 \ubcd1\ud569\uc744 \ud53c\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc0c8 \ucf54\ub4dc\uac00 \ud2b8\ub801\ud06c\uc5d0 \ubcd1\ud569\ub418\uba74 \uc790\ub3d9\ud654\ub41c \ud1b5\ud569 \ubc0f \ucf54\ub4dc \uc801\uc6a9 \ubc94\uc704 \ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud589\ub418\uc5b4 \ucf54\ub4dc \ud488\uc9c8\uc744 \uac80\uc99d."),(0,r.kt)("li",{parentName:"ol"},"TBD\uc758 \ube60\ub974\uace0 \uc791\uc740 \ucee4\ubc0b\uc740 \ucf54\ub4dc \uac80\ud1a0\ub97c \ubcf4\ub2e4 \ud6a8\uc728\uc801\uc778 \ud504\ub85c\uc138\uc2a4\ub85c \ub9cc\ub4e0\ub2e4. \uc18c\uaddc\ubaa8\ub85c \ubd84\uae30\ub418\uae30 \ub54c\ubb38\uc5d0 \uc791\uc740 \ubcc0\uacbd \uc0ac\ud56d\uc744 \ube60\ub974\uac8c \ud655\uc778\ud558\uace0 \uac80\ud1a0\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ol"},'\ud300\uc740 main branch\uc5d0 \ubcd1\ud569\uc744 \uc790\uc8fc \uc218\ud589\ud574\uc57c \ud55c\ub2e4. \ud2b8\ub801\ud06c \uae30\ubc18 \uac1c\ubc1c\uc740 \ud2b8\ub801\ud06c \ubd84\uae30\ub97c "\ub179\uc0c9"\uc73c\ub85c \uc720\uc9c0\ud558\uae30 \uc704\ud574 \ub178\ub825\ud574\uc57c\ud558\uace0, \uc989, \ubaa8\ub4e0 \ucee4\ubc0b\uc5d0\uc11c \ubc30\ud3ec\ud560 \uc900\ube44\uac00 \ub418\uc5b4 \uc788\uc5b4\uc57c \ud55c\ub2e4.')),(0,r.kt)("h2",{id:"4-\uc2e4\ucc9c\ubc95"},"4. \uc2e4\ucc9c\ubc95"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"main(\ub610\ub294 trunk) \ube0c\ub79c\uce58 \ud558\ub098\ub9cc \uc6b4\uc601\ud55c\ub2e4. \uc2e0\uaddc \uae30\ub2a5\uc744 main\uc5d0 \ubc14\ub85c \ucee4\ubc0b\ud55c\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"main \ube0c\ub79c\uce58\uc5d0 \ucf54\ub4dc\uac00 \uba38\uc9c0\ub418\uc5c8\ub2e4\uba74, main \ube0c\ub79c\uce58\uc5d0 \ub300\ud574 CI/CD \ud55c\ub2e4. \ubb38\uc81c\uac00 \uc5c6\ub2e4\uba74, main \ube0c\ub79c\uce58\uc758 \ucf54\ub4dc\uac00 \uadf8 \uc989\uc2dc \uc6b4\uc601 \ud658\uacbd\uc5d0 \ubc30\ud3ec\ub41c\ub2e4."))),(0,r.kt)("h2",{id:"5-\ub3c4\uc785-\uc804-\uac80\ud1a0\ud574\ubcfc\ub9cc\ud55c-\ubb38\uc81c"},"5. \ub3c4\uc785 \uc804 \uac80\ud1a0\ud574\ubcfc\ub9cc\ud55c \ubb38\uc81c"),(0,r.kt)("h3",{id:"1-\uc18c\uaddc\ubaa8-\ubc30\uce58\ub85c-\uac1c\ubc1c\ud574\uc57c-\ud55c\ub2e4"},"1. \uc18c\uaddc\ubaa8 \ubc30\uce58\ub85c \uac1c\ubc1c\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \uac80\ud1a0 \uc808\ucc28\uac00 \ub9e4\uc6b0 \ubcf5\uc7a1\ud55c \uacbd\uc6b0, \ub9ce\uc740 \ubcc0\uacbd\uc0ac\ud56d\uc744 \uc77c\uad04\ub85c \ucc98\ub9ac\ud558\uac8c \ub41c\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ub300\uaddc\ubaa8 \uac80\ud1a0\ub97c \ubbf8\ub8e8\uac8c \ub418\ubbc0\ub85c \uc18c\uaddc\ubaa8 \ubc30\uce58\ub85c \uac1c\ubc1c\ud574\uc57c \ud55c\ub2e4.")),(0,r.kt)("h3",{id:"2-\ub3d9\uae30\uc2dd-\ucf54\ub4dc-\uac80\ud1a0\ub97c-\uc218\ud589\ud55c\ub2e4"},"2. \ub3d9\uae30\uc2dd \ucf54\ub4dc \uac80\ud1a0\ub97c \uc218\ud589\ud55c\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\uc790\uac00 \ucf54\ub4dc\ub97c \ucee4\ubc0b\ud560 \uc900\ube44\uac00 \ub418\uba74 \ub2e4\ub978 \ud300\uc6d0\uc5d0\uac8c \ucf54\ub4dc\ub97c \uc989\uc2dc \uac80\ud1a0\ud558\ub3c4\ub85d \uc694\uccad\ud574\uc57c \ud55c\ub2e4. \ubcd1\ud569\uc774 \uc9c0\uc5f0\ub420\uc218\ub85d \ubcd1\ud569 \ucda9\ub3cc \ubc0f \uad00\ub828 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \ub192\ub2e4. \ub3d9\uae30\uc2dd \uac80\ud1a0\ub97c \uad6c\ud604\ud558\ub824\uba74 \ub2e4\ub978 \uc791\uc5c5\ubcf4\ub2e4 \uc11c\ub85c\uc758 \ucf54\ub4dc\ub97c \uc6b0\uc120\uc801\uc73c\ub85c \uac80\ud1a0\ud558\ub3c4\ub85d \ud558\ub294 \ud300\uc758 \ud569\uc758\uac00 \uc788\uc5b4\uc57c \ud55c\ub2e4.")),(0,r.kt)("h3",{id:"3-\ud3ec\uad04\uc801\uc778-\uc790\ub3d9-\ud14c\uc2a4\ud2b8\ub97c-\uad6c\ud604\ud55c\ub2e4"},"3. \ud3ec\uad04\uc801\uc778 \uc790\ub3d9 \ud14c\uc2a4\ud2b8\ub97c \uad6c\ud604\ud55c\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud3ec\uad04\uc801\uc774\uace0 \uc720\uc758\ubbf8\ud55c \uc790\ub3d9\ud654\ub41c \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \ubaa8\uc74c\uc774 \uc788\uc5b4\uc57c \ud558\uace0 \ucee4\ubc0b \uc804\uc5d0 \uc2e4\ud589\ub418\uc5b4\uc57c \ud55c\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ubaa8\ub4e0 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\uacfc\ud588\uc744 \ub54c pull \uc694\uccad \ubcd1\ud569\ub9cc \ud5c8\uc6a9\ud558\ub3c4\ub85d \ubd84\uae30\ub97c \ubcf4\ud638\ud558\ub294 \uac83\uc744 \ub9d0\ud55c\ub2e4.")),(0,r.kt)("h2",{id:"6-feature-flag-feature-toggle"},"6. Feature flag (Feature toggle)"),(0,r.kt)("p",null,"\ud14c\uc2a4\ud2b8\ub97c \uac70\ucce4\ub2e4\uace0 \ud574\ub3c4 \uc608\uc0c1\uce58 \ubabb\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uac8c \ub41c\ub2e4. \uc6b4\uc601 \ud658\uacbd\uc5d0 \ucf54\ub4dc\ub97c \ubc30\ud3ec\ud558\uba74 \uad00\ub828 \uae30\ub2a5\uc774 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc774\uac8c \ub418\ub294\ub370, TBD\ub294 \uc774\ub7ec\ud55c \ub9ac\uc2a4\ud06c\ub97c \uac16\uace0 \uc788\ub2e4."),(0,r.kt)("p",null,"\uc774\ub54c Feature flag\ub97c \uc0ac\uc6a9\ud558\uba74 \ubc30\ud3ec\uc640 \ucd9c\uc2dc\ub97c \ubd84\ub9ac\ud558\uc5ec \uae30\ub2a5\uc758 \uc804\uccb4 \uc218\uba85 \uc8fc\uae30\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4.\n\ubc30\ud3ec\ud55c \uae30\ub2a5\uc744 \ubc14\ub85c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc5ec\uc8fc\uc9c0 \uc54a\uace0 \uc9c0\uc815\ud55c \uc778\uc6d0\ub9cc \uc811\uadfc\ud558\uac8c \ud558\uc5ec \uc6b4\uc601 \ud658\uacbd\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \ud558\ub294 \uac83\uc774\ub2e4."),(0,r.kt)("h3",{id:"feature-flag\ub780"},"Feature flag\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc18c\uc2a4 \ucf54\ub4dc\uc5d0\uc11c \uc5ec\ub7ec \uae30\ub2a5 \ubd84\uae30\ub97c \uc720\uc9c0 \uad00\ub9ac\ud558\ub294 \ub300\uc548\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ucf54\ub4dc \ub0b4\uc758 \uc870\uac74\uc740 \ub7f0\ud0c0\uc784 \ub3d9\uc548 \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud558\uac70\ub098 \ube44\ud65c\uc131\ud654\ud569\ub2c8\ub2e4. \uc560\uc790\uc77c \uc124\uc815\uc5d0\uc11c \ud1a0\uae00\uc740 \ud504\ub85c\ub355\uc158\uc5d0\uc11c \uc77c\ubd80 \ub610\ub294 \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud574 \uc628\ub514\ub9e8\ub4dc\ub85c \uae30\ub2a5\uc744 \ucf1c\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. - \uc704\ud0a4\ubc31\uacfc"),(0,r.kt)("li",{parentName:"ul"},"\uae30\ub2a5\uc744 \uc804\ud658\ud558\uace0 \uc228\uae30\uac70\ub098 \ube44\ud65c\uc131\ud654\ud558\uac70\ub098 \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5b4\ub5a4 \uae30\ub2a5\uc774 \ub354 \uc88b\uc740\uc9c0 \uc54c\uc544\ubcf4\uae30 \uc704\ud574 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub2e4\uc591\ud55c \uae30\ub2a5 \ubcc0\ud615\uc744 \uacf5\uac1c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. - ",(0,r.kt)("a",{parentName:"li",href:"https://www.atlassian.com/continuous-delivery/principles/feature-flags"},"atlassian"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="featureFlags.ts"',title:'"featureFlags.ts"'},"const featureFlags = {\n  hellowordnewfeature: false,\n};\n\nexport function getFeatureFlag(key) {\n  return featureFlags[key] || false;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="helloword.ts"',title:'"helloword.ts"'},"//return feature based on the feature flag\nimport { getFeatureFlag } from './featureFlags';\n\nconst createHelloWord = () => {\n  if (getFeatureFlag('hellowordnewfeature')) {\n    return createNewHelloWord();\n  }\n\n  return createOldHelloWorld();\n};\n")),(0,r.kt)("p",null,"\uc0c8 \uae30\ub2a5\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"hellowordnewfeature"),' \ud50c\ub798\uadf8\ub97c \uae30\ubc18\uc73c\ub85c \ubc18\ud658\ub418\uace0, \ud50c\ub798\uadf8\uac00 "true"\uc774\uba74 \uc0c8 \uae30\ub2a5 ',(0,r.kt)("inlineCode",{parentName:"p"},"createNewHelloWord"),"\uc774 \ubc18\ud658\ub418\uace0 \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \uc774\uc804 \uae30\ub2a5 ",(0,r.kt)("inlineCode",{parentName:"p"},"createOldHelloWorld"),'\uc774 \ubc18\ud658\ub41c\ub2e4.\n\uc989, Feature flag\ub294 \ubcf8\uc9c8\uc801\uc73c\ub85c "if \ubb38"\uc77c \ubfd0\uc774\ub2e4.'),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development"},"\ud2b8\ub801\ud06c \uae30\ubc18 \uac1c\ubc1c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development"},"\ud2b8\ub801\ud06c \uae30\ubc18 \uac1c\ubc1c 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.atlassian.com/continuous-delivery/principles/feature-flags"},"feature-flags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs-kr.hackle.io/docs/feature-flags"},"feature-flags2"))))}c.isMDXComponent=!0}}]);