export {};

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.


function lastStoneWeight(stones: number[]): number {
  let stonesArray = stones
  stonesArray.push(stonesArray[0])
  stonesArray.push(0)

  printHeap(stonesArray)
  heapify(stones)
  return 0
};

function printHeap(stones: number[]){
  console.log('start')
  console.log('skipping stone[0]')
  for (let i = 1; i < stones.length; i++){
    if (i === 1) {
      console.log("    " + stones[i])
      console.log("   /\\")
    }
    if (i === 2) {
      console.log("  " + stones[i], stones[i+1])
      console.log(" /\\ /\\")
    }
    if (i === 4) {
      console.log(stones[i], stones[i+1], stones[i+2], stones[i+3])
    }
    // console.log(stones[i])
  }
  console.log('end')

}

function heapify(stones : number[]): number[]{
  // put the biggest stone as the node
  let lengthWeCareAbout = stones.length
  let parentNodes = Math.floor(lengthWeCareAbout/2)
  console.log({lengthWeCareAbout})
  console.log({parentNodes})
  for (let i = parentNodes -1; i > 0; i--){
    console.log(stones[i])
    let parentNode = stones[i]
    let leftChild = stones[2*i]
    let rightChild = stones[2*i + 1]
    console.log({parentNode})
    console.log({leftChild})
    console.log({rightChild})

  }

return stones
};

let stones = [2,7,4,1,8,1]
lastStoneWeight(stones)