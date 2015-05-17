var Graph = function(){
  this.storage =  {};
  this.connections = {};
};

// Constant time O(1)
Graph.prototype.addNode = function(node){
  this.storage[node] = node;
  this.connections[node] = [];
};

// Linear O(n)
Graph.prototype.contains = function(node){
  if (this.storage.hasOwnProperty(node)) {
    return true;
  }
  return false;
};

// Linear time O(n) ?
Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

// Linear time O(n)
Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.indexOf(this.connections[fromNode],toNode) > -1
};

// Constant time O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  this.connections[fromNode].push(toNode);
  this.connections[toNode].push(fromNode);
};

// Linear time O(n)
Graph.prototype.removeEdge = function(fromNode, toNode){
  var index = _.indexOf(this.connections[fromNode], toNode);
  this.connections[fromNode].splice(index, 1);
  index = _.indexOf(this.connections[toNode], fromNode);
  this.connections[toNode].splice(index, 1);
};

// Linear time O(n) - may depend on the callback
Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function (item) {
    cb(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



