// Binary Search Tree (BST)
//
// Binary tree has at most 2 children each node.
// A BST can be implemented like a Doubly Linked List (DLL has a linear arrangement
// and BST does not; it's binary) where a node has data, a pointer to left node, and
// a pointer to right node.


// Define what a BST node is.
class BstNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Be able to insert a node.
function insertBstNode(root, data) {
  // Create a node
  if (root === null) {
    root = new BstNode(data);
  } else if (data <= root.data) {
    root.left = insertBstNode(root.left, data);
  } else {
    root.right = insertBstNode(root.right, data);
  }

  return root;
}

// Find a BST Node.
function isNodeFound(root, data) {
  if (root === null) {
    return false;
  } else if (data === root.data ) {
    return true;
  } else if (data <= root.data) {
    return isNodeFound(root.left, data);
  } else {
    return isNodeFound(root.right, data);
  }
}

// Main function to call functions
function main() {
  let root = null;

  root = insertBstNode(root, 15);
  root = insertBstNode(root, 20);
  root = insertBstNode(root, 10);
  root = insertBstNode(root, 9);
  root = insertBstNode(root, 11);
  root = insertBstNode(root, 15);

  return root;
}

let root = main();
console.log(isNodeFound(root, 200));
console.log(isNodeFound(root, 20));
console.log(isNodeFound(root, 15));
