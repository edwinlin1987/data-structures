var Queue = function() {
  var newQueue = Object.create(queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newQueue.storage = {};
  newQueue.cap = 0;
  newQueue.queue = 0;
  newQueue.order = 0;


  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.order] = value;
  this.cap++;
  this.order++;
};

queueMethods.dequeue = function () {
  if (this.cap > 0) {
    this.cap--;
    var temp = this.storage[this.queue];
    this.queue++;
    return temp;
  }
};

queueMethods.size = function () {
  return this.cap;
};


