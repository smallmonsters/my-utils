* 描述

> 实现节流和防抖功能

* 使用

``` JavaScript
// callbak 回调函数，delay 时间间隔
let limitfn = new LimitFn(callbak, delay)
// 生成一个节流函数
let throttle = limitfn.throttleFn()
// 生成一个防抖函数
let debounce = limitfn.debounceFn()
// 向callback传递一个参数
throttle(arg)
debounce(arg)
```

* eg

``` JavaScript
....
<button id="btn">节流</button>
<button id="btn1">防抖</button>
....
 function a(a) {
     console.log(a)
 }

 let limitfn = new LimitFn(a, 1000).throttleFn()
 let limitfn1 = new LimitFn(a, 1000).debounceFn()

 document.getElementById("btn").onclick = function() {
     limitfn(12131231)
 }
 document.getElementById("btn1").onclick = function() {
     limitfn1(111111111111)
 }
```

