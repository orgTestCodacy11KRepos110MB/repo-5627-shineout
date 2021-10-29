(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[58],{1669:function(n,e){n.exports="# 更新日志\n\n### 1.6.6\n\n- 修复 Table 虚拟滚动下 Input 输入超长导致样式异常的问题\n- 优化 Cascader compressed 模式的样式\n- Cascader 提供给 getComponentRef 方法获取组件实例，可以调用组件的 close 方法\n- 修复 Cascader 组件 在 absolute 模式下组件宽度超过屏幕后 下拉选项向左偏移被挡住的问题\n- Select 多列模式支持选项懒加载\n- 修复 Gap 组件子元素为 null 依然显示的问题\n- 修复 cascader filter 后不显示下拉选项\n- 支持高版本 less\n- 修复 List 无法受控的问题\n- 修复 Input.Number 按住键盘上键失焦后引发死循环的问题\n- 修复 dropdown 组件没有 placeholder 属性的时候样式不一致问题\n- 优化文档及修复屏幕缩放后菜单样式异常的问题\n- Form 新增 defaultValue 属性\n- Upload 支持自定义强制格式校验出错信息文案\n- DatePicker 双击日期后支持保持 defaultTime\n- 修复高版本 less 的兼容性问题\n- 修复 Table onScroll 中更改数据源后导致频繁触发滚动回调的问题\n- 新增 Drawer-抽屉 组件\n- 优化 TS 声明\n- 修复 Input number 输入小数点时出现 NaN 的问题\n\n### 1.6.5\n\n- 新增 Gap 组件，用于设置子元素水平和垂直间距\n- Menu 支持父级节点选中，并更新增父级菜单操作交互\n- Progress 新增 popup 交互\n- Message 新增 setOptions，用于设置全局选项\n- \bUpload 新增 removeConfirm，用于显示删除前的确认\n- Select 新增 optionWidth 属性，用于单独设置下拉列宽宽度\n- Upload.Button 支持多种 type\n- Select/TreeSelect 新增高级筛选模式\n- Upload validator/beforeRemove 支持 Promise\n- Select 筛选后支持默认选中第一个选项\n- Modal 支持全屏展示\n- DatePicker 单选模式增加快速选择功能\n- 移除 create-react-context 依赖\n- 修复若干问题\n\n### 1.6.4\n\n- 组件样式优化，包括 Upload、DatePicker、TreeSelect、Modal、Menu 等组件\n- 组件添加 TypeScript 类型提示支持\n- Cascader 新增筛选功能\n- Table 新增 selection 属性来开启单元格多选复制功能\n- 提高 Table 虚拟列表滚动的准确度\n- 新增组件：Divider、List（虚拟列表）\n- 针对 React17 进行适配\n- Message 支持 hideClose 来隐藏关闭按钮\n- DatePicker 新增 defaultPickerValue，用于设置面板的时间\n- 修复若干问题\n\n### 1.6.2\n\n- Table 新增“表头附着顶部”功能\n- Tooltip 支持 ReactNode 用法\n- Transfer 新增 renderFilter 用于自定义筛选 UI\n- 修复 Table 未设置 fixed=\"y\" 情况下可以纵向滚动的问题\n- 修复文档页打开 codesandbox 缺少 prop-types 的报错\n- Button 新增 space 属性，用于在两个中文字符中插入空格\n- Transfer 支持自定义渲染内容\n- 优化部分组件 TS 声明\n- Modal 新增 Esc 键关闭功能\n- Tree 新增 dragSibling 属性，限制兄弟节点之间拖拽\n\n### 1.6.1\n\n- EditableArea 支持 width 属性\n- Modal.Submit 支持单独设置 disabled 状态\n- Message 支持关闭单个操作\n- Image 新增 autoSSL 属性，用于支持 https 站点\n- Modal title 可根据 type 属性，显示不同状态下 Icon 图标\n- Upload 新增 forceAccept，强制对文件类型进行校验\n- 修复 Modal usePortal false 时无法更新内容的问题\n- 文档页主题编辑器全新改版\n- DatePicker time 模式支持 defaultTime\n- 修复 Sticky 滚动时抖动的问题\n\n### 1.6.0\n\n- Transfer 新增“大数据量”支持\n- Modal 支持缩放、移动\n- 优化 “下拉列表” 性能\n- Tag 新增编辑功能\n- Modal 新增 destroy，支持关闭时卸载子组件\n- 优化 Message 动画\n- CardGroup 支持 自动布局\n- 新的 Modal 弹出动画\n- Table 提升列宽计算速度\n\n### 1.5.1\n\n- Button Secondary 类型样式调整\n- Button 新增 text 属性，支持纯文本按钮展示\n- 新增 Popover 嵌套用法\n- 优化 TypeScript 支持\n- Table 支持指定默认排序规则\n- Sticky 支持自适应宽度\n- 修复 Table group 为动态 ReactNode 时，固定列渲染异常的问题\n\n### 1.4.3\n\n- 修复 TreeSelect 已知 bug\n- 修复 Table 已知 bug\n- 修复 Tooltip disabledChild 标签显示位置不正确的问题\n- Image 修复 src 改变后没有重新更新的问题\n- 修复 Select treeData 筛选后选择数据失败的问题\n- Button 组件统一 disabled 样式\n- Pagination 增加 sizeListProps, 可以给分页选择框增加其他的属性\n- 主题新增清空功能\n- Upload 新增 drop 属性，支持拖拽上传文件\n- Tree 新增 expandIcons，支持自定义展开/收起图标\n- Select options 超过页面边界时新增边界对齐支持\n- TreeTable 新增 treeCheckAll，支持选择所有子孙数据\n- Table 新增 onSortCancel 表格取消排序事件\n- Spin 新增包裹组件用法\n- Table 新增 rowEvents ，可以为 tr 添加事件监听\n- Modal 新增 container 属性来指定渲染目标节点\n- Tree 新增 doubleClickExpand 属性，双击展开子节点\n\n### 1.4.2\n\n- TreeSelect compressed 添加 hover 查看所有值功能\n- Progress 新增渐变色, 设置 color 为对象\n- Image 新增 container 属性, 可以设置在元素内部滚动时懒加载\n- DatePicker 新增 defaultRangeMonth, 可以设置范围选择默认的左右月份\n- Select 修复选中后 ☑️ 不显示的 bug\n- Upload disabled 后值不允许删除\n- Select treeData 支持选中路径获取\n- Select/TreeSelect/Cascader/Tree 支持通过 childrenKey 指定树形数据属性名\n- Upload.Image 新增 renderContent, 可以自定义结果内容的显示.\n- Tooltip 新增 disabledChild 来处理被禁用元素的提示\n- Select 单选下拉箭头动态化\n- Table 新增 treeEmptyExpand 支持\n- 修复 Table 树状数据排序的 bug\n- 修复 Menu 子菜单高度大于父菜单被隐藏的 bug\n- 修复 less 高版本 escape 函数报错 bug\n- 修复 TreeSelect keygen 为整形时选中报错的 bug\n\n### 1.4.1\n\n- 文档新增 codesandbox 支持\n- Select 新增 Separator 属性\n- Select 新增 filterSingleSelect, 可以设置在筛选只剩一条时自动选中\n- Select 新增 groupBy, 可以对数据进行分组\n- Modal 增加 autoFocusButton, 打开之后自动 focus 按钮\n- Radio 新增 按钮样式\n- 新增自定义主题功能\n- Table 支持 列伸缩\n- 修复已知 bug\n\n### 1.4.0\n\n- Tree 支持 defaultExpandAll 默认展开所有节点\n- menu 增加 linkKey 可以设置子菜单的链接\n- Select 的选中结果添加 title 标签\n- Dropdown 支持 absolute\n- Select 多列模式最小宽度和表单框对齐\n- Select 多列模式下支持单列\n- datepicker 的 week 模式 改用 ISOweek 的格式\n- Cascader renderResult 支持获取所有选中值\n- Select 单选自定义校验 value 修正为当前选中值（字符串）\n- Select 多选 compressed 支持鼠标悬浮查看所有值\n- treeTable 支持受控\n- Form 支持传入 Error, 用于手动添加错误\n- DatePicker 范围选择模式下交互修改, 开始时间和结束时间分开, 左边开始时间,右边结束时间, 互不影响\n- DatePicker 增加 quickSelect, 可以实现快速选择的功能\n- Textarea 的 info 可以传入数字, 提供一个默认的提示信息\n- Select 增加多选时点击元素不执行删除\n\n### 1.3.5\n\n- Pagination 选择分页条数的 Select 变更\n- Select 增加 trim 属性, 可以在 onFilter, onCreate 中输入空格\n- Select 增加 autoAdapt 属性, 可以设置自适应选项宽度\n- 添加新组件 Switch\n- 添加 Popover.Confirm 组件\n- 表单组件增加 tab 键操作功能, 涉及的元素(Button, Input, Select, Datepicker, Cascader, TreeSelect)\n- Image 组件大图是增加 loading 功能\n- 修复已知 bug\n\n### 1.3.4\n\n- Form 添加 removeUndefined 属性，用于保留或删除值为 undefined 的字段。\n\n### 1.3.3\n\n- Cascader mode 默认值修正。\n- Form.FieldSet 新增 onError 属性。\n- Table loading CSS 层级调整。\n- Select 新增点击表单收起选项功能。\n- Table 修复由于动态 columns 引发的错列显示问题。\n- 已知 bug 修复。\n\n### 1.3.2\n\n- TreeSelect 和 Cascader 支持 absolute 属性。\n- Modal 新增 bodyStyle 属性。\n- Table 新增 tree-table 功能。\n- Pagination 优化\"页数选择\"显示。\n- 已知 bug 修复。\n\n### 1.3.1\n\n- Card 新增 collapsible=bottom，支持从底部关闭。\n- 提升 Image loading 性能。\n- 已知 bug 修复。\n\n### 1.3.0\n\n- 文档进行移动端适配。\n- Menu keygen 支持字符串、整型及其他类型。\n- TreeSelect 新增 compressed 属性。\n- 新增 Tabs.Link，用来展示链接。\n- 修复 Table 展开行后高度未更新的问题。\n- 已知 bug 修复。\n\n### 1.2.10\n\n- Select 新增 compressed 属性，折叠选中值。\n- Table 可以通过指定 rowsInView 为 0 关闭懒加载。\n- 已知 bug 修复。\n\n### 1.2.9\n\n- 已知 bug 修复。\n\n### 1.2.8\n\n- Slider 添加持续拖动增长功能。\n- Breadcrumb 支持下拉选择条目。\n- 新增 TreeSelect 组件，支持树形数据结构选择。\n- DatePicker 增加了 formatResult 属性，可对选中时间进行格式化。\n- Upload 新增拖拽上传功能。\n- 已知 bug 修复。\n\n### 1.2.7\n\n- DatePicker 增加了 absolute 属性，不受父级样式影响。\n- Table 支持高度自适应。\n- 文档增加搜索功能。\n- 已知 bug 修复。\n\n### 1.2.6\n\n- DatePicker 增加了 defaultTime 属性，可以给选择的日期提供一个默认时间。\n- Table 增加了 rowClickAttr 属性，可以设置行内元素点击触发 onRowClick 事件。\n- Table 的 column 增加了 align 属性，可以设置列内容对齐方式。\n- Popover 提供一种新写法，可以放在组件里面，旧写法已不推荐使用。\n- Carousel 组件增加了自定义 Indicator，设置 Indicator 为函数即可。\n- Upload 增加按钮上传，在按钮表面覆盖单个文件上传进度。\n- 修复了若干已知 bug 。\n\n### 1.2.5\n\n- 修复 Textarea value 为 null 时 warning。\n- Textarea autosize 模式下重新赋值时重设高度。\n- 修复 Form 下，有 name 为 \"id\" 的 bug。\n- Table 支持 touch 事件。\n- Table 在 loading 状态下禁止滚动。\n\n### 1.2.4\n\n- 修复 Tree 拖拽到空白处 bug。\n- 修复 Popover 覆盖元素 onClick 问题。\n- Tabs.Panel 增加 diabled 属性。\n- Modal 增加 usePortal 属性。\n- 修复 Table rowClassName 合并行的问题。\n\n### 1.2.3\n\n- 单元测试 ava -> jest。\n\n### 1.2.2\n\n- fixed 打包后 lib 下代码未处理 module。\n\n### 1.2.1\n\n- webpack 升级到 v4.\n- Select 值不在选项中时，显示 value。\n- 修复 Table 合并行时，滚动条高度计算问题。\n- 增加 Lazyload，可使用，暂不开放。\n\n### 1.2.0\n\n- 新增 Form.FieldSet 组件，用来代替 Form.Block, Form.BlockField, Form.Loop。\n  - Form.FieldSet 主要区别是在处理多层嵌套数据时，将数据变为一级数组进行处理，方便对 errors 进行操作，为联动校验做准备。\n- 重构 Datum.Form，优化数据处理和错误处理。\n- 增加 Rule，简化表单校验规则编写。\n- Tabs 新增 collapsible 选项，可以折叠 Tab 内容。\n- 新增 Select.columns 选项，实现多列选择。\n- 修复空数据下，Table border 显示问题。\n- Table 增加 onRowClick 事件。\n- Table.Column 增加 'row-expand' type，实现点击整行展开。\n- Table 增加 expandKeys\n\n### 1.1\n\n### 1.1.7\n\n- 部分组件 forceUpdate 前加入 componentWillUnmount 判断。\n\n### 1.1.6\n\n- 重写 Form.set，修复使用 Form.Block 时，无法通过 set('a.b.c.d', value) 这种方式触发 change。\n- 重写 Form.validate。\n- 重写 Select.filter，Select.Result，修复 filter 值变化不及时更新等问题。修复 value 和 defaultValue 问题。\n\n### 1.1.5\n\n- 修复 Menu 高度不足时，边框长度未到底。\n- Select disabled 支持函数（禁止选项）。\n- 修复 StrictMode warning。\n- Tabs 增加右对齐。\n\n### 1.1.4\n\n- 移除 dependencies react, react-dom。\n\n### 1.1.3\n\n- 一级组件增加 displayName。\n- Enter 键触发 Form 提交时，先触发 blur，更新数据后再提交。\n- 修复 Modal 在上边和下边弹出未撑满屏幕。\n- 修复 Datepicker.Range type 为 'datetime' 时，出现 'Invalid Date'。\n\n### 1.1.2\n\n- Cascader expandTrigger 增加 'hover-only' 选项\n- 优化 Sticky 滚动\n- Form 增加 mode 属性\n\n### 1.1.1\n\n- Form.Datum.set 支持 object。\n\n### 1.1.0\n\n- 增加 Cascader 组件。\n- 修复 From 自定义 validate 时拿到的 value 为 Datum 对象。\n- Menu mode 为 virticle 时支持内部滚动条。\n- 修复 DatePicker 类型为 datetime 时，未设定日期，时间部分显示错误。\n\n### 1.0\n\n### 1.0.10\n\n- Datum.Form 增加 validateClear 方法，清除校验结果。\n- Upload 修复删除文件恢复 bug。\n- Modal.confirm 按钮事件支持 Promise。\n\n### 1.0.9\n\n- Form.Field 增加 bind 属性，触发绑定字段校验。\n- Modal 加入 position，实现 Drawer 功能。\n- 增加 Input.Password。\n- 修复表单内 Upload 错误时可提交表单。\n\n### 1.0.8\n\n- 修复 Table 展开行后行高变化导致滚动条位置问题。\n- ScrollBar 默认宽度从 12px 改为 16px。\n- Table 滚动条高度超出实际高度时，隐藏滚动条超出部分。\n- Table 增加 rowClassName。\n- Table 在空数据时增加提示文字。\n- 修复 Tree 在更新数据时判断是否可选会报 undefined。\n\n### 1.0.7\n\n- Modal.Submit 延时提交。\n- Message DOM render 改为 ref，ReactDOM.render 某些情况下会返回 null。\n- 修复 Message closeAll 后关闭动画无效。\n- 修复 Table 宽度变化时，某些场景下内容表与表头宽度不一致。\n- 修复 Select 数据源变化时，在某些条件下选中结果未变化。\n- Upload 增加 ext 校验。\n\n### 1.0.6\n\n- 修复 Table 浏览器缩放后，如果数据量不满一屏，仍会出现滚动条并可以滚动。\n- 修改 Alert 图标布局为 flex。\n- Message 增加 4 个 position，实现 Notification 功能。\n- Form.validate 性能优化（提交时不处理状态）。\n- Windows 下表格滚动速度调整。\n- Upload 文件名过长换行。\n\n### 1.0.5\n\n- Form.inputable bind 移动到 componentDidMount 中（React 组件修改 key 时会先创建新组件，再移除旧组件）。\n\n### 1.0.2\n\n- Select 动态修改数据时，重置滚动条位置。\n\n### 1.0.1\n\n- 修复 Table column render 函数丢失 index。\n"}}]);