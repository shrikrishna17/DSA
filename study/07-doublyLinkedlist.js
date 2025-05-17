class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    // this.head = new Node(value);

    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value)
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return newNode;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return newNode;
  }

  pop() {
    if(this.length === 0) {
      return undefined;
    }

    let temp = this.tail;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }

    this.tail = this.tail.prev;
    this.tail.next = null
    temp.prev = null;
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return newNode;
  }

  shift() {
    if(this.length === 0) {
      return undefined;
    }
    let temp = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);

myDoublyLinkedList.push(2);
// console.log(myDoublyLinkedList);
// console.log(myDoublyLinkedList.pop());

// myDoublyLinkedList.unshift(3)
myDoublyLinkedList.shift();
console.log(myDoublyLinkedList);