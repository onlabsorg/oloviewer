(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["swan_modules/text"],{fd83:function(r,t){function n(r){if("string"!==typeof r)throw new Error("String type expected")}function e(r){if(Number.isNaN(r))throw new Error("Number type expected")}t.find=function(r,t){return n(r),n(t),r.indexOf(t)},t.rfind=function(r,t){return n(r),n(t),r.lastIndexOf(t)},t.lower=function(r){return n(r),r.toLowerCase()},t.upper=function(r){return n(r),r.toUpperCase()},t.char=function(...r){for(let t of r)e(t);return String.fromCharCode(...r)},t.code=function(r){return n(r),Array.from(r).map(r=>r.charCodeAt(0))},t.slice=function(r,t,i){return n(r),e(t),void 0!==i&&e(i),r.slice(t,i)},t.split=function(r,t){return n(r),n(t),r.split(t)},t.replace=(r,t,e)=>{n(r),n(t),n(e);while(-1!==r.indexOf(t))r=r.replace(t,e);return r},t.trim=r=>(n(r),r.trim()),t.trimStart=r=>(n(r),r.trimStart()),t.trimEnd=r=>(n(r),r.trimEnd())}}]);
//# sourceMappingURL=text.f5e06ac2.js.map