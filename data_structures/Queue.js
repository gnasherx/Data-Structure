class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    // Push value to queue.
    this.queue.push(value);
  }

  dequeue() {
    // Remove value from the queue and return this value.
    return this.queue.shift();
  }

  peek() {
    // Return first item in queue
    return this.queue[0];
  }

  length() {
    //   get length of queue
    return this.queue.length;
  }

  print() {
    console.log(this.queue.join(" "));
  }
}

let myQueue = new Queue();
myQueue.enqueue("Apple");
myQueue.enqueue("Banana");
myQueue.enqueue("Mango");
myQueue.print();
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.length());
myQueue.print();
