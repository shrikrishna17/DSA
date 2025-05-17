const isValidPrenthesis = (str) => {

  const stack = [];
  const brackets = {
    "{":"}",
    "[":"]",
    "(":")"
  }

  for(let char of str) {
    if(brackets[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if(!top || brackets[top] !== char) {
        return false;
      }
    }

  }
  return stack.length === 0;
}

// console.log(isValidPrenthesis("(){}[]"));
// console.log(isValidPrenthesis("([)"));
// console.log(isValidPrenthesis("()"));
// console.log(isValidPrenthesis("("));

function reverseString(str) {
  const stack = [];
  for(let char of str) {
    stack.push(char);
  }

  let reversedString = '';

  while(stack.length > 0) {
    reversedString += stack.pop();
  }

  return reversedString;
}

const reversedString = reverseString("hello world!");
console.log(reversedString);
