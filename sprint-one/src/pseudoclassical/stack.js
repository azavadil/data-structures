var Stack = function() {
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.size = function(){
  return this.stackSize;
};

Stack.prototype.pop = function(){
  if (this.stackSize > 0){
    this.stackSize--;
    var temp = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return temp;
  }
};

Stack.prototype.push = function(val){
  this.storage[this.stackSize] = val;
  this.stackSize++;
};
