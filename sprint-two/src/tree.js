var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree,treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var toCheck = [];
  toCheck.push(this);
  while(toCheck.length){
    var temp = toCheck.pop();
    if (temp.value === target){
      return true;
    }
    else{
      for (var i = 0; i < temp.children.length; i++){
        console.log(2);
        toCheck.push(temp.children[i]);
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
