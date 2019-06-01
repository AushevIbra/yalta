!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Embed=t():e.Embed=t()}(window,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],i=!0,n=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{!i&&l.return&&l.return()}finally{if(n)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=r(1),l=function(){function e(t){var r=t.data,i=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=i,this._data={},this.element=null,this.data=r}return o(e,[{key:"render",value:function(){var t=e.services[this.data.service].html,r=document.createElement("div"),i=document.createElement("div"),n=document.createElement("template");return i.contentEditable=!0,i.classList.add(this.api.styles.input),i.dataset.placeholder="Enter a caption",i.innerHTML=this.data.caption,n.innerHTML=t,n.content.firstChild.setAttribute("src",this.data.embed),n.content.firstChild.classList.add(this.api.styles.block),r.appendChild(n.content.firstChild),r.appendChild(i),this.element=r,r}},{key:"save",value:function(){var e=this.element.querySelector("."+this.api.styles.input);return this.data={caption:e.innerHTML},this.data}},{key:"data",set:function(e){if(!e instanceof Object)throw Error("Embed Tool data should be object");var t=e.service,r=e.source,i=e.embed,n=e.width,o=e.height,a=e.caption,l=void 0===a?"":a;this._data={service:this.data.service||t,source:this.data.source||r,embed:this.data.embed||i,width:this.data.width||n,height:this.data.height||o,caption:this.data.caption||l}},get:function(){return this._data}}],[{key:"pasteHandler",value:function(t,r){var i=e.services[r],n=i.regex,o=i.embedUrl,a=i.width,l=i.height,d=i.id,u=void 0===d?function(e){return e.shift()}:d,c=n.exec(t).slice(1);return{service:r,source:t,embed:o.replace(/<\%\= remote\_id \%\>/g,u(c)),width:a,height:l}}},{key:"prepare",value:function(t){var r=t.config,o=(void 0===r?{}:r).services,l=void 0===o?{}:o,d=Object.entries(a),u=Object.entries(l).filter(function(e){var t=n(e,2),r=(t[0],t[1]);return"boolean"==typeof r&&!0===r}).map(function(e){return n(e,1)[0]}),c=Object.entries(l).filter(function(e){var t=n(e,2),r=(t[0],t[1]);return"object"===(void 0===r?"undefined":i(r))}).filter(function(t){var r=n(t,2),i=(r[0],r[1]);return e.checkServiceConfig(i)}).map(function(e){var t=n(e,2),r=t[0],i=t[1];return[r,{regex:i.regex,embedUrl:i.embedUrl,html:i.html,height:i.height,width:i.width,id:i.id}]});u.length&&(d=d.filter(function(e){var t=n(e,1)[0];return u.includes(t)})),d.concat(c),e.services=d.reduce(function(e,t){var r=n(t,2),i=r[0],o=r[1];return i in e?(e[i]=Object.assign({},e[i],o),e):(e[i]=o,e)},{}),e.patterns=d.reduce(function(e,t){var r=n(t,2),i=r[0],o=r[1];return e[i]=o.regex,e},{})}},{key:"checkServiceConfig",value:function(e){var t=e.regex,r=e.embedUrl,i=e.html,n=e.height,o=e.width,a=e.id,l=t&&t instanceof RegExp&&r&&r instanceof String&&i&&i instanceof String;return l=(l=(l=l&&(void 0===a||a instanceof Function))&&(void 0===n||Number.isFinite(n)))&&(void 0===o||Number.isFinite(o))}},{key:"onPaste",get:function(){return{patterns:e.patterns,patternHandler:e.pasteHandler}}}]),e}();e.exports=l},function(e,t,r){"use strict";var i=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],i=!0,n=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{!i&&l.return&&l.return()}finally{if(n)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.exports={vimeo:{regex:/(?:http[s]?:\/\/)?(?:www.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,embedUrl:"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",html:'<iframe style="width:100%;" height="320" frameborder="0"></iframe>',height:320,width:580},youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580,id:function(e){var t=i(e,2),r=t[0],n=t[1];if(!n&&r)return r;var o={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};return n=n.slice(1).split("&").map(function(e){var t=e.split("="),n=i(t,2),a=n[0],l=n[1];if(r||"v"!==a){if(o[a])return o[a]+"="+l}else r=l}).filter(function(e){return!!e}),r+"?"+n.join("&")}},coub:{regex:/https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,embedUrl:"https://coub.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},vine:{regex:/https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,embedUrl:"https://vine.co/v/<%= remote_id %>/embed/simple/",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},imgur:{regex:/https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,embedUrl:"http://imgur.com/<%= remote_id %>/embed",html:'<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',height:500,width:540},gfycat:{regex:/https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,embedUrl:"https://gfycat.com/ifr/<%= remote_id %>",html:"<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",height:436,width:580},"twitch-channel":{regex:/https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,embedUrl:"https://player.twitch.tv/?channel=<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"twitch-video":{regex:/https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,embedUrl:"https://player.twitch.tv/?video=v<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"yandex-music-album":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,embedUrl:"https://music.yandex.ru/iframe/#album/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',height:400,width:540},"yandex-music-track":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#track/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',height:100,width:540,id:function(e){return e.join("/")}},"yandex-music-playlist":{regex:/https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',height:400,width:540,id:function(e){return e.join("/")}},codepen:{regex:/https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,embedUrl:"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",html:"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:300,width:600,id:function(e){return e.join("/embed/")}}}}])});
