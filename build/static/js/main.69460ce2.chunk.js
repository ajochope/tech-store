(this["webpackJsonptech-store"]=this["webpackJsonptech-store"]||[]).push([[0],{21:function(e,n,t){e.exports=t.p+"static/media/mainBcg.984874d1.jpeg"},26:function(e,n,t){e.exports=t.p+"static/media/defaultBcg.0819a816.jpeg"},29:function(e,n,t){e.exports=t.p+"static/media/logo.2b362308.svg"},32:function(e,n,t){e.exports=t(45)},37:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(20),i=t.n(o),c=(t(37),t(38),t(6)),l=t(7),m=t(21),s=t.n(m);function u(){var e=Object(c.a)(["\ntext-align: center;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nmin-height: ",";\ncolor: var(--mainWhite);\nbackground:linear-gradient(var(--primaryRGBA),var(--primaryRGBA)), \n    url(",") center/cover no-repeat;\n.title {\n    padding-top: 2rem;\n    font-size: 3.5rem;\n    text-shadow: 4px 4px 2px rgba(0,0,0,0.3);\n    text-transform: uppercase;\n    letter-spacing: var(--mainSpacing);\n}\n"]);return u=function(){return e},e}function p(e){var n=e.img,t=e.title,a=e.max,o=e.children;return r.a.createElement(d,{max:a,img:n},r.a.createElement("div",{className:"banner"},r.a.createElement("h1",{className:"title"},t),o))}var d=l.a.div(u(),(function(e){return e.max?"100vh":"60vh"}),(function(e){return e.img}));p.defaultProps={img:s.a};var h=t(5);function f(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"awesome gadgets",max:"true"},r.a.createElement(h.b,{to:"/products",className:"main-link",style:{margin:"2rem"}}," our produts")))}function g(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from SingleProduct Page"))}function v(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from Products Page"))}function E(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from Contact Page"))}function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from SingleProduct Page"))}function x(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from Cart Page"))}var k=t(26),y=t.n(k);function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{img:y.a,title:"404",max:"true"},r.a.createElement("h2",{className:"text-uppercase"},"page not found"),r.a.createElement(h.b,{to:"/",className:"main-link",style:{marginTop:"2rem"}},"return to home")))}var C=t(8),O=t(16),j=t(17),F=t(27),S=t(28),N=t(31),P=t(30),z=[{id:1,text:"home",path:"/"},{id:2,text:"about",path:"/about"},{id:3,text:"products",path:"/products"},{id:4,text:"contact",path:"/contact"},{id:5,text:"cart",path:"/cart"}],B=r.a.createContext(),H=function(e){Object(N.a)(t,e);var n=Object(P.a)(t);function t(){var e;Object(F.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={sidebarOpen:!1,cartOpen:!1,cartItems:123,links:z,cart:[]},e.handleSidebar=function(){e.setState({sidebarOpen:!e.state.sidebarOpen})},e.handleCart=function(){e.setState({cartOpen:!e.state.cartOpen})},e.closeleCart=function(){e.setState({cartOpen:!1})},e.openleCart=function(){e.setState({cartOpen:!0})},e}return Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(B.Provider,{value:Object(j.a)(Object(j.a)({},this.state),{},{handleSidebar:this.handleSidebar,handleCart:this.handleCart,closeCart:this.closeCart,openCart:this.openCart})},this.props.children)}}]),t}(a.Component),G=B.Consumer,W=t(29),T=t.n(W);function X(){var e=Object(c.a)(["\nposition: -webkit-sticky;\nposition: sticky;\ntop:0;\nwidth: 100%;\npadding: 1rem 1.5rem;\nbackground: var(--mainGrey);\nborder-bottom: 3px solid var(--primaryColor);\n.nav-center {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1170px;\n    margin: 0 auto;\n}\n.nav-icon {\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n.nav-cart {\n    position: relative;\n}\n.cart-items {\n    background: var(--primaryColor);\n    color: var(--mainWhite);\n    font-size: 0.85rem;\n    position: absolute;\n    top: -8px;\n    padding: 0 5px;\n    border-radius: 50%;\n}\n\n"]);return X=function(){return e},e}function A(){return r.a.createElement(G,null,(function(e){var n=e.cartItems,t=e.handleSidebar,a=e.handleCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null,r.a.createElement("div",{className:"nav-center"},r.a.createElement(O.a,{className:"nav-icon",onClick:t}),r.a.createElement("img",{src:T.a,alt:"tech store logo"}),r.a.createElement("div",{className:"nav-cart"},r.a.createElement(O.b,{className:"nav-icon",onClick:a}),r.a.createElement("div",{className:"cart-items"},n)))))}))}var I=l.a.nav(X());function J(){return r.a.createElement(r.a.Fragment,null,"Hello from Footer")}function R(){var e=Object(c.a)(["\nposition: fixed;\ntop: 60px;\nright: 0;\nwidth: 100%;\nheight: 100%;\nbackground: var(--mainGrey);\nz-index: 1;\ntransform:",";\nborder-left: 4px solid var(--primaryColor);\ntransition: var(--mainTransition);\n@media (min-width: 576px){\n    width: 20rem;\n}\n"]);return R=function(){return e},e}function $(){return r.a.createElement(G,null,(function(e){var n=e.cartOpen,t=e.closeCart;e.cart;return r.a.createElement(q,{show:n,onClick:t},r.a.createElement("p",null,"cart items"))}))}var q=l.a.div(R(),(function(e){return e.show?"translateX(0)":"translateX(100%)"}));function D(){var e=Object(c.a)(["\nposition: fixed;\ntop: 60px;\nleft:0px;\nwidth: 100%;\nheight: 100%;\nbackground: var(--mainGrey);\nz-index:1;\nborder-right: 4px solid var(--primaryColor);\ntransition: var(--mainTransition);\ntransform: ",";\nul {\n    list-style-type: none;\n    padding: 0 !important;\n}\n.sidebar-link {\n    display: block;\n    font-size: 1.5rem;\n    text-transform: capitalize;\n    color: var(--mainBlack);\n    padding: 0.5rem 1.5rem;\n    background: transparent;\n    transition: var(--mainTransition);\n}\n.sidebar-link:hover {\n    background: var(--primaryColor);\n    color: var(--mainWhite);\n    padding: 0.5rem 1.5rem 0.5rem 2.5rem;\n    text-decoration: none;\n}\n@media (min-width:576px) {\n    width:20rem;\n}\n"]);return D=function(){return e},e}function K(){return r.a.createElement(G,null,(function(e){var n=e.links,t=e.sidebarOpen,a=e.handleSidebar;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{show:t},r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h.b,{to:e.path,className:"sidebar-link",onClick:a},e.text))})))))}))}var L=l.a.nav(D(),(function(e){return e.show?"translateX(0)":"translateX(-100%)"}));var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(K,null," "),r.a.createElement($,null),r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/",exact:!0,component:f}),r.a.createElement(C.a,{path:"/about",component:g}),r.a.createElement(C.a,{path:"/contact",component:E}),r.a.createElement(C.a,{path:"/products",exact:!0,component:v}),r.a.createElement(C.a,{path:"/products/:id",component:b}),r.a.createElement(C.a,{path:"/cart",component:x}),r.a.createElement(C.a,{component:w})),r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null,r.a.createElement(h.a,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.69460ce2.chunk.js.map