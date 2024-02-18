# 控制台打印

## 普通打印

```js
const { log, warn, error, linelog } = require('devby');
```

## 单行打印

> 0.5.0 新增

```js
const { linelog } = require("devby");

linelog(txt);
```

## 进度打印

> 0.5.0 新增

```js
const { process } = require("devby");

process(percentum, txt);
```