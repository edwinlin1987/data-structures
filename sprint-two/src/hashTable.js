var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined ){
    var array = [];
    array.push([k,v]);
    this._storage.set(i, array);
  } else {
    this._storage.get(i).push([k,v]);
  }

  // counter increase
  this.counter++;
  // if counter >=75%
  if (this.counter / this._limit >= 0.75) {
    // resize limit
    this._limit *= 2;
    // rehash everything
    this.resize();
    console.log(this._limit);


  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var val = this._storage.get(i);

  for (var i = 0; i < val.length; i++) {
    if (val[i][0] === k) {
      return val[i][1];
    }
  }

};

HashTable.prototype.remove = function(k){
  if (this.counter > 0) {
    this.counter--;
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function (list, index, collection) {
    if (index === i) {
      for (var j = 0; j < list.length; j++) {
        if (k === list[j][0]) {
          list.splice(j, 1);
        }
      }
    }
  });

  // if counter < 25%
  if (this.counter / this._limit < 0.25 && this._limit > 8)  {
    // resize limit
    this._limit *= 0.5;
    // rehash everything
    this.resize();
  }

};

HashTable.prototype.resize = function () {
  var limit = this._limit;
  var tempStorage = LimitedArray(limit);
  this._storage.each(function (list, index, collection) {
    if (Array.isArray(list)) {
      for (var a = 0; a < list.length; a++) {
        var i = getIndexBelowMaxForKey(list[a][0], limit);
        if (tempStorage.get(i) === undefined) {
          var array = [];
          array.push([list[a][0],list[a][1]]);
          tempStorage.set(i, array);
        } else {
          tempStorage.get(i).push([list[a][0],list[a][1]]);
        }
      }
    }

  });
  this._storage = tempStorage;

  // var tempStorage = LimitedArray(this._limit);
  // this._storage.each(function (list, index, collection) {
  //   if (Array.isArray(list)) {
  //     for ( var a = 0; a < list.length; a++) {
  //       k = list[a][0];
  //       v = list[a][1];
  //       var i = getIndexBelowMaxForKey(k, this._limit);
  //       if (tempStorage.get(i) === undefined ){
  //         var array = [];
  //         array.push([k,v]);
  //         tempStorage.set(i, array);
  //       } else {
  //         tempStorage.get(i).push([k,v]);
  //       }
  //     }
  //   }
  // });
  // this._storage = tempStorage;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
