type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// keyof 用来遍历查看T中的各种属性
// 一个调试小技巧
interface x {
  a: string;
  b: string;
  c: number;
}
type xType = keyof x;
const toCheck: xType = 'a'; // 你输入一个引号 然后vscode就会提示你 有  a  b c 三总类型了

// {
//   title: string;
//   description: string;
//   completed: boolean;
//   meta: {
//     author: string;
//   };
// }
