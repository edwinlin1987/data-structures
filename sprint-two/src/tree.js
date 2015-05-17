var Tree = function(value){
  var newTree = {};

  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

// Constant time O(1)
treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

// Linear time O(n)
treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }
  for (var i = 0; i<this.children.length; i++) {
    if(this.children[i].contains(target)){
      return true;
    }
  }

  return false;
};

treeMethods.removeFromParent = function () {
  var list = this.parent.children;
  for (var i = 0; i <list.length; i++) {
    if (this === list[i]) {
      list.splice(i, 1);
    }
  }
  this.parent = null;
};

treeMethods.traverse = function (callback) {
  callback(this);
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++){
      this.children[i].traverse(callback);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
