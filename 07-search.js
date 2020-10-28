// linear & binary Search
// Find a value inside of array
// Return the index of value
// If you never find the value, return -1

// time - O(n)
function linearSearch(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) return i;
  }
  return -1;
}

// time - O(log n)
function binarySearch(arr, elem) {
  const sort = arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (start <= end) {
    if (elem > sort[middle]) {
      start = middle + 1;
    } else if (elem < sort[middle]) {
      end = middle - 1;
    } else if (elem == sort[middle]) {
      return middle;
    }
    middle = Math.floor((start + end) / 2);
  }
  return -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 300);
// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M               E
// [2, 5, 6, 9, 13, 15, 28, 30]
//              S   M       E
// [2, 5, 6, 9, 13, 15, 28, 30]
//                      SM  E

// String Search
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch('lorie loled', 'lol');
