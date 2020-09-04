class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglelyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //리스트 끝 노드 추가
  push(data) {
    /*
    추가할 값을 parameter로
    입력된 parameter를 받아와서 'new노드' 생성
    리스트가 비어있으면, 
      'new노드'가 head와 tail이 된다.
    리스트에 다른 노드가 있으면, 
      1. 기존의 tail.next를 null에서 'new노드'로
      2. tail은 'new노드'로 업데이트
    리스트 길이 + 1
    리스트 전체 return
    */
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //리스트 끝 노드 삭제
  pop() {
    /*
    리스트가 비어있으면, undefined
    리스트에 다른 노드가 있으면(next 노드가 있으면)
      특정값을 가르킬수 없기때문에, 리스트를 처음부터 loop해서 tail을 찾는다.
    tail을 3 → 2 로 변경 후, 기존 tail 삭제(3 → null)
    리스트 길이 - 1
    리스트 항목이 모두 삭제되면(length=0), reset!
    삭제한 값 return
    */
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      /*
      1    2    3
      c,nT

      1    2    3
      nT   c

      1    2    3
          nT    c
      */
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // 리스트 앞 노드 삭제
  shift() {
    /*
      리스트가 비어있으면, 삭제할 항목이 없으므로 undefined
      기존 head를 변수로 저장 후, 2번째 노드(head.next)를 head로 업데이트
      리스트 길이 - 1
      리스트 항목이 모두 삭제되면(length=0), reset!
      삭제한 값 return
      */
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  // 리스트 앞 노드 추가
  unshift(data) {
    /*
      추가될 값을 parameter로
      입력된 parameter를 받아와서 'new노드' 생성
      리스트가 비어있으면,
        'new노드'가 head와 tail이 된다.
      리스트에 다른 노드가 있으면,
        기존의 head를 'new노드'의 next값으로 지정 후, 'new노드'를 head로
      리스트 길이 + 1
      리스트 전체 return
      */
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new SinglelyLinkedList();

list.push('firstNode');
list.push('secondNode');
list.push('thirdNode');
list.push('forthNode');
console.log('This is current list', '\n', list, '\n');
