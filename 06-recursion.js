// Helper Method Recursion
function collectOddValues(nums) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Pure Recursion
function collectEvenValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 === 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectEvenValues(arr.slice(1)));
  return newArr;
}

collectEvenValues([1, 2, 3, 4, 5]);
/*
[1].concat(collectEvenValues([2,3,4,5]))
              [].concat(collectEvenValues([3,4,5]))
                        [3].concat(collectEvenValues([4,5]))
                                   [].concat(collectEvenValues([5]))
                                             [5].concat(collectEvenValues([]))
                                                        []
[1].concat(collectEvenValues([2,3,4,5]))
          [].concat(collectEvenValues([3,4,5]))
                   [3].concat(collectEvenValues([4,5]))
                              [].concat(collectEvenValues([5]))
                                        [5].concat([]]) => [5]

[1].concat(collectEvenValues([2,3,4,5]))
           [].concat(collectEvenValues([3,4,5]))
                    [3].concat(collectEvenValues([4,5]))
                               [].concat([5]) => [5]

[1].concat(collectEvenValues([2,3,4,5]))
           [].concat(collectEvenValues([3,4,5]))
                              [3].concat([5]) => [3,5]

[1].concat(collectEvenValues([2,3,4,5]))
           [].concat([3,5]) => [3,5]

[1].concat([3,5])

[1,3,5]
*/
