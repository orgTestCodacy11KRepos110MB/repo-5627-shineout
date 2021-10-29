(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[5],{621:function(n,e){n.exports="# Props 约定\n\n为了避免在不同的组件上相同的props不同的功能，或者相同的功能不同的名称产生的歧义，这里约定了一些通用的props名称和功能。\n\n## className *- string*\n除 Message 这种静态调用的组件外，全部组件需要支持以 className 扩展样式。\n\n## data *- object | array*\n数据项。通常用在 *Select*, *Table* 等根据数据渲染的组件。\n\n## fetch *- Promise*\n需要传入data的组件，可以传入一个 fetch 作为数据项，如果同时传入 data 和 fetch，fetch 无效。\n\n## keygen *- string | function | true*\n*Select*, *Table* 等根据数据渲染的组件，生成 key 的规则。\n\n#### 当 keygen 为 string 时，获取数据项的对应属性作为key\n```\nconst data = [\n  { uid: 1, name: '123' },\n  { uid: 2, name: '456' },\n  ...\n]\n\n<Select keygen=\"uid\" /> // key=1, key=2\n```\n\n#### 当 keygen 为 function 时，会返回数据项，生成key\n```\nconst data = [\n  { uid: 1, name: '123' },\n  { uid: 2, name: '456' },\n  ...\n]\n\n<Select keygen={(d) => d.uid + name} /> // key='1123', key='2456'\n```\n\n#### 当 keygen 为 true 时，以数据项本身作为 key\n```\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\n<Select keygen /> // key='red', key='orange'\n```\n\n## placeholder *- string | ReactElement | function*\ninput 类组件的占位项。可以是字符串，React组件或者render函数\n\n## type *- string*\n在 Alert, Button, Message 等展示型组件中传递状态，如：'primary', 'success'。\n\n在输入型组件（如：Input）中表示类型，如：'text', 'password'。\n\n## size *- string | number*\n通常为 'small', 'default', 'large' 三选一，默认值为 'default'\n\n## style *- object*\n除 Message 这种静态调用的组件外，全部组件需要支持以 style 设置最外层元素样式。\n\n## value *- number | string | object*\n初始值。"}}]);