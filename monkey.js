function random(input, long, output) {
    reset(input, output);
    let _random = Math.random();
    console.log(_random);
    let random_number = Math.trunc(Math.pow(10, long) * _random);
    let full_number = (String(random_number).length < long) ? String(random_number).padEnd(long, "2986565178") : random_number;
    input.value = full_number;
}

function reset(input, output) {
    input.value = '';
    output.innerHTML = '';
    localStorage.count = 0
    //console.clear()
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //不含最大值，含最小值
}

function sort(number, output) {
    (localStorage.count == 0) ? insert(`正确顺序：${(String(number).split('')).sort((a,b)=>a-b)}`, output): false;
    if (!Number.isInteger(Number(number)) || number == '') return alert("请输入正确的数字");
    let _number = String(number).split(''); // exp: 9123 =>['9','1','2','3']
    let sort_number = _number; //copy
    sort_number.sort((a, b) => a - b); //['9','1','2','3'] => ['1','2','3','9']
    localStorage.count = localStorage.count ? Number(localStorage.count) + 1 : 1; //init counter
    _monkey = monkey(_number);
    //_monkey.pop();
    insert(`[${localStorage.count}] ${_monkey}`, output);
    if (_monkey.toString() == sort_number.toString()) return insert('done', output);
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
    _monkey.pop();
    return _monkey;
}

function insert(text, node) {
    let result = document.createElement('div');
    result.className = 'result';
    result.innerHTML = `[${(new Date()).toTimeString().slice(0,8)}] ${text}`
    node.appendChild(result);
}

function equar(a, b) {
    // 判断数组的长度
    if (a.length !== b.length) {
        return false
    } else {
        // 循环遍历数组的值进行比较
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}