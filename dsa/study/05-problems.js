const fizzBuzz = (n) => {
  for(let i=1; i <= n; i++) {
    if( i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if( i%3 === 0) {
      console.log("Fizz");
    } else if( i%5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(31);
//***************************************** */
const maxprofit = (prices) => {
  let minPrice = prices[0];
  let maxprofit = 0;

  for(let i = 1; i< prices.length; i++) {
    const currentPrices = prices[i];
    minPrice = Math.min(minPrice,currentPrices)
    const potentialPrice = currentPrices - minPrice;
    maxprofit = Math.max(maxprofit, potentialPrice);
  }
  return maxprofit;
}

const prices = [7,1,5,3,6,4]
// console.log(maxprofit(prices));
//********************************************** */

const chunk = (array,size) => {
  const chunked = [];
  let index = 0;

  while(index < array.length) {
    const chunk = array.slice(index, index + size);
    // console.log(chunk);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
}

// console.log(chunk([1,2,3,4,5,6,7,8],3));

//********************************************** */

function twoSums(nums, target) {
  for(let i=0; i< nums.length; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i,j];
      }
    }
  }
  return [];
}

const res = twoSums([2,7,11,15],9);
const res2 = twoSums([1,3,7,9,2],11)
console.log(res);
console.log(res2);