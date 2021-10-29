(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[38],{1462:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(557),c=n(559),s=n(40),l=n(1463),i=n.n(l),u=n(1464),p=n.n(u),d=Object(s.b)(i.a,p.a),f=[{name:"1-base",title:Object(s.b)("基本用法 \n 基础的进度条","Base \n Basic progress bar"),component:n(1465).default,rawText:n(1466)},{name:"1-popup",title:Object(s.b)("弹出展示 \n 设置 popup 属性后，children 会通过弹出框展示","Popup \n After setting the popup property, children will be displayed through a popup box"),component:n(1467).default,rawText:n(1468)},{name:"2-type",title:Object(s.b)("样式 \n 内置了四种样式，通过 type 来调用","Type \n There are 4 built-in style."),component:n(1469).default,rawText:n(1470)},{name:"3-color",title:Object(s.b)(" \n 通过 color 使用自定义颜色","Color \n Use custom colors."),component:n(1471).default,rawText:n(1472)},{name:"3-linear",title:Object(s.b)("渐变色 \n 当 color 为对象时可以设置渐变色, 推荐只使用两种颜色","Gradient \n Gradient color can be set when color is an object, recommended only in two colors"),component:n(1473).default,rawText:n(1474)},{name:"4-circle",title:Object(s.b)("圆形 \n 设置 shape 为 'circle'，显示为环形进度条","Circle \n Set the shape property to circle to display circular progress bar."),component:n(1475).default,rawText:n(1476)},{name:"5-size",title:Object(s.b)("大小 \n 通过 size 或 style 来控制大小 \n 通过 strokeWidth 属性来控制线框宽度","Size \n Set size(circle) or style(line) property to change the size."),component:n(1477).default,rawText:n(1478)},{name:"6-animation",title:Object(s.b)("动态示例 \n value 变更时动画效果演示","Animation \n The animation for changing value."),component:n(1479).default,rawText:n(1480)}];t.default=Object(o.a)(function(e){return a.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:d,examples:f}))})},1463:function(e,t){e.exports="# Progress *进度条*\n\n<example />\n\n## API \n\n| 属性 | 类型 | 默认值 | 说明 | 可用版本 |\n| --- | --- | --- | --- | --- |\n| background | string | '#e9ecef' | 背景色 | |\n| className | string | - | 扩展className | |\n| children | string \\| ReactNode | - | 附加内容 | |\n| color | string \\| { from: string, to: string} \\| { '0%': string, '100%': string} | primary | 前景色, 可以设置为对象变成渐变.  | 渐变色: 1.4.2 |\n| shape | string | 'line' | 样式，可选值为 \\['line', 'circle'] | |\n| size | number | 100 | 进度条大小，仅对 circle 有效 | |\n| strokeWidth | number | 8 | 线框宽度 | |\n| style | object | 无 | 最外层扩展样式 | |\n| type | string | 无 | 内置配色，可选值为，\\['success', 'info', 'warning', 'danger'] | |\n| value | number | 0 | 百分比值，0 <= value <= 100 | |\n| popup | boolean | false | 通过弹出框展示 children | |\n"},1464:function(e,t){e.exports="# Progress\n\n<example />\n\n## API \n\n| Property | Type | Default | Description | version |\n| --- | --- | --- | --- | --- |\n| background | string | '#e9ecef' | Background color | |\n| className | string | - | Extend className | |\n| children | string \\| ReactNode | - | Content | |\n| color | string \\| { from: string, to: string} \\| { '0%': string, '100%': string} | primary | The foreground color can be set to the object to become a gradient.  | gradient: 1.4.2 |\n| shape | string | 'line' | Options:  \\['line', 'circle'] | |\n| size | number | 100 | The width and height of 'circle' shape. | |\n| strokeWidth | number | 8 | The width of the stroke | |\n| style | object | - | Container element style | |\n| type | string | - | Built-in color, options: \\['success', 'info', 'warning', 'danger'] | |\n| value | number | 0 | Percentage, 0 <= value <= 100 | |\n| popup | boolean | false | show children with popup | |"},1465:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(302);t.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(o.a,{value:50}),a.a.createElement("br",null),a.a.createElement(o.a,{value:50},"50%"))}},1466:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 基础的进度条\n * en - Base\n *    -- Basic progress bar\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={50} />\n      <br />\n      <Progress value={50}>50%</Progress>\n    </div>\n  )\n}\n"},1467:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var c=n(4),r=n(5),s=n(6),a=n(7),o=n(2),l=n(0),i=n.n(l),u=n(302),p=n(66);function d(r){return function(){var e,t=Object(o.a)(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(o.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(a.a)(this,e)}}var f=function(e){Object(s.a)(o,e);var a=d(o);function o(){var t;Object(c.a)(this,o);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=a.call.apply(a,[this].concat(n))).state={value:0},t.handleClick=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t.state.value;100<=(e+=12*Math.random())?(e=100,t.setState({value:e})):t.setState({value:e},function(){setTimeout(t.handleClick,160)})},t}return Object(r.a)(o,[{key:"render",value:function(){var e=this.state.value;return i.a.createElement("div",{style:{width:400}},i.a.createElement(u.a,{value:e,popup:!0},"".concat(parseInt(e,10),"%")),i.a.createElement("br",null),i.a.createElement(p.a,{onClick:this.handleClick.bind(this,0)},"Start"))}}]),o}(i.a.Component)},1468:function(e,t){e.exports="/**\n * cn - 弹出展示\n *    -- 设置 popup 属性后，children 会通过弹出框展示\n * en - Popup\n *    -- After setting the popup property, children will be displayed through a popup box\n */\nimport React from 'react'\nimport { Progress, Button } from 'shineout'\n\nexport default class extends React.Component {\n  state = {\n    value: 0,\n  }\n\n  handleClick = (value = this.state.value) => {\n    value += Math.random() * 12\n    if (value >= 100) {\n      value = 100\n      this.setState({ value })\n    } else {\n      this.setState({ value }, () => {\n        setTimeout(this.handleClick, 160)\n      })\n    }\n  }\n\n  render() {\n    const { value } = this.state\n    return (\n      <div style={{ width: 400 }}>\n        <Progress value={value} popup>{`${parseInt(value, 10)}%`}</Progress>\n        <br />\n        <Button onClick={this.handleClick.bind(this, 0)}>Start</Button>\n      </div>\n    )\n  }\n}\n"},1469:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(302);t.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(o.a,{value:100,type:"success"}),a.a.createElement("br",null),a.a.createElement(o.a,{value:90,type:"info"}),a.a.createElement("br",null),a.a.createElement(o.a,{value:80,type:"warning"}),a.a.createElement("br",null),a.a.createElement(o.a,{value:70,type:"danger"}))}},1470:function(e,t){e.exports='/**\n * cn - 样式\n *    -- 内置了四种样式，通过 type 来调用\n * en - Type\n *    -- There are 4 built-in style.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={100} type="success" />\n      <br />\n      <Progress value={90} type="info" />\n      <br />\n      <Progress value={80} type="warning" />\n      <br />\n      <Progress value={70} type="danger" />\n    </div>\n  )\n}\n'},1471:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(302);t.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(o.a,{value:60,color:"#531dab"}),a.a.createElement("br",null),a.a.createElement(o.a,{value:50,color:"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)"}))}},1472:function(e,t){e.exports="/**\n * cn -\n *    -- 通过 color 使用自定义颜色\n * en - Color\n *    -- Use custom colors.\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={60} color=\"#531dab\" />\n      <br />\n      <Progress\n        value={50}\n        color=\"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)\"\n      />\n    </div>\n  )\n}\n"},1473:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(302),c="#108ee9",s="#87d068";t.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(o.a,{value:99,color:{"0%":c,"100%":s}},"99%"),a.a.createElement("br",null),a.a.createElement(o.a,{value:99,color:{from:s,to:c}},"99%"),a.a.createElement("br",null),a.a.createElement(o.a,{value:99,color:{"0%":c,"100%":s},shape:"circle"},"99%"))}},1474:function(e,t){e.exports="/**\n * cn - 渐变色\n *    -- 当 color 为对象时可以设置渐变色, 推荐只使用两种颜色\n * en - Gradient\n *    -- Gradient color can be set when color is an object, recommended only in two colors\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nconst blue = '#108ee9'\nconst green = '#87d068'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress\n        value={99}\n        color={{\n          '0%': blue,\n          '100%': green,\n        }}\n      >\n        99%\n      </Progress>\n      <br />\n      <Progress\n        value={99}\n        color={{\n          from: green,\n          to: blue,\n        }}\n      >\n        99%\n      </Progress>\n      <br />\n      <Progress\n        value={99}\n        color={{\n          '0%': blue,\n          '100%': green,\n        }}\n        shape=\"circle\"\n      >\n        99%\n      </Progress>\n    </div>\n  )\n}\n"},1475:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(302);t.default=function(){return a.a.createElement("div",null,a.a.createElement(o.a,{shape:"circle",style:{marginRight:20},value:30}),a.a.createElement(o.a,{shape:"circle",style:{marginRight:20},value:70},"70%"),a.a.createElement(o.a,{shape:"circle",type:"success",style:{marginRight:20},value:100},"Success"),a.a.createElement(o.a,{shape:"circle",strokeLinecap:"butt",color:"#531dab",value:70}))}},1476:function(e,t){e.exports='/**\n * cn - 圆形\n *    -- 设置 shape 为 \'circle\'，显示为环形进度条\n * en - Circle\n *    -- Set the shape property to circle to display circular progress bar.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Progress shape="circle" style={{ marginRight: 20 }} value={30} />\n\n      <Progress shape="circle" style={{ marginRight: 20 }} value={70}>\n        70%\n      </Progress>\n\n      <Progress shape="circle" type="success" style={{ marginRight: 20 }} value={100}>\n        Success\n      </Progress>\n\n      <Progress shape="circle" strokeLinecap="butt" color="#531dab" value={70} />\n    </div>\n  )\n}\n'},1477:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(302);t.default=function(){return a.a.createElement("div",null,a.a.createElement(o.a,{style:{width:120},strokeWidth:3,value:30}),a.a.createElement("br",null),a.a.createElement(o.a,{shape:"circle",size:50,strokeWidth:6,style:{marginRight:20},value:70}),a.a.createElement(o.a,{shape:"circle",type:"warning",style:{marginRight:20,width:70,height:70},value:70},"70%"),a.a.createElement(o.a,{shape:"circle",type:"success",value:100},"Success"))}},1478:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 通过 size 或 style 来控制大小\n *    -- 通过 strokeWidth 属性来控制线框宽度\n * en - Size\n *    -- Set size(circle) or style(line) property to change the size.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Progress style={{ width: 120 }} strokeWidth={3} value={30} />\n\n      <br />\n\n      <Progress shape="circle" size={50} strokeWidth={6} style={{ marginRight: 20 }} value={70} />\n\n      <Progress shape="circle" type="warning" style={{ marginRight: 20, width: 70, height: 70 }} value={70}>\n        70%\n      </Progress>\n\n      <Progress shape="circle" type="success" value={100}>\n        Success\n      </Progress>\n    </div>\n  )\n}\n'},1479:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var a=n(4),o=n(5),c=n(6),s=n(7),l=n(2),r=n(0),i=n.n(r),u=n(302),p=n(66);function d(r){return function(){var e,t=Object(l.a)(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(l.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(s.a)(this,e)}}var f=function(e){Object(c.a)(r,e);var n=d(r);function r(e){var t;return Object(a.a)(this,r),(t=n.call(this,e)).handleClick=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t.state.value;100<=(e+=12*Math.random())?(e=100,t.setState({value:e})):t.setState({value:e},function(){setTimeout(t.handleClick,320)})},t.state={value:0},t}return Object(o.a)(r,[{key:"render",value:function(){var e=this.state.value;return i.a.createElement("div",null,i.a.createElement(u.a,{style:{width:400},value:e},i.a.createElement("div",{style:{width:50}},e.toFixed(0))),i.a.createElement("br",null),i.a.createElement(u.a,{shape:"circle",type:"success",value:e},e.toFixed(0),"%"),i.a.createElement(p.a,{style:{marginLeft:80},onClick:this.handleClick.bind(this,0)},"Start"))}}]),r}(r.Component)},1480:function(e,t){e.exports="/**\n * cn - 动态示例\n *    -- value 变更时动画效果演示\n * en - Animation\n *    -- The animation for changing value.\n */\nimport React, { Component } from 'react'\nimport { Button, Progress } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { value: 0 }\n  }\n\n  handleClick = (value = this.state.value) => {\n    value += Math.random() * 12\n    if (value >= 100) {\n      value = 100\n      this.setState({ value })\n    } else {\n      this.setState({ value }, () => {\n        setTimeout(this.handleClick, 320)\n      })\n    }\n  }\n\n  render() {\n    const { value } = this.state\n\n    return (\n      <div>\n        <Progress style={{ width: 400 }} value={value}>\n          <div style={{ width: 50 }}>{value.toFixed(0)}</div>\n        </Progress>\n\n        <br />\n\n        <Progress shape=\"circle\" type=\"success\" value={value}>\n          {value.toFixed(0)}%\n        </Progress>\n\n        <Button style={{ marginLeft: 80 }} onClick={this.handleClick.bind(this, 0)}>\n          Start\n        </Button>\n      </div>\n    )\n  }\n}\n"},302:function(e,t,n){"use strict";var r=n(0),v=n.n(r),a=n(13),g=n.n(a),o=n(604),c=n.n(o),s=n(9),b=Object(s.a)(c.a,"progress"),y=function(n){return n.from?[{pos:"0%",color:n.from},{pos:"100%",color:n.to}]:Object.keys(n).sort(function(e,t){return window.parseInt(e)-window.parseInt(t)}).reduce(function(e,t){return e.push({pos:t,color:n[t]}),e},[])},l=n(4),i=n(5),u=n(6),p=n(7),d=n(2);function f(r){return function(){var e,t=Object(d.a)(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(d.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(p.a)(this,e)}}var h=function(e){Object(u.a)(n,e);var t=f(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"getStyle",value:function(){var e=this.props.value,t=0;return t=e<=60?e/60*15:15*(1-e/100),{left:"".concat(e,"%"),transform:"translateX(-50%) rotate(".concat(t,"deg)")}}},{key:"render",value:function(){var e=this.props.children;return v.a.createElement("div",{className:b("popup"),style:this.getStyle()},v.a.createElement("span",{className:b("value")},e),v.a.createElement("span",{className:b("arrow")}))}}]),n}(v.a.Component);function m(e){var t=e.children,n=e.strokeWidth,r=e.type,a=e.value,o=e.color,c=e.style,s=e.background,l=e.popup,i=void 0!==t,u=l&&i,p=g()(b("line",r,u&&"line-popup"),e.className),d={width:"".concat(a/100*100,"%"),borderRadius:n/2};return"string"==typeof o?(d.background=o,d.backgroundSize="1em 1em"):"object"==typeof o&&(d.background="linear-gradient(to right, ".concat(y(o).reduce(function(e,t){var n="".concat(t.color," ").concat(t.pos);return e?"".concat(e,",").concat(n):n},""),")")),v.a.createElement("div",{className:p,style:c},v.a.createElement("div",{className:b("background"),style:{height:n,background:s,borderRadius:n/2}},v.a.createElement("div",{className:b("front"),style:d})),i&&(l?v.a.createElement(h,Object.assign({},e,{value:a})):v.a.createElement("div",{className:b("content")},t)))}m.defaultProps={strokeWidth:8};var E=m;function k(e){var t=e.children,n=e.strokeWidth,r=e.type,a=e.color,o=e.size,c=e.value,s=e.background,l=e.strokeLinecap,i=g()(b("circle",r),e.className),u=100-Math.ceil(2*n/o*100),p=2*Math.PI*u,d=[p*(c/100),p*(1-c/100)],f=Object.assign({width:o,height:o},e.style),h=0===c&&"round"===l?0:2*n,m=a&&"object"==typeof a;return v.a.createElement("div",{className:i,style:f},v.a.createElement("svg",{viewBox:"0 0 200 200"},m?v.a.createElement("defs",null,v.a.createElement("linearGradient",{id:"progress-linear",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},y(a).map(function(e){return v.a.createElement("stop",{key:e.pos,offset:e.pos,stopColor:e.color})}))):null,v.a.createElement("circle",{className:b("background"),cx:"100",cy:"100",r:u,strokeWidth:2*n,fill:"transparent",style:{stroke:s}}),v.a.createElement("circle",{className:b("front"),cx:"100",cy:"100",r:u,fill:"transparent",style:{stroke:m?"url('#progress-linear')":a},strokeDasharray:d,strokeLinecap:l,strokeWidth:h})),t&&v.a.createElement("div",{className:b("content")},t))}k.defaultProps={strokeLinecap:"round",strokeWidth:8,size:100};var w=k;function P(e){switch(e.shape){case"circle":return v.a.createElement(w,e);default:return v.a.createElement(E,e)}}P.defaultProps={shape:"line"},P.displayName="ShineoutProgress";t.a=P},604:function(e,t){}}]);