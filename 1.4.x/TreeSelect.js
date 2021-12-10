(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[47],{1025:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(475),r=n(476),d=n(34),s=n(1026),o=n.n(s),c=n(1027),u=n.n(c),h=Object(d.b)(o.a,u.a),p=[{name:"01-base",title:Object(d.b)("基本用法 \n 基础的TreeSelect用法。","Base \n Basic usage of TreeSelect."),component:n(1028).default,rawText:n(1029)},{name:"02-mutiple",title:Object(d.b)("多选 \n 通过设置 multiple 来实现多选。","Multiple \n Set multiple to Multiple choices."),component:n(1030).default,rawText:n(1031)},{name:"03-filter",title:Object(d.b)("筛选 \n onFilter 返回函数时，使用这个函数做前端过滤。","Filter \n OnFilter is a function to filter data."),component:n(1032).default,rawText:n(1033)},{name:"04-disabled",title:Object(d.b)("禁用 \n 设置 disabled 禁用选项","Disabled \n Set disabled to disabled item."),component:n(1034).default,rawText:n(1035)},{name:"05-loader",title:Object(d.b)("动态加载 \n 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数。","Lazy load \n Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded."),component:n(1036).default,rawText:n(1037)}];t.default=Object(l.a)(function(e){return i.a.createElement(r.b,Object.assign({},e,{codes:void 0,source:h,examples:p}))})},1026:function(e,t){e.exports="# TreeSelect *树选择*\n\nTreeSelect 用来选择树形数据结构，若需要非关联树形结构选择可使用 [Select(treeData)](/components/Select)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| clearable | bool | false | 是否可清除值 |\n| multiple | bool | false | 是否是多选 |\n| data | array[{children:[]}] | [] | 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点 |\n| value | string \\| array | 无 | 选中的 key （受控），多选时必须为array |\n| defaultValue | string \\| array | 无 | 初始值，多选时必须为array |\n| defaultExpanded | array\\[key] | 无 | 默认展开的节点 key（非受控） |\n| disabled | boolean \\| function(d) | false | 为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用 |\n| filterDelay | number | 400 | 毫秒。用户输入触发 fitler 事件的延时 |\n| name | string | 无 | Form 存取数据的名称 |\n| keygen | string \\| function(obj):string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n| expanded | array\\[key] | 无 | 展开的节点 key （受控） |\n| loader | function(key) | 无 | 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点 |\n| mode | \\[0\\|1\\|2\\|3\\] | 1 | 选中值模式<br />0: 只返回完全选中的节点，包含父节点<br />1: 返回全部选中的节点和半选中的父节点<br />2: 只返回选中的子节点<br />3: 如果父节点选中，只返回父节点 |\n| onExpand | function(array) | 无 | 节点展开回调，参数为当前展开节点 key 数组 |\n| onChange | function(array) | 无 | 参数 为 当前选中值 |\n| onFilter | function | 无 | onFilter 不为空时，可以输入过滤数据<br />onFilter 如果返回一个函数，使用这个函数做前端过滤<br />如果不返回，可以自行做后端过滤 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| renderResult | function(d) | renderItem | 选中后在结果中显示的内容，默认和 renderItem 相同 |\n| compressed | bool | false | 将选中值合并，只在多选模式下有效 |\n| absolute | bool | false | 为 true 时，选项弹出层在 DOM 中独立 render |\n| zIndex | number | 1000 | 选项列表 z-index 值 |\n| childrenKey | string | 'children' | 指定子数据的属性名 | \n| defaultExpandAll | bool | false | 默认全部展开节点 | \n"},1027:function(e,t){e.exports="# TreeSelect\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| clearable | bool | false | If clearable is true, show clear value icon |\n| multiple | bool | false | if it is true, it will be multiple selection |\n| data | array[{children:[]}] | [] | data. The child node is children. If the children value is null or its length is 0, it is render as a leaf node. |\n| value | array \\| string | | In the Form, the value will be taken over by the form and the value will be invalid. |\n| defaultValue | array | | Initial value |\n| defaultExpanded | array\\[key] | - | Default expanded node key. |\n| disabled | boolean \\| function(d) | false | When it is true, all nodes disable the selection; when it is a function, it determines whether it is disabled according to the return result of the function. |\n| filterDelay | number | 400 | ms. The delay of user input triggering filter events |\n| name | string | - | The name of a Form that accesses data |\n| keygen | string \\| function(obj):string | index | Generate a auxiliary method for each key<br />If not filled, index will be used(not recommended,there may be problems with more than 10 data)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n| expanded | array\\[key] | - | Expanded node key (controlled) |\n| loader | function(key) | - | If the loader attribute is a function, the node with no children is regarded as dynamically loaded node. Click expanded button to trigger the loader event. The children property is null or its length is 0 will be regarded as a leaf node. |\n| mode | \\[0\\|1\\|2\\|3\\] | 1 | mode <br />0: Returns only the fully selected node including the parent node. <br />1: Returns all selected nodes and semi-selected nodes. <br />2: Return only the selected child nodes. <br />3: If the parent node is full selected, only return the parent node. |\n| onExpand | function(array) | - | The callback function for expanding the node. The parameter is the key array of the currently expanded nodes. |\n| onChange | function(value) | - | value is your picker now |\n| onFilter | function | - | When the onFilter is not empty, you can filter data by input.<br />If the onFilter returns a function, use this function as a front-end filter.<br />If return undefined, you can do your own backend filtering. |\n| renderItem | string \\| function(d) | required | When it is a string, return d\\[string]<br />When it is a function, return the result of the function. |\n| renderResult | function(d) | renderItem | The content displayed in the result after selecting, if not set, use renderItem |\n| compressed | bool | false | Merges selected values, valid only in multiselect mode |\n| absolute | bool | false | When it is true, the pop-up layer of option append into document.body. |\n| zIndex | number | 1000 | options z-index |\n| childrenKey | string | 'children' | the key of the children data name | \n| defaultExpandAll | bool | false | default expand all node | "},1028:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(4),i=n(5),l=n(6),r=n(3),d=n(7),s=n(0),o=n.n(s),c=n(1453),u=[{id:"1",title:"1",children:[{id:"1-1",title:"1-1",children:[{id:"1-1-1",title:"1-1-1"},{id:"1-1-2",title:"1-1-2"}]},{id:"1-2",title:"1-2"}]},{id:"2",title:"2",children:[{id:"2-1",title:"2-1"},{id:"2-2",title:"2-2"}]},{id:"3",title:"3",children:[{id:"3-1",title:"3-1"}]}],h=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(r.a)(n).call(this,e))).handleChange=function(e){t.setState({value:e})},t.state={value:""},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(c.a,{value:this.state.value,onChange:this.handleChange,clearable:!0,style:{width:250},keygen:"id",renderItem:function(e){return"node ".concat(e.title)},data:u})}}]),n}(o.a.Component)},1029:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 基础的TreeSelect用法。\n * en - Base\n *    -- Basic usage of TreeSelect.\n */\nimport React from 'react'\nimport { TreeSelect } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: '1',\n    children: [\n      { id: '1-1', title: '1-1', children: [{ id: '1-1-1', title: '1-1-1' }, { id: '1-1-2', title: '1-1-2' }] },\n      { id: '1-2', title: '1-2' },\n    ],\n  },\n  { id: '2', title: '2', children: [{ id: '2-1', title: '2-1' }, { id: '2-2', title: '2-2' }] },\n  { id: '3', title: '3', children: [{ id: '3-1', title: '3-1' }] },\n]\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      value: '',\n    }\n  }\n\n  handleChange = v => {\n    this.setState({\n      value: v,\n    })\n  }\n\n  render() {\n    return (\n      <TreeSelect\n        value={this.state.value}\n        onChange={this.handleChange}\n        clearable\n        style={{ width: 250 }}\n        keygen=\"id\"\n        renderItem={node => `node ${node.title}`}\n        data={data}\n      />\n    )\n  }\n}\n"},1030:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(4),i=n(5),l=n(6),r=n(3),d=n(7),s=n(0),o=n.n(s),c=n(1453),u=[{id:"1",title:"1",children:[{id:"1-1",title:"1-1",children:[{id:"1-1-1",title:"1-1-1"},{id:"1-1-2",title:"1-1-2"}]},{id:"1-2",title:"1-2"}]},{id:"2",title:"2",children:[{id:"2-1",title:"2-1"},{id:"2-2",title:"2-2"}]},{id:"3",title:"3",children:[{id:"3-1",title:"3-1"}]}],h=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(r.a)(n).call(this,e))).handleChange=function(e){t.setState({value:e})},t.state={value:[]},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(c.a,{multiple:!0,value:this.state.value,onChange:this.handleChange,clearable:!0,style:{width:250,marginBottom:15},keygen:"id",renderItem:function(e){return"node ".concat(e.title)},data:u}),o.a.createElement("br",null),o.a.createElement(c.a,{compressed:!0,multiple:!0,clearable:!0,style:{width:250},keygen:"id",renderItem:function(e){return"node ".concat(e.title)},data:u}))}}]),n}(o.a.Component)},1031:function(e,t){e.exports="/**\n * cn - 多选\n *    -- 通过设置 multiple 来实现多选。\n * en - Multiple\n *    -- Set multiple to Multiple choices.\n */\nimport React from 'react'\nimport { TreeSelect } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: '1',\n    children: [\n      { id: '1-1', title: '1-1', children: [{ id: '1-1-1', title: '1-1-1' }, { id: '1-1-2', title: '1-1-2' }] },\n      { id: '1-2', title: '1-2' },\n    ],\n  },\n  { id: '2', title: '2', children: [{ id: '2-1', title: '2-1' }, { id: '2-2', title: '2-2' }] },\n  { id: '3', title: '3', children: [{ id: '3-1', title: '3-1' }] },\n]\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      value: [],\n    }\n  }\n\n  handleChange = v => {\n    this.setState({\n      value: v,\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <TreeSelect\n          multiple\n          value={this.state.value}\n          onChange={this.handleChange}\n          clearable\n          style={{ width: 250, marginBottom: 15 }}\n          keygen=\"id\"\n          renderItem={node => `node ${node.title}`}\n          data={data}\n        />\n        <br />\n        <TreeSelect\n          compressed\n          multiple\n          clearable\n          style={{ width: 250 }}\n          keygen=\"id\"\n          renderItem={node => `node ${node.title}`}\n          data={data}\n        />\n      </div>\n    )\n  }\n}\n"},1032:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(46),i=n(4),l=n(5),r=n(6),d=n(3),s=n(7),o=n(1),c=n(0),u=n.n(c),h=n(1453),p=[{id:"1",title:"1",children:[{id:"1-1",title:"1-1",children:[{id:"1-1-1",title:"1-1-1"},{id:"1-1-2",title:"1-1-2"}]},{id:"1-2",title:"1-2"}]},{id:"2",title:"2",children:[{id:"2-1",title:"2-1"},{id:"2-2",title:"2-2"}]},{id:"3",title:"3",children:[{id:"3-1",title:"3-1"}]},{id:"4",title:"4",children:[{id:"4-1",title:"4-1"}]},{id:"5",title:"5",children:[{id:"5-1",title:"5-1"}]}],m=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e,t){n.setState(Object(a.a)({},e,t))},n.handleFilter=function(t){return function(e){return-1<e.title.indexOf(t)}},n.state={single:"",multiple:[]},n.handleChangeSingle=n.handleChange.bind(Object(o.a)(Object(o.a)(n)),"single"),n.handleChangeMultiple=n.handleChange.bind(Object(o.a)(Object(o.a)(n)),"multiple"),n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(h.a,{onFilter:this.handleFilter,value:this.state.single,onChange:this.handleChangeSingle,clearable:!0,style:{width:250,marginBottom:20},keygen:"id",renderItem:function(e){return"node ".concat(e.title)},data:p}),u.a.createElement("br",null),u.a.createElement(h.a,{multiple:!0,onFilter:this.handleFilter,value:this.state.multiple,onChange:this.handleChangeMultiple,clearable:!0,style:{width:250},keygen:"id",renderItem:function(e){return"node ".concat(e.title)},data:p}))}}]),t}(u.a.Component)},1033:function(e,t){e.exports="/**\n * cn - 筛选\n *    -- onFilter 返回函数时，使用这个函数做前端过滤。\n * en - Filter\n *    -- OnFilter is a function to filter data.\n */\nimport React from 'react'\nimport { TreeSelect } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: '1',\n    children: [\n      { id: '1-1', title: '1-1', children: [{ id: '1-1-1', title: '1-1-1' }, { id: '1-1-2', title: '1-1-2' }] },\n      { id: '1-2', title: '1-2' },\n    ],\n  },\n  { id: '2', title: '2', children: [{ id: '2-1', title: '2-1' }, { id: '2-2', title: '2-2' }] },\n  { id: '3', title: '3', children: [{ id: '3-1', title: '3-1' }] },\n  { id: '4', title: '4', children: [{ id: '4-1', title: '4-1' }] },\n  { id: '5', title: '5', children: [{ id: '5-1', title: '5-1' }] },\n]\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      single: '',\n      multiple: [],\n    }\n\n    this.handleChangeSingle = this.handleChange.bind(this, 'single')\n    this.handleChangeMultiple = this.handleChange.bind(this, 'multiple')\n  }\n\n  handleChange = (key, v) => {\n    this.setState({\n      [key]: v,\n    })\n  }\n\n  handleFilter = text => d => d.title.indexOf(text) > -1\n\n  render() {\n    return (\n      <div>\n        <TreeSelect\n          onFilter={this.handleFilter}\n          value={this.state.single}\n          onChange={this.handleChangeSingle}\n          clearable\n          style={{ width: 250, marginBottom: 20 }}\n          keygen=\"id\"\n          renderItem={node => `node ${node.title}`}\n          data={data}\n        />\n        <br />\n        <TreeSelect\n          multiple\n          onFilter={this.handleFilter}\n          value={this.state.multiple}\n          onChange={this.handleChangeMultiple}\n          clearable\n          style={{ width: 250 }}\n          keygen=\"id\"\n          renderItem={node => `node ${node.title}`}\n          data={data}\n        />\n      </div>\n    )\n  }\n}\n"},1034:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(4),i=n(5),l=n(6),r=n(3),d=n(7),s=n(0),o=n.n(s),c=n(1453),u=[{id:"1",title:"1",children:[{id:"1-1",title:"1-1",children:[{id:"1-1-1",title:"1-1-1"},{id:"1-1-2",title:"1-1-2"}]},{id:"1-2",title:"1-2"}]},{id:"2",title:"2",children:[{id:"2-1",title:"2-1"},{id:"2-2",title:"2-2"}]},{id:"3",title:"3",children:[{id:"3-1",title:"3-1"},{id:"3-2",title:"3-2"}]}],h=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(r.a)(n).call(this,e))).handleChange=function(e){t.setState({value:e})},t.state={value:""},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(c.a,{absolute:!0,disabled:function(e){return e.title.startsWith("2-")},value:this.state.value,onChange:this.handleChange,clearable:!0,style:{width:250},keygen:"id",renderItem:function(e){return"node ".concat(e.title)},data:u})}}]),n}(o.a.Component)},1035:function(e,t){e.exports="/**\n * cn - 禁用\n *    -- 设置 disabled 禁用选项\n * en - Disabled\n *    -- Set disabled to disabled item.\n */\nimport React from 'react'\nimport { TreeSelect } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: '1',\n    children: [\n      { id: '1-1', title: '1-1', children: [{ id: '1-1-1', title: '1-1-1' }, { id: '1-1-2', title: '1-1-2' }] },\n      { id: '1-2', title: '1-2' },\n    ],\n  },\n  { id: '2', title: '2', children: [{ id: '2-1', title: '2-1' }, { id: '2-2', title: '2-2' }] },\n  { id: '3', title: '3', children: [{ id: '3-1', title: '3-1' }, { id: '3-2', title: '3-2' }] },\n]\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      value: '',\n    }\n  }\n\n  handleChange = v => {\n    this.setState({\n      value: v,\n    })\n  }\n\n  render() {\n    return (\n      <TreeSelect\n        absolute\n        disabled={v => v.title.startsWith('2-')}\n        value={this.state.value}\n        onChange={this.handleChange}\n        clearable\n        style={{ width: 250 }}\n        keygen=\"id\"\n        renderItem={node => `node ${node.title}`}\n        data={data}\n      />\n    )\n  }\n}\n"},1036:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(4),i=n(5),l=n(6),r=n(3),d=n(7),s=n(0),o=n.n(s),c=n(42),u=n(1453),h=["0","1","2","3","4"].map(function(e){return{id:e}}),p=0,m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(r.a)(t).call(this,e))).loader=function(t){setTimeout(function(){n.setState(Object(c.a)(function(e){e.data[parseInt(t,10)].children=Array(6).fill(0).map(function(){return{id:"-".concat(p++),children:[]}})}))},500)},n.handleChange=function(e){return n.setState({value:e})},n.renderItem=function(e){return"node ".concat(e.id)},n.state={data:h,value:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(u.a,{multiple:!0,loader:this.loader,value:this.state.value,onChange:this.handleChange,keygen:"id",renderItem:this.renderItem,data:this.state.data})}}]),t}(s.Component)},1037:function(e,t){e.exports="/**\n * cn - 动态加载\n *    -- 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数。\n * en - Lazy load\n *    -- Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded.\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { TreeSelect } from 'shineout'\n\nconst initData = ['0', '1', '2', '3', '4'].map(i => ({ id: i }))\n\nlet index = 0\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: initData, value: [] }\n  }\n\n  loader = key => {\n    setTimeout(() => {\n      this.setState(\n        immer(draft => {\n          const { data } = draft\n          data[parseInt(key, 10)].children = Array(6)\n            .fill(0)\n            .map(() => ({ id: `-${index++}`, children: [] }))\n        })\n      )\n    }, 500)\n  }\n\n  handleChange = value => this.setState({ value })\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <TreeSelect\n        multiple\n        loader={this.loader}\n        value={this.state.value}\n        onChange={this.handleChange}\n        keygen=\"id\"\n        renderItem={this.renderItem}\n        data={this.state.data}\n      />\n    )\n  }\n}\n"},1453:function(e,t,n){"use strict";var a=n(62),i=n(19),l=n(79),p=n(2),r=n(4),d=n(5),s=n(6),o=n(3),c=n(25),u=n(7),h=n(1),m=n(13),f=n(0),b=n.n(f),v=n(535),y=n(20),g=n(29),O=n(15),j=n.n(O),k=n(12),C=n(56),x=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(o.a)(n).call(this,e))).bindElement=t.bindElement.bind(Object(h.a)(Object(h.a)(t))),t.handleInput=t.handleInput.bind(Object(h.a)(Object(h.a)(t))),t.props.setInputReset(t.reset.bind(Object(h.a)(Object(h.a)(t)))),t}return Object(u.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.focus&&this.focus()}},{key:"shouldComponentUpdate",value:function(){return this.props.updatAble}},{key:"componentDidUpdate",value:function(e){this.props.focus!==e.focus&&this.props.focus&&this.focus()}},{key:"reset",value:function(){this.editElement&&(this.editElement.innerText=""),this.blurTimer&&clearTimeout(this.blurTimer)}},{key:"focus",value:function(){C.c.select(this.editElement)}},{key:"bindElement",value:function(e){this.editElement=e}},{key:"handleInput",value:function(e){this.props.onFilter(e.target.innerText.replace("\feff ","").trim())}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.focus,a=e.multiple,i="string"==typeof t?t.replace(/<\/?[^>]*>/g,""):t;return Object(f.isValidElement)(i)?Object(f.cloneElement)(i,{className:Object(p.F)("input",!a&&"full"),ref:this.bindElement,key:"input",onInput:this.handleInput,contentEditable:n}):b.a.createElement("span",{key:"input",className:Object(p.F)("input",!a&&"full"),ref:this.bindElement,contentEditable:n,onInput:this.handleInput,onBlur:this.handleBlur,dangerouslySetInnerHTML:{__html:i}})}}]),n}(f.Component);x.defaultProps={text:"",updatAble:!1};var I=x,E=n(470),F=function(e,t){return Object(k.k)(e)&&e.IS_NOT_MATCHED_VALUE?Object(k.k)(e.value)?t(e.value):e.value:t(e)};function S(e){var t=e.renderResult,n=e.data,a=e.disabled,i=e.onClick,l=n,r=a||!i?void 0:function(){return i(l)},d=a||!r;return b.a.createElement("a",{tabIndex:-1,className:Object(p.F)("item",a&&"disabled",d&&"ban")},F(n,t),!d&&b.a.createElement("span",{className:Object(p.F)("indicator","close"),onClick:r}))}var w=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(o.a)(n).call(this,e))).state={more:!1},t.handleRemove=t.handleRemove.bind(Object(h.a)(Object(h.a)(t))),t.handelMore=t.handelMore.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(n,e),Object(d.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.result;e.compressed&&t.length<=1&&(this.state.more=!1)}},{key:"handleRemove",value:function(){this.props.onRemove.apply(void 0,arguments)}},{key:"handelMore",value:function(e){this.setState({more:e})}},{key:"renderClear",value:function(){var e=this.props,t=e.onClear,n=e.result,a=e.disabled;return t&&0<n.length&&!0!==a?b.a.createElement("a",{tabIndex:-1,"data-role":"close",className:Object(p.F)("indicator","close"),onClick:t}):null}},{key:"renderInput",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"input",n=this.props,a=n.multiple,i=n.onFilter,l=n.focus,r=n.setInputReset;return b.a.createElement(I,{key:"".concat(t,".").concat(l?1:0),updatAble:!a,multiple:a,focus:l,text:e,onFilter:i,setInputReset:r})}},{key:"renderMore",value:function(e){var n=this,t=this.props,a=t.datum,i=t.renderResult,l=this.state.more;return b.a.createElement("a",{tabIndex:-1,key:"more",className:Object(p.F)("item","item-compressed",l&&"item-more")},b.a.createElement("span",null,"+".concat(e.length-1)),b.a.createElement(E.a,{visible:l,onVisibleChange:this.handelMore,className:Object(p.F)("popover")},b.a.createElement("div",{className:Object(p.F)("result")},e.map(function(e,t){return b.a.createElement(S,{key:t,data:e,disabled:a.disabled(e),onClick:n.handleRemove,renderResult:i})}))))}},{key:"renderPlaceholder",value:function(){var e=this.props,t=e.focus,n=e.onFilter;return t&&n?this.renderInput(" "):b.a.createElement("span",{className:j()(Object(p.n)("placeholder"),Object(p.F)("ellipsis"))},this.props.placeholder," ")}},{key:"renderResult",value:function(){var n=this,e=this.props,t=e.multiple,a=e.compressed,i=e.result,l=e.renderResult,r=e.onFilter,d=e.focus,s=e.datum,o=e.filterText;if(t){var c=a?i.slice(0,1):i,u=!a||1===i.length,h=c.map(function(e,t){return b.a.createElement(S,{key:t,data:e,disabled:s.disabled(e),onClick:u?n.handleRemove:void 0,renderResult:l})});return a&&1<i.length&&h.push(this.renderMore(i)),d&&r&&h.push(this.renderInput(o,i.length)),h}return r?this.renderInput(F(i[0],l)):b.a.createElement("span",{className:Object(p.F)("ellipsis")},F(i[0],l))}},{key:"render",value:function(){var e=0===this.props.result.length?this.renderPlaceholder():this.renderResult(),t=this.props.compressed;return b.a.createElement("div",{className:Object(p.F)("result",t&&"compressed")},e,!this.props.multiple&&b.a.createElement("a",{tabIndex:-1,className:Object(p.F)("indicator","caret")}),this.renderClear())}}]),n}(f.PureComponent),T=n(138),R=n(23),D=n(87),A=n(35),N=Object(D.a)(["fade","scale-y"],"fast"),B=Object(T.a)(function(e){var t=e.focus,n=Object(m.a)(e,["focus"]);return b.a.createElement(N,Object.assign({show:t},n))}),M=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(o.a)(n).call(this,e))).state={focus:!1,position:"drop-down"},t.treeSelectId="treeSelect_".concat(Object(g.b)()),t.setInputReset=t.setInputReset.bind(Object(h.a)(Object(h.a)(t))),t.renderActive=t.renderActive.bind(Object(h.a)(Object(h.a)(t))),t.handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),t.renderItem=t.renderItem.bind(Object(h.a)(Object(h.a)(t))),t.bindElement=t.bindElement.bind(Object(h.a)(Object(h.a)(t))),t.handleClick=t.handleState.bind(Object(h.a)(Object(h.a)(t)),!0),t.handleFocus=t.handleFocus.bind(Object(h.a)(Object(h.a)(t))),t.handleKeyDown=t.handleKeyDown.bind(Object(h.a)(Object(h.a)(t))),t.handleBlur=t.handleState.bind(Object(h.a)(Object(h.a)(t)),!1),t.handleClear=t.handleClear.bind(Object(h.a)(Object(h.a)(t))),t.handleRemove=t.handleRemove.bind(Object(h.a)(Object(h.a)(t))),t.handleClickAway=t.handleClickAway.bind(Object(h.a)(Object(h.a)(t))),t.shouldFocus=t.shouldFocus.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(n,e),Object(d.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onFilter,i=n.datum,l=n.mode;i.mode=l,t.focus!==this.state.focus&&!this.state.focus&&a&&setTimeout(function(){a("")},400)}},{key:"componentWillUnmount",value:function(){Object(c.a)(Object(o.a)(n.prototype),"componentWillUnmount",this).call(this),this.clearClickAway()}},{key:"getValue",value:function(){var e=this.props,t=e.datum,n=e.multiple,a=t.getValue();return n?a:a.length?a[0]:""}},{key:"getText",value:function(e){return this.props.empty||Object(A.a)(e)}},{key:"setInputReset",value:function(e){this.inputReset=e}},{key:"bindElement",value:function(e){this.element=e}},{key:"shouldFocus",value:function(e){return e.getAttribute("data-id")===this.treeSelectId||!!Object(C.e)(e,".".concat(Object(p.F)("result")))}},{key:"bindClickAway",value:function(){document.addEventListener("mousedown",this.handleClickAway)}},{key:"clearClickAway",value:function(){document.removeEventListener("mousedown",this.handleClickAway)}},{key:"handleClickAway",value:function(e){(function e(t,n){return t.getAttribute("data-id")===n||!!t.parentElement&&e(t.parentElement,n)})(e.target,this.treeSelectId)||(this.clearClickAway(),this.props.onBlur(),this.handleState(!1,e))}},{key:"handleState",value:function(e,t){if(!0!==this.props.disabled&&e!==this.state.focus&&!(e&&t&&t.target.classList.contains(Object(p.F)("close")))){var n=this.props.height,a=this.props.position;R.b.height<n+this.element.getBoundingClientRect().bottom&&!a&&(a="drop-up"),this.setState({focus:e,position:a||"drop-down"}),e&&this.bindClickAway()}}},{key:"handleFocus",value:function(e){this.shouldFocus(e.target)&&(this.props.onFocus(e),this.bindClickAway())}},{key:"handleKeyDown",value:function(e){13===e.keyCode&&(e.preventDefault(),this.state.focus||this.handleState(!0)),9===e.keyCode&&(this.props.onBlur(),this.state.focus?this.handleState(!1,e,!0):this.clearClickAway())}},{key:"handleRemove",value:function(e){var t=this.props.datum;t.set(t.getKey(e),0),this.handleChange()}},{key:"handleChange",value:function(e,t){var n=this.props,a=n.datum,i=n.multiple,l=n.disabled,r=n.onChange;if(!0!==l&&!a.disabled(e)){var d=a.getDataById(t);i||(a.setValue([]),a.set(a.getKey(e),1),this.handleState(!1)),r(this.getValue(),d,t&&a.getPath(t).path)}}},{key:"handleClear",value:function(){var e=this.props.multiple;this.props.datum.setValue([]),this.props.onChange(e?[]:""),this.handleState(!1),this.element.focus()}},{key:"renderItem",value:function(e,t){var n=this.props.renderItem;return"function"==typeof n?n(e,t):e[n]}},{key:"renderActive",value:function(e,t,n,a){var i=this.props,l=i.renderItem,r=i.datum,d="function"==typeof l?l(e,t,n,a):e[l];return b.a.createElement("span",{className:Object(p.F)("content-wrapper",n&&"selected",r.disabled(e)&&"disabled")},d)}},{key:"renderTreeOptions",value:function(){var t=this,e=this.state,n=e.focus,a=e.position,i=this.props,l=i.multiple,r=i.datum,d=i.data,s=i.absolute,o=i.height,c=i.zIndex,u={};["mode","data","datum","defaultExpanded","defaultExpandAll","disabled","expanded","keygen","loader","onExpand","renderItem","line","parentClickExpand","childrenKey"].forEach(function(e){u[e]=t.props[e]}),u.value=r.getValue(),l?u.onChange=this.handleChange:(u.onClick=this.handleChange,u.renderItem=this.renderActive,u.active=u.value.length?u.value[0]:null);var h=0===d.length?b.a.createElement("span",{className:Object(p.F)("option")},this.getText("noData")):b.a.createElement(v.a,Object.assign({className:Object(p.F)(!l&&"single")},u,{dataUpdate:!1}));return b.a.createElement(B,{absolute:s,rootClass:Object(p.F)(a),parentElement:this.element,position:a,focus:n,"data-id":this.treeSelectId,className:Object(p.F)("options"),style:{maxHeight:o,overflowY:"auto"},fixed:"min",zIndex:c},b.a.createElement("div",{className:Object(p.F)("tree-wrapper")},h))}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.onFilter,a=e.compressed,i=e.multiple,l=e.datum,r=e.clearable,d=e.disabled,s=e.size,o=e.filterText,c=e.result,u=Object(p.F)("inner",s,this.state.focus&&"focus",this.state.position,i&&"multiple",!0===d&&"disabled"),h=this.props.renderResult||this.renderItem;return b.a.createElement("div",{tabIndex:!0===d?-1:0,ref:this.bindElement,className:u,"data-id":this.treeSelectId,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onClick:this.handleClick},b.a.createElement(w,{filterText:o,onClear:r?this.handleClear:void 0,onRemove:this.handleRemove,onFilter:n,result:c,disabled:d,datum:l,focus:this.state.focus,multiple:i,placeholder:t,renderResult:h,setInputReset:this.setInputReset,compressed:a}),this.renderTreeOptions())}}]),n}(y.b);M.defaultProps={clearable:!1,compressed:!1,absolute:!1,multiple:!1,line:!1,renderItem:function(e){return e},height:300,data:[],defaultExpanded:[]};var V=n(46),K=n(497),P=n(17),U=n(510),W=n(28);function _(e){return e?Array.isArray(e)?e:[e]:[]}var z=Object(i.a)(a.a,Object(l.a)({className:Object(p.F)("_"),tag:"div"}),function(a){var e,t;return t=e=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(o.a)(n).call(this,e))).datum=new U.a({data:e.data,loader:e.loader,keygen:e.keygen,mode:e.mode,value:_(e.value),onChange:e.onChange,disabled:"function"==typeof e.disabled?e.disabled:void 0,childrenKey:e.childrenKey}),t}return Object(u.a)(n,e),Object(d.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this;if(!Object(W.b)(e.data,this.props.data)){var n=this.datum.getValue();this.datum.setValue([]),this.datum.setData(this.props.data),n.forEach(function(e){t.datum.getDataById(e)&&t.datum.set(e,1)}),this.forceUpdate()}}},{key:"render",value:function(){var e=this.props.value,t=Object(P.a)({},this.props,{datum:this.datum});return Object(W.b)(_(e),this.datum.getValue())||this.datum.setValue(_(e)),b.a.createElement(a,t)}}]),n}(b.a.Component),e.defaultProps={mode:1,childrenKey:"children"},t},function(p){var e,t;return t=e=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(o.a)(n).call(this,e))).state={innerFilter:void 0,innerData:void 0,filterText:""},t.handleFilter=t.handleFilter.bind(Object(h.a)(Object(h.a)(t))),t.getResultByValues=t.getResultByValues.bind(Object(h.a)(Object(h.a)(t))),t.resultCache=new Map,t}return Object(u.a)(n,e),Object(d.a)(n,[{key:"getResultByValues",value:function(){var a=this,e=this.props,i=e.datum,l=e.noCache,t=i.getValue()||[],r=[];return t.forEach(function(e){var t,n=l?void 0:a.resultCache.get(e);n||((n=i.getDataById(e))&&!l?a.resultCache.set(e,n):n||(t={},Object(V.a)(t,"IS_NOT_MATCHED_VALUE",!0),Object(V.a)(t,"value",e),n=t)),n&&r.push(n)}),r}},{key:"handleFilter",value:function(t){var n=this,e=this.props,a=e.filterDelay,i=e.onFilter;if(!t)return this.setState({filterText:"",innerFilter:void 0,innerData:void 0}),this.timer&&clearTimeout(this.timer),void(i&&i(t));i&&(this.setState({filterText:t}),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=i(t);"function"==typeof e&&n.setState({innerFilter:e})},a))}},{key:"render",value:function(){var t=this,e=this.props,n=e.data,a=e.onFilter,i=e.expanded,l=Object(m.a)(e,["data","onFilter","expanded"]),r=this.state,d=r.innerFilter,s=r.filterText,o=a?this.handleFilter:void 0,c=n,u=i;if(d){var h=[];c=Object(K.a)(n,d,h,function(e){return t.props.datum.getKey(e)},l.childrenKey),u=h}return b.a.createElement(p,Object.assign({},l,{filterText:s,result:this.getResultByValues(),data:c,onFilter:o,expanded:u}))}}]),n}(y.a),e.defaultProps={data:[],filterDelay:300},t})(M);z.displayName="ShineoutTreeSelect";t.a=z},497:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(46),c=n(17);function a(e,l,r,d){var s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:"children";return e.map(function e(t){if(!t)return null;var n=!1;l(t)&&(n=!0);var a=(t[s]||[]).map(e).filter(function(e){return e});if(a.length||n){var i=d(t);return r.push(i),Object(c.a)({},t,Object(o.a)({},s,a))}return null}).filter(function(e){return e})}}}]);