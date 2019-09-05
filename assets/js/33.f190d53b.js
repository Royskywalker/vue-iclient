(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{208:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"地图组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#地图组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 地图组件")]),t._v(" "),s("p",{staticStyle:{"font-size":"16px",color:"#5e6d82","line-height":"1.5em"}},[t._v("\nWeb Map 地图组件。支持 MapboxGL Map，和对接 iPortal/Online 地图。"),s("br"),t._v("\n目前支持地图坐标系包括：`'EPSG:3857'，'EPSG:4326'，'EPSG:4490'，'EPSG:4214'，'EPSG:4610'`。\n")]),t._v(" "),s("h2",{attrs:{id:"加载-iportal-地图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载-iportal-地图","aria-hidden":"true"}},[t._v("#")]),t._v(" 加载 iPortal 地图")]),t._v(" "),s("sm-iframe",{attrs:{src:"http://iclient.supermap.io/examples/mapboxgl/components_webmap_vue.html"}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("sm-web-map")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("server-url")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://support.supermap.com.cn:8092/"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("map-id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1649097980"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("sm-web-map")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("mapId")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("iPortal")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Online 地图 ID")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("serverUrl")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SuperMap iPortal/Online 服务器地址")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("http://www.supermapol.com")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("accessToken")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于访问 SuperMap iPortal 、SuperMap Online 中受保护的服务")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("accessKey")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SuperMap iServer 提供的一种基于 Token（令牌）的用户身份验证机制")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("tiandituKey")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于访问天地图的服务")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("withCredentials")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求是否携带 cookie")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("excludePortalProxyUrl")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("server 传递过来的 URL 是否带有代理")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("autoresize")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用来指定 webMap 实例在组件根元素尺寸变化时是否需要自动进行重绘")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),s("h2",{attrs:{id:"加载-iserver-地图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载-iserver-地图","aria-hidden":"true"}},[t._v("#")]),t._v(" 加载 iServer 地图")]),t._v(" "),s("sm-iframe",{attrs:{src:"http://iclient.supermap.io/examples/mapboxgl/components_map_vue.html"}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("sm-web-map")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":map-options")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mapOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("sm-web-map")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script"}},[s("span",{attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("data")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mapOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            container"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'map'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// container id")]),t._v("\n            style"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{attrs:{class:"token string"}},[t._v('"version"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("8")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{attrs:{class:"token string"}},[t._v('"sources"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{attrs:{class:"token string"}},[t._v('"raster-tiles"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),s("span",{attrs:{class:"token string"}},[t._v('"type"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"raster"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  "),s("span",{attrs:{class:"token string"}},[t._v('"tiles"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),s("span",{attrs:{class:"token string"}},[t._v("'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'")]),t._v("\n                  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  "),s("span",{attrs:{class:"token string"}},[t._v('"tileSize"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("256")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{attrs:{class:"token string"}},[t._v('"layers"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{attrs:{class:"token string"}},[t._v('"id"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"simple-tiles"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{attrs:{class:"token string"}},[t._v('"type"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"raster"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{attrs:{class:"token string"}},[t._v('"source"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"raster-tiles"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{attrs:{class:"token string"}},[t._v('"minzoom"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{attrs:{class:"token string"}},[t._v('"maxzoom"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("22")]),t._v("\n              "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            center"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("120.143")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30.236")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// starting position")]),t._v("\n            zoom"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// starting zoom")]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"attributes-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("mapOptions")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/api/#map",target:"_blank",rel:"noopener noreferrer"}},[t._v("MapboxGL map options 对象"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("autoresize")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用来指定 webMap 实例在组件根元素尺寸变化时是否需要自动进行重绘")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),s("h3",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("load")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Map 加载完成事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])],1)},[],!1,null,null,null);a.default=e.exports}}]);