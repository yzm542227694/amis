---
title: 渲染器手册
---

amis 页面是通过 JSON 配置出来的，是由一个一个渲染模型组成的，掌握他们规则，就能灵活配置出各种页面。

## 集合

-   [Definitions](./renderers/Definitions.md): 建立当前页面公共的配置项
-   [Page](./renderers/Page.md): JSON 配置最外层的 Page 渲染器
-   [Form](./renderers/Form/Form.md): 表单渲染器
    -   [FormItem](./renderers/Form/FormItem.md): Form 中主要是由各种 FormItem 组成
    -   [List](./renderers/Form/List.md): 简单的列表选择框
    -   [Button-Group](./renderers/Form/Button-Group.md): 按钮集合
    -   [Service](./renderers/Form/Service.md): 动态配置，配置项由接口决定
    -   [Tabs](./renderers/Form/Tabs.md): 多个输入框通过选项卡来分组
    -   [Table](./renderers/Form/Table.md): 可以用来展示数组类型的数据
    -   [HBox](./renderers/Form/HBox.md): 支持 form 内部再用 HBox 布局
    -   [Grid](./renderers/Form/Grid.md): 支持 form 内部再用 grid 布局
    -   [Panel](./renderers/Form/Panel.md): 还是为了布局，可以把一部分 FormItem 合并到一个 panel 里面单独展示
    -   [Hidden](./renderers/Form/Hidden.md): 隐藏字段类型
    -   [Text](./renderers/Form/Text.md): 普通的文本输入框
    -   [Textarea](./renderers/Form/Textarea.md): 多行文本输入框
    -   [Url](./renderers/Form/Url.md): URL 输入框
    -   [Email](./renderers/Form/Email.md): Email 输入框
    -   [Password](./renderers/Form/Password.md): 密码输入框
    -   [Number](./renderers/Form/Number.md): 数字输入框
    -   [Select](./renderers/Form/Select.md): 选项表单
    -   [Chained-Select](./renderers/Form/Chained-Select.md): 无限级别下拉
    -   [Checkbox](./renderers/Form/Checkbox.md): 勾选框
    -   [Checkboxes](./renderers/Form/Checkboxes.md): 复选框
    -   [Radios](./renderers/Form/Radios.md): 单选框
    -   [Switch](./renderers/Form/Switch.md): 可选框，和 checkbox 完全等价
    -   [Date](./renderers/Form/Date.md): 日期类型
    -   [Datetime](./renderers/Form/Datetime.md): 日期时间类型
    -   [Time](./renderers/Form/Time.md): 时间类型
    -   [Date-Range](./renderers/Form/Date-Range.md): 日期范围类型
    -   [Color](./renderers/Form/Color.md): 颜色选择器
    -   [Range](./renderers/Form/Range.md): 范围输入框
    -   [Image](./renderers/Form/Image.md): 图片格式输
    -   [File](./renderers/Form/File.md): 文件输入
    -   [Matrix](./renderers/Form/Matrix.md): 矩阵类型的输入框
    -   [Tree](./renderers/Form/Tree.md): 树形结构输入框
    -   [TreeSelect](./renderers/Form/TreeSelect.md): 树形结构选择框
    -   [NestedSelect](./renderers/Form/NestedSelect.md): 树形结构选择框
    -   [Button](./renderers/Form/Button.md): 按钮, 包含 button、submit 和 reset
    -   [Button-Toolbar](./renderers/Form/Button-Toolbar.md): 让多个按钮在一起放置
    -   [Combo](./renderers/Form/Combo.md): 组合模式
    -   [Array](./renderers/Form/Array.md): 数组输入框配置
    -   [SubForm](./renderers/Form/SubForm.md): formItem 还可以是子表单类型
    -   [Picker](./renderers/Form/Picker.md): 列表选取
    -   [Formula](./renderers/Form/Formula.md): 公式类型
    -   [Group](./renderers/Form/Group.md): 表单项集合
    -   [FieldSet](./renderers/Form/FieldSet.md): 多个输入框可以通过 fieldSet 捆绑在一起
    -   [Repeat](./renderers/Form/Repeat.md): 可用来设置重复频率
    -   [Rich-Text](./renderers/Form/Rich-Text.md): 富文本编辑器
    -   [Editor](./renderers/Form/Editor.md): 编辑器
    -   [Static](./renderers/Static.md): 纯用来展现数据的
-   [Wizard](./renderers/Wizard.md): 表单向导
-   [Tpl](./renderers/Tpl.md): 支持用 JS 模板引擎来组织输出
-   [Plain](./renderers/Plain.md): 单纯的文字输出
-   [Html](./renderers/Html.md): html, 当需要用到变量时，请用 Tpl 代替
-   [Action](./renderers/Action.md): 一种特殊的渲染器，它本身是一个按钮，同时它能触发事件
-   [Dialog](./renderers/Dialog.md): Dialog 由 Action 触发。他是一个类似于 Page 的容器模型
-   [Drawer](./renderers/Drawer.md): Drawer 由 Action 触发
-   [Divider](./renderers/Divider.md): 分割线
-   [CRUD](./renderers/CRUD.md): 增删改查模型，主要用来展现列表
    -   [CRUD-Table](./renderers/CRUD-Table.md): 请参考 Table
    -   [CRUD-Cards](./renderers/CRUD-Cards.md): 请参考 Cards
    -   [CRUD-List](./renderers/CRUD-List.md): 请参考 List
-   [Panel](./renderers/Panel.md): 可以把相关信息以盒子的形式展示到一块。
-   [Wrapper](./renderers/Wrapper.md): 简单的一个容器。
-   [Service](./renderers/Service.md): 功能型容器，自身不负责展示内容，主要职责在于通过配置的 api 拉取数据
-   [Chart](./renderers/Chart.md): 图表渲染器
-   [Collapse](./renderers/Collapse.md): 折叠器
-   [Carousel](./renderers/Carousel.md): 轮播图
-   [Audio](./renderers/Audio.md): 音频播放器
-   [Video](./renderers/Video.md): 视频播放器
-   [Table](./renderers/Table.md): 表格展示
    -   [Column](./renderers/Column.md): 表格中的列配置
-   [List](./renderers/List.md): 列表展示
-   [Card](./renderers/Card.md): 卡片的展示形式
-   [Cards](./renderers/Cards.md): 卡片集合
-   [Field](./renderers/Field.md): 主要用在 Table 的列配置 Column、List 的内容、Card 卡片的内容和表单的 Static-XXX 中
-   [Tabs](./renderers/Tabs.md): 标签页
-   [Grid](./renderers/Grid.md): Grid 布局
-   [HBox](./renderers/HBox.md): HBox 布局
-   [Button-Group](./renderers/Button-Group.md)： 按钮集合
-   [iFrame](./renderers/iFrame.md)： 如果需要内嵌外部站点，可用 iframe 来实现
-   [Nav](./renderers/Nav.md): 菜单栏
-   [Tasks](./renderers/Tasks.md): 任务操作集合，类似于 orp 上线
-   [QRCode](./renderers/QRCode.md): 二维码显示组件
-   [Types](./renderers/Types.md): 类型说明文档
