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
