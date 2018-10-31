(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{165:function(a,s,_){"use strict";_.r(s);var r=_(0),v=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,_=a._self._c||s;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"pandora-js-是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pandora-js-是什么","aria-hidden":"true"}},[a._v("#")]),a._v(" Pandora.js 是什么")]),a._v(" "),_("blockquote",[_("p",[a._v("注：本文档中 Pandora 和 Pandora.js 都指代同一个东西，即本仓库代码所指代的工具包，包括但不限于衍生相关的系列产品和附属包。")])]),a._v(" "),_("p",[a._v("Pandora.js 是阿里 Node.js 应用的启停工具，是启停脚本的富实现。")]),a._v(" "),_("p",[a._v("它主要目的和职责：")]),a._v(" "),_("ul",[_("li",[a._v("提供一个通用的 Node.js 应用运行时模型和相关基础设施\n"),_("ul",[_("li",[a._v("Node.js 引擎集成")]),a._v(" "),_("li",[a._v("多进程模型")]),a._v(" "),_("li",[a._v("为应用框架提供基础设施和规范( Service )")]),a._v(" "),_("li",[a._v("提供稳定的中间件 SDK 客户端和一致的接口")])])]),a._v(" "),_("li",[a._v("提供一个标准的 Node.js 的 DevOps 流程\n"),_("ul",[_("li",[a._v("集成 Pandora.js 的基础 Docker 镜像")]),a._v(" "),_("li",[a._v("Pandora.js 每一层中的运维 API")])])])]),a._v(" "),_("p",[a._v("Pandora.js 包含每个组成部分的"),_("strong",[a._v("规范以及一个标准实现")]),a._v("。原则上各业务方都可以基于这个标准实现来完成自己的应用层框架。例如：")]),a._v(" "),_("ul",[_("li",[a._v("面向 Web 领域的 Midway（内部）、Egg 等框架基于 Pandora.js 解决中间件服务、插件扩展机制、日志等基础问题，可以关注 WebMVC 等面向业务的组件开发；")]),a._v(" "),_("li",[a._v("未来如果出现微服务框架的开发需求，同样可以基于 Pandora.js 解决中间件、运维规范等基础设施相关问题，从而可以专注解决微服务领域注入服务化、RPC 性能等相关问题。")])]),a._v(" "),_("h2",{attrs:{id:"设计原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设计原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 设计原则")]),a._v(" "),_("p",[a._v("在没有线程的 Node.js 环境的如今，越来越多的应用选择使用 Cluster 模式来运行多个进程，让性能达到比较理想的程度，但是之间复杂的进程模型，进程间通信，让不少用户望而却步。在不少公司用户中，我们也经常碰到框架选择困难，我只想要加个白米饭，但是却给我一个套餐的情况。")]),a._v(" "),_("p",[a._v("我们希望业务依旧变的纯粹，只关心自己的业务部分，让本地开发，线上部署变的水到渠成，Pandora.js 是在框架和底层 Node.js 之间的一个启动工具，就像 Java Server 使用 Tomcat 那样。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1wR5mib_I8KJjy1XaXXbsxpXa-826-434.png",alt:"img"}})]),a._v(" "),_("p",[a._v('当然，如果 Pandora.js 只做启停应用，那简直太小题大做了， 应用运维是一直是我们的胸口大石，在 "OPS FIRST" 的如今，我们结合业界的 Metrics 规范，通过 Metrics API 体系，可以打通自定义监控这条链路，势必为 Node.js 的智能化运维添砖加瓦。')]),a._v(" "),_("h2",{attrs:{id:"pandora-js-的一些特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pandora-js-的一些特性","aria-hidden":"true"}},[a._v("#")]),a._v(" Pandora.js 的一些特性")]),a._v(" "),_("ul",[_("li",[a._v("提供不同类型的框架，以及单个文件的启停能力")]),a._v(" "),_("li",[a._v("提供多应用管理和部署能力")]),a._v(" "),_("li",[a._v("提供本地开发和调试能力")]),a._v(" "),_("li",[a._v("提供进程自定义扩展的能力")]),a._v(" "),_("li",[a._v("提供 Metrics API，以及接入三方 APM 的能力")])])])}],!1,null,null,null);v.options.__file="introduce.md";s.default=v.exports}}]);