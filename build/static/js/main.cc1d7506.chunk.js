(this["webpackJsonptech-store"]=this["webpackJsonptech-store"]||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/aboutBcg.7709c10e.jpeg"},22:function(e,t,n){e.exports=n.p+"static/media/mainBcg.984874d1.jpeg"},27:function(e,t,n){e.exports=n.p+"static/media/contactBcg.945afb99.jpeg"},28:function(e,t,n){e.exports=n.p+"static/media/defaultBcg.0819a816.jpeg"},31:function(e,t,n){e.exports=n.p+"static/media/logo.2b362308.svg"},34:function(e,t,n){e.exports=n(47)},39:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),l=n.n(c),o=(n(39),n(40),n(4)),i=n(5),m=n(22),s=n.n(m);function u(){var e=Object(o.a)(["\ntext-align: center;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nmin-height: ",";\ncolor: var(--mainWhite);\nbackground:linear-gradient(var(--primaryRGBA),var(--primaryRGBA)), \n    url(",") center/cover no-repeat;\n.title {\n    padding-top: 2rem;\n    font-size: 3.5rem;\n    text-shadow: 4px 4px 2px rgba(0,0,0,0.3);\n    text-transform: uppercase;\n    letter-spacing: var(--mainSpacing);\n}\n"]);return u=function(){return e},e}function p(e){var t=e.img,n=e.title,a=e.max,c=e.children;return r.a.createElement(d,{max:a,img:t},r.a.createElement("div",{className:"banner"},r.a.createElement("h1",{className:"title"},n),c))}var d=i.a.div(u(),(function(e){return e.max?"100vh":"60vh"}),(function(e){return e.img}));p.defaultProps={img:s.a};var f=n(7);function h(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"awesome gadgets",max:"true"},r.a.createElement(f.b,{to:"/products",className:"main-link",style:{margin:"2rem"}}," our produts")))}function g(){var e=Object(o.a)(["\ntext-align: ",";\n.title-underline {\n    height: 0.25rem;\n    width: 7rem;\n    background: var(--primaryColor);\n    margin: ",";\n}\n\n\n\n"]);return g=function(){return e},e}function v(e){var t=e.title,n=e.center;return r.a.createElement(E,{className:"row",center:n},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"text-title"},t),r.a.createElement("div",{className:"title-underline"})))}var E=i.a.div(g(),(function(e){return e.center?"center":"left"}),(function(e){return e.cneter?"0 auto":"0"})),b=n(13),x=n.n(b);function y(){return r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{src:x.a,className:"img-fluid img-thumbnail",alt:"about company",style:{background:"var(--darkGrey)"}})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement(v,{title:"about us"}),r.a.createElement("p",{className:"text-lead text-muted my-3"},"To get started with React Router in a web app, you\u2019ll need a React web app. If you need to create one, we recommend you try Create React App. ")),r.a.createElement("button",{className:"main-link",type:"button",style:{marginTop:"2rem"}},"more info"))))}function N(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{img:x.a}),r.a.createElement(y,null))}function k(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from Products Page"))}var w=n(27),C=n.n(w);function O(){return r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement(v,{title:"contact us"}),r.a.createElement("form",{className:"mt-5"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"firstName",className:"form-control",placeholder:"john smith"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"email@email.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"subject",className:"form-control",placeholder:"important!!!!!!"})),r.a.createElement("div",{className:"form"},r.a.createElement("textarea",{type:"text",name:"message",className:"form-control",placeholder:"Texto large text area"}))))))}function j(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{img:C.a}),r.a.createElement(O,null))}function F(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from SingleProduct Page"))}function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from Cart Page"))}var B=n(28),z=n.n(B);function P(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{img:z.a,title:"404",max:"true"},r.a.createElement("h2",{className:"text-uppercase"},"page not found"),r.a.createElement(f.b,{to:"/",className:"main-link",style:{marginTop:"2rem"}},"return to home")))}var T=n(8),G=n(17),R=n(18),W=n(29),A=n(30),H=n(33),I=n(32),X=[{id:1,text:"home",path:"/"},{id:2,text:"about",path:"/about"},{id:3,text:"products",path:"/products"},{id:4,text:"contact",path:"/contact"},{id:5,text:"cart",path:"/cart"}],J=r.a.createContext(),$=function(e){Object(H.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(W.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={sidebarOpen:!1,cartOpen:!1,cartItems:321,links:X,cart:[]},e.handleSidebar=function(){e.setState({sidebarOpen:!e.state.sidebarOpen})},e.handleCart=function(){e.setState({cartOpen:!e.state.cartOpen})},e.closeleCart=function(){e.setState({cartOpen:!1})},e.openleCart=function(){e.setState({cartOpen:!0})},e}return Object(A.a)(n,[{key:"render",value:function(){return r.a.createElement(J.Provider,{value:Object(R.a)(Object(R.a)({},this.state),{},{handleSidebar:this.handleSidebar,handleCart:this.handleCart,closeCart:this.closeCart,openCart:this.openCart})},this.props.children)}}]),n}(a.Component),q=J.Consumer,D=n(31),K=n.n(D);function L(){var e=Object(o.a)(["\nposition: -webkit-sticky;\nposition: sticky;\ntop:0;\nwidth: 100%;\npadding: 1rem 1.5rem;\nbackground: var(--mainGrey);\nborder-bottom: 3px solid var(--primaryColor);\nz-index: 1;\n.nav-center {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1170px;\n    margin: 0 auto;\n}\n.nav-icon {\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n.nav-cart {\n    position: relative;\n}\n.cart-items {\n    background: var(--primaryColor);\n    color: var(--mainWhite);\n    font-size: 0.85rem;\n    position: absolute;\n    top: -8px;\n    padding: 0 5px;\n    border-radius: 50%;\n}\n\n"]);return L=function(){return e},e}function M(){return r.a.createElement(q,null,(function(e){var t=e.cartItems,n=e.handleSidebar,a=e.handleCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,r.a.createElement("div",{className:"nav-center"},r.a.createElement(G.a,{className:"nav-icon",onClick:n}),r.a.createElement("img",{src:K.a,alt:"tech store logo"}),r.a.createElement("div",{className:"nav-cart"},r.a.createElement(G.b,{className:"nav-icon",onClick:a}),r.a.createElement("div",{className:"cart-items"},t)))))}))}var Q=i.a.nav(L());function U(){return r.a.createElement(r.a.Fragment,null,"Hello from Footer")}function V(){var e=Object(o.a)(["\nposition: fixed;\ntop: 60px;\nright: 0;\nwidth: 100%;\nheight: 100%;\nbackground: var(--mainGrey);\nz-index: 1;\ntransform:",";\nborder-left: 4px solid var(--primaryColor);\ntransition: var(--mainTransition);\n@media (min-width: 576px){\n    width: 20rem;\n}\n"]);return V=function(){return e},e}function Y(){return r.a.createElement(q,null,(function(e){var t=e.cartOpen,n=e.closeCart;e.cart;return r.a.createElement(Z,{show:t,onClick:n},r.a.createElement("p",null,"cart items"))}))}var Z=i.a.div(V(),(function(e){return e.show?"translateX(0)":"translateX(100%)"}));function _(){var e=Object(o.a)(["\nposition: fixed;\ntop: 60px;\nleft:0px;\nwidth: 100%;\nheight: 100%;\nbackground: var(--mainGrey);\nz-index:1;\nborder-right: 4px solid var(--primaryColor);\ntransition: var(--mainTransition);\ntransform: ",";\nul {\n    list-style-type: none;\n    padding: 0 !important;\n}\n.sidebar-link {\n    display: block;\n    font-size: 1.5rem;\n    text-transform: capitalize;\n    color: var(--mainBlack);\n    padding: 0.5rem 1.5rem;\n    background: transparent;\n    transition: var(--mainTransition);\n}\n.sidebar-link:hover {\n    background: var(--primaryColor);\n    color: var(--mainWhite);\n    padding: 0.5rem 1.5rem 0.5rem 2.5rem;\n    text-decoration: none;\n}\n@media (min-width:576px) {\n    width:20rem;\n}\n"]);return _=function(){return e},e}function ee(){return r.a.createElement(q,null,(function(e){var t=e.links,n=e.sidebarOpen,a=e.handleSidebar;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{show:n},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(f.b,{to:e.path,className:"sidebar-link",onClick:a},e.text))})))))}))}var te=i.a.nav(_(),(function(e){return e.show?"translateX(0)":"translateX(-100%)"}));var ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(ee,null," "),r.a.createElement(Y,null),r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",exact:!0,component:h}),r.a.createElement(T.a,{path:"/about",component:N}),r.a.createElement(T.a,{path:"/contact",component:j}),r.a.createElement(T.a,{path:"/products",exact:!0,component:k}),r.a.createElement(T.a,{path:"/products/:id",component:F}),r.a.createElement(T.a,{path:"/cart",component:S}),r.a.createElement(T.a,{component:P})),r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null,r.a.createElement(f.a,null,r.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.cc1d7506.chunk.js.map