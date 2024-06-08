# 网络请求（ajax）

## GET

> 0.5.0 新增

```js
const { get } = require("devby");

get(url, {
    json?: boolean
}).then(data => {
    // todo
});
```

## POST

> 0.5.0 新增

```js
const { post } = require("devby");

post(url, {
    json?: boolean
    header?: {} // 请求头，0.6.1 新增
    params?: "" // 请求参数，0.6.1 新增
}).then(data => {
    // todo
});
```

