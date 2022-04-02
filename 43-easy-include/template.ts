type MyExclude<T, U> = T extends U ? never : T;
//   extends 在双 union 的时候 是双重for 循环 大概酱紫
//   不是每次的三元运算符都要返回true  false   你要啥返回啥  这时候T 变成了每一次遍历的参数你懂我意思把
