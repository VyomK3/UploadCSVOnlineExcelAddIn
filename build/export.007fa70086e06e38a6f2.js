(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{519:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(128),n(179),n(180),n(257),n(97),n(258),n(259),n(69),n(126),n(181),n(129);var r=n(1);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return function(t,n){return function(e,t){var n=o(Object(r.useState)((function(){var n=t;try{var r=window.localStorage.getItem(e);r&&(n=JSON.parse(r))}catch(e){console.warn(e)}return n})),2),a=n[0],i=n[1];return[a,function(t){i(t);try{window.localStorage.setItem(e,JSON.stringify(t))}catch(e){console.warn(e)}}]}(e+"-"+t,n)}}},528:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(128),n(179),n(180),n(257),n(261),n(97),n(258),n(259),n(69),n(126),n(181),n(544),n(129);var r,o=n(1),a=n(604),i=n(600),l=n(546),c=n(127);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={",":0," ":1,"\t":2},y=(f(r={},0,","),f(r,1," "),f(r,2,"\t"),f(r,3,""),r);function p(e){var t=e.showLengthError,n=e.value,r=e.onChange,s=u(Object(o.useState)(!1),2),f=s[0],p=s[1],b=o.createElement("div",{className:c.smallDivider},o.createElement(a.a,{className:c.monospace,value:n,onChange:function(e,t){return r(t)},description:d(n),onGetErrorMessage:function(e){return t&&e.length>1?"Delimiter length must be 1":""},deferredValidationTime:1,placeholder:"Enter custom delimiter",spellCheck:!1}));return o.createElement(o.Fragment,null,o.createElement(i.a,{label:"Delimiter",options:[{key:0,text:"Comma (U+002C)"},{key:1,text:"Space (U+0020)"},{key:2,text:"Tab (U+0009)"},{key:3,text:"Other"}],responsiveMode:l.a.large,selectedKey:!f&&n in m?m[n]:3,onChange:function(e,t){p(3===t.key),r(y[t.key])}}),f||![","," ","\t"].includes(n)?b:null)}function d(e){return 1==e.length?"U+"+e[0].charCodeAt(0).toString(16).toUpperCase().padStart(4,"0"):" "}},529:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(260);var r=n(1),o=n(600),a=n(546),i={key:"",text:"Auto-detect"},l=[{key:"\r\n",text:"CRLF"},{key:"\r",text:"CR"},{key:"\n",text:"LF"}];function c(e){var t,n=e.showAutoDetect,c=e.value,u=e.onChange;return t=n?[i].concat(l):l,r.createElement(o.a,{label:"Newline sequence",responsiveMode:a.a.large,selectedKey:c,options:t,onChange:function(e,t){return u(t.key)}})}},530:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),o=n(605),a=n(608),i=n(609),l=n(127);function c(e){var t,n=e.onClick,c=e.progress;return t=c.aborting?r.createElement(o.a,{variant:"small"},"Stopping"):r.createElement(o.a,{variant:"small"},r.createElement(a.a,{onClick:n},"Stop")),r.createElement("div",{className:l.smallDivider},c.show?r.createElement(r.Fragment,null,r.createElement(o.a,{variant:"small"},t),r.createElement(i.a,{percentComplete:c.percent})):r.createElement(o.a,{variant:"small"}," "))}},531:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(127),o=n(605),a=n(608),i=n(1),l=n(522);function c(){return i.createElement("div",{className:r.centerContent+" "+r.fullWidth,style:{marginTop:"30px"}},i.createElement(o.a,{variant:"medium"},i.createElement(l.a,{to:"about",className:r.removeUnderline},i.createElement(a.a,null,"About"))))}},532:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(69),n(126);var r=n(604),o=n(1),a=n(127);function i(e){var t=e.output;switch(t.type){case 1:return o.createElement(r.a,{className:a.monospace,value:t.text,rows:20,multiline:!0,spellCheck:!1,readOnly:!0});case 2:return o.createElement(r.a,{className:a.monospace+" "+a.redText,value:t.error.toString()+"\n"+t.error.stack,rows:20,multiline:!0,spellCheck:!1,readOnly:!0})}return null}},533:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(128),n(179),n(180),n(257),n(97),n(258),n(259),n(69),n(126),n(181),n(129);var r=n(605),o=n(616),a=n(606),i=n(1),l=n(127),c=n(519);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=Object(c.a)("app");function m(e){var t=e.text,n=e.helpLink,c=e.mac,s=e.children,m=u(f("firstVisit",!0),2),y=m[0],p=m[1];return i.createElement("div",{className:l.pageMargin},i.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"}},i.createElement(r.a,{variant:"xLarge"},i.createElement("strong",null,t)),i.createElement("div",{className:l.smallIcon},i.createElement(o.a,{style:{marginRight:c?"30px":"4px"},iconProps:{iconName:"Help"},title:"Help page",ariaLabel:"Help page",href:n,target:"_blank",rel:"noopener noreferrer"}))),y?i.createElement(i.Fragment,null,i.createElement(r.a,{variant:"mediumPlus"},'CSV Import+Export can open and save CSV files of various formats. If you need any help, the "?" icon in the top right corner will take you to the help page.'),i.createElement("br",null),i.createElement("br",null),i.createElement(a.a,{text:"Continue",onClick:function(){return p(!1)}})):s)}},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(128),n(179),n(180),n(260),n(257),n(97),n(258),n(259),n(69),n(126),n(181),n(129);var r=n(1),o=n(600),a=[{key:"Big5",text:"Big5"},{key:"EUC-JP",text:"EUC-JP"},{key:"EUC-KR",text:"EUC-KR"},{key:"gb18030",text:"gb18030"},{key:"GBK",text:"GBK"},{key:"IBM866",text:"IBM866 (Cyrillic)"},{key:"ISO-2022-JP",text:"ISO-2022-JP (JIS)"},{key:"ISO-8859-10",text:"ISO-8859-10 (Latin-6)"},{key:"ISO-8859-13",text:"ISO-8859-13 (Latin-7)"},{key:"ISO-8859-14",text:"ISO-8859-14 (Latin-8)"},{key:"ISO-8859-15",text:"ISO-8859-15 (Latin-9)"},{key:"ISO-8859-16",text:"ISO-8859-16 (Latin-10)"},{key:"ISO-8859-2",text:"ISO-8859-2 (Central European)"},{key:"ISO-8859-3",text:"ISO-8859-3 (Latin 3)"},{key:"ISO-8859-4",text:"ISO-8859-4 (Latin-4)"},{key:"ISO-8859-5",text:"ISO-8859-5 (Cryillic)"},{key:"ISO-8859-6",text:"ISO-8859-6 (Arabic)"},{key:"ISO-8859-7",text:"ISO-8859-7 (Greek)"},{key:"ISO-8859-8",text:"ISO-8859-8 (Hebrew)"},{key:"ISO-8859-8-I",text:"ISO-8859-8-I (Hebrew)"},{key:"KOI8-R",text:"KOI8-R"},{key:"KOI8-U",text:"KOI8-U"},{key:"x-mac-cyrillic",text:"Mac OS Cyrillic"},{key:"macintosh",text:"Mac OS Roman"},{key:"Shift_JIS",text:"Shift_JIS"},{key:"UTF-16BE",text:"UTF-16BE"},{key:"UTF-16LE",text:"UTF-16LE"},{key:"UTF-8",text:"UTF-8"},{key:"windows-1250",text:"windows-1250 (Central European)"},{key:"windows-1251",text:"windows-1251 (Cyrillic)"},{key:"windows-1252",text:"windows-1252 (Western European)"},{key:"windows-1253",text:"windows-1253 (Greek)"},{key:"windows-1254",text:"windows-1254 (Turkish)"},{key:"windows-1255",text:"windows-1255 (Hebrew)"},{key:"windows-1256",text:"windows-1256 (Arabic)"},{key:"windows-1257",text:"windows-1257 (Baltic)"},{key:"windows-1258",text:"windows-1258 (Vietnamese)"},{key:"windows-874",text:"windows-874 (Thai)"}];function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c={key:"",text:"Auto-detect"};function u(e){var t,n=e.showAutoDetect,l=e.value,u=e.onChange;return t=n?[c].concat(i(a)):a,r.createElement(r.Fragment,null,r.createElement(o.a,{label:"Encoding",selectedKey:l,options:t,onChange:function(e,t){return u(t.key)}}),r.createElement("br",null))}},570:function(e,t,n){(function(n){var r,o,a;o=[],void 0===(a="function"==typeof(r=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){i(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(e,n,i){var l=a.URL||a.webkitURL,c=document.createElement("a");n=n||e.name||"download",c.download=n,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):r(c.href)?t(e,n,i):o(c,c.target="_blank")):(c.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,a),n);else if(r(e))t(e,n,a);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){o(i)}))}}:function(e,n,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var i="application/octet-stream"===e.type,l=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&l)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var s=a.URL||a.webkitURL,f=s.createObjectURL(e);o?o.location=f:location.href=f,o=null,setTimeout((function(){s.revokeObjectURL(f)}),4e4)}});a.saveAs=i.saveAs=i,e.exports=i})?r.apply(t,o):r)||(e.exports=a)}).call(this,n(98))},597:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));n(128),n(179),n(180),n(257),n(97),n(258),n(259),n(69),n(82),n(126),n(181),n(129),n(81);var r=n(1),o=n(528),a=n(529),i=n(600),l=n(546),c=n(602),u=n(606),s=n(604),f=n(570),m=n(537),y=n(530),p=n(127),d=n(531),b=n(532),v=n(533),w=n(519),h=n(175),g=n(94);function x(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=Object(w.a)("export");function O(){var e=Object(h.c)((function(e){return e.initialized})),t=Object(h.c)((function(e){return e.platform})),n=Object(h.c)((function(e){return e.progress})),w=Object(h.c)((function(e){return e.output})),S=Object(h.b)(),O=E(k("exportType",1),2),I=O[0],A=O[1],C=E(k("delimiter",","),2),j=C[0],U=C[1],T=E(k("newline","\r\n"),2),L=T[0],R=T[1],M=E(k("encoding","UTF-8"),2),B=M[0],F=M[1],N=E(Object(r.useState)(""),2),D=N[0],K=N[1],P=[{key:1,text:"Textbox"}];t===Office.PlatformType.OfficeOnline&&P.push({key:0,text:"File"});var H=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(""),t=I,n=B,e.next=5,S(Object(g.d)({delimiter:j,newline:L}));case 5:if(null!==(r=e.sent)){e.next=8;break}return e.abrupt("return");case 8:e.t0=t,e.next=0===e.t0?11:1===e.t0?15:17;break;case 11:return o={type:"text/csv;charset="+n},a=new Blob([r.string],o),f.saveAs(a,r.name+".csv"),e.abrupt("return");case 15:return K(r.string),e.abrupt("return");case 17:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){x(a,r,o,i,l,"next",e)}function l(e){x(a,r,o,i,l,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return r.createElement(v.a,{text:"Export CSV",helpLink:"https://github.com/Emurasoft/excel-csv-import-help/blob/master/en.md#export-csv",mac:t===Office.PlatformType.Mac},r.createElement(i.a,{label:"Export type",options:P,responsiveMode:l.a.large,selectedKey:I,onChange:function(e,t){return A(t.key)},id:"exportTypeDropdown"}),r.createElement("br",null),0===I?r.createElement(m.a,{value:B,onChange:F,showAutoDetect:!1}):null,r.createElement(o.a,{value:j,onChange:U,showLengthError:!1}),r.createElement("br",null),r.createElement(a.a,{value:L,onChange:R,showAutoDetect:!1}),r.createElement("br",null),r.createElement(c.a,{styles:{root:{display:"inline-block"}},content:e?"":"Excel API is not initialized"},r.createElement(u.a,{onClick:H,disabled:!e,text:"Export to CSV"})),r.createElement("br",null),r.createElement(y.a,{onClick:function(){return S(Object(g.b)())},progress:n}),1==I?r.createElement(s.a,{value:D,readOnly:!0,label:"Export result",className:p.monospace,rows:15,multiline:!0,spellCheck:!1,wrap:"off"}):null,r.createElement(b.a,{output:w}),r.createElement(d.a,null))}}}]);
//# sourceMappingURL=export.007fa70086e06e38a6f2.js.map