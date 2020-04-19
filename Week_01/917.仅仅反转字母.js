"use strict";
var reverseOnlyLetters = function (S) {
  let nums = S.split("");
  let begin = 0,
    end = nums.length - 1;
  while (begin < end) {
    if (!/([a-z]|[A-Z])+/.test(nums[begin])) {
      begin++;
    } else if (!/([a-z]|[A-Z])+/.test(nums[end])) {
      end--;
    } else {
      let temp = nums[begin];
      nums[begin] = nums[end];
      nums[end] = temp;
      begin++;
      end--;
    }
    return nums.join("");
  }
};
