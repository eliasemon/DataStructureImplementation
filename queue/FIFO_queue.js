class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
class  FifoQueue{
    constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
    }
    //add data on queue
    enqueue(data) {
      if(this.size == 0){
        this.head = this.tail = new Node(data);
        this.size++;
        return;
      }else{
        let oldTail = this.tail;
        this.tail = new Node(data);
        oldTail.next = this.tail;
        this.tail.prev = oldTail;
        this.size++;
        return;
      }
    }
    //delete data from queue
    dequeue(){
      if(this.size == 0){
        console.log("Nothing to delete");
        return;
      }
      if(this.size == 1){
        this.head = this.tail = null;
        this.size--;
        return;
      }
      this.head = this.head.next;
      this.head.prev = null;
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
var ffq = new FifoQueue();
ffq.enqueue(1);
ffq.enqueue(2);
ffq.enqueue(3);
ffq.enqueue(4);
ffq.enqueue(5);
ffq.enqueue(6);
ffq.dequeue();
ffq.dequeue();
console.log("The peek data is:  " + ffq.peek());
console.log("The FifoQueue size is:   " + ffq.size);