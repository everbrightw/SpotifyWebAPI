(this.webpackJsonpmp2=this.webpackJsonpmp2||[]).push([[0],{20:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p}));var a=n(2),r=n.n(a),c=n(8),s=n(10),l=n(11),o=n(13),i=n.n(o),u=n(29),m=n.n(u),p=new(function(){function t(){Object(s.a)(this,t)}return Object(l.a)(t,[{key:"getAuthToken",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,c,s,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="auth-token",n="last-auth-time",a=localStorage.getItem(t),c=new Date(localStorage.getItem(n)),s=new Date-c>=36e5,a&&!s){e.next=12;break}return e.next=8,this.authenticate();case 8:l=e.sent,a=l.access_token,localStorage.setItem(t,a),localStorage.setItem(n,(new Date).toISOString());case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"authenticate",value:function(){var t=Object(c.a)(r.a.mark((function t(){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new e("".concat("c64550a797cb4fc9931f45b4ca0e8c21",":").concat("7c4d4382f48a40168a04273de0b91183")).toString("base64"),t.next=3,i.a.post("https://accounts.spotify.com/api/token",m.a.stringify({grant_type:"client_credentials"}),{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+n}});case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getConfig",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAuthToken();case 2:return t=e.sent,n={headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}},e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}())}).call(this,n(81).Buffer)},44:function(e,t,n){e.exports=n.p+"static/media/spotify_logo.8499c8e5.svg"},50:function(e,t,n){e.exports=n(86)},55:function(e,t,n){},60:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(43),s=n.n(c);n(55);var l=function(e){var t=e.handleInput,n=e.search;return r.a.createElement("section",{className:"searchbox-wrap"},r.a.createElement("input",{type:"text",placeholder:"Search for music...",className:"searchbox",onChange:t,onKeyPress:n}))};var o=function(e){var t=e.result,n=e.openPopup;return r.a.createElement("div",{className:"result",onClick:function(){return n(t.id)}},r.a.createElement("img",{src:t.images[0].url}),r.a.createElement("h3",null,t.name))};var i=function(e){var t=e.results,n=e.openPopup;return r.a.createElement("section",{className:"results"},t.map((function(e){return r.a.createElement(o,{key:e.id,result:e,openPopup:n})})))};var u=function(e){var t=e.selected,n=e.closePopup;return r.a.createElement("section",{className:"popup"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.name," ",r.a.createElement("span",null,"(",t.artists[0].name,")")),r.a.createElement("p",{className:"rating"},"Release Date: ",t.release_date," "),r.a.createElement("div",{className:"plot"},r.a.createElement("img",{src:t.images[0].url}),r.a.createElement("p",null,t.name)),r.a.createElement("button",{className:"close",onClick:n},"Close")))},m=n(10),p=n(11),f=n(18),h=n(17),v=n(19),d=n(25),b=n(44),g=n.n(b),E=n(21),w=n(26);function j(){var e=Object(d.a)(["\n    margin: 0 0 1.2rem;\n    font-size: 3rem; \n    font-weight: 700;\n    line-height: 1.1em;\n\n"]);return j=function(){return e},e}function y(){var e=Object(d.a)(["\n\n    width: 10rem;\n    height: 3.5rem;\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n"]);return y=function(){return e},e}function O(){var e=Object(d.a)(["\n    .signIn-btn {\n        right:0;\n        margin: 1.125rem 3% 0;\n        padding: 0.4375rem 1.0625rem;\n        font-weight: 400;\n        line-height: normal;\n        border-radius: 0.1875rem;\n        font-size: 1rem;\n        background: var(--main-green);\n        position: absolute;\n        translate: transform(-50%, -50%);\n        cursor: pointer;\n        transition: background 0.2s ease-in;    \n        &:hover {\n            background:var(--main-green-hover);\n        }\n    }\n\n    .header-top {\n        position: relative;\n        height: 10rem;\n        z-index: 1;\n    }\n    .header-content{\n        width: 65%;\n        position: relative;\n        margin: 4.5rem auto 0;\n        display: flex;\n        justify-content: center;\n        align-content: center;\n        text-align: center;\n        flex-direction: column;\n        z-index: 1;\n    }\n"]);return O=function(){return e},e}var k=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{className:"header-container"},r.a.createElement("div",{className:"header-top"},r.a.createElement(N,{src:g.a}),r.a.createElement(E.b,{className:"signIn-btn",to:"/"},"Sign In")),r.a.createElement("div",{className:"header-content"},r.a.createElement(C,null,"Your Personal Music Gallery")))}}]),t}(a.Component),x=w.a.div(O()),N=w.a.img(y()),C=w.a.h1(j()),I=n(16);function S(){return r.a.createElement("svg",{class:"tab-home",viewBox:"0 1 511 511.999",width:"511pt",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"}))}function P(){return r.a.createElement("svg",{class:"tab-search",viewBox:"0 1 511 511.999",width:"511pt",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"}))}n(60);var z=n(2),B=n.n(z),A=n(6),D=n(8),_=n(24),T=n(13),R=n.n(T),J=(n(29),n(20));var W=function(){var e=Object(a.useState)({s:"",results:[],selected:{}}),t=Object(_.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(D.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!=t.key){e.next=5;break}return e.next=3,J.a.getConfig();case 3:a=e.sent,R.a.get("https://api.spotify.com/v1/search?q="+n.s+"&type=album",a).then((function(e){var t=e.data,n=t.albums.items;console.log("finished"),console.log(t.albums.items),c((function(e){return Object(A.a)({},e,{results:n})}))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(D.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.getConfig();case 2:n=e.sent,R()("https://api.spotify.com/v1/albums/"+t,n).then((function(e){var t=e.data;c((function(e){return Object(A.a)({},e,{selected:t})}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement(l,{handleInput:function(e){var t=e.target.value;c((function(e){return Object(A.a)({},e,{s:t})}))},search:s}),r.a.createElement("h4",null,"Newest"),r.a.createElement("h5",null,"Oldest"),r.a.createElement("h6",null),r.a.createElement(i,{results:n.results,openPopup:o}),"undefined"!=typeof n.selected.name&&r.a.createElement(u,{selected:n.selected,closePopup:function(){c((function(e){return Object(A.a)({},e,{selected:{}})}))}})))};var q=function(e){var t=e.cell,n=e.openPopup;return r.a.createElement("div",{className:"cell",onClick:function(){return n(t.id)}},r.a.createElement("img",{src:t.images[2].url}),r.a.createElement("h3",null,t.name),r.a.createElement("p",null,"Release Date:  ",t.release_date))};var G=function(e){var t=e.list,n=e.openPopup;return r.a.createElement("section",{className:"list"},t.map((function(e){return r.a.createElement(q,{key:e.id,cell:e,openPopup:n})})))},K=n(32),M=n.n(K);var Y=function(){var e=Object(a.useState)({s:"",list:[],selected:{}}),t=Object(_.a)(e,2),n=t[0],c=t[1],s="https://api.spotify.com/v1/browse/new-releases";function l(){return(l=Object(D.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.getConfig();case 2:t=e.sent,R.a.get(s,t).then((function(e){var t=e.data,n=t.albums.items;console.log("finished"),console.log(t.albums.items),c((function(e){return Object(A.a)({},e,{list:n})}))}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]);var o=function(){var e=Object(D.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.getConfig();case 2:n=e.sent,R()("https://api.spotify.com/v1/albums/"+t,n).then((function(e){var t=e.data;c((function(e){return Object(A.a)({},e,{selected:t})}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement("div",{className:"descending-btn"},r.a.createElement("h5",{onClick:function(e){console.log("asecend clicked"),M.a.reverse(n.list),c((function(e){return Object(A.a)({},e)}))}},"Ascending"),r.a.createElement("h6",{onClick:function(e){console.log("descend clicked"),M.a.reverse(n.list),c((function(e){return Object(A.a)({},e)}))}},"Descending")),r.a.createElement(G,{list:n.list,openPopup:o}),"undefined"!=typeof n.selected.name&&r.a.createElement(u,{selected:n.selected,closePopup:function(){c((function(e){return Object(A.a)({},e,{selected:{}})}))}})))},$=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={tabIndex:0},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(I.d,{className:"tabs",selectedIndex:this.state.tabIndex,onSelect:function(t){return e.setState({tabIndex:t})}},r.a.createElement(I.b,{className:"tab-nav-container"},r.a.createElement(I.a,{className:"".concat(0===this.state.tabIndex?"tab-selected active":null)},r.a.createElement(S,null),r.a.createElement("p",{style:{marginBottom:"1.875rem"}},"New Releases")),r.a.createElement(I.a,{className:"".concat(1===this.state.tabIndex?"tab-selected active":null)},r.a.createElement(P,null),r.a.createElement("p",{style:{marginBottom:"1.875rem"}},"Search"))),r.a.createElement(I.c,null,r.a.createElement(Y,null)),r.a.createElement(I.c,null,r.a.createElement(W,null))))}}]),t}(a.Component),F=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement($,null))}}]),t}(a.Component),H=n(14);var L=function(){return r.a.createElement(H.c,null,r.a.createElement(H.a,{path:"/",component:F}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.118d6368.chunk.js.map