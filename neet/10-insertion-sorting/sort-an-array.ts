export {};
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// [2,5,3,1]

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

const nums = [5,2,3,1]


function sortArray(nums: number[]): number[]{
  // nums[0] is already sorted
  // compare nums[1] to nums[0]
  for(let i=1; i < nums.length - 1; i++){
    let j = i - 1
    while (j > 0 && nums[j] < nums[j+1]){
      let temp = nums[j+1]
      nums[j+1] = nums[j]
      nums[j] = temp
      console.log({nums})

    }


  }
  return nums
}

let thing = sortArray(nums)
console.log({thing})