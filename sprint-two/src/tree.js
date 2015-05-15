var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

// Constant time O(1)
treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

// Linear time O(n)
treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  } else {
    for(var i = 0; i<this.children.length; i++){
      if(this.children[i].contains(target)){
        return true;
      }

    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
