(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[23],{300:function(e,t,n){"use strict";var a=n(21),o=n(186),r=n(187),i=n(59),l=n(79),u=n(15),s=n(4),c=n(5),h=n(1),d=n(23),p=n(6),f=n(7),b=n(2),v=n(0),m=n.n(v),g=n(17),y=n(36),w=n(189);function j(a){return function(){var e,t=Object(b.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(b.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(f.a)(this,e)}}var O=function(e){Object(p.a)(n,e);var t=j(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).defaultInfo=function(e){if(!e||0===e.length)return null;var t=a.props.info,n="".concat(e.length," / ").concat(t);return e.length<=t?n:new Error(n)},a.state={height:0},a.bindShadow=a.bindShadow.bind(Object(h.a)(a)),a.handleBlur=a.handleBlur.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(h.a)(a)),a.resize=a.resize.bind(Object(h.a)(a)),a.defaultInfo=a.defaultInfo.bind(Object(h.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){Object(d.a)(Object(b.a)(n.prototype),"componentDidMount",this).call(this),this.props.autosize&&this.resize()}},{key:"componentDidUpdate",value:function(e){this.props.autosize&&e.value!==this.props.value&&this.resize(this.props.value)}},{key:"bindShadow",value:function(e){this.shadow=e}},{key:"resize",value:function(e){(e||""===e)&&(this.shadow.value=e);var t=this.shadow?this.shadow.scrollHeight:0;this.setState({height:t})}},{key:"handleChange",value:function(e){this.props.onChange(e.target.value),this.props.autosize&&this.resize(e.target.value)}},{key:"handleKeyUp",value:function(e){var t=this.props.onEnterPress;13===e.keyCode&&t&&t(e.target.value,e)}},{key:"handleBlur",value:function(e){var t=e.target.value,n=this.props,a=n.forceChange,o=n.onBlur;o&&o(e),a(t)}},{key:"renderInfo",value:function(){var e=this.props.info,t="number"!=typeof e;if("function"!=typeof e&&t)return null;var n=(t?e:this.defaultInfo)(this.props.value);if(!n)return null;var a=n instanceof Error,o=a?n.message:n;return m.a.createElement("div",{key:"info",style:{minWidth:"auto"},className:Object(y.a)("bottom-right",a?"error":"tip")},o)}},{key:"render",value:function(){var e=this.props,t=e.autosize,n=(e.onChange,e.maxHeight),a=(e.info,e.onEnterPress,e.resize),o=Object(u.a)(e,["autosize","onChange","maxHeight","info","onEnterPress","resize"]),r=null==o.value?"":o.value,i=this.state.height||"auto",l=t?Object(y.a)("auto-size"):Object(y.a)(a&&"textarea-resize"),s=[m.a.createElement("textarea",Object.assign({},Object(w.a)(o),{key:"t",value:r,className:l,style:{height:i,maxHeight:n,overflow:"auto"},onChange:this.handleChange,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur})),this.renderInfo()];return t&&s.push(m.a.createElement("textarea",{key:"s",ref:this.bindShadow,className:Object(y.a)("shadow"),rows:o.rows,defaultValue:r})),s}}]),n}(g.b);O.defaultProps={rows:4,resize:!1};var C=O,x=Object(a.compose)(i.a,Object(l.a)({}),Object(o.a)(400),r.a)(C);x.displayName="ShineoutTextarea";t.a=x},320:function(e,t,n){"use strict";var a=n(21),o=n(186),r=n(187),i=n(59),l=n(4),s=n(5),u=n(1),c=n(6),h=n(7),d=n(2),p=n(0),f=n.n(p),b=n(13),v=n.n(b),m=n(300),g=n(84),y=n(85),w=n(888),j=n.n(w),O=n(9),C=Object(O.a)(j.a,"editableArea"),x=n(45),E=n(34);function k(a){return function(){var e,t=Object(d.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(d.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(h.a)(this,e)}}var P=function(e){Object(c.a)(a,e);var n=k(a);function a(e){var t;return Object(l.a)(this,a),(t=n.call(this,e)).state={value:e.value,showTextarea:!1},t.bindContainer=t.bindElement.bind(Object(u.a)(t),"container"),t.bindInput=t.bindElement.bind(Object(u.a)(t),"input"),t.renderInput=t.renderInput.bind(Object(u.a)(t)),t.renderTextarea=t.renderTextarea.bind(Object(u.a)(t)),t.onChange=t.onChange.bind(Object(u.a)(t)),t.onBlur=t.onBlur.bind(Object(u.a)(t)),t.autoFocus=t.autoFocus.bind(Object(u.a)(t)),t.handleFocus=t.handleFocus.bind(Object(u.a)(t)),t.showPop=t.updateShowTextarea.bind(Object(u.a)(t),!0),t.hidePop=t.updateShowTextarea.bind(Object(u.a)(t),!1),t.handleClear=t.onChange.bind(Object(u.a)(t),""),t}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.value,a=this.state.showTextarea;t.showTextarea!==a&&a&&this.autoFocus(),n!==e.value&&this.setState({value:n})}},{key:"onChange",value:function(e){var t=this.props.onChange;"function"==typeof t&&t(e),this.setState({value:e})}},{key:"onBlur",value:function(e){var t=this.props.onBlur;this.hidePop(),"function"==typeof t&&t(e)}},{key:"updateShowTextarea",value:function(e){e&&this.input&&(this.width=Object(E.getParent)(this.input,".".concat(C("input"))).offsetWidth),this.setState({showTextarea:e})}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;"function"==typeof t&&t(e)}},{key:"bindElement",value:function(e,t){this[e]=t}},{key:"autoFocus",value:function(){if(this.container){var e=this.container.querySelector(".".concat(C("text-area")," textarea.so-input-auto-size"));e&&E.focusElement.end(e)}}},{key:"renderTextarea",value:function(){var e=this.state,t=e.showTextarea,n=e.value,a=this.props,o=a.delay,r=a.placeholder,i=a.maxHeight;return t?f.a.createElement("div",{ref:this.bindContainer},f.a.createElement(m.a,{className:C("text-area"),autosize:!0,value:n,rows:1,delay:o,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.handleFocus,placeholder:r,maxHeight:i})):null}},{key:"renderInput",value:function(){var e=this.state.value,t=this.props,n=t.placeholder,a=t.disabled;return f.a.createElement(g.a,{forwardedRef:this.bindInput,placeholder:n,value:function(e){if(!e&&0!==e)return"";var t=String(e).split("\n");return 1<t.length?"".concat(t[0],"..."):String(e)}(e),className:C("input"),onFocus:this.showPop,disabled:a})}},{key:"render",value:function(){var e=this.state,t=e.showTextarea,n=e.value,a=this.props,o=a.width,r=a.style,i=a.className,l=a.bordered,s=a.clearable,u=a.getPopupContainer,c=v()(i,C("_",!l&&"none-bordered")),h=Object.assign({width:o},r),d={width:this.width};return f.a.createElement("div",{className:c,style:h},this.renderInput(),f.a.createElement(y.a,{visible:t,showArrow:!1,className:C("popover"),position:"cover",style:d,getPopupContainer:u},this.renderTextarea()),s&&n?f.a.createElement("div",{className:C("clear"),onClick:this.handleClear},x.a.CloseCircle):null)}}]),a}(f.a.PureComponent);P.defaultProps={bordered:!1};var S=P,T=Object(a.compose)(i.a,Object(o.a)(400),r.a)(S);T.displayName="ShineoutEditableArea";t.a=T},884:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(557),i=n(559),l=n(40),s=n(885),u=n.n(s),c=n(886),h=n.n(c),d=Object(l.b)(u.a,h.a),p=[{name:"01-base",title:Object(l.b)("基本用法 \n EditableArea 默认展示一行，超过一行的内容用...代替","Base \n Editablearea displays one line by default, and more than one line is replaced by ..."),component:n(887).default,rawText:n(889)},{name:"02-controlled",title:Object(l.b)("受控 \n 传递value, onChange使组件受控","Controlled \n Pass value and onChange props to make the component controlled"),component:n(890).default,rawText:n(891)},{name:"03-container",title:Object(l.b)("自定义容器 \n 在内滚容器中使用此组件，可使用 getPopupContainer 指定渲染的目标容器，使之随之滚动","Custom container \n use getPopupContainer return target container"),component:n(892).default,rawText:n(893)}];t.default=Object(r.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})},885:function(e,t){e.exports="# EditableArea *可编辑域*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string | 无 | 设置初始值 |\n| value | string | 无 | 受控时，传入的value |\n| className | string | 无 | 扩展外层className |\n| onChange | (value: string) => void | 无 | 值改变时的回调函数，和value一起设置时使组件受控 |\n| style | object | 无 | 组件最外层的扩展样式 |\n| bordered | boolean | false | 是否显示外边框 |\n| disabled | boolean | false | 是否禁用 |\n| clearable | boolean | true | 是否展示清除按钮 |\n| placeholder | string | 无 | 同原生 textarea 标签的 placeholder |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒 |\n| trim | boolean | false | trim 为 true 时，失去焦点时会自动删除空白字符 |\n| onBlur | (e: MouseEvent) => void | 无 | 失去焦点事件 |\n| onFocus | (e: MouseEvent) => void | 无 | 聚焦事件 |\n| maxHeight | number \\| string | 无 | 输入框的最大高度, 超过之后会出现滚动条 | \n| getPopupContainer | () => HTMLElement | 无 | 自定义Popover容器，覆盖默认渲染在body下的行为, () => DOMElement |\n| width | number \\| string | 无 | 编辑域宽度 |"},886:function(e,t){e.exports="# EditableArea\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string | none | Set initial value |\n| value | string | none | The value passed in when controlled |\n| className | string | none | The outermost extension className of a component |\n| onChange | (value: string) => void | none | Callback function when the value changes, making the component controlled when set with value |\n| style | object | none | The outermost extension style of a component |\n| bordered | boolean | false | Whether to show the border |\n| disabled | boolean | false | Whether to disable |\n| clearable | boolean | true | Whether to show the clear button |\n| placeholder | string | none | The same as the native placeholder tag |\n| delay | number | 400 | User input triggers the onChange and to check interval, unit: ms. |\n| trim | boolean | false | When trim is true, blank characters are automatically deleted when lose focus |\n| onBlur | (e: MouseEvent) => void | none | blur event |\n| onFocus | (e: MouseEvent) => void | none | focus event |\n| maxHeight | number \\| string | - | the maxHeight of the textarea, scroll bars appear after more than | \n| getPopupContainer | () => HTMLElement | none | Custom Popover container, override the default behavior which is rendering under the body, () => DOMElement |\n| width | number \\| string | none | width of the editablearea |"},887:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(320);t.default=function(){return o.a.createElement(r.a,{bordered:!0,placeholder:"input something"})}},888:function(e,t){},889:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- EditableArea 默认展示一行，超过一行的内容用...代替\n * en - Base\n *    -- Editablearea displays one line by default, and more than one line is replaced by ...\n */\n\nimport React from 'react'\nimport { EditableArea } from 'shineout'\n\nexport default function() {\n  return <EditableArea bordered placeholder=\"input something\" />\n}\n"},890:function(e,t,n){"use strict";n.r(t);var o=n(28),r=n(0),i=n.n(r),l=n(320);t.default=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1];return i.a.createElement(l.a,{value:n,placeholder:"Input something",onChange:function(e){a(e)},width:400,onBlur:function(){console.log("EditableArea: onBlur")}})}},891:function(e,t){e.exports="/**\n * cn - 受控\n *    -- 传递value, onChange使组件受控\n * en - Controlled\n *    -- Pass value and onChange props to make the component controlled\n */\n\nimport React, { useState } from 'react'\nimport { EditableArea } from 'shineout'\n\nexport default function() {\n  const [value, setValue] = useState('')\n  return (\n    <EditableArea\n      value={value}\n      placeholder=\"Input something\"\n      onChange={val => {\n        setValue(val)\n      }}\n      width={400}\n      onBlur={() => {\n        console.log('EditableArea: onBlur')\n      }}\n    />\n  )\n}\n"},892:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(320);t.default=function(){return o.a.createElement("div",{id:"popup-target",style:{height:200,overflow:"auto",position:"relative",padding:10}},o.a.createElement("div",{style:{height:100}}),o.a.createElement(r.a,{bordered:!0,placeholder:"scroll in container",getPopupContainer:function(){return document.querySelector("#popup-target")},maxHeight:100}),o.a.createElement("div",{style:{height:140}}))}},893:function(e,t){e.exports="/**\n * cn - 自定义容器\n *    -- 在内滚容器中使用此组件，可使用 getPopupContainer 指定渲染的目标容器，使之随之滚动\n * en - Custom container\n *    -- use getPopupContainer return target container\n */\nimport React from 'react'\nimport { EditableArea } from 'shineout'\n\nexport default function() {\n  return (\n    <div id=\"popup-target\" style={{ height: 200, overflow: 'auto', position: 'relative', padding: 10 }}>\n      <div style={{ height: 100 }} />\n      <EditableArea\n        bordered\n        placeholder=\"scroll in container\"\n        getPopupContainer={() => document.querySelector('#popup-target')}\n        maxHeight={100}\n      />\n      <div style={{ height: 140 }} />\n    </div>\n  )\n}\n"}}]);