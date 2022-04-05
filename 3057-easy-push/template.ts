//type Push<T extends unknown[], U> = U extends any[] ? [...T, ...U] : [...T, U];   not working
//type Push<T extends unknown[], U> = [...T, U];

type Push<T extends any[], U> = [...T, U];
type myPush = Push<[1, 2, 3], [4, 5, 6]>;
type muBoolean = Push<['1', 2, '3'], boolean>;
let AnyType: any = 234;
let Unknwon: unknown = 10;

let myString: string = '234';

myString = AnyType;
let xxxx: any = Unknwon;
typeof myString;

// Much like any, any value is assignable to unknown; however,
// unlike any, you cannot access any properties on values with the type unknown,
// nor can you call / construct them.
// Furthermore, values of type unknown can only be assigned to unknown or any.
