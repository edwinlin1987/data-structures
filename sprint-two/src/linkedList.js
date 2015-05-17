var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // Constant time O(1)
  list.addToTail = function(value){
    if(list.head === null){
      list.head = Node(value);
      list.tail = list.head;
    } else{
      var last = Node(value);
      list.tail.next = last;
      list.tail = last;
    }
  };

  // Constant time O(1)
  list.removeHead = function(){
    if(list.head !== null){
      var first = list.head.value;
      list.head = list.head.next;
      return first;
    }
  };

  // Linear time - O(n)
  list.contains = function(target){
    if (list.tail === null) {
      return false;
    }
    if (list.head.value === target) {
      return true;
    } else {
      var check = list.head.next;
      while (check !== null) {
        if (check.value === target) {
          return true;
        } else {
          check = check.next;
        }
      }

    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
