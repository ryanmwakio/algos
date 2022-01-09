class Node {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    console.log(this.size);
    return temp.value;
  }
}

let myStack = new Stack();

myStack.push("First");
myStack.push("Second");
myStack.push("Third");

myStack.pop();
