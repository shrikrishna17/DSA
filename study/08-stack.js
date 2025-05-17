class Node {
  constructor(value) {
    this.value = value
    this.next = null;
  }
}

class Stack {
  constructor(value) {
   const newNode =  new Node(value);
   this.first = newNode;
   this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.length = 1;
      return newNode;
    }
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
    return newNode;
  }

  pop() {
    if(this.length === 0) {
      return undefined;
    }

    let temp = this.first;
    this.first = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  top() {
    if(this.length === 0) {
      return undefined;
    }

    return this.first;
  }

  minValue() {
    if(this.length === 0) {
      return undefined;
    }

    let current = this.first;
    let minValue = current.value;

    while(current.next) {
      current = current.next;
      if(current.value < minValue) {
        minValue = current.value;
      }
    }

    return minValue;
  }

}

let theStack = new Stack(12);

theStack.push(2);
theStack.push(45);
theStack.push(156);
// theStack.pop();
// theStack.top();
// console.log(theStack);
console.log(theStack.minValue());