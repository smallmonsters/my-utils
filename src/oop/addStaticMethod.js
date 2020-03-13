function addStaticMethod(constructor, name, method) {
  constructor[name] = constructor.prototype[name] = method.bind(constructor)
}
export { addStaticMethod }