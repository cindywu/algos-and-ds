console.log('valid parentheses https://leetcode.com/problems/valid-parentheses/')

const s = "{[]}"
// "{[]}"
isValid(s)

function isValid(s){
  const parensPairs = [
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
  ]
  let nextClosingChar = []
  for (let i = 0; i < s.length; i++){
    console.log(i, s[i])
    parensPairs.map(([start, end]) => {
      s[i] === start && nextClosingChar.push(end)
      console.log(nextClosingChar)
    })
  }
}