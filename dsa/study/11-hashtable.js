class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    let sum = 0;

    const PRIME_NUMBER = 31;

    for(let i=0; i< Math.min(key.length, 100); i++) {
      const charcode = key.charCodeAt(0) - 96;
      sum = (sum * PRIME_NUMBER + charcode ) % this.keyMap.length;
    }
    return sum;
  }

  set(key, value) {
    const index = this._hashFunction(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key,value])
    return this;
  }

  get(key) {
    const index = this._hashFunction(key);
    if(this.keyMap[index]) {
      for(let i = 0; i< this.keyMap[index].length; i++) {
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i=0; i< this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j=0; j<this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0])
        }
      }
    }
    return keys;
  }

  getAllValues () {
    const values = [];
    for (let i=0; i< this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j=0; j<this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1])
        }
      }
    }
    return values;
  }
}

const phoneBook = new HashTable();

phoneBook.set("john", "555-444-333");
phoneBook.set("cena", "666-555-444");
// console.log(phoneBook.get("john"))
// console.log(phoneBook.getAllKeys());
// console.log(phoneBook.getAllValues());

//**************************************** */
const text = "Hello my name name name is shri";

function wordCounter(text) {
  // const lowerText = text.toLowerCase();
  const lowerText = text.toLowerCase();

  const wordMap = {};
  const words = lowerText.split(/\s+/);
  // const words2 = lowerText.split(" ")
  // console.log(words2);
  for(const word of words) {
    if(word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1
    }
  }
  return wordMap
}

// console.log(wordCounter(text));

//*************************************** */

function twoSums(nums, target) {
  // for(let i=0; i< nums.length; i++) {
  //   for (let j=i+1; j<nums.length; j++) {
  //     if(nums[i] + nums[j] === target) {
  //       return [i,j];
  //     }
  //   }
  // }
  // return [];

  const numMap= {};
  for(let i=0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if(compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment],i]
    }
    numMap [nums[i]] = i;
  }
  return [];
}

const res = twoSums([2,7,11,15],9);
// const res2 = twoSums([1,3,7,9,2],11)
console.log(res);
// console.log(res2);


