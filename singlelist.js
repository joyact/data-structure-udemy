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

  // 리스트 내부의 특정 위치 노드 불러오기
  get(index) {
    /*
    parameter로 인덱스값 입력
    리스트길이를 벗어난 인덱스 입력 시 null
    출력하고자 하는 인덱스에 도달할 때 까지 반복문 loop
    인덱스 위치에 있는 노드 출력
    */
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // 리스트 내부의 특정 위치 노드 data 변경하기
  set(index, data) {
    /*
    parameter로 인덱스값과 바꾸고자 하는 data 입력
    get()을 이용하여 노드 찾기
    노드를 찾지 못했으면,  false 출력
    노드를 찾으면, 입력된 data값으로 변경 후 true 출력
    */
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = data;
      return true;
    }
    return false;
  }

  // 특정 위치에 노드 추가하기
  insert(index, data) {
    /*
    리스트길이를 벗어난 인덱스 입력 시 null
    인덱스 === length, 가장 끝에 노드 추가(push)
    인덱스 === 0, 가장 앞에 노드 추가(unshift)
    그 외, get()을 사용해서 인덱스에 해당하는 노드에 접근(zero based)
    
    index 0           index 1
    b(next:e)         e(next:null)
           insert(1, 'y')

    index 0     index 1     index 2
    b(next:y)   y(next:e)   e(next:null)  

    index 0의 next 변경
    추가한 노드의 next는 기존 index 0의 next 노드
    리스트 길이 + 1
    true 출력
    */
    const newNode = new Node(data);
    if (index < 0 || index > this.length) {
      return false;
    } else {
      if (index === this.length) {
        this.push(newNode);
      } else if (index === 0) {
        this.unshift(newNode);
      } else {
        const prev = this.get(index - 1);
        const prevNext = prev.next;
        prev.next = newNode;
        newNode.next = prevNext;
        this.length++;
      }
      return true;
    }
  }

  // 특정 위치에 노드 삭제하기
  remove(index) {
    /*
    리스트 길이를 벗어난 인덱스 입력 시 null
    인덱스 === length-1, 가장 끝 노드 삭제(pop)
    인덱스 === 0, 가장 앞 노드 삭제(shift)
    그 외, get()을 사용해서 인덱스에 해당하는 노드에 접근(zero based)
    
    index 0     index 1     index 2
    b(next:y)   y(next:e)   e(next:null)  
           remove(1)

    index 0     index 1
    b(next:e)   e(next:null)  

    index 0의 next 변경
    삭제할 노드의 앞과 뒤 노드를 서로 연결해준다
    리스트 길이 - 1
    전체 노드 출력
    */
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      return this.shift();
    } else {
      const prevNode = this.get(index - 1);
      const removed = prevNode.next;
      prevNode.next = removed.next;
      removed.next = null;
      this.length--;
      return removed;
    }
  }
}

const list = new SinglelyLinkedList();

list.push('firstNode');
list.push('secondNode');
list.push('thirdNode');
list.push('forthNode');
console.log('This is current list', '\n', list, '\n');
