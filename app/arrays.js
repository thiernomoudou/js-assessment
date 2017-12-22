exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    });
  },

  remove: function(arr, item) {
    return arr.filter(function(element){
      return element !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for ( var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var result = [];
    arr.forEach(function(element, index) {

      // Find if there is a duplicate or not
      if (arr.indexOf(element, index + 1) > -1) {

        // Find if the element is already in the result array or not
        if (result.indexOf(element) === -1) {
          result.push(element);
        }
      }
    });

    return result;
  },

  square: function(arr) {
    return arr.map(function(element){
      return element * element;
    });
  },

  findAllOccurrences: function(arr, target) {
    var indices = [];
    // finding the index of each occurences of the target element in the array
    var index = arr.indexOf(target);
    while (index !== -1) {
      indices.push(index);
      index = arr.indexOf(target, index + 1);
    }
    return indices;
  }
};
