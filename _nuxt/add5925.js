(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{960:function(t,e,r){var content=r(968);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(91).default)("60ae259a",content,!0,{sourceMap:!1})},967:function(t,e,r){"use strict";r(960)},968:function(t,e,r){var n=r(90)((function(i){return i[1]}));n.push([t.i,"div[data-v-8f16a784]{display:block}",""]),n.locals={},t.exports=n},982:function(t,e,r){"use strict";r.r(e);var n=r(24),c=(r(80),r(2),r(1),r(160),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r({deep:!0}).only(["title","description","image","slug","author","date","path","tags","abstract"]).where({draft:{$ne:!0}}).where({tags:{$containsAny:[n.tag]}}).sortBy("date","desc").fetch();case 3:return c=(c=e.sent).filter((function(t){return!t.path.startsWith("/projects/")})),e.abrupt("return",{tags:c});case 6:case"end":return e.stop()}}),e)})))()}}),o=(r(967),r(59)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-4"},[e("div",{staticClass:"container min-vh-100"},[e("main",{staticClass:"pb-5"},t._l(t.tags,(function(article,r){return e("div",{key:r,attrs:{md:"4"}},[e("div",{staticClass:"py-3"},[e("b-card",{attrs:{title:article.layout}},[article.image?e("img",{staticStyle:{"max-width":"100%","max-height":"2.0rem"},attrs:{src:"/portfolio/images/"+article.image}}):t._e(),t._v(" "),e("b-card-text",[t._v("\n              "+t._s(article.abstract)+"\n            ")]),t._v(" "),e("b-button",{staticClass:"card-link",attrs:{href:"/portfolio/articles/"+article.slug}},[t._v("\n              Go\n            ")])],1)],1)])})),0)])])}),[],!1,null,"8f16a784",null);e.default=component.exports}}]);