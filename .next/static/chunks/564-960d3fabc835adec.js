"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{96514:function(n,t,e){var o=e(87462),r=e(63366),i=e(67294),a=e(98885),s=e(2734),l=e(30577),c=e(51705),u=e(85893);const p=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function f(n){return`scale(${n}, ${n**2})`}const d={entering:{opacity:1,transform:f(1)},entered:{opacity:1,transform:"none"}},h="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),m=i.forwardRef((function(n,t){const{addEndListener:e,appear:m=!0,children:g,easing:v,in:Z,onEnter:E,onEntered:y,onEntering:P,onExit:x,onExited:b,onExiting:T,style:C,timeout:R="auto",TransitionComponent:z=a.ZP}=n,w=(0,r.Z)(n,p),O=i.useRef(),k=i.useRef(),H=(0,s.Z)(),j=i.useRef(null),M=(0,c.Z)(g.ref,t),N=(0,c.Z)(j,M),A=n=>t=>{if(n){const e=j.current;void 0===t?n(e):n(e,t)}},D=A(P),L=A(((n,t)=>{(0,l.n)(n);const{duration:e,delay:o,easing:r}=(0,l.C)({style:C,timeout:R,easing:v},{mode:"enter"});let i;"auto"===R?(i=H.transitions.getAutoHeightDuration(n.clientHeight),k.current=i):i=e,n.style.transition=[H.transitions.create("opacity",{duration:i,delay:o}),H.transitions.create("transform",{duration:h?i:.666*i,delay:o,easing:r})].join(","),E&&E(n,t)})),$=A(y),_=A(T),W=A((n=>{const{duration:t,delay:e,easing:o}=(0,l.C)({style:C,timeout:R,easing:v},{mode:"exit"});let r;"auto"===R?(r=H.transitions.getAutoHeightDuration(n.clientHeight),k.current=r):r=t,n.style.transition=[H.transitions.create("opacity",{duration:r,delay:e}),H.transitions.create("transform",{duration:h?r:.666*r,delay:h?e:e||.333*r,easing:o})].join(","),n.style.opacity=0,n.style.transform=f(.75),x&&x(n)})),S=A(b);return i.useEffect((()=>()=>{clearTimeout(O.current)}),[]),(0,u.jsx)(z,(0,o.Z)({appear:m,in:Z,nodeRef:j,onEnter:L,onEntered:$,onEntering:D,onExit:W,onExited:S,onExiting:_,addEndListener:n=>{"auto"===R&&(O.current=setTimeout(n,k.current||0)),e&&e(j.current,n)},timeout:"auto"===R?null:R},w,{children:(n,t)=>i.cloneElement(g,(0,o.Z)({style:(0,o.Z)({opacity:0,transform:f(.75),visibility:"exited"!==n||Z?void 0:"hidden"},d[n],C,g.props.style),ref:N},t))}))}));m.muiSupportAuto=!0,t.Z=m},14564:function(n,t,e){e.d(t,{ZP:function(){return w}});var o=e(87462),r=e(63366),i=e(67294),a=e(86010),s=e(94780),l=e(90948),c=e(71657),u=e(57144),p=e(8038),f=e(5340),d=e(51705),h=e(96514),m=e(88628),g=e(55113),v=e(34867);function Z(n){return(0,v.Z)("MuiPopover",n)}(0,e(1588).Z)("MuiPopover",["root","paper"]);var E=e(85893);const y=["onEntering"],P=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function x(n,t){let e=0;return"number"===typeof t?e=t:"center"===t?e=n.height/2:"bottom"===t&&(e=n.height),e}function b(n,t){let e=0;return"number"===typeof t?e=t:"center"===t?e=n.width/2:"right"===t&&(e=n.width),e}function T(n){return[n.horizontal,n.vertical].map((n=>"number"===typeof n?`${n}px`:n)).join(" ")}function C(n){return"function"===typeof n?n():n}const R=(0,l.ZP)(m.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(n,t)=>t.root})({}),z=(0,l.ZP)(g.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(n,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0});var w=i.forwardRef((function(n,t){const e=(0,c.Z)({props:n,name:"MuiPopover"}),{action:l,anchorEl:m,anchorOrigin:g={vertical:"top",horizontal:"left"},anchorPosition:v,anchorReference:w="anchorEl",children:O,className:k,container:H,elevation:j=8,marginThreshold:M=16,open:N,PaperProps:A={},transformOrigin:D={vertical:"top",horizontal:"left"},TransitionComponent:L=h.Z,transitionDuration:$="auto",TransitionProps:{onEntering:_}={}}=e,W=(0,r.Z)(e.TransitionProps,y),S=(0,r.Z)(e,P),B=i.useRef(),I=(0,d.Z)(B,A.ref),X=(0,o.Z)({},e,{anchorOrigin:g,anchorReference:w,elevation:j,marginThreshold:M,PaperProps:A,transformOrigin:D,TransitionComponent:L,transitionDuration:$,TransitionProps:W}),Y=(n=>{const{classes:t}=n;return(0,s.Z)({root:["root"],paper:["paper"]},Z,t)})(X),q=i.useCallback((()=>{if("anchorPosition"===w)return v;const n=C(m),t=(n&&1===n.nodeType?n:(0,p.Z)(B.current).body).getBoundingClientRect();return{top:t.top+x(t,g.vertical),left:t.left+b(t,g.horizontal)}}),[m,g.horizontal,g.vertical,v,w]),F=i.useCallback((n=>({vertical:x(n,D.vertical),horizontal:b(n,D.horizontal)})),[D.horizontal,D.vertical]),G=i.useCallback((n=>{const t={width:n.offsetWidth,height:n.offsetHeight},e=F(t);if("none"===w)return{top:null,left:null,transformOrigin:T(e)};const o=q();let r=o.top-e.vertical,i=o.left-e.horizontal;const a=r+t.height,s=i+t.width,l=(0,f.Z)(C(m)),c=l.innerHeight-M,u=l.innerWidth-M;if(r<M){const n=r-M;r-=n,e.vertical+=n}else if(a>c){const n=a-c;r-=n,e.vertical+=n}if(i<M){const n=i-M;i-=n,e.horizontal+=n}else if(s>u){const n=s-u;i-=n,e.horizontal+=n}return{top:`${Math.round(r)}px`,left:`${Math.round(i)}px`,transformOrigin:T(e)}}),[m,w,q,F,M]),J=i.useCallback((()=>{const n=B.current;if(!n)return;const t=G(n);null!==t.top&&(n.style.top=t.top),null!==t.left&&(n.style.left=t.left),n.style.transformOrigin=t.transformOrigin}),[G]);i.useEffect((()=>{N&&J()})),i.useImperativeHandle(l,(()=>N?{updatePosition:()=>{J()}}:null),[N,J]),i.useEffect((()=>{if(!N)return;const n=(0,u.Z)((()=>{J()})),t=(0,f.Z)(m);return t.addEventListener("resize",n),()=>{n.clear(),t.removeEventListener("resize",n)}}),[m,N,J]);let K=$;"auto"!==$||L.muiSupportAuto||(K=void 0);const Q=H||(m?(0,p.Z)(C(m)).body:void 0);return(0,E.jsx)(R,(0,o.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(Y.root,k),container:Q,open:N,ref:t,ownerState:X},S,{children:(0,E.jsx)(L,(0,o.Z)({appear:!0,in:N,onEntering:(n,t)=>{_&&_(n,t),J()},timeout:K},W,{children:(0,E.jsx)(z,(0,o.Z)({elevation:j},A,{ref:I,className:(0,a.Z)(Y.paper,A.className),children:O}))}))}))}))},57144:function(n,t,e){var o=e(87596);t.Z=o.Z},8038:function(n,t,e){var o=e(57094);t.Z=o.Z},5340:function(n,t,e){var o=e(58290);t.Z=o.Z}}]);