import o from"tiny-emitter";import t from"virtual-scroll";function e(o,t){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},e(o,t)}var r=/*#__PURE__*/function(o){var r,l;function i(e){var r,l,i,n,s=void 0===e?{}:e,c=s.lerp,a=void 0===c?.1:c,d=s.smooth,h=void 0===d||d;(n=o.call(this)||this).onResize=function(o){var t=o[0];t&&(n.maxScroll=t.contentRect.height-n.windowHeight)},n.onWindowResize=function(){n.windowHeight=window.innerHeight,n.windowWidth=window.innerWidth},n.onWheel=function(o){n.smooth&&!o.ctrlKey&&o.preventDefault()},n.onVirtualScroll=function(o){var t,e;n.stopped||(n.targetScroll-=o.deltaY,n.targetScroll=(e=n.maxScroll,(t=n.targetScroll)<0?0:t>e?e:t))},n.onScroll=function(o){n.scrolling&&n.smooth||(n.targetScroll=n.scroll=window.scrollY,n.emit("scroll",{scroll:n.scroll}))},n.lerp=a,n.smooth=h,document.addEventListener("wheel",n.onWheel,{passive:!1}),window.addEventListener("scroll",n.onScroll,!1),window.addEventListener("resize",n.onWindowResize,!1);var u=(null==(r=navigator)||null==(l=r.userAgentData)?void 0:l.platform)||(null==(i=navigator)?void 0:i.platform)||"unknown";return n.virtualScroll=new t({firefoxMultiplier:50,mouseMultiplier:u.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!0}),n.virtualScroll.on(n.onVirtualScroll),n.onWindowResize(),n.maxScroll=document.body.offsetHeight-n.windowHeight,n.resizeObserver=new ResizeObserver(n.onResize),n.resizeObserver.observe(document.body),n.targetScroll=n.scroll=window.scrollY,n}l=o,(r=i).prototype=Object.create(l.prototype),r.prototype.constructor=r,e(r,l);var n=i.prototype;return n.start=function(){this.stopped=!1},n.stop=function(){this.stopped=!0},n.destroy=function(){document.removeEventListener("wheel",this.onWheel,{passive:!1}),window.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),this.virtualScroll.destroy(),this.resizeObserver.disconnect()},n.raf=function(){var o;this.smooth&&!this.stopped&&(this.scroll=(1-(o=this.lerp))*this.scroll+o*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=this.targetScroll),this.scrolling&&(window.scrollTo(0,this.scroll),this.emit("scroll",{scroll:this.scroll})),this.scrolling=this.scroll!==this.targetScroll)},n.scrollTo=function(o,t){var e,r=(void 0===t?{}:t).offset,l=void 0===r?0:r;if("number"==typeof o)e=o;else if("#top"===o)e=0;else if("#bottom"===o)e=this.maxScroll;else{var i;if("string"==typeof o)i=document.querySelector(o);else{if(null==o||!o.nodeType)return;i=o}if(!o)return;e=i.getBoundingClientRect().top+this.scroll}this.targetScroll=e+=l,this.scrolling=!0,this.smooth||(this.scroll=e)},i}(o);export{r as default};
//# sourceMappingURL=lenis.esm.js.map
