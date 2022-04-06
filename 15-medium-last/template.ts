type Last<T extends any[]> = T extends [...infer pre, infer Lastone] ? Lastone : never;
// 这题跟16-medium-pop    14 easy-first   很类似
interface HAHA {
  size: number;
}

interface HAHA {
  color: string;
}

// 重复写
const myhaha: HAHA = {
  size: 234,
  color: '1234',
};
