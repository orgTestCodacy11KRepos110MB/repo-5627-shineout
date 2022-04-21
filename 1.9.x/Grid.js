(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[25],{1555:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(560),c=n(562),s=n(41),o=n(1556),l=n.n(o),u=n(1557),f=n.n(u),d=Object(s.b)(l.a,f.a),h=[{name:"01-base",title:Object(s.b)("任意等分 \n Grid 的栅格体系是动态生成，可以实现任意等份","Arbitrary \n Grid system is dynamic generated and can be any number."),component:n(1558).default,rawText:n(1559)},{name:"02-offset",title:Object(s.b)("偏移 \n offset 属性可以设置偏移，取值方式和宽度相同","Offset \n The offset property set the offset in the same way as the width."),component:n(1560).default,rawText:n(1561)},{name:"03-nested",title:Object(s.b)("嵌套 \n 嵌套的栅格","Nested \n Nested grids"),component:n(1562).default,rawText:n(1563)},{name:"04-gutter",title:Object(s.b)("间距 \n 通过 gutter 属性设置栅格间距","Gutter \n Set grid spacing through the gutter property."),component:n(1564).default,rawText:n(1565)}];e.default=Object(i.a)(function(t){return a.a.createElement(c.b,Object.assign({},t,{codes:void 0,source:d,examples:h}))})},1556:function(t,e){t.exports="# Grid *栅格*\n\n动态栅格体系，用于某些不适合使用 flex 的地方\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| gutter | number | 无 | 栅格之间间距 |\n| offset | number | 0 | 左偏移百分比，0 <= offset < 1 |\n| style | object | 无 | 最外层扩展样式 |\n| width | number | 1 | 宽度百分比，0 < number <= 1 |\n"},1557:function(t,e){t.exports="# Grid\n\n<example />\n\n# API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| gutter | number | none | Spacing between grids |\n| offset | number | 0 | Left offset percentage, 0 <= offset < 1 |\n| style | object | - | Container element style |\n| width | number | 1 | Percentage of width, 0 < number <= 1 |"},1558:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return h});var a=n(4),i=n(5),c=n(6),s=n(7),o=n(2),r=n(0),l=n.n(r),u=n(309),f=n(314);function d(r){return function(){var t,e=Object(o.a)(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(o.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(s.a)(this,t)}}var h=function(t){Object(c.a)(r,t);var n=d(r);function r(t){var e;return Object(a.a)(this,r),(e=n.call(this,t)).handleCountChange=function(t){e.setState({count:t})},e.state={count:5},e}return Object(i.a)(r,[{key:"render",value:function(){var n=this.state.count;return l.a.createElement("div",null,l.a.createElement(u.a,{formatValue:!1,scale:[1,2,3,5,8,13,21,34,55],step:0,value:n,onChange:this.handleCountChange}),l.a.createElement("div",{style:{height:20}}),Array.from({length:n}).map(function(t,e){return l.a.createElement("div",{key:e,style:{background:"#f2f2f2",marginBottom:4,lineHeight:"30px"}},l.a.createElement(f.a,{width:(e+1)/n,style:{color:"#fff",paddingLeft:8,background:"#3399ff"}},e+1,"/",n))}))}}]),r}(r.Component)},1559:function(t,e){t.exports="/**\n * cn - 任意等分\n *    -- Grid 的栅格体系是动态生成，可以实现任意等份\n * en - Arbitrary\n *    -- Grid system is dynamic generated and can be any number.\n */\nimport React, { Component } from 'react'\nimport { Grid, Slider } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 5 }\n  }\n\n  handleCountChange = count => {\n    this.setState({ count })\n  }\n\n  render() {\n    const { count } = this.state\n\n    return (\n      <div>\n        <Slider\n          formatValue={false}\n          scale={[1, 2, 3, 5, 8, 13, 21, 34, 55]}\n          step={0}\n          value={count}\n          onChange={this.handleCountChange}\n        />\n\n        <div style={{ height: 20 }} />\n\n        {Array.from({ length: count }).map((n, i) => (\n          <div key={i} style={{ background: '#f2f2f2', marginBottom: 4, lineHeight: '30px' }}>\n            <Grid width={(i + 1) / count} style={{ color: '#fff', paddingLeft: 8, background: '#3399ff' }}>\n              {i + 1}/{count}\n            </Grid>\n          </div>\n        ))}\n      </div>\n    )\n  }\n}\n"},1560:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(314),c={color:"#fff",lineHeight:"60px",textAlign:"center",background:"#3399ff"};e.default=function(){return a.a.createElement("div",{style:{background:"#f2f2f2"}},a.a.createElement(i.a,{width:1/3,offset:1/3,style:c},"With 1/3, Offset 1/3"))}},1561:function(t,e){t.exports="/**\n * cn - 偏移\n *    -- offset 属性可以设置偏移，取值方式和宽度相同\n * en - Offset\n *    -- The offset property set the offset in the same way as the width.\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '60px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <div style={{ background: '#f2f2f2' }}>\n      <Grid width={1 / 3} offset={1 / 3} style={style}>\n        With 1/3, Offset 1/3\n      </Grid>\n    </div>\n  )\n}\n"},1562:function(t,e,n){"use strict";n.r(e);var r=n(12),a=n(0),i=n.n(a),c=n(314),s={color:"#fff",lineHeight:"30px",textAlign:"center",background:"#3399ff"};e.default=function(){return i.a.createElement(c.a,{style:{textAlign:"center"}},i.a.createElement(c.a,{width:.5,style:s},"1/2"),i.a.createElement(c.a,{width:.5,style:{lineHeight:"30px"}},i.a.createElement("div",null,"1/2"),i.a.createElement("div",null,i.a.createElement(c.a,{style:s,width:1/3},"1/3"),i.a.createElement(c.a,{style:Object(r.a)(Object(r.a)({},s),{},{background:"#f5f5f5",color:"#333"}),width:1/3},"1/3"),i.a.createElement(c.a,{style:s,width:1/3},"1/3"))))}},1563:function(t,e){t.exports="/**\n * cn - 嵌套\n *    -- 嵌套的栅格\n * en - Nested\n *    -- Nested grids\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '30px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <Grid style={{ textAlign: 'center' }}>\n      <Grid width={1 / 2} style={style}>\n        1/2\n      </Grid>\n\n      <Grid width={1 / 2} style={{ lineHeight: '30px' }}>\n        <div>1/2</div>\n        <div>\n          <Grid style={style} width={1 / 3}>\n            1/3\n          </Grid>\n          <Grid style={{ ...style, background: '#f5f5f5', color: '#333' }} width={1 / 3}>\n            1/3\n          </Grid>\n          <Grid style={style} width={1 / 3}>\n            1/3\n          </Grid>\n        </div>\n      </Grid>\n    </Grid>\n  )\n}\n"},1564:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(314),c={color:"#fff",lineHeight:"30px",textAlign:"center",background:"#3399ff"};e.default=function(){return a.a.createElement("div",{style:{background:"#f2f2f2"}},a.a.createElement(i.a,{gutter:8},Array.from({length:8}).map(function(t,e){return e+1}).map(function(t){return a.a.createElement(i.a,{key:t,width:1/8},a.a.createElement("div",{style:c},"1/8"))})))}},1565:function(t,e){t.exports="/**\n * cn - 间距\n *    -- 通过 gutter 属性设置栅格间距\n * en - Gutter\n *    -- Set grid spacing through the gutter property.\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '30px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <div style={{ background: '#f2f2f2' }}>\n      <Grid gutter={8}>\n        {Array.from({ length: 8 })\n          .map((_, i) => i + 1)\n          .map(i => (\n            <Grid key={i} width={1 / 8}>\n              <div style={style}>1/8</div>\n            </Grid>\n          ))}\n      </Grid>\n    </div>\n  )\n}\n"},309:function(t,e,n){"use strict";var r=n(60),l=n(15),u=n(26),a=n(4),i=n(5),c=n(1),s=n(6),o=n(7),f=n(2),d=n(0),h=n.n(d),p=n(14),g=n.n(p),m=n(155),v=n(28),b=n(17),y=n(21);function O(r){return function(){var t,e=Object(f.a)(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(f.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(o.a)(this,t)}}function j(r){return function(){var t,e=Object(f.a)(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(f.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(o.a)(this,t)}}var E=Object(y.curry)(function(e){var t=function(t){Object(s.a)(r,t);var n=O(r);function r(t){var e;return Object(a.a)(this,r),(e=n.call(this,t)).handleDragStart=e.handleDragStart.bind(Object(c.a)(e)),e.handleDrag=e.handleDrag.bind(Object(c.a)(e)),e.handleDragEnd=e.handleDragEnd.bind(Object(c.a)(e)),e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.client;t&&(this.clientX=t.x,this.clientY=t.y,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"addEvents",value:function(){document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.addEventListener("mouseleave",this.handleDragEnd)}},{key:"removeEvents",value:function(){document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.removeEventListener("mouseleave",this.handleDragEnd)}},{key:"handleDragStart",value:function(t){0===t.button&&(this.clientX=t.clientX,this.clientY=t.clientY,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"handleDrag",value:function(t){if(this.dragging&&(0!==t.clientX||0!==t.clientY)){var e=t.clientX-this.clientX,n=t.clientY-this.clientY;0===e&&0===n||(this.clientX=t.clientX,this.clientY=t.clientY,this.props.onDrag(e,n,t.clientX,t.clientY))}}},{key:"handleDragEnd",value:function(){this.dragging&&(this.dragging=!1,this.removeEvents(),this.props.onDragEnd(!1))}},{key:"render",value:function(){return h.a.createElement(e,Object.assign({},this.props,{onDragStart:this.handleDragStart}))}}]),r}(d.PureComponent);return t.defaultProps={client:void 0,onDragStart:function(){},onDrag:function(){},onDragEnd:function(){}},t})(function(t){Object(s.a)(n,t);var e=j(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.disabled?void 0:this.props.onDragStart;return h.a.createElement("div",{onMouseDown:t,className:Object(m.a)("indicator")})}}]),n}(d.PureComponent)),D=n(69);function k(n,t){var e=t.length-1,r=0;if(t.forEach(function(t,e){t<n&&(r=e)}),e<=r)return 1;var a=t[r],i=t[r+1];return(r+(n-a)/(i-a))/e}function x(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,r=e.length-1;if(0===n)return e[Math.round(t*r)];if(1<=t)return e[r];var a=Math.floor(t*r),i=e[a],c=(e[a+1]-i)/n,s=(t-a/r)*r;return Object(D.toPrecision)(i+Math.round(s*c)*n)}function w(r){return function(){var t,e=Object(f.a)(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(f.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(o.a)(this,t)}}var R=function(t){Object(s.a)(r,t);var n=w(r);function r(t){var e;return Object(a.a)(this,r),(e=n.call(this,t)).state={dragging:!1,length:k(t.value,t.scale)},e.bindElement=e.bindElement.bind(Object(c.a)(e)),e.handleDrag=e.handleDrag.bind(Object(c.a)(e)),e.handleDragEnd=e.handleDragEnd.bind(Object(c.a)(e)),e}return Object(i.a)(r,[{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.value,r=e.scale,a=this.state.dragging,i=r.length;(t.value!==n||!a&&t.scale[i-1]!==r[i-1])&&this.setState({length:k(n,r)})}},{key:"bindElement",value:function(t){t&&(this.parentElement=t.parentElement)}},{key:"length2value",value:function(t){var e=this.props;return x(t,e.scale,e.step)}},{key:"handleDrag",value:function(t,e){var n=this.props,r=n.scale,a=n.onDrag,i=n.value,c=n.vertical,s=n.onIncrease,o=c?e/this.parentElement.clientHeight:t/this.parentElement.clientWidth,l=this.state.length,u=this.props.min?k(this.props.min,r):0,f=this.props.max?k(this.props.max,r):1,d=l+(c?-o:o),h=1<d;if(d<u&&(d=u),f<d&&(d=f),h&&s&&s(),this.setState({length:d,dragging:!0}),a){var p=this.length2value(d);p!==i&&a(p)}}},{key:"handleDragEnd",value:function(){var t=this.state.length,e=this.props.scale,n=this.length2value(t);this.setState({length:k(n,e),dragging:!1}),this.props.onChange(this.props.index,n)}},{key:"renderResult",value:function(){var t=this.props,e=t.autoHide,n=t.formatValue;if(!n)return null;var r=this.state.dragging,a=Object(m.a)("result",(!e||r)&&"show"),i=n(this.length2value(this.state.length));return h.a.createElement("div",{className:a},i)}},{key:"render",value:function(){var t=this.props,e=t.index,n=t.disabled,r=t.vertical,a=this.state.length;1===e&&(a=1-a);var i=Object(v.a)({},r?"height":"width","".concat(100*a,"%")),c=Object(m.a)("bar",r&&(1===e?"top":"bottom"),!r&&1===e&&"right");return h.a.createElement("div",{ref:this.bindElement,style:i,className:c},this.renderResult(),h.a.createElement("div",{className:Object(m.a)("bar-bg")}),h.a.createElement(E,{disabled:n,onDrag:this.handleDrag,onDragEnd:this.handleDragEnd}))}}]),r}(b.b);R.defaultProps={formatValue:function(t){return t}};var C=R,G=n(68);function S(r){return function(){var t,e=Object(f.a)(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(f.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(o.a)(this,t)}}var A=function(t){Object(s.a)(r,t);var n=S(r);function r(t){var e;return Object(a.a)(this,r),(e=n.call(this,t)).state={},e.bindElement=e.bindElement.bind(Object(c.a)(e)),e.handleClick=e.handleClick.bind(Object(c.a)(e)),e.handleChange=e.handleChange.bind(Object(c.a)(e)),e.handleFirstDrag=e.handleDrag.bind(Object(c.a)(e),0),e.handleSecondDrag=e.handleDrag.bind(Object(c.a)(e),1),e}return Object(i.a)(r,[{key:"getValue",value:function(){var t=this.props,e=t.range,n=t.value,r=t.scale[0];if(!e)return n||r;var a=n;return e&&!Array.isArray(n)&&(a=[r,r]),a[0]>a[1]&&(a=[a[1],a[0]]),a}},{key:"bindElement",value:function(t){this.innerElement=t}},{key:"handleClick",value:function(t){if(!(0<=t.target.className.indexOf(Object(m.a)("indicator"))||this.props.disabled)){var e=this.props,n=e.scale,r=e.step,a=e.vertical,i=e.range,c=this.innerElement.getBoundingClientRect(),s=x(a?1-(t.clientY-c.top)/c.height:(t.clientX-c.left)/c.width,n,r);if(i){var o=Object(u.a)(this.getValue());s<o[0]?o[0]=s:o[1]=s,this.props.onChange(o)}else this.props.onChange(s)}}},{key:"handleChange",value:function(t,e){if(this.props.range){var n=Object(u.a)(this.getValue());n[t]=e,this.props.onChange(n)}else this.props.onChange(e)}},{key:"handleDrag",value:function(t,e){this.props.range||this.props.onDrag(e)}},{key:"renderScale",value:function(){var t=this.props,e=t.autoHide,n=t.formatScale,r=t.scale;return n?h.a.createElement("div",{className:Object(m.a)("scale",!e&&"show")},r.map(function(t,e){return h.a.createElement("div",{key:t},h.a.createElement("span",null,n(t,e)))})):null}},{key:"render",value:function(){var t=this.props,e=t.range,n=t.height,r=t.style,a=t.vertical,i=Object(l.a)(t,["range","height","style","vertical"]),c=g()(Object(m.a)("_",a&&"vertical",this.props.disabled&&"disabled"),this.props.className),s=this.getValue();Array.isArray(s)||(s=[0,s]);var o=r;return a&&(o=Object.assign({height:n},r)),h.a.createElement("div",Object.assign({style:o,className:c},Object(G.a)(i)),h.a.createElement("div",{className:Object(m.a)("background")}),h.a.createElement("div",{ref:this.bindElement,onClick:this.handleClick,className:Object(m.a)("inner")},e&&h.a.createElement(C,Object.assign({},i,{index:0,max:s[1],onChange:this.handleChange,value:s[0],vertical:a})),h.a.createElement(C,Object.assign({},i,{index:1,min:s[0],onChange:this.handleChange,value:s[1],vertical:a}))),this.renderScale())}}]),r}(d.PureComponent);A.defaultProps={height:200,scale:[0,100],step:1,vertical:!1,formatScale:function(t){return t}};var N=A,P=Object(r.a)(N);P.displayName="ShineoutSlider";e.a=P},314:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var p=n(12),g=n(15),r=n(4),a=n(5),i=n(6),c=n(7),s=n(2),m=n(0),v=n.n(m),o=n(14),b=n.n(o),y=n(250);function l(r){return function(){var t,e=Object(s.a)(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=Object(s.a)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Object(c.a)(this,t)}}var u=function(t){Object(i.a)(n,t);var e=l(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.width,n=void 0===e?1:e,r=t.offset,a=t.responsive,i=t.stretch,c=t.children,s=t.gutter,o=Object(g.a)(t,["width","offset","responsive","stretch","children","gutter"]),l=0,u=0;m.Children.toArray(c).forEach(function(t){t.type&&t.type.isGrid&&(t.props.width?u+=t.props.width:l+=1)});var f=0<l?(1-u)/l:0,d=b()(this.props.className,Object(y.a)({width:n,offset:r,responsive:a})),h=Object.assign({},this.props.style);return s&&0<s&&(h.width="auto",h.display="block",h.marginLeft="".concat(0-s/2,"px"),h.marginRight="".concat(0-s/2,"px")),v.a.createElement("div",Object.assign({},o,{style:h,className:d}),m.Children.toArray(c).map(function(t){if(t.type&&t.type.isGrid){var e={style:Object.assign({},t.props.style)};return t.props.width||(e.width=f),i&&(e.style=Object(p.a)(Object(p.a)({},e.style),{},{minHeight:"100%",height:"100%"})),s&&0<s&&(e.style=Object(p.a)(Object(p.a)({},e.style),{},{paddingLeft:s/2,paddingRight:s/2})),Object(m.cloneElement)(t,e)}return t}))}}]),n}(m.PureComponent);u.isGrid=!0,u.displayName="ShineoutGrid"}}]);