type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type myConcat = Concat<[4, 5, 6], [1, 2, 3]>;

// js 中的扩展也能在type运算中使用
