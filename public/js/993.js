"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[993],{5993:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(7294)),n=l(a(5839)),u=a(9680);t.default=function(e){var t=e.bookmark;return r.default.createElement(n.default,null,r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-md-12"},t.title&&r.default.createElement("div",{className:"card"},r.default.createElement("div",{className:"card-header"},t.title),r.default.createElement("div",{className:"card-body"},r.default.createElement("p",null,"URL: ",t.url),r.default.createElement("p",null,t.description),r.default.createElement("img",{src:t.img_url,alt:t.title}),r.default.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),console.log("Handle Save"),u.Inertia.post("/bookmarks/make-active",{id:t.id})}},"Save"))))))}},5839:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(7294));t.default=function(e){var t=e.children;return r.default.createElement("div",{className:"container"},t)}}}]);