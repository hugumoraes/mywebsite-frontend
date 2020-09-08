(this["webpackJsonpmywebsite-frontend"]=this["webpackJsonpmywebsite-frontend"]||[]).push([[0],{22:function(n,e,t){n.exports=t(34)},33:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(16),o=t.n(a),l=t(9),c=t(3),m=t(20),u=t(1),d=t(2);function p(){var n=Object(u.a)(["\n  background: #0e0e0e;\n  color: white;\n"]);return p=function(){return n},n}function s(){var n=Object(u.a)(["\n  padding: 8px 12px;\n  margin: 8px 4px;\n\n  a {\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: white;\n    transition: 0.2s ease;\n\n    &:active,\n    &:hover {\n      border-bottom: 4px solid rgb(0, 255, 255);\n    }\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n  background: #0e0e0e;\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  margin-bottom: ",";\n\n  width: 100%;\n  height: ",";\n\n  li {\n    display: ",";\n  }\n\n  button {\n    position: ",";\n    border-radius: ",";\n    padding: 4px 8px;\n    bottom: ",";\n    font-size: 1.25rem;\n  }\n\n  @media (min-width: 420px) {\n    height: 3.2rem;\n\n    button {\n      display: none;\n    }\n\n    ul {\n      display: flex;\n      flex-direction: row;\n      list-style: none;\n\n      li {\n        display: inline-block;\n      }\n    }\n  }\n"]);return f=function(){return n},n}var g=d.b.header.attrs((function(n){return{shown:n.shown}}))(f(),(function(n){return n.shown?"4rem":"0"}),(function(n){return n.shown?"12rem":"3.2rem"}),(function(n){return n.shown?"flex":"none"}),(function(n){return n.shown?"absolute":"relative"}),(function(n){return n.shown?"50%":"4px"}),(function(n){return n.shown?"-36px":"0"})),h=d.b.li(s()),b=d.b.button(p());function x(){var n=Object(r.useState)(!1),e=Object(m.a)(n,2),t=e[0],a=e[1];return i.a.createElement(g,{shown:t},i.a.createElement("ul",null,[{name:"Home",href:"/"},{name:"Portfolio",href:"/portfolio"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact-me"}].map((function(n){return i.a.createElement(h,{key:n.name},i.a.createElement(l.b,{to:n.href},n.name))}))),i.a.createElement(b,{onClick:function(n){n.preventDefault(),a(!t)}},t?"X":"Menu"))}function v(){var n=Object(u.a)(["\n  margin-top: 4rem;\n  width: 100%;\n  height: 6rem;\n  background: black;\n"]);return v=function(){return n},n}var w=d.b.footer(v());function E(){return i.a.createElement(w,null)}function y(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  margin-top: 2rem;\n  width: 100%;\n\n  @media (min-width: 1200px){ \n    width: 1200px;\n  }\n"]);return y=function(){return n},n}var k=d.b.div(y());function j(n){var e=n.children;return i.a.createElement(k,null,e)}var O=t(21);function z(){var n=Object(u.a)([""]);return z=function(){return n},n}function q(){var n=Object(u.a)(["\n  width: 100%;\n\n  &:not(:first-child) {\n    margin-top: 4rem;\n  }\n\n  .h1 {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 2rem;\n\n    h1 {\n      background: #dfdfdf;\n      padding: 0 12px;\n      margin: 0 auto;\n      z-index: 20;\n    }\n\n    hr {\n      z-index: 10;\n      position: absolute;\n      top: 14px;\n      width: 100%;\n      border-bottom: 2px solid black;\n    }\n  }\n\n  .grid-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    @media (min-width: 720px) {\n      display: grid;\n      justify-items: center;\n      grid-template-columns: 50% 50%;\n      grid-column-gap: 0;\n      grid-row-gap: 1.4rem;\n    }\n\n    @media (min-width: 1200px) {\n      display: grid;\n      grid-template-columns: 32% 32% 32%; \n      grid-column-gap: 2%;\n      grid-row-gap: 1.4rem;\n    }\n  }\n\n  .item {\n    display: flex;\n    flex-direction: column;\n\n    width: min(92%, max(33vw, 320px));\n    min-height: 480px;\n\n    background: white;\n    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    margin-bottom: 2rem;\n\n    img {\n      border-radius: 4px 4px 0 0;\n      width: 100%;\n      height: 220px;\n      background: red;\n    }\n\n    h1 {\n      padding: 2rem;\n    }\n\n    p {\n      padding: 0 2rem;\n      font-size: 1rem;\n    }\n\n    div {\n      display: flex;\n      flex-direction: row;\n      justify-content: start;\n      padding: 2rem;\n\n      a {\n        display: flex;\n        flex-direction: row;\n        align-items: end;\n        padding: 6px 12px;\n        margin-left: 4px;\n        font-size: 1.2rem;\n        background: #d3d3d3;\n        border-radius: 4px;\n        color: black;\n\n        &:hover {\n          background: #a9a9a9;\n        }\n\n        svg {\n          width: 24px;\n          height: 24px;\n        }\n      }\n    }\n\n    @media (min-width: 420px) {\n\n    }\n  }\n"]);return q=function(){return n},n}var D=d.b.div(q());d.b.div(z());function F(){return i.a.createElement(D,null,i.a.createElement("div",{className:"h1"},i.a.createElement("h1",null,"Portfolio"),i.a.createElement("hr",null)),i.a.createElement("div",{className:"grid-container"},[{id:1,name:"Twitter UI Clone",img:"https://i.imgur.com/jUzySjx.jpg",description:"Twitter interface clone using Typescript, React and Styled Components.",github:"https://github.com/hugumoraes/ui-clone-twitter",demo:"https://relaxed-goldwasser-41a778.netlify.app"}].map((function(n){return i.a.createElement("div",{className:"item",key:n.id},i.a.createElement("img",{src:n.img,alt:n.name}),i.a.createElement("h1",null,n.name),i.a.createElement("p",null,n.description),i.a.createElement("div",null,i.a.createElement("a",{href:n.github},i.a.createElement(O.a,null)),i.a.createElement("a",{href:n.demo},"Demo"),n.blog?i.a.createElement("a",{href:n.blog},"Blog"):null))}))))}function B(){var n=Object(u.a)([""]);return B=function(){return n},n}function C(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  &:not(:first-child) {\n    margin-top: 4rem;\n  }\n\n  h1 {\n    margin-top: 2rem;\n  }\n\n  .h1 {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 2rem;\n\n    h1 {\n      background: #dfdfdf;\n      padding: 0 12px;\n      margin: 0 auto;\n      z-index: 20;\n    }\n\n    hr {\n      z-index: 10;\n      position: absolute;\n      top: 14px;\n      width: 100%;\n      border-bottom: 2px solid black;\n    }\n  }\n\n  .grid-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    @media (min-width: 720px) {\n      display: grid;\n      justify-items: center;\n      grid-template-columns: 50% 50%;\n      grid-column-gap: 0;\n      grid-row-gap: 1.4rem;\n    }\n\n    @media (min-width: 1200px) {\n      display: grid;\n      grid-template-columns: 32% 32% 32%;\n      grid-column-gap: 2%;\n      grid-row-gap: 1.4rem;\n    }\n  }\n\n  .item {\n    display: flex;\n    flex-direction: column;\n\n    width: min(92%, max(33vw, 320px));\n    min-height: 480px;\n\n    background: white;\n    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    margin-bottom: 2rem;\n\n    img {\n      border-radius: 4px 4px 0 0;\n      width: 100%;\n      height: 220px;\n      background: red;\n    }\n\n    h1 {\n      padding: 2rem;\n    }\n\n    p {\n      padding: 0 2rem;\n      font-size: 1rem;\n    }\n\n    @media (min-width: 420px) {\n    }\n  }\n"]);return C=function(){return n},n}var N=d.b.div(C());d.b.div(B());function S(){return i.a.createElement(N,null,i.a.createElement("div",{className:"h1"},i.a.createElement("h1",null,"Blog"),i.a.createElement("hr",null)),i.a.createElement("h1",null,"Em desenvolvimento"))}var T=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,null),i.a.createElement(j,null,i.a.createElement(F,null),i.a.createElement(S,null)),i.a.createElement(E,null))};function H(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    margin-top: 4rem;\n  }\n"]);return H=function(){return n},n}var I=d.b.div(H());var J=function(){return i.a.createElement(I,null,i.a.createElement(x,null),i.a.createElement("h1",null,"Em desenvolvimento"))};function M(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    margin-top: 4rem;\n  }\n"]);return M=function(){return n},n}var P=d.b.div(M());function U(){return i.a.createElement(P,null,i.a.createElement(x,null),i.a.createElement("h1",null,"Em desenvolvimento"))}function A(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    margin-top: 4rem;\n  }\n"]);return A=function(){return n},n}var R=d.b.div(A());function X(){return i.a.createElement(R,null,i.a.createElement(x,null),i.a.createElement("h1",null,"Em desenvolvimento"))}function G(){return i.a.createElement(l.a,null,i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",exact:!0,component:T}),i.a.createElement(c.a,{path:"/portfolio",component:J}),i.a.createElement(c.a,{path:"/blog",component:U}),i.a.createElement(c.a,{path:"/contact-me",component:X})))}function K(){var n=Object(u.a)(["\n\n* {\n  margin: 0;\n\tpadding: 0;\n  border: 0;\n  outline: 0;\n  box-sizing: border-box;\n  vertical-align: baseline;\n}\n\nhtml, body, #root {\n  min-height: 100%;\n  line-height: 1;\n}\n\nbody {\n  background: #DFDFDF;\n  -webkit-font-smoothing: antialiased !important;\n}\n\nbody, input, button {\n  color: black;\n  font-size: 14px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbutton {\n  cursor: pointer;\n}\n\na {\n    text-decoration: none;\n}\n"]);return K=function(){return n},n}var L=Object(d.a)(K());t(33);var Q=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(L,null),i.a.createElement(G,null))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Q,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c5c6cead.chunk.js.map