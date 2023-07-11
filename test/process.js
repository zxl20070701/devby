const devby = require('../index');
const animation = require('vislite').animation;

animation(function (deep) {
    devby.process(deep * 100, "完成进度：" + (deep * 100).toFixed(2) + "%");
}, 10000);