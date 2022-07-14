var TwoNumbers = function (nums, target) {
  result = [];
  index_Map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (index_Map.has(difference)) {
      result[0] = i;
      result[1] = index_Map.get(difference);
      break;
    } else {
      index_Map.set(nums[i], i);
    }
  }
  return result;
};

//Test
console.log(TwoNumbers([2, 7, 11, 15], 9)); // answer = [1, 0] which represents [7, 2]
console.log(TwoNumbers([15, 7, 11, 2], 9)); // answer = [3, 1] which represents [2, 7]
console.log(TwoNumbers([3, 2, 4], 6)); // answer = [2, 1] which represents [4, 2]
