(this["webpackJsonpirinakud.github.io"]=this["webpackJsonpirinakud.github.io"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var i=c(1),a=c.n(i),s=c(7),n=c.n(s),l=(c(13),c(8)),r=c(2),o=c(3),u=c(5),h=c(4),p=(c(14),[{id:"Tribute Page",url:"https://irinakud.github.io/tribute-page/",img_url:"img/thumbnails/tribute.PNG",tech:"html css"},{id:"Documentation",url:"https://codepen.io/happy_me/full/GRJOyGb",img_url:"img/thumbnails/documentation.PNG",tech:"html css"},{id:"Product Landing Page",url:"https://codepen.io/happy_me/full/PowLNGQ",img_url:"img/thumbnails/product-landing.PNG",tech:"html css"},{id:"Survey Form",url:"https://codepen.io/happy_me/full/XWJqbPb",img_url:"img/thumbnails/survey.PNG",tech:"html css"},{id:"Markdown Previewer",url:"https://codepen.io/happy_me/full/vYyvopM",img_url:"img/thumbnails/marked.PNG",tech:"html css javascript react"},{id:"Random Quotes Machine",url:"https://codepen.io/happy_me/full/OJbjeRK",img_url:"img/thumbnails/quotes.PNG",tech:"html css javascript react bootstrap jquery"},{id:"Drum Machine",url:"https://codepen.io/happy_me/full/BapamVX",img_url:"img/thumbnails/drum.PNG",tech:"html css javascript react bootstrap"},{id:"JavaScript Calculator",url:"https://codepen.io/happy_me/full/qBRbJNK",img_url:"img/thumbnails/calculator.PNG",tech:"html css javascript react"},{id:"25 + 5 Clock",url:"https://codepen.io/happy_me/full/JjERxxO",img_url:"img/thumbnails/clock.PNG",tech:"html css javascript react bootstrap"}]),d=c(0),m=function(t){Object(u.a)(c,t);var e=Object(h.a)(c);function c(){return Object(r.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"card-text tech",children:[this.props.tech.includes("bootstrap")&&Object(d.jsx)("i",{class:"fab fa-bootstrap"}),this.props.tech.includes("react")&&Object(d.jsx)("i",{class:"fab fa-react"}),this.props.tech.includes("css")&&Object(d.jsx)("i",{class:"fab fa-css3"}),this.props.tech.includes("html")&&Object(d.jsx)("i",{class:"fab fa-html5"}),this.props.tech.includes("jquery")&&Object(d.jsx)("img",{style:{verticalAlign:"text-top",width:"16px",height:"16px"},src:"https://raw.githubusercontent.com/HappyMe777/portfolio/master/img/jquery-icon.png",alt:""})]})}}]),c}(a.a.Component),b=function(t){Object(u.a)(c,t);var e=Object(h.a)(c);function c(t){return Object(r.a)(this,c),e.call(this,t)}return Object(o.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"card filterDiv "+this.props.tech,children:[Object(d.jsx)("a",{href:this.props.url,target:"_top",children:Object(d.jsx)("img",{src:this.props.img_url,className:"card-img-top",alt:this.props.id+" project snapshot"})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:this.props.id}),Object(d.jsxs)("p",{className:"card-text tech",children:["(",this.props.tech,")."]}),Object(d.jsx)(m,{tech:this.props.tech})]})]})}}]),c}(a.a.Component);function j(t){"all"==t&&(t="");var e=document.getElementsByClassName("filterDiv");Array.prototype.forEach.call(e,(function(e){!function(t,e){var c=t.className.split(" "),i=e.split(" ");Array.prototype.forEach.call(i,(function(t){for(;c.indexOf(t)>-1;)c.splice(c.indexOf(t),1)})),t.className=c.join(" ")}(e,"show"),e.className.indexOf(t)>-1&&function(t,e){var c,i;c=t.className.split(" "),i=e.split(" "),Array.prototype.forEach.call(i,(function(e){-1==c.indexOf(e)&&(t.className+=" "+e)}))}(e,"show")}))}var f=function(t){Object(u.a)(c,t);var e=Object(h.a)(c);function c(t){var i;return Object(r.a)(this,c),(i=e.call(this,t)).state={projectsList:Object(l.a)(p)},i}return Object(o.a)(c,[{key:"handleClick",value:function(t){console.log(t.target.value),j(t.target.value)}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{id:"filters",children:[Object(d.jsx)("button",{className:"btn activebtn",onClick:this.handleClick.bind(this),value:"all",children:" Show all"}),Object(d.jsx)("button",{className:"btn",onClick:this.handleClick.bind(this),value:"javascript",children:" JavaScript"}),Object(d.jsx)("button",{className:"btn",onClick:this.handleClick.bind(this),value:"react",children:" React"}),Object(d.jsx)("button",{className:"btn",onClick:this.handleClick.bind(this),value:"bootstrap",children:" Bootstrap"}),Object(d.jsx)("button",{className:"btn",onClick:this.handleClick.bind(this),value:"jquery",children:" jQuery"})]}),Object(d.jsx)("div",{id:"projects-grid",children:this.state.projectsList.map((function(t,e){return Object(d.jsx)(b,{id:t.id,url:t.url,img_url:t.img_url,tech:t.tech,display:"true"},e)}))})]})}},{key:"componentDidMount",value:function(){j("all"),function(t,e){var c=document.getElementById("filters").getElementsByClassName("btn");Array.prototype.forEach.call(c,(function(t){t.addEventListener("click",(function(){var t=document.getElementsByClassName("activebtn");t[0].className=t[0].className.replace(" activebtn",""),this.className+=" activebtn"}))}))}()}}]),c}(a.a.Component),g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,n=e.getTTFB;c(t),i(t),a(t),s(t),n(t)}))};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.1982aa0a.chunk.js.map