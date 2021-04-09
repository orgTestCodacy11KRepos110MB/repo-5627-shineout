(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[50],{1105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(547),o=n(548),s=n(35),c=n(1106),l=n.n(c),d=n(1107),u=n.n(d),h=Object(s.b)(l.a,u.a),b=[{name:"1-base",title:Object(s.b)("基本用法 \n 基本的使用","Base \n Basic usage"),component:n(1108).default,rawText:n(1109)},{name:"2-controlled",title:Object(s.b)("受控 \n 组件受控","Controlled \n Component controlled"),component:n(1110).default,rawText:n(1111)},{name:"3-customTitle",title:Object(s.b)("自定义 \n 可以自定义标题, 按钮, 底部, 样式等属性","Customize \n Customizable title, button, bottom properties"),component:n(1112).default,rawText:n(1113)},{name:"4-selected",title:Object(s.b)("受控选中 \n 可以通过 selectedKeys 和 onSelectChange 去控制哪些列表项被选中 \n <b>注: 勾选的值均使用的是 keygen 的结果</b>","Controlled selected \n Can control which elements are selected by selectedKeys and onSelectChange"),component:n(1114).default,rawText:n(1115)},{name:"5-filter",title:Object(s.b)("筛选 \n 可以通过设置 onFilter 去筛选列表项","Filter \n Can filter list items by setting onFilter"),component:n(1116).default,rawText:n(1117)},{name:"6-loading",title:Object(s.b)("加载中 \n 穿梭框的加载中","Loading \n Loading"),component:n(1118).default,rawText:n(1119)},{name:"6-mloading",title:Object(s.b)(" \n 可以通过给 loading 设置数组的方式, 给两边设置一个不同的loading"," \n You can set an array for loading and set an unused loading for both sides"),component:n(1120).default,rawText:n(1121)},{name:"7-bigdata",title:Object(s.b)("性能 \n Transfer 内部使用了虚拟列表来优化性能，本例加载了10000条数据"," \n Transfer uses a lazy loading to optimize performance. This example loads 10,000 pieces of data."),component:n(1122).default,rawText:n(1123)}];t.default=Object(i.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:h,examples:b}))})},1106:function(e,t){e.exports="# Transfer *穿梭框*\n\n<example />\n\n## API\n\n** *为了统一及方便使用, 与勾选有关的 api 均使用 keygen 作为结果, 所以需要必填 keygen 且保证不会出现重复的 keygen**\n\n\n| 属性 | 类型 | 默认值 | 说明 | 版本 |\n| --- | --- | --- | --- | --- |\n| value | any[] | 无 | 显示在右侧框数据的值集合 | |\n| titles | ReactNode[] | 无 | 两侧的标题, 顺序是从左到右 | |\n| data | any[] | 无 | 数据源 | |\n| format | (data: any) => any \\| string | d => d | 格式化 value<br />默认值，返回原始数据<br />为string时，会作为key从原始数据中获取值，相当于 (d) => d\\[format\\]<br /> 为函数时，以函数返回结果作为 value | |\n| prediction | (value: any, data: any) => boolean | (val, d) => val===format(d) | 默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配 | |\n| keygen | ((data: any) => string) \\| string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) | |\n| renderItem | (data: any) => ReactNode \\| string | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 | |\n| footers | ReactNode[] | 无 | 底部元素, 顺序是从左到右 | |\n| operations | ReactNode[] | 无 | 操作元素, 顺序是从上到下 | |\n| operationIcon | boolean | true |  是否显示操作按钮的图标 | |\n| className | string | 无 | 扩展的 class | |\n| style | object | 无 |  扩展的样式 | |\n| listClassName | string | 无 | 列表扩展的 class | |\n| listStyle | object | 无 | 列表扩展的样式 | |\n| selectedKeys | any[] | 无 |  被勾选的列表 | |\n| defaultSelectedKeys | any[] | 无 |  默认被勾选的列表 | |\n| onSelectChange | (sourceKeys: any[], targetKeys: any[]) => void | 无 |   勾选触发的方法 | |\n| disabled | (data: any) => boolean \\| boolean| false | 如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项 | |\n| empty | ReactNode | \"无数据\" | 无内容的展示 | |\n| onFilter | (text: string, value: any, isSource: boolean) => boolean | 无 | 筛选函数, 参数为: 输入文本, 数据, 是否为左侧数据 | |\n| loading| boolean \\| boolean[] | 无 | 加载中, 如果需要两侧加载中状态不一致, 需要传入数组 | |\n| onSearch | (text: string, isSource: boolean) => void | 无 | 输入框值变化的回调, 参数为: 输入文本, 是否为左侧数据 | 1.4.4 |\n| rowsInView | number | 20 | 一次加载的数据条数 |\n| listHeight | number | 180 | 列表高度 |\n| lineHeight | number | 32 | 列表行高 |\n| children | (({onSelected, selectedKeys, value, direction, filterText}) => ReactNode) | null | 自定义渲染内容 |\n"},1107:function(e,t){e.exports="# Transfer\n\n<example />\n\n## API\n\n** *For uniformity and ease of use, keygen is used as the result for the apis associated with the check, so keygen is required and no duplicate keygen is guaranteed.**\n\n\n| Property | Type | Default | Description | Version |\n| --- | --- | --- | --- | -- |\n| value | any[] | - | The set of values ​​displayed in the box data on the right | |\n| titles | ReactNode[] | - | Title on both sides, order from left to right | |\n| data | any[] | - | data source | |\n| format | (data: any) => any \\| string | d => d | Format value<br />The defaule value is return the original data.<br />When it is a string, the value is fetched from the original data as a key equivalent to (d) => d\\[format\\]<br />When it is a function, use its return value. | |\n| prediction | (value: any, data: any) => boolean | (val, d) => val===format(d) | By default, the result of the format function is used to compare whether it matches. In some cases (for example, whe an object that returns the original data is updated, an different option with the same value  is generated), the prediction function needs to be used to determine whether match | |\n| keygen | ((data: any) => string) \\| string \\| true | index | Generate a auxiliary method for each key<br />If not filled, index will be used(not recommended,there may be problems with more than 10 data)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. | |\n| renderItem | (data: any) => ReactNode \\| string | required | When it is a string, return d\\[string]<br />When it is a function, return the result of the function. | |\n| footers | ReactNode[] | - | Bottom element, order from left to right | |\n| operations | ReactNode[] | - | Operational elements, the order is from top to bottom | |\n| operationIcon | boolean | true |  Whether to display the icon of the action button | |\n| className | string | - | Expanded class | |\n| style | object | - |  Expanded style | |\n| listClassName | string | - | List extended class | |\n| listStyle | object | - | List extension style | |\n| selectedKeys | any[] | - |  Checked list | |\n| defaultSelectedKeys | any[] | - | Default checked list | |\n| onSelectChange | (sourceKeys: any[], targetKeys: any[]) => void | - |  Check the trigger method | |\n| disabled | (data: any) => boolean \\| boolean | false | When the value is true, disabled all checkboxes; When the value is function, disable the checkbox that this function returns true. | |\n| empty | ReactNode | \"no data\" | Contentless display | |\n| onFilter | (text: string, value: any, isSource: boolean) => boolean | - | Filter function. params: input text, the data, is data in left |\n| loading| boolean \\| boolean[] | - | Loading, if you need to have inconsistent states on both sides of the load, you need to pass in the array | |\n| onSearch | (text: string, isSource: boolean) => void | - | the callback of input change, params: input text, is data in the left | 1.4.4 |\n| rowsInView | number | 20 | loaded rows |\n| listHeight | number | 180 | list height |\n| lineHeight | number | 32 | list line height |\n| children | (({onSelected, selectedKeys, value, direction, filterText}) => ReactNode) | null | custom render content |"},1108:function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),i=n(309),o=[],s=1;s<20;s++)o.push({id:s,content:"content ".concat(s)});t.default=function(){return r.a.createElement(i.a,{data:o,format:"id",renderItem:"content",keygen:"id",titles:["Source","Target"]})}},1109:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 基本的使用\n * en - Base\n *    -- Basic usage\n */\nimport React from 'react'\nimport { Transfer } from 'shineout'\n\nconst data = []\n\nfor (let i = 1; i < 20; i++) {\n  data.push({\n    id: i,\n    content: `content ${i}`,\n  })\n}\n\nexport default function() {\n  return <Transfer data={data} format=\"id\" renderItem=\"content\" keygen=\"id\" titles={['Source', 'Target']} />\n}\n"},1110:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});for(var a=n(5),r=n(6),i=n(7),o=n(4),s=n(8),c=n(0),l=n.n(c),d=n(309),u=[],h=1;h<20;h++)u.push({id:h,content:"content ".concat(h)});var b=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(o.a)(n).call(this,e))).onChange=function(e){console.log(e),t.setState({value:e})},t.state={value:[1,3,5,7,9]},t}return Object(s.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement(d.a,{data:u,value:this.state.value,onChange:this.onChange,format:"id",renderItem:"content",keygen:"id",disabled:function(e){return-1<e.content.indexOf("1")}})}}]),n}(c.Component)},1111:function(e,t){e.exports="/**\n * cn - 受控\n *    -- 组件受控\n * en - Controlled\n *    -- Component controlled\n */\nimport React, { Component } from 'react'\nimport { Transfer } from 'shineout'\n\nconst data = []\n\nfor (let i = 1; i < 20; i++) {\n  data.push({\n    id: i,\n    content: `content ${i}`,\n  })\n}\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      value: [1, 3, 5, 7, 9],\n    }\n  }\n\n  onChange = v => {\n    console.log(v)\n    this.setState({ value: v })\n  }\n\n  render() {\n    return (\n      <Transfer\n        data={data}\n        value={this.state.value}\n        onChange={this.onChange}\n        format=\"id\"\n        renderItem=\"content\"\n        keygen=\"id\"\n        disabled={d => d.content.indexOf('1') > -1}\n      />\n    )\n  }\n}\n"},1112:function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),i=n(309),o=n(57),s=[],c=1;c<30;c++)s.push({id:c,content:"content ".concat(c)});t.default=function(){return r.a.createElement(i.a,{titles:["I am left","I am right"],footers:[r.a.createElement(o.a,{style:{margin:4}},"left"),r.a.createElement(o.a,{style:{margin:4}},"right")],data:s,format:"id",renderItem:"content",keygen:"id",operations:["to right","to left"],listHeight:240})}},1113:function(e,t){e.exports="/**\n * cn - 自定义\n *    -- 可以自定义标题, 按钮, 底部, 样式等属性\n * en - Customize\n *    -- Customizable title, button, bottom properties\n */\nimport React from 'react'\nimport { Transfer, Button } from 'shineout'\n\nconst data = []\n\nfor (let i = 1; i < 30; i++) {\n  data.push({\n    id: i,\n    content: `content ${i}`,\n  })\n}\n\nexport default function() {\n  return (\n    <Transfer\n      titles={['I am left', 'I am right']}\n      footers={[<Button style={{ margin: 4 }}>left</Button>, <Button style={{ margin: 4 }}>right</Button>]}\n      data={data}\n      format=\"id\"\n      renderItem=\"content\"\n      keygen=\"id\"\n      operations={['to right', 'to left']}\n      listHeight={240}\n    />\n  )\n}\n"},1114:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});for(var a=n(23),r=n(5),i=n(6),o=n(7),s=n(4),c=n(8),l=n(0),d=n.n(l),u=n(309),h=[],b=1;b<20;b++)h.push({id:b,content:"content ".concat(b)});var m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).selectChange=function(e,t){n.setState({selectedKeys:[].concat(Object(a.a)(e),Object(a.a)(t))})},n.change=function(e){console.log(e),n.setState({value:e})},n.state={value:[1,3,5,7,9],selectedKeys:[1,2,3,4]},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.selectedKeys,n=e.value;return d.a.createElement(u.a,{data:h,selectedKeys:t,onSelectChange:this.selectChange,value:n,onChange:this.change,format:"id",renderItem:"content",keygen:"id"})}}]),t}(l.Component)},1115:function(e,t){e.exports='/**\n * cn - 受控选中\n *    -- 可以通过 selectedKeys 和 onSelectChange 去控制哪些列表项被选中\n *    -- <b>注: 勾选的值均使用的是 keygen 的结果</b>\n * en - Controlled selected\n *    -- Can control which elements are selected by selectedKeys and onSelectChange\n */\nimport React, { Component } from \'react\'\nimport { Transfer } from \'shineout\'\n\nconst data = []\n\nfor (let i = 1; i < 20; i++) {\n  data.push({\n    id: i,\n    content: `content ${i}`,\n  })\n}\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      value: [1, 3, 5, 7, 9],\n      selectedKeys: [1, 2, 3, 4],\n    }\n  }\n\n  selectChange = (sourceKeys, targetKeys) => {\n    this.setState({ selectedKeys: [...sourceKeys, ...targetKeys] })\n  }\n\n  change = v => {\n    console.log(v)\n    this.setState({ value: v })\n  }\n\n  render() {\n    const { selectedKeys, value } = this.state\n    return (\n      <Transfer\n        data={data}\n        selectedKeys={selectedKeys}\n        onSelectChange={this.selectChange}\n        value={value}\n        onChange={this.change}\n        format="id"\n        renderItem="content"\n        keygen="id"\n      />\n    )\n  }\n}\n'},1116:function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),i=n(309),o=[],s=1;s<20;s++)o.push({id:s,content:"content ".concat(s)});t.default=function(){return r.a.createElement(i.a,{onFilter:function(e,t){return-1<t.content.indexOf(e)},data:o,format:"id",renderItem:"content",keygen:"id"})}},1117:function(e,t){e.exports='/**\n * cn - 筛选\n *    -- 可以通过设置 onFilter 去筛选列表项\n * en - Filter\n *    -- Can filter list items by setting onFilter\n */\nimport React from \'react\'\nimport { Transfer } from \'shineout\'\n\nconst data = []\n\nfor (let i = 1; i < 20; i++) {\n  data.push({\n    id: i,\n    content: `content ${i}`,\n  })\n}\n\nexport default function() {\n  return (\n    <Transfer onFilter={(t, d) => d.content.indexOf(t) > -1} data={data} format="id" renderItem="content" keygen="id" />\n  )\n}\n'},1118:function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),i=n(309),o=[],s=1;s<20;s++)o.push({id:s,content:"content ".concat(s)});t.default=function(){return r.a.createElement(i.a,{loading:!0,data:o,format:"id",renderItem:"content",keygen:"id",titles:["Source","Target"]})}},1119:function(e,t){e.exports="/**\n * cn - 加载中\n *    -- 穿梭框的加载中\n * en -  Loading\n *    -- Loading\n */\nimport React from 'react'\nimport { Transfer } from 'shineout'\n\nconst data = []\n\nfor (let i = 1; i < 20; i++) {\n  data.push({\n    id: i,\n    content: `content ${i}`,\n  })\n}\n\nexport default function() {\n  return <Transfer loading data={data} format=\"id\" renderItem=\"content\" keygen=\"id\" titles={['Source', 'Target']} />\n}\n"},1120:function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),i=n(309),o=[],s=1;s<20;s++)o.push({id:s,content:"content ".concat(s)});t.default=function(){return r.a.createElement(i.a,{loading:[!0,!1],data:o,format:"id",renderItem:"content",keygen:"id",titles:["Source","Target"]})}},1121:function(e,t){e.exports="/**\n * cn -\n *    -- 可以通过给 loading 设置数组的方式, 给两边设置一个不同的loading\n * en -\n *    -- You can set an array for loading and set an unused loading for both sides\n */\nimport React from 'react'\nimport { Transfer } from 'shineout'\n\nconst data = []\n\nfor (let i = 1; i < 20; i++) {\n  data.push({\n    id: i,\n    content: `content ${i}`,\n  })\n}\n\nexport default function() {\n  return (\n    <Transfer\n      loading={[true, false]}\n      data={data}\n      format=\"id\"\n      renderItem=\"content\"\n      keygen=\"id\"\n      titles={['Source', 'Target']}\n    />\n  )\n}\n"},1122:function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),i=n(309),o=[],s=0;s<1e4;s++)o.push({id:s,content:"content ".concat(s)});t.default=function(){return r.a.createElement(i.a,{data:o,format:"id",renderItem:"content",keygen:"id",titles:["Source","Target"]})}},1123:function(e,t){e.exports="/**\n * cn - 性能\n *    -- Transfer 内部使用了虚拟列表来优化性能，本例加载了10000条数据\n * en -\n *    -- Transfer uses a lazy loading to optimize performance. This example loads 10,000 pieces of data.\n */\nimport React from 'react'\nimport { Transfer } from 'shineout'\n\nconst data = []\n\nfor (let i = 0; i < 10000; i++) {\n  data.push({\n    id: i,\n    content: `content ${i}`,\n  })\n}\n\nexport default function() {\n  return <Transfer data={data} format=\"id\" renderItem=\"content\" keygen=\"id\" titles={['Source', 'Target']} />\n}\n"},289:function(e,t,n){"use strict";var a=n(21),r=n(5),i=n(6),o=n(7),s=n(4),c=n(8),l=n(1),d=n(0),u=n.n(d),h=n(15),b=n.n(h),m=n(27),p=n(30),f=n(2),g=n(165),y=n(19),v=n(169),j=n(168),O=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).state={collapsed:e.defaultCollapsed,formStatus:""},t.bindElement=t.bindElement.bind(Object(l.a)(Object(l.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(l.a)(Object(l.a)(t))),t.handleCollapse=t.handleCollapse.bind(Object(l.a)(Object(l.a)(t))),t.setFormStatus=t.setFormStatus.bind(Object(l.a)(Object(l.a)(t))),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"getCollapsed",value:function(){var e=this.props,t=e.collapsible,n=e.collapsed;if(t)return void 0!==n?n:this.state.collapsed}},{key:"setFormStatus",value:function(e){e!==this.state.formStatus&&this.setState({formStatus:e})}},{key:"bindElement",value:function(e){this.element=e;var t=this.props.forwardedRef;t&&t(e)}},{key:"handleCollapse",value:function(){var e=!this.getCollapsed();this.props.onCollapse?this.props.onCollapse(e):this.setState({collapsed:e})}},{key:"handleSubmit",value:function(e){var t=this.element.querySelector("form");t?Object(p.dispatchEvent)(t,"submit",e):console.error(new Error("No form found."))}},{key:"render",value:function(){var e=this.props.collapsible,t=this.getCollapsed(),n=!0===this.props.shadow?"shadow":this.props.shadow,a=b()(Object(f.d)("_",n,e&&"collapsible",t&&"collapsed"),this.props.className),r={onCollapse:this.handleCollapse,collapsible:e,collapsed:t,formStatus:this.state.formStatus,onSubmit:this.handleSubmit,setFormStatus:this.setFormStatus};return u.a.createElement("div",{className:a,ref:this.bindElement,style:this.props.style},u.a.createElement(g.a,{value:r},this.props.children))}}]),n}(d.PureComponent);O.defaultProps=Object(a.a)({},m.a,{defaultCollapsed:!0,collapsible:!1});var k=Object(y.compose)(Object(j.a)(".".concat(Object(f.d)("header"))),v.a)(O),C=n(13),S=n(57),x=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(l.a)(Object(l.a)(t))),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"handleClick",value:function(e){var t=this;e.persist(),setTimeout(function(){t.props.onSubmit(e.target)},50)}},{key:"render",value:function(){var e=this.props,t=(e.onSubmit,e.loading),n=e.children,a=e.formStatus,r=Object(C.a)(e,["onSubmit","loading","children","formStatus"]);return u.a.createElement(S.a,Object.assign({type:"primary"},r,{disabled:r.disabled||"disabled"===a,loading:"pending"===a||t,onClick:this.handleClick}),n)}}]),n}(d.PureComponent),E=n(39),N=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"renderIndicator",value:function(){if(void 0!==this.props.collapsed){var e=Object(f.d)("indicator");return u.a.createElement("span",{className:e},E.a.AngleRight)}}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.align,a=e.className,r=e.children,i=e.onCollapse,o=e.collapsed,s=b()(Object(f.d)("header",n),a),c="boolean"==typeof o?i:void 0;return u.a.createElement("div",{style:t,onClick:c,className:s},this.renderIndicator(),r)}}]),t}(d.PureComponent),T=n(56),I=Object(T.a)(["collapse"],"fast"),w=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.collapsed,a=e.collapsible,r=e.onCollapse,i=Object(C.a)(e,["className","collapsed","collapsible","onCollapse"]),o=b()(Object(f.d)("body"),t);if(!a)return u.a.createElement("div",Object.assign({},i,{className:o}));var s="boolean"==typeof n?r:void 0;return u.a.createElement(I,{show:!n},u.a.createElement("div",Object.assign({},i,{className:o}),i.children,"bottom"===a&&u.a.createElement("div",{className:Object(f.d)("foldup"),onClick:s},u.a.createElement("span",null))))}}]),t}(d.PureComponent),F=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.align,n=e.className,a=Object(C.a)(e,["align","className"]),r=b()(Object(f.d)("footer",t),n);return u.a.createElement("div",Object.assign({},a,{className:r}))}}]),t}(d.PureComponent),K=n(18),R=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).state={active:e.active||e.defaultActive},t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"getActive",value:function(){return void 0!==this.props.active?this.props.active:this.state.active}},{key:"handleActive",value:function(e){e===this.state.active&&(e=null),this.setState({active:e}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var o=this,s=this.getActive();return d.Children.toArray(this.props.children).map(function(e,t){var n,a,r=(a=t,(n=e)&&n.props&&void 0!==n.props.id?n.props.id:a),i={collapsed:s!==r,collapsible:!0,className:b()("object"==typeof e&&e.className,Object(f.d)("accordion")),onCollapse:o.handleActive.bind(o,r)};return Object(d.cloneElement)(e,i)})}}]),n}(K.b);R.defaultProps={defaultActive:0};var L=R;k.Header=Object(g.b)(N,["collapsed","onCollapse"]),k.Body=Object(g.b)(w,["collapsed","collapsible","onCollapse"]),k.Footer=F,k.Submit=Object(g.b)(x,["onSubmit","formStatus"]),k.Accordion=L,k.Body.displayName="ShineoutCardBody",k.Header.displayName="ShineoutCardHeader",k.displayName="ShineoutCard";t.a=k},290:function(e,t,n){"use strict";var a=n(50),r=n(19),c=n(76),i=n(59),o=n(5),s=n(6),l=n(7),d=n(25),u=n(4),h=n(8),b=n(1),m=n(0),p=n.n(m),f=n(15),g=n.n(f),y=n(18),v=n(20),j=n(9),O=n(550),k=n(2),C=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(b.a)(Object(b.a)(t))),t.handleUpdate=t.handleUpdate.bind(Object(b.a)(Object(b.a)(t))),t.handleRawChange=t.handleRawChange.bind(Object(b.a)(Object(b.a)(t))),t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){Object(d.a)(Object(u.a)(n.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(j.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(d.a)(Object(u.a)(n.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(j.a,this.handleUpdate)}},{key:"getContent",value:function(e){var t=this.props.renderItem;return"string"==typeof t?e[t]:"function"==typeof t?t(e):""}},{key:"handleUpdate",value:function(){this.forceUpdate()}},{key:"handleClick",value:function(e,t,n){var a=this.props,r=a.data,i=a.datum;t?i.add(r[n]):i.remove(r[n])}},{key:"handleRawChange",value:function(e,t){var n=this.props.datum;t?n.add(e):n.remove(e)}},{key:"render",value:function(){var n=this,e=this.props,t=e.block,a=e.data,r=e.datum,i=e.keygen,o=e.children,s=g()(Object(k.h)("group",["no-block","block"][Number(t)]),this.props.className);return void 0===a?p.a.createElement("div",{className:s},p.a.createElement(O.a,{value:{onRawChange:this.handleRawChange,checked:r.check.bind(r)}},o)):p.a.createElement("div",{className:s},a.map(function(e,t){return p.a.createElement(c.a,{checked:r.check(e),disabled:r.disabled(e),key:Object(v.b)(e,i,t),htmlValue:t,index:t,onChange:n.handleClick},n.getContent(e))}),o)}}]),n}(y.b);C.defaultProps={renderItem:function(e){return e}};var S=C,x=Object(r.compose)(a.a,O.b)(c.a);x.Group=Object(r.compose)(a.a,i.a.hoc({bindProps:["disabled","format","prediction","separator"]}))(S),x.Checkbox=c.a,x.displayName="ShineoutCheckbox",x.Group.displayName="ShineoutCheckboxGroup";t.a=x},309:function(e,t,n){"use strict";var a,r=n(5),i=n(6),o=n(7),s=n(4),c=n(8),l=n(1),d=n(0),N=n.n(d),u=n(15),T=n.n(u),h=n(20),b=n(57),m=n(18),I=n(2),p=n(39),w=n(14),F=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).toSource=t.change.bind(Object(l.a)(Object(l.a)(t)),0),t.toTarget=t.change.bind(Object(l.a)(Object(l.a)(t)),1),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"change",value:function(e){var t=this.props,n=t.setSelecteds,a=t.selecteds,r=t.datum,i=t.data,o=t.keygen,s=a[1-e].map(function(n){return i.find(function(e,t){return Object(h.b)(e,o,t)===n})});n(1-e,[]),r[e?"add":"remove"](s,void 0,void 0,!0)}},{key:"renderButtonText",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"left",t=this.props,n=t.operations,a=t.operationIcon;if("left"===e){var r=[N.a.createElement(N.a.Fragment,{key:"operationIcon"},a&&p.a.AngleLeft),N.a.createElement(N.a.Fragment,{key:"operations"},n[1])];return Object(w.b)()?r.reverse():r}var i=[N.a.createElement(N.a.Fragment,{key:"operationIcon"},a&&p.a.AngleRight),N.a.createElement(N.a.Fragment,{key:"operations"},n[0])];return Object(w.b)()?i.reverse():i}},{key:"render",value:function(){var e=this.props,t=e.selecteds,n=!0===e.disabled;return N.a.createElement("div",{className:Object(I.L)("btns")},N.a.createElement("div",null,N.a.createElement(b.a,{type:"primary",disabled:n||!t[0].length,size:"small",className:Object(I.L)("btns-button","btns-bottom"),onClick:this.toTarget},this.renderButtonText("right")),N.a.createElement("br",null),N.a.createElement(b.a,{type:"primary",disabled:n||!t[1].length,size:"small",className:Object(I.L)("btns-button"),onClick:this.toSource},this.renderButtonText("left"))))}}]),n}(m.a),f=n(23),g=n(42),y=n(289),v=n(290),j=n(19),O=n(10),k=n(29),K=n.n(k)()(),C=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).check=t.check.bind(Object(l.a)(Object(l.a)(t))),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"check",value:function(e){var t=this.props,n=t.index,a=t.selecteds,r=t.checkKey,i=t.setSelecteds;i(n,e?[].concat(Object(f.a)(a[n]),[r]):a[n].filter(function(e){return e!==r}))}},{key:"render",value:function(){var e=this.props,t=e.content,n=e.selecteds,a=e.checkKey,r=e.index,i=e.disabled,o=e.itemClass;return N.a.createElement("div",{className:T()(Object(I.L)("item",i&&"item-disabled"),o)},N.a.createElement(v.a,{className:Object(I.L)("item-check"),onChange:this.check,disabled:i,checked:-1<n[r].indexOf(a)},t))}}]),n}(m.b),S=function(t){return N.a.createElement(K.Consumer,null,function(e){return N.a.createElement(C,Object.assign({},t,{selecteds:e.selecteds,setSelecteds:e.setSelecteds}))})},x=n(109),E=n(32),R=n(68),L=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).getCheckAll=t.getCheckAll.bind(Object(l.a)(Object(l.a)(t))),t.checkAll=t.checkAll.bind(Object(l.a)(Object(l.a)(t))),t.handleRenderItem=t.handleRenderItem.bind(Object(l.a)(Object(l.a)(t))),t.bindCardBody=t.bindCardBody.bind(Object(l.a)(Object(l.a)(t))),t.customSetSelected=t.customSetSelected.bind(Object(l.a)(Object(l.a)(t))),t.state={listHeight:e.listHeight,mounted:!1},t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"getCheckAll",value:function(){var e=this.props,t=e.selecteds,n=e.data;return 0!==t.length&&(t.length===n.length||"indeterminate")}},{key:"bindCardBody",value:function(e){this.cardBody=e;var t=this.props.listHeight;e&&(t=e.offsetHeight),this.setState({listHeight:t,mounted:!0})}},{key:"checkAll",value:function(e){var t=this.props,n=t.setSelecteds,a=t.index,r=t.data,i=t.keygen,o=t.disabled;n(a,e?"function"==typeof o?r.reduce(function(e,t,n){return o(t)||e.push(Object(h.b)(t,i,n)),e},[]):r.map(function(e,t){return Object(h.b)(e,i,t)}):[])}},{key:"handleRenderItem",value:function(e,t){var n=this.props,a=n.keygen,r=n.index,i=n.renderItem,o=n.disabled,s=n.lineHeight,c=!0===o,l=Object(h.b)(e,a,t);return N.a.createElement(S,{lineHeight:s,key:l,disabled:c||"function"==typeof o&&o(e),index:r,checkKey:l,liData:e,content:Object(j.createFunc)(i)(e)})}},{key:"customSetSelected",value:function(e){var t=this.props,n=t.index,a=t.setSelecteds,r=t.selecteds;"string"!=typeof e?Array.isArray(e)&&a(n,e):a(n,[].concat(Object(f.a)(r),[e]))}},{key:"renderLazyList",value:function(){var e=this.props,t=e.filterText,n=e.data,a=e.rowsInView,r=e.lineHeight,i=this.state,o=i.mounted,s=i.listHeight;return o?N.a.createElement(x.a,{stay:!t,data:n,itemsInView:a,lineHeight:r,height:s,scrollHeight:r*n.length,renderItem:this.handleRenderItem}):null}},{key:"renderBody",value:function(){var e=this.props,t=e.customRender,n=e.index,a=e.values,r=e.filterText;if(Object(O.isFunc)(t)){var i=t({onSelected:this.customSetSelected,direction:0===n?"left":"right",selectedKeys:this.props.selecteds,value:a,filterText:r});if(i)return i}return this.renderLazyList()}},{key:"renderFilter",value:function(){var e=this.props,t=e.onFilter,n=e.onSearch,a=e.renderFilter,r=e.filterText,i=e.disabled;return t||n?a&&"function"==typeof a?N.a.createElement("div",{className:Object(I.L)("filter")},a({value:r,disabled:!0===i,onFilter:t,placeholder:Object(E.a)("search")})):N.a.createElement("div",{className:Object(I.L)("filter")},N.a.createElement(R.a,{disabled:!0===i,onChange:t,placeholder:Object(E.a)("search"),clearable:!0,value:r})):null}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.data,a=e.selecteds,r=e.footer,i=e.listClassName,o=e.listStyle,s=e.empty,c=e.disabled,l=e.loading,d=e.listHeight,u=e.customRender,h=this.getCheckAll(),b=!0===c,m=Object.assign({},o,{height:d});return N.a.createElement(y.a,{className:Object(I.L)("card")},N.a.createElement(y.a.Header,{className:Object(I.L)("card-header")},N.a.createElement("div",null,N.a.createElement(v.a,{onChange:this.checkAll,checked:h,disabled:b},h?"".concat(a.length," ").concat(Object(E.a)("selected")):Object(E.a)("selectAll"))),N.a.createElement("div",{className:Object(I.L)("card-header-title")},t)),this.renderFilter(),N.a.createElement(g.a,{loading:l},N.a.createElement(y.a.Body,{className:T()(Object(I.L)("card-body"),i),style:m},N.a.createElement("div",{className:Object(I.L)("body-container"),ref:this.bindCardBody},this.renderBody(),!Object(O.isFunc)(u)&&0===n.length&&N.a.createElement("div",{className:Object(I.L)("empty")},s||Object(E.a)("noData"))))),r&&N.a.createElement(y.a.Footer,{className:Object(I.L)("card-footer")},r))}}]),n}(m.b),H=(a=L,function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).state={text:""},t.handleFilter=t.handleFilter.bind(Object(l.a)(Object(l.a)(t))),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"getData",value:function(){var t=this,e=this.props,n=e.onFilter,a=e.data,r=e.index;return n&&this.state.text?a.filter(function(e){return n(t.state.text,e,!r)}):a}},{key:"handleFilter",value:function(e){var t=this.props,n=t.onSearch,a=t.index;n&&n(e,!a),this.setState({text:e})}},{key:"render",value:function(){var e=this.props.onFilter,t=this.getData(),n=e?this.handleFilter:void 0;return N.a.createElement(a,Object.assign({},this.props,{onFilter:n,filterText:this.state.text,data:t}))}}]),n}(m.a));function A(e,t){if(!e)return null;var a=t.data,r=t.keygen,i=t.datum,o=[],s=[];return e.forEach(function(n){var e=a.find(function(e,t){return Object(h.b)(e,r,t)===n});e&&(i.check(e)?s.push(n):o.push(n))}),[o,s]}var B=n(75),P=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).state={selecteds:e.selectedKeys?A(e.selectedKeys,e):A(e.defaultSelectedKeys,e)||[[],[]]},t.getSelected=t.getSelected.bind(Object(l.a)(Object(l.a)(t))),t.setSelecteds=t.setSelecteds.bind(Object(l.a)(Object(l.a)(t))),t.getLoading=t.getLoading.bind(Object(l.a)(Object(l.a)(t))),t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"getLoading",value:function(e){var t=this.props.loading;return Array.isArray(t)?t[e]:t}},{key:"getSelected",value:function(){return"selectedKeys"in this.props?A(this.props.selectedKeys,this.props):this.state.selecteds}},{key:"setSelecteds",value:function(e,t){var n=this.props.onSelectChange,a=this.state.selecteds,r=e?[a[0],t]:[t,a[1]];n&&n(r[0],r[1]),this.setState({selecteds:r})}},{key:"render",value:function(){var e=this.props,t=e.titles,a=e.data,r=e.datum,n=e.keygen,i=e.renderItem,o=e.footers,s=e.operations,c=e.operationIcon,l=e.className,d=e.style,u=e.listClassName,h=e.listStyle,b=e.onFilter,m=e.onSearch,p=e.empty,f=e.disabled,g=e.itemClass,y=e.rowsInView,v=e.lineHeight,j=e.listHeight,O=e.renderFilter,k=e.children,C=this.getSelected(),S=r.getValue();"value"in this.props&&S!==this.props.value&&this.props.datum.setValue(this.props.value);var x=a.filter(function(e){return!r.check(e)}),E=S.reduce(function(e,t){var n=r.getDataByValue(a,t);return n&&e.push(n),e},[]);return N.a.createElement("div",Object.assign({className:T()(Object(I.L)("_",Object(w.b)()&&"rtl"),l),style:d},Object(B.a)(this.props)),N.a.createElement(K.Provider,{value:{selecteds:C,setSelecteds:this.setSelecteds,itemClass:g}},N.a.createElement(H,{title:t[0],selecteds:C[0],data:x,keygen:n,renderItem:i,setSelecteds:this.setSelecteds,index:0,footer:o[0],listClassName:u,listStyle:h,loading:this.getLoading(0),onFilter:b,empty:p,disabled:f,onSearch:m,rowsInView:y,lineHeight:v,listHeight:j,renderFilter:O,customRender:k,values:S}),N.a.createElement(F,{selecteds:C,datum:r,setSelecteds:this.setSelecteds,keygen:n,sources:x,targets:E,operations:s,operationIcon:c,data:a,disabled:f}),N.a.createElement(H,{title:t[1],selecteds:C[1],data:E,keygen:n,renderItem:i,loading:this.getLoading(1),setSelecteds:this.setSelecteds,index:1,footer:o[1],listClassName:u,listStyle:h,onFilter:b,empty:p,disabled:f,onSearch:m,rowsInView:y,lineHeight:v,listHeight:j,renderFilter:O,customRender:k,values:S})))}}]),n}(m.b);P.defaultProps={titles:[],data:[],footers:[],operations:[],operationIcon:!0,renderItem:function(e){return e},rowsInView:20,lineHeight:32,listHeight:180};var V=P,z=n(50),D=n(59),W=Object(j.compose)(z.a,D.a.hoc({bindProps:["disabled","limit","format","prediction","separator"]}))(V);W.displayName="ShineoutTransfer";t.a=W},550:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c});var a=n(0),r=n.n(a),i=n(29),o=n.n(i)()(),s=o.Provider,c=function(n){return function(t){return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(n,Object.assign({},t,e))})}}}}]);