(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{471:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"platformloggersettings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#platformloggersettings"}},[t._v("#")]),t._v(" PlatformLoggerSettings "),e("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { PlatformLoggerSettings } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.12.1/packages/common/src/config/interfaces/PlatformLoggerSettings.ts#L0-L0"}},[t._v("/packages/common/src/config/interfaces/PlatformLoggerSettings.ts")])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("div",{staticClass:"language-typescript"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" PlatformLoggerSettings "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * Enable debug mode. By default debug is false.\n     */\n    debug?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Enable info mode. By default debug is false.\n     */\n    level?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),t._v(' | "info" | "warn" | "error" | "off"'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Fields displayed when a request is logged. Possible values"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" `reqId`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `method`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `url`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `headers`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `body`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `query`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("`params`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `duration`.\n     */\n    requestFields?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"reqId" | "method" | "url" | "headers" | "body" | "query" | "params" | "duration" | '),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * List of regexp to ignore log.\n     */\n    ignoreUrlPatterns?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Log all incoming request. By default is true and print the configured `logger.requestFields`.\n     */\n    logRequest?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Log start of all incoming request. By default is true\n     */\n    logStart?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Log end of all incoming request. By default is true\n     */\n    logEnd?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),t._v(" of space characters to use "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" white space in JSON output. "),e("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Default.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Default")])]),t._v(" is 2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0 in production"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    jsonIndentation?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A function called for each incoming request to create a request id.\n     * @returns "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    reqIdBuilder?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Disable routes table displayed in the logger. By default debug is `false`.\n     */\n    disableRoutesSummary?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Specify log format. "),e("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Example.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Example")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" `%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("%d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("yyyy-MM-dd hh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ss"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("SSS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" %p%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" %m`. See "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@tsed/logger configuration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//typedproject.github.io/logger/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    format?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Specify the log stack size for the context.logger. When the stack.length is reach"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the logger is flushed during the request.\n     * "),e("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Default.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Default")])]),t._v(" size is set to 30.\n     */\n    maxStackSize?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),e("h2",{attrs:{id:"members"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("debug?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Enable debug mode. By default debug is false.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("level?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),t._v(' | "info" | "warn" | "error" | "off"'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Enable info mode. By default debug is false.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("requestFields?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"reqId" | "method" | "url" | "headers" | "body" | "query" | "params" | "duration" | '),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Fields displayed when a request is logged. Possible values: "),e("code",[t._v("reqId")]),t._v(", "),e("code",[t._v("method")]),t._v(", "),e("code",[t._v("url")]),t._v(", "),e("code",[t._v("headers")]),t._v(", "),e("code",[t._v("body")]),t._v(", "),e("code",[t._v("query")]),t._v(","),e("code",[t._v("params")]),t._v(", "),e("code",[t._v("duration")]),t._v(".")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("ignoreUrlPatterns?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("List of regexp to ignore log.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("logRequest?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Log all incoming request. By default is true and print the configured "),e("code",[t._v("logger.requestFields")]),t._v(".")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("logStart?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Log start of all incoming request. By default is true")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("logEnd?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Log end of all incoming request. By default is true")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("jsonIndentation?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("The number of space characters to use as white space in JSON output. Default is 2 (0 in production).")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("reqIdBuilder?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("A function called for each incoming request to create a request id.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("disableRoutesSummary?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Disable routes table displayed in the logger. By default debug is "),e("code",[t._v("false")]),t._v(".")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("format?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Specify log format. Example: "),e("code",[t._v("%[%d{[yyyy-MM-dd hh:mm:ss,SSS}] %p%] %m")]),t._v(". See "),e("a",{pre:!0,attrs:{href:"https://typedproject.github.io/logger/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@tsed/logger configuration"),e("OutboundLink",{pre:!0})],1),t._v(".")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("maxStackSize?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Specify the log stack size for the context.logger. When the stack.length is reach, the logger is flushed during the request.\nDefault size is set to 30.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);