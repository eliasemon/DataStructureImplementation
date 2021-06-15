class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
class  Stack{
    constructor() {
      this.size = 0;
      this.head = null;
    }
    //add data on stack
    push(data) {
      var new_node = new Node(data);
      new_node.next = this.head;
      this.head = new_node;
      this.size++;
      return;
    }
    //remove data from stack
    pop(){
        if(this.size > 0){
        this.head = this.head.next;
        this.size--;
        }else{
           console.log("The stack is empty"); 
        }
    }
    //show the top data of stack
    peek(){
        if(this.size > 0){
            return this.head.data;
        }else if(this.size == 0){
            console.log("The stack is empty");
            return ;
        }
    }
    isempty(){
        if(this.size ==  0){
            return ture;
        }
        else if(this.size > 0){
            return false;
        }
    }
}
var new_stack = new Stack();
new_stack.push(1);
new_stack.push(2);
new_stack.push(3);
new_stack.pop();
console.log("The peek data is:  " + new_stack.peek());
console.log("The size of stack is :  " + new_stack.size);