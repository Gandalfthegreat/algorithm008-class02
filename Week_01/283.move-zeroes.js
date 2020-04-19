/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (57.21%)
 * Likes:    3363
 * Dislikes: 110
 * Total Accepted:    746.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Example:
 *
 *
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Note:
 *
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[lastNonZeroFoundAt] = nums[i];
    lastNonZeroFoundAt++;
  }
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end
