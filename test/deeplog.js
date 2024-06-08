const devby = require('../src/index');
const animation = require('vislite').animation;

animation(function (deep) {
    devby.deeplog(deep * 100, "完成进度：" + (deep * 100).toFixed(2) + "%");
}, 10000);