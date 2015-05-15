var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if (this._storage.get(i) === undefined) {
  //   this._storage.set(i, v);
  // } else {
  //   i++;
  //   this._storage.set(i, v);
  // }
  if (this._storage.get(i) !== undefined ){
    var array = [[undefined,this._storage.get(i)]];
    array.push([k,v]);
    this._storage.set(i, array);
  } else {
    this._storage.set(i,v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var val = this._storage.get(i);
  if (Array.isArray(val)) {
    for (var i = 0; i < val.length; i++) {
      if (val[i][0] === k) {
        return val[i][1];
      }
    }
    return val[0][1];
  }
  return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function (item, index, collection) {
    if (index === i) {
      delete collection[index];
    }
  });

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
