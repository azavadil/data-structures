var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (list.head === null){
      list.head = node;
      list.tail = node;
    }
    else{
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function(){
    var temp;
    if (list.head && list.head === list.tail){
      temp = list.head.value;
      list.head = null;
      list.tail = null;
      return temp;
    }
    else if (list.head){
      temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }
  };

  list.contains = function(target){
    var node = list.head;
    while (node){
      if (node.value === target){
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
