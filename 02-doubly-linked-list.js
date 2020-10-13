class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    /*
    - Create a new node with the value passed to the function
    - If the head property is null set the head and tail to be the newly created node
    - If not, set the next property on the tail to be that node
    - Set the previous property on the newly created node to be the tail
    - Set the tail to be the newly created node
    - Increment the length
    - Return the Doubly Linked List
    */
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      oldTail.next = newNode;
      newNode.prev = oldTail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    /*
    - If there is no head, return undefined
    - Store the current tail in a variable to return later
    - If the length is 1, set the head and tail to be null
    - Update the tail to be the previous Node.
    - Set the newTail's next to null
    - Decrement the length
    - Return the value removed
    */
    if (!this.head) return undefined;

    const oldTail = this.tail;
    const newTail = oldTail.prev;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = newTail;
      newTail.next = null;
      oldTail.next = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    /*
  - If length is 0, return undefined
  - Store the current head property in a variable (we'll call it old head)
  - If the length is one
  - set the head to be null
  - set the tail to be null
  - Update the head to be the next of the old head
  - Set the head's prev property to null
  - Set the old head's next to null
  - Decrement the length
  - Return old head
  */
    if (!this.head) return undefined;

    const oldHead = this.head;
    const newHead = oldHead.next;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = newHead;
      newHead.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(data) {
    /*
    - Create a new node with the value passed to the function
    - If the length is 0
    - Set the head to be the new node
    - Set the tail to be the new node
    - Otherwise
    - Set the prev property on the head of the list to be the new node
    - Set the next property on the new node to be the head property
    - Update the head to be the new node
    - Increment the length
    - Return the list
    */
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      oldHead.prev = newNode;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    const halfLength = (this.length - 1) / 2;
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index <= halfLength) {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      // console.log('Working from the beginning');
      return current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
      // console.log('Working from the end');
      return current;
    }
  }

  set(index, data) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = data;
      return true;
    }
    return false;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(data);
    if (index === this.length) return !!this.push(data);

    const newNode = new Node(data);
    const oldIndex = this.get(index);

    oldIndex.prev.next = newNode;
    newNode.next = oldIndex;
    this.length++;
    return ture;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    this.length--;
    return true;
  }
}

const list = new DoublyLinkedLists();

list.push('firstNode');
list.push('secondNode');
list.push('thirdNode');
list.push('forthNode');
list.push('fifthNode');
list.push('sixthNode');
list.push('seventhNode');
list.get(5);
console.log('This is current list', '\n', list, '\n');
