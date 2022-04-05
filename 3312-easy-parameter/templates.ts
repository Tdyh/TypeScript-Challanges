type MyParameters<T extends (...args: any[]) => any> = T;
const foo = (arg1: string, arg2: number): void => {};
type myfoo = MyParameters<typeof foo>;
