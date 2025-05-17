var compose = function(functions) {
    
  return function(x) {
      let result = x;
      // console.log("result",result);
      for(let i = functions.length - 1; i >= 0; i--) {
        // console.log("djncd",functions[i].toString());
          result = functions[i](result);
          // console.log("result in fn",result);
      }
      return result;
  }
};


// var functions = [x => x + 1, x => x * x, x => 2 * x]
// var x = 4;

// compose()

const fn1 = x => x + 1;
const fn2 = x => x * 2;
const fn3 = x => x - 3;

const composed = compose([fn1, fn2, fn3]);
// console.log(composed(5));

function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}

const multiplyBy3 = multiplyBy(2);
// console.log(multiplyBy3.toString());
// console.log(multiplyBy3(5)); 

function doSomething() {
  // console.log("******",this);
}
   
doSomething();

//****************************** */

function computeSum(arr){
  if(arr.length === 1){
    return arr[0];
  }
  else{
    return arr.pop() + computeSum(arr);
  }
}
// console.log(computeSum([7, 8, 9, 99]));
//***************************************** */
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 8; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}