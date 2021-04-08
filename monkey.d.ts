// get a random int between min and max but not include max
declare function getRandomInt(min:number, max:number):number;

// return an monkey sort array from input
declare function sort(array:Array<T>):Array<T>;

declare function monkey_alphabet():string;

// a util function use to compare two array
declare function equal(a:Array<T>, b:Array<T>):boolean;

export default {
  sort,
  alphabet: monkey_alphabet
}
