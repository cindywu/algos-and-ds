/**
 Do not return anything, modify nums in-place instead.
 */

// 0 red
// 1 white
// 2 blue

// bucket sort

// bucket sort is useful when all the values fit within a finite range
// in this example 0 - 2
// create a bucket for each value
//

function sortColors(nums: number[]): void {
  let buckets : number[] = [0, 0, 0]
  for (let i = 0; i< nums.length; i++){
      let value = nums[i]
      buckets[value] = buckets[value] + 1
  }

  let i = 0
  while (i < nums.length){
    for (let n = 0; n < buckets.length; n++){
      let count = buckets[n]
      for (let j = 0; j < count; j++){
          nums[i] = n
          i++
      }
    }
  }
  console.log({nums})

};

let input1 = [2,0,2,1,1,0]
let input2 = [2,0,1]

sortColors(input1)
sortColors(input2)