var DoubleLinkedList = function(){
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
      last.previous = list.tail;
      list.tail = last;
    }
  };

  list.addToHead = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var first = Node(value);//create first = new node
      list.head.previous = first;//make list.head.previous point at new node
      first.next = list.head;//first.next will point at list.head
      list.head = first;//set list.head to temp
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

  list.removeTail = function () {
    if (list.tail !== null) {
      var last = list.tail.value;
      list.tail = list.tail.previous;
      list.tail.next = null;
      return last;
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
        }
        check = check.next;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
