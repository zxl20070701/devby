# 文件解析Loader

> 0.7.0 新增

## simpleScss 

scss文件转css（只支持部分scss语法）

```js
const { simpleScss } = require("devby");

let cssCode = simpleScss(source);
```

## xhtml

xhtml文件解析成json对象

```js
const { xhtml } = require("devby");

let domTree = xhtml(source);
```