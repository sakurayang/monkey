function random(input, long, output, result) {
    reset(input, output, result);
    let _random = Math.random();
    console.log(_random);
    let random_number = Math.trunc(Math.pow(10, long) * _random);
    let full_number = (String(random_number).length < long) ? String(random_number).padEnd(long, "2986565178") : random_number;
    input.value = full_number;
}

function reset(input, output, result) {
    input.value = '';
    output.innerHTML = '';
    result.innerHTML = '';
    localStorage.count = 0;
    localStorage.number = "";
    //console.clear()
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //不含最大值，含最小值
}

function sort(number, output, result) {
    (localStorage.count == 0) ? result.innerHTML = `正确顺序：${(String(number).split('')).sort((a,b)=>a-b)}`: false;
    localStorage.number = (localStorage.number) ? localStorage.number : number;
    if (!Number.isInteger(Number(number)) || number == '') return alert("请输入正确的数字");
    let _number = (localStorage.number) ? String(localStorage.number).split('') : String(number).split(''); // exp: 9123 =>['9','1','2','3']
    let sort_number = _number; //copy
    sort_number.sort((a, b) => a - b); //['9','1','2','3'] => ['1','2','3','9']
    localStorage.count = localStorage.count ? Number(localStorage.count) + 1 : 1; //init counter
    _monkey = monkey(_number);
    //_monkey.pop();
    if (equar(_monkey, sort_number)) {
        localStorage.count = 0;
        localStorage.number = "";
        return insert(`<span style="background-color:yellow;color:black;font-size:25px;">[${localStorage.count}] ${_monkey}</span>`, output);
    } else {
        insert(`[${localStorage.count}] ${_monkey}`, output);
    }
}

function monkey(array) {
    if (!array) throw alert('请检查输入');
    let monkey = [...array];
    let _monkey = [];
    for (let index = 0, len = array.length; index <= len; index++) {
        if (_monkey[index]) continue;
        let i = getRandomInt(0, monkey.length);
        //console.log(_monkey)
        _monkey.push(monkey.splice(i, 1)[0]);
    }
    _monkey.pop();
    return _monkey;
}

function insert(text, node) {
    let result = document.createElement('div');
    result.className = 'result';
    result.innerHTML = `[${(new Date()).toTimeString().slice(0,8)}] ${text}`
    node.insertBefore(result, node.firstChild);
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