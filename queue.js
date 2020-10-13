class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Queue : First in First Out
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //First In = enQueue (리스트 처음에 노드 추가)
  enQueue(data) {
    /*
    리스트 뒤에서부터 추가
        1 < 
      1 2 < 
    1 2 3 <
    */
    const newNode = new Node(data);
    // 기존 노드가 없으면
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // 기존 노드가 있으면
      const oldLast = this.last;
      oldLast.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log(this.length);
    return this;
  }

  //First out = deQueue (리스트 가장 앞 노드 삭제)
  deQueue() {
    /*
    리스트 앞에서부터 삭제
    < 1 2 3
    < 2 3
    < 3 
    */
    const removedNode = this.first;
    // 기존 노드가 없으면
    if (!removedNode) return null;
    // 노드가 1개 남았을 때
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      // 기존 노드가 있으면
      this.first = removedNode.next;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
}

const list = new Queue();
// list.enQueue('hi');
// list.enQueue('hihi');
// list.enQueue('hihihi');
