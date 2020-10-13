class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Stack : Last in First Out
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
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
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // 기존 노드가 있으면
      const oldFirst = this.first;
      this.first = newNode;
      newNode.next = oldFirst;
    }
    this.length++;
    console.log(this.length);
    return this;
  }

  deStack() {
    /*
    리스트 앞에서부터 삭제
    < 3 2 1
    < 2 1
    < 1
    */
    const removedNode = this.first;
    // 기존 노드가 없으면
    if (!removedNode) return null;
    // 노드가 1개 남았을 때
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

const list = new Stack();
list.enStack('firstNode');
list.enStack('secondNode');
list.enStack('thirdNode');
