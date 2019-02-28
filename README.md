# interview-prep
## html部分
### 浏览器渲染过程
> 四个步骤。打油诗曰:先是生成DOM树，再次生成规则树，二者合为渲染树，遍历计算树节点，绘制节点至屏幕。
- 解析html生成DOM树
- 解析css生成cssDOM规则树
- 将html DOM树和cssDOM规则树合并在一起，生成渲染树
- 遍历渲染树，开始布局，计算渲染书节点的大小和位置
- 将每个节点绘制到屏幕上

----------

### 语义化
> 3个方向:何为语义化，如何语义化，语义化的好处
#### 什么是语义化
使用带有清晰含义、符合内容的标签去展示内容。
#### 如何实现语义化
页头页脚分别用header、footer，导航区用nav标签，段落用p，边栏用aside,主要内容要main标签

#### 语义化的好处
- 易于用户阅读，即使样式丢失，也能较好的展示页面
- 便于屏幕阅读器等辅助工具，帮助阅读障碍人群阅读
- 程序较为请求，有利于后期网站的维护
- 便于seo和搜索引擎根据标签确定关键字的权重

----------

### img中title和alt的区别
- title:鼠标移上去显示的文字，也可用于其他标签
- alt 图片丢失时显示的文字

----------

### src和href的区别
- src用于引进图片、外部js脚本等资源。浏览器解析时，遇到src标签将会暂停其他资源的下载和处理，一直到资源加载、编译、执行完毕。
- href用于外部链接、外部css样式文件等资源。浏览器对外部css文件解析时，会并行下载其他资源。

----------

### reflow和repaint
> 3个方向:是什么、怎么引起的、怎样降低影响
#### reflow和repanit是什么
- reflow
	当DOM节点的布局属性(位置和大小)发生变化时，浏览器会重新描绘该属性，这就叫做重排(reflow)。
- repaint
	当DOM节点的可见性属性发生改变时，浏览器会重新绘制该节点，这就叫做重绘(repaint)。
PS:重排必然会引起重绘。
#### 什么操作会引起reflow和repaint？
- 调整浏览器窗口的大小
- 进行删减、添加元素的DOM操作
- 字体大小和样式的改变
- 元素内容发生改变，尤其是输入控件
- hover等动作产生的用户交互行为
- width、clientWidth、scrollTop等计算行为
#### 如何降低reflow和repaint对性能的影响
- 使用class统一改变样式，避免逐条改变样式。
- 避免clientWidth和scrollTop的频繁操作。
- 对需要的元素使用绝对定位脱离文档流，避免父元素和后续元素的大量回流。
- 避免频繁的DOM操作。

----------

### viewport属性
```
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

```
* width	设置layout viewport 的宽度，为一个正整数，或字符串"width-device"
* initial-scale	设置页面的初始缩放值，为一个数字，可以带小数
* minimum-scale	允许用户的最小缩放值，为一个数字，可以带小数
* maximum-scale	允许用户的最大缩放值，为一个数字，可以带小数
* height	设置layout viewport 的高度，这个属性对我们并不重要，很少使用
* user-scalable	是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了。       
控制页面在移动端不要缩小显示。
----------

### canvas元素
https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API

### 渐进式渲染
> 2个方向:什么是渐进式渲染,如何实现渐进式渲染
#### 什么是渐进式渲染
渐进式渲染(progressive rendering)是用于提高网页性能（尤其是提高用户感知的加载速度），以尽快呈现页面的技术。
#### 如何实现渐进式渲染
* 图片懒加载——页面上的图片不会一次性全部加载。当用户滚动页面到图片部分时，JavaScript 将加载并显示图像。
* 确定显示内容的优先级（分层次渲染）——为了尽快将页面呈现给用户，页面只包含基本的最少量的 CSS、脚本和内容，然后可以使用延迟加载脚本或监听`DOMContentLoaded`/`load`事件加载其他资源和内容。
* 异步加载 HTML 片段——当页面通过后台渲染时，把 HTML 拆分，通过异步请求，分块发送给浏览器。更多相关细节可以在[这里](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/)找到。


----------

### link和script在浏览器中的位置
link放在文档开头的head标签中，script防止在body标签结束时。原因，css文件是对页面样式的描述，先加载css，可以给用户呈现一个体验感更高的网页。script文件大多数时候是一些用户和网站之间的交互函数，script加载时，会阻塞浏览器加载其他的网页资源，这样，可能会产生一个空白的页面给用户。script中如果要进行dom操作，也要依赖于body中的html代码。所以，先加载css资源，最后再加载script资源。


----------

### cookie、localStorage、sessionStorage的异同
#### 相同点
- 都是客户端存储机制
- 数据都是以键值对的形式存储在客户端
- 存储的数据都为字符串
#### 不同点
- 存储的大小:cookie为4kb,localStorage和sessionStorage为5M.
- 有效期:cookie为手动设置的时间;localStorage一直存在，直至浏览器清理掉缓存;sessionStorage为页面关闭时
- 服务器是否可以直接访问和设置:cookie可以，其余二者不可.
- 访问权限:cookie和localStorage为域名下的任意窗口,sessionStorage为当前页面
- 在浏览器会话的期间是否会更改:cookie取决于是否设置过期时间,localStorage不会更改,sessionStorage则会更改。
#### 如何设置
- cookie:document.cookie="userId=828; userName=hulk";
- localStorage: localStorage.setItem("username","hulk");
- sessionStorage: sessionStorage.setItem("username","hulk");


----------

### doctype的作用
- 声明文档:声明html页面是用哪个版本的html进行编写的
- 告知解析器采用什么DTD(文档类型定义)来解析html文档
（1）、<!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

（2）、标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

----------
### 兼容性问题
> 2个方向:兼容性问题产生的原因、如何解决兼容性问题；解决问题又分为:要不要做，要做的话做到什么程序、怎么做。
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
- 根据兼容性要求选择相应的库
- 使用兼容性工具，比如(html5shiv.js、respond.js、css reset、normalize.css、Modernizr)
- 条件注释、CSS Hack、js 能力检测做一些修补
- 渐进增强和优雅降级
	- 渐进增强:先针对低版本浏览器做开发，保证一些基本的需求，然后再对高浏览器进行交互、效果等功能的改进，以期达到提高用户体验的要求。
	- 优雅降低:按照版本高的浏览器进行完整功能的开发，再按照需要兼容的低版本浏览器，进行功能和效果的改进


## css部分
###  如何居中显示 重点 一个未知宽高的元素如何居中显示
- 行内元素(文字、图片等):`tex-align:center`
- 块级元素：`margin:auto`或`margin:0 auto`
https://github.com/yanhaijing/vertical-center
1. position定位
```
/*（不定宽高）*/
{
    position: absolute;;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/*固定宽高*/
{
    position: absolute;;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

```
2. flex布局
```
{
    display: flex;
    justify-content: center;
    align-items: center;
}
```
3. display:table
```
/*(子元素会占满整个父级)*/
.parent{
    width:100%;
    display:table
}
.child{
    display:table-cell;
    text-align:center;
    vertical-align:center
}
```
### 多列等高布局
1. padding/margin抵消
```
父级：overflow:hidden;

子级：{
padding-bottom:99999px;
margin-bottom:-99999px;
}
```
2. flex布局
```
父级：display:flex;

子级：默认与父级等高
```
3. table布局
父级： `display:table;`

子级：`display:table-cell;`
4. postion布局
```
父级：position:relative;

子级：position:absolute;top:0;bottom:0;
```
### css盒模型
https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
IE怪异盒模型
标注浏览器盒模型，两种盒模型的变换.

### 弹性flex布局
### box-sizing的应用场景
### BFC
overflow:hidden ：取消父子 margin 合并。 （另一种推荐做法：padding-top: 0.1px;）

### 如何清除浮动
（1）overflow: hidden

（2）.clearfix 清除浮动写在爸爸身上

    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }

    /* 兼容 IE */
    .clearfix {
        zoom: 1;
    }
### CSS 选择器的优先级是如何计算的？
important > 内联 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符

- 选择器越具体，优先级越高，比如#xxx大于.yyy
- 同样的优先级，写在后面的覆盖前面的。
- color:red !important; 优先级最高

浏览器通过优先级规则，判断元素展示哪些样式。优先级通过 4 个维度指标确定，我们假定以`a、b、c、d`命名，分别代表以下含义：

1. `a`表示是否使用内联样式（inline style）。如果使用，`a`为 1，否则为 0。
2. `b`表示 ID 选择器的数量。
3. `c`表示类选择器、属性选择器和伪类选择器数量之和。
4. `d`表示标签（类型）选择器和伪元素选择器之和。

优先级的结果并非通过以上四个值生成一个得分，而是每个值分开比较。`a、b、c、d`权重从左到右，依次减小。判断优先级时，从左到右，一一比较，直到比较出最大值，即可停止。所以，如果`b`的值不同，那么`c`和`d`不管多大，都不会对结果产生影响。比如`0，1，0，0`的优先级高于`0，0，10，10`。

当出现优先级相等的情况时，最晚出现的样式规则会被采纳。如果你在样式表里写了相同的规则（无论是在该文件内部还是其它样式文件中），那么最后出现的（在文件底部的）样式优先级更高，因此会被采纳。

在写样式时，我会使用较低的优先级，这样这些样式可以轻易地覆盖掉。尤其对写 UI 组件的时候更为重要，这样使用者就不需要通过非常复杂的优先级规则或使用`!important`的方式，去覆盖组件的样式了。

###### 参考

* https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/
* https://www.sitepoint.com/web-foundations/specificity/


### 重置（resetting）CSS 和 标准化（normalizing）CSS 的区别是什么？你会选择哪种方式，为什么？

* **重置（Resetting）**： 重置意味着除去所有的浏览器默认样式。对于页面所有的元素，像`margin`、`padding`、`font-size`这些样式全部置成一样。你将必须重新定义各种元素的样式。
* **标准化（Normalizing）**： 标准化没有去掉所有的默认样式，而是保留了有用的一部分，同时还纠正了一些常见错误。

当需要实现非常个性化的网页设计时，我会选择重置的方式，因为我要写很多自定义的样式以满足设计需求，这时候就不再需要标准化的默认样式了。

###### 参考

* https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css


### 请阐述`Float`定位的工作原理。

浮动（float）是 CSS 定位属性。浮动元素从网页的正常流动中移出，但是保持了部分的流动性，会影响其他元素的定位（比如文字会围绕着浮动元素）。这一点与绝对定位不同，绝对定位的元素完全从文档流中脱离。

CSS 的`clear`属性通过使用`left`、`right`、`both`，让该元素向下移动（清除浮动）到浮动元素下面。

如果父元素只包含浮动元素，那么该父元素的高度将塌缩为 0。我们可以通过清除（clear）从浮动元素后到父元素关闭前之间的浮动来修复这个问题。

有一种 hack 的方法，是自定义一个`.clearfix`类，利用伪元素选择器`::after`清除浮动。[另外还有一些方法](https://css-tricks.com/all-about-floats/#article-header-id-4)，比如添加空的`<div></div>`和设置浮动元素父元素的`overflow`属性。与这些方法不同的是，`clearfix`方法，只需要给父元素添加一个类，定义如下：

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

值得一提的是，把父元素属性设置为`overflow: auto`或`overflow: hidden`，会使其内部的子元素形成块格式化上下文（Block Formatting Context），并且父元素会扩张自己，使其能够包围它的子元素。

###### 参考

* https://css-tricks.com/all-about-floats/


### 请阐述`z-index`属性，并说明如何形成层叠上下文（stacking context）。

CSS 中的`z-index`属性控制重叠元素的垂直叠加顺序。`z-index`只能影响`position`值不是`static`的元素。

没有定义`z-index`的值时，元素按照它们出现在 DOM 中的顺序堆叠（层级越低，出现位置越靠上）。非静态定位的元素（及其子元素）将始终覆盖静态定位（static）的元素，而不管 HTML 层次结构如何。

层叠上下文是包含一组图层的元素。 在一组层叠上下文中，其子元素的`z-index`值是相对于该父元素而不是 document root 设置的。每个层叠上下文完全独立于它的兄弟元素。如果元素 B 位于元素 A 之上，则即使元素 A 的子元素 C 具有比元素 B 更高的`z-index`值，元素 C 也永远不会在元素 B 之上.

每个层叠上下文是自包含的：当元素的内容发生层叠后，整个该元素将会在父层叠上下文中按顺序进行层叠。少数 CSS 属性会触发一个新的层叠上下文，例如`opacity`小于 1，`filter`不是`none`，`transform`不是`none`。

###### 参考

* https://css-tricks.com/almanac/properties/z/z-index/
* https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context


### 请阐述块格式化上下文（Block Formatting Context）及其工作原理。

块格式上下文（BFC）是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。

一个 HTML 盒（Box）满足以下任意一条，会创建块格式化上下文：

* `float`的值不是`none`.
* `position`的值不是`static`或`relative`.
* `display`的值是`table-cell`、`table-caption`、`inline-block`、`flex`、或`inline-flex`。
* `overflow`的值不是`visible`。

在 BFC 中，每个盒的左外边缘都与其包含的块的左边缘相接。

两个相邻的块级盒在垂直方向上的边距会发生合并（collapse）。更多内容请参考[边距合并（margin collapsing）](https://www.sitepoint.com/web-foundations/collapsing-margins/)。

###### 参考

* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
* https://www.sitepoint.com/understanding-block-formatting-contexts-in-css/


### 有哪些清除浮动的技术，都适用哪些情况？

* 空`div`方法：`<div style="clear:both;"></div>`。
* Clearfix 方法：上文使用`.clearfix`类已经提到。
* `overflow: auto`或`overflow: hidden`方法：上文已经提到。

在大型项目中，我会使用 Clearfix 方法，在需要的地方使用`.clearfix`。设置`overflow: hidden`的方法可能使其子元素显示不完整，当子元素的高度大于父元素时。



### 请解释什么是雪碧图（css sprites），以及如何实现？

雪碧图是把多张图片整合到一张上的图片。它被运用在众多使用了很多小图标的网站上（Gmail 在使用）。实现方法：

1. 使用生成器将多张图片打包成一张雪碧图，并为其生成合适的 CSS。
1. 每张图片都有相应的 CSS 类，该类定义了`background-image`、`background-position`和`background-size`属性。
1. 使用图片时，将相应的类添加到你的元素中。

好处：

* 减少加载多张图片的 HTTP 请求数（一张雪碧图只需要一个请求）。但是对于 HTTP2 而言，加载多张图片不再是问题。
* 提前加载资源，防止在需要时才在开始下载引发的问题，比如只出现在`:hover`伪类中的图片，不会出现闪烁。

###### 参考

* https://css-tricks.com/css-sprites/



### 如何解决不同浏览器的样式兼容性问题？

* 在确定问题原因和有问题的浏览器后，使用单独的样式表，仅供出现问题的浏览器加载。这种方法需要使用服务器端渲染。
* 使用已经处理好此类问题的库，比如 Bootstrap。
* 使用 `autoprefixer` 自动生成 CSS 属性前缀。
* 使用 Reset CSS 或 Normalize.css。



### 如何为功能受限的浏览器提供页面？ 使用什么样的技术和流程？

* 优雅的降级：为现代浏览器构建应用，同时确保它在旧版浏览器中正常运行。
* Progressive enhancement - The practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.
* 渐进式增强：构建基于用户体验的应用，但在浏览器支持时添加新增功能。
* 利用 [caniuse.com](https://caniuse.com/) 检查特性支持。
* 使用 `autoprefixer` 自动生成 CSS 属性前缀。
* 使用 [Modernizr](https://modernizr.com/)进行特性检测。



### 有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）？

这些方法与可访问性（a11y）有关。

* `visibility: hidden`：元素仍然在页面流中，并占用空间。
* `width: 0; height: 0`：使元素不占用屏幕上的任何空间，导致不显示它。
* `position: absolute; left: -99999px`： 将它置于屏幕之外。
* `text-indent: -9999px`：这只适用于`block`元素中的文本。
* Metadata： 例如通过使用 Schema.org，RDF 和 JSON-LD。
* WAI-ARIA：如何增加网页可访问性的 W3C 技术规范。

即使 WAI-ARIA 是理想的解决方案，我也会采用绝对定位方法，因为它具有最少的注意事项，适用于大多数元素，而且使用起来非常简单。

###### 参考

* https://www.w3.org/TR/wai-aria-1.1/
* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
* http://a11yproject.com/



### 除了`screen`，你还能说出一个 @media 属性的例子吗？

* all<br>
适用于所有设备。
* print<br>
为了加载合适的文档到当前使用的可视窗口. 需要提前咨询 paged media（媒体屏幕尺寸）, 以满足个别设备网页尺寸不匹配等问题。
* screen<br>
主要适用于彩色的电脑屏幕
* speech<br>
解析speech这个合成器. 注意: CSS2已经有一个相似的媒体类型叫aural.<br>
https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media



### 编写高效的 CSS 应该注意什么？

首先，浏览器从最右边的选择器，即关键选择器（key selector），向左依次匹配。根据关键选择器，浏览器从 DOM 中筛选出元素，然后向上遍历被选元素的父元素，判断是否匹配。选择器匹配语句链越短，浏览器的匹配速度越快。避免使用标签和通用选择器作为关键选择器，因为它们会匹配大量的元素，浏览器必须要进行大量的工作，去判断这些元素的父元素们是否匹配。

[BEM (Block Element Modifier)](https://bem.info/) methodology recommends that everything has a single class, and, where you need hierarchy, that gets baked into the name of the class as well, this naturally makes the selector efficient and easy to override.
[BEM (Block Element Modifier)](https://bem.info/)原则上建议为独立的 CSS 类命名，并且在需要层级关系时，将关系也体现在命名中，这自然会使选择器高效且易于覆盖。

搞清楚哪些 CSS 属性会触发重新布局（reflow）、重绘（repaint）和合成（compositing）。在写样式时，避免触发重新布局的可能。

###### 参考

* https://developers.google.com/web/fundamentals/performance/rendering/
* https://csstriggers.com/



### 使用 CSS 预处理的优缺点分别是什么？

优点：

* 提高 CSS 可维护性。
* 易于编写嵌套选择器。
* 引入变量，增添主题功能。可以在不同的项目中共享主题文件。
* 通过混合（Mixins）生成重复的 CSS。
* Splitting your code into multiple files. CSS files can be split up too but doing so will require a HTTP request to download each CSS file.
* 将代码分割成多个文件。不进行预处理的 CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件。

缺点：

* 需要预处理工具。
* 重新编译的时间可能会很慢。



### 对于你使用过的 CSS 预处理，说说喜欢和不喜欢的地方？

喜欢：

* 绝大部分优点上题以及提过。
* Less 用 JavaScript 实现，与 NodeJS 高度结合。

**Dislikes:**

* 我通过`node-sass`使用 Sass，它用 C ++ 编写的 LibSass 绑定。在 Node 版本切换时，我必须经常重新编译。
* Less 中，变量名称以`@`作为前缀，容易与 CSS 关键字混淆，如`@media`、`@import`和`@font-face`。



### 如何实现一个使用非标准字体的网页设计？

使用`@font-face`并为不同的`font-weight`定义`font-family`。



### 解释浏览器如何确定哪些元素与 CSS 选择器匹配。

这部分与上面关于编写高效的 CSS 有关。浏览器从最右边的选择器（关键选择器）根据关键选择器，浏览器从 DOM 中筛选出元素，然后向上遍历被选元素的父元素，判断是否匹配。选择器匹配语句链越短，浏览器的匹配速度越快。

例如，对于形如`p span`的选择器，浏览器首先找到所有`<span>`元素，并遍历它的父元素直到根元素以找到`<p>`元素。对于特定的`<span>`，只要找到一个`<p>`，就知道'<span>`已经匹配并停止继续匹配。

###### 参考

* https://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left



### 描述伪元素及其用途。

CSS 伪元素是添加到选择器的关键字，去选择元素的特定部分。它们可以用于装饰（`:first-line`，`:first-letter`）或将元素添加到标记中（与 content:...组合），而不必修改标记（`:before`，`:after`）。

* `:first-line`和`:first-letter`可以用来修饰文字。
* 上面提到的`.clearfix`方法中，使用`clear: both`来添加不占空间的元素。
* 使用`:before`和`after`展示提示中的三角箭头。鼓励关注点分离，因为三角被视为样式的一部分，而不是真正的 DOM。如果不使用额外的 HTML 元素，只用 CSS 样式绘制三角形是不太可能的。

###### 参考

* https://css-tricks.com/almanac/selectors/a/after-and-before/



### 说说你对盒模型的理解，以及如何告知浏览器使用不同的盒模型渲染布局。
包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个要素

IE盒模型： content==包含==border和padding

标准盒模型： content==不包含==border和padding
box-sizing语法：
box-sizing: content-box|border-box|inherit;

CSS 盒模型描述了以文档树中的元素而生成的矩形框，并根据排版模式进行布局。每个盒子都有一个内容区域（例如文本，图像等）以及周围可选的`padding`、`border`和`margin`区域。

CSS 盒模型负责计算：

* 块级元素占用多少空间。
* 边框是否重叠，边距是否合并。
* 盒子的尺寸。

盒模型有以下规则：

* 块级元素的大小由`width`、`height`、`padding`、`border`和`margin`决定。
* 如果没有指定`height`，则块级元素的高度等于其包含子元素的内容高度加上`padding`（除非有浮动元素，请参阅下文）。
* 如果没有指定`width`，则非浮动块级元素的宽度等于其父元素的宽度减去父元素的`padding`。
* 元素的`height`是由内容的`height`来计算的。
* 元素的`width`是由内容的`width`来计算的。
* 默认情况下，`padding`和`border`不是元素`width`和`height`的组成部分。

###### 参考

* https://www.smashingmagazine.com/2010/06/the-principles-of-cross-browser-css-coding/#understand-the-css-box-model



### `* { box-sizing: border-box; }`会产生怎样的效果？

* 元素默认应用了`box-sizing: content-box`，元素的宽高只会决定内容（content）的大小。
* `box-sizing: border-box`改变计算元素`width`和`height`的方式，`border`和`padding`的大小也将计算在内。
* 元素的`height` = 内容（content）的高度 + 垂直方向的`padding` + 垂直方向`border`的宽度
* 元素的`width` = 内容（content）的宽度 + 水平方向的`padding` + 水平方向`border`的宽度



### `display`的属性值都有哪些？

* `none`, `block`, `inline`, `inline-block`, `table`, `table-row`, `table-cell`, `list-item`.


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



### `relative`、`fixed`、`absolute`和`static`四种定位有什么区别？

经过定位的元素，其`position`属性值必然是`relative`、`absolute`、`fixed`或`sticky`。

* `static`：默认定位属性值。该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
* `relative`：该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。
* `absolute`：不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
* `fixed`：不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform 属性非 none 时，容器由视口改为该祖先。
* `sticky`：盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 `table` 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。`position: sticky` 对 `table` 元素的效果与 `position: relative` 相同。

###### 参考

* https://developer.mozilla.org/en/docs/Web/CSS/position



### 你使用过哪些现有的 CSS 框架？你是如何改进它们的？

* **Bootstrap**： 更新周期缓慢。Bootstrap 4 已经处于 alpha 版本将近两年了。添加了在页面中广泛使用的微调按钮组件。
* **Semantic UI**：源代码结构使得自定义主题很难理解。非常规主题系统的使用体验很差。外部库的路径需要硬编码（hard code）配置。变量重新赋值没有 Bootstrap 设计得好。
* **Bulma**： 需要很多非语义的类和标记，显得很多余。不向后兼容，以至于升级版本后，会破坏应用的正常运行。



### 你了解 CSS Flex 和 Grid 吗？

Flex 主要用于一维布局，而 Grid 则用于二维布局。
### Flex
flex容器中存在两条轴， 横轴和纵轴， 容器中的每个单元称为flex item。

在容器上可以设置6个属性：
* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content

注意：当设置 flex 布局之后，子元素的 float、clear、vertical-align 的属性将会失效。

#### Flex 项目属性
有六种属性可运用在 item 项目上:
1. order
2. flex-basis
3. flex-grow
4. flex-shrink
5. flex
6. align-self

### Grid
CSS网格布局用于将页面分割成数个主要区域，或者用来定义组件内部元素间大小、位置和图层之间的关系。

像表格一样，网格布局让我们能够按行或列来对齐元素。 但是，使用CSS网格可能还是比CSS表格更容易布局。 例如，网格容器的子元素可以自己定位，以便它们像CSS定位的元素一样，真正的有重叠和层次。

### 响应式设计与自适应设计有何不同？

响应式设计和自适应设计都以提高不同设备间的用户体验为目标，根据视窗大小、分辨率、使用环境和控制方式等参数进行优化调整。

响应式设计的适应性原则：网站应该凭借一份代码，在各种设备上都有良好的显示和使用效果。响应式网站通过使用媒体查询，自适应栅格和响应式图片，基于多种因素进行变化，创造出优良的用户体验。就像一个球通过膨胀和收缩，来适应不同大小的篮圈。

自适应设计更像是渐进式增强的现代解释。与响应式设计单一地去适配不同，自适应设计通过检测设备和其他特征，从早已定义好的一系列视窗大小和其他特性中，选出最恰当的功能和布局。与使用一个球去穿过各种的篮筐不同，自适应设计允许使用多个球，然后根据不同的篮筐大小，去选择最合适的一个。

###### 参考

* https://developer.mozilla.org/en-US/docs/Archive/Apps/Design/UI_layout_basics/Responsive_design_versus_adaptive_design
* http://mediumwell.com/responsive-adaptive-mobile/
* https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/



### 你有没有使用过视网膜分辨率的图形？当中使用什么技术？

我倾向于使用更高分辨率的图形（显示尺寸的两倍）来处理视网膜显示。更好的方法是使用媒体查询，像`@media only screen and (min-device-pixel-ratio: 2) { ... }`，然后改变`background-image`。

对于图标类的图形，我会尽可能使用 svg 和图标字体，因为它们在任何分辨率下，都能被渲染得十分清晰。

还有一种方法是，在检查了`window.devicePixelRatio`的值后，利用 JavaScript 将`<img>`的`src`属性修改，用更高分辨率的版本进行替换。

###### 参考

* https://www.sitepoint.com/css-techniques-for-retina-displays/


### 什么情况下，用`translate()`而不用绝对定位？什么时候，情况相反。

`translate()`是`transform`的一个值。改变`transform`或`opacity`不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。`transform`使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此`translate()`更高效，可以缩短平滑动画的绘制时间。

当使用`translate()`时，元素仍然占据其原始空间（有点像`position：relative`），这与改变绝对定位不同。

###### 参考

* https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/


### 其他答案

* https://neal.codes/blog/front-end-interview-css-questions
* https://quizlet.com/28293152/front-end-interview-questions-css-flash-cards/
* http://peterdoes.it/2015/12/03/a-personal-exercise-front-end-job-interview-questions-and-my-answers-all/


### 行内元素、块级元素区别
行内元素：和其他元素都在一行上，高度、行高及外边距和内边距都不可改变，文字图片的宽度不可改变，只能容纳文本或者其他行内元素；其中img是行元素

块级元素：总是在新行上开始，高度、行高及外边距和内边距都可控制，可以容纳内敛元素和其他元素；行元素转换为块级元素方式：display：block；


### 一边固定宽度一边宽度自适应
可以使用flex布局 复制下面的HTML和CSS代码 用浏览器打开可以看到效果
```
<div class="wrap">
  <div class="div1"></div>
  <div class="div2"></div>
</div>

.wrap {
  display: flex;
  justify-content: space-between;
}
.div1 {
  min-width: 200px;
}
.div2 {
  width: 100%;
  background: #e6e6e6;
}
html,
body,
div {
  height: 100%;
  margin: 0;
}
```

### 水平垂直居中的方式
#### flex
```
// 父容器
display: flex;
justify-content: center;
align-items: center;
```
#### position
```
// 父容器
position: relative;

// 子容器
position:absolute;
margin:auto;
top:0;
bottom:0;
left:0;
right:0;
```
#### position+transform
```
// 父容器
position: relative;

// 子容器
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```
#### table-cell
```
<div class="box">
    <div class="content">
        <div class="inner"></div>
    </div>
</div>

html, body {
    height: 100%;
    width: 100%;
    margin: 0;
}
.box {
    display: table;
    height: 100%;
    width: 100%;
}
.content {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.inner {
    background-color: #000;
    display: inline-block;
    width: 200px;
    height: 200px;
}
```


### display:none、visibile:hidden、opacity:0的区别
| |是否隐藏 |是否在文档中占用空间|是否会触发事件|
|-|-|-|-|
|display: none|是|否|否|
|visibile: hidden|是|是|否|
|opacity: 0|是|是|是|



### CSS中link和@import的区别
* link属于HTML标签，而@import是CSS提供的
* 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载
* import只在IE5以上才能识别，而link是HTML标签，无兼容问题
* link方式的样式的权重 高于@import的权重



### 如何用css实现瀑布流布局
利用column-count和break-inside这两个CSS3属性即可，复制如下代码即可察看效果
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            margin: 0;
        }
        .waterfall-container {
            /*分几列*/
            column-count: 2;
            width: 100%;
            /* 列间距 */
            column-gap: 10px;
        }

        .waterfall-item {
            break-inside: avoid;
            width: 100%;
            height: 100px;
            margin-bottom: 10px;
            background: #ddd;
            column-gap: 0;
            text-align: center;
            color: #fff;
            font-size: 40px;
        }
    </style>
</head>
<body>
    <div class="waterfall-container">
        <div class="waterfall-item" style="height: 100px">1</div>
        <div class="waterfall-item" style="height: 300px">2</div>
        <div class="waterfall-item" style="height: 400px">3</div>
        <div class="waterfall-item" style="height: 100px">4</div>
        <div class="waterfall-item" style="height: 300px">5</div>
        <div class="waterfall-item" style="height: 600px">6</div>
        <div class="waterfall-item" style="height: 400px">7</div>
        <div class="waterfall-item" style="height: 300px">8</div>
        <div class="waterfall-item" style="height: 700px">9</div>
        <div class="waterfall-item" style="height: 100px">10</div>
    </div>
</body>
</html>
```



## 文本超出部分显示省略号
#### 单行
```
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```
#### 多行
```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; // 最多显示几行
overflow: hidden;
```


## 利用伪元素画三角
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

## javascript部分
### 定时器
```
  console.log(1);

    setTimeout(function () {
        console.log(2);
    }, 1000);

    setTimeout(function () {
        console.log(3);
    }, 0);

    console.log(4);
1,3,4,2
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
### getBoundingClientRect获取的top和offsetTop获取的top区别 
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

### const常量是否能修改
- 如果是值类型，值不可变
- 如果是引用类型，比如对象、数组等，地址不可变，属性值可以修改
- const的原理是引用地址不变


### 同源策略
协议、域名、端口三者相同。 由于同源策略产生安全问题。

同源策略是浏览器的一个安全功能。URL 由协议、域名、端口和路径组成。比较两个 url,如果协议、域名或端口三者有一个不同，那就是不同源。浏览器采用同源策略，禁止页面加载或执行与自身来源不同的域的脚本。比如，如果客户端与服务器的域名不一，那么服务器将不允许客户端访问。不受同源策略影响的标签:script、img、iframe、link。

### 跨域

跨域是指从一个域的网页去请求另一个域。（域名）  
方法:

- jsonp，允许 script 加载第三方资源
- 反向代理(ngix 服务内部配置 Access-Control-Allow-Origin\*)
- cors 前后端协作设置请求头部,Access-Controll-Allow-Origin 等头部信息
- iframe 嵌套通讯,postmessage

### cors跨域

当你使用XMLHttpRequest发送请求时，浏览器发现该请求不符合同源策略，会给该请求加一个请求头：Origin，后台进行一系列处理，如果确定接受请求则在返回结果中加入一个响应头：Access-Control-Allow-Origin;浏览器判断该相应头中是否包含Origin的值，如果有则浏览器会处理响应，我们就可以拿到响应数据，如果不包含浏览器直接驳回，这时我们无法拿到响应数据。

### jsop与cors的区别
- JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。
- JSONP无法判断是否请求失败，
### 什么是 jsonp

有一些标签不受同源策略影响，我们就把数据封装好，返回给这些标签。jsonp 指的是其中的一种非正式传输协议，它的要点是允许用户传递一个**callback**参数给服务端，然后服务端返回数据会将整个 callback 参数作为函数名来包裹住 json 数据。仅用于 get 请求

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
### onClick和addEventListener的区别
### 事件冒泡
### 事件委托

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

事件循环是一个单线程循环，用于监视调用堆栈并检查是否有工作即将在任务队列中完成。如果调用堆栈为空并且任务队列中有回调函数，则将回调函数出队并推送到调用堆栈中执行。

### 事件模型

- DOM0  
  直接绑定

```
<input onclick="sayHi()"/>

btn.onclick = function() {}
btn.onclick = null
```

- DOM2  
  DOM2 级事件可以冒泡和捕获 通过 addEventListener 绑定 通过 removeEventListener 解绑

```
// 绑定
btn.addEventListener('click', sayHi)
// 解绑
btn.removeEventListener('click', sayHi)
```

- DOM3
  增添了事件类型

```
UI事件，当用户与页面上的元素交互时触发，如：load、scroll
焦点事件，当元素获得或失去焦点时触发，如：blur、focus
鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup
滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel
文本事件，当在文档中输入文本时触发，如：textInput
键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress
合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart
变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified
```

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

作用域问题:js 函数的子函数可以直接读取父函数的变量，但是父函数不可以。闭包定义在一个函数的内部，这个函数可以读取父函数的变量。

- 用途:
  - 读取函数内部的变量
  - 让变量保存在内存中:将子函数设置为全局函数，那么父函数运行之后的结果，会被保存在内存中，不会被垃圾回收机制回收。
- 注意点:
  - 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
  - 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

### 
```
var arr = [1, 2, 3];

fun(arr);
console.log(arr);

function fun(a) {
    a = [];

}
```

var 会使变量提升，这意味着变量可以在声明之前使用。let 和 const 不会使变量提升，提前使用会报错。 变量提升（hoisting）是用于解释代码中变量声明行为的术语。使用 var 关键字声明或初始化的变量，会将声明语句“提升”到当前作用域的顶部。 但是，只有声明才会触发提升，赋值语句（如果有的话）将保持原样。
var 提前使用将会报 undefined,let 和 const 提前使用将会报错
函数作用域中的变量提升（两点提醒）
提醒1：

在函数作用域也有声明提前的特性：

使用var关键字声明的变量，是在函数作用域内有效，而且会在函数中所有的代码执行之前被声明

函数声明也会在函数中所有的代码执行之前执行

因此，在函数中，没有var声明的变量都会成为全局变量，而且并不会提前声明。

### 使用 let、var 和 const 创建变量
- let 的「创建」过程被提升了，但是初始化没有提升。
- var 的「创建」和「初始化」都被提升了。
- function 的「创建」「初始化」和「赋值」都被提升了。
假设a被声明为变量，紧接着a又被声明为函数，原则是：声明会被覆盖（先来后到，就近原则）。
PS：
如果a已经有值，再用 var 声明是无效的。

如果a已经有值，紧接着又被赋值，则赋值会被覆盖。
用 var 声明的变量的作用域是它当前的执行上下文，它可以是嵌套的函数，也可以是声明在任何函数外的变量。let 和 const 是块级作用域，意味着它们只能在最近的一组花括号（function、if-else 代码块或 for 循环中）中访问。

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

2. 二位数组去重

```
返回一维数组:
[...new Set(student.map(({ sex }) => sex))];
返回二位数组:
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
- 引用数据类型：object、symbol。
另外，object 包括：数组、函数、正则、日期等对象。NaN属于number类型。
注意，数据类型里，没有数组。因为数组属于object（一旦说数组、函数、正则、日期、NaN是数据类型，直接0分）。

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

### 域名收敛

PC 时代为了突破浏览器的域名并发限制。有了域名发散。
浏览器有并发限制，是为了防止 DDOS 攻击。
域名收敛：就是将静态资源放在一个域名下。减少 DNS 解析的开销。
域名发散：是将静态资源放在多个子域名下，就可以多线程下载，提高并行度，使客户端加载静态资源更加迅速。
域名发散是 pc 端为了利用浏览器的多线程并行下载能力。而域名收敛多用与移动端，提高性能，因为 dns 解析是是从后向前迭代解析，如果域名过多性能会下降，增加 DNS 的解析开销。

### 首屏时间、白屏时间

Performance 接口可以获取到当前页面中与性能相关的信息。  
该类型的对象可以通过调用只读属性 Window.performance 来获得。  
白屏时间：

```
performance.timing.responseStart - performance.timing.navigationStart

```

首屏时间

```
window.onload = () => {
    new Date() - performance.timing.responseStart
}
```

### 当你在浏览器输入一个地址会发生什么

https://github.com/skyline75489/what-happens-when-zh_CN/blob/master/README.rst?utm_medium=social&utm_source=wechat_session&from=timeline&isappinstalled=0

### 自动分号

有时 JavaScript 会自动为代码行补上缺失的分号，即自动分号插入（Automatic SemicolonInsertion，ASI）。
因为如果缺失了必要的 ; ，代码将无法运行，语言的容错性也会降低。ASI 能让我们忽略那些不必要的 ; 。
请注意，ASI 只在换行符处起作用，而不会在代码行的中间插入分号。
如果 JavaScript 解析器发现代码行可能因为缺失分号而导致错误，那么它就会自动补上分 号。并且，只有在代码行末尾与换行符之间除了空格和注释之外没有别的内容时，它才会 这样做。

### 自执行函数(立即执行函数)
```
(function(a, b) {
    var name;  //声明一个局部变量
    console.log("a = " + a);
    console.log("b = " + b);
})(123, 456);
```

自执行函数:1、声明一个匿名函数 2、马上调用这个匿名函数。
作用：创建一个独立的作用域。

好处：防止变量弥散到全局，以免各种 js 库冲突。隔离作用域避免污染，或者截断作用域链，避免闭包造成引用变量无法释放。利用立即执行特性，返回需要的业务函数或对象，避免每次通过条件判断来处理。定义局部变量,防止污染全局变量;ES6之后我们使用let就可以了。
立即执行函数无意义

场景：一般用于框架、插件等场景

###实现 add 函数,让 add(a)(b)和 add(a,b)两种调用结果相同

```
function add(a, b) {
    if (b === undefined) {
        return function(x) {
            return a + x
        }
    }
```

### js 中万物皆对象你认为对吗?

我认为是对的 在 JS 中有原生函数、基本数据类型，它们的原型最终还是对象。 可以看看本文的原生函数

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

```
str.replace(/\s/g,'');
```

去除两边空格
1. js方式
```
str.trim()
```
2. 正则方式
```
 function trim(string) {
        return string.replace(/^\s+|\s+$/g, '')
    }
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

### 请简述 JavaScript 中的 this
1.  fn() 里面的 this 就是 window

2.  fn() 是 strict mode，this 就是 undefined

3.  a.b.c.fn() 里面的 this 就是 a.b.c

4.  new F() 里面的 this 就是新生成的实例

5.  () => console.log(this) ，这个this指的是外面的 this。

JS 中的 this 是一个相对复杂的概念，不是简单几句能解释清楚的。粗略地讲，函数的调用方式决定了 this 的值。我阅读了网上很多关于 this 的文章，Arnav Aggrawal 写的比较清楚。this 取值符合以下规则：

1. 在调用函数时使用 new 关键字，函数内的 this 是一个全新的对象。
2. 如果 apply、call 或 bind 方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。
3. 当函数作为对象里的方法被调用时，函数内的 this 是调用该函数的对象。比如当 obj.method()被调用时，函数内的 this 将绑定到 obj 对象。
4. 如果调用函数不符合上述规则，那么 this 的值指向全局对象（global object）。浏览器环境下 this 的值指向 window 对象，但是在严格模式下('use strict')，this 的值为 undefined。
5. 如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定 this 的值。
6. 如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this 被设置为它被创建时的上下文。

### 题目:考察变量定义提升、this指针指向、运算符优先级、原型、全局变量、变量污染、对象属性、原型属性优先
```
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};    //Foo函数上存储的静态属性
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}
 
//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

- Foo.getName
访问Foo函数上存储的静态属性，结果是2。
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
* 调用公有方法，公有属性，我们必需先实例化对象，也就是用new操作符实化对象，就可构造函数实例化对象的方法和属性，并且公有方法是不能调用私有方法和静态方法的
* 静态方法和静态属性就是我们无需实例化就可以调用
* 而对象的私有方法和属性,外部是不可以访问的

- getName();
结果是5，优先访问function getName()     
- 变量提升，函数声明会被提升到作用域最前面
- 函数表达式创建的函数是在运行时赋值，最后等到表达式赋值完成后才能调用.

- Foo().getName();
结果是1,访问Foo()函数的getName()方法.注意此处的Foo()函数的getName没有用var或者Let声明,所以,getName变为了全局变量。这个时候,getName将全局的getName变量重写。
Foo执行后把全局的getName函数重写了一遍.
注意,Foo()函数中的this指向的是window对象，也就是说Foo 函数，返回的是windows对象，相当于执行window.getName();this的指向由函数的调用方式决定。

- getName
结果是1,上层的Foo().getName把var getName重写了。
- new Foo.getName();
结果是2 
new Foo;
Foo.getName();

- new Foo().getName();
(new Foo()).getName();
结果是3
new 了一个foo对象，定义了一个getName方法。优先采用原型链方法

- new new Foo().getName();
结果是3
new ((new Foo()).getName)();

## HTTP部分
### url->页面加载完成的整个流程
1. 浏览器查询域名对应的IP地址
2. 浏览器根据IP地址与服务器建立socket连接
3. 浏览器与服务器进行通信：浏览器请求，服务器处理请求
4. 浏览器与服务器断开连接

### 一个页面从输入url到页面加载显示完成
1. 用户输入网址，浏览器发起DNS查询请求，查找对应的IP地址
2. 建立TCP连接：通过DNS获取到web服务器真的IP地址建立连接
3. 浏览器向 web 服务器发送一个 HTTP 请求
4. 服务器发送响应数据给客户端
5. 浏览器解析解析服务器返回的响应

### vue的生命周期
1. 创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化，created阶段，vue实例的数据对象data有了，el还没有；
2. 载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。
3. 更新前/后：当data变化时，会触发beforeUpdate和updated方法。
4. 销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

### http2.0和https
### cookie和session
#### cookie
- HTTP响应通过 Set-Cookie 设置 Cookie
- 浏览器访问指定域名是必须带上 Cookie 作为 Request Header
- Cookie 一般用来记录用户信息
#### session
- Session 是服务器端的内存（数据）
- session 一般通过在 Cookie 里记录 SessionID 实现
- SessionID 一般是随机数
### tcp/ip握手过程
### 网络四层架构
### RESTful
REST 指的是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是 RESTful。

* GET<br>
get方法在Rest中主要用于获取资源，能够发送参数，不过有限制，且参数都会以?开头的形 式附加在URL尾部。
规范的get方法处理器应该是幂等的，也就是说对一个资源不论发送多少次get请求都不会更改数据或造成破坏。
* POST<br>
post方法在Rest请求中主要用于添加资源，参数信息存放在请求报文的消息体中相对安全，且可发送较大信息
* PUT<br>
put方法在Rest中主要用于更新资源，因为大多数浏览器不支持put和delete，会自动将put和delete请求转化为get和post. 因此为了使用put和delete方法,
需要以post发送请求，在表单中使用隐藏域发送真正的请求。
put方法的参数是同post一样是存放在消息中的，同样具有安全性，可发送较大信息。
put方法是幂等的，对同一URL资源做出的同一数据的任意次put请求其对数据的改变都是一致的。
* DELETE<br>
Delete在Rest请求中主要用于删除资源，因为大多数浏览器不支持put和delete，会自动将put和delete请求转化为get和post。
因此为了使用put和delete方法,需要以post发送请求，在表单中使用隐藏域发送真正的请求。
Delete方法的参数同post一样存放在消息体中,具有安全性，可发送较大信息 Delete方法是幂等的，不论对同一个资源进行多少次delete请求都不会破坏数据

### GET和POST的区别
GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。

需要注意的是，web 中的 get/post 只是 http 中的 get/post 的子集。http 中的 get 与 post 只是单纯的名字上的区别，get 请求的数据也可以放在 request body 中，只是浏览器没有实现它，但是 get 并不只是在 web 中使用。

* GET产生一个TCP数据包；POST产生两个TCP数据包。
* GET在浏览器回退时是无害的，而POST会再次提交请求。
* GET产生的URL地址可以被Bookmark，而POST不可以。
* GET请求会被浏览器主动cache，而POST不会，除非手动设置。
* GET请求只能进行url编码，而POST支持多种编码方式。
* GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
* GET请求在URL中传送的参数是有长度限制的，而POST么有。
* 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
* GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
* GET参数通过URL传递，POST放在Request body中。
缓存:get请求能够被缓存，post请求默认不会被缓存(缓存是针对URL的)
安全性:包含在URL中明文显示，且服务器的日志会记录，非常不安全 。
数据量：没有规定，但是受限于浏览器平台。通常，get较小。


### Accept和Content-Type
Accept 请求头用来告知客户端可以处理的内容类型，这种内容类型用MIME类型来表示。
服务器使用 Content-Type 应答头通知客户端它的选择。
```
Accept: text/html
Accept: image/*
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```
1.Accept属于请求头， Content-Type属于实体头。 <br>
Http报头分为通用报头，请求报头，响应报头和实体报头。 <br>
请求方的http报头结构：通用报头|请求报头|实体报头 <br>
响应方的http报头结构：通用报头|响应报头|实体报头<br>

2.Accept代表发送端（客户端）希望接受的数据类型。 <br>
比如：Accept：text/xml; <br>
代表客户端希望接受的数据类型是xml类型<br>

Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。 <br>
比如：Content-Type：text/html; <br>
代表发送端发送的数据格式是html。<br>

二者合起来， <br>
Accept:text/xml； <br>
Content-Type:text/html <br>
即代表希望接受的数据类型是xml格式，本次请求发送的数据的数据格式是html。<br>

### http 缓存
### 强制缓存和协商缓存的区别
强制缓存
```
Expires或Cache-Control
```
协商缓存
- 第一对：Last-Modified、If-Modified-Since

- 第二对：ETag、If-None-Match

### 状态码

| 状态码 | 类别 | 描述 |
| -- | -- | -- |
| 1xx | Informational（信息状态码） | 接受请求正在处理 |
| 2xx | Success（成功状态码） | 请求正常处理完毕 |
| 3xx | Redirection（重定向状态码） | 需要附加操作已完成请求 |
| 4xx | Client Error（客户端错误状态码） | 服务器无法处理请求 |
| 5xx | Server Error（服务器错误状态码） | 服务器处理请求出错 |
2XX——表明请求被正常处理了

1. 200 OK：请求已正常处理。

2. 204 No Content：请求处理成功，但没有任何资源可以返回给客户端，一般在只需要从客户端往服务器发送信息，而对客户端不需要发送新信息内容的情况下使用。

3. 206 Partial Content：是对资源某一部分的请求，该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的GET请求。响应报文中包含由Content-Range指定范围的实体内容。

3XX——表明浏览器需要执行某些特殊的处理以正确处理请求

4. 301 Moved Permanently：资源的uri已更新，你也更新下你的书签引用吧。永久性重定向，请求的资源已经被分配了新的URI，以后应使用资源现在所指的URI。永久充定向，浏览器会记住，有缓存。

5. 302 Found：资源的URI已临时定位到其他位置了，姑且算你已经知道了这个情况了。临时性重定向。和301相似，但302代表的资源不是永久性移动，只是临时性性质的。换句话说，已移动的资源对应的URI将来还有可能发生改变。临时重定向，无缓存。

6. 303 See Other：资源的URI已更新，你是否能临时按新的URI访问。该状态码表示由于请求对应的资源存在着另一个URL，应使用GET方法定向获取请求的资源。303状态码和302状态码有着相同的功能，但303状态码明确表示客户端应当采用GET方法获取资源，这点与302状态码有区别。

当301,302,303响应状态码返回时，几乎所有的浏览器都会把POST改成GET，并删除请求报文内的主体，之后请求会自动再次发送。

7. 304 Not Modified：资源已找到，但未符合条件请求。该状态码表示客户端发送附带条件的请求时（采用GET方法的请求报文中包含If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since中任一首部）服务端允许请求访问资源，但因发生请求未满足条件的情况后，直接返回304.。

8. 307 Temporary Redirect：临时重定向。与302有相同的含义。

4XX——表明客户端是发生错误的原因所在。

9. 400 Bad Request：服务器端无法理解客户端发送的请求，请求报文中可能存在语法错误。

10. 401 Unauthorized：该状态码表示发送的请求需要有通过HTTP认证（BASIC认证，DIGEST认证）的认证信息。

11. 403 Forbidden：不允许访问那个资源。该状态码表明对请求资源的访问被服务器拒绝了。（权限，未授权IP等）

12. 404 Not Found：服务器上没有请求的资源。路径错误等。

5XX——服务器本身发生错误

13. 500 Internal Server Error：貌似内部资源出故障了。该状态码表明服务器端在执行请求时发生了错误。也有可能是web应用存在bug或某些临时故障。

14. 503 Service Unavailable：抱歉，我现在正在忙着。该状态码表明服务器暂时处于超负载或正在停机维护，现在无法处理请求。
### 200和304的区别

### 如何处理不让别人盗用你的图片，访问你的服务器资源(盗链)
* http header, 对refer做判断看来源是不是自己的网站，如果不是就拒绝
* 通过session校验，如果不通过特定服务生成cookie和session就不能请求得到资源

### http协议缓存机制
https://segmentfault.com/a/1190000010690320

### Http与Https的区别
* HTTP 的URL 以http:// 开头，而HTTPS 的URL 以https:// 开头
* HTTP 是不安全的，而 HTTPS 是安全的
* HTTP 标准端口是80 ，而 HTTPS 的标准端口是443
* 在OSI 网络模型中，HTTP工作于应用层，而HTTPS 的安全传输机制工作在传输层
* HTTP 无法加密，而HTTPS 对传输的数据进行加密
* HTTP无需证书，而HTTPS 需要CA机构wosign的颁发的SSL证书

### 什么是Http协议无状态协议?怎么解决Http协议无状态协议?
无状态协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息也就是说，<br>
当客户端一次HTTP请求完成以后，客户端再发送一次HTTP请求，HTTP并不知道当前客户端是一个”老用户“。<br>

可以使用Cookie来解决无状态的问题，Cookie就相当于一个通行证，第一次访问的时候给客户端发送一个Cookie，<br>
当客户端再次来的时候，拿着Cookie(通行证)，那么服务器就知道这个是”老用户“。<br>


### 常用的HTTP方法有哪些
* GET：用于请求访问已经被URL（统一资源标识符）识别的资源，可以通过URL传参给服务器。
* POST：用于传输信息给服务器，主要功能与Get方法类似，但一般推荐POST方式。
* PUT：传输文件，报文主体包含文件内容，保存到对应URL位置。
* HEAD：获取报文首部，与GET方法类似，只是不返回报文主体，一般用于验证URL是否有效。
* DELET：删除文件，与PUT方法相反，删除对应URL位置的文件。OPTIONS：查询相应URL支持的HTTP方法。

## 安全
### XSS
#### XSS是什么
XSS是一种经常出现在web应用中的计算机安全漏洞，它允许恶意web用户将代码植入到提供给其它用户使用的页面中。<br>
比如这些代码包括HTML代码和客户端脚本。攻击者利用XSS漏洞旁路掉访问控制——例如同源策略(same origin policy)。<br>
这种类型的漏洞由于被黑客用来编写危害性更大的网络钓鱼(Phishing)攻击而变得广为人知。<br>
对于跨站脚本攻击，黑客界共识是：跨站脚本攻击是新型的“缓冲区溢出攻击“，而JavaScript是新型的“ShellCode”。
```
示例：
<script>alert(document.cookie)</script>
```

### 特点
能注入恶意的HTML/JavaScript代码到用户浏览的网页上，从而达到Cookie资料窃取、会话劫持、钓鱼欺骗等攻击。
<攻击代码不一定（非要）在 <script></script> 中>
 
### 原因
* Web浏览器本身的设计不安全。浏览器能解析和执行JS等代码，但是不会判断该数据和程序代码是否恶意。
* 输入和输出是Web应用程序最基本的交互，而且网站的交互功能越来越丰富。如果在这过程中没有做好安全防护，很容易会出现XSS漏洞。
* 程序员水平参差不齐，而且大都没有过正规的安全培训，没有相关的安全意识。
* XSS攻击手段灵活多变。

#### 危害
* 盗取各类用户帐号，如机器登录帐号、用户网银帐号、各类管理员帐号
* 控制企业数据，包括读取、篡改、添加、删除企业敏感数据的能力
* 盗窃企业重要的具有商业价值的资料
* 非法转账
* 强制发送电子邮件
* 网站挂马
* 控制受害者机器向其它网站发起攻击

#### 如何防范
* 将重要的cookie标记为http only, 这样的话Javascript 中的document.cookie语句就不能获取到cookie了.
* 表单数据规定值的类型，例如：年龄应为只能为int、name只能为字母数字组合。。。。
* 对数据进行Html Encode 处理
* 过滤或移除特殊的Html标签。过滤 例如: <script>, <iframe> , &lt; for <, &gt; for >, &quot for
* 过滤JavaScript 事件的标签。例如 "onclick=", "onfocus" 等等。
转义 ②DOM解析白名单 ③第三方库 ④CSP

### CSRF
CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One Click Attack”或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本（XSS），但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装来自受信任用户的请求来利用受信任的网站。与XSS攻击相比，CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比XSS更具危险性。

#### 特点
* 依靠用户标识危害网站
* 利用网站对用户标识的信任
* 欺骗用户的浏览器发送HTTP请求给目标站点
* 另外可以通过IMG标签会触发一个GET请求，可以利用它来实现CSRF攻击。

#### 防御
* 通过referer、token或者验证码来检测用户提交。
* 尽量不要在页面的链接中暴露用户隐私信息。
* 对于用户修改删除等操作最好都使用post操作 。
* 避免全站通用的cookie，严格设置cookie的域。

## 其他部分
### cdn
#### cdn的思路
其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。
### 前端性能优化
* 减少 HTTP 请求
* 减少 DOM 操作
* 避免不必要的重绘与重排
* 优化 CSS 选择器（从右向左匹配）
* CSS/JS minify，减少文件体积
* 开启 Gzip 压缩
* 将 CSS 放到顶部，JavaScript 放到尾部
* 压缩图片以及使用 CSS Sprite
* 使用 CDN 加速，适当进行文件缓存
* 合理控制 cookie 大小（每次请求都会包含 cookie）

### gzip压缩

## vue部分
### vuex作用
### vue的项目构建
- 按模块
- 模块下按照vue的架构分类，如图片、样式表、功能代码分类
- 功能代码按照功能组件化编写。
### vue的特点
- 数据驱动、组件化
### 双向绑定的实现原理
- 通过mvvm
- Object.defineProperty( )
- 虚拟DOM
### 什么是mvvm
MVVM最早由微软提出来，它借鉴了桌面应用程序的MVC思想，在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离
把Model和View关联起来的就是ViewModel。<br>
ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model<br>
View 和 Model 之间的同步工作完全是自动的，无需人为干涉（由viewModel完成，在这里指VUE）<br>
因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理<br>

#### ViewModel如何编写？

需要用JavaScript编写一个通用的ViewModel，这样，就可以复用整个MVVM模型了

一个MVVM框架和jQuery操作DOM相比有什么区别？
我们先看用jQuery实现的修改两个DOM节点的例子：
```
<!-- HTML -->
<p>Hello, <span id="name">Bart</span>!</p>
<p>You are <span id="age">12</span>.</p>

Hello, Bart!

You are 12.
```
用jQuery修改name和age节点的内容：
```
var name = 'Homer';
var age = 51;

$('#name').text(name);
$('#age').text(age);
```

如果我们使用MVVM框架来实现同样的功能，我们首先并不关心DOM的结构，而是关心数据如何存储。最简单的数据存储方式是使用JavaScript对象：
```
var person = {
    name: 'Bart',
    age: 12
}
```
我们把变量person看作Model，把HTML某些DOM节点看作View，并假定它们之间被关联起来了。

要把显示的name从Bart改为Homer，把显示的age从12改为51，我们并不操作DOM，而是直接修改JavaScript对象：
```
person.name = 'Homer';
person.age = 51;
```

执行上面的代码，我们惊讶地发现，改变JavaScript对象的状态，会导致DOM结构作出对应的变化！这让我们的关注点从如何操作DOM变成了如何更新JavaScript对象的状态，而操作JavaScript对象比DOM简单多了！

这就是MVVM的设计思想：关注Model的变化，让MVVM框架去自动更新DOM的状态，从而把开发者从操作DOM的繁琐步骤中解脱出来！
下图可以很好的解释view viewModel model之间的关系
![mvvm](https://github.com/woai3c/mini-vue/blob/master/imgs/mvvm.jpg)



### Vue的优点是什么
mvvm的优点即是vue的优点，在这里再总结一下：<br>
数据和视频之间的同步工作完全是自动的，无需人为干涉，所以开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，
复杂的数据状态维护完全由 MVVM 来统一管理，节省了很多精力。



### 对于生命周期的理解
创建一个Vue实例，是一个漫长的过程，要经历初始化，数据合并，模板解析，数据渲染等等一系列过程。
所以，为了能实现在这个过程里面插入自己想要提前做的事情，就有了生命周期钩子函数。

#### 举个例子：
```
一辆公交车，从出发点A站到终点站B，中间有很多站点，公交车每到一个站点，就得停下来，
等待客人上车，然后再驶往下一个站点，一直到终点站为止。
A和B之间的站点，就像是这个路程的生命周期。每一个站点都是一个不同的生命周期（站点名不同），
只要到了站点，就得执行该站点对应的生命周期函数，
只不过每个站点的生命周期函数都是一样的（等待客人上车）。
```
Vue中的生命周期也是一样，对应了Vue实例从创建到结束之间的每一个过程。
例如，Vue的`beforeCreate`周期，指的就是Vue在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

至于Vue具体的生命周期函数有哪些，请看官网[API文档](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

### create和mounted的区别

### 什么时候执行update

## 组件传值
* 父组件通过prop向子组件传值
* 子组件通过事件向父组件传值
* 子组件与子组件之间不能直接传值，需要通过父组件来做间接传值，在这种情况下推荐使用vuex

具体例子请看[官方文档](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)



## vue数据绑定原理

Vue的数据双向绑定都是依据Object.defineProperty()这一方法来做的<br>
Object.defineProperty到底有什么作用呢？
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
```
Object.defineProperty(obj, prop, descriptor)

obj
要在其上定义属性的对象。

prop
要定义或修改的属性的名称。

descriptor
将被定义或修改的属性描述符。
```
简单来说 这个方法可以定义一个对象某个属性的描述符

我们需要用到的就是描述符当中的getter和setter
```
const obj = {a:1}
obj.a // 1

obj.a = 2 
```
像上面代码中的两个操作 读取和赋值 就是在访问obj.a的getter和setter<br>
当我们输入obj.a时 就是在访问obj对象a属性的getter 当输入obj.a = 2 时就是在访问obj对象a属性的setter
```
Object.defineProperty(obj, 'a', {
  get : function(){
    return val
  },
  set : function(newValue){
    val = newValue
  },
  enumerable : true,
  configurable : true
})
```
getter和setter都是一个函数 我们还可以这样做 例如
```
get: function() {
  // 每次访问obj.a时都会执行这段代码
  console.log('hello, 你在读取a的值')
  return val
}
set: function(newValue) {
  val = newValue
  // 每次给obj.a赋值时都会执行这段代码
  console.log('你设置了a的值')
}
```
Vue的双向数据绑定就是根据上面的原理来实现的
只要在读取值时收集观察者 在赋值时触发观察者更新函数 就可以实现数据变更 从而实现DOM重新渲染

说到这可能还不是很明白 不要急 慢慢来 先看一下这段代码 复制放到HTML文件里自己运行一下
然后打开网页 在控制台里输入data.user.name看看 会有惊喜 
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>动态数据绑定（一）</title>
</head>
<body>
 <script>
    var data = {
        user: {
            name: 'xiaoming',
            age: 18,
            occupation: 'frontend'
        },
        address: {
            city: 'shaoguan'
        }
    }; 
    function Observer(data) {
        this.data = data;
        this.walk(data);
    }
    Observer.prototype = {
        walk: function(obj) {
            var value,
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    value = obj[key];
                    if (typeof value === 'object') {
                        new Observer(value);
                    }
                    this.convert(key, value); 
                }   
            }
        },
        convert: function(key, value) {
            Object.defineProperty(this.data, key, {
                get : function(){ 
                    console.log("你访问了" + key);
                    return value; 
                },
                set : function(newValue){ 
                    value = newValue; 
                    console.log('你设置了' + key + '=' + value);
                }
            });
        }
    }  
    var example = new Observer(data);
 </script>   
</body>
</html>
```




## vue-router原理
说简单点，vue-router的原理就是通过对URL地址变化的监听，继而对不同的组件进行渲染。<br>
每当URL地址改变时，就对相应的组件进行渲染。原理是很简单，实现方式可能有点复杂，主要有hash模式和history模式。<br>
如果想了解得详细点，建议百度或者阅读源码。



## vuex原理
vuex的原理其实非常简单，它为什么能实现所有的组件共享同一份数据？<br>
因为vuex生成了一个store实例，并且把这个实例挂在了所有的组件上，所有的组件引用的都是同一个store实例。<br>
store实例上有数据，有方法，方法改变的都是store实例上的数据。由于其他组件引用的是同样的实例，所以一个组件改变了store上的数据，
导致另一个组件上的数据也会改变，就像是一个对象的引用。<br>
如果对vuex的实现有兴趣，可以看看我自己造的一个vue轮子对应的[vuex插件](https://github.com/woai3c/mini-vuex/blob/master/mini-vuex.js)。它实现了除vuex模块外的所有功能。



## v-if和v-show的区别
`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用`v-if` 较好。

https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show

## ES6部分
### class
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes

### ES6的新特性有哪些?
- 作用域
- 函数扩展(扩展运算符、默认参数、箭头函数)
- 异步promise
- 模块化
### 箭头函数与匿名函数的区别
箭头函数的匿名函数的区别是，箭头函数内部的this是词法作用域，由上下文确定。  
普通this是动态作用域；箭头函数的this指向词法作用域
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
### promise
#### promise的使用
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
	function xxx(){
      return new Promise(function(resolve, reject){
          setTimeout(()=>{
              resolve() 或者 reject()
          },3000)
      })
  }
  xxx().then(...)
```
#### promise的状态
#### setTimeout(0)和一个promise哪个先执行
任务队列可以有多个，promise的任务队列，优先级更高

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
有了await之后，可以直接替换掉then。如下：
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
## webpack部分
###　webpack实现vue-cli
### 入口文件怎么配置，多入口怎么分割
### 打包

## nodejs部分
### 跨域的实现
```
const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:8083','http://localhost:8083'],    //  配置Access-Control-Allow-Origin 
  optionSuccessStatus: 200, //  为成功的请求提供一个状态码
  methods:['GET','POST'],   //  配置Access-Control-Allow-Methods cors的
  alloweHeaders:['Conten-Type', 'Authorization']    //  Access-Control-Allow-Headers 
};
app.use(cors(corsOptions));
```
## express部分

## 移动端部分
### 触摸事件
- touchstart touchmove touchend touchcancel（touchcancel当触点由于某些原因被中断时触发）
- 移动端浏览器和电脑浏览器的touch事件的区别:移动端存在点击延迟，touchend和click之间存在300ms~350ms的延迟。主要是浏览器看你要不要进行双击(double tap)操作。
解决方法
    - 将click事件换成touch end事件
    - FastClick：FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后真正的click事件阻止掉。

- 事件发生顺序：在移动端，手指点击一个元素，会经过：touchstart --> touchmove -> touchend --》click。
### 手机端的web，怎么调用手机的拍照功能，怎么分享到朋友圈?
## websocket
## git 
团队工作

## 算法
### 二分查找

### 快速排序

### 线性顺序存储结构和链式存储结构

### CommonJS、RequireJS(AMD) SeaJS（CMD）区别

