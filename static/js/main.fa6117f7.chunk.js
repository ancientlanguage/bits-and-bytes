(this["webpackJsonpbits-and-bytes"]=this["webpackJsonpbits-and-bytes"]||[]).push([[0],{285:function(e,t,r){"use strict";r.r(t);var a=r(16),n=r.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=r(17),i=r(328),s=r(327),o=r(323),l=r(325),u=r(326),h=r(330),j=r(289),b=r(322),d=r(149),g=r(335),O=r(146),x=r.n(O),m=r(0),p=r(19),f=r(23),v=r.n(f),w=r(29),S=r(332),E=r(321),y=r(331),C=r(4),k=function(e,t){switch(t.tag){case"setOwner":return Object(C.a)(Object(C.a)({},e),{},{save:Object(C.a)(Object(C.a)({},e.save),{},{owner:t.owner})});case"setRepo":return Object(C.a)(Object(C.a)({},e),{},{save:Object(C.a)(Object(C.a)({},e.save),{},{repo:t.repo})});case"setBranch":return Object(C.a)(Object(C.a)({},e),{},{save:Object(C.a)(Object(C.a)({},e.save),{},{branch:t.branch})});case"setPath":return Object(C.a)(Object(C.a)({},e),{},{save:Object(C.a)(Object(C.a)({},e.save),{},{path:t.path})});case"setCommitSha":return Object(C.a)(Object(C.a)({},e),{},{save:Object(C.a)(Object(C.a)({},e.save),{},{commitSha:t.commitSha})});case"setTreeSha":return Object(C.a)(Object(C.a)({},e),{},{save:Object(C.a)(Object(C.a)({},e.save),{},{treeSha:t.treeSha})});case"setFileSha":return Object(C.a)(Object(C.a)({},e),{},{save:Object(C.a)(Object(C.a)({},e.save),{},{fileSha:t.fileSha})});case"setFetchError":return Object(C.a)(Object(C.a)({},e),{},{extra:Object(C.a)(Object(C.a)({},e.extra),{},{fetchError:t.fetchError,loading:!1})});case"setGetBranchError":return Object(C.a)(Object(C.a)({},e),{},{extra:Object(C.a)(Object(C.a)({},e.extra),{},{getBranchError:t.getBranchError,loading:!1})});case"setCommitMessage":return Object(C.a)(Object(C.a)({},e),{},{extra:Object(C.a)(Object(C.a)({},e.extra),{},{commitMessage:t.commitMessage})});case"setGetCommitError":return Object(C.a)(Object(C.a)({},e),{},{extra:Object(C.a)(Object(C.a)({},e.extra),{},{getCommitError:t.getCommitError,loading:!1})});case"setGetTreeError":return Object(C.a)(Object(C.a)({},e),{},{extra:Object(C.a)(Object(C.a)({},e.extra),{},{getTreeError:t.getTreeError,loading:!1})});case"setFindFileError":return Object(C.a)(Object(C.a)({},e),{},{extra:Object(C.a)(Object(C.a)({},e.extra),{},{findFileError:t.findFileError,loading:!1})});case"setFileSize":return Object(C.a)(Object(C.a)({},e),{},{extra:Object(C.a)(Object(C.a)({},e.extra),{},{fileSize:t.fileSize})});case"startLoading":return Object(C.a)(Object(C.a)({},e),{},{save:Object(C.a)(Object(C.a)({},e.save),{},{commitSha:void 0,treeSha:void 0,fileSha:void 0}),extra:Object(C.a)(Object(C.a)({},e.extra),{},{loading:!0,fetchError:void 0,getBranchError:void 0,commitMessage:void 0,getCommitError:void 0,getTreeError:void 0,findFileError:void 0,fileSize:void 0})});case"stopLoading":return Object(C.a)(Object(C.a)({},e),{},{extra:Object(C.a)(Object(C.a)({},e.extra),{},{loading:!1})})}},B=r(140),F=r.n(B),R=r(2),T=function(e){var t=e.label,r=e.value,a=e.onChangeValue;return Object(R.jsx)(S.a,{label:t,value:r||"",onChange:function(e){a(e.target.value)},variant:"outlined"})},A=function(){var e=Object(w.a)(v.a.mark((function e(t,r,a,n,c,i){var s,o,l,u,h,j;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({tag:"startLoading"}),e.next=3,t.rest.repos.getBranch({owner:r,repo:a,branch:n}).catch((function(e){i({tag:"setFetchError",fetchError:e.toString()}),i({tag:"setGetBranchError",getBranchError:!0})}));case 3:if(s=e.sent){e.next=7;break}return i({tag:"setGetBranchError",getBranchError:!0}),e.abrupt("return");case 7:return o=s.data.commit.sha,i({tag:"setCommitSha",commitSha:o}),e.next=11,t.rest.repos.getCommit({owner:r,repo:a,ref:o}).catch((function(e){i({tag:"setFetchError",fetchError:e.toString()}),i({tag:"setGetCommitError",getCommitError:!0})}));case 11:if(l=e.sent){e.next=15;break}return i({tag:"setGetCommitError",getCommitError:!0}),e.abrupt("return");case 15:return i({tag:"setCommitMessage",commitMessage:l.data.commit.message}),u=l.data.commit.tree.sha,i({tag:"setTreeSha",treeSha:u}),e.next=20,t.rest.git.getTree({owner:r,repo:a,tree_sha:u}).catch((function(e){i({tag:"setFetchError",fetchError:e.toString()}),i({tag:"setGetTreeError",getTreeError:!0})}));case 20:if(h=e.sent){e.next=24;break}return i({tag:"setGetTreeError",getTreeError:!0}),e.abrupt("return");case 24:if(j=h.data.tree.find((function(e){return e.path===c}))){e.next=28;break}return i({tag:"setFindFileError",findFileError:!0}),e.abrupt("return");case 28:i({tag:"setFileSha",fileSha:j.sha}),i({tag:"setFileSize",fileSize:j.size}),i({tag:"stopLoading"});case 31:case"end":return e.stop()}}),e)})));return function(t,r,a,n,c,i){return e.apply(this,arguments)}}(),M=function(e){var t,r=e.dataSource,a=e.dispatch,n=e.octokit,i=r.save,s=i.owner,l=i.repo,u=i.branch,j=i.path,d=i.commitSha,g=i.treeSha,O=i.fileSha,x=r.extra,p=x.commitMessage,f=x.fileSize,v=x.loading,w=Object(m.useState)(null),S=Object(c.a)(w,2),C=S[0],k=S[1],B=Boolean(C),M=B?"data-source-info":void 0,z=(t=r).extra.fetchError?"Fetch error: ".concat(t.extra.fetchError):t.extra.getBranchError?"Branch not found":t.extra.getCommitError?"Commit not found":t.extra.getTreeError?"Tree not found":void 0,G=Boolean(z),L=Boolean(z)||Boolean(d)||Boolean(p)||Boolean(g)||Boolean(O)||Boolean(f),D=Boolean(f),V=v?"disabled":G?"error":D?"primary":"inherit",U=v?Object(R.jsx)(E.a,{}):null;return Object(R.jsx)("div",{children:Object(R.jsx)("form",{children:Object(R.jsxs)(h.a,{display:"flex",children:[Object(R.jsx)(h.a,{paddingRight:1,children:Object(R.jsx)(T,{label:"Owner",value:s,onChangeValue:function(e){return a({tag:"setOwner",owner:e})}})}),Object(R.jsx)(h.a,{paddingRight:1,children:Object(R.jsx)(T,{label:"Repo",value:l,onChangeValue:function(e){return a({tag:"setRepo",repo:e})}})}),Object(R.jsx)(h.a,{paddingRight:1,children:Object(R.jsx)(T,{label:"Branch",value:u,onChangeValue:function(e){return a({tag:"setBranch",branch:e})}})}),Object(R.jsx)(h.a,{paddingRight:1,children:Object(R.jsx)(T,{label:"Path",value:j,onChangeValue:function(e){return a({tag:"setPath",path:e})}})}),Object(R.jsx)(h.a,{paddingRight:1,children:Object(R.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){s&&l&&u&&j&&!v&&A(n,s,l,u,j,a).catch((function(e){return console.error(e)}))},disabled:v,children:"Load"})}),Object(R.jsxs)("div",{children:[Object(R.jsx)(b.a,{"aria-describedby":M,onClick:function(e){k(e.currentTarget)},disabled:!L,children:Object(R.jsx)(F.a,{color:V})}),Object(R.jsx)(y.a,{id:M,open:B,anchorEl:C,onClose:function(){k(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(R.jsxs)(h.a,{display:"flex",flexDirection:"column",margin:1,children:[z?Object(R.jsx)(h.a,{pr:1,children:Object(R.jsxs)(o.a,{variant:"caption",children:["Error: ",z]})}):null,d?Object(R.jsx)(h.a,{pr:1,children:Object(R.jsxs)(o.a,{variant:"caption",children:["Commit: ",d]})}):null,p?Object(R.jsx)(h.a,{pr:1,children:Object(R.jsxs)(o.a,{variant:"caption",children:["Commit Message: ",p]})}):null,g?Object(R.jsx)(h.a,{pr:1,children:Object(R.jsxs)(o.a,{variant:"caption",children:["Tree: ",g]})}):null,O?Object(R.jsx)(h.a,{pr:1,children:Object(R.jsxs)(o.a,{variant:"caption",children:["Blob: ",O]})}):null,f?Object(R.jsx)(h.a,{pr:1,children:Object(R.jsxs)(o.a,{variant:"caption",children:["Size: ",f," bytes"]})}):null]})})]}),U]})})})},z=function(e){return Object(R.jsxs)(h.a,{display:"flex",flexDirection:"column",margin:2,children:[Object(R.jsx)(h.a,{marginBottom:2,children:Object(R.jsx)(o.a,{variant:"h6",children:"Source File"})}),Object(R.jsx)(M,{dataSource:e.settings.file,dispatch:function(t){return e.dispatch({tag:"updateFile",fileAction:t})},octokit:e.settings.octokit})]})},G=r(336),L=r(150),D=function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(o.a,{children:"Data Sources"}),Object(R.jsx)(b.a,{onClick:function(){var e=function(){var e=new Uint8Array(16);return G.a({},e),e}(),t=new Map;t.set(e,"George");var r=L.a(e);console.log({uuid:e,sources:t,keyString:r})},children:Object(R.jsx)(o.a,{children:"Add"})})]})},V=function(){return Object(R.jsx)(h.a,{margin:2,children:Object(R.jsx)(o.a,{variant:"h3",children:"Bits and Bytes"})})},U=r(14),H=r(324),N=r(333),P=r(329),I=r(148),_=Object(P.a)((function(){return{chartContainer:{height:400,position:"relative"},barOptionSelect:{marginRight:"12px"}}})),W=function(e){var t,r=e.infos,a=Object(m.useState)("linear"),n=Object(c.a)(a,2),i=n[0],s=n[1],o=Object(m.useState)("all"),l=Object(c.a)(o,2),u=l[0],h=l[1],j=Object(m.useState)("vertical"),b=Object(c.a)(j,2),d=b[0],O=b[1],x=_();switch(u){case"all":t=r;break;case"occurring":t=r.filter((function(e){return e.count>0}))}var p={labels:t.map((function(e){return e.label})),datasets:[{label:"Count",data:t.map((function(e){return e.count}))}]},f={scales:{x:{display:!0},y:{display:!0}}};switch(d){case"vertical":f.indexAxis="x",f.scales.y.type=i;break;case"horizontal":f.indexAxis="y",f.scales.x.type=i}return Object(R.jsxs)("div",{className:x.chartContainer,children:[Object(R.jsxs)(H.a,{children:[Object(R.jsxs)(N.a,{id:"bar-direction",value:d,onChange:function(e){O(e.target.value)},className:x.barOptionSelect,children:[Object(R.jsx)(g.a,{value:"vertical",children:"Vertical"}),Object(R.jsx)(g.a,{value:"horizontal",children:"Horizontal"})]}),Object(R.jsxs)(N.a,{id:"bar-scale",value:i,onChange:function(e){s(e.target.value)},className:x.barOptionSelect,children:[Object(R.jsx)(g.a,{value:"linear",children:"Linear"}),Object(R.jsx)(g.a,{value:"logarithmic",children:"Logarithmic"})]}),Object(R.jsxs)(N.a,{id:"bar-values",value:u,onChange:function(e){h(e.target.value)},className:x.barOptionSelect,children:[Object(R.jsx)(g.a,{value:"all",children:"All Values"}),Object(R.jsx)(g.a,{value:"occurring",children:"Occurring Values"})]})]}),Object(R.jsx)(I.a,{type:"bar",data:p,options:f})]})},J=r(68);function $(e){for(var t=atob(e),r=new Uint8Array(t.length),a=0;a<r.length;a++)r[a]=t.charCodeAt(a);return r}var q,K,Q=function(){for(var e=Object(m.useState)(new Uint8Array),t=Object(c.a)(e,2),r=t[0],a=t[1],n=Object(m.useState)(""),i=Object(c.a)(n,2),s=i[0],l=i[1],u="Bits and Bytes v1.0",h=new Array(256),j=0;j<256;j++)h[j]={label:j.toString(),count:0};var d,g=r.values(),O=Object(U.a)(g);try{for(O.s();!(d=O.n()).done;){var x=h[d.value];x.count=x.count+1}}catch(p){O.e(p)}finally{O.f()}return Object(R.jsxs)("div",{children:[Object(R.jsxs)(H.a,{children:[Object(R.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){var e=new J.a({userAgent:u,auth:s}),t="ancientlanguage",r="bits-and-bytes-settings",a="main",n=(new Date).toISOString(),c={updatedAt:n},i=JSON.stringify(c);(function(){var c=Object(w.a)(v.a.mark((function c(){var s,o,l,u,h,j,b,d,g,O,x,m,p,f,w,S;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.rest.repos.getBranch({owner:t,repo:r,branch:a});case 2:return s=c.sent,o=s.data,l=o.commit.sha,console.log({message:"getBranch result",owner:t,repo:r,branch:a,commitSha:l}),c.next=8,e.rest.repos.getCommit({owner:t,repo:r,ref:l});case 8:return u=c.sent,h=u.data,j=h.commit.message,b=h.commit.tree.sha,console.log({message:"getCommit result",commitMessage:j,owner:t,repo:r,branch:a,commitSha:l,baseTreeSha:b}),c.next=15,e.rest.git.createBlob({owner:t,repo:r,content:i,encoding:"utf-8"});case 15:return d=c.sent,g=d.data,O=g.sha,console.log({message:"createBlob result",owner:t,repo:r,blobSha:O}),c.next=21,e.rest.git.createTree({owner:t,repo:r,tree:[{path:"settings.json",mode:"100644",type:"blob",sha:O}],base_tree:b});case 21:return x=c.sent,m=x.data,p=m.sha,console.log({message:"createTree result",owner:t,repo:r,treeSha:p}),c.next=27,e.rest.git.createCommit({owner:t,repo:r,message:"Update settings at ".concat(n),parents:[l],tree:p});case 27:return f=c.sent,w=f.data,S=w.sha,console.log({message:"createCommit result",owner:t,repo:r,newCommitSha:S}),c.next=33,e.rest.git.updateRef({owner:t,repo:r,ref:"heads/".concat(a),sha:S});case 33:console.log({message:"updateRef result",owner:t,repo:r,branch:a,newCommitSha:S});case 34:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()},children:"Save Settings"}),Object(R.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){var e=new J.a({userAgent:u,auth:s}),t="scott-fleischman",r="ucd",n="Unicode-13.0",c="UnicodeData.txt";(function(){var i=Object(w.a)(v.a.mark((function i(){var s,o,l,u,h,j,b,d,g,O,x,m,p,f;return v.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.rest.repos.getBranch({owner:t,repo:r,branch:n});case 2:return s=i.sent,o=s.data,l=o.commit.sha,console.log({message:"getBranch result",owner:t,repo:r,branch:n,commitSha:l}),i.next=8,e.rest.repos.getCommit({owner:t,repo:r,ref:l});case 8:return u=i.sent,h=u.data,j=h.commit.message,b=h.commit.tree.sha,console.log({message:"getCommit result",commitMessage:j,owner:t,repo:r,branch:n,commitSha:l,treeSha:b}),i.next=15,e.rest.git.getTree({owner:t,repo:r,tree_sha:b});case 15:if(d=i.sent,g=d.data,(O=g.tree.find((function(e){return e.path===c})))&&O.sha){i.next=20;break}throw new Error("Unable to find ".concat(c));case 20:return x=O.sha,console.log(O),i.next=24,e.rest.git.getBlob({owner:t,repo:r,file_sha:x});case 24:m=i.sent,p=m.data,f=$(p.content),a(f);case 28:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}})()().catch((function(e){return console.error({message:"getRepoFileBytes",error:e,owner:t,repo:r,branch:n,path:c})}))},children:"Load from GitHub"}),Object(R.jsx)(S.a,{id:"auth-token",label:"GitHub Token",type:"password",value:s,onChange:function(e){l(e.target.value)},variant:"outlined"})]}),Object(R.jsx)(o.a,{variant:"body2",color:"textSecondary",align:"center",children:r.length+" bytes"}),Object(R.jsx)(W,{infos:h})]})},X=r(153),Y=["title","titleId"];function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function te(e,t){var r=e.title,a=e.titleId,n=ee(e,Y);return m.createElement("svg",Z({width:"60px",height:"60px",viewBox:"0 0 60 60",ref:t,"aria-labelledby":a},n),r?m.createElement("title",{id:a},r):null,q||(q=m.createElement("defs",null)),K||(K=m.createElement("g",{id:"filled",stroke:"none",strokeWidth:1,fill:"#FFFFFF",fillRule:"evenodd"},m.createElement("g",{id:"Tech_sliced",transform:"translate(-840.000000, 0.000000)"}),m.createElement("g",{id:"Tech",transform:"translate(-838.000000, 7.000000)",strokeLinecap:"round",stroke:"#535353",strokeWidth:2},m.createElement("g",{id:"Browsercode",transform:"translate(840.000000, 0.000000)"},m.createElement("rect",{id:"Rectangle-435",x:0,y:8,width:56,height:38}),m.createElement("rect",{id:"Rectangle-436",fill:"#FFFFFF",x:0,y:0,width:56,height:8}),m.createElement("circle",{id:"Oval-475",cx:4,cy:4,r:1}),m.createElement("circle",{id:"Oval-476",cx:9,cy:4,r:1}),m.createElement("circle",{id:"Oval-477",cx:14,cy:4,r:1}),m.createElement("rect",{id:"Rectangle-459",x:7,y:14,width:8,height:11,rx:2}),m.createElement("rect",{id:"Rectangle-459",x:29.0018986,y:14,width:8,height:11,rx:2}),m.createElement("rect",{id:"Rectangle-459",x:36.0037973,y:29.992017,width:8,height:11,rx:2}),m.createElement("rect",{id:"Rectangle-459",x:7,y:29.992017,width:8,height:11,rx:2}),m.createElement("path",{d:"M21.0018986,14 C22.1054196,14 23,14.9001762 23,15.992017 L23,25.007983",id:"Rectangle-459"}),m.createElement("path",{d:"M28.0037973,29.992017 C29.1073182,29.992017 30.0018986,30.8921932 30.0018986,31.984034 L30.0018986,41",id:"Rectangle-459"}),m.createElement("path",{d:"M21.0018986,29.992017 C22.1054196,29.992017 23,30.8921932 23,31.984034 L23,41",id:"Rectangle-459"}),m.createElement("path",{d:"M43.0037973,14 C44.1073182,14 45.0018986,14.9001762 45.0018986,15.992017 L45.0018986,25.007983",id:"Rectangle-459"}))))))}var re=m.forwardRef(te),ae=(r.p,function(){return Object(R.jsx)(X.a,{component:re,viewBox:"0 0 60 60"})});function ne(){return Object(R.jsx)(Q,{})}function ce(){return Object(R.jsx)(o.a,{children:"Mappings"})}function ie(){return Object(R.jsx)(o.a,{children:"Chains"})}function se(){return Object(R.jsx)(o.a,{children:"Not Found"})}var oe=function(e){var t=Object(m.useState)(null),r=Object(c.a)(t,2),a=r[0],n=r[1],i=Object(p.f)(),s="";switch(Object(p.g)().pathname){case"/":s="Home";break;case"/data-sources":s="Data Sources";break;case"/structures":s="Structures";break;case"/mappings":s="Mappings";break;case"/chains":s="Chains";break;case"/settings":s="Settings"}var O=function(e){i.push(e),n(null)};return Object(R.jsxs)("div",{children:[Object(R.jsx)(l.a,{position:"static",children:Object(R.jsxs)(u.a,{children:[Object(R.jsx)(h.a,{marginRight:1,children:Object(R.jsx)(j.a,{onClick:function(){return O("/")},children:Object(R.jsx)(ae,{})})}),Object(R.jsxs)(h.a,{display:"flex",flexGrow:1,children:[Object(R.jsxs)(b.a,{color:"inherit","aria-controls":"nav-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},children:[Object(R.jsx)(o.a,{children:s})," ",Object(R.jsx)(x.a,{})]}),Object(R.jsxs)(d.a,{id:"nav-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){n(null)},children:[Object(R.jsx)(g.a,{onClick:function(){return O("/")},children:"Home"}),Object(R.jsx)(g.a,{onClick:function(){return O("/data-sources")},children:"Data Sources"}),Object(R.jsx)(g.a,{onClick:function(){return O("/structures")},children:"Structures"}),Object(R.jsx)(g.a,{onClick:function(){return O("/mappings")},children:"Mappings"}),Object(R.jsx)(g.a,{onClick:function(){return O("/chains")},children:"Chains"}),Object(R.jsx)(g.a,{onClick:function(){return O("/settings")},children:"Settings"})]})]})]})}),Object(R.jsxs)(p.c,{children:[Object(R.jsx)(p.a,{exact:!0,path:"/",children:Object(R.jsx)(V,{})}),Object(R.jsx)(p.a,{exact:!0,path:"/data-sources",children:Object(R.jsx)(D,{})}),Object(R.jsx)(p.a,{exact:!0,path:"/structures",children:Object(R.jsx)(ne,{})}),Object(R.jsx)(p.a,{exact:!0,path:"/mappings",children:Object(R.jsx)(ce,{})}),Object(R.jsx)(p.a,{exact:!0,path:"/chains",children:Object(R.jsx)(ie,{})}),Object(R.jsx)(p.a,{exact:!0,path:"/settings",children:Object(R.jsx)(z,{settings:e.appState.settings,dispatch:function(t){return e.dispatch({tag:"updateSettings",settingsAction:t})}})}),Object(R.jsx)(p.a,{children:Object(R.jsx)(se,{})})]})]})},le=r(104),ue=r(147),he=Object(ue.a)({}),je=function(e){return new J.a({userAgent:e.userAgent,auth:e.auth})},be=function(e,t){switch(t.tag){case"updateFile":return Object(C.a)(Object(C.a)({},e),{},{file:k(e.file,t.fileAction)});case"setGitHubAuth":var r=Object(C.a)(Object(C.a)({},e.octokitDeps),{},{auth:t.auth});return Object(C.a)(Object(C.a)({},e),{},{octokitDeps:r,octokit:je(r)})}},de={userAgent:"Bits and Bytes v1.0"},ge={settings:{file:{save:{owner:"ancientlanguage",repo:"bits-and-bytes-settings",branch:"main",path:"settings.json"},extra:{loading:!1}},octokitDeps:de,octokit:je(de)},dataSources:[]},Oe=function(e,t){switch(t.tag){case"updateSettings":return Object(C.a)(Object(C.a)({},e),{},{settings:be(e.settings,t.settingsAction)});case"noop":return e}},xe=function(){var e=Object(m.useReducer)(Oe,ge),t=Object(c.a)(e,2),r=t[0],a=t[1];return Object(R.jsxs)(s.a,{theme:he,children:[Object(R.jsx)(i.a,{}),Object(R.jsx)(le.a,{basename:"/bits-and-bytes",children:Object(R.jsx)(oe,{appState:r,dispatch:a})})]})};n.a.render(Object(R.jsx)(xe,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[285,1,2]]]);
//# sourceMappingURL=main.fa6117f7.chunk.js.map