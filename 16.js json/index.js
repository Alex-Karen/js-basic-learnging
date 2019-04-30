// 按需加载js文件
function loadScript(url, callback) {
    var srcipt = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == 'complete' || script.readyState == 'loaded') {
                callback();
            }
        }
    } else {
        script.onload = function () {
            callback();
        }
    }
    script.src = url;
    document.body.appendChild(script);
}
// loadScript('demo.js', function() {
//     callback();
// })
console.log(document.readyState)