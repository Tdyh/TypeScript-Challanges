type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
// keyof -> array  you will get the index of that array
type r = TupleToObject<typeof tuple>;
