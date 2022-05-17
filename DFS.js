// @info Using Depth First Search (DFS) to find the shortest path
// DFS travels as deep as you can within a leaf before you travel laterally through a tree

// question: Given a graph of users and their connections, find the smallest distance between two users

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b  = new Node("b");
const c  = new Node("c");
const d  = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//          a
//        /   \
//       b     c
//      / \     \
//     d   e     f
