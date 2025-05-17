# Big O
  * it helps us understand how long an alogorithm will take to run(Time complexity) or how much memory it will need as the amount of data it handles grows(space complexity). and combine both them is Big o
  # O(n) - the number of items in the input data increases, the time it take for the algorithm to run increases correspondingly.
   * find in array
  # O(1) - alaso known as constant time, signifies that the execution time of an algorithm remains constant regardless of input size.
   * find in array with specific index.
  # O(n^2) - indicates that the algorithm's execution time grows quadratically with the size of input data(represented by n).
   * compare each item with another item
  # O(log n) -  The running time grows logarithmically with the input size. This is typical for divide and conquer algorithms.
  * binary search   
**************************************************
# Arrays
 * An array is a data structure used to store     multiple values in a single variable, instead of declaring separate variables for each value
 * A data structure is a way to organize and store data so it can be used efficiently.
 * methods 
   - push() | Add item to the end | arr.push(4)
   - pop() | Remove item from the end | arr.pop()
   - unshift() | Add item to the start | arr.unshift(0)
   - shift() | Remove item from the start | arr.shift()
   - slice() | Copy a portion of the array | arr.slice(1, 3)
   - splice() | Add/remove items at any position | arr.splice(1, 2, "new")
   - map() | Return new array by applying a function | arr.map(x => x * 2)
   - filter() | Return new array with elements that match condition | arr.filter(x => x > 5)
   - reduce() | Reduce to a single value | arr.reduce((a, b) => a + b)
   - forEach() | Loop through each item (no return) | arr.forEach(x => console.log(x))
   - find() | Find first element that matches condition | arr.find(x => x > 5)
   - includes() | Check if value exists in array | arr.includes(3)
   - indexOf() | Get index of element (or -1 if not found) | arr.indexOf(10)
   - sort() | Sort the array (as strings by default) | arr.sort()
   - reverse() | Reverse the array | arr.reverse()
   - join() | Join elements into a string | arr.join(", ")
   - concat() | Merge two arrays | arr.concat([5, 6])
   - every() | Check if every element matches a condition | arr.every(x => x > 0)
   - some() | Check if at least one element matches a condition | arr.some(x => x < 0)
   - flat() | Flatten nested arrays | [[1], [2, 3]].flat()
***********************************************
 # DS
 -  A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently.
 * Linear ds 
  - linear data structure is a type of data structure where the elements are arranged in a sequential manner, meaning each element is connected to its previous and next elements, forming a linear sequence
  - Arrays, Stacks, Queues, Linked Lists
 * Non liner
  - Non-linear data structures are different from linear data structures in the sense that the elements do not form a sequence. Instead, elements are arranged in a hierarchical or graph-like manner, where each element may have more than one relationship with other elements
  - Trees, Graphs, Heaps
***************************************
# Linked List
 * Singly link list
 - A Linked List is a linear data structure called nodes. are not contiguously in memory instead each node contains data and reference the next element in the sequence.
 * Doubly link list
 - it is having additional proerty for previous node reference.

 * Singly Circular Linked List
 - Each node contains data and a reference to the next node. The last node's next points back to the head node, making the list circular. here is no null at the end.

 * Doubly Circular Linked List
 - Each node contains data, a next reference, and a prev reference. The last node's next points to the first node, and the first node's prev points to the last node. Supports circular traversal in both directions.
***************************************************
# Stack
 * A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. The last element added is the first one to be removed.
 - push: Add an element to the top.
 - pop: Remove the element from the top.
 - peek or top: View the top element without removing it.
 - Used in: Function calls, Undo features, Syntax parsing, etc.
*************************************************
# Queue
 * A queue is a linear data structure that follows the FIFO (First In, First Out) principle.The first element added is the first one to be removed.
 - enqueue: Add an element to the rear.
 - dequeue: Remove an element from the front.
 - peek or front: View the front element without removing it.
 - Used in: Task scheduling, Buffers, Printer queues, etc.
***************************************
# Hash Tables
 * DS use to store key value pairs.
 * A hash table (also known as hash map) is a data structure that stores data in a way that allows for fast retrieval of values based on unique keys. It's a collection of key-value pairs, where each key is hashed to an index in an array, and the corresponding value is stored at that index.
 * Hash function - acts like a translator, taking an input of any size(key) and converting it into a fixed-size value(hash-code) that can be used as index within the hash map. process of mapping arbitrary keys to fixed-length indices is called hashing.
# Tree
  * A tree is a hierarchical data structure that consists of nodes connected by edges.
  * BST : 
  - it is a special kind of tree used to organize data in sorted way.
# Recursion 
* calling function itself.
***************************************
# searching algo
 * BST
 * DFS
  - dfsPreorder
  - dfsPostOrder
  - dfsInOrder
*****************************************
# Graph
 * A graph is a non-linear DS that models relationships between objects. It consists of two main components Vertices(Nodes) & Edges.
 * A graph is a collection of nodes (also called vertices) and edges that connect them.
 * Vertices
  - The nodes or points in a graph.
 * Edges
  - The connections between vertices.
 Types -  Adjacency List  and Adjacency Matrix
******************************************
# Sorting 
 * Bubble sort 
 - right element sort first
 * Selection sort
 -  left element sort first
 * Insertion sort
 - swap with left
 * Merge sort
 - divide and conquer.
 
