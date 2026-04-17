const SimpleNode = require("./SimpleNode");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new SimpleNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new SimpleNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this._size--;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (this._isSameValue(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  countOccurrences(value) {
    let count = 0;// let(int)
    let current = this.head;    // 'this.head' es obligatorio para acceder al atributo de la clase
    while (current !== null) {  // '!==' es el estándar de seguridad en JS
      // 'current.value': Acceso directo (sin getValue).
      // 'this._isSameValue': Llamo al método de usted inge usando 'this'.
      if (this._isSameValue(current.value, value)) {
        count++;
      }
  
  }

  clean() {
    throw new Error("TODO RETO: Implementar clean() en SinglyLinkedList.");
  }

  reverseInPlace() {
    throw new Error(
      "TODO RETO: Implementar reverseInPlace() en SinglyLinkedList."
    );
  }

  removeDuplicates() {
    throw new Error(
      "TODO RETO: Implementar removeDuplicates() en SinglyLinkedList."
    );
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  toString() {
    let out = "[";
    let current = this.head;
    while (current !== null) {
      out += String(current.value);
      if (current.next !== null) {
        out += ", ";
      }
      current = current.next;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = SinglyLinkedList;
