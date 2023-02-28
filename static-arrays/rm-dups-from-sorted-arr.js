
console.log('remove duplicates from sorted array')
const nums = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(nums)

function removeDuplicates(nums) {
  let k = nums.length
  let currNumber = nums[0] // 0
  let uniqueNumbers = 1

  for (i = 0; i < nums.length; i++) {
    if (i === 0) {

    } else {
      if (nums[i] === currNumber) {
        nums[i] = "_";
        k = k - 1;
      } else {
        currNumber = nums[i]
        nums[i] = "_"
        nums[uniqueNumbers] = currNumber
        uniqueNumbers = uniqueNumbers + 1
      }
    }
  }
  console.log(nums, k)
  return k
}

