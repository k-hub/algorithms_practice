class node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}


// Implement binary tree.
function binaryTree(root, data) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // Random num of 0 or 1 will be returned.
  // 0 is left and 1 is right.
  const sideToAddNode = Math.floor(Math.random() * 2);


  if (root === null) {
    root = new node(data);
  } else if (sideToAddNode === 0) {
    root.left = binaryTree(root.left, data);
  } else {
    root.right = binaryTree(root.right, data);
  }
  return root
}


// Create the binary tree.
function generateBinaryTree(arr) {
  let root = null;

  // ES6 arrow function
  arr.forEach(data => {
    root = binaryTree(root, data);
  });

  return root;
}


// Implement Binary Search Tree - nodes in a Binary Search Tree follow the rules that nodes left of a root
// are less than or equal to root and nodes to the right are greater than root.
function binarySearchTree(root, data) {
  if (root === null) {
    root = new node(data);
  } else if (data <= root.data) {
    root.left = binarySearchTree(root.left, data);
  } else {
    root.right = binarySearchTree(root.right, data);
  }
  return root
}


// Create the Binary Search Tree.
function generateBinarySearchTree(arr) {
  let root = null;

  arr.forEach(data => {
    root = binarySearchTree(root, data);
  });

  return root;
}


/////////////////////////////////////////////////////////////////////////////////////
// The code above this section pertains to tree implementations and can be ignored.//
////////////////////////////////////////////////////////////////////////////////////


// Check if input tree is a BST
// Inorder traversal. Store traversed items in a list. Convert list to set and back to list and sort (to ensure uniqueness and sorted order).
// Compare converted list with original list. If they match, then tree is a BST.
function inorderTraversal(root) {
  let nodesVisited = [];

  if (root === null) {
    return nodesVisited;
  }

  if (root.left || root.left === null) {
    nodesVisited = nodesVisited.concat(inorderTraversal(root.left));
    nodesVisited.push(root.data)

    if (root.right) {
      nodesVisited = nodesVisited.concat(inorderTraversal(root.right));
    }
  }

  return nodesVisited;
}

// Problem: Determine if a binary tree is a Binary Search Tree.
// For this problem, a binary tree is considered a BST if the following are true:
//   - The data of each node is unique.
//   - The data value of every node in a node's left subtree is less than the data value of that node.
//   - The data value of every node in a node's right subtree is greater than the data value of that node.
// Assume that an empty tree is a valid BST.
function checkBST(root) {
  // Returns an array.
  let nodesVisited = inorderTraversal(root);

  let uniqueNodes = new Set(nodesVisited);
  // Convert set back to array with only unique nodes.
  uniqueNodes = [...uniqueNodes];
  uniqueNodes.sort();

  // Compare original array with unique array.
  if (nodesVisited.length === uniqueNodes.length) {
    for (let i = 0; i < nodesVisited.length; i++) {
      if (nodesVisited[i] !== uniqueNodes[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
}

const binaryTree1 = generateBinaryTree([4, 2, 6, 1, 3, 3]);
const binaryTree2 = generateBinaryTree([4, 2, 6, 1, 3, 5, 7]);
const bst1 = generateBinarySearchTree([4, 2, 6, 1, 3, 5, 7]);
console.log(checkBST(binaryTree1)); // false
console.log(checkBST(binaryTree2)); // true or false
console.log(checkBST(bst1)); // true
console.log(checkBST(null)); // true
