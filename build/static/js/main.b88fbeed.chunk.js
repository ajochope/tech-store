(this["webpackJsonptech-store"]=this["webpackJsonptech-store"]||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/aboutBcg.7709c10e.jpeg"},22:function(e,t,n){e.exports=n.p+"static/media/mainBcg.984874d1.jpeg"},27:function(e,t,n){e.exports=n.p+"static/media/defaultBcg.0819a816.jpeg"},30:function(e,t,n){e.exports=n.p+"static/media/logo.2b362308.svg"},33:function(e,t,n){e.exports=n(46)},38:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),i=n.n(c),o=(n(38),n(39),n(4)),l=n(5),m=n(22),s=n.n(m);function u(){var e=Object(o.a)(["\ntext-align: center;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nmin-height: ",";\ncolor: var(--mainWhite);\nbackground:linear-gradient(var(--primaryRGBA),var(--primaryRGBA)), \n    url(",") center/cover no-repeat;\n.title {\n    padding-top: 2rem;\n    font-size: 3.5rem;\n    text-shadow: 4px 4px 2px rgba(0,0,0,0.3);\n    text-transform: uppercase;\n    letter-spacing: var(--mainSpacing);\n}\n"]);return u=function(){return e},e}function d(e){var t=e.img,n=e.title,a=e.max,c=e.children;return r.a.createElement(p,{max:a,img:t},r.a.createElement("div",{className:"banner"},r.a.createElement("h1",{className:"title"},n),c))}var p=l.a.div(u(),(function(e){return e.max?"100vh":"60vh"}),(function(e){return e.img}));d.defaultProps={img:s.a};var h=n(7);function f(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{title:"awesome gadgets",max:"true"},r.a.createElement(h.b,{to:"/products",className:"main-link",style:{margin:"2rem"}}," our produts")))}function g(){var e=Object(o.a)(["\ntext-align: ",";\n.title-underline {\n    height: 0.25rem;\n    width: 7rem;\n    background: var(--primaryColor);\n    margin: ",";\n}\n\n\n\n"]);return g=function(){return e},e}function v(e){var t=e.title,n=e.center;return r.a.createElement(E,{className:"row",center:n},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"text-title"},t),r.a.createElement("div",{className:"title-underline"})))}var E=l.a.div(g(),(function(e){return e.center?"center":"left"}),(function(e){return e.cneter?"0 auto":"0"})),b=n(13),x=n.n(b);function y(){return r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{src:x.a,className:"img-fluid img-thumbnail",alt:"about company",style:{background:"var(--darkGrey)"}})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement(v,{title:"about us"}),r.a.createElement("p",{className:"text-lead text-muted my-3"},"To get started with React Router in a web app, you\u2019ll need a React web app. If you need to create one, we recommend you try Create React App. ")),r.a.createElement("button",{className:"main-link",type:"button",style:{marginTop:"2rem"}},"more info"))))}function k(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{img:x.a}),r.a.createElement(y,null))}function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from Products Page"))}function C(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from Contact Page"))}function N(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from SingleProduct Page"))}function O(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello from Cart Page"))}var j=n(27),F=n.n(j);function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{img:F.a,title:"404",max:"true"},r.a.createElement("h2",{className:"text-uppercase"},"page not found"),r.a.createElement(h.b,{to:"/",className:"main-link",style:{marginTop:"2rem"}},"return to home")))}var z=n(8),B=n(17),P=n(18),G=n(28),R=n(29),T=n(32),H=n(31),W=[{id:1,text:"home",path:"/"},{id:2,text:"about",path:"/about"},{id:3,text:"products",path:"/products"},{id:4,text:"contact",path:"/contact"},{id:5,text:"cart",path:"/cart"}],A=r.a.createContext(),I=function(e){Object(T.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(G.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={sidebarOpen:!1,cartOpen:!1,cartItems:123,links:W,cart:[]},e.handleSidebar=function(){e.setState({sidebarOpen:!e.state.sidebarOpen})},e.handleCart=function(){e.setState({cartOpen:!e.state.cartOpen})},e.closeleCart=function(){e.setState({cartOpen:!1})},e.openleCart=function(){e.setState({cartOpen:!0})},e}return Object(R.a)(n,[{key:"render",value:function(){return r.a.createElement(A.Provider,{value:Object(P.a)(Object(P.a)({},this.state),{},{handleSidebar:this.handleSidebar,handleCart:this.handleCart,closeCart:this.closeCart,openCart:this.openCart})},this.props.children)}}]),n}(a.Component),X=A.Consumer,J=n(30),$=n.n(J);function q(){var e=Object(o.a)(["\nposition: -webkit-sticky;\nposition: sticky;\ntop:0;\nwidth: 100%;\npadding: 1rem 1.5rem;\nbackground: var(--mainGrey);\nborder-bottom: 3px solid var(--primaryColor);\nz-index: 1;\n.nav-center {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1170px;\n    margin: 0 auto;\n}\n.nav-icon {\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n.nav-cart {\n    position: relative;\n}\n.cart-items {\n    background: var(--primaryColor);\n    color: var(--mainWhite);\n    font-size: 0.85rem;\n    position: absolute;\n    top: -8px;\n    padding: 0 5px;\n    border-radius: 50%;\n}\n\n"]);return q=function(){return e},e}function D(){return r.a.createElement(X,null,(function(e){var t=e.cartItems,n=e.handleSidebar,a=e.handleCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement("div",{className:"nav-center"},r.a.createElement(B.a,{className:"nav-icon",onClick:n}),r.a.createElement("img",{src:$.a,alt:"tech store logo"}),r.a.createElement("div",{className:"nav-cart"},r.a.createElement(B.b,{className:"nav-icon",onClick:a}),r.a.createElement("div",{className:"cart-items"},t)))))}))}var K=l.a.nav(q());function L(){return r.a.createElement(r.a.Fragment,null,"Hello from Footer")}function M(){var e=Object(o.a)(["\nposition: fixed;\ntop: 60px;\nright: 0;\nwidth: 100%;\nheight: 100%;\nbackground: var(--mainGrey);\nz-index: 1;\ntransform:",";\nborder-left: 4px solid var(--primaryColor);\ntransition: var(--mainTransition);\n@media (min-width: 576px){\n    width: 20rem;\n}\n"]);return M=function(){return e},e}function Q(){return r.a.createElement(X,null,(function(e){var t=e.cartOpen,n=e.closeCart;e.cart;return r.a.createElement(U,{show:t,onClick:n},r.a.createElement("p",null,"cart items"))}))}var U=l.a.div(M(),(function(e){return e.show?"translateX(0)":"translateX(100%)"}));function V(){var e=Object(o.a)(["\nposition: fixed;\ntop: 60px;\nleft:0px;\nwidth: 100%;\nheight: 100%;\nbackground: var(--mainGrey);\nz-index:1;\nborder-right: 4px solid var(--primaryColor);\ntransition: var(--mainTransition);\ntransform: ",";\nul {\n    list-style-type: none;\n    padding: 0 !important;\n}\n.sidebar-link {\n    display: block;\n    font-size: 1.5rem;\n    text-transform: capitalize;\n    color: var(--mainBlack);\n    padding: 0.5rem 1.5rem;\n    background: transparent;\n    transition: var(--mainTransition);\n}\n.sidebar-link:hover {\n    background: var(--primaryColor);\n    color: var(--mainWhite);\n    padding: 0.5rem 1.5rem 0.5rem 2.5rem;\n    text-decoration: none;\n}\n@media (min-width:576px) {\n    width:20rem;\n}\n"]);return V=function(){return e},e}function Y(){return r.a.createElement(X,null,(function(e){var t=e.links,n=e.sidebarOpen,a=e.handleSidebar;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{show:n},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h.b,{to:e.path,className:"sidebar-link",onClick:a},e.text))})))))}))}var Z=l.a.nav(V(),(function(e){return e.show?"translateX(0)":"translateX(-100%)"}));var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(Y,null," "),r.a.createElement(Q,null),r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/",exact:!0,component:f}),r.a.createElement(z.a,{path:"/about",component:k}),r.a.createElement(z.a,{path:"/contact",component:C}),r.a.createElement(z.a,{path:"/products",exact:!0,component:w}),r.a.createElement(z.a,{path:"/products/:id",component:N}),r.a.createElement(z.a,{path:"/cart",component:O}),r.a.createElement(z.a,{component:S})),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null,r.a.createElement(h.a,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.b88fbeed.chunk.js.map