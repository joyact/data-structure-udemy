class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    // 항목이 없으면
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //항목이 있으면
      const oldFirst = this.first;
      this.first = newNode;
      newNode.next = oldFirst;
    }
    this.length++;
    console.log(this.length);
    return this;
  }

  pop() {
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

const stack = new Stack();
stack.push('firstNode');
stack.push('secondNode');
stack.push('thirdNode');
stack.push('forthNode');
