
// O(n)
const groceries = ['egg','milk','flour','sugar'];

const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if(groceries[i] === item) {
      console.log(`Found : ${item}`);
    }
  }
}

searchForItem('flour');

// O(1)
const numbers = [1,2,3,4,5]

const getElement= (arr,index) => {
  return arr[index]
};

console.log(getElement(numbers, 0));

// O(n^2)

function findPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j<arr.length; j++) {
      console.log(`pair : ${arr[i]},${arr[j]}`);
    }
  }
}

const numbers1 = [1,2,3,4,5]
findPairs(numbers1);

//O(log n)