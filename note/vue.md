# vue 响应式原理

## 响应式是什么?

- model 和 view 绑定，更新 model,view 上的显示的数据也随之变动
- model 和 view 绑定，更新 model,view 上的 dom 结构也会变化

## 原理(双向数据绑定原理)

使用 Object.defineProperty 追踪相关依赖，当属性被访问、追踪的时候，通知相关变化。

当一个 Vue 实例创建时，vue 会遍历 data 选项的属性，用 Object.defineProperty 将它们转为 getter/setter 并且在内部追踪相关依赖，在属性被访问和修改时通知变化。

每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

## 解决数据更新但是视图没有更新的问题

由于 JavaScript 的限制，Vue 不能检测以下变动的数组：

1. 当你利用索引直接设置一个项时，例如：`vm.items[indexOfItem] = newValue`
2. 当你修改数组的长度时，例如：`vm.items.length = newLength`

解决方法

```js
// 更新值
addObjB () {
  // this.obj.b = 'obj.b'
  this.$set(this.obj, 'b', 'obj.b')
  // this.arr[2] = 3;
  this.$set(this.arr, 2, 3);
}
// 更新长度
this.arr.splice(newLength);
```

# vue 与 react、angular 的区别

版本在不断更新，以下的区别有可能不是很正确。我工作中只用到 vue，对 angular 和 react 不怎么熟）

1.与 AngularJS 的区别
相同点:都支持双向数据绑定、过滤器、指令；都不支持低端浏览器。

不同点：

- AngularJS 的学习成本高，Vue.js 本身提供的 API 都比较简单、直观；
- 在性能上，AngularJS 依赖对数据做脏检查，所以 Watcher 越多越慢；Vue.js 使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。

2. 与 react 的区别

相同点:

- 采用 JSX 语法，需要编译后使用
- 中心思想相等：一切都是组件，组件之间可以乔涛
- 都提供钩子函数
- 不提供内置的 ajax,route 等核心功能包，而是以插件的方式去加载
- 都支持 mixins 特性

不同点:

React 采用的 Virtual DOM 会对渲染出来的结果做脏检查；Vue.js 在模板中提供了指令，过滤器等，可以非常方便，快捷地操作 Virtual DOM。

# 指令

- 常用指令:v-bind、v-for、v-on（事件监听器）、v-if、v-show、v-model

  自定义指令

# vue 的核心

响应式的数据绑定和组件系统

# 生命函数钩子

- beforeCreate/created:beforeCreate 的时候 el 和 data 都未开始初始化;created 的时候 data 初始化了，而 el 还没有
- beforeMount/mounted:beforeMount 的时候，完成了 el 和 data 的初始化，但挂载的是相关的虚拟 dom；mounted 完成挂载,将实例挂载在 DOM 上。
- beforeUpdate/updated:当 data 变化时，会触发 beforeUpdate 和 updated 方法。
- beforeDestory 和 destory:在执行 destroy 方法后，对 data 的改变不会再触发周期函数，说明此时 vue 实例已经解除了事件监听以及和 dom 的绑定，但是 dom 结构依然存在
- **第一次页面加载会触发哪几个钩子**：beforeCreate、created、beforeMount,mounted
- **DOM 渲染在哪个周期就已经完成**：mounted
- 注意：不要在属性或回调上使用箭头函数，因为箭头函数没有 this,this 会作为变量一直向上级此法作用域查找，直至找到为止。

# vue 常用的修饰符

- .prevent: 提交事件不再重载页面；event.preventDefault()

- .stop: 阻止单击事件冒泡；

- .self: 当事件发生在该元素本身而不是子元素的时候会触发；
- .capture: 事件侦听，事件发生的时候会调用
- .once:事件只触发一次
- .enter:按键修饰符

# 计算属性与方法的区别

计算属性是响应式依赖进行缓存的。即:如果计算属性中没有 data 中的属性，那么 computed 不会自动更新，而函数会。

# 监听器

```js
watch:{
    test(newV, oldV){
        //...
    }
}
```

# v-if 与 v-show 的区别

v-show 仅仅控制元素的显示方式，将 display 属性在 block 和 none 来回切换；而 v-if 会控制这个 DOM 节点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用 v-show 会更加节省性能上的开销；当只需要一次显示或隐藏时，使用 v-if 更加合理。

# key 的作用

Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。这 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 `key` 属性即可。

当 Vue.js 用 `v-for` 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。这个类似 Vue 1.x 的 `track-by="$index"` 。

这个默认的模式是高效的，但是**只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` 属性

# v-model 修饰符

- .lazy:转变为使用 `change` 事件进行同步
- .number:自动将用户的输入值转为数值类型
- .trim:自动过滤用户输入的首尾空白字符

# 组件中的 data 为什么必须是一个函数

每个组件都是 Vue 的实例。组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变其中一个会影响其他。

# 父子组件通信与非父子组件之间的通信

1. 父组件传给子组件:通过 prop 的方式向子组件传递数据
2. 子组件传给父组件:\$emit 方式传递参数

3. 非父子组件间的数据传递，兄弟组件传值:使用 vuex/eventBus

# slot

插槽，用于在子组件指定地方替换文本

```javascript
//	简单
<slot></slot> // 之间调用子组件使用即可

//	指定位置
<slot name="header"></slot>
<slot name="footer"></slot> // 调用必须指定name,如下
```

# 一个组件重复使用怎么办?

使用 webpack 注册为全局组件

# props 验证有哪些方式

```javascript
props:{
    sex:Boolean, //类型
    default:'男', // 默认值
    validator(value){
        return ['男','女'].indexOf(value)!==-1 // 必须返回数组中的字符串一个
    }

    // 对象的默认值必须用函数表示
    default:function(){
        return {message:'hello'}
    }
}
```
