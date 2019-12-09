//负数的四舍五入为：保留2位：-0.985===》-0.97

const Operation = function (a, b) {
  this.a = a || 0
  this.b = b || 0
  this.pow = 0
  this.result = null
  // 将一个浮点数转成整数
  function toInteger() {
    const aStr = this.a.toString()
    const bStr = this.b.toString()
    const len1 = aStr.split(".")[1] ? aStr.split(".")[1].length : 0
    const len2 = bStr.split(".")[1] ? bStr.split(".")[1].length : 0
    this.pow = Math.max(len1, len2)
    this.a = this.a * Math.pow(10, this.pow)
    this.b = this.b * Math.pow(10, this.pow)
  }
  this.toFixed = function (number, fixed) {
    const str = number.toString()
    const len = str.split(".")[1] ? str.split(".")[1].length : 0
    const mul = Math.pow(10, fixed)
    if (len <= fixed) {
      this.result = number.toFixed(fixed)
      return this.result
    }
    // 将原数扩大fixed倍，并以.拆分为数组
    let arr = (number * mul).toString().split(".")
    // 五入
    if (arr[1][0] > 4) arr[0] = (Number(arr[0]) + 1)
    this.result = (arr[0] / mul).toFixed(fixed)
    return this.result
  }
  // 加
  this.add = function (fixed = 0) {
    toInteger.call(this)
    this.result = (this.a + this.b) / Math.pow(10, this.pow)
    if (fixed === 0) return this.result
    return this.toFixed(this.result, fixed)
  }
  // 减
  this.sub = function (fixed = 0) {
    toInteger.call(this)
    this.result = (this.a - this.b) / Math.pow(10, this.pow)
    if (fixed === 0) return this.result
    return this.toFixed(this.result, fixed)
  }
  // 乘
  this.mul = function (fixed = 0) {
    toInteger.call(this)
    this.result = (this.a * this.b) / Math.pow(10, this.pow + this.pow)
    if (fixed === 0) return this.result
    return this.toFixed(this.result, fixed)
  }
  // 除
  this.divide = function (fixed = 0) {
    toInteger.call(this)
    this.result = this.a / this.b
    if (fixed === 0) return this.result
    return this.toFixed(this.result, fixed)
  }
}
export default Operation;