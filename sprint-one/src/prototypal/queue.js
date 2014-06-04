var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.startQ = 0;
  queue.endQ = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.endQ] = value;
  this.endQ++;
}

queueMethods.dequeue = function(value){
  if (this.endQ > this.startQ){
    var temp = this.storage[this.startQ];
    delete this.storage[this.startQ];
    this.startQ++;
    return temp;
  }
}

queueMethods.size = function(){
  return this.endQ - this.startQ;
}
