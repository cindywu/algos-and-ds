console.log('concatenation of array')

const nums = [1,2,1] // length = n = 3
// ans = 2n = 2*3 = 6 length
// ans[i] == nums[i] ... ans[0] === nums[0] === 1
// ans[i+n] == nums[i] ... ans[0+3] === nums[0] === 1
// ans[]

getConcatenation(nums)

function getConcatenation(nums) {
  let ans = []
  let n = nums.length
  for (i = 0; i < nums.length; i++){
    const currNumsValue = nums[i]
    ans[i] = currNumsValue
    ans[i+n] = currNumsValue
  }
  console.log('i am in here')
  console.log({ans})
  return ans
}