interface Fn {
  (fixed?: number): number | string
}
// 实例方法 
export interface OperationInterface {
  sub:Fn;
  divide:Fn;
  add:Fn;
  mul:Fn;
  toFixed(number:number,fixed:number): string ;
}
export interface OperationConstructor {
  new(a?: number, b?: number): OperationInterface
}