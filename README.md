# 猴子排序

无聊时候的小玩意

所谓猴子排序，就是根据实验“猴子打字机”衍生而来的

> 猴子打字机：一只猴子在打字机上随便按，敲出哈姆雷特的概率是多少

猴子排序，就是猴子往格子里面随便放东西，最后看看排出来的结果如何

主要思想就是从一个数组随机取得一个元素按顺序放进另一个数组

## 使用方法

```bash
yarn add monkey-sort
# or
npm install monkey-sort
```

### 基础用法

```javascript
const monkey = require("monkey-sort");

let array = [1,2,3,4,5,6,7];

let suffle_array = monkey.sort(array);
console.log(suffle_array);

let alphabet = monkey.alphabet();
console.log(alphabet);
```

## API

- `monkey.sort(Array<T>)`
  
  参数： Array
  
  返回： 乱序后的 Array
  
- `monkey.alphabet()`
  
  返回一个 26 个字母的乱序字母表