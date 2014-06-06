var HashTable = function(){
  this._size = 0;
  this.MINLIMIT = 8;
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  this._size++;
  if (this._size / this._limit > 0.75){
    this._double();
  }
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
  this._size--;
  if (this._size / this._limit < .25 && this.MINLIMIT > this._limit){
    this._shrink();
  }

};

HashTable.prototype._double = function(){
  var newLimit = this._limit * 2;
  var tempArr = [];
  for (var i = 0; i < this._limit; i++){
    tempArr[i] = this._storage[i];
  }
  this._storage = makeLimitedArray(newLimit);
  this._limit = newLimit;
  for (var i = 0; i < tempArr.length; i++){
    for (var key in tempArr[i]){
      this.insert(key, tempArr[i][key]);
    }
  }
}

HashTable.prototype._shrink = function(){

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
