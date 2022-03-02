(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[10],{1163:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),o=t(560),r=t(562),c=t(40),s=t(1164),l=t.n(s),d=t(1165),m=t.n(d),u=Object(c.b)(l.a,m.a),f=[{name:"1-base",title:Object(c.b)("基本用法 \n 轮播组件提供了三种动画过渡方式，可以切换选项查看效果","Base \n The carousel component provides three modes of animation transition. Change the option to view the result."),component:t(1166).default,rawText:t(1167)},{name:"2-custom-indicator",title:Object(c.b)("自定义 Indicator \n 当 indicatorType 为函数时，可以自定义 Indicator","Custom Indicator \n Indicators can be customized when indicatorType is a function."),component:t(1168).default,rawText:t(1170)}];e.default=Object(o.a)(function(n){return a.a.createElement(r.b,Object.assign({},n,{codes:void 0,source:u,examples:f}))})},1164:function(n,e){n.exports="# Carousel *轮播*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| animation | string | 'slide' | 动画效果，可选值为<br />slide - 横向滑动<br />slide-y - 垂直滑动<br />fade - 淡入淡出 |\n| className | string | 无 | 扩展className |\n| indicatorPosition | 'left' \\| 'center' \\| 'right' | 'center' | 指示标示位置 |\n| indicatorType | (current: number, moveTo: () => void) => ReactNode \\| string | 'circle' | 指示标示样式，字符串可以是：\\['circle', 'number', 'line']，函数则可以自定义样式: (current, moveTo) => (<Component /\\>) |\n| interval | number | 0 | 动画间隔时间，为 0 时，不自动播放 |\n| style | object | 无 | 最外层扩展样式 |\n| onMove | (current: number, extra: object) => void | 无 | 轮播后回调 |\n"},1165:function(n,e){n.exports="# Carousel\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| animation | string | 'slide' | animation effects, options: <br />slide - horizontal sliding<br />slide-y - vertical sliding<br />fade - fading |\n| className | string | none | extend className |\n| indicatorPosition | 'left' \\| 'center' \\| 'right'  | 'center' | the position of indicator |\n| indicatorType | (current: number, moveTo: () => void) => ReactNode \\| string | 'circle' | the style of indicator, string options: \\['circle', 'number', 'line'], using function for custom styles |\n| interval | number | 0 | the interval of animation, When it is not 0, play automatically |\n| onMove | (current: number, extra: object) => void | none | move callback |"},1166:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return v});var a=t(28),o=t(4),r=t(5),c=t(6),s=t(7),l=t(2),i=t(0),d=t.n(i),m=t(198),u=t(253);function f(i){return function(){var n,e=Object(l.a)(i);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var t=Object(l.a)(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return Object(s.a)(this,n)}}var p={fontSize:40,color:"#fff",display:"flex",margin:"auto"},v=function(n){Object(c.a)(i,n);var t=f(i);function i(n){var e;return Object(o.a)(this,i),(e=t.call(this,n)).state={interval:5e3,animation:"slide",indicatorType:"circle",indicatorPosition:"center"},e}return Object(r.a)(i,[{key:"propChange",value:function(n,e){this.setState(Object(a.a)({},n,e))}},{key:"render",value:function(){var n=this.state,e=n.interval,t=n.animation,i=n.indicatorPosition,a=n.indicatorType;return d.a.createElement("div",null,d.a.createElement("div",{style:{marginBottom:20}},"animation:"," ",d.a.createElement(m.a,{data:["slide","slide-y","fade"],keygen:!0,style:{width:100},value:t,size:"small",onChange:this.propChange.bind(this,"animation")}),"　indicatorPosition: ",d.a.createElement(m.a,{data:["left","center","right"],keygen:!0,style:{width:90},value:i,size:"small",onChange:this.propChange.bind(this,"indicatorPosition")}),"　indicatorType: ",d.a.createElement(m.a,{data:["circle","number","line"],keygen:!0,style:{width:90},value:a,size:"small",onChange:this.propChange.bind(this,"indicatorType")})),d.a.createElement(u.a,{style:{width:500,height:300},interval:e,animation:t,indicatorPosition:i,indicatorType:a},d.a.createElement("div",{style:{background:"#666",display:"flex"}},d.a.createElement("div",{style:p},"Page 1")),d.a.createElement("div",{style:{background:"#fa8c16",display:"flex"}},d.a.createElement("div",{style:p},"Page 2")),d.a.createElement("div",{style:{background:"#eb2f96",display:"flex"}},d.a.createElement("div",{style:p},"Page 3")),d.a.createElement("a",null,d.a.createElement("img",{alt:"",style:{width:"100%",height:"100%"},src:"../../../images/1_b.jpg"}))))}}]),i}(i.Component)},1167:function(n,e){n.exports="/**\n * cn - 基本用法\n *    -- 轮播组件提供了三种动画过渡方式，可以切换选项查看效果\n * en - Base\n *    -- The carousel component provides three modes of animation transition. Change the option to view the result.\n */\nimport React, { Component } from 'react'\nimport { Carousel, Select } from 'shineout'\n\nconst containerStyle = {\n  fontSize: 40,\n  color: '#fff',\n  display: 'flex',\n  margin: 'auto',\n}\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      interval: 5000,\n      animation: 'slide',\n      indicatorType: 'circle',\n      indicatorPosition: 'center',\n    }\n  }\n\n  propChange(key, value) {\n    this.setState({ [key]: value })\n  }\n\n  render() {\n    const { interval, animation, indicatorPosition, indicatorType } = this.state\n\n    return (\n      <div>\n        <div style={{ marginBottom: 20 }}>\n          animation:\n{' '}\n          <Select\n            data={['slide', 'slide-y', 'fade']}\n            keygen\n            style={{ width: 100 }}\n            value={animation}\n            size=\"small\"\n            onChange={this.propChange.bind(this, 'animation')}\n          />\n          {'　indicatorPosition: '}\n          <Select\n            data={['left', 'center', 'right']}\n            keygen\n            style={{ width: 90 }}\n            value={indicatorPosition}\n            size=\"small\"\n            onChange={this.propChange.bind(this, 'indicatorPosition')}\n          />\n          {'　indicatorType: '}\n          <Select\n            data={['circle', 'number', 'line']}\n            keygen\n            style={{ width: 90 }}\n            value={indicatorType}\n            size=\"small\"\n            onChange={this.propChange.bind(this, 'indicatorType')}\n          />\n        </div>\n\n        <Carousel\n          style={{ width: 500, height: 300 }}\n          interval={interval}\n          animation={animation}\n          indicatorPosition={indicatorPosition}\n          indicatorType={indicatorType}\n        >\n          <div style={{ background: '#666', display: 'flex' }}>\n            <div style={containerStyle}>Page 1</div>\n          </div>\n          <div style={{ background: '#fa8c16', display: 'flex' }}>\n            <div style={containerStyle}>Page 2</div>\n          </div>\n          <div style={{ background: '#eb2f96', display: 'flex' }}>\n            <div style={containerStyle}>Page 3</div>\n          </div>\n          <a>\n            <img alt=\"\" style={{ width: '100%', height: '100%' }} src=\"../../../images/1_b.jpg\" />\n          </a>\n        </Carousel>\n      </div>\n    )\n  }\n}\n"},1168:function(n,e,t){"use strict";t.r(e);var i=t(0),c=t.n(i),a=t(253),o=t(14),s=t.n(o),r=(t(1169),{fontSize:40,color:"#fff",display:"flex",margin:"auto"}),l=["S","H","I","N","E"];function d(o,r){return c.a.createElement("div",{className:"indicator"},l.map(function(n,e){var t=o===e,i=s()("indicator-item",t&&"active"),a=t?{animation:"indicator-rise ".concat(5,"s linear")}:{};return c.a.createElement("div",{key:n,onClick:function(){return r(e)},className:i},c.a.createElement("span",null,n),c.a.createElement("div",{className:"indicator-progress"},c.a.createElement("div",{className:"fg",style:a}),c.a.createElement("div",{className:"bg"})))}))}e.default=function(){return c.a.createElement(a.a,{indicatorType:d,style:{width:500,height:300},interval:5e3},l.map(function(n){return c.a.createElement("div",{key:n,style:{background:"#2e97f1",display:"flex"}},c.a.createElement("div",{style:r},n))}))}},1169:function(n,e){},1170:function(n,e){n.exports="/**\n * cn - 自定义 Indicator\n *    -- 当 indicatorType 为函数时，可以自定义 Indicator\n * en - Custom Indicator\n *    -- Indicators can be customized when indicatorType is a function.\n */\nimport React from 'react'\nimport { Carousel } from 'shineout'\nimport classnames from 'classnames'\nimport './style-2-custom-indicator.less'\n\nconst duration = 5000\nconst containerStyle = {\n  fontSize: 40,\n  color: '#fff',\n  display: 'flex',\n  margin: 'auto',\n}\n\nconst items = ['S', 'H', 'I', 'N', 'E']\n\nfunction indicatorSwitch(current, moveTo) {\n  return (\n    <div className=\"indicator\">\n      {items.map((item, index) => {\n        const isActive = current === index\n        const itemClassname = classnames('indicator-item', isActive && 'active')\n        const animationStyle = isActive ? { animation: `indicator-rise ${duration / 1000}s linear` } : {}\n        return (\n          <div key={item} onClick={() => moveTo(index)} className={itemClassname}>\n            <span>{item}</span>\n            <div className=\"indicator-progress\">\n              <div className=\"fg\" style={animationStyle} />\n              <div className=\"bg\" />\n            </div>\n          </div>\n        )\n      })}\n    </div>\n  )\n}\n\nexport default function() {\n  return (\n    <Carousel indicatorType={indicatorSwitch} style={{ width: 500, height: 300 }} interval={duration}>\n      {items.map(item => (\n        <div key={item} style={{ background: '#2e97f1', display: 'flex' }}>\n          <div style={containerStyle}>{item}</div>\n        </div>\n      ))}\n    </Carousel>\n  )\n}\n\n/* style-2-custom-indicator.css\n@keyframes indicator-rise {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\ndiv.indicator {\n  text-align: center;\n  user-select: none;\n  float: left;\n}\ndiv.indicator-item {\n  margin-right: 10px;\n  float: left;\n  width: 36px;\n  height: 30px;\n  font-size: 20px;\n  color: #ffffff50;\n  cursor: pointer;\n}\ndiv.indicator-item.active {\n  color: #fff;\n}\ndiv.indicator .indicator-progress {\n  position: relative;\n}\ndiv.indicator .indicator-progress > div {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n}\ndiv.indicator .indicator-progress .bg {\n  width: 100%;\n  background: #ffffff50;\n}\ndiv.indicator .indicator-progress .fg {\n  width: 0;\n  background: #ffffff;\n}\n*/\n"}}]);