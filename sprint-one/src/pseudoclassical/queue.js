var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.cap = 0;
  this.order = 0;
  this.queue = 0;


};

Queue.prototype.size = function () {
  return this.cap;
};

Queue.prototype.enqueue = function (value) {
  this.cap++;
  this.storage[this.order] = value;
  this.order++;
};

Queue.prototype.dequeue = function() {
  if (this.cap > 0) {
    this.cap--;
    var temp = this.storage[this.queue];
    delete this.storage[this.queue];
    this.queue++;
    return temp;
  }
};





