(this.webpackJsonpblinkstars=this.webpackJsonpblinkstars||[]).push([[45],{1108:function(e,t,a){"use strict";var r=a(234);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),n=(0,r(a(314)).default)(o.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=n},1132:function(e,t,a){"use strict";var r=a(1),o=a(86),n=a(6),l=a(0),c=(a(122),a(4),a(5)),i=a(10),s=a(39),d=a(31),p=a(315),m=Object(p.a)(l.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=a(313);var b=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(n.a)(e,["classes"]);return l.createElement(u.a,Object(r.a)({component:"li",className:t.root,focusRipple:!0},a),l.createElement(m,{className:t.icon}))}));var f=l.forwardRef((function(e,t){var a=e.children,i=e.classes,d=e.className,p=e.component,m=void 0===p?"nav":p,u=e.expandText,f=void 0===u?"Show path":u,g=e.itemsAfterCollapse,h=void 0===g?1:g,y=e.itemsBeforeCollapse,v=void 0===y?1:y,k=e.maxItems,x=void 0===k?8:k,E=e.separator,q=void 0===E?"/":E,j=Object(n.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),O=l.useState(!1),N=O[0],C=O[1],w=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return l.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return l.createElement(s.a,Object(r.a)({ref:t,component:m,color:"textSecondary",className:Object(c.a)(i.root,d)},j),l.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(r,o,n){return n<e.length-1?r=r.concat(o,l.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},a)):r.push(o),r}),[])}(N||x&&w.length<=x?w:function(e){return v+h>=e.length?e:[].concat(Object(o.a)(e.slice(0,v)),[l.createElement(b,{"aria-label":f,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(o.a)(e.slice(e.length-h,e.length)))}(w),i.separator,q)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},1173:function(e,t,a){"use strict";var r=a(27),o=a(312),n=a(5),l=a(0),c=a.n(l),i=a(1188),s=a.n(i),d=Object(o.a)((function(e){return{root:{"& .ql-toolbar":{borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"1px solid ".concat(e.palette.divider),"& .ql-picker-label:hover":{color:e.palette.secondary.main},"& .ql-picker-label.ql-active":{color:e.palette.secondary.main},"& .ql-picker-item:hover":{color:e.palette.secondary.main},"& .ql-picker-item.ql-selected":{color:e.palette.secondary.main},"& button:hover":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button:focus":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:e.palette.secondary.main}},"& .ql-stroke":{stroke:e.palette.text.primary},"& .ql-picker":{color:e.palette.text.primary},"& .ql-picker-options":{padding:e.spacing(2),backgroundColor:e.palette.background.default,border:"none",boxShadow:e.shadows[10],borderRadius:e.shape.borderRadius}},"& .ql-container":{border:"none","& .ql-editor":{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"&.ql-blank::before":{color:e.palette.text.secondary}}}}}}));t.a=function(e){var t=e.className,a=Object(r.a)(e,["className"]),o=d();return c.a.createElement(s.a,Object.assign({className:Object(n.a)(o.root,t)},a))}},2084:function(e,t,a){"use strict";a.r(t);var r=a(312),o=a(599),n=a(1132),l=a(1070),c=a(39),i=a(61),s=a(233),d=a(1108),p=a.n(d),m=a(0),u=a.n(m),b=a(20),f=a(316),g=a(1173),h=Object(r.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=h();return u.a.createElement(f.a,{className:e.root,title:"Formik Form"},u.a.createElement(o.a,{maxWidth:"lg"},u.a.createElement(n.a,{separator:u.a.createElement(p.a,{fontSize:"small"}),"aria-label":"breadcrumb"},u.a.createElement(l.a,{variant:"body1",color:"inherit",to:"/app",component:b.a},"Dashboard"),u.a.createElement(l.a,{variant:"body1",color:"inherit",to:"/app/extra",component:b.a},"Extra"),u.a.createElement(c.a,{variant:"body1",color:"textPrimary"},"Editors")),u.a.createElement(c.a,{variant:"h3",color:"textPrimary"},"Quill"),u.a.createElement(i.a,{mt:3},u.a.createElement(s.a,null,u.a.createElement(g.a,null)))))}}}]);
//# sourceMappingURL=45.d30d446f.chunk.js.map