import { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
// 字面量类型  as const

const r = typeof tuple;
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

type Style = 'bold' | 'something' | 'number';
let myStyle: Style;

myStyle = 'bold';
