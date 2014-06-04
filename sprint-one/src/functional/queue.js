var makeQueue = function(){
  var someInstance = {};
  var startQ = 0;
  var endQ = 0;

  // Use an object with numeric keys to store values
  var storage = {};


  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[endQ] = value;
    endQ++;
  };

  someInstance.dequeue = function(){
    if (endQ > startQ){
      var temp = storage[startQ];
      delete storage[startQ];
      startQ++;
      return temp;
    }
  };

  someInstance.size = function(){
    return endQ - startQ;
  };

  return someInstance;
};
