var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
   stack.logLength = 0;
   stack.storage = {};

  _.extend(stack, stackMethods);
  return stack;
};



stackMethods = {};
stackMethods.pop = function() {
  if( this.logLength > 0 ){
    this.logLength--;
    var temp = this.storage[this.logLength];
    delete this.storage[this.logLength];
    return temp;
  }
}

stackMethods.push = function(value) {
  this.storage[this.logLength] = value;
  this.logLength++;
}

stackMethods.size = function(){
  return this.logLength;
}


