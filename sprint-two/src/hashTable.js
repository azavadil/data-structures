var HashTable = function(){
  this._size = 0;
  this.MINLIMIT = 8;
  this._limit = 8;
  this._signal = false;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  this._size++;

  console.log(k, v);
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){
    this._storage.get(i)[k] = v;
  }
  else{
    var temp = {};
    temp[k] = v;
    this._storage.set(i, temp);
  }
  if (this._size / this._limit > 0.75){
    this._resize(this._limit * 2);
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
 // console.log(this._storage.get(i));
 delete this._storage.get(i)[k];
//  console.log('test')
  this._size--;
  if (this._size / this._limit < .25 && this._limit / 2 >= this.MINLIMIT){
    this._resize(Math.ceil(this._limit / 2));
  }

};

HashTable.prototype._resize = function(newLimit){

  var tempStorage = makeLimitedArray(newLimit);
  this._storage.each(function(item){
    for (var key in item){
      var index = getIndexBelowMaxForKey(key, newLimit);
      if (tempStorage.get(index)){
        tempStorage.get(index)[key] = item[key];
      }
      else{
        var temp = {};
        temp[key] = item[key];
        tempStorage.set(index, temp);
      }
    }

  });
  this._limit = newLimit;
  this._storage = tempStorage;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
