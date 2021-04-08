const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomInt(min, max) {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min)) + _min;
}

function sort(array) {
    if (!array || array.length === 0 || !array instanceof Array) throw new Error("请检查输入");
    let origin_array = [...array];
    let length = origin_array.length;
    let sorted_array = new Array(length);

    for (let index = 0; index < length; index++) {
        if (!isNaN(sorted_array[index])) continue;
        let position = getRandomInt(0,origin_array.length);
        let insert_element = origin_array.splice(position,1)[0];
        sorted_array[index] = insert_element;
    }

    return sorted_array;
}

let monkey_alphabet = () => sort(ALPHABET).join("");

function equal(a, b) {
    if (a.length !== b.length) {
        return false
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}

module.exports = {sort, alphabet: monkey_alphabet};
