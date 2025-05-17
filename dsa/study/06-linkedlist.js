class Node {
  constructor(value) {
    this.head = value;
    // this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // this.head = new Node(value);
    // this.tail = this.head;
    // this.length = 1;
    if (value !== undefined) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  push(value) {
    let newNode = new Node(value)
    if( !this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {

    if(!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;

    while(temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;

    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  shift() {
    if(!this.head) {
      return undefined;
    }
   let temp = this.head;
   this.head = this.head.next;
   temp.next = null;
   this.length--;
   if(this.length === 0) {
    this.tail = null;
   }
   return temp;
  }

  getFirstNode() {
    return this.head ? this.head : undefined;
    // return this.head ? this.head?.head : undefined;
  }

  getLastNode() {
    if(!this.head) {
      return null;
    }
    let temp = this.head;
    while(temp) {
      if(!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }

  getNodeByIndex(index) {
    let counter = 0;
    let temp = this.head;
    while(temp) {
      if(counter === index){
        return temp
      }
      counter ++;
      temp = temp.next;
    }
    return null;
  }

  updateTheNode(index, value) {
    let temp = this.getNodeByIndex(index)

    if(temp) {
      temp.value = value;
      return true;
    }
    return false
  }

  addNodeAtSpecificIndex(index,value) {
    if(index === 0) {
      return this.unshift(value)
    }

    if(index === this.length) {
      return this.push(value);
    }
    let newNode = new Node(value);

    let temp = this.getNodeByIndex(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
    
  }

  getSize() {
    let counter = 0;
    let temp = this.head;

    while(temp) {
      counter++;
      temp = temp.next;
    }

    return counter;
  }

  deleteAll() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverseTheList() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp;
    let prev = null;
    for(let i=0; i< this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }

}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
// myLinkedList.push(3);
// myLinkedList.push(4);
// myLinkedList.push(5);

// myLinkedList.pop();

// console.log(myLinkedList);

// myLinkedList.unshift(0);
// myLinkedList.shift();
// console.log(myLinkedList);
// console.log(myLinkedList.getFirstNode());
// console.log(myLinkedList.getLastNode());
// console.log(myLinkedList.getNodeByIndex(2));

// console.log(myLinkedList.updateTheNode(1,20));

// // console.log(myLinkedList);
// myLinkedList.addNodeAtSpecificIndex(1,10)

// console.log(myLinkedList.getSize());
// myLinkedList.deleteAll();
// console.log(myLinkedList);
// myLinkedList.reverseTheList();
// console.log(myLinkedList);


