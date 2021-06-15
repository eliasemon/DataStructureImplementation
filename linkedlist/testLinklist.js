class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Linklist {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  //add data at begining
  addatbegining(data) {
    var new_node = new Node(data);
    new_node.next = this.head;
    this.head = new_node;
    this.size++;
    return;
  }
  //add at end
  addatend(data) {
    var node = new Node(data);
    this.size++;
    if (this.head == null) {
      this.head = node;
      return;
    } else {
      var last = this.head;
      while (last.next != null) {
        last = last.next;
      }
      last.next = node;
      return;
    }
  }
  //add data at index
  addatindex(data, index) {
    if (index < 0 || index > this.size) {
      console.log("index out of bound");
      return;
    }
    if (index == 0) {
      this.addatbegining(data);
      return;
    }
    if (index == this.size) {
      this.addatend(data);
      return;
    }
    var node = new Node(data);
    var last = this.head;
    var last2 = this.head;
    for (let i = 1; i < index; i++) {
      last = last.next;
      last2 = last2.next;
    }
    last2 = last2.next;
    node.next = last2;
    last.next = node;
    this.size++;
    return;
  }
  //delete by index
  deletebyindex(index) {
    if (index < 0 || index >= this.size) {
      console.log("index out of bound");
      return;
    }
    if (index == 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    var last = this.head;
    for (let i = 0; i < index - 1; i++) {
      last = last.next;
    }
    if (index == this.size - 1) {
      last.next = null;
      this.size--;
      return;
    }
    var last2 = last.next.next;
    last.next = last2;
    this.size--;
    return;
  }
  // get value by index
  getvalueByIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index out of bounds");
      return;
    }
    var node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.data;
  }
  //print all value of list
  printlist() {
    var node = this.head;
    var count = 0;
    while (node != null) {
      console.log(count + " index's value is:  " + node.data);
      count++;
      node = node.next;
    }
  }
}
var ll = new Linklist();
ll.addatbegining(1);
ll.addatbegining(2);
ll.addatbegining(3);
ll.addatbegining(4);
ll.addatend(5);
ll.addatindex(6, 5);
ll.addatindex(7, 0);
ll.deletebyindex(6);
//ll.addatindex(10,9)
ll.printlist()
console.log("The list size is " + ll.size);
console.log("The index's value is ::  " + ll.getvalueByIndex(2));
