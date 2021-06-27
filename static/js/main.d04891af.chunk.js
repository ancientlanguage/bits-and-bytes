(this["webpackJsonpbits-and-bytes"]=this["webpackJsonpbits-and-bytes"]||[]).push([[0],{124:function(e,t,r){"use strict";r.r(t);var a=r(11),n=r.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,i,s=r(15),o=r(165),l=r(164),j=r(159),u=r(162),b=r(163),h=r(168),d=r(94),O=r(158),g=r(89),x=r(172),m=r(85),f=r.n(m),p=r(0),v=r.n(p),E=r(12),S=r(16),w=r.n(S),C=r(22),k=r(166),y=r(157),B=r(169),F=r(5),T=function(e,t){switch(t.tag){case"setOwner":return Object(F.a)(Object(F.a)({},e),{},{save:Object(F.a)(Object(F.a)({},e.save),{},{owner:t.owner})});case"setRepo":return Object(F.a)(Object(F.a)({},e),{},{save:Object(F.a)(Object(F.a)({},e.save),{},{repo:t.repo})});case"setBranch":return Object(F.a)(Object(F.a)({},e),{},{save:Object(F.a)(Object(F.a)({},e.save),{},{branch:t.branch})});case"setPath":return Object(F.a)(Object(F.a)({},e),{},{save:Object(F.a)(Object(F.a)({},e.save),{},{path:t.path})});case"setCommitSha":return Object(F.a)(Object(F.a)({},e),{},{save:Object(F.a)(Object(F.a)({},e.save),{},{commitSha:t.commitSha})});case"setTreeSha":return Object(F.a)(Object(F.a)({},e),{},{save:Object(F.a)(Object(F.a)({},e.save),{},{treeSha:t.treeSha})});case"setFileSha":return Object(F.a)(Object(F.a)({},e),{},{save:Object(F.a)(Object(F.a)({},e.save),{},{fileSha:t.fileSha})});case"setFetchError":return Object(F.a)(Object(F.a)({},e),{},{extra:Object(F.a)(Object(F.a)({},e.extra),{},{fetchError:t.fetchError,loading:!1})});case"setGetBranchError":return Object(F.a)(Object(F.a)({},e),{},{extra:Object(F.a)(Object(F.a)({},e.extra),{},{getBranchError:t.getBranchError,loading:!1})});case"setCommitMessage":return Object(F.a)(Object(F.a)({},e),{},{extra:Object(F.a)(Object(F.a)({},e.extra),{},{commitMessage:t.commitMessage})});case"setGetCommitError":return Object(F.a)(Object(F.a)({},e),{},{extra:Object(F.a)(Object(F.a)({},e.extra),{},{getCommitError:t.getCommitError,loading:!1})});case"setGetTreeError":return Object(F.a)(Object(F.a)({},e),{},{extra:Object(F.a)(Object(F.a)({},e.extra),{},{getTreeError:t.getTreeError,loading:!1})});case"setFindFileError":return Object(F.a)(Object(F.a)({},e),{},{extra:Object(F.a)(Object(F.a)({},e.extra),{},{findFileError:t.findFileError,loading:!1})});case"setFileSize":return Object(F.a)(Object(F.a)({},e),{},{extra:Object(F.a)(Object(F.a)({},e.extra),{},{fileSize:t.fileSize})});case"startLoading":return Object(F.a)(Object(F.a)({},e),{},{save:Object(F.a)(Object(F.a)({},e.save),{},{commitSha:void 0,treeSha:void 0,fileSha:void 0}),extra:Object(F.a)(Object(F.a)({},e.extra),{},{loading:!0,fetchError:void 0,getBranchError:void 0,commitMessage:void 0,getCommitError:void 0,getTreeError:void 0,findFileError:void 0,fileSize:void 0})});case"stopLoading":return Object(F.a)(Object(F.a)({},e),{},{extra:Object(F.a)(Object(F.a)({},e.extra),{},{loading:!1})})}},R=r(79),M=r.n(R),A=r(2),G=function(e){var t=e.label,r=e.value,a=e.onChangeValue;return Object(A.jsx)(k.a,{label:t,value:r||"",onChange:function(e){a(e.target.value)},variant:"outlined"})},L=function(){var e=Object(C.a)(w.a.mark((function e(t,r,a,n,c,i){var s,o,l,j,u,b;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({tag:"startLoading"}),e.next=3,t.rest.repos.getBranch({owner:r,repo:a,branch:n}).catch((function(e){i({tag:"setFetchError",fetchError:e.toString()}),i({tag:"setGetBranchError",getBranchError:!0})}));case 3:if(s=e.sent){e.next=7;break}return i({tag:"setGetBranchError",getBranchError:!0}),e.abrupt("return");case 7:return o=s.data.commit.sha,i({tag:"setCommitSha",commitSha:o}),e.next=11,t.rest.repos.getCommit({owner:r,repo:a,ref:o}).catch((function(e){i({tag:"setFetchError",fetchError:e.toString()}),i({tag:"setGetCommitError",getCommitError:!0})}));case 11:if(l=e.sent){e.next=15;break}return i({tag:"setGetCommitError",getCommitError:!0}),e.abrupt("return");case 15:return i({tag:"setCommitMessage",commitMessage:l.data.commit.message}),j=l.data.commit.tree.sha,i({tag:"setTreeSha",treeSha:j}),e.next=20,t.rest.git.getTree({owner:r,repo:a,tree_sha:j}).catch((function(e){i({tag:"setFetchError",fetchError:e.toString()}),i({tag:"setGetTreeError",getTreeError:!0})}));case 20:if(u=e.sent){e.next=24;break}return i({tag:"setGetTreeError",getTreeError:!0}),e.abrupt("return");case 24:if(b=u.data.tree.find((function(e){return e.path===c}))){e.next=28;break}return i({tag:"setFindFileError",findFileError:!0}),e.abrupt("return");case 28:i({tag:"setFileSha",fileSha:b.sha}),i({tag:"setFileSize",fileSize:b.size}),i({tag:"stopLoading"});case 31:case"end":return e.stop()}}),e)})));return function(t,r,a,n,c,i){return e.apply(this,arguments)}}(),z=function(e){var t,r=e.dataSource,a=e.dispatch,n=e.octokit,c=r.save,i=c.owner,o=c.repo,l=c.branch,u=c.path,b=c.commitSha,d=c.treeSha,g=c.fileSha,x=r.extra,m=x.commitMessage,f=x.fileSize,v=x.loading,E=Object(p.useState)(null),S=Object(s.a)(E,2),w=S[0],C=S[1],k=Boolean(w),F=k?"data-source-info":void 0,T=(t=r).extra.fetchError?"Fetch error: ".concat(t.extra.fetchError):t.extra.getBranchError?"Branch not found":t.extra.getCommitError?"Commit not found":t.extra.getTreeError?"Tree not found":void 0,R=Boolean(T),z=Boolean(T)||Boolean(b)||Boolean(m)||Boolean(d)||Boolean(g)||Boolean(f),D=Boolean(f),P=v?"disabled":R?"error":D?"primary":"inherit",I=v?Object(A.jsx)(y.a,{}):null;return Object(A.jsx)("div",{children:Object(A.jsx)("form",{children:Object(A.jsxs)(h.a,{display:"flex",children:[Object(A.jsx)(h.a,{paddingRight:1,children:Object(A.jsx)(G,{label:"Owner",value:i,onChangeValue:function(e){return a({tag:"setOwner",owner:e})}})}),Object(A.jsx)(h.a,{paddingRight:1,children:Object(A.jsx)(G,{label:"Repo",value:o,onChangeValue:function(e){return a({tag:"setRepo",repo:e})}})}),Object(A.jsx)(h.a,{paddingRight:1,children:Object(A.jsx)(G,{label:"Branch",value:l,onChangeValue:function(e){return a({tag:"setBranch",branch:e})}})}),Object(A.jsx)(h.a,{paddingRight:1,children:Object(A.jsx)(G,{label:"Path",value:u,onChangeValue:function(e){return a({tag:"setPath",path:e})}})}),Object(A.jsx)(h.a,{paddingRight:1,children:Object(A.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){i&&o&&l&&u&&!v&&L(n,i,o,l,u,a).catch((function(e){return console.error(e)}))},disabled:v,children:"Load"})}),Object(A.jsxs)("div",{children:[Object(A.jsx)(O.a,{"aria-describedby":F,onClick:function(e){C(e.currentTarget)},disabled:!z,children:Object(A.jsx)(M.a,{color:P})}),Object(A.jsx)(B.a,{id:F,open:k,anchorEl:w,onClose:function(){C(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(A.jsxs)(h.a,{display:"flex",flexDirection:"column",margin:1,children:[T?Object(A.jsx)(h.a,{pr:1,children:Object(A.jsxs)(j.a,{variant:"caption",children:["Error: ",T]})}):null,b?Object(A.jsx)(h.a,{pr:1,children:Object(A.jsxs)(j.a,{variant:"caption",children:["Commit: ",b]})}):null,m?Object(A.jsx)(h.a,{pr:1,children:Object(A.jsxs)(j.a,{variant:"caption",children:["Commit Message: ",m]})}):null,d?Object(A.jsx)(h.a,{pr:1,children:Object(A.jsxs)(j.a,{variant:"caption",children:["Tree: ",d]})}):null,g?Object(A.jsx)(h.a,{pr:1,children:Object(A.jsxs)(j.a,{variant:"caption",children:["Blob: ",g]})}):null,f?Object(A.jsx)(h.a,{pr:1,children:Object(A.jsxs)(j.a,{variant:"caption",children:["Size: ",f," bytes"]})}):null]})})]}),I]})})})},D=function(e){return Object(A.jsxs)(h.a,{display:"flex",flexDirection:"column",margin:2,children:[Object(A.jsx)(h.a,{marginBottom:2,children:Object(A.jsx)(j.a,{variant:"h6",children:"Source File"})}),Object(A.jsx)(z,{dataSource:e.settings.file,dispatch:function(t){return e.dispatch({tag:"updateFile",fileAction:t})},octokit:e.settings.octokit})]})},P=r(173),I=r(90),V=function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)(j.a,{children:"Data Sources"}),Object(A.jsx)(O.a,{onClick:function(){var e=function(){var e=new Uint8Array(16);return P.a({},e),e}(),t=new Map;t.set(e,"George");var r=I.a(e);console.log({uuid:e,sources:t,keyString:r})},children:Object(A.jsx)(j.a,{children:"Add"})})]})},W=function(){return Object(A.jsx)(h.a,{margin:2,children:Object(A.jsx)(j.a,{variant:"h3",children:"Bits and Bytes"})})},H=r(93),J=["title","titleId"];function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function U(e,t){var r=e.title,a=e.titleId,n=N(e,J);return p.createElement("svg",_({width:"60px",height:"60px",viewBox:"0 0 60 60",ref:t,"aria-labelledby":a},n),r?p.createElement("title",{id:a},r):null,c||(c=p.createElement("defs",null)),i||(i=p.createElement("g",{id:"filled",stroke:"none",strokeWidth:1,fill:"#FFFFFF",fillRule:"evenodd"},p.createElement("g",{id:"Tech_sliced",transform:"translate(-840.000000, 0.000000)"}),p.createElement("g",{id:"Tech",transform:"translate(-838.000000, 7.000000)",strokeLinecap:"round",stroke:"#535353",strokeWidth:2},p.createElement("g",{id:"Browsercode",transform:"translate(840.000000, 0.000000)"},p.createElement("rect",{id:"Rectangle-435",x:0,y:8,width:56,height:38}),p.createElement("rect",{id:"Rectangle-436",fill:"#FFFFFF",x:0,y:0,width:56,height:8}),p.createElement("circle",{id:"Oval-475",cx:4,cy:4,r:1}),p.createElement("circle",{id:"Oval-476",cx:9,cy:4,r:1}),p.createElement("circle",{id:"Oval-477",cx:14,cy:4,r:1}),p.createElement("rect",{id:"Rectangle-459",x:7,y:14,width:8,height:11,rx:2}),p.createElement("rect",{id:"Rectangle-459",x:29.0018986,y:14,width:8,height:11,rx:2}),p.createElement("rect",{id:"Rectangle-459",x:36.0037973,y:29.992017,width:8,height:11,rx:2}),p.createElement("rect",{id:"Rectangle-459",x:7,y:29.992017,width:8,height:11,rx:2}),p.createElement("path",{d:"M21.0018986,14 C22.1054196,14 23,14.9001762 23,15.992017 L23,25.007983",id:"Rectangle-459"}),p.createElement("path",{d:"M28.0037973,29.992017 C29.1073182,29.992017 30.0018986,30.8921932 30.0018986,31.984034 L30.0018986,41",id:"Rectangle-459"}),p.createElement("path",{d:"M21.0018986,29.992017 C22.1054196,29.992017 23,30.8921932 23,31.984034 L23,41",id:"Rectangle-459"}),p.createElement("path",{d:"M43.0037973,14 C44.1073182,14 45.0018986,14.9001762 45.0018986,15.992017 L45.0018986,25.007983",id:"Rectangle-459"}))))))}var $=p.forwardRef(U),q=(r.p,function(){return Object(A.jsx)(H.a,{component:$,viewBox:"0 0 60 60"})}),K=r(160),Q=r(171),X=r(83),Y=r.n(X),Z=r(84),ee=r.n(Z),te=r(82),re=r.n(te),ae=r(81),ne=r.n(ae),ce=r(161),ie=r(175),se=function(e){return Object(A.jsx)(k.a,{})},oe=function(e){var t=e.structureTag,r=e.setStructureTag;return Object(A.jsxs)(K.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,children:[Object(A.jsx)(K.a,{item:!0,children:Object(A.jsxs)(ie.a,{value:t,exclusive:!0,onChange:function(e,t){null!==t&&r(t)},"aria-label":"Structure Type",children:[Object(A.jsx)(ce.a,{value:"atom","aria-label":"Atom",children:Object(A.jsx)(Q.a,{title:"Atom",children:Object(A.jsx)(ne.a,{})})}),Object(A.jsx)(ce.a,{value:"or","aria-label":"Or",children:Object(A.jsx)(Q.a,{title:"Or",children:Object(A.jsx)(re.a,{})})}),Object(A.jsx)(ce.a,{value:"and","aria-label":"And",children:Object(A.jsx)(Q.a,{title:"And",children:Object(A.jsx)(Y.a,{})})}),Object(A.jsx)(ce.a,{value:"list","aria-label":"List",children:Object(A.jsx)(Q.a,{title:"List",children:Object(A.jsx)(ee.a,{})})})]})}),Object(A.jsx)(K.a,{item:!0,children:Object(A.jsx)(se,{structureTag:t})})]})},le=function(){var e=v.a.useState("atom"),t=Object(s.a)(e,2),r=t[0],a=t[1],n=v.a.useState("atom"),c=Object(s.a)(n,2),i=c[0],o=c[1],l=v.a.useState("atom"),j=Object(s.a)(l,2),u=j[0],b=j[1];return Object(A.jsxs)(K.a,{container:!0,direction:"column",spacing:1,children:[Object(A.jsx)(K.a,{item:!0,children:Object(A.jsx)(oe,{structureTag:r,setStructureTag:a})}),Object(A.jsx)(K.a,{item:!0,children:Object(A.jsx)(oe,{structureTag:i,setStructureTag:o})}),Object(A.jsx)(K.a,{item:!0,children:Object(A.jsx)(oe,{structureTag:u,setStructureTag:b})})]})};function je(){return Object(A.jsx)(le,{})}function ue(){return Object(A.jsx)(j.a,{children:"Mappings"})}function be(){return Object(A.jsx)(j.a,{children:"Chains"})}function he(){return Object(A.jsx)(j.a,{children:"Not Found"})}var de=function(e){var t=Object(p.useState)(null),r=Object(s.a)(t,2),a=r[0],n=r[1],c=Object(E.f)(),i="";switch(Object(E.g)().pathname){case"/":i="Home";break;case"/data-sources":i="Data Sources";break;case"/structures":i="Structures";break;case"/mappings":i="Mappings";break;case"/chains":i="Chains";break;case"/settings":i="Settings"}var o=function(e){c.push(e),n(null)};return Object(A.jsxs)("div",{children:[Object(A.jsx)(u.a,{position:"static",children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(h.a,{marginRight:1,children:Object(A.jsx)(d.a,{onClick:function(){return o("/")},children:Object(A.jsx)(q,{})})}),Object(A.jsxs)(h.a,{display:"flex",flexGrow:1,children:[Object(A.jsxs)(O.a,{color:"inherit","aria-controls":"nav-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},children:[Object(A.jsx)(j.a,{children:i})," ",Object(A.jsx)(f.a,{})]}),Object(A.jsxs)(g.a,{id:"nav-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){n(null)},children:[Object(A.jsx)(x.a,{onClick:function(){return o("/")},children:"Home"}),Object(A.jsx)(x.a,{onClick:function(){return o("/data-sources")},children:"Data Sources"}),Object(A.jsx)(x.a,{onClick:function(){return o("/structures")},children:"Structures"}),Object(A.jsx)(x.a,{onClick:function(){return o("/mappings")},children:"Mappings"}),Object(A.jsx)(x.a,{onClick:function(){return o("/chains")},children:"Chains"}),Object(A.jsx)(x.a,{onClick:function(){return o("/settings")},children:"Settings"})]})]})]})}),Object(A.jsxs)(E.c,{children:[Object(A.jsx)(E.a,{exact:!0,path:"/",children:Object(A.jsx)(W,{})}),Object(A.jsx)(E.a,{exact:!0,path:"/data-sources",children:Object(A.jsx)(V,{})}),Object(A.jsx)(E.a,{exact:!0,path:"/structures",children:Object(A.jsx)(je,{})}),Object(A.jsx)(E.a,{exact:!0,path:"/mappings",children:Object(A.jsx)(ue,{})}),Object(A.jsx)(E.a,{exact:!0,path:"/chains",children:Object(A.jsx)(be,{})}),Object(A.jsx)(E.a,{exact:!0,path:"/settings",children:Object(A.jsx)(D,{settings:e.appState.settings,dispatch:function(t){return e.dispatch({tag:"updateSettings",settingsAction:t})}})}),Object(A.jsx)(E.a,{children:Object(A.jsx)(he,{})})]})]})},Oe=r(66),ge=r(88),xe=Object(ge.a)({}),me=r(87),fe=function(e){return new me.a({userAgent:e.userAgent,auth:e.auth})},pe=function(e,t){switch(t.tag){case"updateFile":return Object(F.a)(Object(F.a)({},e),{},{file:T(e.file,t.fileAction)});case"setGitHubAuth":var r=Object(F.a)(Object(F.a)({},e.octokitDeps),{},{auth:t.auth});return Object(F.a)(Object(F.a)({},e),{},{octokitDeps:r,octokit:fe(r)})}},ve={userAgent:"Bits and Bytes v1.0"},Ee={settings:{file:{save:{owner:"ancientlanguage",repo:"bits-and-bytes-settings",branch:"main",path:"settings.json"},extra:{loading:!1}},octokitDeps:ve,octokit:fe(ve)},dataSources:[]},Se=function(e,t){switch(t.tag){case"updateSettings":return Object(F.a)(Object(F.a)({},e),{},{settings:pe(e.settings,t.settingsAction)});case"noop":return e}},we=function(){var e=Object(p.useReducer)(Se,Ee),t=Object(s.a)(e,2),r=t[0],a=t[1];return Object(A.jsxs)(l.a,{theme:xe,children:[Object(A.jsx)(o.a,{}),Object(A.jsx)(Oe.a,{basename:"/bits-and-bytes",children:Object(A.jsx)(de,{appState:r,dispatch:a})})]})};n.a.render(Object(A.jsx)(we,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.d04891af.chunk.js.map