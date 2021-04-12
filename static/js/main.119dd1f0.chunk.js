(this["webpackJsonpirinakud.github.io"]=this["webpackJsonpirinakud.github.io"]||[]).push([[0],{13:function(t,e,i){},14:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var a=i(1),c=i.n(a),s=i(7),r=i.n(s),n=(i(13),i(14),i(2)),l=i(3),o=i(5),u=i(4),h=[{id:"25 + 5 Clock",url:"https://irinakud.github.io/clock/",img_url:"img/thumbnails/clock.PNG",tech:"html css javascript react bootstrap"},{id:"JavaScript Calculator",url:"https://irinakud.github.io/calculator/",img_url:"img/thumbnails/calculator.PNG",tech:"html css javascript react"},{id:"Drum Machine",url:"https://irinakud.github.io/drum-machine/",img_url:"img/thumbnails/drum.PNG",tech:"html css javascript react bootstrap"},{id:"Random Quotes Machine",url:"https://irinakud.github.io/quotes-machine/",img_url:"img/thumbnails/quotes.PNG",tech:"html css javascript react bootstrap jquery"},{id:"Markdown Previewer",url:"https://irinakud.github.io/markdown/",img_url:"img/thumbnails/marked.PNG",tech:"html css javascript react"},{id:"Survey Form",url:"https://irinakud.github.io/survey/",img_url:"img/thumbnails/survey.PNG",tech:"html css"},{id:"Product Landing Page",url:"https://irinakud.github.io/landing-page/",img_url:"img/thumbnails/product-landing.PNG",tech:"html css"},{id:"Documentation",url:"https://irinakud.github.io/documentation/",img_url:"img/thumbnails/documentation.PNG",tech:"html css"},{id:"Tribute Page",url:"https://irinakud.github.io/tribute-page/",img_url:"img/thumbnails/tribute.PNG",tech:"html css"}],d=i(0),j=function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(){return Object(n.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"card-text tech",children:[this.props.tech.includes("javascript")&&Object(d.jsx)("span",{className:"tech-icon",children:Object(d.jsx)("i",{className:"fab fa-js"})}),this.props.tech.includes("react")&&Object(d.jsx)("span",{className:"tech-icon",children:Object(d.jsx)("i",{className:"fab fa-react"})}),this.props.tech.includes("bootstrap")&&Object(d.jsx)("span",{className:"tech-icon",children:Object(d.jsx)("i",{className:"fab fa-bootstrap"})}),this.props.tech.includes("jquery")&&Object(d.jsx)("span",{className:"tech-icon",children:Object(d.jsx)("img",{style:{verticalAlign:"text-top",width:"16px",height:"16px"},src:"https://raw.githubusercontent.com/HappyMe777/portfolio/master/img/jquery-icon.png",alt:""})})]})}}]),i}(c.a.Component),b=function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(){return Object(n.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"card filterDiv "+this.props.tech,children:[Object(d.jsx)("a",{href:this.props.url,target:"_top",children:Object(d.jsx)("img",{src:this.props.img_url,className:"card-img-top",alt:this.props.id+" project snapshot"})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)(j,{tech:this.props.tech}),Object(d.jsx)("h5",{className:"card-title",children:this.props.id})]})]})}}]),i}(c.a.Component),p=i(8),m=[{value:"all",name:"Show all",active:!0},{value:"javascript",name:"JavaScript",active:!1},{value:"react",name:"React",active:!1},{value:"bootstrap",name:"Bootstrap",active:!1},{value:"jquery",name:"jQuery",active:!1}],v=function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(n.a)(this,i),(a=e.call(this,t)).state={filters:m},a}return Object(l.a)(i,[{key:"activateFilter",value:function(t){var e=m;e.forEach((function(e){e.active&&(e.active=!1),e.value===t&&(e.active=!0)})),this.setState({filters:e})}},{key:"filterProjectsList",value:function(t){return"all"===t?Object(p.a)(h):h.filter((function(e){return e.tech.indexOf(t)>-1}))}},{key:"handleClick",value:function(t){var e=this.filterProjectsList(t.target.value);this.props.updateProjectsList(e),this.activateFilter(t.target.value)}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{id:"filters",children:[Object(d.jsx)("div",{className:"filter-buttons",children:this.state.filters.map((function(e,i){return Object(d.jsxs)("button",{className:e.active?"btn btn-light active-filter":"btn btn-light",onClick:t.handleClick.bind(t),value:e.value,children:[" ",e.name]},i)}))}),Object(d.jsx)("div",{className:"filter-dropdown",children:Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Filter"}),Object(d.jsx)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:this.state.filters.map((function(e,i){return Object(d.jsxs)("button",{className:e.active?"dropdown-item active-filter":"dropdown-item",onClick:t.handleClick.bind(t),value:e.value,children:[" ",e.name]},i)}))})]})})]})}}]),i}(c.a.Component),g=function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(n.a)(this,i),(a=e.call(this,t)).state={projectsList:h},a}return Object(l.a)(i,[{key:"updateProjectsList",value:function(t){this.setState({projectsList:t})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"filters-container",children:[Object(d.jsx)("div",{id:"filter-label",children:Object(d.jsx)("h5",{children:"Here is my portfolio"})}),Object(d.jsx)(v,{updateProjectsList:this.updateProjectsList.bind(this)})]}),Object(d.jsx)("div",{id:"projects-grid",children:this.state.projectsList.map((function(t,e){return Object(d.jsx)(b,{id:t.id,url:t.url,img_url:t.img_url,tech:t.tech},e)}))})]})}}]),i}(c.a.Component),O=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{id:"welcome-section",children:[Object(d.jsxs)("div",{id:"contact-section",children:[Object(d.jsx)("a",{className:"contact-link",target:"_top",href:"mailto: irbaska@gmail.com",children:Object(d.jsx)("i",{className:"far fa-envelope"})}),Object(d.jsx)("a",{className:"contact-link",target:"_top",href:"https://www.linkedin.com/in/irina-kudryavtseva-6467884a/",children:Object(d.jsx)("i",{className:"fab fa-linkedin-in"})})]}),Object(d.jsxs)("div",{id:"welcome-text",children:[Object(d.jsx)("h1",{children:"Hi, I am Irina"}),Object(d.jsx)("h1",{children:"I am a Front-End Developer"})]})]}),Object(d.jsx)("div",{id:"projects",children:Object(d.jsx)(g,{})})]})},f=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(e){var i=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;i(t),a(t),c(t),s(t),r(t)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.119dd1f0.chunk.js.map