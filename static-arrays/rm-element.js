console.log('remove element')

const nums = [3,2,2,3]
const val = 3

removeElement(nums, val)

function removeElement(nums, val){
  let k = nums.length
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
      k -=1;
    }
  }
  nums.sort();
  console.log(nums, k)
  return k
}

