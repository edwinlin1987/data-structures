var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

// Constant time O(1)
setPrototype.add = function(item){
  this[item] = item;
};

// Linear time O(n)
setPrototype.contains = function(item){
  return this.hasOwnProperty(item);

};

// Linear time O(n)
setPrototype.remove = function(item){
  if (this.hasOwnProperty(item)) {
    delete this[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
