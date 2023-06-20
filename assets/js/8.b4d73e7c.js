(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{282:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"命令行启动说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行启动说明"}},[t._v("#")]),t._v(" 命令行启动说明")]),t._v(" "),a("ol",[a("li",[t._v("初始化项目\n"),a("ol",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("dart pub global activate melos\n")])])])]),t._v(" "),a("li",[t._v("确认moles命令有效"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("melos "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])])]),a("ol",[a("li",[t._v("若无法运行需添加环境变量"),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  unix*\n  export PATH=$HOME/.pub-cache/bin\n  zsh\n  export PATH="$PATH":"$HOME/.pub-cache/bin"\n  \n  Windows*\n  %LOCALAPPDATA%\\Pub\\Cache\\bin\n')])])])])])]),t._v(" "),a("li",[t._v("在IDE的terminal中初始化项目melos\n"),a("blockquote",[a("p",[t._v("melos 会自动配置ide的debugger")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("melos bs\n")])])])])])])]),t._v(" "),a("h3",{attrs:{id:"文档结构说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档结构说明"}},[t._v("#")]),t._v(" 文档结构说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("|-- packages \n    |-- aone_widget ==> 可共用的自定义widget\n    |-- common ==> 通用包\n        |-- controller => 封装好的业务逻辑 不能满足需求可自建\n        |-- core\n            |-- base\n            |-- fetch ==> dio\n        |-- data \n            |-- local\n            |-- model\n                |-- dto ==> 请求query/body dto\n                |-- entities ==> 服务端返回entities\n            |-- remote\n                |-- provider ==> 远程接口数据provider\n        |-- lang 语言文件\n        |-- interfaces\n        |-- router\n        |-- service 公共service\n        |-- utils\n        common.dart ==> 引入这个就可以了\n    |-- 其他 ==> 统一版面的活动模块\n|-- sites\n    |-- e01 & etc...\n")])])]),a("h3",{attrs:{id:"状态管理-state-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态管理-state-management"}},[t._v("#")]),t._v(" 状态管理 State Management")]),t._v(" "),a("blockquote",[a("p",[t._v("https://1467602180.github.io/flutter-getx-doc/")])]),t._v(" "),a("h3",{attrs:{id:"api请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api请求"}},[t._v("#")]),t._v(" Api请求")]),t._v(" "),a("blockquote",[a("p",[t._v("fetch 基于 dio 二次封装\nhttps://github.com/flutterchina/dio/blob/master/README-ZH.md")])]),t._v(" "),a("h3",{attrs:{id:"全局toast-loading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局toast-loading"}},[t._v("#")]),t._v(" 全局Toast loading")]),t._v(" "),a("blockquote",[a("p",[t._v("采用flutter_smart_dialog，库中包含可以定义的loading/dialog/toast\n具体用法参考文档或者prototype\nhttps://github.com/fluttercandies/flutter_smart_dialog")])]),t._v(" "),a("h3",{attrs:{id:"表单及验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单及验证"}},[t._v("#")]),t._v(" 表单及验证")]),t._v(" "),a("blockquote",[a("p",[t._v("flutter_form_builder: ^7.1.1\nform_builder_validators: ^7.8.0\nhttps://pub.dev/packages/flutter_form_builder")])]),t._v(" "),a("h3",{attrs:{id:"screenutils-自适应布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#screenutils-自适应布局"}},[t._v("#")]),t._v(" screenUtils 自适应布局")]),t._v(" "),a("blockquote",[a("p",[t._v("横屏版面统一按竖屏的时的宽度适配，否则将导致不同设备下宽度偏差过大问题")])]),t._v(" "),a("h3",{attrs:{id:"android打包签名jks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android打包签名jks"}},[t._v("#")]),t._v(" Android打包签名jks")]),t._v(" "),a("blockquote",[a("p",[t._v("anoe.jks为android打包的签名文件，在根目录下，所有Android均可用该签名文件进行打包，打包相关信息如下：\nKEYSTORE_FILE=./anoe.jks\nKEYSTORE_PASSWORD=123456\nKEY_ALIAS=key0\nKEY_PASSWORD=123456")])])])}),[],!1,null,null,null);a.default=r.exports}}]);