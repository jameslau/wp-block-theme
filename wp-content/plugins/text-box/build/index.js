!function(){"use strict";var e,r={273:function(){var e=window.wp.blocks,r=window.wp.element,n=window.wp.i18n,t=window.wp.blockEditor;(0,e.registerBlockType)("gutenbergblocks/text-box",{edit:function(){return(0,r.createElement)("p",(0,t.useBlockProps)(),(0,n.__)("Boilerplate – hello from the editor!","boilerplate"))},save:function(){return(0,r.createElement)("p",t.useBlockProps.save(),(0,n.__)("Boilerplate – hello from the saved content!","boilerplate"))}})}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,t),i.exports}t.m=r,e=[],t.O=function(r,n,o,i){if(!n){var l=1/0;for(f=0;f<e.length;f++){n=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(u=!1,i<l&&(l=i));if(u){e.splice(f--,1);var a=o();void 0!==a&&(r=a)}}return r}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[n,o,i]},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={826:0,46:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,i,l=n[0],u=n[1],c=n[2],a=0;if(l.some((function(r){return 0!==e[r]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var f=c(t)}for(r&&r(n);a<l.length;a++)i=l[a],t.o(e,i)&&e[i]&&e[i][0](),e[l[a]]=0;return t.O(f)},n=self.webpackChunkboilerplate=self.webpackChunkboilerplate||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var o=t.O(void 0,[46],(function(){return t(273)}));o=t.O(o)}();