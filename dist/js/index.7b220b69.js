(function(e){function t(t){for(var o,a,i=t[0],u=t[1],c=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={index:0},s=[];function a(e){return i.p+"js/"+({"swan_modules/date":"swan_modules/date","swan_modules/debug":"swan_modules/debug","swan_modules/dict":"swan_modules/dict","swan_modules/http":"swan_modules/http","swan_modules/json":"swan_modules/json","swan_modules/list":"swan_modules/list","swan_modules/markdown":"swan_modules/markdown","swan_modules/math":"swan_modules/math","swan_modules/path":"swan_modules/path","swan_modules/text":"swan_modules/text"}[e]||e)+"."+{"swan_modules/date":"2994bb07","swan_modules/debug":"4325bdff","swan_modules/dict":"039c5267","swan_modules/http":"48e1720d","swan_modules/json":"a36a0746","swan_modules/list":"894aaa54","swan_modules/markdown":"84e1e65c","swan_modules/math":"33790bfb","swan_modules/path":"8bbf803f","swan_modules/text":"f5e06ac2"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var c=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",c.name="ChunkLoadError",c.type=o,c.request=s,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"272d":function(e,t,n){},"3e6d":function(e,t,n){"use strict";n("272d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-card",{staticClass:"olo-document centered",attrs:{rounded:"",elevation:"3"}},[n("olo-viewer",{attrs:{html:e.docText}})],1),n("v-footer",{staticClass:"centered text-center",attrs:{id:"olo-footer"}},[n("i",[e._v("oloViewer v"+e._s(e.version)+" - Copyright 2021 OnLabs.org")])])],1)],1)},s=[],a=n("1da1"),i=(n("96cf"),n("fb6a"),n("b69a")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"olo-viewer",domProps:{innerHTML:e._s(e.saneHTML)}})},c=[],l=n("c0c4"),d=n.n(l),p={name:"olo-viewer",props:["html"],computed:{saneHTML:function(){return d.a.sanitize(this.html)}}},f=p,m=(n("3e6d"),n("2877")),h=n("6544"),v=n.n(h),w=n("a523"),b=Object(m["a"])(f,u,c,!1,null,null,null),_=b.exports;v()(b,{VContainer:w["a"]});var g={name:"App",props:["store"],components:{oloViewer:_},data:function(){return{docId:"",docPath:"",docSource:"",evaluateDoc:function(){return{text:"",data:{}}},docText:"",docData:{},version:n("9224").version}},computed:{docContext:function(){return this.store?this.store.createContextFromId(this.docId):{}}},watch:{docContext:function(){this.render()}},methods:{updateHash:function(){var e=location.hash.slice(1);e?this.docId=e:this.setHash("/")},setHash:function(e){location.hash=i["normalize"]("/".concat(e))},render:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.docContext.__path__===e.docPath){t.next=6;break}return e.docPath=e.docContext.__path__,t.next=4,e.store.read(e.docPath);case 4:e.docSource=t.sent,e.evaluateDoc=e.store.parseDocument(e.docSource);case 6:return t.next=8,e.evaluateDoc(e.docContext);case 8:n=t.sent,o=n.text,r=n.data,e.docText=o,e.docData=r;case 13:case"end":return t.stop()}}),t)})))()}},mounted:function(){window.addEventListener("hashchange",this.updateHash.bind(this)),this.updateHash()}},x=g,y=(n("034f"),n("7496")),j=n("b0af"),O=n("553a"),C=n("f6c45"),P=Object(m["a"])(x,r,s,!1,null,null,null),T=P.exports;v()(P,{VApp:y["a"],VCard:j["a"],VFooter:O["a"],VMain:C["a"]});var k=n("f309");o["a"].use(k["a"]);var M=new k["a"]({}),S=n("81ae");o["a"].config.productionTip=!1,S["Viewer"]=function(e,t){return new o["a"]({vuetify:M,render:function(e){return e(T,{props:{store:t}})}}).$mount(e)},window.olo=S;t["default"]=S["Viewer"]},"85ec":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"name":"@onlabsorg/oloviewer","version":"0.2.1","description":"A HTTP client and Stilo plugin for rendering olojs documents in the browser.","main":"index.js","repository":{"type":"git","url":"git+https://github.com/onlabsorg/oloviewer.git"},"author":"Marcello Del Buono (m.delbuono@gmail.com)","license":"MIT","bugs":{"url":"https://github.com/onlabsorg/oloviewer/issues"},"homepage":"https://github.com/onlabsorg/oloviewer#readme","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@onlabsorg/olojs":"0.21.x","core-js":"^3.6.5","dompurify":"^2.3.3","vue":"^2.6.11","vuetify":"^2.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"~4.5.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"~4.5.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-vue":"^6.2.2","sass":"~1.32.0","sass-loader":"^10.0.0","vue-cli-plugin-vuetify":"~2.4.3","vue-template-compiler":"^2.6.11","vuetify-loader":"^1.7.0"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"parserOptions":{"parser":"babel-eslint"},"rules":{}},"browserslist":["> 1%","last 2 versions","not dead"],"publishConfig":{"access":"public"}}')}});
//# sourceMappingURL=index.7b220b69.js.map