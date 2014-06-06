var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){
    this._storage.get(i)[k] = v;
  }
  else{
    var temp = {};
    temp[k] = v;
    this._storage.set(i, temp);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i).hasOwnProperty(k)){
    return this._storage.get(i)[k];
  }
 return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(i)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
