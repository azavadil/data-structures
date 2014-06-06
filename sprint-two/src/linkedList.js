var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if( list.head === null ){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      newNode.previous = list.tail;
      list.tail = newNode;
    }
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);
    if (list.tail === null){
      list.tail  = newNode;
      list.head = newNode;
    } else {
      newNode.next = list.head;
      list.head.previous = newNode;
      list.head = newNode;
    }
  }

  list.removeHead = function(){
    if( list.head && list.head === list.tail ){
      var top = list.head.value;
      list.head = null;
      list.tail = null;
      return top;
    } else if( list.head ){
      var top = list.head.value;
      list.head = list.head.next;
      list.head.previous = null;
      return top;
    }
  };

  list.removeTail = function() {
    //
    if( list.tail && list.head === list.tail ){
      var bottom = list.tail.value;
      list.head = null;
      list.tail = null;
      return bottom;
    } else if( list.tail ){
      var bottom = list.tail.value;
      list.tail = list.tail.previous;
      list.tail.next = null;
      return top;
    }

  }


  list.contains = function(target){
    var cur = list.head;
    while( cur ){
      if( cur.value === target) return true;
      cur = cur.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
