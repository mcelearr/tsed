(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{918:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"os2operation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os2operation"}},[t._v("#")]),t._v(" OS2Operation "),s("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[t._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { OS2Operation } "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@tsed/openspec"')])])])]),s("tr",[s("th",[t._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.12.1/packages/openspec/src/openspec2/OS2Operation.ts#L0-L0"}},[t._v("/packages/openspec/src/openspec2/OS2Operation.ts")])])])])])]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" OS2Operation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * A list of tags for API documentation control. "),s("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/Tags.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Tags")])]),t._v(" can be used for logical grouping of operations by resources or "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(" other qualifier.\n     */\n    tags?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A short summary of what the operation does. "),s("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/For.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("For")])]),t._v(" maximum readability in the swagger-ui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" this field SHOULD be less than 120 characters.\n     */\n    summary?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A verbose explanation of the operation behavior. GFM syntax can be used for rich text representation.\n     */\n    description?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Additional external documentation for this operation.\n     */\n    externalDocs?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecExternalDocs.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecExternalDocs")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Unique.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Unique")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" used to identify the operation. The id MUST be unique among all operations described in the API. Tools and libraries MAY use the operationId to uniquely identify an operation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" therefore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" it is recommended to follow common programming naming conventions.\n     */\n    operationId?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A list of MIME types the operation can consume. This overrides the consumes definition at the Swagger Object. An empty value MAY be used to clear the global definition. "),s("a",{pre:!0,attrs:{href:"/api/di/decorators/Value.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Value")])]),t._v(" MUST be "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" described under "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mime Types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    consumes?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A list of MIME types the operation can produce. This overrides the produces definition at the Swagger Object. An empty value MAY be used to clear the global definition. "),s("a",{pre:!0,attrs:{href:"/api/di/decorators/Value.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Value")])]),t._v(" MUST be "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" described under "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mime Types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    produces?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A list of parameters that are applicable for this operation.\n     * If a parameter is already defined at the "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/Path.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Path")])]),t._v(" Item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathItemParameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     * the new definition will override it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but can never remove it. The list MUST NOT include duplicated parameters.\n     * A unique parameter is defined by a combination of a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameterName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameterIn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".\n     * The list can use the "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Reference Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#referenceObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" to link to parameters that are defined at the "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Swagger Object's parameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swaggerParameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v('.\n     * There can be one "body" parameter at most.\n     */\n    parameters?'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Parameter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Parameter")])]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The list of possible responses "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" they are returned "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" executing this operation.\n     */\n    responses"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Response.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Response")])]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The transfer protocol of the API. Values MUST be "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" the list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" `http`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `https`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `ws`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `wss`. If the schemes is not included"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the default scheme to be used is the one used to access the Swagger definition itself.\n     */\n    schemes?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Declares this operation to be deprecated. Usage of the declared operation should be refrained. "),s("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Default.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Default")])]),t._v(" value is false.\n     */\n    deprecated?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A declaration of which security schemes are applied for this operation.\n     * The list of values describes alternative security schemes that can be used "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that is"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" there is a logical OR between the security requirements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     * This definition overrides "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(" declared top-level "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("security"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swaggerSecurity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     * To remove a top-level security declaration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" an empty array can be used.\n     */\n    security?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecSecurity.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecSecurity")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("tags?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("summary?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A short summary of what the operation does. For maximum readability in the swagger-ui, this field SHOULD be less than 120 characters.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("description?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A verbose explanation of the operation behavior. GFM syntax can be used for rich text representation.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("externalDocs?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecExternalDocs.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecExternalDocs")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Additional external documentation for this operation.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("operationId?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Unique string used to identify the operation. The id MUST be unique among all operations described in the API. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is recommended to follow common programming naming conventions.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("consumes?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A list of MIME types the operation can consume. This overrides the consumes definition at the Swagger Object. An empty value MAY be used to clear the global definition. Value MUST be as described under "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mime Types"),s("OutboundLink",{pre:!0})],1),t._v(".")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("produces?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A list of MIME types the operation can produce. This overrides the produces definition at the Swagger Object. An empty value MAY be used to clear the global definition. Value MUST be as described under "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#mimeTypes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mime Types"),s("OutboundLink",{pre:!0})],1),t._v(".")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("parameters?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Parameter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Parameter")])]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A list of parameters that are applicable for this operation.\nIf a parameter is already defined at the "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathItemParameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Path Item"),s("OutboundLink",{pre:!0})],1),t._v(",\nthe new definition will override it, but can never remove it. The list MUST NOT include duplicated parameters.\nA unique parameter is defined by a combination of a "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameterName",target:"_blank",rel:"noopener noreferrer"}},[t._v("name"),s("OutboundLink",{pre:!0})],1),t._v(" and (location)[https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#parameterIn].\nThe list can use the "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#referenceObject",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference Object"),s("OutboundLink",{pre:!0})],1),t._v(" to link to parameters that are defined at the "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swaggerParameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger Object's parameters"),s("OutboundLink",{pre:!0})],1),t._v('.\nThere can be one "body" parameter at most.')])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("responses"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecHash")])]),t._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec2/OS2Response.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OS2Response")])]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("The list of possible responses as they are returned from executing this operation.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("schemes?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("The transfer protocol of the API. Values MUST be from the list: "),s("code",[t._v("http")]),t._v(", "),s("code",[t._v("https")]),t._v(", "),s("code",[t._v("ws")]),t._v(", "),s("code",[t._v("wss")]),t._v(". If the schemes is not included, the default scheme to be used is the one used to access the Swagger definition itself.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("deprecated?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Declares this operation to be deprecated. Usage of the declared operation should be refrained. Default value is false.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("security?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecSecurity.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecSecurity")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("A declaration of which security schemes are applied for this operation.\nThe list of values describes alternative security schemes that can be used (that is, there is a logical OR between the security requirements).\nThis definition overrides any declared top-level "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#swaggerSecurity",target:"_blank",rel:"noopener noreferrer"}},[t._v("security"),s("OutboundLink",{pre:!0})],1),t._v(".\nTo remove a top-level security declaration, an empty array can be used.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);