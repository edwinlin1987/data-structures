var Stack = function() {
  var newStack = Object.create(stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newStack.storage = {};
  newStack.cap = 0;


  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.cap] = value; // { 0 : a }
  this.cap++; // 1
};

stackMethods.pop = function() {
  if (this.cap > 0) { // 1
    this.cap--;
    var temp = this.storage[this.cap];
    delete this.storage[this.cap];
    return temp;
  }
};

stackMethods.size = function () {
  return this.cap;
};


