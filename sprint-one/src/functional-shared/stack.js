var Stack = function() {
  var newStack = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newStack.storage = {};
  newStack.cap = 0;

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = { };

stackMethods.push = function (value) {
  this.storage[this.cap] = value;
  this.cap++;
};

stackMethods.pop = function () {
  if (this.cap > 0) {
    this.cap--;
    var temp = this.storage[this.cap];
    delete this.storage[this.cap];
    return temp;
  }
};

stackMethods.size = function() {
  return this.cap;
};




