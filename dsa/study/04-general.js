//********************************************** */
// reverse string
function reverseStringFunction(str) {
  let reverse='';
  for(let i=str.length-1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

const result = reverseStringFunction("Hi");

// console.log(result);

const makeAnArray = (str) => {
  return str.split("");
}
// console.log(makeAnArray("Hello World!"));


const reverseArray = (str) => {
  return str.split("").reverse()
}
// console.log(reverseArray("Reverse Array"));

const reverseString = (str) => {
  return str.split("").reverse().join("");
}
// console.log(reverseString("Reverse string"));

//*********************************************************** */
//Palindrome

function checkPalindrome(str) {
  for(let i = 0; i< str.length / 2; i++) {
    if(str[i] !== str[str.length - 1 -i]) {
      return false;
    }
  }
  return true;
}
// console.log(checkPalindrome("abbav"));

const isPalindrome = (str) => {
  return str.split('').reverse().join('') === str;
}
// console.log(isPalindrome("ababababa"));
//*************************************************** */
// reverse integer.
const reverseInt = (n) => {
  const reversedInt = n.toString().split("").reverse().join("");
  return parseInt(reversedInt) * Math.sign(n);
}

// console.log(reverseInt(-12345));

//*********************************************** */
// Capital first letter in string 

const capitalize = (str) => {
  return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("hello world"));

