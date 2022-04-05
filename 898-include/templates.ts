type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

type Includes<T extends readonly unknown[], U> = T extends [infer First, ...infer Rest]
  ? Equals<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
///  wuwuwuwu   我是肥物
