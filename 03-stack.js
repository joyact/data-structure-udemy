class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Stack : Last in First Out
// In(head), Out(head)
// push + pop OR unshift + shift
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enStack(data) {
    /*
    리스트 앞에서부터 추가
    > 1
    > 2 1
    > 3 2 1
    */
    const newNode = new Node(data);
    // 기존 노드가 없으면
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 기존 노드가 있으면
      const oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    }
    this.length++;
    return this;
  }

  deStack() {
    /*
    리스트 앞에서부터 삭제
    < 3 2 1
    < 2 1
    < 1
    */
    const removedNode = this.head;
    // 기존 노드가 없으면
    if (!removedNode) return null;
    // 노드가 1개 남았을 때
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
}

const list = new Stack();
list.enStack('firstNode');
list.enStack('secondNode');
list.enStack('thirdNode');
