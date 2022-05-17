// Graph traversal using Breadth-first-search
// @dev uses adjacency graph
// @info BFS traverses broadly into the data structure by visiting neighbor nodes before children nodes
// Uses a queue data structure

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

graph.breathFirstTraversal(DFW)



     


