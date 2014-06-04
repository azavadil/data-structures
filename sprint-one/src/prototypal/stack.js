var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  var stack = Object.create(stackMethods);
  stack.logLen = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {};

stackMethods.pop = function(){
  if( this.logLen > 0 ) {
    this.logLen--;
    var temp = this.storage[this.logLen];
    delete this.storage[this.logLen];
    return temp;
  }
};

stackMethods.push = function(value){
  this.storage[this.logLen] = value;
  this.logLen++;
};

stackMethods.size = function(){
  return this.logLen;
};


