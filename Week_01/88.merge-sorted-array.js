/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (38.49%)
 * Likes:    1859
 * Dislikes: 3759
 * Total Accepted:    522.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 *
 * Note:
 *
 *
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 *
 *
 * Example:
 *
 *
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * Output: [1,2,2,3,5,6]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function arrayCopy(src, srcIndex, dest, destIndex, length) {
  dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
}

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    pLast = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[pLast] = nums2[p2];
      p2--;
    } else {
      nums1[pLast] = nums1[p1];
      p1--;
    }
    pLast--;
  }
  arrayCopy(nums2, 0, nums1, 0, p2 + 1);
};
// @lc code=end
