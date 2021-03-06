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

  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

const tree = new BinarySearchTree();
