/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (26.47%)
 * Likes:    2016
 * Dislikes: 0
 * Total Accepted:    198.9K
 * Total Submissions: 750.8K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例：
 *
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //boundary
  let answer = [];
  if (nums === null || nums.length < 3) return answer;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    let begin = i + 1;
    let end = nums.length - 1;
    while (begin < end) {
      const sum = nums[i] + nums[begin] + nums[end];
      if (sum === 0) {
        answer.push([nums[i], nums[begin], nums[end]]);
        while (nums[begin] === nums[begin + 1]) begin++;
        //while (begin < end && nums[begin] === nums[begin + 1]) begin++;
        while (nums[end] === nums[end - 1]) end--;
        begin++;
        end--;
      } else if (sum < 0) begin++;
      else if (sum > 0) end--;
    }
  }
  return answer;
};
//judge i duplicate
//sum === 0 , remove duplicate, move to next
// @lc code=end
