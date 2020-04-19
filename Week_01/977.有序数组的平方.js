/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 *
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (71.17%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    34K
 * Total Submissions: 47.8K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]

 * 示例 2：
 *
 * 输入：[-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let result = [];
  let begin = 0,
    end = A.length - 1;
  for (let i = A.length - 1; i >= 0; i--) {
    if (Math.abs(A[begin]) > Math.abs(A[end])) {
      result[i] = A[begin] * A[begin];
      begin++;
    } else {
      result[i] = A[end] * A[end];
      end--;
    }
  }
  return result;
};
// @lc code=end
