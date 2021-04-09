(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[25],{1518:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(547),s=n(548),c=n(35),l=n(1519),o=n.n(l),d=n(1520),u=n.n(d),h=Object(c.b)(o.a,u.a),f=[{name:"01-base",title:Object(c.b)("任意等分 \n Grid 的栅格体系是动态生成，可以实现任意等份","Arbitrary \n Grid system is dynamic generated and can be any number."),component:n(1521).default,rawText:n(1522)},{name:"02-offset",title:Object(c.b)("偏移 \n offset 属性可以设置偏移，取值方式和宽度相同","Offset \n The offset property set the offset in the same way as the width."),component:n(1523).default,rawText:n(1524)},{name:"03-nested",title:Object(c.b)("嵌套 \n 嵌套的栅格","Nested \n Nested grids"),component:n(1525).default,rawText:n(1526)},{name:"04-gutter",title:Object(c.b)("间距 \n 通过 gutter 属性设置栅格间距","Gutter \n Set grid spacing through the gutter property."),component:n(1527).default,rawText:n(1528)}];t.default=Object(i.a)(function(e){return r.a.createElement(s.b,Object.assign({},e,{codes:void 0,source:h,examples:f}))})},1519:function(e,t){e.exports="# Grid *栅格*\n\n动态栅格体系，用于某些不适合使用 flex 的地方\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| gutter | number | 无 | 栅格之间间距 |\n| offset | number | 0 | 左偏移百分比，0 <= offset < 1 |\n| style | object | 无 | 最外层扩展样式 |\n| width | number | 1 | 宽度百分比，0 < number <= 1 |\n"},1520:function(e,t){e.exports="# Grid\n\n<example />\n\n# API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| gutter | number | none | Spacing between grids |\n| offset | number | 0 | Left offset percentage, 0 <= offset < 1 |\n| style | object | - | Container element style |\n| width | number | 1 | Percentage of width, 0 < number <= 1 |"},1521:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(5),r=n(6),i=n(7),s=n(4),c=n(8),l=n(0),o=n.n(l),d=n(301),u=n(305),h=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(s.a)(n).call(this,e))).handleCountChange=function(e){t.setState({count:e})},t.state={count:5},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var n=this.state.count;return o.a.createElement("div",null,o.a.createElement(d.a,{formatValue:!1,scale:[1,2,3,5,8,13,21,34,55],step:0,value:n,onChange:this.handleCountChange}),o.a.createElement("div",{style:{height:20}}),Array.from({length:n}).map(function(e,t){return o.a.createElement("div",{key:t,style:{background:"#f2f2f2",marginBottom:4,lineHeight:"30px"}},o.a.createElement(u.a,{width:(t+1)/n,style:{color:"#fff",paddingLeft:8,background:"#3399ff"}},t+1,"/",n))}))}}]),n}(l.Component)},1522:function(e,t){e.exports="/**\n * cn - 任意等分\n *    -- Grid 的栅格体系是动态生成，可以实现任意等份\n * en - Arbitrary\n *    -- Grid system is dynamic generated and can be any number.\n */\nimport React, { Component } from 'react'\nimport { Grid, Slider } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 5 }\n  }\n\n  handleCountChange = count => {\n    this.setState({ count })\n  }\n\n  render() {\n    const { count } = this.state\n\n    return (\n      <div>\n        <Slider\n          formatValue={false}\n          scale={[1, 2, 3, 5, 8, 13, 21, 34, 55]}\n          step={0}\n          value={count}\n          onChange={this.handleCountChange}\n        />\n\n        <div style={{ height: 20 }} />\n\n        {Array.from({ length: count }).map((n, i) => (\n          <div key={i} style={{ background: '#f2f2f2', marginBottom: 4, lineHeight: '30px' }}>\n            <Grid width={(i + 1) / count} style={{ color: '#fff', paddingLeft: 8, background: '#3399ff' }}>\n              {i + 1}/{count}\n            </Grid>\n          </div>\n        ))}\n      </div>\n    )\n  }\n}\n"},1523:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(305),s={color:"#fff",lineHeight:"60px",textAlign:"center",background:"#3399ff"};t.default=function(){return r.a.createElement("div",{style:{background:"#f2f2f2"}},r.a.createElement(i.a,{width:1/3,offset:1/3,style:s},"With 1/3, Offset 1/3"))}},1524:function(e,t){e.exports="/**\n * cn - 偏移\n *    -- offset 属性可以设置偏移，取值方式和宽度相同\n * en - Offset\n *    -- The offset property set the offset in the same way as the width.\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '60px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <div style={{ background: '#f2f2f2' }}>\n      <Grid width={1 / 3} offset={1 / 3} style={style}>\n        With 1/3, Offset 1/3\n      </Grid>\n    </div>\n  )\n}\n"},1525:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n(0),i=n.n(r),s=n(305),c={color:"#fff",lineHeight:"30px",textAlign:"center",background:"#3399ff"};t.default=function(){return i.a.createElement(s.a,{style:{textAlign:"center"}},i.a.createElement(s.a,{width:.5,style:c},"1/2"),i.a.createElement(s.a,{width:.5,style:{lineHeight:"30px"}},i.a.createElement("div",null,"1/2"),i.a.createElement("div",null,i.a.createElement(s.a,{style:c,width:1/3},"1/3"),i.a.createElement(s.a,{style:Object(a.a)({},c,{background:"#f5f5f5",color:"#333"}),width:1/3},"1/3"),i.a.createElement(s.a,{style:c,width:1/3},"1/3"))))}},1526:function(e,t){e.exports="/**\n * cn - 嵌套\n *    -- 嵌套的栅格\n * en - Nested\n *    -- Nested grids\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '30px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <Grid style={{ textAlign: 'center' }}>\n      <Grid width={1 / 2} style={style}>\n        1/2\n      </Grid>\n\n      <Grid width={1 / 2} style={{ lineHeight: '30px' }}>\n        <div>1/2</div>\n        <div>\n          <Grid style={style} width={1 / 3}>\n            1/3\n          </Grid>\n          <Grid style={{ ...style, background: '#f5f5f5', color: '#333' }} width={1 / 3}>\n            1/3\n          </Grid>\n          <Grid style={style} width={1 / 3}>\n            1/3\n          </Grid>\n        </div>\n      </Grid>\n    </Grid>\n  )\n}\n"},1527:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(305),s={color:"#fff",lineHeight:"30px",textAlign:"center",background:"#3399ff"};t.default=function(){return r.a.createElement("div",{style:{background:"#f2f2f2"}},r.a.createElement(i.a,{gutter:8},Array.from({length:8}).map(function(e,t){return t+1}).map(function(e){return r.a.createElement(i.a,{key:e,width:1/8},r.a.createElement("div",{style:s},"1/8"))})))}},1528:function(e,t){e.exports="/**\n * cn - 间距\n *    -- 通过 gutter 属性设置栅格间距\n * en - Gutter\n *    -- Set grid spacing through the gutter property.\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '30px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <div style={{ background: '#f2f2f2' }}>\n      <Grid gutter={8}>\n        {Array.from({ length: 8 })\n          .map((_, i) => i + 1)\n          .map(i => (\n            <Grid key={i} width={1 / 8}>\n              <div style={style}>1/8</div>\n            </Grid>\n          ))}\n      </Grid>\n    </div>\n  )\n}\n"},301:function(e,t,n){"use strict";var a=n(50),o=n(13),d=n(23),r=n(5),i=n(6),s=n(7),c=n(4),l=n(8),u=n(1),h=n(0),f=n.n(h),g=n(15),p=n.n(g),m=n(2),b=n(28),v=n(18),y=n(19),O=Object(y.curry)(function(t){var e=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).handleDragStart=t.handleDragStart.bind(Object(u.a)(Object(u.a)(t))),t.handleDrag=t.handleDrag.bind(Object(u.a)(Object(u.a)(t))),t.handleDragEnd=t.handleDragEnd.bind(Object(u.a)(Object(u.a)(t))),t}return Object(l.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.client;e&&(this.clientX=e.x,this.clientY=e.y,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"addEvents",value:function(){document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.addEventListener("mouseleave",this.handleDragEnd)}},{key:"removeEvents",value:function(){document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.removeEventListener("mouseleave",this.handleDragEnd)}},{key:"handleDragStart",value:function(e){0===e.button&&(this.clientX=e.clientX,this.clientY=e.clientY,this.dragging=!0,this.addEvents(),this.props.onDragStart(!0))}},{key:"handleDrag",value:function(e){if(this.dragging&&(0!==e.clientX||0!==e.clientY)){var t=e.clientX-this.clientX,n=e.clientY-this.clientY;0===t&&0===n||(this.clientX=e.clientX,this.clientY=e.clientY,this.props.onDrag(t,n,e.clientX,e.clientY))}}},{key:"handleDragEnd",value:function(){this.dragging&&(this.dragging=!1,this.removeEvents(),this.props.onDragEnd(!1))}},{key:"render",value:function(){return f.a.createElement(t,Object.assign({},this.props,{onDragStart:this.handleDragStart}))}}]),n}(h.PureComponent);return e.defaultProps={client:void 0,onDragStart:function(){},onDrag:function(){},onDragEnd:function(){}},e})(function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.disabled?void 0:this.props.onDragStart;return f.a.createElement("div",{onMouseDown:e,className:Object(m.F)("indicator")})}}]),t}(h.PureComponent)),j=n(77);function E(n,e){var t=e.length-1,a=0;if(e.forEach(function(e,t){e<n&&(a=t)}),t<=a)return 1;var r=e[a],i=e[a+1];return(a+(n-r)/(i-r))/t}function k(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,a=t.length-1;if(0===n)return t[Math.round(e*a)];if(1<=e)return t[a];var r=Math.floor(e*a),i=t[r],s=(t[r+1]-i)/n,c=(e-r/a)*a;return Object(j.toPrecision)(i+Math.round(c*s)*n)}var x=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).state={dragging:!1,length:E(e.value,e.scale)},t.bindElement=t.bindElement.bind(Object(u.a)(Object(u.a)(t))),t.handleDrag=t.handleDrag.bind(Object(u.a)(Object(u.a)(t))),t.handleDragEnd=t.handleDragEnd.bind(Object(u.a)(Object(u.a)(t))),t}return Object(l.a)(n,e),Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,a=t.scale,r=this.state.dragging,i=a.length;(e.value!==n||!r&&e.scale[i-1]!==a[i-1])&&this.setState({length:E(n,a)})}},{key:"bindElement",value:function(e){e&&(this.parentElement=e.parentElement)}},{key:"length2value",value:function(e){var t=this.props;return k(e,t.scale,t.step)}},{key:"handleDrag",value:function(e,t){var n=this.props,a=n.scale,r=n.onDrag,i=n.value,s=n.vertical,c=n.onIncrease,l=s?t/this.parentElement.clientHeight:e/this.parentElement.clientWidth,o=this.state.length,d=this.props.min?E(this.props.min,a):0,u=this.props.max?E(this.props.max,a):1,h=o+(s?-l:l),f=1<h;if(h<d&&(h=d),u<h&&(h=u),f&&c&&c(),this.setState({length:h,dragging:!0}),r){var g=this.length2value(h);g!==i&&r(g)}}},{key:"handleDragEnd",value:function(){var e=this.state.length,t=this.props.scale,n=this.length2value(e);this.setState({length:E(n,t),dragging:!1}),this.props.onChange(this.props.index,n)}},{key:"renderResult",value:function(){var e=this.props,t=e.autoHide,n=e.formatValue;if(!n)return null;var a=this.state.dragging,r=Object(m.F)("result",(!t||a)&&"show"),i=n(this.length2value(this.state.length));return f.a.createElement("div",{className:r},i)}},{key:"render",value:function(){var e=this.props,t=e.index,n=e.disabled,a=e.vertical,r=this.state.length;1===t&&(r=1-r);var i=Object(b.a)({},a?"height":"width","".concat(100*r,"%")),s=Object(m.F)("bar",a&&(1===t?"top":"bottom"),!a&&1===t&&"right");return f.a.createElement("div",{ref:this.bindElement,style:i,className:s},this.renderResult(),f.a.createElement("div",{className:Object(m.F)("bar-bg")}),f.a.createElement(O,{disabled:n,onDrag:this.handleDrag,onDragEnd:this.handleDragEnd}))}}]),n}(v.b);x.defaultProps={formatValue:function(e){return e}};var D=x,w=n(75),C=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(c.a)(n).call(this,e))).state={},t.bindElement=t.bindElement.bind(Object(u.a)(Object(u.a)(t))),t.handleClick=t.handleClick.bind(Object(u.a)(Object(u.a)(t))),t.handleChange=t.handleChange.bind(Object(u.a)(Object(u.a)(t))),t.handleFirstDrag=t.handleDrag.bind(Object(u.a)(Object(u.a)(t)),0),t.handleSecondDrag=t.handleDrag.bind(Object(u.a)(Object(u.a)(t)),1),t}return Object(l.a)(n,e),Object(i.a)(n,[{key:"getValue",value:function(){var e=this.props,t=e.range,n=e.value,a=e.scale[0];if(!t)return n||a;var r=n;return t&&!Array.isArray(n)&&(r=[a,a]),r[0]>r[1]&&(r=[r[1],r[0]]),r}},{key:"bindElement",value:function(e){this.innerElement=e}},{key:"handleClick",value:function(e){if(!(0<=e.target.className.indexOf(Object(m.F)("indicator"))||this.props.disabled)){var t=this.props,n=t.scale,a=t.step,r=t.vertical,i=t.range,s=this.innerElement.getBoundingClientRect(),c=k(r?1-(e.clientY-s.top)/s.height:(e.clientX-s.left)/s.width,n,a);if(i){var l=Object(d.a)(this.getValue());c<l[0]?l[0]=c:l[1]=c,this.props.onChange(l)}else this.props.onChange(c)}}},{key:"handleChange",value:function(e,t){if(this.props.range){var n=Object(d.a)(this.getValue());n[e]=t,this.props.onChange(n)}else this.props.onChange(t)}},{key:"handleDrag",value:function(e,t){this.props.range||this.props.onDrag(t)}},{key:"renderScale",value:function(){var e=this.props,t=e.autoHide,n=e.formatScale,a=e.scale;return n?f.a.createElement("div",{className:Object(m.F)("scale",!t&&"show")},a.map(function(e,t){return f.a.createElement("div",{key:e},f.a.createElement("span",null,n(e,t)))})):null}},{key:"render",value:function(){var e=this.props,t=e.range,n=e.height,a=e.style,r=e.vertical,i=Object(o.a)(e,["range","height","style","vertical"]),s=p()(Object(m.F)("_",r&&"vertical",this.props.disabled&&"disabled"),this.props.className),c=this.getValue();Array.isArray(c)||(c=[0,c]);var l=a;return r&&(l=Object.assign({height:n},a)),f.a.createElement("div",Object.assign({style:l,className:s},Object(w.a)(i)),f.a.createElement("div",{className:Object(m.F)("background")}),f.a.createElement("div",{ref:this.bindElement,onClick:this.handleClick,className:Object(m.F)("inner")},t&&f.a.createElement(D,Object.assign({},i,{index:0,max:c[1],onChange:this.handleChange,value:c[0],vertical:r})),f.a.createElement(D,Object.assign({},i,{index:1,min:c[0],onChange:this.handleChange,value:c[1],vertical:r}))),this.renderScale())}}]),n}(h.PureComponent);C.defaultProps={height:200,scale:[0,100],step:1,vertical:!1,formatScale:function(e){return e}};var G=C,S=Object(a.a)(G);S.displayName="ShineoutSlider";t.a=S},305:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var g=n(21),p=n(13),a=n(5),r=n(6),i=n(7),s=n(4),c=n(8),m=n(0),b=n.n(m),l=n(15),v=n.n(l),y=n(157),o=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=void 0===t?1:t,a=e.offset,r=e.responsive,i=e.stretch,s=e.children,c=e.gutter,l=Object(p.a)(e,["width","offset","responsive","stretch","children","gutter"]),o=0,d=0;m.Children.toArray(s).forEach(function(e){e.type&&e.type.isGrid&&(e.props.width?d+=e.props.width:o+=1)});var u=0<o?(1-d)/o:0,h=v()(this.props.className,Object(y.a)({width:n,offset:a,responsive:r})),f=Object.assign({},this.props.style);return c&&0<c&&(f.width="auto",f.display="block",f.marginLeft="".concat(0-c/2,"px"),f.marginRight="".concat(0-c/2,"px")),b.a.createElement("div",Object.assign({},l,{style:f,className:h}),m.Children.toArray(s).map(function(e){if(e.type&&e.type.isGrid){var t={style:Object.assign({},e.props.style)};return e.props.width||(t.width=u),i&&(t.style=Object(g.a)({},t.style,{minHeight:"100%",height:"100%"})),c&&0<c&&(t.style=Object(g.a)({},t.style,{paddingLeft:c/2,paddingRight:c/2})),Object(m.cloneElement)(e,t)}return e}))}}]),t}(m.PureComponent);o.isGrid=!0,o.displayName="ShineoutGrid"}}]);