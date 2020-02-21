const compose = function () {
  let args = Array.prototype.slice.apply(arguments)
  let len = args.length
  let index = len - 1
  let result
  return function f(arg) {
    result = args[index](arg)
    index--
    if (index >= 0) f(result)
    return result
  }
}
// function compose(...args) {
//   let length = args.length
//   let count = length - 1
//   let result
//   return function f1(...arg1) {
//     result = args[count].apply(this, arg1)
//     if (count <= 0) {
//       count = length - 1
//       return result
//     }
//     count--
//     return f1.call(null, result)
//   }
// }
export default compose