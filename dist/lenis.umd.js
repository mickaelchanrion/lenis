!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("tiny-emitter"),require("virtual-scroll")):"function"==typeof define&&define.amd?define(["tiny-emitter","virtual-scroll"],t):(e||self).lenis=t(e.tinyEmitter,e.virtualScroll)}(this,function(e,t){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=/*#__PURE__*/o(e),i=/*#__PURE__*/o(t);function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}/*#__PURE__*/
return function(e){var t,o;function r(t){var o,r,l,n,s=void 0===t?{}:t,c=s.lerp,d=void 0===c?.1:c,u=s.smooth,a=void 0===u||u;(n=e.call(this)||this).onResize=function(e){var t=e[0];t&&(n.maxScroll=t.contentRect.height-n.windowHeight)},n.onWindowResize=function(){n.windowHeight=window.innerHeight,n.windowWidth=window.innerWidth},n.onWheel=function(e){n.smooth&&!e.ctrlKey&&e.preventDefault()},n.onVirtualScroll=function(e){var t,o;n.stopped||(n.targetScroll-=e.deltaY,n.targetScroll=(o=n.maxScroll,(t=n.targetScroll)<0?0:t>o?o:t))},n.onScroll=function(e){n.scrolling&&n.smooth||(n.targetScroll=n.scroll=window.scrollY,n.emit("scroll",{scroll:n.scroll}))},n.lerp=d,n.smooth=a,document.addEventListener("wheel",n.onWheel,{passive:!1}),window.addEventListener("scroll",n.onScroll,!1),window.addEventListener("resize",n.onWindowResize,!1);var h=(null==(o=navigator)||null==(r=o.userAgentData)?void 0:r.platform)||(null==(l=navigator)?void 0:l.platform)||"unknown";return n.virtualScroll=new i.default({firefoxMultiplier:50,mouseMultiplier:h.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!0}),n.virtualScroll.on(n.onVirtualScroll),n.onWindowResize(),n.maxScroll=document.body.offsetHeight-n.windowHeight,n.resizeObserver=new ResizeObserver(n.onResize),n.resizeObserver.observe(document.body),n.targetScroll=n.scroll=window.scrollY,n}o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,l(t,o);var n=r.prototype;return n.start=function(){this.stopped=!1},n.stop=function(){this.stopped=!0},n.destroy=function(){document.removeEventListener("wheel",this.onWheel,{passive:!1}),window.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),this.virtualScroll.destroy(),this.resizeObserver.disconnect()},n.raf=function(){var e;this.smooth&&!this.stopped&&(this.scroll=(1-(e=this.lerp))*this.scroll+e*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=this.targetScroll),this.scrolling&&(window.scrollTo(0,this.scroll),this.emit("scroll",{scroll:this.scroll})),this.scrolling=this.scroll!==this.targetScroll)},n.scrollTo=function(e,t){var o,r=(void 0===t?{}:t).offset,i=void 0===r?0:r;if("number"==typeof e)o=e;else if("#top"===e)o=0;else if("#bottom"===e)o=this.maxScroll;else{var l;if("string"==typeof e)l=document.querySelector(e);else{if(null==e||!e.nodeType)return;l=e}if(!e)return;o=l.getBoundingClientRect().top+this.scroll}this.targetScroll=o+=i,this.scrolling=!0,this.smooth||(this.scroll=o)},r}(r.default)});
//# sourceMappingURL=lenis.umd.js.map
