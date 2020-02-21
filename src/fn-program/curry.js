const curry = function (fn) {
  let args = Array.prototype.slice.apply(arguments).slice(1)
  let len = fn.length
  return function f() {
    let _args = args.slice(0)
    _args.push(...Array.prototype.slice.apply(arguments))
    if (_args.length < len) {
      return curry(fn, ..._args)
    } else {
      return fn(..._args)
    }
  }
}
export default curry;
