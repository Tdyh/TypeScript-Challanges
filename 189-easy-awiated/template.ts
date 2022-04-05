//type MyAwaited<T extends Promise<U>> = T extends Promise<infer R> ? MyAwaited<R> : T;
// type MyAwaited<P extends Promise<any>> = P extends Promise<infer T>
//     ? (T extends Promise<any> ? MyAwaited<T> : T)
//     : never;

type MyAwaited<T extends Promise<any>> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : P
  : never;

// 全靠三目运算符  完成各种if 语句 最上面内种错误的原因是因为最后一次 的条件不满足  学到了！！！
type myX = Promise<Promise<string>>;

type testforawited = MyAwaited<myX>;
