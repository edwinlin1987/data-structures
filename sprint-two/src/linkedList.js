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
      var temp = Node(value);
      list.tail.next = temp;
      list.tail = temp;
    }
  };

  // Constant time O(1)
  list.removeHead = function(){
    if(list.head !== null){
      var temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }
  };

  // Linear time - O(n)
  list.contains = function(target){
    if (list.tail === null) {
      return false;
    }
    //reach into head
    if (list.head.value === target) {
      return true;
    } else {
      var temp = list.head.next;
      while (temp !== null) {
        if (temp.value === target) {
          return true;
        } else {
          temp = temp.next;
        }
      }

    }

    return false;
      //grab head's next property
      //return true if it finds target, otherwise continue loop
        // if never found, return false;
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
