class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while(true) {
      if(newNode.value === temp.value) {
        return undefined;
      }

      if(newNode.value < temp.value) {
        if(temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if(temp.right === null) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  includes(value) {
    if(!this.root) {
      return false;
    }

    let temp = this.root;

    while(temp) {
      if(value < temp.value) {
        temp = temp.left;
      } else if( value > temp.value) {
        temp = temp.right;
      } else if(value === temp.value) {
        return true;
      }
    }
    return false;
    
  }

  // Breath First search
  bfs() {
    let current = this.root;
    let queue = [];
    let data = [];
    queue.push(current);

    while(queue.length) {
      current = queue.shift();
      data.push(current.value);

      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }
  return data;
  }
// depth first search
  dfsPreorder(node = this.root, data=[]) {
    if(node === null) return data;
    // console.log("-------------",data);
    data.push(node.value);

    if(node.left) {
      this.dfsPreorder(node.left, data)
    }
    if(node.right) {
      this.dfsPreorder(node.right, data)
    }

    return data;
   }

  dfsPostOrder(node = this.root, data=[]) {
    if(node === null) return data;

    if(node.left) {
      this.dfsPostOrder(node.left, data)
    }
    if(node.right) {
      this.dfsPostOrder(node.right, data)
    }
    data.push(node.value);

    return data;
   }
  
   dfsInOrder(node = this.root, data=[]) {
    if(node === null) return data;

    if(node.left) {
      this.dfsInOrder(node.left, data)
    }
    data.push(node.value);
    if(node.right) {
      this.dfsInOrder(node.right, data)
    }

    return data;
   }
}


const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(1);
// console.log(tree.includes(12));
// console.log(tree);
// console.log(tree.bfs());
console.log(tree.dfsPreorder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
