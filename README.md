# A-Keyboard
A-Keyboard是一个小型的 JavaScript 虚拟键盘。

访问 A-Keyboard Github Demo 网站查看在线 [键盘](https://18510047382.github.io/A-Keyboard/test/index.html)、[数字键盘](https://18510047382.github.io/A-Keyboard/test/index.number.html) Demo。

## 生态系统
### QQ 群
欢迎加入我们的官方 QQ 群！

<img src='https://raw.githubusercontent.com/18510047382/A-Keyboard/master/img/qq.png' height='200px'>

### 图片
**Default:**

<img src='https://raw.githubusercontent.com/18510047382/A-Keyboard/master/img/default.png' height='130px'>

**Classic:**

<img src='https://raw.githubusercontent.com/18510047382/A-Keyboard/master/img/classic.png' height='130px'>

**Dark:**

<img src='https://raw.githubusercontent.com/18510047382/A-Keyboard/master/img/dark.png' height='130px'>

**GrassGreen:**

<img src='https://raw.githubusercontent.com/18510047382/A-Keyboard/master/img/grassGreen.png' height='130px'>

**Default数字键盘:**

<img src='https://raw.githubusercontent.com/18510047382/A-Keyboard/master/img/default-num.png' height='130px'>

**Classic数字键盘:**

<img src='https://raw.githubusercontent.com/18510047382/A-Keyboard/master/img/classic-num.png' height='130px'>

**Dark数字键盘:**

<img src='https://raw.githubusercontent.com/18510047382/A-Keyboard/master/img/dark-num.png' height='130px'>

**GrassGreen数字键盘:**

<img src='https://raw.githubusercontent.com/18510047382/A-Keyboard/master/img/grassGreen-num.png' height='130px'>

## 安装
首先导入 CSS 文件：
```html
<link rel="stylesheet" href="css/index.css">
```

你也可以使用 CDN：
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/akeyboard@version/css/index.css">
```

**之后你需要导入 JS 文件：**

### 使用 `<script>` 引入
```html
<script src="index.js"></script>
```

#### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/akeyboard@version/index.js"></script>
```

### NPM
构建大型项目推荐使用 NPM 安装：
```shell
$ npm i akeyboard
```

## 使用
**如果你对使用有任何问题，请查看 *test* 文件夹中的 html 文件，里面有用例。**

导入 JS 和 CSS 文件后你就可以通过以下方式渲染一个虚拟键盘，我们提供了 2 种虚拟键盘 **普通键盘** 和 **数字键盘**：
```javascript
// 渲染普通键盘
const keyboard = new aKeyboard.keyboard({
    el: '#main', // 元素选择器名称
    style: { // 设置自定义样式
        margin: 'auto'
    },
    fixedBottomCenter: true // 将键盘自动固定到底部，并设置 width100%
})

// 渲染数字键盘
const keyboard = new aKeyboard.numberKeyboard({
    el: '#main'
})
```

`keyboard` 类提供了 2 个函数，分别为 `inputOn` 和 `onclick`：
```javascript
//用来设置输入目标元素，设置之后用户点击键盘上的按键就可以输入内容了
keyboard.inputOn(目标元素选择器, 目标元素输入类型（value、innerHTML、innerText）);

//用来设置按键点击事件（会覆盖默认事件）
keyboard.onclick(按键名称, 事件函数);
```

### 模板
你可以通过修改 CSS 文件的方式创建你的专属模板，我们默认为你提供了 index，index-classic，index-dark，index-grassGreen 这几个模板：
```html
<link rel="stylesheet" href="css/index-classic.css">
```
