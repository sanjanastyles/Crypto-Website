(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(n,e,t){n.exports=t(29)},22:function(n,e,t){},24:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,l=t(0),m=t.n(l),d=t(10),s=t.n(d),p=(t(22),t(24),t(3)),g=t(1),u=t(2),f=u.a.header(a||(a=Object(g.a)(['\n  .container {\n    display: grid;\n    gap: 5px;\n    grid-template-areas: " main main main right right right";\n    width: 100%;\n    padding: 0 7% 3%;\n    background-color: #041c32;\n  }\n  .background_img {\n    display: grid;\n    align-items: right;\n    margin-top: 5%;\n    grid-area: right;\n    object-fit: cover;\n    width: 100%;\n    max-height: 100%;\n  }\n  .content {\n    grid-area: main;\n    margin-top: 12%;\n    color: #fff;\n  }\n  .content h1 {\n    font-size: 6rem;\n  }\n  .content h1 span {\n    background: -webkit-linear-gradient(120deg, #cafbfc, #62c9b8);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  .content p {\n    margin-top: 20px;\n    font-size: 1.2rem;\n  }\n  .content .btn {\n    background: -webkit-linear-gradient(120deg, #cafbfc, #62c9b8);\n    border: none;\n    border-radius: 30px;\n    color: #041c32;\n    font-weight: bold;\n    padding: 15px 30px;\n    margin-top: 20px;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 1.5rem;\n  }\n  .coinList {\n    display: table-column;\n    columns: 3;\n    align-items: right;\n  }\n\n  @media only screen and (max-width: 1340px) {\n    .container {\n      grid-template-areas: "main main right right";\n      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);\n    }\n    .content h1 {\n      font-size: 4rem;\n    }\n    .content p {\n      font-size: 1rem;\n    }\n    .content .btn {\n      font-size: 1rem;\n    }\n    .background_img > img {\n      width: 350px;\n    }\n    .coinList {\n      max-width: 350px;\n      display: table-column;\n      columns: 3;\n    }\n  }\n  @media only screen and (max-width: 975px) {\n    .container {\n      grid-template-areas:\n        "main main main "\n        "right right right ";\n      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);\n    }\n    .background_img {\n      grid-area: right;\n      width: 80%;\n      margin-top: 5%;\n    }\n  }\n']))),h=u.a.div(i||(i=Object(g.a)(["\n  display: flex;\n  align-items: center;\n"]))),x=u.a.div(r||(r=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  color: #fff;\n  padding: 10px 10px;\n\n  @media only screen and (max-width: 1350px) {\n    font-size: 0.8rem;\n    padding: 1px 1px;\n  }\n"]))),b=u.a.img(c||(c=Object(g.a)(["\n  width: 40px;\n  margin-right: 10px;\n\n  @media only screen and (max-width: 1350px) {\n    width: 20px;\n  }\n"]))),E=u.a.p(o||(o=Object(g.a)(["\n  color: #ffccd5d8;\n  font-weight: 550;\n"])));function w(n){var e=n.icon,t=n.price,a=n.name,i=n.prefix;return m.a.createElement(h,null,m.a.createElement(x,null,m.a.createElement(b,{src:e}),m.a.createElement("div",null,m.a.createElement("h4",null,i," ",t),m.a.createElement(E,null,a))))}function j(){var n=Object(l.useState)([]),e=Object(p.a)(n,2),t=e[0],a=e[1],i=Object(l.useState)([]),r=Object(p.a)(i,2),c=r[0],o=r[1],d=Object(l.useState)([]),s=Object(p.a)(d,2),g=s[0],u=s[1],h=Object(l.useState)(),x=Object(p.a)(h,2),b=x[0],E=x[1];return Object(l.useEffect)(function(){E(!0),fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum&vs_currencies=usd").then(function(n){return n.json()}).then(function(n){a(n.bitcoin.usd),o(n.ethereum.usd),u(n.tether.usd),E(!1)})},[]),m.a.createElement(f,null,m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"content"},m.a.createElement("h1",null,"BUY & "),m.a.createElement("h1",null,"SELL ",m.a.createElement("span",null,"Crypto")),m.a.createElement("p",null,"World's biggest Cryptocurrency exchange available on web as well as mobile phone."),m.a.createElement("a",{href:"#",className:"btn"},"EXPLORE MORE")),m.a.createElement("div",{className:"background_img"},m.a.createElement("img",{src:"https://cdn.discordapp.com/attachments/903185096268472381/1007209435246116904/unknown.png",alt:"stocks_image"}),m.a.createElement("div",{className:"coinList"},m.a.createElement(w,{icon:"https://bitcoin.org/img/icons/opengraph.png?1657703267",name:"Bitcoin",prefix:"$",price:b?"loading":t}),m.a.createElement(w,{icon:"https://s2.coinmarketcap.com/static/img/coins/200x200/825.png",name:"Tether",price:b?"loading":g,prefix:"$"}),m.a.createElement(w,{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/640px-Ethereum_logo_translucent.svg.png",name:"Ethereum",price:b?"loading":c,prefix:"$"})))))}var O,v,k,y,z,_,C,F,L,N,S,A=t(4),B=u.a.nav(O||(O=Object(g.a)(["\n  width: 100%;\n  height: ",";\n  padding: 1% 7%;\n  background-color: #7de0d0;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 700px) {\n    height: 80px;\n  }\n"])),function(n){return n.extendNavbar&&"50%"}),H=u.a.div(v||(v=Object(g.a)(["\n  flex: 70%;\n  display: flex;\n  align-items: center;\n  padding-left: 5%;\n"]))),M=u.a.div(k||(k=Object(g.a)(["\n  flex: 30%;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 5px;\n"]))),P=u.a.div(y||(y=Object(g.a)(["\n  width: 100%;\n  align-items: center;\n  font-weight: 700;\n  display: flex;\n"]))),R=u.a.div(z||(z=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: 700px) {\n    display: none;\n  }\n"]))),T=u.a.div(_||(_=Object(g.a)(["\n  display: flex;\n"]))),U=Object(u.a)(A.b)(C||(C=Object(g.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  color: #041c32;\n  font-size: 18px;\n  text-decoration: none;\n  margin: 10px;\n\n  @media (max-width: 700px) {\n    display: none;\n  }\n"]))),$=Object(u.a)(A.b)(F||(F=Object(g.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  text-decoration: none;\n  margin: 10px;\n"]))),I=u.a.a(L||(L=Object(g.a)(["\n  align-items: center;\n  display: flex;\n  background: #a6ebdf;\n  text-decoration: none;\n  border: 2px solid #e9a7b3;\n  color: #041c32;\n  padding: 10px 30px;\n  border-radius: 20px;\n"]))),J=u.a.img(N||(N=Object(g.a)(["\n  width: 60px;\n  height: auto;\n  margin-right: 10px;\n"]))),D=u.a.button(S||(S=Object(g.a)(["\n  width: 70px;\n  height: 50px;\n  background: none;\n  border: none;\n  font-size: 45px;\n  cursor: pointer;\n\n  @media (min-width: 700px) {\n    display: none;\n  }\n"])));function W(){var n=Object(l.useState)(!1),e=Object(p.a)(n,2),t=e[0],a=e[1];return m.a.createElement(B,{extendNavbar:t},m.a.createElement(P,null,m.a.createElement(H,null,m.a.createElement(T,null,m.a.createElement(J,{src:"https://cdn.discordapp.com/attachments/947060629066354689/1008057843494178916/unknown.png"}),m.a.createElement(U,{to:"/"}," Home "),m.a.createElement(U,{to:"/"}," About Us "),m.a.createElement(U,{to:"/"}," Features "),m.a.createElement(U,{to:"/"}," Market "),m.a.createElement(D,{onClick:function(){a(function(n){return!n})}},t?m.a.createElement(m.a.Fragment,null,"\u2715"):m.a.createElement(m.a.Fragment,null,"\u2261")))),m.a.createElement(M,null,m.a.createElement(I,{href:"#"},"EN"))),t&&m.a.createElement(R,null,m.a.createElement($,{to:"/"}," Home "),m.a.createElement($,{to:"/"}," About Us "),m.a.createElement($,{to:"/"}," Features "),m.a.createElement($,{to:"/"}," Market ")))}var X=function(){return m.a.createElement(A.a,null,m.a.createElement(W,null),m.a.createElement(j,null))},Y=function(n){n&&n instanceof Function&&t.e(1).then(t.bind(null,30)).then(function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)})};s.a.createRoot(document.getElementById("root")).render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(X,null))),Y()}},[[14,3,2]]]);
//# sourceMappingURL=main.dc07ea9f.chunk.js.map