type AnyOf<T extends readonly any[], I = T[number]> = I extends any ? (I extends Falsy ? false : true) : false;
// try first commit again
// second wanna recover the first one
// type ToArray<Type> = Type extends any ? Type[] : never;
// const mystring949: string = '234';

type myArray = AnyOf<string[] | number[] | object[]>;
// type MyToArray = ToArray<['234', 'sdf']>;
let myUndefined: undefined;

let AAny: any = 234;
myUndefined = AAny;
let x = 10;
x = myUndefined;
myUndefined = AAny;
type mytype = typeof x;