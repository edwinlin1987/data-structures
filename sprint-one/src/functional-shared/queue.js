var Queue = function(){
  var newQueue = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newQueue.storage = {};
  newQueue.cap = 0;
  newQueue.order = 0;
  newQueue.queue = 0;


  _.extend(newQueue, queueMethods);

  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.cap++;
  this.storage[this.order] = value;
  this.order++;
};

queueMethods.dequeue = function() {
  if(this.cap > 0) {
    var temp = this.storage[this.queue];
    delete this.storage[this.queue];
    this.cap--;
    this.queue++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.cap;
};



