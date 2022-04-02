type Length<T extends readonly any[]> = T['length'];
//  如果你 typeof 了一个字面量   as const 的这种  那么
//  like this
// const tesla = ['tesla', 'model 3']
// type t1 = typeof tesla
// 这个t1 会变成  readonly
