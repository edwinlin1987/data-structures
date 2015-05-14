var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //this._storage.push(item);
  this[item] = item;
};

setPrototype.contains = function(item){
  // for (var i = 0; i < this._storage.length; i++) {
  //   if (this._storage[i] === item) {
  //     return true;
  //   }
  // }
  // return false;
  return !!this[item];

};

setPrototype.remove = function(item){
  if (this.hasOwnProperty(item)) {
    delete this[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
