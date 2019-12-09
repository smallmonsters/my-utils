* 描述
>为js提供四则运算四舍五入方法，解决js运算时精度问题

* 使用
```JavaScript
// 初始化
const operation=new Operation(9,3)
// 相加、减、乘、除
operation.add()// 12
operation.sub()// 6
operation.mul()// 27
operation.divide()// 27
// 相加、减、乘、除并保留两位小数
operation.add(2)// 12.00
operation.sub(2)// 6.00
operation.mul(2)// 27.00
operation.divide(2)// 27.00
// 四舍五入
operation.toFixed(1.985,2)// 1.99
```