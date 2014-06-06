var makeBinarySearchTree = function(value){
  var tree = Object.create(treeMethods);
  tree._value = value;
  tree._left = undefined;
  tree._right = undefined;
  return tree;
};

var treeMethods = {};

treeMethods.left = function(){
  return this._left;
}
treeMethods.right = function(){
  return this._right;
}
treeMethods.value = function(){
  return this._value;
}

treeMethods.insert = function(value){
 // var node = makeBinarySearchTree(value);
  if (this._value > value){
    if (this._left === undefined){
      this._left = makeBinarySearchTree(value);
    }
    else{
      this._left.insert(value);
    }
  }
  else if (this._value < value){
    if (this._right === undefined){
      this._right = makeBinarySearchTree(value);
    }
    else{
      this._right.insert(value);
    }
  }
};

treeMethods.contains = function(value){
  var curNode = this;
  console.log(curNode);
  while(curNode) {
    if (curNode._value === value){
      return true;
    }
    else if(curNode._value > value){
      curNode = curNode._left;
    }
    else{
      curNode = curNode._right;
    }
  }
  return false;

};

treeMethods.depthFirstLog = function(func){
  var stack = [];
  var curNode;
  stack.push(this);
  while (stack.length){
    curNode = stack.pop();
    func(curNode._value);
    if (curNode._left){
      stack.push(curNode._left);
    }
    if (curNode._right){
      stack.push(curNode._right);
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
