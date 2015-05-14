var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var order = 0;
  var queue = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    size++;
    storage[order] = value;
    order++;
  };

  someInstance.dequeue = function(){
    if(size>0){
      var temp = storage[queue];
      delete storage[queue];
      size--;
      queue++;
      return temp;
    }

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if (size > 0){
      size--;
      var temp = storage[size];
      delete storage[size];
      return temp;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};


var QueueShared = function(){
  var newQueue = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newQueue.storage = {};
  newQueue.cap = 0;
  newQueue.order = 0;
  newQueue.queue = 0;


  _.extend(newQueue, queueSharedMethods);

  return newQueue;

};

var queueSharedMethods = {};

queueSharedMethods.enqueue = function(value) {
  this.cap++;
  this.storage[this.order] = value;
  this.order++;
};

queueSharedMethods.dequeue = function() {
  if(this.cap > 0) {
    var temp = this.storage[this.queue];
    delete this.storage[this.queue];
    this.cap--;
    this.queue++;
    return temp;
  }
};

queueSharedMethods.size = function() {
  return this.cap;
};

var StackShared = function() {
  var newStack = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newStack.storage = {};
  newStack.cap = 0;

  _.extend(newStack, stackSharedMethods);

  return newStack;
};

var stackSharedMethods = { };

stackSharedMethods.push = function (value) {
  this.storage[this.cap] = value;
  this.cap++;
};

stackSharedMethods.pop = function () {
  if (this.cap > 0) {
    this.cap--;
    var temp = this.storage[this.cap];
    delete this.storage[this.cap];
    return temp;
  }
};

stackSharedMethods.size = function() {
  return this.cap;
};

var QueuePrototype = function() {
  var newQueue = Object.create(queuePrototypeMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newQueue.storage = {};
  newQueue.cap = 0;
  newQueue.queue = 0;
  newQueue.order = 0;


  return newQueue;
};

var queuePrototypeMethods = {};

queuePrototypeMethods.enqueue = function (value) {
  this.storage[this.order] = value;
  this.cap++;
  this.order++;
};

queuePrototypeMethods.dequeue = function () {
  if (this.cap > 0) {
    this.cap--;
    var temp = this.storage[this.queue];
    this.queue++;
    return temp;
  }
};

queuePrototypeMethods.size = function () {
  return this.cap;
};

var StackPrototype = function() {
  var newStack = Object.create(stackPrototypeMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newStack.storage = {};
  newStack.cap = 0;


  return newStack;
};

var stackPrototypeMethods = {};

stackPrototypeMethods.push = function(value) {
  this.storage[this.cap] = value; // { 0 : a }
  this.cap++; // 1
};

stackPrototypeMethods.pop = function() {
  if (this.cap > 0) { // 1
    this.cap--;
    var temp = this.storage[this.cap];
    delete this.storage[this.cap];
    return temp;
  }
};

stackPrototypeMethods.size = function () {
  return this.cap;
};

var QueuePseudo = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.cap = 0;
  this.order = 0;
  this.queue = 0;


};

QueuePseudo.prototype.size = function () {
  return this.cap;
};

QueuePseudo.prototype.enqueue = function (value) {
  this.cap++;
  this.storage[this.order] = value;
  this.order++;
};

QueuePseudo.prototype.dequeue = function() {
  if (this.cap > 0) {
    this.cap--;
    var temp = this.storage[this.queue];
    delete this.storage[this.queue];
    this.queue++;
    return temp;
  }
};

var StackPseudo = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.cap = 0;

};

StackPseudo.prototype.size = function(){
  return this.cap;
};

StackPseudo.prototype.push = function(value){
  this.storage[this.cap] = value;
  this.cap++;
};

StackPseudo.prototype.pop = function(){
  if(this.cap > 0){
    this.cap--;
    var temp = this.storage[this.cap];
    delete this.storage[this.cap];
    return temp;
  }
};

var queueobj = {};
var stackobj = {};
var queueshare = {};
var stackshare = {};
var queueproto = {};
var stackproto = {};
var queuepseudo = {};
var stackpseudo = {};

var funqueue = function () {
  for (var i = 0; i < 100; i++) {
    queueobj[i] = Queue();
  }
}
var funstack = function () {
  for (var i = 0; i < 100; i++) {
    stackobj[i] = Stack();
  }
};
var sharequeue = function () {
  for (var i = 0; i < 100; i++) {
    queueshare[i] = QueueShared();
  }
};
var sharestack = function () {
  for (var i = 0; i < 100; i++) {
    stackshare[i] = StackShared();
  }
};
var protoqueue = function () {
  for (var i = 0; i < 100; i++) {
    queueproto[i] = QueuePrototype();
  }
};
var protostack = function () {
  for (var i = 0; i < 100; i++) {
    stackproto[i] = StackPrototype();
  }
};
var pseudoqueue = function () {
  for (var i = 0; i < 100; i++) {
    queuepseudo[i] = new QueuePseudo();
  }
};
var pseudostack = function () {
  for (var i = 0; i < 100; i++) {
    stackpseudo[i] = new StackPseudo();
  }
};
funqueue();
funstack();
sharequeue();
sharestack();
protoqueue();
protostack();
pseudoqueue();
pseudostack();
















