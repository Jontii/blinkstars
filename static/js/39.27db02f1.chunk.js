(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[39],{1104:function(e,a,t){"use strict";var n=t(0);a.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1118:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1129:function(e,a,t){"use strict";var n=t(95),r=t(38),c=t(1039),l=t(30),o=t(5),i=t(0),s=t.n(i),m=Object(c.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(l.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(l.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(l.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(l.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(l.c)(e.palette.warning.main,.08)}}}));a.a=function(e){var a=e.className,t=void 0===a?"":a,c=e.color,l=void 0===c?"secondary":c,i=e.children,u=(e.style,Object(r.a)(e,["className","color","children","style"])),p=m();return s.a.createElement("span",Object.assign({className:Object(o.a)(p.root,Object(n.a)({},p[l],l),t)},u),i)}},1188:function(e,a,t){"use strict";var n=t(39),r=t(1039),c=t(1079),l=t(1080),o=t(1055),i=t(1075),s=t(1194),m=t(1083),u=t(1189),p=t.n(u),g=t(1163),E=t.n(g),d=t(1137),f=t.n(d),b=t(1123),h=t.n(b),y=t(1234),j=t.n(y),O=t(0),v=t.n(O),x=Object(r.a)((function(){return{menu:{width:256,maxWidth:"100%"}}}));a.a=Object(O.memo)((function(e){var a=x(),t=Object(O.useRef)(null),r=Object(O.useState)(!1),u=Object(n.a)(r,2),g=u[0],d=u[1];return v.a.createElement(v.a.Fragment,null,v.a.createElement(c.a,{title:"More options"},v.a.createElement(l.a,Object.assign({onClick:function(){d(!0)},ref:t},e),v.a.createElement(h.a,{fontSize:"small"}))),v.a.createElement(o.a,{anchorEl:t.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){d(!1)},open:g,PaperProps:{className:a.menu},transformOrigin:{vertical:"top",horizontal:"left"}},v.a.createElement(i.a,null,v.a.createElement(s.a,null,v.a.createElement(f.a,null)),v.a.createElement(m.a,{primary:"Import"})),v.a.createElement(i.a,null,v.a.createElement(s.a,null,v.a.createElement(E.a,null)),v.a.createElement(m.a,{primary:"Copy"})),v.a.createElement(i.a,null,v.a.createElement(s.a,null,v.a.createElement(j.a,null)),v.a.createElement(m.a,{primary:"Export"})),v.a.createElement(i.a,null,v.a.createElement(s.a,null,v.a.createElement(p.a,null)),v.a.createElement(m.a,{primary:"Archive"}))))}))},2128:function(e,a,t){"use strict";t.r(a);var n=t(39),r=t(1039),c=t(1087),l=t(1088),o=t(0),i=t.n(o),s=t(312),m=t(58),u=t(67),p=t(133),g=t(38),E=t(1135),d=t(1064),f=t(174),b=t(1065),h=t(109),y=t(1055),j=t(1075),O=t(1106),v=t.n(O),x=t(5),C=t(1686),w=t(22),k=[{value:"today",text:"Today"},{value:"yesterday",text:"Yesterday"},{value:"last_30_days",text:"Last 30 days"},{value:"last_year",text:"Last year"}],N=Object(r.a)((function(){return{root:{}}})),S=function(e){var a=e.className,t=Object(g.a)(e,["className"]),r=N(),c=Object(o.useRef)(null),s=Object(o.useState)(!1),m=Object(n.a)(s,2),u=m[0],p=m[1],O=Object(o.useState)(k[2].text),S=Object(n.a)(O,2),I=S[0],T=S[1];return i.a.createElement(l.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(x.a)(r.root,a)},t),i.a.createElement(l.a,{item:!0},i.a.createElement(E.a,{separator:i.a.createElement(v.a,{fontSize:"small"}),"aria-label":"breadcrumb"},i.a.createElement(d.a,{variant:"body1",color:"inherit",to:"/app",component:w.a},"Dashboard"),i.a.createElement(f.a,{variant:"body1",color:"textPrimary"},"Reports")),i.a.createElement(f.a,{variant:"h3",color:"textPrimary"},"Here's what's happening")),i.a.createElement(l.a,{item:!0},i.a.createElement(b.a,{ref:c,onClick:function(){return p(!0)},startIcon:i.a.createElement(h.a,{fontSize:"small"},i.a.createElement(C.a,null))},I),i.a.createElement(y.a,{anchorEl:c.current,onClose:function(){return p(!1)},open:u,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},k.map((function(e){return i.a.createElement(j.a,{key:e.value,onClick:function(){return T(e.text)}},e.text)})))))},I=t(7),T=t.n(I),B=t(41),M=t(12),A=t(1136),D=t(1176),z=t(1071),Y=t(1090),W=t(1509),F=t(1510),L=t(1511),P=t(1512),R=t(1079),G=t(2147),H=t(1513),_=t(1097),K=t(2),J=t.n(K),q=t(176),U=t(1116),Q=t.n(U),V=t(317),X=t.n(V),Z=t(37),$=t(1188),ee=t(1104),ae=t(110),te=t(16),ne=t(1118),re=("".concat("/Blinkstars","/static/images/technologies/html.svg"),"".concat("/Blinkstars","/static/images/technologies/react-js.svg"),"".concat("/Blinkstars","/static/images/technologies/vue-js.svg"),"".concat("/Blinkstars","/static/images/technologies/angular.svg"),"".concat("/Blinkstars","/static/images/technologies/figma.svg"),"".concat("/Blinkstars","/static/images/technologies/sketch.svg"),Object(r.a)((function(e){return{root:{},technology:{height:30,"& + &":{marginLeft:e.spacing(1)}},row:{cursor:"pointer"}}}))),ce=function(e){var a=e.className,t=e.title,r=e.showOnlyFirst,c=e.accepted,l=e.setAccepted,s=Object(g.a)(e,["className","title","showOnlyFirst","accepted","setAccepted"]),m=re(),u=Object(ee.a)(),p=Object(o.useState)([]),E=Object(n.a)(p,2),f=E[0],h=E[1],y=(Object(Z.g)(),Object(o.useCallback)(Object(M.a)(T.a.mark((function e(){var a,t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.get("/api/reports/latest-projects");case 3:a=e.sent,u.current&&(t=[],r?(t.push(a.data.projects[0]),h(t)):((n=Object(B.a)(a.data.projects)).splice(0,1),h(n))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[u])),j=Object(q.b)().enqueueSnackbar,O=function(e){e?l(e):(l(e),j("Campaign accepted, congratulations! Click on the campaign title to view the campaign. \ud83c\udf89",{variant:"success",anchorOrigin:{horizontal:"center",vertical:"bottom"},transitionDuration:500}))};Object(o.useEffect)((function(){y()}),[y]);var C=Object(ae.c)((function(e){return e.campaign}));return i.a.createElement(A.a,Object.assign({className:Object(x.a)(m.root,a)},s),i.a.createElement(D.a,{action:i.a.createElement($.a,null),title:t||"My Matched Campaigns"}),i.a.createElement(z.a,null),i.a.createElement(X.a,null,i.a.createElement(Y.a,{minWidth:900},i.a.createElement(W.a,null,i.a.createElement(F.a,null,i.a.createElement(L.a,null,i.a.createElement(P.a,null,"Title"),i.a.createElement(P.a,null,"Author"),i.a.createElement(P.a,null,"Budget"),r&&i.a.createElement(P.a,null,"Matched Campaigns"),i.a.createElement(P.a,{align:"right",sortDirection:"desc"},i.a.createElement(R.a,{enterDelay:300,title:"Sort"},i.a.createElement(G.a,{active:!0,direction:"desc"},"Created"))))),!r&&i.a.createElement(H.a,null,f.map((function(e){return i.a.createElement(L.a,{hover:!0,key:e.id,className:m.row},i.a.createElement(P.a,null,e.title),i.a.createElement(P.a,null,i.a.createElement(Y.a,{display:"flex",alignItems:"center"},i.a.createElement(_.a,{alt:"Author",src:e.author.avatar},Object(ne.a)(e.author.name)),i.a.createElement(Y.a,{ml:1},e.author.name))),i.a.createElement(P.a,null,Q()(e.budget).format("".concat(e.currency,"0,0.00"))),i.a.createElement(P.a,{align:"right"},J()(e.createdAt).format("DD MMM, YYYY")))}))),i.a.createElement(i.a.Fragment,null,f[0]&&C.createCampaign.campaignTitle&&r&&i.a.createElement(H.a,null,i.a.createElement(L.a,{hover:!0,className:m.row},i.a.createElement(P.a,null,i.a.createElement(d.a,{component:w.a,to:"/app/campaign/view"},C.createCampaign.campaignTitle)),i.a.createElement(P.a,null,i.a.createElement(Y.a,{display:"flex",alignItems:"center"},i.a.createElement(_.a,{alt:"Author",src:f[0].author.avatar},Object(ne.a)(C.companyCampaign.companyName)),i.a.createElement(Y.a,{ml:1},C.companyCampaign.companyName))),i.a.createElement(P.a,null,Q()(C.createCampaign.campaignBudget).format("SEK0,0.00")),i.a.createElement(P.a,null,c?i.a.createElement(b.a,{onClick:function(){return O(!c)},color:"secondary"},"Accept"):i.a.createElement(b.a,{onClick:function(){return O(!c)},color:"primary"},"Decline")),i.a.createElement(P.a,{align:"right"},J()(new Date).format("DD MMM, YYYY")))))))),!r&&i.a.createElement(Y.a,{p:2,display:"flex",justifyContent:"flex-end"},i.a.createElement(b.a,{component:w.a,size:"small",to:"#",endIcon:i.a.createElement(v.a,null)},"See all")))},le=t(2047),oe=t.n(le),ie=Object(r.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}})),se=function(e){var a=e.className,t=Object(g.a)(e,["className"]),n=ie();return i.a.createElement(A.a,Object.assign({className:Object(x.a)(n.root,a)},t),i.a.createElement(Y.a,{flexGrow:1},i.a.createElement(f.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"New Campaigns"),i.a.createElement(Y.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},i.a.createElement(f.a,{variant:"h3",color:"textPrimary"},12))),i.a.createElement(_.a,{className:n.avatar},i.a.createElement(oe.a,null)))},me=t(1244),ue=t.n(me),pe=Object(r.a)((function(e){return{root:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},avatar:{backgroundColor:e.palette.secondary.contrastText,color:e.palette.secondary.main,height:48,width:48}}})),ge=function(e){var a=e.className,t=Object(g.a)(e,["className"]),n=pe(),r="25.50",c="SEK";return i.a.createElement(A.a,Object.assign({className:Object(x.a)(n.root,a)},t),i.a.createElement(Y.a,{flexGrow:1},i.a.createElement(f.a,{color:"inherit",component:"h3",gutterBottom:!0,variant:"overline"},"Roi per campaign"),i.a.createElement(Y.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},i.a.createElement(f.a,{color:"inherit",variant:"h3"},c,r))),i.a.createElement(_.a,{className:n.avatar,color:"inherit"},i.a.createElement(ue.a,null)))},Ee=t(1129),de=Object(r.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}})),fe=function(e){var a=e.className,t=Object(g.a)(e,["className"]),n=de(),r="650",c="SEK",l=6;return i.a.createElement(A.a,Object.assign({className:Object(x.a)(n.root,a)},t),i.a.createElement(Y.a,{flexGrow:1},i.a.createElement(f.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Todays money"),i.a.createElement(Y.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},i.a.createElement(f.a,{variant:"h3",color:"textPrimary"},c,r),i.a.createElement(Ee.a,{className:n.label,color:l>0?"success":"error"},l>0?"+":"",l,"%"))),i.a.createElement(_.a,{className:n.avatar},i.a.createElement(ue.a,null)))},be=Object(r.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=be(),a=Object(o.useState)(!0),t=Object(n.a)(a,2),r=t[0],g=t[1],E=Object(p.a)().saveSettings,d=Object(u.a)().user;return Object(o.useEffect)((function(){"Company"===d.tier?E({theme:m.a.LIGHT_COMPANY}):E({theme:m.a.LIGHT})}),[]),i.a.createElement(s.a,{className:e.root,title:"Dashboard"},i.a.createElement(c.a,{maxWidth:!1},i.a.createElement(S,null),i.a.createElement(l.a,{container:!0,spacing:3},i.a.createElement(l.a,{item:!0,lg:3,sm:6,xs:12},i.a.createElement(fe,null)),i.a.createElement(l.a,{item:!0,lg:3,sm:6,xs:12},i.a.createElement(se,null)),i.a.createElement(l.a,{item:!0,lg:3,sm:6,xs:12},i.a.createElement(ge,null)),i.a.createElement(l.a,{item:!0,lg:9,xs:12},i.a.createElement(ce,{showOnlyFirst:!0,setAccepted:g,accepted:r})),i.a.createElement(l.a,{item:!0,lg:9,xs:12},i.a.createElement(ce,{showOnlyFirst:!1,title:"New Campaigns"})))))}}}]);
//# sourceMappingURL=39.27db02f1.chunk.js.map