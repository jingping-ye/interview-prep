# interview prep

## html 部分

### 语义化

#### 什么是语义化

使用带有清晰含义、符合内容的标签去展示内容。像 html5 的新的标签 header,footer,section 等就是语义化

#### 如何实现语义化

页头页脚分别用 header、footer，导航区用 nav 标签，段落用 p，边栏用 aside,主要内容要 main 标签

#### 语义化的好处

- 易于用户阅读，即使样式丢失，也能较好的展示页面
- 便于屏幕阅读器等辅助工具，帮助阅读障碍人群阅读
- 程序较为请求，有利于后期网站的维护
- 便于 seo 和搜索引擎根据标签确定关键字的权重

### html5 有哪些新特性、移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5?

#### 新特性

- 新的 DOCTYPE 声明<!DOCTYPE html>,不再是 sgml 的子集
- 完全支持 css3
- video 和 audio
- 本地(离线)存储，添加了 localstorage 长期存储数据，浏览器关闭后数据不丢失；添加了 sessionStorage 在浏览器关闭后自动删除
- 语义化标签，入 header、footer、nav、section、article
- canvas,添加了 video 和 audio 元素
- 新事件如 ondrag onresize
- 添加了一些表单控件，如 calendar、date、time、email、url、search
- 添加了新的技术,webworker, websocket, Geolocation

#### 移除的元素

- 纯表现的元素：basefont，big，center，font, s，strike，tt，u；
- 对可用性产生负面影响的元素：frame，frameset，noframes；

#### 处理兼容性问题

- IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，
  可以利用这一特性让这些浏览器支持 HTML5 新标签，
- 浏览器支持新标签后，还需要添加标签默认的样式：
- 当然最好的方式是直接使用成熟的框架、使用最多的是 html5shim 框架

```
<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
<![endif]-->
```

#### 如何区分 html5 与其他 html

doctype 声明、新增的标签，如 header 和 date 控件

### doctype

#### doctype 有多少种文档类型

- 该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档
- HTML4.01 规定了三种文档类型：Strict, Transitional 以及 Frameset
- XHTML 1.0 规定了三种 XML 文档类型：Strict, Transitional 以及 Franmeset
- Standards（标准）模式（也就是严格呈现模式）用于呈现遵循最新标签的网页，而 Quirks（包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页

#### doctype 的作用

- 声明文档:声明 html 页面是用哪个版本的 html 进行编写的
- 告知解析器采用什么 DTD(文档类型定义)来解析 html 文档

#### 为什么 html5 只用写<!doctype html>?

HTML5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（让浏览器按照它们应该的方式来运行

### 行内元素与块级元素

#### 行内元素

a b span img input select strong（强调的语气）

### 块级元素

div ul ol li dl dt dd h1 h2 h3 h4…p

#### 行内元素与块级元素的区别

- 行内元素：和其他元素都在一行上，高度、行高及外边距和内边距都不可改变，文字图片的宽度不可改变，只能容纳文本或者其他行内元素；其中 img 是行元素
- 块级元素：总是在新行上开始，高度、行高及外边距和内边距都可控制，可以容纳内敛元素和其他元素；行元素转换为块级元素方式：display：block；

### iframe 的缺点

- iframe 会阻塞主页面的 Onload 事件；

- iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
  使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe，最好是通过 javascript
  动态给 iframe 添加 src 属性值，这样可以可以绕开以上两个问题。

### html5 的 form 如何关闭自动完成功能

给不想要提示的 form 或下某个 input 设置为 autocomplete=off

### img 中 title 和 alt 的区别

- title:鼠标移上去显示的文字，也可用于其他标签
- alt 图片丢失时显示的文字

### src 和 href 的区别

- src 用于引进图片、外部 js 脚本等资源。浏览器解析时，遇到 src 标签将会暂停其他资源的下载和处理，一直到资源加载、编译、执行完毕。
- href 用于外部链接、外部 css 样式文件等资源。浏览器对外部 css 文件解析时，会并行下载其他资源。

### reflow 和 repaint

#### reflow 和 repanit 是什么

- reflow
  当 DOM 节点的布局属性(位置和大小)发生变化时，浏览器会重新描绘该属性，这就叫做重排(reflow)。
- repaint
  当 DOM 节点的可见性属性发生改变时，浏览器会重新绘制该节点，这就叫做重绘(repaint)。
  PS:重排必然会引起重绘。

#### 什么操作会引起 reflow 和 repaint？

- 调整浏览器窗口的大小
- 进行删减、添加元素的 DOM 操作
- 字体大小和样式的改变
- 元素内容发生改变，尤其是输入控件
- hover 等动作产生的用户交互行为
- width、clientWidth、scrollTop 等计算行为

#### 如何降低 reflow 和 repaint 对性能的影响

- 使用 class 统一改变样式，避免逐条改变样式。
- 避免 clientWidth 和 scrollTop 的频繁操作。
- 对需要的元素使用绝对定位脱离文档流，避免父元素和后续元素的大量回流。
- 避免频繁的 DOM 操作。

### viewport 属性

```
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

```

- width 设置 layout viewport 的宽度，为一个正整数，或字符串"width-device"
- initial-scale 设置页面的初始缩放值，为一个数字，可以带小数
- minimum-scale 允许用户的最小缩放值，为一个数字，可以带小数
- maximum-scale 允许用户的最大缩放值，为一个数字，可以带小数
- height 设置 layout viewport 的高度，这个属性对我们并不重要，很少使用
- user-scalable 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔

### link 和 script 在浏览器中的位置

link 放在文档开头的 head 标签中，script 防止在 body 标签结束时。原因，css 文件是对页面样式的描述，先加载 css，可以给用户呈现一个体验感更高的网页。script 文件大多数时候是一些用户和网站之间的交互函数，script 加载时，会阻塞浏览器加载其他的网页资源，这样，可能会产生一个空白的页面给用户。script 中如果要进行 dom 操作，也要依赖于 body 中的 html 代码。所以，先加载 css 资源，最后再加载 script 资源。

## css 部分

### 为什么要初始化 css 样式

不同的浏览器，标签的默认值是不一样的。如果没有对 css 初始化，将会出现浏览器之间页面的显示差异问题。

### 重置 css 和标准化 css 的区别是什么?你会选择哪种方式,为什么?

- 重置（Resetting）： 重置意味着除去所有的浏览器默认样式。对于页面所有的元素，像`margin`、`padding`、`font-size`这些样式全部置成一样。你将必须重新定义各种元素的样式。
- 标准化（Normalizing)： 标准化没有去掉所有的默认样式，而是保留了有用的一部分，同时还纠正了一些常见错误。

当需要实现非常个性化的网页设计时，我会选择重置的方式，因为我要写很多自定义的样式以满足设计需求，这时候就不再需要标准化的默认样式了。

### 盒模型:content-box 和 border-box，为什么看起来 content-box 更合理，但还是经常使用 border-box?

content-box 是 W3C 的标准盒模型 元素宽度+padding+border
border-box 是 ie 的怪异盒模型，他的元素宽度等于内容宽度 内容宽度包含了 padding 和 border
比如有时候在元素基础上添加内边距 padding 或 border 会将布局撑破 但是使用 border-box 就可以轻松完成

### 有什么不同的方式可以隐藏内容?

- visibility: hidden
- width: 0; height: 0
- position: absolute; left: -99999px
- text-indent: -9999px
- opacity:0

### 实现两栏布局

- display:inline-block + float:right + width:50%;
- flex

```
* {
        margin: 0;
        padding: 0;
      }
      html,
      body {
        height: 100%;
      } //  这里是关键
      #container {
        display: flex;
        flex-flow: row;
        height: 100%;   // 这里是关键
      }
      #left {
        flex: 1;
        background: red;
      }
      #right {
        flex: 1;
        background: green;
      }
```

### 实现三栏布局

- flex 实现

```
* {
        margin: 0;
        padding: 0;
      }
      html,
      body {
        height: 100%;
      }
      #container {
        display: flex;
        flex-flow: row;
        height: 100%;
      }
      #left {
        flex: 1;
        background: red;
      }
      #middle {
        flex: 1;
        background: yellow;
      }
      #right {
        flex: 1;
        background: green;
      }
```

- width:33.33%+float 实现

```
* {
        padding: 0;
        margin: 0;
      }
      html,
      body {
        height: 100%;
      }
      #container {
        height: 100%;
      }
      #left,
      #middle,
      #right {
        display: inline-block;
        width: 33.333%;
        height: 100%;
      }
      #left {
        background-color: red;
        float: left;
      }
      #middle {
        background-color: blue;
      }
      #right {
        background-color: green;
        float: right;
      }
```

### rem 和 em 的区别？

em 相对于父元素，rem 相对于根元素

### 清除浮动

- 利用 clear 属性进行清理 clear:both
- 利用 css 伪元素,使用 clearfix 类
- overflow:auto 或者 overflow:hidden

```
.clearfix:after {
    content: ".";
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
}
```

### display:none 和 visibility:hidden 的区别？

- display:none 隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。
- visibility:hidden 隐藏对应的元素，但是在文档布局中仍保留原来的空间。

### 使用 css 预处理语言的优缺点

- 优点

* 提高 CSS 可维护性。
* 易于编写嵌套选择器。
* 引入变量，增添主题功能。可以在不同的项目中共享主题文件。
* 通过混合（Mixins）生成重复的 CSS。
* 将代码分割成多个文件。不进行预处理的 CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件。

- 缺点：

* 需要预处理工具。
* 重新编译的时间可能会很慢。

### 说说使用过 css 预处理语言的优缺点?

1. 优点

- 以上
- Less 用 JavaScript 实现，与 NodeJS 高度结合。

2. 缺点

- 以上
- 使用`@`作为前缀，容易与 css 关键字混淆，如 `@media`、`@import`、`@font-face`

### transition 和 margin 的百分比根据什么计算？

transition 是相对于自身；margin 相对于参照物

### flex 的属性值

- flex 属性是 flex-grow,flex-shrink 和 flex-basis 的简写
- flex-grow 属性定义项目的放大比例，默认为 0
- flex-shrink 属性定义了项目的缩小比例，默认为 1
- flex-basis 属性定义了项目的固定空间

### 实现一个 div 从页面左上角到右下角的移动，有哪些方法，怎么实现?

- 使用 div.style.top 设定，加上定时器；要点：初始 top 必须写在 style 中.
- css3 animation 方法

### 居中显示

#### 水平居中显示

1. 使用 text-align

```javascript
<p>水平居中1</p>
p {
    text-align: center;
  }
```

2. 使用 margin:0 auto;

```html
<div id="align2">水平居中2</div>
#align2 { width: 200px; background-color: green; margin: 0 auto; }
```

3. 使用 flex

```
<div id="align5">水平居中5</div>
#align5 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blanchedalmond;
  }
```

#### 垂直居中显示

1. 不定宽高:使用 transform

```
<div id="align3">水平居中3</div>
#align3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: antiquewhite;
}
```

2. 定宽高:使用 top/left/bottom/right:0px;

```html
<div id="align4">水平居中4</div>
#align4 { position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; background-color: aquamarine; width:
200px; height: 200px; }
```

### @import 和 link 的区别

- link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS, 定义 rel 连接属性等作用；而@import 是 CSS 提供的，只能用于加载 CSS;
- 页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载;
- import 是 CSS2.1 提出的，只在 IE5 以上才能被识别，而 link 是 XHTML 标签，无兼容问题;
- link 方式的优先级高于@import 的优先级

### 如果需要手动写动画，你认为最小时间间隔是多久？为什么?

多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为 1/60＊1000ms ＝ 16.7ms

### css 盒模型

css 盒子模型分为两种 ie 盒子模型、标准 w3c 盒子模型;ie 的 content 部分包含了 border 和 padding。盒模型由内容(content)、填充(padding)、边界(margin)、边框(border)。

### dispaly 的属性值

- none
- block
- inline
- inline-block
- table
- table-row
- table-cell
- list-item 象块类型元素一样显示，并添加样式列表标记。

### `inline`和`inline-block`有什么区别？

我把`block`也加入其中，为了获得更好的比较。

|                                 | `block`                                                     | `inline-block`                             | `inline`                                                                                                           |
| ------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 大小                            | 填充其父容器的宽度。                                        | 取决于内容。                               | 取决于内容。                                                                                                       |
| 定位                            | 从新的一行开始，并且不允许旁边有 HTML 元素（除非是`float`） | 与其他内容一起流动，并允许旁边有其他元素。 | 与其他内容一起流动，并允许旁边有其他元素。                                                                         |
| 能否设置`width`和`height`       | 能                                                          | 能                                         | 不能。 设置会被忽略。                                                                                              |
| 可以使用`vertical-align`对齐    | 不可以                                                      | 可以                                       | 可以                                                                                                               |
| 边距（margin）和填充（padding） | 各个方向都存在                                              | 各个方向都存在                             | 只有水平方向存在。垂直方向会被忽略。 尽管`border`和`padding`在`content`周围，但垂直方向上的空间取决于'line-height' |
| 浮动（float）                   | -                                                           | -                                          | 就像一个`block`元素，可以设置垂直边距和填充。                                                                      |

### position 的属性值

经过定位的元素，其`position`属性值必然是`relative`、`absolute`、`fixed`或`sticky`。

- `static`：默认定位属性值。该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。生成相对定位的元素，相对于其正常位置进行定位。
- `relative`：该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。
- `absolute`：不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
- `fixed`：不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform 属性非 none 时，容器由视口改为该祖先。生成绝对定位的元素，相对于浏览器窗口进行定位。
- `sticky`：盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 `table` 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。`position: sticky` 对 `table` 元素的效果与 `position: relative` 相同。

### css 选择器

#### 类别

1. id 选择器（ # myid）
2. 类选择器（.myclassname）
3. 标签选择器（div, h1, p）
4. 相邻选择器（h1 + p）
5. 子选择器（ul > li）
6. 后代选择器（li a）
7. 通配符选择器（ \* ）
8. 属性选择器（a[rel = "external"]）
9. 伪类选择器（a: hover, li: nth - child）

#### 优先级

important > 内联 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符

- 选择器越具体，优先级越高，比如#xxx 大于.yyy
- 同样的优先级，写在后面的覆盖前面的。
- color:red !important; 优先级最高

#### 新增选择器

- p:first-of-type 选择属于其父元素的首个<p>元素的每个<p>元素。
- p:last-of-type 选择属于其父元素的最后<p>元素的每个<p>元素。
- p:only-of-type 选择属于其父元素唯一的<p>元素的每个<p>元素。
- p:only-child 选择属于其父元素的唯一子元素的每个<p>元素。
- p:nth-child(2) 选择属于其父元素的第二个子元素的每个<p>元素。
- :enabled :disabled 控制表单控件的禁用状态。
- :checked 单选框或复选框被选中。

### bfc 及其工作原理

块格式上下文（BFC）是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。

一个 HTML 盒（Box）满足以下任意一条，会创建块格式化上下文：

- `float`的值不是`none`.
- `position`的值不是`static`或`relative`.
- `display`的值是`table-cell`、`table-caption`、`inline-block`、`flex`、或`inline-flex`。
- `overflow`的值不是`visible`。

在 BFC 中，每个盒的左外边缘都与其包含的块的左边缘相接。

### css 样式继承

- 可继承样式:font-size、font-family、color、ul、li、dl、dd、dt
- 不可继承样式:border、padding、margin、width、height

### 雪碧图

雪碧图是把多张图片整合到一张上的图片。它被运用在众多使用了很多小图标的网站上（Gmail 在使用）。实现方法：

1. 使用生成器将多张图片打包成一张雪碧图，并为其生成合适的 CSS。
2. 每张图片都有相应的 CSS 类，该类定义了`background-image`、`background-position`和`background-size`属性。
3. 使用图片时，将相应的类添加到你的元素中。

好处：

- 减少加载多张图片的 HTTP 请求数（一张雪碧图只需要一个请求）。但是对于 HTTP2 而言，加载多张图片不再是问题。
- 提前加载资源，防止在需要时才在开始下载引发的问题，比如只出现在`:hover`伪类中的图片，不会出现闪烁。

### css 实现瀑布流

```
 column-count: 2; /*分几s列*/
  width: 100%;
  column-gap: 10px; /*列间距*/
```

### 实现超出字数省略号

- 单行

```
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```

- 多行

```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; // 最多显示几行
overflow: hidden;
```

### 实现三角

```
.info-tab {
    position: relative;
}
.info-tab::after {
    content: '';
    border: 4px solid transparent;
    border-top-color: #2c8ac2;
    position: absolute;
    top: 0;
}

```

## javascript 部分

### 引入脚本的`script`标签，加入 defer 和 async 的作用与区别

```
<script src="script.js"></script>
<script async src="script.js"></script>
<script defer src="script.js"></script>
```

- 不加 defer 或 async:解析 html 文档时，遇到 script 标签会停止 html 标签，下载并执行 script 引入的 js 脚本后，再加载 html
- 加 async: 解析 html 文档时，遇到 script 标签下载 script 引入的脚本。下载完成之后，停止 html 解析，执行 js 脚本，执行完毕后继续解析 html 文件。
- 加 defer:解析 html 文档时，遇到 script 标签下载 script 引入的脚本。不执行 js 脚本，直至 html 文档解析完毕。
  ![defer和async的区别](https://i.imgur.com/gHAdjeg.png)

### Javascript 中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

hasOwnProperty

### new 操作符具体干了什么呢?

1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2. 属性和方法被加入到 this 引用的对象中。
3. 新创建的对象由 this 所引用，并且最后隐式的返回 this 。

### 如何判断一个对象是否属于某个类？

```
使用instanceof （待完善）

if(a instanceof Person){
    alert('yes');
}
```

### eval 是做什么的?

它的功能是把对应的字符串解析成 JS 代码并运行；
应该避免使用 eval，不安全，非常耗性能（2 次，一次解析成 js 语句，一次执行）。

### 数组类型转变

```

["1","2","3"].map(Number) // 字符串类型转为数字
[1,2,3].map(String) // 数字类型转字符串

```

#### 其他

["1", "2", "3"].map(parseInt) 答案是多少？
[1, NaN, NaN] 因为 parseInt 需要两个参数 (val, radix)，其中 radix 表示解析时用的基数。map 传了 3 个 (element, index, array)，对应的 radix 不合法导致解析失败。

### 如何创建一个对象? （画出此对象的内存图 ) => 如何创建一个类

**此处应该使用 es6 创建**

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sing = function() {
    alert(this.name);
  };
}
let person = new Person();
```

```js
let speak = class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`Hello , My name is ${this.name}`);
  }
};
let me = new speak('vinr');
me.sayName();
```

### documen.write 和 innerHTML 的区别

document.write 只能重绘整个页面
innerHTML 可以重绘页面的一部分

### javascript 语句书写规范

1. 不要在同一行声明多个变量。
2. 请使用 ===/!==来比较 true/false 或者数值
3. 使用对象字面量替代 new Array 这种形式
4. 不要使用全局函数。
5. Switch 语句必须带有 default 分支
6. 函数不应该有时候有返回值，有时候没有返回值。
7. For 循环必须使用大括号
8. If 语句必须使用大括号
9. for-in 循环中的变量 应该使用 var 关键字明确限定作用域，从而避免作用域污染。

### JavaScript 原型，原型链 ? 有什么特点？

1.JS 中每个函数都存在有一个原型对象属性 prototype。并且所有函数的默认原型都是 Object 的实例。

2.每个继承父函数的子函数的对象都包含一个内部属性*proto*。该属性包含一个指针，指向父函数的 prototype。若父函数的原型对象的*proto*属性为再上一层函数。在此过程中就形成了原型链。

3.原型链实现了继承。原型链存在两个问题：a 包含引用类型值的原型属性会被所有实例共享。b 在创建子类型时，无法向超类型的构造函数中传递参数。

### 定时器,任务队列

定时器的任务队列排在最后

```
console.log(1);
setTimeout(function () {
    console.log(2);
}, 1000);
setTimeout(function () {
    console.log(3);
}, 0);
console.log(4);
1,4,3,2
```

```
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
setTimeout(function () {
    console.log(i);
}, 0);
}
3,3,3
```

### 获取一个元素到顶部的距离

```js
document.documentElement.scrollTop;
```

### getBoundingClientRect 获取的 top 和 offsetTop 获取的 top 区别

### 函数柯里化

#### 什么是函数柯里化?

#### 哪些地方用到了函数柯里化?

### 如何实现继承

- 构造函数
- 原型链
- extends

### 如何自定义事件

自定义事件的代码如下:

```
 var myEvent = new Event('clickTest');
    element.addEventListener('clickTest', function () {
        console.log('smyhvae');
    });

	//元素注册事件
    element.dispatchEvent(myEvent); //注意，参数是写事件对象 myEvent，不是写 事件名 clickTest
```

### 内存泄漏

内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

### 垃圾回收机制

垃圾回收器会每隔一段时间找出那些不再使用的内存，然后为其释放内存
一般使用标记清除方法 当变量进入环境标记为进入环境，离开环境标记为离开环境
还有引用计数方法堆栈
stack 为自动分配的内存空间，它由系统自动释放；而 heap 则是动态分配的内存，大小不定也不会自动释放
基本数据类型存放在栈中
引用类型 存放在堆内存中，首先从栈中获得该对象的地址指针，然后再从堆内存中取得所需的数据

### 如何判断当前脚本运行在浏览器还是 node 环境中？

通过判断 Global 对象是否为 window，如果不为 window，当前脚本没有运行在浏览器中

### 异步加载 js 脚本的方式

- defer,只支持 ie,延迟
- async
- 创建 script,插入到 dom 中，加载完毕后 callback

### 事件冒泡

### 事件委托

利用冒泡原理，把时间加到父级上，触发执行效果
可以大量节省内存占用，减少事件注册
可以方便地动态添加和修改元素，不需要因为元素的改动而修改时间绑定

事件委托利用事件冒泡,只指定一个事件处理程序，就可以管理某一类型的所有事件。使用事件委托可以节省内存。

```
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>

document.querySelector('ul').onclick=(event)=>{
  let target=event.target;
  if(target.nodeName==="Li"){
    console.log(target.innerHTML)
  }
}
```

### 事件循环

事件循环是一个单线程循环，用于监视调用堆栈并检查是否有工作即将在任务队列中完成。如果调用堆栈为空并且任务队列中有回调函数，则将回调函数出退出并推送到调用堆栈中执行。

### target 和 currentTarget 的区别

> 对多个元素做同一事件绑定

- event.target  
  返回触发事件的元素
- event.currentTarget
  返回绑定事件的元素

### prototype 和**proto**的关系

所有对象都有**proto**属性，它指向 Object.prototype。prototype 是原生 object 对象的属性。\_\_proto 是实例化后对象的属性.

```
let obj = {};
obj.__proto__ === Object.prototype
```

Object.prototype.**proto**指向 null

### 原型链

https://zhuanlan.zhihu.com/p/23090041

```
function foo(){};

foo.prototype.z = 3;

var obj = new foo();
obj.x = 1;
obj.y = 2;

obj.x //1
obj.y //2
obj.z //3
```

### 原型继承

所有的 JS 对象都有一个 prototype 属性，指向它的原型对象。当试图访问一个对象的属性时，如果没有在该对象上找到，它还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

### 继承

```
function SuperType(name) {
    this.name = name
    this.colors = ['red']
}

SuperType.prototype.sayName = function() {
    console.log(this.name)
}
// 继承实例属性
function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}

function inheritPrototype(subType, superType) {
    let prototype = Object.create(superType.prototype)
    prototype.constructor = subType
    subType.prototype = prototype
}
// 继承原型方法
inheritPrototype(SubType, SuperType)

// 定义自己的原型方法
SubType.prototype.sayAge = function() {
    console.log(this.age)
}
```

### 闭包

变量可以分为全局变量或者局部变量。闭包就是一个函数引用另一个函数的变量，因为变量被引用所以不会被回收，因此可以用来封装一个私有变量。
闭包就是子函数可以使用父函数的局部变量和参数，还有父函数的参数。
闭包就是在提供了一个在外部访问另一个函数内部局部变量的方式。

```
执行say667()后,say667()闭包内部变量会存在,而闭包内部函数的内部变量不会存在.使得Javascript的垃圾回收机制GC不会收回say667()所占用的资源，因为say667()的内部函数的执行需要依赖say667()中的变量。这是对闭包作用的非常直白的描述.

function say667() {
// Local variable that ends up within closure
var num = 666;
var sayAlert = function() { alert(num); }
num++;
return sayAlert;
}

var sayAlert = say667();
sayAlert()//执行结果应该弹出的667
```

作用域问题:js 函数的子函数可以直接读取父函数的变量，但是父函数不可以。闭包定义在一个函数的内部，这个函数可以读取父函数的变量。

- 用途:
  - 读取函数内部的变量
  - 让变量保存在内存中:将子函数设置为全局函数，那么父函数运行之后的结果，会被保存在内存中，不会被垃圾回收机制回收。
- 注意点:
  - 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
  - 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

### 深拷贝

对象自己有相应的内存地址，而不是与原来的对象共享内存地址。

```
let o1 = {a:{
    b:1
  }
}
let o2 = JSON.parse(JSON.stringify(o1))
```

缺点：JSON 不支持函数、引用、undefined、RegExp、Date……

另一种方法

```
function deepCopy(s) {
    const d = {}
    for (let k in s) {
        if (typeof s[k] == 'object') {
            d[k] = deepCopy(s[k])
        } else {
            d[k] = s[k]
        }
    }

    return d
}
```

3. 尾递归拷贝

```
 function clone(object){
	     var object2
	     if(! (object instanceof Object) ){
	         return object
	     }else if(object instanceof Array){
	         object2 = []
	     }else if(object instanceof Function){
	         object2 = eval(object.toString())
	     }else if(object instanceof Object){
	         object2 = {}
	     }
	     你也可以把 Array Function Object 都当做 Object 来看待，参考 https://juejin.im/post/587dab348d6d810058d87a0a
	     for(let key in object){
	         object2[key] = clone(object[key])
	     }
	     return object2
	 }
```

### 数组去重

1. 一维数组去重

```
function unique (arr) {
   return [...new Set(arr)]
}
```

```
 var a = [4,2,5,6,3,4,5]
 var hashTab = {}
 for(let i=0; i<a.length;i++){
     if(a[i] in hashTab){
         // 什么也不做
     }else{
         hashTab[ a[i] ] = true
     }
 }
 //hashTab: {4: true, 2: true, 5: true, 6:true, 3: true}
 console.log(Object.keys(hashTab)) // ['4','2','5','6','3']
```

2. 二维数组去重

```
返回一维数组:
[...new Set(student.map(({ sex }) => sex))];
返回二维数组:
getUniqueArray(array, item){
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      let flag = true;
      for (let j = 0; j < uniqueArray.length; j++) {
        if ((uniqueArray[j][item] === array[i][item])) {
          flag = false;
        }
      }
      if (flag) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
```

### 数据类型

- 基本数据类型：string number bool undefined null
- 引用数据类型：object
  另外，object 包括：数组、函数、正则、日期等对象。NaN 属于 number 类型。
  注意，数据类型里，没有数组。因为数组属于 object（一旦说数组、函数、正则、日期、NaN 是数据类型，直接 0 分）。

### 内置函数(原生函数)

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error
- Symbol

原始值 "I am a string" 并不是一个对象，它只是一个字面量，并且是一个不可变的值。 如果要在这个字面量上执行一些操作，比如获取长度、访问其中某个字符等，那需要将其 转换为 String 对象。 幸好，在必要时语言会自动把字符串字面量转换成一个 String 对象，也就是说你并不需要 显式创建一个对象。

### 图片懒加载

当页面滚动的时间被触发->执行加载图片操作->判断图片是否在可视区域内->在，则动态将 data-src 的值赋予该图片

###实现 add 函数,让 add(a)(b)和 add(a,b)两种调用结果相同
没有答案:参照函数柯里化

### 事件绑定的方式

- 嵌入 dom

```
<button onclick="func()">click</button>
```

- 直接绑定

```
let btn = document.getElementsByTagName('button')[0];
btn.onclick=()=>{};
```

- 事件监听

```
let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',()=>{})
```

### 判断数组的方法

```js
Array.isArray();
// 是否为数组
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
```

### 函数防抖和函数节流

函数防抖是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次
函数防抖的要点，也是要一个 setTImeout 来辅助实现。延迟执行需要跑的代码
如果方法多次触发，则要把上次记录的延迟执行代码用 clearTimeout 清掉，重新开始
如果计时完毕，没有方法进来访问触发，则执行代码

```
var time = false;
document.getElementById(‘debounce’,onScrll = function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
        console.log('111')
    }, 300);
}
```

### js 中万物皆对象你认为对吗?

我认为是对的 在 JS 中有原生函数、基本数据类型，它们的原型最终还是对象。

### 多个页面之间如何进行通信

- cookie
- web worker
- localeStorage 和 sessionStorage

### css 动画和 js 动画的差异

1. 代码复杂度，js 动画代码相对复杂一些
2. 动画运行时，对动画的控制程度上，js 能够让动画，暂停，取消，终止，css 动画不能添加事件
3. 动画性能看，js 动画多了一个 js 解析的过程，性能不如 css 动画好

### 使用 js 取出字符串空格

去除所有空格

```js
str.replace(/\s/g, '');
```

去除两边空格

1. js 方式

```
str.trim()
```

2. 正则方式

```
 function trim(string) {
        return string.replace(/^\s+|\s+$/g, '')
    }
```

3. es6 方法

```js
function trimStr(str) {
  let strArr = str.split(' ');
  return strArr.filter(a => a !== '').join('');
}
console.log(trimStr(' Hel  lo   world! '));
```

### new 一个对象经历了什么

```
function Test(){}
const test = new Test()
```

1. 创建一个新对象：

```
const obj = {}
```

2. 设置新对象的 constructor 属性为构造函数的名称，设置新对象的**proto**属性指向构造函数的 prototype 对象

```
obj.constructor = Test
obj.__proto__ = Test.prototype
```

3. 使用新对象调用函数，函数中的 this 被指向新实例对象

```
Test.call(obj)
```

4. 将初始化完毕的新对象地址，保存到等号左边的变量中。

### 如何实现文件断点续传

断点续传最核心的内容就是把文件“切片”然后再一片一片的传给服务器，但是这看似简单的上传过程却有着无数的坑。

首先是文件的识别，一个文件被分成了若干份之后如何告诉服务器你切了多少块，以及最终服务器应该如何把你上传上去的文件进行合并，这都是要考虑的。

因此在文件开始上传之前，我们和服务器要有一个“握手”的过程，告诉服务器文件信息，然后和服务器约定切片的大小，当和服务器达成共识之后就可以开始后续的文件传输了。

前台要把每一块的文件传给后台，成功之后前端和后端都要标识一下，以便后续的断点。

当文件传输中断之后用户再次选择文件就可以通过标识来判断文件是否已经上传了一部分，如果是的话，那么我们可以接着上次的进度继续传文件，以达到续传的功能。 有了 HTML5 的 File api 之后切割文件比想想的要简单的多的多。

只要用 slice 方法就可以了

```
var packet = file.slice(start, end);
```

参数 start 是开始切片的位置，end 是切片结束的位置 单位都是字节。通过控制 start 和 end 就可以是实现文件的分块

如

```
file.slice(0,1000);
file.slice(1000,2000);
file.slice(2000,3000);
// ......
```

在把文件切成片之后，接下来要做的事情就是把这些碎片传到服务器上。 如果中间掉线了，下次再传的时候就得先从服务器获取上一次上传文件的位置，然后以这个位置开始上传接下来的文件内容。

### bind、call、apply 的区别

call 和 apply 其实是一样的，区别就在于传参时参数是一个一个传或者是以一个数组的方式来传。
call 和 apply 都是在调用时生效，改变调用者的 this 指向。

```
let name = 'Jack'
const obj = {name: 'Tom'}
function sayHi() {console.log('Hi! ' + this.name)}

sayHi() // Hi! Jack
sayHi.call(obj) // Hi! Tom

```

bind 也是改变 this 指向，不过不是在调用时生效，而是返回一个新函数。

```
const newFunc = sayHi.bind(obj)
newFunc() // Hi! Tom
```

### 事件是？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？

我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。

事件处理机制：IE 是事件冒泡、火狐是 事件捕获；

event.stopPropagation()

### 请简述 JavaScript 中的 this

this 是 js 的一个关键字，随着函数使用场合不同，this 的值会发生变化。

但是有一个总原则，那就是 this 指的是调用函数的那个对象。

this 一般情况下：是全局对象 Global。 作为方法调用，那么 this 就是指这个对象

1.  fn() 里面的 this 就是 window

2.  fn() 是 strict mode，this 就是 undefined

3.  a.b.c.fn() 里面的 this 就是 a.b.c

4.  new F() 里面的 this 就是新生成的实例

5.  () => console.log(this) ，这个 this 指的是外面的 this。

JS 中的 this 是一个相对复杂的概念，不是简单几句能解释清楚的。粗略地讲，函数的调用方式决定了 this 的值。我阅读了网上很多关于 this 的文章，Arnav Aggrawal 写的比较清楚。this 取值符合以下规则：

1. 在调用函数时使用 new 关键字，函数内的 this 是一个全新的对象。
2. 如果 apply、call 或 bind 方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。
3. 当函数作为对象里的方法被调用时，函数内的 this 是调用该函数的对象。比如当 obj.method()被调用时，函数内的 this 将绑定到 obj 对象。
4. 如果调用函数不符合上述规则，那么 this 的值指向全局对象（global object）。浏览器环境下 this 的值指向 window 对象，但是在严格模式下('use strict')，this 的值为 undefined。
5. 如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定 this 的值。
6. 如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this 被设置为它被创建时的上下文。

### 题目:考察变量定义提升、this 指针指向、运算符优先级、原型、全局变量、变量污染、对象属性、原型属性优先

```js
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};    //Foo函数上存储的静态属性
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName(); 2 未实例化对象，所以调用的是静态方法
getName(); 4
Foo().getName(); 1
getName(); 1 上层的 Foo().getName 把 var getName 重写了。
new Foo.getName(); 2 getName属性，没有重新new对象
new Foo().getName(); 3 new 了一个 foo 对象，定义了一个 getName 方法。优先采用原型链方法
new new Foo().getName(); 3 new 了一个 foo 对象，定义了一个 getName 方法。优先采用原型链方法
```

- Foo.getName
  访问 Foo 函数上存储的静态属性，结果是 2。
  参考

```
function User(name) {
	var name = name; //私有属性
	this.name = name; //公有属性
	function getName() { //私有方法
		return name;
	}
}
User.prototype.getName = function() { //公有方法
	return this.name;
}
User.name = 'Wscats'; //静态属性
User.getName = function() { //静态方法
	return this.name;
}
var Wscat = new User('Wscats'); //实例化
```

注意:

- 调用公有方法，公有属性，我们必需先实例化对象，也就是用 new 操作符实化对象，就可构造函数实例化对象的方法和属性，并且公有方法是不能调用私有方法和静态方法的
- 静态方法和静态属性就是我们无需实例化就可以调用
- 而对象的私有方法和属性,外部是不可以访问的

* getName();
  结果是 5，优先访问 function getName()
* 变量提升，函数声明会被提升到作用域最前面
* 函数表达式创建的函数是在运行时赋值，最后等到表达式赋值完成后才能调用.

* Foo().getName();
  结果是 1,访问 Foo()函数的 getName()方法.注意此处的 Foo()函数的 getName 没有用 var 或者 Let 声明,所以,getName 变为了全局变量。这个时候,getName 将全局的 getName 变量重写。
  Foo 执行后把全局的 getName 函数重写了一遍.
  注意,Foo()函数中的 this 指向的是 window 对象，也就是说 Foo 函数，返回的是 windows 对象，相当于执行 window.getName();this 的指向由函数的调用方式决定。

* getName
  结果是 1,上层的 Foo().getName 把 var getName 重写了。
* new Foo.getName();
  结果是 2
  new Foo;
  Foo.getName();

* new Foo().getName();
  (new Foo()).getName();
  结果是 3
  new 了一个 foo 对象，定义了一个 getName 方法。优先采用原型链方法

* new new Foo().getName();
  结果是 3
  new ((new Foo()).getName)();

## es6 部分

### 实现 promise.finally

finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作，使用方法如下：

```js
Promise
    .then(result => { ··· })
    .catch(error => { ··· })
    .finally(() => { ··· })
```

finally 的特点：不接受任何的参数
finally 本质上是 then 方法的特性

```js
Promise.prototype.finally = function(callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};
```

### const 常量是否能修改

- 如果是值类型，值不可变
- 如果是引用类型，比如对象、数组等，地址不可变，属性值可以修改
- const 的原理是引用地址不变

### 介绍 promise

promise 是一个异步编程模型。有三种状态：pending(进行中)，resolved(已完成)和 rejected(失败)

有了 promise 对象，就可以将异步操作以同步操作的流程表示出来，避免了层层嵌套的回调函数

### let 和 const 的区别

- let 声明的变量可以改变，值和类型都可以改变，没有限制
- const 声明的变量不得改变值

### class

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes

### ES6 的新特性有哪些?

- 块级作用域：使用 let 和 const 代替 var,防止变量提升
- 函数扩展(扩展运算符、默认参数、箭头函数)
- 对象扩展
- 解构
- set 和 map
- 迭代器和生成器
- 类
- 异步 promise
- 模块化

### 箭头函数与匿名函数的区别

箭头函数的匿名函数的区别是，箭头函数内部的 this 是词法作用域，由上下文确定。  
普通 this 是动态作用域；箭头函数的 this 指向词法作用域

```
var obj1 = {
    birth: 1990,
    getAge: function (year) {
        let fn=function(y){
            return y - this.birth; // this指向window或undefined
        };
        return fn(year);
    }
};

var obj2 = {
    birth: 1990,
    getAge: function (year) {
        var fn = (y) => y - this.birth; // this.birth为1990
        return fn(year);
    }
};
```

## 介绍下 Set、Map 的区别？

应用场景 Set 用于数据重组，Map 用于数据储存

Set：

（1）成员不能重复
　　（2）只有键值没有键名，类似数组
　　（3）可以遍历，方法有 add, delete,has

Map:

（1）本质上是健值对的集合，类似集合
　　（2）可以遍历，可以跟各种数据格式转换

## setTimeout、Promise、Async/Await 的区别

事件循环中分为宏任务队列和微任务队列

其中 setTimeout 的回调函数放到宏任务队列里，等到执行栈清空以后执行

promise.then 里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行

async 函数表示函数里面可能会有异步方法，await 后面跟一个表达式

async 方法执行时，遇到 await 会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行

## 下面 Set 结构，打印出的 size 值是多少

```js
let s = new Set();
s.add([1]);
s.add([1]);
console.log(s.size);
```

两个数组[1]并不是同一个值，它们分别定义的数组，在内存中分别对应着不同的存储地址，因此并不是相同的值

都能存储到 Set 结构中，所以 size 为 2

## 设计一个对象，键名的类型至少包含一个 symbol 类型，并且实现遍历所有 key

```js
let name = Symbol('name');
let product = {
  [name]: '洗衣机',
  price: 799
};
Reflect.ownKeys(product);
```

### promise

#### promise 的使用

then：

```
	$.ajax(...).then(成功函数, 失败函数)
```

链式 then：

```
 	$.ajax(...).then(成功函数, 失败函数).then(成功函数2, 失败函数2)
```

如何自己生成 Promise 对象：

```

let promise = new Promise(function(resolved,reject){
    resolved();
});
//  已完成状态
promise.then(function(){
    console.log("Resolved");
});
//  拒绝状态:捕捉错误
promise.catch(function(err){
    console.log(error)
})
	function xxx(){
      return new Promise(function(resolve, reject){
          setTimeout(()=>{
              resolve() 或者 reject()
          },3000)
      })
  }
  xxx().then(...)
```

#### promise 的状态

#### Promise 中 reject 和 catch 处理上有什么区别

reject 是用来抛出异常，catch 是用来处理异常

reject 是 Promise 的方法，而 catch 是 Promise 实例的方法

reject 后的东西，一定会进入 then 中的第二个回调，如果 then 中没有写第二个回调，则进入 catch

网络异常（比如断网），会直接进入 catch 而不会进入 then 的第二个回调

#### setTimeout(0)和一个 promise 哪个先执行

任务队列可以有多个，promise 的任务队列，优先级更高

### asynv/await

目的：把异步代码写成同步代码的形式。

```
let promise = new Promise((resolve, reject) => {
        //进来之后，状态为pending
        console.log('111');  //这一行代码是同步的
        //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
        if (异步的ajax请求成功) {
            console.log('333');
            resolve();//如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fullfilled
        } else {
            reject();//如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected
        }
    })
    console.log('222');

    //调用promise的then()
    promise.then(() => {
            //如果promise的状态为fullfilled，则执行这里的代码
            console.log('成功了');
        }
        , () => {
            //如果promise的状态为rejected，则执行这里的代码
            console.log('失败了');

        }
    )
```

有了 await 之后，可以直接替换掉 then。如下：

```
 function returnPromise(){
     return new Promise( function(resolve, reject){
         setTimeout(()=>{
             resolve('success')
         },3000)
     })
 }

 returnPromise().then((result)=>{
     result === 'success'
 })

 var result = await returnPromise()
 result === 'success'
```

### 理解 async/await 以及对 Generator 的优势

async await 是用来解决异步的，async 函数是 Generator 函数的语法糖

使用关键字 async 来表示，在函数内部使用 await 来表示异步

async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数

当函数执行的时候，一旦遇到 await 就会先返回，等到异步操作完成，再接着执行函数体内后面的语句

async 较 Generator 的优势：

（1）内置执行器。Generator 函数的执行必须依靠执行器，而 Aysnc 函数自带执行器，调用方式跟普通函数的调用一样

（2）更好的语义。async 和 await 相较于 \* 和 yield 更加语义化

（3）更广的适用性。yield 命令后面只能是 Thunk 函数或 Promise 对象，async 函数的 await 后面可以是 Promise 也可以是原始类型的值

（4）返回值是 Promise。async 函数返回的是 Promise 对象，比 Generator 函数返回的 Iterator 对象方便，可以直接使用 then() 方法进行调用

### forEach、for in、for of 三者区别

forEach 更多的用来遍历数组

for in 一般常用来遍历对象或 json

for of 数组对象都可以遍历，遍历对象需要通过和 Object.keys()

for in 循环出的是 key，for of 循环出的是 value

### async 和 await

正常情况下，await 命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值（相当于直接 Promise.resolve）。

```js
//  例子1
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
```

```js
//例子2
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
function async2() {
  // 去掉了 async 关键字
  console.log('async2');
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
```

## axios 部分

### 如何解决地狱回调问题?

```javascript
//获得商品列表 实例化promise 并传入resolve 和 reject两个参数
  var getGoodsList = new Promise(function(resolve,reject){
      axios.get('/ggserver/api/products/list',{params})
        .then(function(res){
            if(res.data.code == '200'){
                resolve(res.data.result)      //成功
            }else{
                reject(res.data.errMsg)       //失败
            }
        })
  })
//我们在请求一个分类列表
var getGoodsType = new Promise(function(resolve,reject){
      axios.get('/ggserver/api/goodsType')
      .then(function(res){
           if(res.data.code == '200'){
                resolve(res.data.result)      //成功
            }else{
                reject(res.data.errMsg)       //失败
            }
      })
})
然后。在将获得的数据进行业务处理
getGoodsList.then(function(goodslistdata){
    //处理业务
}).catch(function(errMsg){
    //失败业务
    console.log('哎，goodslist运气不佳...')
})

getGoodsType.then(function(goodsTypedata){
    //处理业务
}).catch(function(errMsg){
    //失败业务
    console.log('哎，goodstyoe运气不佳...')
})

最后 我们通过promise.all()方法来 等列表 和 类型加载完 进行其他业务处理
Promise.all([getGoodsList, getGoodsType]).then(function([data1,data2]){
    console.log(data1,data2,'已经加载完成啦')
})
```

## ajax 部分

### 创建 ajax 的过程

1. 创建 XMLHttpRequest 对象，也就是创建一个异步调用对象
2. 创建一个新的 HTTP 请求，并指定改 HTTP 请求的方法、URL 以及验证信息
3. 设置响应 HTTP 状态变化的函数
4. 发送 HTTP 请求
5. 获取异步调用返回的数据
6. 使用 javascript 和 DOM 实现局部刷新
   代码实现:

```javascript
<script type="text/javascript">
    window.onload = function(){
        //第一步：创建xhr对象
        //xhr是一个对象；里面可以放很多东西，数据；
        var xhr = null;
        if(window.XMLHttpRequest){//标准浏览器
            xhr = new XMLHttpRequest();//创建一个对象
        }else{//早期的IE浏览器
            xhr = new ActiveXObject('Microsoft.XMLHTTP');//参数是规定的；
        }
        console.log("状态q"+xhr.readyState);//0
        //第二步：准备发送请求-配置发送请求的一些行为
        //open即打开链接，第一个参数是以什么方式；第二个是往哪儿发送请求，第三个可以不写，默认true,表示异步，false表示同步；；
        xhr.open('get','03form.php',true);
        console.log("状态w"+xhr.readyState);//1

        //第三步：执行发送的动作
        //send也可以写在前面，推荐写在后面；写null是兼容问题；
        xhr.send(null);
        console.log("状态e"+xhr.readyState);//1

        //第四步：指定一些回调函数，也属于事件函数；不触发不执行，触发条件是xhr.readyState;z这个值有0-4，共5个状态，是由浏览器控制的；
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){//4指服务器返回的数据可以使用；
                if(xhr.status == 200){ //判断已经成功的获取了数据；200表示hTTP请求成功；404表示找不到页面；503表示服务器端有语法错误；
                    var data = xhr.responseText;//json，文本，主角；
                    // var data1 = xhr.responseXML;
                }
            }
            // console.log("状态t"+xhr.readyState);//2表示已经发送完成；

            // console.log(1234);
        }

        // console.log(456);
        console.log("状态r"+xhr.readyState);//1


    }
    </script>
```

### ajax 的 readstate 有几种类型，分别代表的是什么意思?

- 0:代表未初始化,还没有调用 open 方法
- 1:代表正在加载，open 方法已被调用，但是 send 方法还没有被调用
- 2:代表已加载完毕，send 已被调用，请求以及开始
- 3:代表交互中，服务器正在发送响应
- 4:代表完成，响应发送完毕

### 如何解决一个接口的参数是另外几个接口查询结果的问题，即所谓的地狱回调?

使用`Promise.all([request1,request2])`

### 如何解决 ajax 无法后退的问题

- html5 里引入了新的 API，即：history.pushState,history.replaceState
- 可以通过 pushState 和 replaceSate 接口浏览器历史，并且改变当前页面的 URL
- onpopstate 监听后退

## 浏览器部分

### 浏览器渲染过程

> 四个步骤。打油诗曰:先是生成 DOM 树，再次生成规则树，二者合为渲染树，遍历计算树节点，绘制节点至屏幕。

- 解析 html 生成 DOM 树
- 解析 css 生成 cssDOM 规则树
- 将 html DOM 树和 cssDOM 规则树合并在一起，生成渲染树
- 遍历渲染树，开始布局，计算渲染书节点的大小和位置
- 将每个节点绘制到屏幕上

### 域名收敛

PC 时代为了突破浏览器的域名并发限制。有了域名发散。
浏览器有并发限制，是为了防止 DDOS 攻击。
域名收敛：就是将静态资源放在一个域名下。减少 DNS 解析的开销。
域名发散：是将静态资源放在多个子域名下，就可以多线程下载，提高并行度，使客户端加载静态资源更加迅速。
域名发散是 pc 端为了利用浏览器的多线程并行下载能力。而域名收敛多用与移动端，提高性能，因为 dns 解析是是从后向前迭代解析，如果域名过多性能会下降，增加 DNS 的解析开销。

#### 如何实现渐进式渲染

- 图片懒加载——页面上的图片不会一次性全部加载。当用户滚动页面到图片部分时，JavaScript 将加载并显示图像。
- 确定显示内容的优先级（分层次渲染）——为了尽快将页面呈现给用户，页面只包含基本的最少量的 CSS、脚本和内容，然后可以使用延迟加载脚本或监听`DOMContentLoaded`/`load`事件加载其他资源和内容。
- 异步加载 HTML 片段——当页面通过后台渲染时，把 HTML 拆分，通过异步请求，分块发送给浏览器。更多相关细节可以在[这里](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/)找到。

### cookie、localStorage、sessionStorage 的异同

#### 相同点

- 都是客户端存储机制
- 数据都是以键值对的形式存储在客户端
- 存储的数据都为字符串

#### 不同点

- 存储的大小:cookie 为 4kb,localStorage 和 sessionStorage 为 5M.
- 有效期:cookie 为手动设置的时间;localStorage 一直存在，直至浏览器清理掉缓存;sessionStorage 为页面关闭时
- 服务器是否可以直接访问和设置:cookie 可以，其余二者不可.
- 访问权限:cookie 和 localStorage 为域名下的任意窗口,sessionStorage 为当前页面
- 在浏览器会话的期间是否会更改:cookie 取决于是否设置过期时间,localStorage 不会更改,sessionStorage 则会更改。
  cookie 在浏览器和服务器间来回传递。 sessionStorage 和 localStorage 不会

#### 如何设置

- cookie:document.cookie="userId=828; userName=hulk";
- localStorage: localStorage.setItem("username","hulk");
- sessionStorage: sessionStorage.setItem("username","hulk");

### 兼容性问题

> 2 个方向:兼容性问题产生的原因、如何解决兼容性问题；解决问题又分为:要不要做，要做的话做到什么程序、怎么做。

#### 产生原因

- 无统一的浏览器:浏览器产商根据自己对浏览器的需求开发不同的浏览器、浏览器功能不一
- 浏览器版本:用户使用的浏览器版本不一:有的使用版本较新，有的使用版本较老。

#### 如何解决兼容性问题

##### 要不要做

- 产品的目标客户：大部分目标用户使用的浏览器版本、对产品本身的要求(是以功能为主，还是以呈现页面为主)
- 成本:投入产出比是否高，是否有盈利的空间

##### 做到什么程序

- 需要支持什么浏览器
- 浏览器要支持到哪个版本

##### 怎么做

- 根据兼容性要求选择相应的库，比如 bootstrap
- 使用兼容性工具，比如(html5shiv.js、respond.js、css reset、normalize.css、Modernizr)
- 条件注释、CSS Hack、js 能力检测做一些修补
- 渐进增强和优雅降级
  - 渐进增强:先针对低版本浏览器做开发，保证一些基本的需求，然后再对高浏览器进行交互、效果等功能的改进，以期达到提高用户体验的要求。
  - 优雅降低:按照版本高的浏览器进行完整功能的开发，再按照需要兼容的低版本浏览器，进行功能和效果的改进
- 使用 `autoprefixer` 自动生成 CSS 属性前缀。
- 使用 Reset CSS 或 Normalize.css。

### 同源策略

协议、域名、端口三者相同。 由于同源策略产生安全问题。

同源策略是浏览器的一个安全功能。URL 由协议、域名、端口和路径组成。比较两个 url,如果协议、域名或端口三者有一个不同，那就是不同源。浏览器采用同源策略，禁止页面加载或执行与自身来源不同的域的脚本。比如，如果客户端与服务器的域名不一，那么服务器将不允许客户端访问。不受同源策略影响的标签:script、img、iframe、link。

### 跨域

跨域是指从一个域的网页去请求另一个域。（域名）  
方法:
jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面

- jsonp，允许 script 加载第三方资源
- 反向代理(ngix 服务内部配置 Access-Control-Allow-Origin\*)
- cors 前后端协作设置请求头部,Access-Controll-Allow-Origin 等头部信息
- iframe 嵌套通讯,postmessage

#### cors 跨域

当你使用 XMLHttpRequest 发送请求时，浏览器发现该请求不符合同源策略，会给该请求加一个请求头：Origin，后台进行一系列处理，如果确定接受请求则在返回结果中加入一个响应头：Access-Control-Allow-Origin;浏览器判断该相应头中是否包含 Origin 的值，如果有则浏览器会处理响应，我们就可以拿到响应数据，如果不包含浏览器直接驳回，这时我们无法拿到响应数据。

#### jsop 与 cors 的区别

- JSONP 只能实现 GET 请求，而 CORS 支持所有类型的 HTTP 请求。
- JSONP 无法判断是否请求失败，

#### 什么是 jsonp

有一些标签不受同源策略影响，我们就把数据封装好，返回给这些标签。jsonp 指的是其中的一种非正式传输协议，它的要点是允许用户传递一个**callback**参数给服务端，然后服务端返回数据会将整个 callback 参数作为函数名来包裹住 json 数据。仅用于 get 请求

### 当你在浏览器输入一个地址会发生什么

https://github.com/skyline75489/what-happens-when-zh_CN/blob/master/README.rst?utm_medium=social&utm_source=wechat_session&from=timeline&isappinstalled=0
查找浏览器缓存
DNS 解析、查找该域名对应的 IP 地址、重定向（301）、发出第二个 GET 请求
进行 HTTP 协议会话
客户端发送报头(请求报头)
服务器回馈报头(响应报头)
html 文档开始下载
文档树建立，根据标记请求所需指定 MIME 类型的文件
文件显示
[
浏览器这边做的工作大致分为以下几步：

加载：根据请求的 URL 进行域名解析，向服务器发起请求，接收文件（HTML、JS、CSS、图象等）。

解析：对加载到的资源（HTML、JS、CSS 等）进行语法解析，建议相应的内部数据结构（比如 HTML 的 DOM 树，JS 的（对象）属性表，CSS 的样式规则等等）
}

### 分域名请求图片的原因和好处？

浏览器的并发请求数目限制是针对同一域名的，超过限制数目的请求会被阻塞
浏览器并发请求有个数限制，分域名可以同时并发请求大量图片

### 页面的加载顺序

html 顺序加载，其中 js 会阻塞后续 dom 和资源加载，css 不会阻塞 dom 和资源的加载
浏览器会使用 prefetch 对引用的资源提前下载
没有 defer 或 async，浏览器会立即加载并执行指定的脚本
有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（下载一部，执行同步，加载完就执行）
有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成

## http 部分

### 说说状态码的类别以及你常用的状态码?

> 借助状态码，我们可以知道服务端是是否正常处理了请求，还是出现了什么错误。

#### 状态码的类别

| 状态码 | 类别                             | 描述                   |
| ------ | -------------------------------- | ---------------------- |
| 1xx    | Informational（信息状态码）      | 接受请求正在处理       |
| 2xx    | Success（成功状态码）            | 请求正常处理完毕       |
| 3xx    | Redirection（重定向状态码）      | 需要附加操作已完成请求 |
| 4xx    | Client Error（客户端错误状态码） | 服务器无法处理请求     |
| 5xx    | Server Error（服务器错误状态码） | 服务器处理请求出错     |

#### 常用状态码

- 202：服务器已经接受请求，但尚未处理
- 204: 服务器成功处理了请求，但是没有返回任何内容
- 200: 请求已经处理
- 301: 永久重定向
- 302/307: 临时重定向
- 304: 资源已找到，但是未符合条件请求。
- 403：禁止访问
- 404：未找到页面
- 500: 服务器内部错误

### HTTP 和 HTTPS

HTTP 协议通常承载与 TCP 协议之上，在 HTTP 和 TCP 之间添加一个安全协议层（SSL 或 TSL），这个时候，就成了我们常说的 HTTPS
默认 HTTP 的端口号为 80，HTTPS 的端口号为 443

### 为什么 HTTPS 安全

因为网络请求需要中间有很多的服务器路由的转发，中间的节点都可能篡改信息，而如果使用 HTTPS，密钥在你和终点站才有，https 之所有说比 http 安全，是因为他利用 ssl/tls 协议传输。包含证书，流量转发，负载均衡，页面适配，浏览器适配，refer 传递等，保障了传输过程的安全性

### 关于 http 2.0

http/2 引入了“服务端推”的概念，它允许服务端在客户端需要数据之前就主动的将数据发送到客户端缓存中，从而提高性能
http/2 提供更多的加密支持
http/2 使用多路技术，允许多个消息在一个连接上同时交差
它增加了头压缩，因此即使非常小的请求，其请求和响应和 header 都只会占用小比例的带宽

### 分域名请求图片的原因和好处？

浏览器的并发请求数目限制是针对同一域名的，超过限制数目的请求会被阻塞
浏览器并发请求有个数限制，分域名可以同时并发请求大量图片

### 输入网站后到页面展现是过程？

通过 dns 解析获取 ip
通过 dns 解析获取 ip
tcp 链接
客户端发送 http 请求
tcp 传输报文
服务器处理请求返回 http 报文

### http 响应中 content-type 包含哪些内容？

请求中的消息主题是用何种方式解码
application/x-www-form-urlencoded
这是最常见的 post 提交数据的方式，按照 key1=val1&key2=val2 的方式进行编码
application/json
告诉服务器端消息主体是序列化后 json 字符串

### GET 和 POST 的区别

GET 和 POST 本质上就是 TCP 链接，并无差别。但是由于 HTTP 的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。

需要注意的是，web 中的 get/post 只是 http 中的 get/post 的子集。http 中的 get 与 post 只是单纯的名字上的区别，get 请求的数据也可以放在 request body 中，只是浏览器没有实现它，但是 get 并不只是在 web 中使用。

- GET 产生一个 TCP 数据包；POST 产生两个 TCP 数据包。
- GET 在浏览器回退时是无害的，而 POST 会再次提交请求。
- GET 产生的 URL 地址可以被 Bookmark，而 POST 不可以。
- GET 请求会被浏览器主动 cache，而 POST 不会，除非手动设置。
- GET 请求只能进行 url 编码，而 POST 支持多种编码方式。
- GET 请求参数会被完整保留在浏览器历史记录里，而 POST 中的参数不会被保留。
- GET 请求在 URL 中传送的参数是有长度限制的，而 POST 么有。
- 对参数的数据类型，GET 只接受 ASCII 字符，而 POST 没有限制。
- GET 比 POST 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息。
- GET 参数通过 URL 传递，POST 放在 Request body 中。
  缓存:get 请求能够被缓存，post 请求默认不会被缓存(缓存是针对 URL 的)
  安全性:包含在 URL 中明文显示，且服务器的日志会记录，非常不安全 。
  数据量：没有规定，但是受限于浏览器平台。通常，get 较小。

### Accept 和 Content-Type

Accept 请求头用来告知客户端可以处理的内容类型，这种内容类型用 MIME 类型来表示。
服务器使用 Content-Type 应答头通知客户端它的选择。

```
Accept: text/html
Accept: image/*
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

1.Accept 属于请求头， Content-Type 属于实体头。 <br>
Http 报头分为通用报头，请求报头，响应报头和实体报头。 <br>
请求方的 http 报头结构：通用报头|请求报头|实体报头 <br>
响应方的 http 报头结构：通用报头|响应报头|实体报头<br>

2.Accept 代表发送端（客户端）希望接受的数据类型。 <br>
比如：Accept：text/xml; <br>
代表客户端希望接受的数据类型是 xml 类型<br>

Content-Type 代表发送端（客户端|服务器）发送的实体数据的数据类型。 <br>
比如：Content-Type：text/html; <br>
代表发送端发送的数据格式是 html。<br>

二者合起来， <br>
Accept:text/xml； <br>
Content-Type:text/html <br>
即代表希望接受的数据类型是 xml 格式，本次请求发送的数据的数据格式是 html。<br>

### http 缓存

### 强制缓存和协商缓存的区别

强制缓存

```
Expires或Cache-Control
```

协商缓存

- 第一对：Last-Modified、If-Modified-Since

- 第二对：ETag、If-None-Match

### 如何处理不让别人盗用你的图片，访问你的服务器资源(盗链)

- http header, 对 refer 做判断看来源是不是自己的网站，如果不是就拒绝
- 通过 session 校验，如果不通过特定服务生成 cookie 和 session 就不能请求得到资源

### http 协议缓存机制

https://segmentfault.com/a/1190000010690320

### Http 与 Https 的区别

- HTTP 的 URL 以 http:// 开头，而 HTTPS 的 URL 以 https:// 开头
- HTTP 是不安全的，而 HTTPS 是安全的
- HTTP 标准端口是 80 ，而 HTTPS 的标准端口是 443
- 在 OSI 网络模型中，HTTP 工作于应用层，而 HTTPS 的安全传输机制工作在传输层
- HTTP 无法加密，而 HTTPS 对传输的数据进行加密
- HTTP 无需证书，而 HTTPS 需要 CA 机构 wosign 的颁发的 SSL 证书

### 什么是 Http 协议无状态协议?怎么解决 Http 协议无状态协议?

无状态协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息也就是说，<br>
当客户端一次 HTTP 请求完成以后，客户端再发送一次 HTTP 请求，HTTP 并不知道当前客户端是一个”老用户“。<br>

可以使用 Cookie 来解决无状态的问题，Cookie 就相当于一个通行证，第一次访问的时候给客户端发送一个 Cookie，<br>
当客户端再次来的时候，拿着 Cookie(通行证)，那么服务器就知道这个是”老用户“。<br>

### 网页从输入网站到渲染经历了哪些过程?

1. 输入网址
2. 发送到 dns 服务器，并获取域名对应的 web 服务器对应的 ip 地址
3. 与 web 服务器建立 TCP 连接
4. 浏览器向 web 服务器发送 http 请求
5. web 服务器响应请求，并返回指定 url 的数据
6. 浏览器下载 web 服务器返回的数据及解析 html 源文件
7. 生成 DOM 树，解析 css 和 js,渲染页面，直至显示完成

### 常用的 HTTP 方法有哪些

- GET：用于请求访问已经被 URL（统一资源标识符）识别的资源，可以通过 URL 传参给服务器。
- POST：用于传输信息给服务器，主要功能与 Get 方法类似，但一般推荐 POST 方式。
- PUT：传输文件，报文主体包含文件内容，保存到对应 URL 位置。
- HEAD：获取报文首部，与 GET 方法类似，只是不返回报文主体，一般用于验证 URL 是否有效。
- DELET：删除文件，与 PUT 方法相反，删除对应 URL 位置的文件。OPTIONS：查询相应 URL 支持的 HTTP 方法。

## vue 部分

### vue 的生命周期

[API 文档](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
创建一个 Vue 实例，是一个漫长的过程，要经历初始化，数据合并，模板解析，数据渲染等等一系列过程。
所以，为了能实现在这个过程里面插入自己想要提前做的事情，就有了生命周期钩子函数。
beforecreated: el 和 data 并未初始化
created： 完成了 data 数据的初始化，el 没有
beforeMount：完成了 el 和 data 初始化
mounted：完成挂载，updated,destroyed

1. 创建前/后： 在 beforeCreate 阶段，vue 实例的挂载元素 el 和数据对象 data 都为 undefined，还未初始化，created 阶段，vue 实例的数据对象 data 有了，el 还没有；
2. 载入前/后：在 beforeMount 阶段，vue 实例的\$el 和 data 都初始化了，但还是挂载之前为虚拟的 dom 节点，data.message 还未替换。在 mounted 阶段，vue 实例挂载完成，data.message 成功渲染。
3. 更新前/后：当 data 变化时，会触发 beforeUpdate 和 updated 方法。
4. 销毁前/后：在执行 destroy 方法后，对 data 的改变不会再触发周期函数，说明此时 vue 实例已经解除了事件监听以及和 dom 的绑定，但是 dom 结构依然存在

### create 和 mounted 的区别

- create 只完成了 data 的初始化，没有完成 el 的初始化。而 mounted 的时候二者皆完成。

### 父子组件通信

vue：父组件是通过 props 属性给子组件通信，在子组件里面 emit，在父组件监听

### 兄弟组件通信

vuex 建立一个 vue 的实例，emit 触发时间 on 监听时间

### vue 的项目构建

- 按模块
- 模块下按照 vue 的架构分类，如图片、样式表、功能代码分类
- 功能代码按照功能组件化编写。

### vue 的特点

- 数据驱动、组件化、响应式
- 优点:数据和视图之间是同步的，无需认为干涉，所以开发者只需要关注业务逻辑，不需要手动操作 dom,不需要关注数据状态的同步问题。节省了很多精力。

### 双向绑定的实现原理

- 通过 mvvm
- Object.defineProperty( )
- 虚拟 DOM

### 什么是 mvvm

MVVM 最早由微软提出来，它借鉴了桌面应用程序的 MVC 思想，在前端页面中，把 Model 用纯 JavaScript 对象表示，View 负责显示，两者做到了最大限度的分离
把 Model 和 View 关联起来的就是 ViewModel。<br>
ViewModel 负责把 Model 的数据同步到 View 显示出来，还负责把 View 的修改同步回 Model<br>
View 和 Model 之间的同步工作完全是自动的，无需人为干涉（由 viewModel 完成，在这里指 VUE）<br>
因此开发者只需关注业务逻辑，不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理<br>
mvc 的界面和逻辑关联紧密，数据直接从数据库读取，必须通过 controller 来承上启下，通信都是单向的
mvvm 的 view 和 viewModel 可以互相通信，界面数据从 viewmodel 中获取
Model 代表数据模型，数据和业务逻辑都在 Model 层中定义；
View 代表 UI 视图，负责数据的展示；
ViewModel 负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作；
Model 和 View 并无直接关联，而是通过 ViewModel 来进行联系的，Model 和 ViewModel 之间有着双向数据绑定的联系。因此当 Model 中的数据改变时会触发 View 层的刷新，View 中由于用户交互操作而改变的数据也会在 Model 中同步。
这种模式实现了 Model 和 View 的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作 dom。

### vuex 作用

[官方文档](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)

### 单向数据流

view--> action--> state
| |
------------------ |

### active-class 是哪个组件的属性，嵌套路由怎么定义

vue-router 模块的 router-link 组件

### 怎么定义 vue-router 下的路由，怎么获取传过来的动态参数

在 router 目录下的 index.js 文件中，对 path 属性加上/:id,使用 router 对象的 params 属性

### vue-router 有哪几种导航钩子?

三种

- 全局导航钩子:router.beforeEach(to, from, next)。作用:跳转前进行拦截
- 组件内钩子
- 单独路由独享钩子

### v-model 是什么?怎么使用?vue 中标签怎么绑定事件?

v-model 数据绑定指令。绑定 vue 中 model 层的 data 属性。
绑定事件 @click v-onclik

### axios 是什么，怎么使用？描述使用它实现登录功能的流程?

请求后台资源的模块。npm install axios -S 装好，然后发送的是跨域，需在配置文件中 config/index.js 进行设置。后台如果是 Tp5 则定义一个资源路由。js 中使用 import 进来，然后.get 或.post。返回在.then 函数中如果成功，失败则是在.catch 函数中

### 什么是 restfulAPI?怎么使用?

一个 api 访问的格式和标准。无状态请求。
对象/行为 book/delete book/add book/
使用合适的访问方式：post/get/put/delete

### vuex 是什么？怎么使用？在哪种功能场景使用？

vue 框架中的集中状态管理。中心仓库，共享数据。
在 main.js 中引入 store,注入。新建一个目录 store, ...export。
场景有:单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车。
缺点：页面刷新或者关闭浏览器再次打开时数据将会归零。
方法:localStorage 或者其他持久化存储(indexDB/proxy)
[proxy](https://www.cnblogs.com/cloud-/p/7103054.html)

### mvvm 框架是什么？与其他框架(jquery)有什么区别?

答:一个 model+view+viewModel 框架。数据模型 model,view 视图。viewModel 充当桥梁作用。传递数据。
区别:vue 是使用数据驱动的，通过数据来显示视图而不是 dom 操作。
场景:数据操作比较多的场景，更加便捷。

### 自定义指令的方法有哪些？它有哪些钩子函数和参数?

全局定义指令: 在 vue 对象的 directive 方法有两个参数,一个是指令名称，另外一个是函数。组件内定义指令:directives;
钩子函数:bind(绑定事件触发)、inserted(节点插入时触发)、update(组件内相关更新)
钩子函数参数:el、binding
创建局部指令

```js
var app = new Vue({
  el: '#app',
  data: {},
  // 创建指令(可以多个)
  directives: {
    // 指令名称
    dir1: {
      inserted(el) {
        // 指令中第一个参数是当前使用指令的DOM
        console.log(el);
        console.log(arguments);
        // 对DOM进行操作
        el.style.width = '200px';
        el.style.height = '200px';
        el.style.background = '#000';
      }
    }
  }
});
```

全局指令

```
Vue.directive('dir2', {
    inserted(el) {
        console.log(el);
    }
})
```

### 自定义过滤器

```js
<div id="app">
     <input type="text" v-model="msg" />
     {{msg| capitalize }}
</div>
var vm=new Vue({
    el:"#app",
    data:{
        msg:''
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```

### 让 css 只在当前组件起作用

在 style 标签中写入 scoped 即可

### $route和$router 的区别

$route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。而$router 是“路由实例”对象包括了路由的跳转方法，钩子函数等。

### vue 的两个核心

数据驱动、组件系统

### vue 常用的修饰符

.prevent: 提交事件不再重载页面；
.stop: 阻止单击事件冒泡；
.self: 当事件发生在该元素本身而不是子元素的时候会触发；.capture: 事件侦听，事件发生的时候会调用

### vue 的计算属性

在模板中放入太多的逻辑会让模板过重且难以维护，在需要对数据进行复杂处理，且可能多次使用的情况下，尽量采取计算属性的方式。好处：① 使得数据处理结构清晰；② 依赖于数据，数据更新，处理结果自动更新；③ 计算属性内部 this 指向 vm 实例；④ 在 template 调用时，直接写计算属性名即可；⑤ 常用的是 getter 方法，获取数据，也可以使用 set 方法改变数据；⑥ 相较于 methods，不管依赖的数据变不变，methods 都会重新计算，但是依赖数据不变的时候 computed 从缓存中获取，不会重新计算。

### hash 模式和 history 模式

hash 模式
hash 出现在 URL 中，但不会被包含在 http 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
特点：hash 虽然在 URL 中，但不被包括在 HTTP 请求中；用来指导浏览器动作，hash 不会重加载页面。
history 模式
history 利用了 html5 history interface 中新增的 pushState() 和 replaceState() 方法。这两个方法应用于浏览器记录栈，在当前已有的 back、forward、go 基础之上，它们提供了对历史记录修改的功能。只是当它们执行修改时，虽然改变了当前的 URL ，但浏览器不会立即向后端发送请求。



### vue 单页面应用优缺点

- 优点:Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。
- 缺点:不支持低版本的浏览器，最低只支持到 IE9；不利于 SEO 的优化（如果要支持 SEO，建议通过服务端来进行渲染组件）；第一次加载首页耗时相对长一些；不可以使用浏览器的导航按钮需要自行实现前进、后退。

### vue 中的\$nextTick

数据更新了，dom 没有变化

### for 中 key 的作用

当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key 的作用主要是为了高效的更新虚拟 DOM。

### keep-alive

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

### v-show 和 v-if 的区别

v-show 仅仅控制元素的显示方式，将 display 属性在 block 和 none 来回切换；而 v-if 会控制这个 DOM 节点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用 v-show 会更加节省性能上的开销；当只需要一次显示或隐藏时，使用 v-if 更加合理。

### 说出 4 中 vue 的指令和它的用法?

v-if:v-show 显示隐藏
v-for:循环
v-bind:绑定属性
v-model:双向数据绑定

### vue-router 是什么?有哪些组件、

vue 的路由插件。router-link、router-view

### 导航钩子有哪些？参数有哪些?

导航钩子有：a/全局钩子和组件内独享的钩子。b/beforeRouteEnter、afterEnter、beforeRouterUpdate、beforeRouteLeave

参数：有 to（去的那个路由）、from（离开的路由）、next（一定要用这个函数才能去到下一个路由，如果不用就拦截）最常用就这几种.

### vue 的双向数据绑定原理?(vue data 是怎么实现的?)

Object.defineProperty 通过 getter 和 setter 劫持了对象赋值的过程，在这个过程中可以进行更新 dom 操作等等。

在数据渲染时使用 prop 渲染数据，将 prop 绑定到子组件自身的数据上，修改数据时更新自身数据来替代 prop，watch 子组件自身数据的改变，触发事件通知父组件更改绑定到 prop 的数据。

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter
这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
1、在自身实例化时往属性订阅器(dep)里面添加自己
2、自身必须有一个 update()方法
3、待属性变动 dep.notice()通知时，能调用自身的 update()方法，并触发 Compile 中绑定的回调，则功成身退。

第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。

### 封装 vue 组件的过程

然后，使用 Vue.extend 方法创建一个组件，然后使用 Vue.component 方法注册组件。子组件需要数据，可以在 props 中接受定义。而子组件修改好数据后，想把数据传递给父组件。可以采 im 用 emit 方法。
写好一个组件之后，在需要使用组件的地方 import,在 componet 属性注册，在 template 需要使用的地方调用。子组件通过 props 接受父组件数据，通过 emit 发送数据

### vue.js 中 template 编译的理解?

先转化成 AST 树，再得到的 render 函数返回 VNode（Vue 的虚拟 DOM 节点）
首先，通过 compile 编译器把 template 编译成 AST 语法树（abstract syntax tree 即 源代码的抽象语法结构的树状表现形式），compile 是 createCompiler 的返回值，createCompiler 是用以创建编译器的。另外 compile 还负责合并 option。

然后，AST 会经过 generate（将 AST 语法树转化成 render funtion 字符串的过程）得到 render 函数，render 的返回值是 VNode，VNode 是 Vue 的虚拟 DOM 节点，里面有（标签名、子节点、文本等等）

### vue 响应式原理

当一个 Vue 实例创建时，vue 会遍历 data 选项的属性，用 Object.defineProperty 将它们转为 getter/setter 并且在内部追踪相关依赖，在属性被访问和修改时通知变化。
每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

vue 的响应式原理是使用 Object.defineProperty 追踪依赖，当属性被访问或改变时通知变化。
有两个不足之处：

不能检测到增加或删除的属性。
数组方面的变动，如根据索引改变元素，以及直接改变数组长度时的变化，不能被检测到。
原因差不多，无非就是没有被 getter/setter 。
第一个比较容易理解，为什么数组长度不能被 getter/setter ？
在知乎上找了一个答案：如果你知道数组的长度，理论上是可以预先给所有的索引设置 getter/setter 的。但是一来很多场景下你不知道数组的长度，二来，如果是很大的数组，预先加 getter/setter 性能负担较大。

现在有一个替代的方案 Proxy，但这东西兼容性不好，迟早要上的。

Proxy，在目标对象之前架设一层拦截。具体，可以参考 「 ECMAScript 6 入门 」
Object.defineProperty(obj,prop, descriptor),该方法接收 3 个参数
obj：
要在其上定义属性的对象。
prop：
要定义或修改的属性的名称。
descriptor：
给对象的属性添加特性描述，目前提供两种形式：数据描述和存取器描述。
返回值：

```js
<body>
    <div id="app">
    <input type="text" id="txt">
    <p id="show"></p>
</div>
</body>
<script type="text/javascript">
    var obj = {}
    Object.defineProperty(obj, 'txt', {
        get: function () {
            return obj
        },
        set: function (newValue) {
            document.getElementById('txt').value = newValue
            document.getElementById('show').innerHTML = newValue
        }
    })
    document.addEventListener('keyup', function (e) {
        obj.txt = e.target.value
    })
</script>
```

### vue 生命周期的作用是什么?

它的生命周期有多个事件钩子，让我们在控制整个 vue 实例的过程中更容易。

### 第一次页面加载会触发哪几个钩子?

beforeCreate、created、beforeMount,mounted

### DOM 渲染在哪个周期就已经完成?

DOM 渲染在 mounted 中已经完成了。

### 嵌套路由何时使用

菜单不止一级的时候

### vue 中如何监听某个属性值的变化?

比如现在需要监控 data 中，obj.a 的变化。Vue 中监控对象属性的变化你可以这样：

```js
// 方法一
watch: {
      obj: {
      handler (newValue, oldValue) {
        console.log('obj changed')
      },
      deep: true
    }
  }

// 方法二

watch: {
   'obj.a': {
      handler (newName, oldName) {
        console.log('obj.a changed')
      }
   }
  }

// 方法三
computed: {
    a1 () {
      return this.obj.a
    }
}
```

### delete 和 Vue.delete 删除数组的区别

delete 只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。
Vue.delete 直接删除了数组 改变了数组的键值。

```js
var a = [1, 2, 3, 4];
var b = [1, 2, 3, 4];
delete a[1];
console.log(a);
this.$delete(b, 1);
console.log(b);
```

### 如何解决单页面(SPA)应用首屏加载速度慢的问题?

```js
将公用的JS库通过script标签外部引入，减小app.bundel的大小，让浏览器并行下载资源文件，提高下载速度；
在配置 路由时，页面和组件使用懒加载的方式引入，进一步缩小 app.bundel 的体积，在调用某个组件时再加载对应的js文件；
加一个首屏 loading 图，提升用户体验；
```

### 解决对象数据更新视图没有刷新的问题

\$set()方法相当于手动的去把 obj.b 处理成一个响应式的属性，此时视图也会跟着改变了

```js
addObjB () {
      // this.obj.b = 'obj.b'
      this.$set(this.obj, 'b', 'obj.b')
      console.log(this.obj)
    }
```

### vue 组件 data 为什么必须是函数?

封装作用域,避免变量互相污染
每个组件都是 Vue 的实例。
组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变其中一个会影响其他。

### vue computed 实现

建立与其他属性（如：data、 Store）的联系；
属性改变后，通知计算属性重新计算。
初始化 data， 使用 Object.defineProperty 把这些属性全部转为 getter/setter。
初始化 computed, 遍历 computed 里的每个属性，每个 computed 属性都是一个 watch 实例。每个属性提供的函数作为属性的 getter，使用 Object.defineProperty 转化。
Object.defineProperty getter 依赖收集。用于依赖发生变化时，触发属性重新计算。
若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进行其他的依赖收集。
[vue computed 的实现](https://segmentfault.com/a/1190000010408657)

### diff 算法的实现

diff 的实现主要通过两个方法，patchVnode 与 updateChildren 。

patchVnode 有两个参数，分别是老节点 oldVnode, 新节点 vnode 。主要分五种情况：

if (oldVnode === vnode)，他们的引用一致，可以认为没有变化。
if(oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text)，文本节点的比较，需要修改，则会调用 Node.textContent = vnode.text。
if( oldCh && ch && oldCh !== ch ), 两个节点都有子节点，而且它们不一样，这样我们会调用 updateChildren 函数比较子节点，这是 diff 的核心，后边会讲到。
if (ch)，只有新的节点有子节点，调用 createEle(vnode)，vnode.el 已经引用了老的 dom 节点，createEle 函数会在老 dom 节点上添加子节点。
if (oldCh)，新节点没有子节点，老节点有子节点，直接删除老节点。
updateChildren 是关键，这个过程可以概括如下：

jkchao.cn

oldCh 和 newCh 各有两个头尾的变量 StartIdx 和 EndIdx ，它们的 2 个变量相互比较，一共有 4 种比较方式。如果 4 种比较都没匹配，如果设置了 key，就会用 key 进行比较，在比较的过程中，变量会往中间靠，一旦 StartIdx > EndIdx 表明 oldCh 和 newCh 至少有一个已经遍历完了，就会结束比较。

### vue 的脚手架配置

### vue 如何在数据变动后引起视图层变动再通过 dom 获取变动后的数据

### vue 引用类型变量如何触发 view 层变动

### vue 父子组件的通信

### vue 中的数据监听变动是通过什么实现的?

### Vue complier 实现

模板解析这种事，本质是将数据转化为一段 html ，最开始出现在后端，经过各种处理吐给前端。随着各种 mv\* 的兴起，模板解析交由前端处理。
总的来说，Vue complier 是将 template 转化成一个 render 字符串。
可以简单理解成以下步骤：

parse 过程，将 template 利用正则转化成 AST 抽象语法树。
optimize 过程，标记静态节点，后 diff 过程跳过静态节点，提升性能。
generate 过程，生成 render 字符串。

### vue-router 实现原理?

### vue 与其他框架对比的优势和劣势?

### vue 如何实现父子组件通信以及非父子组件通信?

1. 父组件传给子组件:通过 props 的方式接收数据
2. 子组件传给父组件:\$emit 方式传递参数
   非父子组件间的数据传递，兄弟组件传值
   eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，用这个比较合适。（虽然也有不少人推荐直接用 VUEX，具体来说看需求咯。技术只是手段，目的达到才是王道。）

### vuex 是做什么?

只用来读取的状态集中放在 store 中； 改变状态的方式是提交 mutations，这是个同步的事物； 异步逻辑应该封装在 action 中。
在 main.js 引入 store，注入。新建了一个目录 store，….. export 。
场景有：单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车
state
Vuex 使用单一状态树,即每个应用将仅仅包含一个 store 实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。
mutations
mutations 定义的方法动态修改 Vuex 的 store 中的状态或数据。
getters
类似 vue 的计算属性，主要用来过滤一些数据。
action
actions 可以理解为通过将 mutations 里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据。view 层通过 store.dispath 来分发 action。

```js
const store = new Vuex.Store({
  //store实例
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    }
  }
});
```

modules
项目特别复杂的时候，可以让每一个模块拥有自己的 state、mutation、action、getters,使得结构非常清晰，方便管理。

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
 }
const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
 }

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
})
```

### vue 的源码结构?

### 怎么认识 vuex

vuex 是一种开发模式或框架，可以通过状态(数据源)集中管理驱动组件的变化。

应用级的状态放在 store 中；改变状态的方式 mutations,这个是同步的事物。异步逻辑应该写在 action 中。

### vue-loader 是什么？它的用途是设呢么?

vue 文件的一个加载器，跟 template/js/style 转换为 js 模块
用途:js 可以写成 es6,style 样式可以跟 scss 或 less、template 可以加 jade

### vue.cli 项目中 src 目录中的每个文件夹和文件的用法

- asserts 放静态资源
- componets 组件
- router 定义理由
- view 视图
- app.vue 应用主组件
- main.js 入口文件

### vue 与 react 和 angular.js 的区别

版本在不断更新，以下的区别有可能不是很正确。我工作中只用到 vue，对 angular 和 react 不怎么熟） 1.与 AngularJS 的区别
相同点：
都支持指令：内置指令和自定义指令；都支持过滤器：内置过滤器和自定义过滤器；都支持双向数据绑定；都不支持低端浏览器。

不同点：
AngularJS 的学习成本高，比如增加了 Dependency Injection 特性，而 Vue.js 本身提供的 API 都比较简单、直观；在性能上，AngularJS 依赖对数据做脏检查，所以 Watcher 越多越慢；Vue.js 使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。

2.与 React 的区别
相同点：
React 采用特殊的 JSX 语法，Vue.js 在组件开发中也推崇编写.vue 特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用；中心思想相同：一切都是组件，组件实例之间可以嵌套；都提供合理的钩子函数，可以让开发者定制化地去处理需求；都不内置列数 AJAX，Route 等功能到核心包，而是以插件的方式加载；在组件开发中都支持 mixins 的特性。
不同点：
React 采用的 Virtual DOM 会对渲染出来的结果做脏检查；Vue.js 在模板中提供了指令，过滤器等，可以非常方便，快捷地操作 Virtual DOM。

## webpack 部分

## 计算机网络原理部分

### tcp/ip 三次握手过程

### tcp/ip 模型和 osi 模型

- tcp/ip 模型：从下往上分别是链路层，网络层，传输层，应用层
- osi 模型：从下往上分别是物理层，链路层，网络层，传输层，会话层，表示层，应用层

### TCP 和 UDP 的区别？

TCP 是基于连接的协议，也就是说，在正式收发数据前，必须和对方简历可靠的连接。一个 TCP 连接必须要经过三次“对话”才能建立起来
UDP 是与 TCP 相应的协议。他是面向非连接的协议，他不与对方建立连接，而是直接就把数据包发送过去了
UDP 适用于一次只传送少量数据，对可靠性要求不高的应用环境

## 算法与数据结构部分

### 二分查找

### 快速排序

```js
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr.splice(Math.floor(arr.length / 2), 1); // 选择一个基准
  const less = []; // 更小的数
  const greater = []; // 更大的数
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= privot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(greater)); // 继续调用
}
```

### 线性顺序存储结构和链式存储结构

### 快速定位哪个组件出现了性能问题

google 控制台的 timeline 工具，查看调用时长

## 其他

### cdn

#### cdn 的思路

其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。

### 前端性能优化

- 减少 HTTP 请求
- 减少 DOM 操作
- 避免不必要的重绘与重排
- 优化 CSS 选择器（从右向左匹配）
- CSS/JS minify，减少文件体积
- 开启 Gzip 压缩
- 将 CSS 放到顶部，JavaScript 放到尾部
- 压缩图片以及使用 CSS Sprite
- 使用 CDN 加速，适当进行文件缓存
- 合理控制 cookie 大小（每次请求都会包含 cookie）

### gzip 压缩

### websocket

由于 http 存在一个明显的弊端（消息只能有客户端推送到服务器端，而服务器端不能主动推送到客户端），导致如果服务器如果有连续的变化，这时只能使用轮询，而轮询效率过低，并不适合。于是 WebSocket 被发明出来。
相比与 http 具有以下有点：

支持双向通信，实时性更强；
可以发送文本，也可以二进制文件；
协议标识符是 ws，加密后是 wss ；
较少的控制开销。连接创建后，ws 客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有 2~10 字节（取决于数据包长度），客户端到服务端的的话，需要加上额外的 4 字节的掩码。而 HTTP 协议每次通信都需要携带完整的头部；
支持扩展。ws 协议定义了扩展，用户可以扩展协议，或者实现自定义的子协议。（比如支持自定义压缩算法等）
无跨域问题。
实现比较简单，服务端库如 socket.io、ws ，可以很好的帮助我们入门。而客户端也只需要参照 api 实现即可。

[缓存算法](http://www.cnblogs.com/dolphin0520/p/3749259.html)
