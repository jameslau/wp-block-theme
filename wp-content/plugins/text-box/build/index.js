!function(){var e,t={906:function(e,t,n){"use strict";var r=window.wp.blocks,o=window.wp.element,a=window.wp.i18n,i=window.wp.blockEditor,l=window.wp.components;const{__Visualizer:u}=l.__experimentalBoxControl;function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var c=n(184),f=n.n(c);(0,r.registerBlockType)("gutenbergblocks/text-box",{edit:function(e){const{attributes:t,setAttributes:n}=e,{text:r,alignment:l,style:s}=t;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.BlockControls,null,(0,o.createElement)(i.AlignmentToolbar,{value:l,onChange:e=>{n({alignment:e})}})),(0,o.createElement)("div",(0,i.useBlockProps)({className:`text-box-align-${l}`}),(0,o.createElement)(i.RichText,{className:"text-box-title",onChange:e=>{n({text:e})},value:r,placeholder:(0,a.__)("Your Text","text-box"),tagName:"h4",allowedFormats:[]}),(0,o.createElement)(u,{values:s&&s.spacing&&s.spacing.padding,showValues:s&&s.visualizers&&s.visualizers.padding})))},save:function(e){let{attributes:t}=e;const{text:n,alignment:r}=t,a=f()(`text-box-align-${r}`);return(0,o.createElement)(i.RichText.Content,s({},i.useBlockProps.save({className:a}),{tagName:"h4",value:n}))}})},184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],a=e[c][2];for(var l=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],l=n[1],u=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var c=u(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return r.O(c)},n=self.webpackChunkboilerplate=self.webpackChunkboilerplate||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[46],(function(){return r(906)}));o=r.O(o)}();