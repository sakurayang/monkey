# 猴子排序

[血统测验](https://bkwhentai.top/monkey/index.html)

无聊时候的小玩意

所谓猴子排序，就是根据实验“猴子打字机”衍生而来的

> 猴子打字机：一只猴子在打字机上随便按，敲出哈姆雷特的概率是多少

猴子排序，就是猴子往格子里面随便放东西，最后看看排出来的结果如何

`monkey(Array<Number>)` 猴子排序主算法

```Javascript
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //不含最大值，含最小值
}

function monkey(array) {
    if (!array) throw alert('请检查输入');
    let monkey = array;
    let _monkey = [];
    for (let index = 0, len = array.length; index <= len; index++) {
        if (_monkey[index]) continue;
        let i = getRandomInt(0, monkey.length);
        console.log(_monkey)
        _monkey.push(monkey.splice(i, 1)[0]);
    }
    _monkey.pop();//因为多循环了一次以便控制台输出
    return _monkey;
}
```

主要思想就是从一个数组随机取得一个元素按顺序放进另一个数组

看谁比较欧~~