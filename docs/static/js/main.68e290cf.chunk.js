(this.webpackJsonpwickedwheel=this.webpackJsonpwickedwheel||[]).push([[0],{21:function(e,t,c){},40:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c(0),s=c.n(i),n=c(26),r=c.n(n),d=(c(40),c(21),c(5)),l=c(3),j=c(18),o=c(7),b=c(12),m=c(34),p=Math.random(),h=function(e,t,c,a,i){return console.log(e),console.log((e-t)*(i-a)/(c-t)+a),0===e?(console.log("00000"),a):(e-t)*(i-a)/(c-t)+a},x=function(e){var t=e.setPower,c=Object(i.useState)(!1),s=Object(o.a)(c,2),n=s[0],r=s[1],d=Object(i.useState)(0),l=Object(o.a)(d,2),j=l[0],m=l[1],p=Object(b.c)((function(){return{width:"0%",backgroundColor:"hotpink"}})),h=Object(o.a)(p,2),x=h[0],f=h[1];return Object(i.useEffect)((function(){n?f({from:{width:"0%",backgroundColor:"white"},to:{width:"100%",backgroundColor:"white"},immediate:!1,config:{duration:1e3}}):(t(parseInt(7*j)),f({to:{width:"0%",backgroundColor:"white"},immediate:!0}))}),[n]),Object(a.jsxs)("button",{className:"main",onMouseDown:function(){r(!n)},onMouseUp:function(){r(!n)},onTouchStart:function(){r(!n)},onTouchEnd:function(){r(!n)},children:[Object(a.jsx)(b.a.div,{className:"fill",style:{width:x.width,background:x.backgroundColor}}),Object(a.jsx)(b.a.div,{className:"content",children:x.width.interpolate((function(e){return m(parseInt(e)),"0%"===e?"Press and hold to spin":""}))})]})},f=function(){var e=200,t=250,c=250,s=Object(i.useState)({x:6,y:10}),n=Object(o.a)(s,2),r=n[0],d=n[1],l=Object(i.useState)("Number of players"),f=Object(o.a)(l,2),g=(f[0],f[1],Object(i.useState)(0)),O=Object(o.a)(g,2),u=O[0],v=O[1],N=Object(i.useState)(0),w=Object(o.a)(N,2),C=w[0],k=w[1],y={mass:50,tension:200,friction:200,precision:.001},S=Object(b.c)((function(){return{transform:"rotate(0deg)",immediate:!1}})),D=Object(o.a)(S,2),T=D[0],H=D[1];Object(i.useEffect)((function(){H({from:{transform:"rotate(".concat(h(C,0,200,0,900),"deg)")},transform:"rotate(".concat(h(C+u,0,200,0,900),"deg)"),immediate:!1,config:y}),k(C+u)}),[u]);return Object(a.jsxs)("div",{className:"body",children:[Object(a.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Aladin",rel:"stylesheet"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"Title",children:"Wicked Wheel"})," "]}),Object(a.jsxs)("div",{className:"wheelHolder",children:[Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",style:{width:"300px",heigt:"auto"},children:[Object(a.jsx)("g",{fill:" #9e0017",stroke:"white",strokeWidth:"10",children:Object(a.jsx)("circle",{cx:"250",cy:"250",r:e})}),Object(a.jsx)(b.a.g,{style:{transform:T.transform,transformOrigin:"center"},children:function(e){for(var s=[],n=0;n<e;n++){var r=195*Math.cos(2*Math.PI*(n/e+p)),d=195*Math.sin(2*Math.PI*(n/e+p)),l=100*Math.cos(2*Math.PI*((n+.5)/e+p)),j=100*Math.sin(2*Math.PI*((n+.5)/e+p));s.push(Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("line",{className:"line",fill:"radial-gradient(circle, rgb(0, 0,0) 0%,rgb(0, 0, 0) 90%)",stroke:"white",strokeWidth:"7",x1:t+r,y1:c+d,x2:t,y2:c}),Object(a.jsx)("text",{x:t+l,y:c+j,paddingTop:"5px",fill:"white",fontSize:"30px",fontFamily:"Aladin",transform:"rotate(".concat(360*((n+.5)/e+p)," \n                ").concat(t+l,",\n                ").concat(c+j,")"),children:n+1})]},n))}return s}(r.x)}),Object(a.jsx)("g",{fill:"white",children:Object(a.jsx)("circle",{cx:"250",cy:"250",r:"10"})}),Object(a.jsx)("g",{fill:"white",children:Object(a.jsx)("circle",{cx:"250",cy:"250",r:"5"})}),Object(a.jsx)("g",{fill:"white",stroke:"darkgrey",strokeWidth:"2",children:Object(a.jsx)("polygon",{points:"250,70 230,30 270,30"})})]}),Object(a.jsxs)("div",{className:"inputNr",children:["How many players?",Object(a.jsx)(m.a,{axis:"x",x:r.x,xmax:10,xmin:2,onChange:function(e){var t=e.x;return d((function(e){return Object(j.a)(Object(j.a)({},e),{},{x:t})}))},styles:{active:{backgroundColor:"#9e0017"}}}),"    ",r.x]}),Object(a.jsx)(x,{setPower:v,style:{height:"20vh"}})]})]})},g=c(10),O=c(16),u=c(14),v=c(13),N=c(31),w=c.n(N),C=(c(44),c.p+"static/media/CrypticCards.f08f5bd1.png"),k=c.p+"static/media/DeviousDie.fcbf2d60.png",y=c.p+"static/media/Wheel.8c3ccbf7.png",S=function(e){Object(u.a)(c,e);var t=Object(v.a)(c);function c(){return Object(g.a)(this,c),t.apply(this,arguments)}return Object(O.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"DiceHolder",children:[Object(a.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Aladin",rel:"stylesheet"}),Object(a.jsx)("div",{className:"DropShadow"}),Object(a.jsx)("h1",{className:"Title",children:"Devious Die"}),Object(a.jsx)(w.a,{numDice:1,outline:!1,outlineColor:"rgb(200, 200, 200)",faceColor:" radial-gradient(circle, rgb(255, 255, 255) 0%,  rgb(200, 200, 200) 90%)",dotColor:"radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(40, 40, 40) 90%)",dieSize:150,rollTime:2,defaultRoll:1,disableIndividual:!1,ref:function(t){return e.reactDice=t}}),Object(a.jsx)("h2",{className:"Description",children:"Press to roll!"})]})}},{key:"rollAll",value:function(){this.reactDice.rollAll()}},{key:"rollDoneCallback",value:function(e){console.log("You rolled a ".concat(e))}}]),c}(s.a.Component),D=c(32),T=c.p+"static/media/cardback.16967e63.png",H=c.p+"static/media/AH.748d2da0.jpg",I=c.p+"static/media/2H.945dd13c.jpg",M=c.p+"static/media/3H.3d1662ac.jpg",A=c.p+"static/media/4H.71e85cb4.jpg",L=c.p+"static/media/5H.d6ae4b4e.jpg",P=c.p+"static/media/6H.04763163.jpg",W=c.p+"static/media/7H.a307c5f6.jpg",F=c.p+"static/media/8H.ee73b8bc.jpg",E=c.p+"static/media/9H.9f3e0be8.jpg",J=c.p+"static/media/10H.3b64f89c.jpg",K=c.p+"static/media/JH.005c0116.jpg",Q=c.p+"static/media/QH.e11d6a34.jpg",R=c.p+"static/media/KH.e9565795.jpg",z=c.p+"static/media/AS.72ffb145.jpg",B=c.p+"static/media/2S.69da81aa.jpg",U=c.p+"static/media/3S.5bf4c9cc.jpg",Y=c.p+"static/media/4S.f0b96284.jpg",X=c.p+"static/media/5S.41a0715e.jpg",Z=c.p+"static/media/6S.fefd483e.jpg",q=c.p+"static/media/7S.e84bf2cd.jpg",G=c.p+"static/media/8S.06607f60.jpg",V=c.p+"static/media/9S.fafb5d0b.jpg",$=c.p+"static/media/10S.ec0cc349.jpg",_=c.p+"static/media/JS.9d689480.jpg",ee=c.p+"static/media/QS.1bf6d0b6.jpg",te=c.p+"static/media/KS.3b375f6b.jpg",ce=c.p+"static/media/AC.677c7440.jpg",ae=c.p+"static/media/2C.74550789.jpg",ie=c.p+"static/media/3C.7e423886.jpg",se=c.p+"static/media/4C.46972b6f.jpg",ne=c.p+"static/media/5C.e788d3bb.jpg",re=c.p+"static/media/6C.a3b02607.jpg",de=c.p+"static/media/7C.b7c26a36.jpg",le=c.p+"static/media/8C.ae93b549.jpg",je=c.p+"static/media/9C.d7fed248.jpg",oe=c.p+"static/media/10C.73b1e950.jpg",be=c.p+"static/media/JC.aa07ee7e.jpg",me=c.p+"static/media/QC.26a535e9.jpg",pe=c.p+"static/media/KC.e99b0f1d.jpg",he=c.p+"static/media/AD.77e58362.jpg",xe=c.p+"static/media/2D.3b7ce0e8.jpg",fe=c.p+"static/media/3D.3cb3b70d.jpg",ge=c.p+"static/media/4D.370de6e6.jpg",Oe=c.p+"static/media/5D.0e86db95.jpg",ue=c.p+"static/media/6D.345c53d6.jpg",ve=c.p+"static/media/7D.2e8c26c6.jpg",Ne=c.p+"static/media/8D.a90e99af.jpg",we=c.p+"static/media/9D.0e5a6daa.jpg",Ce=c.p+"static/media/10D.9b7ec8fb.jpg",ke=c.p+"static/media/JD.2241a216.jpg",ye=c.p+"static/media/QD.ba00e75f.jpg",Se=c.p+"static/media/KD.628dc4a3.jpg",De=[he,xe,fe,ge,Oe,ue,ve,Ne,we,Ce,ke,ye,Se,H,I,M,A,L,P,W,F,E,J,K,Q,R,ce,ae,ie,se,ne,re,de,le,je,oe,be,me,pe,z,B,U,Y,X,Z,q,G,V,$,_,ee,te];var Te=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];function He(){for(var e,t,c=0,a=(e=0,t=Te.length,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e));c<Te.length;){if(Te[a]===Te[c]){var i=Te[a];return Te.splice(c,1),c++,i}c++}}var Ie=function(e){return{x:0,y:0,scale:1,rot:0,delay:5*e}},Me=function(e,t){return"perspective(15000px) rotateX(30deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")},Ae=function(){var e=Object(i.useState)((function(){return new Set})),t=Object(o.a)(e,1)[0],c=Object(b.d)(De.length,(function(e){return Object(j.a)(Object(j.a)({},Ie(e)),{},{from:{x:0,rot:0,scale:1,y:1e4}})})),s=Object(o.a)(c,2),n=s[0],r=s[1],d=Object(D.a)((function(e){var c=Object(o.a)(e.args,1)[0],a=e.down,i=Object(o.a)(e.delta,1)[0],s=(e.distance,Object(o.a)(e.direction,1)[0]),n=e.velocity,d=s<0?-1:1;!a&&n>.2&&t.add(c),r((function(e){if(c===e){var s=t.has(c);return{x:s?window.innerWidth*d:a?i:0,rot:0,scale:1,delay:void 0,config:{friction:50,tension:a?800:s?200:500}}}})),a||t.size!==De.length||setTimeout((function(){return t.clear()||r((function(e){return Ie(e)}))}),600)}));return Object(a.jsx)("div",{id:"cardholder",children:Object(a.jsxs)("div",{id:"cards",children:[Object(a.jsx)("h1",{id:"headText",children:"Cryptic Cards"}),Object(a.jsx)("span",{className:"clickText",children:"Click Card! Then Swipe Away! "}),n.map((function(e,t){var c=e.x,i=e.y,s=e.rot,n=e.scale;return Object(a.jsx)(b.a.div,{style:{transform:Object(b.b)([c,i],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))},children:Object(a.jsx)(b.a.div,Object(j.a)(Object(j.a)({class:"flip-card"},d(t)),{},{style:{transform:Object(b.b)([s,n],Me),backgroundImage:"url(".concat(T,")")},children:Object(a.jsxs)("div",{className:"flip-card-inner",children:[Object(a.jsx)("div",{className:"flip-card-front",children:Object(a.jsx)("img",{className:"cardImages",src:T,alt:"cardbackside"})}),Object(a.jsx)("div",{className:"flip-card-back",children:Object(a.jsx)("img",{src:De[He()-1],className:"cardImages",alt:"tarotCard",unselectable:"on"})})]})}))},t)})),Object(a.jsx)("div",{className:"Refresh",children:Object(a.jsx)("button",{className:"REText",onClick:function(){window.location.reload(!1)},children:"SHUFFLE"})})]})})},Le=function(){return Object(a.jsxs)("div",{className:"frontpage",children:[Object(a.jsx)("div",{className:"ct",children:Object(a.jsx)("span",{className:"clickText",children:"Choose a machine!"})}),Object(a.jsxs)("div",{className:"fpLinks",children:[Object(a.jsxs)("div",{className:"fpLink",children:[Object(a.jsx)(d.c,{className:"fpNav",to:"/die",children:Object(a.jsx)("img",{className:"NavImg",src:k})}),Object(a.jsxs)(d.b,{className:"info",to:"/die",children:[Object(a.jsx)("h2",{className:"infoText",children:"Devious Die"}),Object(a.jsx)("p",{className:"infoText",children:"Roll a die!"})]})]}),Object(a.jsxs)("div",{className:"fpLink",children:[Object(a.jsx)(d.c,{className:"fpNav",to:"/wheel",children:Object(a.jsx)("img",{className:"NavImg",src:y})}),Object(a.jsxs)(d.b,{to:"/wheel",className:"info",children:[Object(a.jsx)("h2",{className:"infoText",children:"Whicked Wheel"}),Object(a.jsx)("p",{className:"infoText",children:"Spin a wheel to decide the winner!"})]})]}),Object(a.jsxs)("div",{className:"fpLink",children:[Object(a.jsx)(d.c,{className:"fpNav",to:"/cards",children:Object(a.jsx)("img",{className:"NavImg",src:C})}),Object(a.jsxs)(d.b,{to:"/cards",className:"info",children:[Object(a.jsx)("h2",{className:"infoText",children:"Cryptic Cards"}),Object(a.jsx)("p",{className:"infoText",children:"Swipe a shuffled card deck!"})]})]})]})]})};var Pe=function(){return Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(l.c,{children:[Object(a.jsxs)(l.a,{path:"/die",children:[Object(a.jsx)(S,{}),Object(a.jsxs)("div",{className:"Links",children:[Object(a.jsx)(d.c,{exact:!0,activeClassName:"active",className:"inactive",to:"/cards",children:Object(a.jsx)("img",{src:C})}),Object(a.jsx)(d.c,{exact:!0,activeClassName:"active",className:"inactive",to:"/die",children:Object(a.jsx)("img",{src:k})}),Object(a.jsx)(d.c,{exact:!0,activeClassName:"active",className:"inactive",to:"/wheel",children:Object(a.jsx)("img",{src:y})})]})]}),Object(a.jsxs)(l.a,{path:"/cards",children:[Object(a.jsx)(Ae,{}),Object(a.jsxs)("div",{className:"Links",children:[Object(a.jsx)(d.c,{exact:!0,activeClassName:"active",className:"inactive",to:"/cards",children:Object(a.jsx)("img",{src:C})}),Object(a.jsx)(d.c,{exact:!0,activeClassName:"active",className:"inactive",to:"/die",children:Object(a.jsx)("img",{src:k})}),Object(a.jsx)(d.c,{exact:!0,activeClassName:"active",className:"inactive",to:"/wheel",children:Object(a.jsx)("img",{src:y})})]})]}),Object(a.jsxs)(l.a,{path:"/wheel",children:[Object(a.jsx)(f,{}),Object(a.jsxs)("div",{className:"Links",children:[Object(a.jsx)(d.c,{exact:!0,activeClassName:"active",className:"inactive",to:"/cards",children:Object(a.jsx)("img",{src:C})}),Object(a.jsx)(d.c,{exact:!0,activeClassName:"active",className:"inactive",to:"/die",children:Object(a.jsx)("img",{src:k})}),Object(a.jsx)(d.c,{exact:!0,activeClassName:"active",className:"inactive",to:"/wheel",children:Object(a.jsx)("img",{src:y})})]})]}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(Le,{})})]}),Object(a.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Aladin",rel:"stylesheet"})]})},We=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),i(e),s(e),n(e)}))};r.a.render(Object(a.jsx)(Pe,{}),document.getElementById("root")),We()}},[[50,1,2]]]);
//# sourceMappingURL=main.68e290cf.chunk.js.map