// 函数定义
function add1 (x: number, y: number) {
  return x + y
}

let add2: (x: number, y: number) => number
type add3 = (x: number, y: number) => number

interface add4 {
  (x: number, y: number): number
}
