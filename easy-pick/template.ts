// type MyPick<T, K> = any     
type MyPick<T, K extends keyof T> = {
  [keys in K]: T[keys];
};

