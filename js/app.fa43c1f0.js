(function(t){function e(e){for(var i,c,s=e[0],o=e[1],u=e[2],A=0,f=[];A<s.length;A++)c=s[A],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},a=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/frontend-challenge/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"15e9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"center"},t._l(t.filters,(function(e){return n("button",{key:e,staticClass:"buttonCats",class:{active:t.filter===e},on:{click:function(n){return t.select(e)}}},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"center"},[n("ul",t._l(t.images,(function(t,e){return n("Gallery",{key:e,attrs:{img:t}})})),1),n("p",{class:{visible:t.loading}},[t._v("... загружаем еще котиков ...")])])])},a=[],c=n("1da1"),s=n("5530"),o=(n("96cf"),n("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{class:{liked:t.img.like},attrs:{value:t.img.like},on:{click:function(e){return t.like(t.img.id)}}},[i("img",{staticClass:"listItem",attrs:{alt:"cat image",src:t.img.url}}),t.img.like?t._e():i("button",{staticClass:"buttonHeart"},[i("img",{attrs:{src:n("a842")}})]),t.img.like?i("button",{staticClass:"buttonHeart"},[i("img",{attrs:{src:n("594f")}})]):t._e()])}),u=[],l={name:"Gallery",props:["img"],methods:{like:function(t){this.$store.commit("toggleLike",t)}}},A=l,f=(n("edbf"),n("2877")),g=Object(f["a"])(A,o,u,!1,null,"9b4b5efc",null),p=g.exports,d=n("2f62"),m={name:"App",components:{Gallery:p},data:function(){return{show:!1,filter:"Все котики",filters:["Все котики","Любимые котики"],loading:!1}},computed:{images:function(){switch(this.filter){case"Любимые котики":return this.$store.state.images.filter((function(t){return t.like}));default:return this.$store.state.images}}},methods:Object(s["a"])({getLimit:function(){var t=this.$el.querySelector("ul"),e=t.offsetWidth/5,n=e+16,i=Math.ceil(window.innerHeight/n),r=Math.ceil(t.offsetWidth/e);return r*i},like:function(t){this.$store.commit("toggleLike",t)},select:function(t){this.filter=t},open:function(){this.show=!0}},Object(d["b"])(["getimagesFromApi"])),mounted:function(){var t=this;this.limit=this.getLimit(),this.getimagesFromApi(2*this.limit);var e=this.$el.querySelector("p");window.addEventListener("scroll",Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.loading){n.next=2;break}return n.abrupt("return");case 2:if(!(window.scrollY+window.innerHeight>e.offsetTop)){n.next=7;break}return t.loading=!0,n.next=6,t.getimagesFromApi(t.limit);case 6:t.loading=!1;case 7:case"end":return n.stop()}}),n)}))))}},h=m,b=(n("5c0b"),Object(f["a"])(h,r,a,!1,null,null,null)),w=b.exports,v=n("2909"),y=(n("d81d"),n("7db0"),n("bc3a")),k=n.n(y);i["a"].use(d["a"]);var O=new d["a"].Store({state:{images:[]},mutations:{setImages:function(t,e){var n,i=e.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{like:!1})}));(n=t.images).push.apply(n,Object(v["a"])(i))},toggleLike:function(t,e){var n=t.images.find((function(t){return t.id===e}));n.like=!n.like}},actions:{getimagesFromApi:function(t,e){var n=t.commit;return k()("https://api.thecatapi.com/v1/images/search?limit=".concat(e),{method:"GET"}).then((function(t){n("setImages",t.data)})).catch((function(t){return console.log(t),t}))}},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:O,render:function(t){return t(w)}}).$mount("#app")},"594f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJrSURBVHgBzZhBWtpAFIDfm6g7Itl1UfqlN8ATFHZd0NaeoHgC6QmUE9SeoOEGfpZFd8YT6A2aT110R6SrSjOv7+UjNGI0iYkw/wLIBF7+zMu8mQHhASadZlM17D4CfSBEFwFcaSeAAIkC/jiKZjPf+fErgEdIxXnDcdpJHCYEoou8OJgVcMO291lkwIdNyAPJi/7MhssXkDhWo/EFEPtQAL6Bo7/T30PHD8O77emgb1+41tbWKfy/y6IEkabPzvjqWA6mvdYuKPwGRW5wOc7tbTd9s1iD3AIF0Jd3DeDB07kjGQvG6bDt8ypyNRNE0+mOpFvJET9zB2COnOAq25YxADhP7U8wj5B78bWyNjc7YCZxeVKg1CcwFKnBiotlG0yFJwgZJGVr1SqJBY1GBAMwF66DiAGYCi8mFBGdgaHw6udMaa19MBStlKec8bXPafbBNIh85zgI4lEcRdEQzGMkL7Ggcb2I4Nnfrzz5uKiDEeIeyDJ8zZAsElAtMroQlHwTwfpTzQ7ikhze25PcvH91xI37sAZI66/b4+tBug2zvsiS53xipYsITu3F9snlznJ75lzM9adLK5wC5Vp8zY9Z5zIF+RkIVyU5l+umn7s0+NiPJ7uuy1PNKT7TfiVPTsCcGM8mWUROyBUU6pYsKicUEhTqkiwjJxQWFKpKlpUTSgkKLNmcS5aqk1Ln5nKlptPSggk3vZaHCgttWUnTSG9Yg7JywpMFhSLTYtb0VYZKuzqemgacugcXGHKuipxQqQcTuCcPOdBBui2WO7k8hIrUIihM3rX6FsZ/WspyfS9ZcBoFj/D2pPeyAzXyD0UGHbifzsiFAAAAAElFTkSuQmCC"},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},a842:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOrSURBVHgBzZhdUuJAEMd7JsibAd62alfEG+gJhLetLUXdCyycQDyBcgLxBOIJ/HzYN+IJ5AabRR/2jRi2amvBZLY7Ak6GEBJA2H+VZdIJnV9mOj3dw2CM2vl0mq/qJQZiTzCWYwA5sgsAkwlh4uGF0+sZme+/TAiR5Gcb/WwO/KAsEKI5yQ8LcpjQ9UMEqeBpGiaJibrzt1dVH0B+tNXVU2CsBBGEL1B7sTvVjGFZfrvs9POHnJZMNuDtLaPKdFxxlLl7vKITe2dtHzg7hygvqPrpdgvyy7I5wA3FAUr03wWow/TyQXIPjqYjAI7iTQg4cjjf0G9ajP7weAtjp0zXVM8EFgQX0483UMREJ94IdorZ037MvTl13bPU3VMFQvRczJ6gg+OwewgsdduqxfWDPNXUTeuE9af2R9BFiKD27lpJY168BdGV9dvHOkQQQtYQ8lAyWY5tb3BtZSXv84lDHhWOlEEAeiHVTraocCR8ZkWZbi89JYDzbzQPA2GOq0JMuZzXNCG2JZOVuv55AnEl4AyD7nTIgjk4gXCb8j2OpjUhpjJXJuWuAswoV+NXmusOAYEWCLuYFfJN9IXBEqXycPjPRYCmbPjzdWMdlqT2l4+bisniOM+mbOn2nANYkjSN+wGxmOBCiHvZRl8OLEuUUSRh9XPPXdc1fDcxlm/vfMrDgkULBo5YXrZh+qrzzN2TgVCGfAFXhmNYsHgyeekzCGFg+jK9r9hxHH9yxlF83s1WYEH6XcweYm7z52NK2iCVW/beekMZYgvLnq1JFfOs6tcCDyDXjgzq+nWrTIfDPOgwRga5mk3LZc87wjVkOEEDw/hwRoeANN+4JKvrcI7regPeSYnXuMv5jMhALKACkqhuwzc4k20UG/buWnA5NYPIp1DizqtBldoxcN3F2uxBDVqMzzqWT2WYE5zaTCFsE0uuLfXewLUY809hpBRHh/MYyTFwJj4zcAULBKTy6T0gQ+AKctz5Hgkhau/ncrjUNNhIIMef7mngJgJOgDScTudAbbRHfv/awF9S8o8LFwkwDJIC2+12D8Yl8/4uRWPka40IFxkwDBICdgO8+8dsBMSBI0WuqMlh4IczaLSpGpkM14wDR4rdf+BIpvsjqVa/pvPyWuxqCe0yBM6CGJqqQSJIbDPP8UPZVy4NHu5bv4UrLtyEVokLNzXgQAG7ASOKsoUSppm6uv5uwNhG39tCmQGONJceOGzzB2bU3Jp03yZSjE2jhYqarXk3XP8AbBn46/IiyosAAAAASUVORK5CYII="},edbf:function(t,e,n){"use strict";n("15e9")}});
//# sourceMappingURL=app.fa43c1f0.js.map