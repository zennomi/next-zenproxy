(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3302],{66242:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(87462),a=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(90948),c=r(71657),d=r(55113),u=r(34867);function p(e){return(0,u.Z)("MuiCard",e)}(0,r(1588).Z)("MuiCard",["root"]);var h=r(85893);const m=["className","raised"],f=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var v=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,d=(0,a.Z)(r,m),u=(0,n.Z)({},r,{raised:l}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(u);return(0,h.jsx)(f,(0,n.Z)({className:(0,i.Z)(v.root,o),elevation:l?8:void 0,ref:t,ownerState:u},d))}))},44267:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(87462),a=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(90948),c=r(71657),d=r(34867);function u(e){return(0,d.Z)("MuiCardContent",e)}(0,r(1588).Z)("MuiCardContent",["root"]);var p=r(85893);const h=["className","component"],m=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var f=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=r,d=(0,a.Z)(r,h),f=(0,n.Z)({},r,{component:l}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(f);return(0,p.jsx)(m,(0,n.Z)({as:l,className:(0,i.Z)(v.root,o),ownerState:f,ref:t},d))}))},98456:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(63366),a=r(87462),o=r(67294),i=r(86010),s=r(94780),l=r(70917),c=r(98216),d=r(71657),u=r(90948),p=r(34867);function h(e){return(0,p.Z)("MuiCircularProgress",e)}(0,r(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=r(85893);const f=["className","color","disableShrink","size","style","thickness","value","variant"];let v,g,Z,x,b=e=>e;const w=44,y=(0,l.F4)(v||(v=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,l.F4)(g||(g=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),C=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(Z||(Z=b`
      animation: ${0} 1.4s linear infinite;
    `),y))),j=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(x||(x=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k)));var P=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:l="primary",disableShrink:u=!1,size:p=40,style:v,thickness:g=3.6,value:Z=0,variant:x="indeterminate"}=r,b=(0,n.Z)(r,f),y=(0,a.Z)({},r,{color:l,disableShrink:u,size:p,thickness:g,value:Z,variant:x}),k=(e=>{const{classes:t,variant:r,color:n,disableShrink:a}=e,o={root:["root",r,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,a&&"circleDisableShrink"]};return(0,s.Z)(o,h,t)})(y),P={},R={},N={};if("determinate"===x){const e=2*Math.PI*((w-g)/2);P.strokeDasharray=e.toFixed(3),N["aria-valuenow"]=Math.round(Z),P.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,R.transform="rotate(-90deg)"}return(0,m.jsx)(C,(0,a.Z)({className:(0,i.Z)(k.root,o),style:(0,a.Z)({width:p,height:p},R,v),ownerState:y,ref:t,role:"progressbar"},N,b,{children:(0,m.jsx)(j,{className:k.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,m.jsx)(S,{className:k.circle,style:P,ownerState:y,cx:w,cy:w,r:(w-g)/2,fill:"none",strokeWidth:g})})}))}))},57709:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n,a=r(63366),o=r(87462),i=r(67294),s=r(94780),l=r(90948),c=r(85893);const d=["children","classes","className","label","notched"],u=(0,l.ZP)("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),p=(0,l.ZP)("legend")((({ownerState:e,theme:t})=>(0,o.Z)({float:"unset",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&(0,o.Z)({display:"block",width:"auto",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}))));var h=r(74423),m=r(15704),f=r(54656),v=r(13970),g=r(71657);const Z=["components","fullWidth","inputComponent","label","multiline","notched","type"],x=(0,l.ZP)(v.Ej,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiOutlinedInput",slot:"Root",overridesResolver:v.Gx})((({theme:e,ownerState:t})=>{const r="light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return(0,o.Z)({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${f.Z.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${f.Z.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:r}},[`&.${f.Z.focused} .${f.Z.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${f.Z.error} .${f.Z.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${f.Z.disabled} .${f.Z.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&(0,o.Z)({padding:"16.5px 14px"},"small"===t.size&&{padding:"8.5px 14px"}))})),b=(0,l.ZP)((function(e){const{className:t,label:r,notched:i}=e,s=(0,a.Z)(e,d),l=null!=r&&""!==r,h=(0,o.Z)({},e,{notched:i,withLabel:l});return(0,c.jsx)(u,(0,o.Z)({"aria-hidden":!0,className:t,ownerState:h},s,{children:(0,c.jsx)(p,{ownerState:h,children:l?(0,c.jsx)("span",{children:r}):n||(n=(0,c.jsx)("span",{className:"notranslate",children:"\u200b"}))})}))}),{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})((({theme:e})=>{const t="light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}})),w=(0,l.ZP)(v.rA,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:v._o})((({theme:e,ownerState:t})=>(0,o.Z)({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:"light"===e.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===e.palette.mode?null:"#fff",caretColor:"light"===e.palette.mode?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},"small"===t.size&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0}))),y=i.forwardRef((function(e,t){var r;const n=(0,g.Z)({props:e,name:"MuiOutlinedInput"}),{components:l={},fullWidth:d=!1,inputComponent:u="input",label:p,multiline:y=!1,notched:k,type:C="text"}=n,j=(0,a.Z)(n,Z),S=(e=>{const{classes:t}=e,r=(0,s.Z)({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},f.e,t);return(0,o.Z)({},t,r)})(n),P=(0,h.Z)(),R=(0,m.Z)({props:n,muiFormControl:P,states:["required"]});return(0,c.jsx)(v.ZP,(0,o.Z)({components:(0,o.Z)({Root:x,Input:w},l),renderSuffix:e=>(0,c.jsx)(b,{className:S.notchedOutline,label:null!=p&&""!==p&&R.required?r||(r=(0,c.jsxs)(i.Fragment,{children:[p,"\xa0","*"]})):p,notched:"undefined"!==typeof k?k:Boolean(e.startAdornment||e.filled||e.focused)}),fullWidth:d,inputComponent:u,multiline:y,ref:t,type:C},j,{classes:(0,o.Z)({},S,{notchedOutline:null})}))}));y.muiName="Input";var k=y},54656:function(e,t,r){"use strict";r.d(t,{e:function(){return s}});var n=r(87462),a=r(34867),o=r(1588),i=r(55827);function s(e){return(0,a.Z)("MuiOutlinedInput",e)}const l=(0,n.Z)({},i.Z,(0,o.Z)("MuiOutlinedInput",["root","notchedOutline","input"]));t.Z=l},6675:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuutrom",function(){return r(13698)}])},13698:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(34051),a=r.n(n),o=r(85893),i=r(23795),s=r(63366),l=r(87462),c=r(67294),d=r(86010),u=r(94780),p=r(15861),h=r(71657),m=r(90948),f=r(34867);function v(e){return(0,f.Z)("MuiCardHeader",e)}var g=(0,r(1588).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);const Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,l.Z)({[`& .${g.title}`]:t.title,[`& .${g.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),b=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),w=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,m.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var k=c.forwardRef((function(e,t){const r=(0,h.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:a,className:i,component:c="div",disableTypography:m=!1,subheader:f,subheaderTypographyProps:g,title:k,titleTypographyProps:C}=r,j=(0,s.Z)(r,Z),S=(0,l.Z)({},r,{component:c,disableTypography:m}),P=(e=>{const{classes:t}=e;return(0,u.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)})(S);let R=k;null==R||R.type===p.Z||m||(R=(0,o.jsx)(p.Z,(0,l.Z)({variant:a?"body2":"h5",className:P.title,component:"span",display:"block"},C,{children:R})));let N=f;return null==N||N.type===p.Z||m||(N=(0,o.jsx)(p.Z,(0,l.Z)({variant:a?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:N}))),(0,o.jsxs)(x,(0,l.Z)({className:(0,d.Z)(P.root,i),as:c,ref:t,ownerState:S},j,{children:[a&&(0,o.jsx)(b,{className:P.avatar,ownerState:S,children:a}),(0,o.jsxs)(y,{className:P.content,ownerState:S,children:[R,N]}),n&&(0,o.jsx)(w,{className:P.action,ownerState:S,children:n})]}))})),C=r(57709),j=r(83321),S=r(87357),P=r(98456),R=r(66242),N=r(44267),M=r(41664),O=r.n(M),$=r(32308),F=r(23751),T=r(57836);function W(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,a)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){W(o,n,a,i,s,"next",e)}function s(e){W(o,n,a,i,s,"throw",e)}i(void 0)}))}}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=(0,m.ZP)("div")((function(e){var t,r=e.theme;return I(t={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:r.spacing(15,2.5)},r.breakpoints.up("sm"),{height:"100vh"}),I(t,"& > div",{marginBottom:"10px"}),t}));function L(){var e=(0,c.useState)(""),t=e[0],r=e[1],n=(0,c.useState)(""),s=n[0],l=n[1],d=(0,c.useState)(""),u=d[0],h=d[1],m=(0,F.Z)(u),f=m.data,v=m.isLoading,g=m.fetchStatus,Z=function(){var e=_(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(t.target.value),l("");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=_(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=new URL(t),/mangas\/\d{1,}\/chapters\/\d{1,}/.test(r.pathname)){e.next=4;break}throw new Error("Link kh\xf4ng h\u1ee3p l\u1ec7");case 4:h(r.pathname),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Link kh\xf4ng h\u1ee3p l\u1ec7");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)($.T3,{title:"C\u1ee9u Tr\u1ed9m",children:(0,o.jsxs)(H,{children:[(0,o.jsx)(p.Z,{children:"Link ch\u01b0\u01a1ng cuutruyen.net, ID truy\u1ec7n,..."}),(0,o.jsx)(C.Z,{value:t,onChange:Z,fullWidth:!0,endAdornment:(0,o.jsx)(j.Z,{variant:"contained",onClick:x,children:"Crawl"}),error:!!s,sx:{maxWidth:500}}),s&&(0,o.jsx)(p.Z,{color:"error.main",children:s}),(0,o.jsx)(S.Z,{children:v?"idle"!==g?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P.Z,{}),(0,o.jsx)(p.Z,{children:"\u0110ang \u0111i tr\u1ed9m, vui l\xf2ng \u0111\u1ee3i..."})]}):(0,o.jsx)(o.Fragment,{}):(null===f||void 0===f?void 0:f.chapter)&&(0,o.jsxs)(R.Z,{sx:{width:"300px"},children:[(0,o.jsx)($.Ee,{ratio:"3/4",src:f.chapter.manga.cover_url}),(0,o.jsx)(k,{title:f.chapter.name||f.chapter.manga.name}),(0,o.jsx)(N.Z,{children:(0,o.jsx)(O(),{href:"/cuutrom/".concat(u),passHref:!0,children:(0,o.jsxs)(i.Z,{children:["Ch\u01b0\u01a1ng ",f.chapter.number," - ",f.chapter.pages.length," trang"]})})})]})})]})})}L.getLayout=function(e){return(0,o.jsx)(T.Z,{disabledFooter:!0,children:e})}},23751:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(34051),a=r.n(n),o=r(77837),i=r(9669),s=r.n(i),l=r(20929);function c(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,a)}function d(e){return(0,o.a)([e],(t=a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(l.xt).concat(e));case 2:return r=t.sent.data,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(e){c(o,n,a,i,s,"next",e)}function s(e){c(o,n,a,i,s,"throw",e)}i(void 0)}))}),{enabled:!!e});var t}},57836:function(e,t,r){"use strict";r.d(t,{Z:function(){return h},i:function(){return p}});var n=r(85893),a=r(5152),o=r.n(a),i=r(90948),s=r(20929);var l=o()((function(){return Promise.all([r.e(6066),r.e(3422),r.e(4444),r.e(7533),r.e(3426),r.e(7790),r.e(8860)]).then(r.bind(r,8860))}),{loadableGenerated:{webpack:function(){return[8860]}},ssr:!1}),c=o()((function(){return r.e(1282).then(r.bind(r,61282))}),{loadableGenerated:{webpack:function(){return[61282]}},ssr:!1}),d=o()((function(){return Promise.all([r.e(3970),r.e(3422),r.e(4444),r.e(549),r.e(7790),r.e(3567)]).then(r.bind(r,3567))}),{loadableGenerated:{webpack:function(){return[3567]}},ssr:!1}),u=o()((function(){return r.e(5712).then(r.bind(r,85712))}),{loadableGenerated:{webpack:function(){return[85712]}},ssr:!1}),p=(0,i.ZP)("div")((function(e){var t,r,n,a=e.theme;return t={paddingTop:s.w_},r=a.breakpoints.up("md"),n={paddingTop:s.zj},r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}));function h(e){var t=e.children,r=e.transparentHeader,a=e.disabledHeader,o=e.disabledFooter,i=e.simpleHeader,s=e.simpleFooter;return(0,n.jsxs)(n.Fragment,{children:[a?null:(0,n.jsx)(n.Fragment,{children:i?(0,n.jsx)(c,{transparent:r}):(0,n.jsx)(l,{transparent:r})}),t,o?null:(0,n.jsx)(n.Fragment,{children:s?(0,n.jsx)(u,{}):(0,n.jsx)(d,{})})]})}}},function(e){e.O(0,[5152,3970,7837,9774,2888,179],(function(){return t=6675,e(e.s=t);var t}));var t=e.O();_N_E=t}]);