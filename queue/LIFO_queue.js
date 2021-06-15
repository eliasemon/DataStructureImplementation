class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
class  LifoQueue{
    constructor() {
      this.size = 0;
      this.head = null;
    }
    //add data on queue
    enqueue(data) {
      var node = new Node(data);
      if(this.size == 0){
        this.head = node;
        this.size++;
        return;
      }
      node.next = this.head;
      this.head = node;
      this.size++;
    }
    //delete data from queue
    dequeue(){
      if(this.size == 0){
        console.log("Nothing to delete");
        return;
      }
      if(this.size == 1){
        this.head = null;
        this.size--;
        return;
      }
      this.head = this.head.next;
      this.size--;
      return;
    }
    peek(){
      return this.head.data;
    }
    isempty(){
      if(this.size == 0)
      {
        return true;
      }
      else{
        return false;
      }
    }
}
var lfq = new LifoQueue();
lfq.enqueue(1);
lfq.enqueue(2);
lfq.enqueue(3);
lfq.enqueue(4);
lfq.enqueue(5);
lfq.enqueue(6);
lfq.dequeue();
lfq.dequeue();
console.log("The peek data is:  " + lfq.peek());
console.log("The FifoQueue size is:   " + lfq.size);