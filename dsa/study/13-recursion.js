function countDown(number) {
  if(number === 0) {
    return;
  }
  // console.log(number);
  countDown(number - 1);
}
countDown(5);

function factoRec(number) {
  if(number == 0 || number == 1) {
    return 1;
  }
  return number * factoRec(number-1);
}

console.log(factoRec(5));

function facto(number) {
  let result = 1;
  for(let i=2; i<= number; i++) {
    result = result*i
  }
  return result;
}

console.log(facto(5));

//********************************************** */


