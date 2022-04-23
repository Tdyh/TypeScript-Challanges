//type First<T extends any[]> = T extends [] ? never : T[0];

//type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

//type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

type First<T extends any[]> = T extends [infer First, ...infer Rest] ? T[0] : never;
//  第四种就是相当于 js 的解构赋值
// const [first, ...rest] = arr
// return first ? first : never
type xx = First<[]>;
type arges = [1, 2, 3, 4];
type sss = arges[number];
type myss = arges[0]
// 查看某个值 是不是在一个union 类型中的方法
type check = 1 extends arges[number] ? 'true' : 'false';

// 1. extends  类型条件判断
// 2. 获取tuple 的length 属性
// 3. extends union 的判断规则
// 4. inter 的使用
//
