if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>i(e,l),t={module:{uri:l},exports:o,require:a};s[l]=Promise.all(n.map((e=>t[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-a8f6cb68"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView.630ee90c.css",revision:null},{url:"assets/AboutView.a82773a1.js",revision:null},{url:"assets/index.31a57e3a.css",revision:null},{url:"assets/index.69f3b059.js",revision:null},{url:"assets/leaflet-src.7510adb6.js",revision:null},{url:"assets/leaflet-src.esm.1c3fadee.js",revision:null},{url:"assets/marker-icon-2x.e233d1a6.js",revision:null},{url:"assets/marker-icon.34d9a2d9.js",revision:null},{url:"assets/marker-shadow.ddd1f13b.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"4694bcf364e3195ca53815121c04a765"},{url:"manifest-icon-192.maskable.png",revision:"88c2a5aac6d3e4168e472a48e58970f7"},{url:"icon.svg",revision:"b6ede24939808f44a2198881f09ec599"},{url:"manifest-icon-512.maskable.png",revision:"728212dfae35f196195b458d2d7bf23f"},{url:"manifest.webmanifest",revision:"bdfa46b3a903c8664ba2f5c5afb8ab50"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*/,new e.NetworkFirst,"GET")}));
