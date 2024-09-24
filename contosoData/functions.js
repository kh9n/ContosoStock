/*! For license information please see functions.js.LICENSE.txt */
!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(r){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof w?e:w,o=Object.create(a.prototype),u=new S(n||[]);return i(o,"_invoke",{value:T(t,r,u)}),o}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var v="suspendedStart",m="suspendedYield",y="executing",d="completed",b={};function w(){}function k(){}function x(){}var g={};l(g,c,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(I([])));L&&L!==a&&o.call(L,c)&&(g=L);var C=x.prototype=w.prototype=Object.create(g);function B(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function F(e,r){function n(a,i,u,c){var s=p(e[a],e,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==t(l)&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,a){n(t,e,r,a)}))}return a=a?a.then(o,o):o()}})}function T(t,e,n){var a=v;return function(o,i){if(a===y)throw Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:r,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var c=G(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===v)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=y;var s=p(t,e,n);if("normal"===s.type){if(a=n.done?d:m,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=d,n.method="throw",n.arg=s.arg)}}}function G(t,e){var n=e.method,a=t.iterator[n];if(a===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,G(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=p(a,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,b;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,b):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(o.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return k.prototype=x,i(C,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:k,configurable:!0}),k.displayName=l(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,f,"GeneratorFunction")),t.prototype=Object.create(C),t},n.awrap=function(t){return{__await:t}},B(F.prototype),l(F.prototype,s,(function(){return this})),n.AsyncIterator=F,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new F(h(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},B(C),l(C,f,"Generator"),l(C,c,(function(){return this})),l(C,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=I,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return u.type="throw",u.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;R(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),b}},n}function r(t,e,r,n,a,o,i){try{var u=t[o](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,a)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function u(t){r(i,a,o,u,c,"next",t)}function c(t){r(i,a,o,u,c,"throw",t)}u(void 0)}))}}function a(){return(a=n(e().mark((function t(r,a){var o,i,u,s,f;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=3e3,"nvda"!=(u=r.toLowerCase())){t.next=6;break}i=34.31,t.next=43;break;case 6:if("tsla"!=u){t.next=10;break}i=85.06,t.next=43;break;case 10:if("amzn"!=u){t.next=14;break}i=37.11,t.next=43;break;case 14:if("googl"!=u){t.next=18;break}i=20.37,t.next=43;break;case 18:if("msft"!=u){t.next=22;break}i=33.08,t.next=43;break;case 22:if("ibm"!=u){t.next=26;break}i=21.5,t.next=43;break;case 26:if("meta"!=u){t.next=30;break}i=24.82,t.next=43;break;case 30:if("baba"!=u){t.next=34;break}i=9.74,t.next=43;break;case 34:if("aapl"!=u){t.next=38;break}i=31.53,t.next=43;break;case 38:if("crm"!=u){t.next=42;break}i=25.48,t.next=43;break;case 42:throw"Unknown stock ticker";case 43:s=i,f=setInterval(n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Math.random()<=.8)){t.next=3;break}return a.setResult(parseFloat(s.toFixed(2))),t.abrupt("return");case 3:return r=Math.random()>=.5,n=Math.random()*s/100,r?s+=n:s-=n,t.next=8,c(1);case 8:a.setResult(parseFloat(s.toFixed(2)));case 9:case"end":return t.stop()}}),t)}))),o),a.onCanceled=function(){clearInterval(f)};case 46:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=n(e().mark((function t(r,a){var o,i,u,s,f;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=3e3,i=void 0,"nvda"!=(u=r.toLowerCase())){t.next=7;break}i=144.79,t.next=44;break;case 7:if("tsla"!=u){t.next=11;break}i=207.51,t.next=44;break;case 11:if("amzn"!=u){t.next=15;break}i=220.59,t.next=44;break;case 15:if("googl"!=u){t.next=19;break}i=198.03,t.next=44;break;case 19:if("msft"!=u){t.next=23;break}i=493.97,t.next=44;break;case 23:if("ibm"!=u){t.next=27;break}i=187.79,t.next=44;break;case 27:if("meta"!=u){t.next=31;break}i=569.05,t.next=44;break;case 31:if("baba"!=u){t.next=35;break}i=105.9,t.next=44;break;case 35:if("aapl"!=u){t.next=39;break}i=242.21,t.next=44;break;case 39:if("crm"!=u){t.next=43;break}i=306,t.next=44;break;case 43:throw"Unknow stock ticker";case 44:s=i,f=setInterval(n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Math.random()<=.8)){t.next=3;break}return a.setResult(parseFloat(s.toFixed(2))),t.abrupt("return");case 3:return r=Math.random()>=.5,n=Math.random()*s/500,r?s+=n:s-=n,t.next=8,c(1);case 8:a.setResult(parseFloat(s.toFixed(2)));case 9:case"end":return t.stop()}}),t)}))),o),a.onCanceled=function(){clearInterval(f)};case 47:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=n(e().mark((function t(r,n){var a,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.address,a=r.toLowerCase(),o=void 0,"nvda"==a?o=[["Quarter Ended","Revenue (B)","Change (B)","Growth"],["07/28/2024","30.04","16.53","122.40%"],["04/28/2024","26.04","18.85","262.12%"],["01/28/2024","22.10","16.05","265.28%"],["10/29/2023","18.12","12.19","205.51%"],["07/30/2023","13.51","6.80","101.48%"],["04/30/2023","7.19","-1.10","-13.22%"],["01/29/2023","6.05","-1.59","-20.83%"],["10/30/2022","5.93","-1.17","-16.50%"],["07/31/2022","6.70","0.197","3.03%"],["05/01/2022","8.29","2.63","46.41%"],["01/30/2022","7.64","2.64","52.77%"],["10/31/2021","7.10","2.38","50.30%"],["08/01/2021","6.51","2.64","68.31%"],["05/02/2021","5.66","2.58","83.80%"],["01/31/2021","5.00","1.90","61.13%"],["10/25/2020","4.73","1.71","56.80%"],["07/26/2020","3.87","1.29","49.90%"],["04/26/2020","3.08","0.860","38.74%"],["01/26/2020","3.11","0.9","40.82%"],["10/27/2019","3.01","-0.167","-5.25%"]]:"tsla"==a?o=[["Quarter Ended","Revenue (B)","Change (B)","Growth"],["06/30/2024","25.50","0.573","2.30%"],["03/31/2024","21.30","-2.03","-8.69%"],["12/31/2023","25.17","0.849","3.49%"],["09/30/2023","23.35","1.90","8.84%"],["06/30/2023","24.93","7.99","47.20%"],["03/31/2023","23.33","4.57","24.38%"],["12/31/2022","24.32","6.60","37.24%"],["09/30/2022","21.45","7.70","55.95%"],["06/30/2022","16.93","4.98","41.61%"],["03/31/2022","18.76","8.37","80.54%"],["12/31/2021","17.72","6.98","64.92%"],["09/30/2021","13.76","4.99","56.85%"],["06/30/2021","11.96","5.92","98.11%"],["03/31/2021","10.39","4.40","73.58%"],["12/31/2020","10.74","3.36","45.50%"],["09/30/2020","8.77","2.47","39.16%"],["06/30/2020","6.04","-0.314","-4.94%"],["03/31/2020","5.99","1.44","31.80%"],["12/31/2019","7.38","0.158","2.19%"],["09/30/2019","6.30","-0.521","-7.63%"]]:"amzn"==a&&(o=[["Quarter Ended","Revenue (B)","Change (B)","Growth"],["06/30/2024","147.98","13.59","10.12%"],["03/31/2024","143.31","15.96","12.53%"],["12/31/2023","169.96","20.76","13.91%"],["09/30/2023","143.08","15.98","12.57%"],["06/30/2023","134.38","13.15","10.85%"],["03/31/2023","127.36","10.91","9.37%"],["12/31/2022","149.20","11.79","8.58%"],["09/30/2022","127.10","16.29","14.70%"],["06/30/2022","121.23","8.15","7.21%"],["03/31/2022","116.44","7.93","7.30%"],["12/31/2021","137.41","11.86","9.44%"],["09/30/2021","110.81","14.67","15.26%"],["06/30/2021","113.08","24.17","27.18%"],["03/31/2021","108.52","33.07","43.82%"],["12/31/2020","125.56","38.12","43.60%"],["09/30/2020","96.15","26.16","37.39%"],["06/30/2020","88.91","25.51","40.23%"],["03/31/2020","75.45","15.75","26.39%"],["12/31/2019","87.44","15.05","20.80%"],["09/30/2019","69.98","13.41","23.69%"]]),o){t.next=6;break}throw"Unknow stock ticker";case 6:return t.next=8,c(2,.5);case 8:return t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=n(e().mark((function t(r,n){var a,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.address,a=void 0,"nvda"==(o=r.toLowerCase())?a=[["Date","Market Cap (B)","Change"],["09/30/2024","2,010.95","-0.01%"],["06/30/2024","2,011.08","7.33%"],["03/31/2024","1,873.68","19.33%"],["12/31/2023","1,570.15","19.71%"],["09/30/2023","1,311.59","-1.94%"],["06/30/2023","1,337.54","26.37%"],["03/31/2023","1,058.44","23.51%"],["12/31/2022","856.94","-25.56%"],["09/30/2022","1,151.19","6.53%"],["06/30/2022","1,080.62","-34.86%"],["03/31/2022","1,658.81","-1.90%"],["12/31/2021","1,691.00","1.64%"],["09/30/2021","1,663.68","-4.11%"],["06/30/2021","1,734.95","11.35%"],["03/31/2021","1,558.07","-4.66%"],["12/31/2020","1,634.16","3.61%"],["09/30/2020","1,577.16","14.62%"],["06/30/2020","1,376.03","41.77%"],["03/31/2020","970.59","5.94%"],["12/31/2019","916.15","6.69%"]]:"tsla"==o?a=[["Date","Market Cap (B)","Change"],["09/30/2024","761.12","20.61%"],["06/30/2024","631.08","12.72%"],["03/31/2024","559.85","-29.12%"],["12/31/2023","789.90","-0.54%"],["09/30/2023","794.20","-4.28%"],["06/30/2023","829.68","26.39%"],["03/31/2023","656.42","68.76%"],["12/31/2022","388.97","-53.20%"],["09/30/2022","831.15","19.13%"],["06/30/2022","697.67","-37.36%"],["03/31/2022","1,113.71","4.94%"],["12/31/2021","1,061.29","38.24%"],["09/30/2021","767.74","17.25%"],["06/30/2021","654.78","2.13%"],["03/31/2021","641.11","-4.15%"],["12/31/2020","668.90","67.33%"],["09/30/2020","399.75","99.71%"],["06/30/2020","200.16","110.65%"],["03/31/2020","95.02","26.02%"],["12/31/2019","75.40","74.76%"]]:"amzn"==o&&(a=[["Date","Market Cap (B)","Change"],["09/30/2024","2,010.95","-0.01%"],["06/30/2024","2,011.08","7.33%"],["03/31/2024","1,873.68","19.33%"],["12/31/2023","1,570.15","19.71%"],["09/30/2023","1,311.59","-1.94%"],["06/30/2023","1,337.54","26.37%"],["03/31/2023","1,058.44","23.51%"],["12/31/2022","856.94","-25.56%"],["09/30/2022","1,151.19","6.53%"],["06/30/2022","1,080.62","-34.86%"],["03/31/2022","1,658.81","-1.90%"],["12/31/2021","1,691.00","1.64%"],["09/30/2021","1,663.68","-4.11%"],["06/30/2021","1,734.95","11.35%"],["03/31/2021","1,558.07","-4.66%"],["12/31/2020","1,634.16","3.61%"],["09/30/2020","1,577.16","14.62%"],["06/30/2020","1,376.03","41.77%"],["03/31/2020","970.59","5.94%"],["12/31/2019","916.15","6.69%"]]),a){t.next=6;break}throw"Unknow stock ticker";case 6:return t.next=8,c(2,.5);case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(t,e){return s.apply(this,arguments)}function s(){return(s=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r||(r=3),n||(n=.5),t.abrupt("return",new Promise((function(t){var e=Math.max(n,Math.random()*r);window.setTimeout((function(){t()}),1e3*e)})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}CustomFunctions.associate("GETNETINCOME",(function(t){var e=t.toLowerCase();if("nvda"==e)return"53.10B";if("tsla"==e)return"12.39B";if("amzn"==e)return"44.42B";if("googl"==e)return"87.66B";if("msft"==e)return"88.14B";if("ibm"==e)return"8.43B";if("meta"==e)return"51.43B";if("baba"==e)return"9.59B";if("aapl"==e)return"101.96B";if("crm"==e)return"5.63B";throw"Unknow stock ticker"})),CustomFunctions.associate("GETEPS",(function(t){var e=t.toLowerCase();if("nvda"==e)return 2.13;if("tsla"==e)return 3.56;if("amzn"==e)return 4.18;if("googl"==e)return 6.97;if("msft"==e)return 11.8;if("ibm"==e)return 9.07;if("meta"==e)return 19.51;if("baba"==e)return 3.8;if("aapl"==e)return 6.57;if("crm"==e)return 5.74;throw"Unknow stock ticker"})),CustomFunctions.associate("GETPERATIO",(function(t){var e=t.toLowerCase();if("nvda"==e)return 54.39;if("tsla"==e)return 66.98;if("amzn"==e)return 45.81;if("googl"==e)return 23.48;if("msft"==e)return 36.89;if("ibm"==e)return 24.08;if("meta"==e)return 28.78;if("baba"==e)return 23.21;if("aapl"==e)return 34.75;if("crm"==e)return 46.45;throw"Unknow stock ticker"})),CustomFunctions.associate("GETFORWARDPE",(function(t,e){return a.apply(this,arguments)})),CustomFunctions.associate("GETARGETPRICE",(function(t,e){return o.apply(this,arguments)})),CustomFunctions.associate("GETOPERATIONSUGGESTION",(function(t,e,r,n,a){var o=t.toLowerCase();if("nvda"==o)return"Strong Buy";if("tsla"==o)return"Hold";if("amzn"==o)return"Strong Buy";if("googl"==o)return"Buy";if("msft"==o)return"Strong Buy";if("ibm"==o)return"Hold";if("meta"==o)return"Strong Buy";if("baba"==o)return"Strong Buy";if("aapl"==o)return"Buy";if("crm"==o)return"Buy";throw"Unknow stock ticker"})),CustomFunctions.associate("GETREVENUEHISTORY",(function(t,e){return i.apply(this,arguments)})),CustomFunctions.associate("GETMARKETCAPHISTORY",(function(t,e){return u.apply(this,arguments)})),CustomFunctions.associate("GETCURRENTPRICE",(function(t,e){var r=0,n=t.toLowerCase();if("nvda"==n)r=116;else if("tsla"==n)r=238.25;else if("amzn"==n)r=191.6;else if("googl"==n)r=163.59;else if("msft"==n)r=435.27;else if("ibm"==n)r=217.7;else if("meta"==n)r=561.35;else if("baba"==n)r=88.29;else if("aapl"==n)r=228.2;else{if("crm"!=n)throw"Unknow stock ticker";r=266.8}var a=r,o=setInterval((function(){var t=Math.random()>=.5,r=Math.random()*a/100;t?a+=r:a-=r,e.setResult(parseFloat(a.toFixed(2)))}),1e3);e.onCanceled=function(){clearInterval(o)}}))}();
//# sourceMappingURL=functions.js.map