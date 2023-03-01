let matrix : number[][] = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let tar : number = 3

function searchMatrix(matrix: number[][], target: number) {
  let m = matrix.length
  let n = matrix[0].length
  console.log({m})
  console.log({n})
  let l = 0
  let r = m*n
  console.log({l})
  console.log({r})
  let mid

  while (l < r) {
    mid = Math.floor((l+r/2))
    if (mid > m) { // mid > 3
      let row = Math.floor(mid/m)
      console.log({row})
      let col = Math.floor(mid%m)
      console.log({col})
      let midVal = matrix[row][col]
      console.log({midVal})

    }






  }

};

searchMatrix(matrix, tar)