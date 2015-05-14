var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.cap = 0;

};

Stack.prototype.size = function(){
  return this.cap;
};

Stack.prototype.push = function(value){
  this.storage[this.cap] = value;
  this.cap++;
};

Stack.prototype.pop = function(){
  if(this.cap > 0){
    this.cap--;
    var temp = this.storage[this.cap];
    delete this.storage[this.cap];
    return temp;
  }
};
