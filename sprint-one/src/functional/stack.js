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
    size--;
    var temp = storage[size];
    delete storage[size];
    return temp;
  };

  someInstance.size = function(){
    if (size < 0) {
      return 0;
    } else {
      return size;
    }
  };

  return someInstance;
};
