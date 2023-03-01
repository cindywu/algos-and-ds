console.log('binary search https://leetcode.com/problems/binary-search/')
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

let target : number = 2
let thing: number[] = [-1,0,3,5,9,12]

function search(nums: number[], target: number) {
  let arr : number[] = nums
  let L : number = 0
  let R : number= nums.length - 1
  let M : number
  while (L <= R) {
    M = Math.floor((L + R)/2)
    if (target > arr[M]) {
      L = M + 1
    } else if (target < arr[M]) {
      R = M - 1
    } else {
      return M
    }
  }
  return -1
};

search(thing, target)
