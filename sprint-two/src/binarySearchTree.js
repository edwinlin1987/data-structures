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

BinarySearchTreeMethods.contains = function (value) {
  if (this.value === value) {
    return true;
  } else if (this.value > value) {
    if (this.left) {
      return this.left.contains(value);
    }
  } else if (this.value < value) {
    if (this.right) {
      return this.right.contains(value);
    }
  }
  return false;


};

BinarySearchTreeMethods.depthFirstLog = function (callback) {
  callback(this.value); // callback original tree.value
  var child = []; // child array []
  if (this.left) {// if (original.left)
    child.push(this.left);// add left to array
  }
  if (this.right) {// if original.right
    child.push(this.right);// add right to array
  }
  while (child.length > 0) {// while array has values
    var grandchild = [];// create grandchild array
    for (var i = 0; i < child.length; i++) {// for child in array
      callback(child[i].value);// callback child
      if (child[i].left) {// add left to grandchild array if exists
        grandchild.push(child[i].left);
      }
      if (child[i].right) {// add right to grandchild array if exists
        grandchild.push(child[i].right);
      }
    child = grandchild;// set array to equal grandchild array to continue moving down generations
  }
};


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
