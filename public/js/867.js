"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[867],{9867:function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{u||null==r.return||r.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&l(t,e,r);return u(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=i(r(7294)),f=o(r(5839)),s=r(9680);t.default=function(){var e=n((0,c.useState)({link:"",title:"Some hardcoded title"}),2),t=e[0],r=e[1];return c.default.createElement("div",null,c.default.createElement(f.default,null,c.default.createElement("h1",null,"Add Pages"),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-8"},c.default.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(t),s.Inertia.post("/bookmarks/preview",t)}},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{htmlFor:"link"},"Link"),c.default.createElement("input",{type:"text",className:"form-control",name:"link",onChange:function(e){var n,a,l;r(Object.assign(Object.assign({},t),(n={},a=e.currentTarget.name,l=e.currentTarget.value,a in n?Object.defineProperty(n,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[a]=l,n)))},value:t.link})))))))}},5839:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(7294));t.default=function(e){var t=e.children;return a.default.createElement("div",{className:"container"},t)}}}]);