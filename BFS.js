// Graph traversal using Breadth-first-search
// @info BFS traverses broadly into the data structure by visiting neighbor nodes before children nodes
// Uses a queue data structure
// @info Breadth First Search has a time complexity of O(v + e) where v is the number of vertices and e is the number of edges

class Node {
  constructor(value) {
    this.value = value
    this.edgesList = []
  }
  
  connect (node) {
    this.edgesList.push(node)
    node.edgesList.push(this)
  }
  
  getAdjacentNodes() {
    return this.edgesList
  }
  
  isConnected(node) {
    return !!this.edgesList.find(edge => edge.value === node.value)
  }
}

class Graph {
  constructor (nodes) {
    this.nodes = [...nodes]
  }
  
  addToGraph(node) {
    this.nodes.push(node)
  }
  
  breadthFirstTraversal(start, end) {
    const queue = [start]
    const visitedNodes = new Set()
    visitedNodes.add(start)
    
    while (queue.length > 0) {
      // pull node queue (to visit)
      // add its adjacencies to the queue
      const node = queue.shift()
      if (node.value === end.value)
      for (const adjacency of nodes.edgesList) {
        if (!visitedNodes.has(adjacency)) {
          queue.push(adjacency)
          visitedNodes.add(adjacency)
        } 
      }
     console.log(node.value)
    }
  }
}

const DFW = new Node('DFW')
const JFK = new Node('JFK')
const LAX = new Node('LAX')
const HNL = new Node('HNL')
const SAN = new Node('SAN')
const EWR = new Node('EWR')
const BOS = new Node('BOS')
const MIA = new Node('MIA')
const MCO = new Node('MCO')
const PBI = new Node('PBI')

const graph = new Graph([DFW, JFK, LAX, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI])

DFW.connect(LAX)
DFW.connect(JFK)
LAX.connect(HNL)
LAX.connect(EWR)
LAX.connect(SAN)
JFK.connect(BOS)
JFK.connect(MIA)
MIA.connect(MCO)
MCO.connect(PBI)
MIA.connect(PBI)

graph.breathFirstTraversal(DFW, MIA)
