function bubbleSort(arr) {
  for(let i = arr.length - 1; i> 0; i--) {
    for(let j=0; j< i; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for(let j= i+1; j > arr.length; j++) {
      // if(arr[j] > arr[j+1]) {
      //   let temp = arr[j];
      //   arr[j] = arr[j+1];
      //   arr[j+1] = temp
      // }
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

function insertionSort(arr) {
  for(let i = 1; i <arr.length; i++) {
    let key = arr[i];
    let j = i-1;

    while(j >= 0 & arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while( i< arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++
    }
  }
  result.push(...arr1.slice(i));
  result.push(...arr2.slice(j));

  return result;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0,middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left),mergeSort(right));
}

const myArr = [4,2,6,1,7,3]

const bubble = bubbleSort(myArr);
console.log(bubble);

const selection = selectionSort(myArr);
console.log(selection);

const insertion = insertionSort(myArr);
console.log(insertion);


const mergearr = merge([3,27,38,43],[9,10,17,82]);
console.log(mergearr);

const mergeSortarr = mergeSort([4,8,97,56,2,5,3,87,78]);
console.log(mergeSortarr);