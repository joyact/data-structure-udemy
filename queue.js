class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldLast = this.last;
      oldLast.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log(this.length);
    return this;
  }
  dequeue() {
    const removedNode = this.first;
    if (!removedNode) return null;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
}

const queue = new Queue();
queue.enqueue('hi');
queue.enqueue('hihi');
queue.enqueue('hihihi');
