(this["webpackJsonpfernando-fregate"]=this["webpackJsonpfernando-fregate"]||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/boticario.9be67ed3.jpeg"},21:function(e,a,t){e.exports=t.p+"static/media/havaianas.bf804544.jpeg"},22:function(e,a,t){e.exports=t.p+"static/media/doritos.ae5acbc4.jpeg"},23:function(e,a,t){e.exports=t.p+"static/media/bebe.787f3fa2.jpeg"},24:function(e,a,t){e.exports=t.p+"static/media/rainbow.aa1115b3.jpeg"},26:function(e,a,t){e.exports=t(41)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),i=t.n(c),o=t(6),s=t(7),l=t(9),m=t(8),u=(t(31),t(14)),h=t(1),d=t(10),p=(t(32),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){"undefined"!==typeof InstallTrigger&&document.querySelector("svg").classList.add("firefox")}},{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"main"},r.a.createElement("h1",{className:"hi"},"HI! I'AM"),r.a.createElement("div",{className:"icon"},r.a.createElement("h1",{className:"first-name"},"FERNANDO"),r.a.createElement(d.a,{color:"#fff"})),r.a.createElement("div",{className:"break"},r.a.createElement("h1",{className:"last-name"},"FREGATE"),r.a.createElement("h2",{className:"description"},"A CREATIVE ",r.a.createElement("br",null),"ART DIRECTOR ",r.a.createElement("br",null),"BASED IN ",r.a.createElement("br",null),"SAO PAULO"))),r.a.createElement("div",{className:"about"},r.a.createElement("a",{href:"about-me",className:"me"},"ABOUT ME")))}}]),t}(r.a.Component)),E=t(20),f=t.n(E),b=t(21),v=t.n(b),O=t(22),g=t.n(O),N=t(23),A=t.n(N),j=t(24),D=t.n(j),y=(t(33),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"handleImageLoaded",value:function(e){var a=e.target,t=a.offsetHeight/2-78;a.previousElementSibling.setAttribute("style","top:"+t+"px")}},{key:"showDescription",value:function(e){var a=e.currentTarget.querySelector("img"),t=a.previousElementSibling;a.classList.add("zoom"),t.classList.add("show")}},{key:"hideDescription",value:function(e){var a=e.currentTarget.querySelector("img"),t=a.previousElementSibling;a.classList.remove("zoom"),t.classList.remove("show")}},{key:"updateSize",value:function(){document.querySelectorAll(".campanha").forEach((function(e){var a=e.querySelector("img"),t=a.offsetHeight/2-78;a.previousElementSibling.setAttribute("style","top:"+t+"px")}))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize)}},{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(p,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"campanha",onMouseOver:this.showDescription.bind(this),onMouseOut:this.hideDescription.bind(this)},r.a.createElement("a",{href:"/campanhas/oboticario"},r.a.createElement("div",{className:"description"},r.a.createElement(d.a,{color:"#fff"}),r.a.createElement("h3",null,"OBOTIC\xc1RIO"),r.a.createElement("p",null,"INTENSE CARNAVAL")),r.a.createElement("img",{src:f.a,onLoad:this.handleImageLoaded.bind(this),alt:"Campanha oBotic\xe1rio - Intense Carnaval"}))),r.a.createElement("div",{className:"campanha",onMouseOver:this.showDescription.bind(this),onMouseOut:this.hideDescription.bind(this)},r.a.createElement("a",{href:"/campanhas/havaianas"},r.a.createElement("div",{className:"description"},r.a.createElement(d.a,{color:"#fff"}),r.a.createElement("h3",null,"HAVAIANAS"),r.a.createElement("p",null,"DIA DAS BRUXAS")),r.a.createElement("img",{src:v.a,onLoad:this.handleImageLoaded.bind(this),alt:"Campanha Havaianas - Dia das Bruxas"}))),r.a.createElement("div",{className:"campanha",onMouseOver:this.showDescription.bind(this),onMouseOut:this.hideDescription.bind(this)},r.a.createElement("a",{href:"/campanhas/doritos"},r.a.createElement("div",{className:"description"},r.a.createElement(d.a,{color:"#fff"}),r.a.createElement("h3",null,"DORITOS"),r.a.createElement("p",null,"TRIGONOMETRIA")),r.a.createElement("img",{src:g.a,onLoad:this.handleImageLoaded.bind(this),alt:"Campanha Doritos - Trigonometria"}))),r.a.createElement("div",{className:"campanha",onMouseOver:this.showDescription.bind(this),onMouseOut:this.hideDescription.bind(this)},r.a.createElement("a",{href:"/campanhas/bebe"},r.a.createElement("div",{className:"description"},r.a.createElement(d.a,{color:"#fff"}),r.a.createElement("h3",null,"BEBE"),r.a.createElement("p",null,"M\xc9DICOS")),r.a.createElement("img",{src:A.a,onLoad:this.handleImageLoaded.bind(this),alt:"Campanha Bebe - M\xe9dicos"}))),r.a.createElement("div",{className:"campanha",onMouseOver:this.showDescription.bind(this),onMouseOut:this.hideDescription.bind(this)},r.a.createElement("a",{href:"/campanhas/rainbow"},r.a.createElement("div",{className:"description"},r.a.createElement(d.a,{color:"#fff"}),r.a.createElement("h3",null,"DORITOS"),r.a.createElement("p",null,"ESCUTE A VOZ DE RAINBOW")),r.a.createElement("img",{src:D.a,onLoad:this.handleImageLoaded.bind(this),alt:"Campanha Doritos - Escute a voz de Rainbow"})))))}}]),t}(r.a.Component)),I=(t(34),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("h1",{className:"text"},"about-me"),r.a.createElement("a",{href:"/"},"home"))}}]),t}(r.a.Component)),S=(t(35),function(e){var a=e.campanha,t=Object(h.g)(),n=!1;return[{route:"oboticario"},{route:"havaianas"},{route:"doritos"},{route:"bebe"},{route:"rainbow"}].forEach((function(e){e.route===a&&(n=!0)})),!1===n&&t.push("/"),r.a.createElement("div",null,r.a.createElement("p",{className:"text"},a," campanhas"),r.a.createElement("a",{href:"/",className:"link-home"},"HOME"))}),L=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,component:y}),r.a.createElement(h.b,{path:"/about-me",component:I}),r.a.createElement(h.b,{path:"/campanhas/:id",render:function(e){return r.a.createElement(S,{campanha:e.match.params.id})}}),r.a.createElement(h.b,{path:"*",render:function(e){return r.a.createElement(h.a,{to:"/",push:!0})}})))}}]),t}(r.a.Component),M=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))}}]),t}(r.a.Component);i.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2d155627.chunk.js.map