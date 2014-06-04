var Queue = function() {
  this.startQ = 0;
  this.endQ = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.endQ] = value;
  this.endQ++;
}

Queue.prototype.dequeue = function(value){
  if( this.endQ > this.startQ ){
    var temp = this.storage[this.startQ];
    delete this.storage[this.startQ];
    this.startQ++;
    return temp;
  }
}

Queue.prototype.size = function(){
  return this.endQ - this.startQ;
}
