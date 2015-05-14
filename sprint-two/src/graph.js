

var Graph = function(){
  this.storage =  {};
  this.connections = {};
};

Graph.prototype.addNode = function(node){
  this.storage[node] = node;
  this.connections[node] = [];

};

Graph.prototype.contains = function(node){
  if (this.storage[node]) {
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  // for (var i = 0; i < this.connections[fromNode].length; i++) {
  //   if (this.connections[fromNode][i] === toNode) {
  //     return true;
  //   }
  // }
  // return false;
  if (_.indexOf(this.connections[fromNode],toNode) > -1) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.connections[fromNode].push(toNode);
  this.connections[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var index = _.indexOf(this.connections[fromNode], toNode);
  this.connections[fromNode].splice(index, 1);
  index = _.indexOf(this.connections[toNode], fromNode);
  this.connections[toNode].splice(index, 1);
  // if i find toNode splice it out.
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function (item) {
    cb(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



