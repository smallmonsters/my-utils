function LimitFn(callback, delay = 1000) {
  this.callback = callback
  this.delay = delay
  this.id = null
  this.first = null
  this.secend = null
}
// 是否在周期里
LimitFn.prototype.isRight = function () {
  return this.first + this.delay > this.secend
}
LimitFn.prototype.reset = function (arg) {
  if (this.id) clearTimeout(this.id)
  this.first = new Date().getTime()
  this.id = setTimeout(() => {
    this.callback(arg)
  }, this.delay);
}
// 函数节流
LimitFn.prototype.throttleFn = function () {
  const fn = (arg) => this.reset(arg)
  return fn
}

// 函数防抖
LimitFn.prototype.debounceFn = function () {
  const fn = (arg) => {
    // 第一次触发事件，记录时间戳
    if (!this.first) return this.reset(arg)
    // 在次触发事件
    this.secend = new Date().getTime()
    // 在周期内，什么都不做
    if (this.isRight()) return
    this.reset(arg)
  }
  return fn
}
