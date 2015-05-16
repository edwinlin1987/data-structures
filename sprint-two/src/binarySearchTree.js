var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTreeMethods);
  tree.value = value;
  return tree;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function (value) {
  if (this.value > value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTreeMethods.contains = function () {

};

BinarySearchTreeMethods.depthFirstLog = function () {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
