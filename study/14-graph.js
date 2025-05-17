class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if(!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
      return true
    }
    return false;
  }

  addEdge(vtx1, vtx2) {
    if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }

  removeEdge(vtx1,vtx2) {
    if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(v => v!== vtx2);
      this.adjacencyList[vtx2] = this.adjacencyList[vtx1].filter(v => v!== vtx1);
      return true;
    }

    return false;
  }

  removeVertex(vtx) {
    if(!this.adjacencyList[vtx]) return undefined;

    for(let neighbor of this.adjacencyList[vtx]) {
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(v => v !== vtx)
    }

    delete this.adjacencyList[vtx];

    return this;
  }
}


const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex('C');
g.addEdge("A","B");
g.addEdge("B","C");
g.addEdge("C","A");
// g.removeEdge("A","B")
g.removeVertex("A");
console.log(g);