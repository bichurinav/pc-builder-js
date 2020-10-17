"use strict";function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function i(a,s,c){function l(e,t){if(!s[e]){if(!a[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(u)return u(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var r=s[e]={exports:{}};a[e][0].call(r.exports,function(t){return l(a[e][1][t]||t)},r,r.exports,i,a,s,c)}return s[e].exports}for(var u="function"==typeof require&&require,t=0;t<c.length;t++)l(c[t]);return l}({1:[function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){function t(){if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.formAddComponent=document.querySelector("#form-add-component"),!this.formAddComponent)throw new Error("Не была найдена форма #form-add-component");if(this.formAddComponentSelect=document.querySelector("#form-add-component-select"),!this.formAddComponentSelect)throw new Error("Не был найден select #form-add-component-select у формы");if(this.formAddComponentUpload=document.querySelector("#form-add-component-upload"),!this.formAddComponentUpload)throw new Error("Не был найден upload-изображений #form-add-component-select у формы");if(this.fields=document.querySelectorAll(".form-add-component__form input"),!this.formAddComponentUpload)throw new Error("Не были найдены поля у формы");if(this.adminPanel=document.querySelector(".admin-panel"),!this.adminPanel)throw new Error("Не были найден .admin-panel");if(this.btnShow=document.querySelector(".admin-panel__open"),!this.btnShow)throw new Error("Не были найден .admin-panel__open");if(this.catalog=document.querySelector(".catalog"),!this.catalog)throw new Error("Не найден .catalog");this.catalog.classList.add("catalog_panelOpen"),this.ajaxURL="modules/Component.php",this.addEventListener()}var e,n,o;return e=t,(n=[{key:"changeComponent",value:function(t){document.location.href="/?component=".concat(t.target.value)}},{key:"uploadImage",value:function(t){var e=document.querySelector(".upload-file__text"),n=t.target.files[0];5242880<n.size?e.textContent="Изображение не более 5 МБ.":e.textContent=n.name}},{key:"addComponentInDB",value:function(t){var e;t.event.preventDefault(),this.isFormValid(this.fields)&&((e=new FormData(t.event.target)).append("action",t.action),fetch(t.url,{method:"POST",body:e}).then(function(t){return t.text()}).then(function(t){t&&setTimeout(function(){document.location.href="/?component=".concat(t)},0)}))}},{key:"isFormValid",value:function(t){var n=[];return t.forEach(function(t){function e(t){return"file"===t.getAttribute("type")}""===t.value?(t.nextElementSibling.classList.contains("field__error")&&t.nextElementSibling.classList.add("error"),e(t)&&t.nextElementSibling.children[1].classList.add("error"),n.push(t)):(t.nextElementSibling.classList.remove("error"),e(t)&&t.nextElementSibling.children[1].classList.remove("error"))}),!n.length}},{key:"addEventListener",value:function(){var e=this;this.formAddComponentSelect.addEventListener("change",function(t){return e.changeComponent(t)}),this.formAddComponentUpload.addEventListener("change",function(t){return e.uploadImage(t)}),this.formAddComponent.addEventListener("submit",function(t){return e.addComponentInDB({action:"add",event:t,url:e.ajaxURL})}),this.btnShow.addEventListener("click",function(){e.adminPanel.classList.toggle("admin-panel_active"),e.catalog.classList.toggle("catalog_panelOpen"),e.adminPanel.classList.contains("admin-panel_active")?(e.btnShow.innerHTML="&#10006;",e.btnShow.style.fontSize="16px"):(e.btnShow.textContent="+",e.btnShow.style.fontSize="28px")})}}])&&r(e.prototype,n),o&&r(e,o),t}();n.default=o},{}],2:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,r=(o=t("./AddComponent"))&&o.__esModule?o:{default:o};function i(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.formAddComponent=new r.default}n.default=i},{"./AddComponent":1}],3:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t("events")),r=i(t("./LoadComponents"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n,o,r=l(i);return e=a?(t=l(this).constructor,Reflect.construct(r,arguments,t)):r.apply(this,arguments),n=this,!(o=e)||"object"!==s(o)&&"function"!=typeof o?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):o}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,o.default);var t=c(n);function n(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=t.call(this)).loadComponents=new r.default,e.on("utils",function(t){e.loadComponents.emit("utils",t)}),e}return n}();n.default=u},{"./LoadComponents":4,events:6}],4:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i=(o=t("events"))&&o.__esModule?o:{default:o};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n,o,r=u(i);return e=a?(t=u(this).constructor,Reflect.construct(r,arguments,t)):r.apply(this,arguments),n=this,!(o=e)||"object"!==s(o)&&"function"!=typeof o?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):o}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var r=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(r,i.default);var t,e,n,o=l(r);function r(){var e;if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this)).catalogContent=document.querySelector(".catalog-content"),!e.catalogContent)throw new Error("Не найден .catalog-content");return e.showComponents=6,e.countComponents=0,e.offset=0,e.components=[],e.action="load",e.ajaxURL="modules/Component.php",e.imagesPath="template/images",e.loadComponentFromDB(e.action,e.ajaxURL,e.offset),e.on("utils",function(t){e.utils=t}),e}return t=r,(e=[{key:"loadComponentFromDB",value:function(t,e,n){var o=this,r=2<arguments.length&&void 0!==n?n:0,i=new FormData;i.append("action",t),i.append("component",this.getParamURL("component")),i.append("offset",Number(r)),i.append("limit",Number(this.showComponents));var a=fetch(e,{method:"POST",body:i});this.setPreloader(),a.then(function(t){return t.json()}).then(function(t){setTimeout(function(){o.render(t)},500)})}},{key:"render",value:function(t){var r=this;if(this.catalogContent.innerHTML="",this.catalogContent.insertAdjacentHTML("afterbegin",'\n            <div class="catalog-content-items"></div>\n        '),this.components=t.items,this.countComponents=Number(t.count),this.catalog=document.querySelector(".catalog-content-items"),!this.catalog)throw new Error("Не найден .catalog-content-items");this.components?(this.components.forEach(function(t){var e=[];for(var n in t)"name"!==n&&"id"!==n&&"image"!==n&&"Цена"!==n&&e.push("<span><b>".concat(n.replaceAll("_"," "),"</b>: ").concat(t[n],"</span><br>"));var o=e.filter(function(t,e){return e<=2});r.catalog.innerHTML+='\n            <div class="card catalog-content__item">\n                <div class="card__img">\n                    <img width="100" src="'.concat(t.image,'">\n                </div>\n                <div class="card__content">\n                    <h2 class="card__title">').concat(t.name,'</h2>\n                    <div class="card__preview-props">\n                        ').concat(o.join(""),'\n                        <button class="btn card__btn-more">Все характеристики</button>\n                    </div>\n                    <span class="card__price">&asymp; ').concat(t["Цена"],'</span>\n                </div>\n                <button class="btn card__btn-box">\n                    <img src="').concat(r.imagesPath,'/box.svg">\n                </button>\n                <div class="card__props">\n                    <div class="card__props-inner">\n                        ').concat(e.join(""),'\n                        <button class="btn card__props-close">&#10006;</button>\n                    </div>\n                </div>\n            </div>\n            ')}),this.btnsProps=document.querySelectorAll(".card__btn-more"),this.btnsProps.forEach(function(t){t.addEventListener("click",function(){var n=r.utils.findParent(t,"card").querySelector(".card__props");n.style.display="block",r.utils.findParent(n,"catalog-content__item").addEventListener("click",function(t){var e=t.path.filter(function(t){return t instanceof HTMLElement});t.target.classList.contains("card__btn-more")||e.find(function(t){return t.classList.contains("card__props-inner")})&&!t.target.classList.contains("card__props-close")||(n.style.display="none")})})}),this.countComponents>this.showComponents&&this.setPagination()):this.catalog.innerHTML="<b>Пусто :(</b>"}},{key:"setPagination",value:function(){var n=this;this.pagination&&this.pagination.remove();function o(t,e){var n=null;return n=t%e!=0?Math.ceil(t/e):t/e,n}var t=this.pagination=document.createElement("div");t.classList.add("catalog-content-pagination"),this.catalog.insertAdjacentElement("afterEnd",t),t.insertAdjacentHTML("afterBegin",'\n            <button offset class="catalog-pagination__btn prev">Prev page</button>\n            <span class="catalog-pagination__pages">\n                '.concat(localStorage.getItem("page")," из ").concat(o(this.countComponents,this.showComponents),'\n            </span>\n            <button offset class="catalog-pagination__btn next">Next Page</button>\n        ')),t.querySelectorAll(".catalog-pagination__btn").forEach(function(e){e.addEventListener("click",function(){var t;e.classList.contains("next")?localStorage.getItem("page")<o(n.countComponents,n.showComponents)?localStorage.setItem("page",Number(localStorage.getItem("page"))+1):localStorage.setItem("page",1):1==localStorage.getItem("page")?localStorage.setItem("page",o(n.countComponents,n.showComponents)):localStorage.setItem("page",localStorage.getItem("page")-1),t="page",e.setAttribute("offset",Number(localStorage.getItem(t))*n.showComponents-n.showComponents),n.offset=e.getAttribute("offset"),n.loadComponentFromDB(n.action,n.ajaxURL,n.offset)})})}},{key:"setPreloader",value:function(){this.catalogContent.innerHTML="",this.catalogContent.insertAdjacentHTML("afterbegin",'\n            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="197px" height="197px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n            <circle cx="50" cy="50" r="0" fill="none" stroke="#0051a2" stroke-width="2">\n            <animate attributeName="r" repeatCount="indefinite" dur="1.2987012987012987s" values="0;35" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6493506493506493s"></animate>\n            <animate attributeName="opacity" repeatCount="indefinite" dur="1.2987012987012987s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6493506493506493s"></animate>\n            </circle>\n            <circle cx="50" cy="50" r="0" fill="none" stroke="#1b75be" stroke-width="2">\n            <animate attributeName="r" repeatCount="indefinite" dur="1.2987012987012987s" values="0;35" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>\n            <animate attributeName="opacity" repeatCount="indefinite" dur="1.2987012987012987s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>\n            </circle>\n            </svg>\n        ')}},{key:"getParamURL",value:function(t){var e=window.location.search;return!!(e=e.match(new RegExp(t+"=([^&=]+)")))&&e[1]}}])&&a(t.prototype,e),n&&a(t,n),r}();n.default=r},{events:6}],5:[function(t,e,n){var r=o(t("./Catalog/Catalog")),i=o(t("./Admin/Admin"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),localStorage.setItem("page",1),this.session=!1,this.session&&(this.admin=new i.default),this.catalog=new r.default,this.catalog.emit("utils",{findParent:this.findParent})}var e,n,o;return e=t,(n=[{key:"findParent",value:function(t,e){for(var n=t.parentNode;!n.classList.contains(e);)n=n.parentNode;return n}}])&&a(e.prototype,n),o&&a(e,o),t}())},{"./Admin/Admin":2,"./Catalog/Catalog":3}],6:[function(t,e,n){var c=Object.create||function(t){function e(){}return e.prototype=t,new e},a=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return n},i=Function.prototype.bind||function(t){var e=this;return function(){return e.apply(t,arguments)}};function o(){this._events&&Object.prototype.hasOwnProperty.call(this,"_events")||(this._events=c(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}((e.exports=o).EventEmitter=o).prototype._events=void 0,o.prototype._maxListeners=void 0;var r,s=10;try{var l={};Object.defineProperty&&Object.defineProperty(l,"x",{value:0}),r=0===l.x}catch(t){r=!1}function u(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function f(t,e,n,o){var r,i,a,s;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');return(r=t._events)?(r.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),r=t._events),i=r[e]):(r=t._events=c(null),t._eventsCount=0),i?("function"==typeof i?i=r[e]=o?[n,i]:[i,n]:o?i.unshift(n):i.push(n),i.warned||(s=u(t))&&0<s&&i.length>s&&(i.warned=!0,(a=new Error("Possible EventEmitter memory leak detected. "+i.length+' "'+String(e)+'" listeners added. Use emitter.setMaxListeners() to increase limit.')).name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=i.length,"object"===("undefined"==typeof console?"undefined":_typeof2(console))&&console.warn&&console.warn("%s: %s",a.name,a.message))):(i=r[e]=n,++t._eventsCount),t}function p(){if(!this.fired)switch(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:for(var t=new Array(arguments.length),e=0;e<t.length;++e)t[e]=arguments[e];this.listener.apply(this.target,t)}}function d(t,e,n){var o={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=i.call(p,o);return r.listener=n,o.wrapFn=r}function m(t,e,n){var o=t._events;if(!o)return[];var r=o[e];return r?"function"==typeof r?n?[r.listener||r]:[r]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(r):v(r,r.length):[]}function h(t){var e=this._events;if(e){var n=e[t];if("function"==typeof n)return 1;if(n)return n.length}return 0}function v(t,e){for(var n=new Array(e),o=0;o<e;++o)n[o]=t[o];return n}r?Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t||t<0||t!=t)throw new TypeError('"defaultMaxListeners" must be a positive number');s=t}}):o.defaultMaxListeners=s,o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(t,e,n,o){var r,i,a,s,c="error"===t,l=this._events;if(l)c=c&&null==l.error;else if(!c)return!1;if(c){if(1<arguments.length&&(r=e),r instanceof Error)throw r;var u=new Error('Unhandled "error" event. ('+r+")");throw u.context=r,u}if(!(i=l[t]))return!1;var f,p="function"==typeof i;switch(f=arguments.length){case 1:!function(t,e,n){if(e)t.call(n);else for(var o=t.length,r=v(t,o),i=0;i<o;++i)r[i].call(n)}(i,p,this);break;case 2:!function(t,e,n,o){if(e)t.call(n,o);else for(var r=t.length,i=v(t,r),a=0;a<r;++a)i[a].call(n,o)}(i,p,this,e);break;case 3:!function(t,e,n,o,r){if(e)t.call(n,o,r);else for(var i=t.length,a=v(t,i),s=0;s<i;++s)a[s].call(n,o,r)}(i,p,this,e,n);break;case 4:!function(t,e,n,o,r,i){if(e)t.call(n,o,r,i);else for(var a=t.length,s=v(t,a),c=0;c<a;++c)s[c].call(n,o,r,i)}(i,p,this,e,n,o);break;default:for(a=new Array(f-1),s=1;s<f;s++)a[s-1]=arguments[s];!function(t,e,n,o){if(e)t.apply(n,o);else for(var r=t.length,i=v(t,r),a=0;a<r;++a)i[a].apply(n,o)}(i,p,this,a)}return!0},o.prototype.on=o.prototype.addListener=function(t,e){return f(this,t,e,!1)},o.prototype.prependListener=function(t,e){return f(this,t,e,!0)},o.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.on(t,d(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.prependListener(t,d(this,t,e)),this},o.prototype.removeListener=function(t,e){var n,o,r,i,a;if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');if(!(o=this._events))return this;if(!(n=o[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=c(null):(delete o[t],o.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(r=-1,i=n.length-1;0<=i;i--)if(n[i]===e||n[i].listener===e){a=n[i].listener,r=i;break}if(r<0)return this;0===r?n.shift():function(t,e){for(var n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}(n,r),1===n.length&&(o[t]=n[0]),o.removeListener&&this.emit("removeListener",t,a||e)}return this},o.prototype.removeAllListeners=function(t){var e,n=this._events;if(!n)return this;if(!n.removeListener)return 0===arguments.length?(this._events=c(null),this._eventsCount=0):n[t]&&(0==--this._eventsCount?this._events=c(null):delete n[t]),this;if(0===arguments.length){for(var o,r=a(n),i=0;i<r.length;++i)"removeListener"!==(o=r[i])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=c(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(e)for(i=e.length-1;0<=i;i--)this.removeListener(t,e[i]);return this},o.prototype.listeners=function(t){return m(this,t,!0)},o.prototype.rawListeners=function(t){return m(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):h.call(t,e)},o.prototype.listenerCount=h,o.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]}},{}]},{},[5]);
//# sourceMappingURL=maps/main.js.map
