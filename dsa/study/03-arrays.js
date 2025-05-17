const stringArr = ["a","b","c","d"];
const numArr = [1,2,3,4,5];
const bollArr = [true, false];
const mixedArr = ["a",2,true,undefined,null, {a : "a"},["b",3,4]];

// console.log(mixedArr);

// Custom Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
   return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1]
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];
    for(let i = 0; i <this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    const item = this.data[index];
    for(let i = index; i< this.length-1; i++) {
      this.data[i] = this.data[i+1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

}

const myNewArray = new MyArray();

myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");
myNewArray.push("strawberry");
// myNewArray.pop();
// myNewArray.shift();
// console.log(myNewArray.get(1));
// console.log(myNewArray.shift());
// console.log(myNewArray);
// console.log(myNewArray.deleteByIndex(3));
// console.log(myNewArray);


const candles2 = [18,90,90, 13, 90, 75, 90, 8, 90, 43]

function birthdayCakeCandles(candles) {
  let maxCandle = candles[0];
  let count = 0;
  
  for(let i = 0; i< candles.length; i++) {
      if(candles[i] > maxCandle) {
          maxCandle = candles[i];
          count = 1;
      }
      if(candles[i] === maxCandle) {
          count ++;
      }
  }
  console.log("count",count);
}

birthdayCakeCandles(candles2)


