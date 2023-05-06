var fixedEl = document.getElementById("fixed");
var docEl = document.getElementById('content');

var index;

// 分析代码
var preEls = docEl.getElementsByTagName('pre');
for (index = 0; index < preEls.length; index++) {
    preEls[index].innerHTML = preEls[index].innerHTML.trim();
}

// 分析fixed
var els = docEl.children;
fixedEl.innerHTML = "<h1>导航</h1>";
for (index = 0; index < els.length; index++) {
    (function (index) {

        if (["H2", "H3", "H4"].indexOf(els[index].nodeName) > -1) {

            var fixedItemEl = document.createElement(els[index].nodeName);
            fixedEl.appendChild(fixedItemEl);
            fixedItemEl.innerHTML = els[index].innerHTML;
            fixedItemEl.addEventListener('click', function () {

                var offsetTop = els[index].offsetTop;
                var currentScrollTop = docEl.scrollTop || 0;

                VISLite_animation(function (deep) {
                    docEl.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
                }, 500, function () {
                    docEl.scrollTop = offsetTop;
                });

            });

        }
    })(index);
}