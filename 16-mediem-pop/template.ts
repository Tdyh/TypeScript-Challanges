type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? [...Rest] : never;
//  跟14  easy-first 很类似 回头去看看之前的  怎么操作元素
//  infer 是你跟编辑器交流的回合  比如你告诉他 虽然我现在不知道这是什么东西，
//但是我希望你知道之后回头告诉我一声这个元素的值   就你懂我意思把
