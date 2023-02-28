console.log('baseball game')

const operations = ["5","2","C","D","+"]
calPoints(operations)

function calPoints(operations) {
  let scoreRecord = []
  let score = 0
  for (i=0; i < operations.length; i++) {
    if (isNaN(operations[i]) === true) {
      if (operations[i] === "C") {
        scoreRecord.pop()
      } else if (operations[i] === "D") {
        scoreRecord.push(scoreRecord[scoreRecord.length - 1]*2)
      } else if (operations[i] === "+") {
        let thing = scoreRecord[scoreRecord.length -1] + scoreRecord[scoreRecord.length - 2]
        scoreRecord.push(thing)
      }
    } else {
      scoreRecord.push(parseInt(operations[i]))
    }
    last = operations[i]
  }
  for (i=0; i < scoreRecord.length; i++) {
    score = score + scoreRecord[i]
  }
  console.log({score})
  return score
}