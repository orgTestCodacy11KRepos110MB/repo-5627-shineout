(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[18],{1207:function(n,e,a){"use strict";a.r(e);var t=a(0),o=a.n(t),r=a(557),d=a(559),i=a(585),u=a(40),l=a(1208),s=a.n(l),m=a(1209),c=a.n(m),g=Object(u.b)(s.a,c.a),f=[];i.a.start(),i.a.setType("disabled"),a(1210),i.a.setType("example"),a(1211),i.a.setType("format"),a(1212),i.a.setType("onchange"),a(1213),i.a.setType("prediction"),a(1214),i.a.setType("separator"),a(1215);var v=i.a.end(),h={disabled:{text:a(1216),log:v.disabled},example:{text:a(1217),log:v.example},format:{text:a(1218),log:v.format},onchange:{text:a(1219),log:v.onchange},prediction:{text:a(1220),log:v.prediction},separator:{text:a(1221),log:v.separator}};e.default=Object(r.a)(function(n){return o.a.createElement(d.b,Object.assign({},n,{codes:h,source:g,examples:f}))})},1208:function(n,e){n.exports="# Datum.List 数据处理\n\n列表数据辅助类，用来处理如 Select，Table 等组件在复杂数据情况下，格式化数据、校验状态、拼接结果等操作。\n\n\n## 示例\n\n这个页面中示例用到的数据如下\n```\nconst data = {\n  red: { id: 1, name: 'red' },\n  orange: { id: 2, name: 'orange' },\n  yellow: { id: 3, name: 'yellow' },\n  green: { id: 4, name: 'green' },\n  cyan: { id: 5, name: 'cyan' },\n  blue: { id: 6, name: 'blue' },\n  violet: { id: 7, name: 'violet' },\n}\n```\n<code name=\"example\" />\n\n## 初始化参数\n\n### format  *null | string | function(d)*\nformat 是Datum内部用来把复杂数据格式化为需要的值，可以为 null, string, function\n\n- **null** - 为空时，返回值为原始数据\n- **string** - 为string时，会作为key从原始数据中获取值，相当于 (d) => d\\[format]\n- **function(d)** - d 为单条原始数据\n\n<code name=\"format\" />\n\n### onChange *function(value)*\n值改变时触发的回调函数。value 为 format 函数格式化后的数据。\n\n<code name=\"onchange\" />\n\n### separator *null | string*\n分隔符。为空时，value会保留Array格式。不为空时，value会处理为 separator 分隔的字符串。\n\n<code name=\"separator\" />\n\n### prediction *function(val, d):bool*\nDatum内部存储的是format之后的值，所以需要prediction函数来比对存储的值和原始数据是否一致。不设置，会使用此默认值:\n```\n(val, d) => val === format(d)\n```\n\n通常用在 value 为对象时，值相同却不是同一个对象等情况。\n\n<code name=\"prediction\" />\n\n### disabled *function(d):bool*\n判断数据项是否禁用。如果返回 true，add 和 remove 函数会忽略此数据。\n\n<code name=\"disabled\" />\n\n### value *array | string*\n初始值，可以为 Array 或 String。\n\n## 函数\n\n### getValue *function():array|string*\n获取当前值。根据separator的设置，返回array或者string。\n\n### setValue *function(array|string)*\n设置值。新的值会替代当前值。\n\n### add *function(array|object)*\n添加数据。值为 format 前的原始数据，单条或者一组数据。\n\n### remove *function(array|object)*\n移除数据。值为 format 前的原始数据，单条或者一组数据。\n\n### clear *function*\n清空数据。"},1209:function(n,e){n.exports="# Datum.List\n\n The auxiliary class that process the array values.\n \n## Example\n\nThe data used in the example on this page is as follows:\n```\nconst data = {\n  red: { id: 1, name: 'red' },\n  orange: { id: 2, name: 'orange' },\n  yellow: { id: 3, name: 'yellow' },\n  green: { id: 4, name: 'green' },\n  cyan: { id: 5, name: 'cyan' },\n  blue: { id: 6, name: 'blue' },\n  violet: { id: 7, name: 'violet' },\n}\n```\n\n<br />\n\n<code name=\"example\" />\n\n## Arguments\n\n### format  *null | string | function(d)*\nThe format is used to convert the original data object to the specified value.\n\n- **null** - When it is null, the return value is the original data.\n- **string** - When it is a string, it will get the value from the original data as the key, which is equivalent to (d) => d\\[format].\n- **function(d)** - d is the single original data.\n\n<code name=\"format\" />\n\n### onChange *function(value)*\nA callback function triggered when a value changes. Value is an array of the formatted data for the format function or string(separator is a string).\n\n<code name=\"onchange\" />\n\n### separator *null | string*\nWhen it is null, value is the Array format.\n\nWhen it is a string, value is a string delimited by the separator.\n\n<code name=\"separator\" />\n\n### prediction *function(val, d):bool*\nDetermine whether the value is consistent with the original data. If it is not set, this default prediction will be used:\n```\n(val, d) => val === format(d)\n```\n\n<code name=\"prediction\" />\n\n### disabled *function(d):bool*\nDetermines whether data items are disabled. If true, the add and remove functions will ignore this item.\n\n<code name=\"disabled\" />\n\n### value *array | string*\nThe initial value.\n\n## Methods\n\n### getValue *function():array|string*\nGet the current values. Return array or string depending on the separator setting.\n\n### setValue *function(array|string)*\nSet the value. The new value will replace the current value.\n\n### add *function(array|object)*\nAdd data. The value is the original data before being formatted.\n\n### remove *function(array|object)*\nRemove data. The value is the original data before being formatted.\n\n### clear *function*\nClear all data.\n"},1210:function(n,e,a){"use strict";a.r(e);var t=a(70),o=a(574),r=new t.a.List({disabled:function(n){return"blue"===n.name||"red"===n.name},format:function(n){return n.name},onChange:function(n){console.log(n)}});r.setValue(["red"]),r.add([o.a.orange,o.a.blue]),r.remove([o.a.orange,o.a.red])},1211:function(n,e,a){"use strict";a.r(e);var t=a(70),o=a(574),r=new t.a.List({format:"name",separator:",",prediction:function(n,e){return n===e.name},value:"blue",onChange:function(n){console.log(n)}});r.add(o.a.orange),r.add(o.a.green),r.remove(o.a.green),r.clear(),r.setValue("red,violet"),r.add(o.a.cyan)},1212:function(n,e,a){"use strict";a.r(e);var t=a(70),o=a(574),r=new t.a.List({});r.add(o.a.red),console.log(r.getValue()),(r=new t.a.List({format:function(n){return n.name}})).add(o.a.red),console.log(r.getValue()),(r=new t.a.List({format:function(n){return"".concat(n.id,"-").concat(n.name)}})).add(o.a.red),r.add(o.a.green),console.log(r.getValue())},1213:function(n,e,a){"use strict";a.r(e);var t=a(70),o=a(574),r=new t.a.List({format:function(n){return n.name},onChange:function(n){console.log(n)}});r.setValue(["blue"]),r.add(o.a.red),r.add(o.a.orange),r.remove(o.a.red),r.clear()},1214:function(n,e,a){"use strict";a.r(e);var t=a(70),o=a(574),r=new t.a.List({format:"id",separator:",",prediction:function(n,e){return parseInt(n,10)===e.id},value:"2,3"});r.add(o.a.red),console.log(r.getValue()),r.remove(o.a.orange),console.log(r.getValue())},1215:function(n,e,a){"use strict";a.r(e);var t=a(70),o=a(574),r=function(n){return console.log(n)},d=new t.a.List({format:"id",value:[2,3],onChange:r});d.add(o.a.red),(d=new t.a.List({format:"name",onChange:r,separator:",",value:"red,yellow"})).add(o.a.blue),d.remove(o.a.yellow),(d=new t.a.List({format:"name",onChange:r,separator:"|",value:"red|yellow"})).add(o.a.cyan)},1216:function(n,e){n.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  disabled: d => d.name === 'blue' || d.name === 'red',\n  format: d => d.name,\n  onChange(value) {\n    console.log(value)\n  },\n})\n\ndatum.setValue(['red'])\ndatum.add([data.orange, data.blue]) // orange, blue\ndatum.remove([data.orange, data.red]) // orange, red\n"},1217:function(n,e){n.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'name',\n  separator: ',',\n  prediction: (val, d) => val === d.name,\n  value: 'blue',\n  onChange: values => {\n    console.log(values)\n  },\n})\ndatum.add(data.orange)\ndatum.add(data.green)\ndatum.remove(data.green)\ndatum.clear()\ndatum.setValue('red,violet')\ndatum.add(data.cyan)\n"},1218:function(n,e){n.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nlet datum = new Datum.List({})\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => d.name })\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => `${d.id}-${d.name}` })\ndatum.add(data.red)\ndatum.add(data.green)\nconsole.log(datum.getValue())\n"},1219:function(n,e){n.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: d => d.name,\n  onChange(value) {\n    console.log(value)\n  },\n})\n\ndatum.setValue(['blue'])\ndatum.add(data.red)\ndatum.add(data.orange)\ndatum.remove(data.red)\ndatum.clear()\n"},1220:function(n,e){n.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'id',\n  separator: ',',\n  prediction: (val, d) => parseInt(val, 10) === d.id,\n  value: '2,3',\n})\ndatum.add(data.red)\nconsole.log(datum.getValue())\ndatum.remove(data.orange)\nconsole.log(datum.getValue())\n"},1221:function(n,e){n.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst onChange = value => console.log(value)\n\nlet datum = new Datum.List({ format: 'id', value: [2, 3], onChange })\ndatum.add(data.red)\n\ndatum = new Datum.List({\n  format: 'name',\n  onChange,\n  separator: ',',\n  value: 'red,yellow',\n})\ndatum.add(data.blue)\ndatum.remove(data.yellow)\n\ndatum = new Datum.List({\n  format: 'name',\n  onChange,\n  separator: '|',\n  value: 'red|yellow',\n})\ndatum.add(data.cyan)\n"},574:function(n,e,a){"use strict";e.a={red:{id:1,name:"red"},orange:{id:2,name:"orange"},yellow:{id:3,name:"yellow"},green:{id:4,name:"green"},cyan:{id:5,name:"cyan"},blue:{id:6,name:"blue"},violet:{id:7,name:"violet"}}},585:function(n,e,a){"use strict";var t=a(4),o=a(5),r=window.console,d=function(){function n(){Object(t.a)(this,n),this.logs={default:[]},this.current=this.logs.default}return Object(o.a)(n,[{key:"setType",value:function(n){this.logs[n]||(this.logs[n]=[]),this.current=this.logs[n]}},{key:"log",value:function(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];var t=e.map(function(n){return"".concat((e=n,JSON.stringify(e,function(n,e){return"function"==typeof e?"fn#fn".concat(e.toString(),"fn#fn"):e},2)));var e});this.current.push(t)}}]),n}();e.a={start:function(){window.console=new d},setType:function(n){window.console.setType(n)},end:function(){var n=window.console.logs;return window.console=r,n}}}}]);