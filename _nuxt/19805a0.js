(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{319:function(t,e,n){"use strict";n.r(e);n(88);var o=n(37),c=n(38),r=n(50),l=n(51),f=n(29),d=n(5),h=(n(15),n(30));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var o,c=arguments.length,r=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(c<3?o(r):c>3?o(e,n,r):o(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r},m=function(t){Object(r.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).secondsToCount=30,t.counter=null,t}return Object(c.a)(n,[{key:"onChangeCounter",value:function(t){var e=this;null!==t&&(t>0?setTimeout((function(){e.counter&&e.counter--}),1e3):console.log("TODO: Do code for notification sound"))}},{key:"mounted",value:function(){this.secondsToCount=this.timerSeconds||this.secondsToCount,this.counter=this.secondsToCount}}]),n}(h.Vue);y([Object(h.Watch)("counter",{immediate:!0})],m.prototype,"onChangeCounter",null),y([Object(h.Prop)({default:0})],m.prototype,"timerSeconds",void 0);var C=m=y([h.Component],m),O=n(16),component=Object(O.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.counter?n("div",{staticClass:"fixed bottom-0 left-0 right-0 z-50"},[n("div",{staticClass:"relative bg-gray-800 h-6"},[n("button",{staticClass:"flex items-center justify-center text-center w-6 h-6 cursor-pointer absolute left-0 z-50 bg-gray-800",attrs:{type:"button"},on:{click:function(e){t.counter=null}}},[n("i",{staticClass:"material-icons text-base"},[t._v("close")])]),t._v(" "),n("div",{staticClass:"bg-yellow-500 h-full flex-grow min-w-0",staticStyle:{transition:"width 0.2s"},style:{width:t.counter/t.secondsToCount*100+"%"}},[n("div",{staticClass:"absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center text-center text-sm",domProps:{textContent:t._s("00:"+t.counter)}})])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);