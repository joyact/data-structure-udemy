class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    // tree is empty, insert to root!
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    // tree has nodes, let's move
    let current = this.root;
    while (current) {
      // handle duplicates
      if (value === current.value) return undefined;

      // smaller value, go to left side
      if (value < current.value) {
        // It's empty, insert!
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        // not empty, keep moving.
        current = current.left;

        // bigger value, go to right side
      } else {
        // It's empty, insert!
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        // not empty, keep moving.
        current = current.right;
      }
    }
  }
}

const tree = new BinarySearchTree();
