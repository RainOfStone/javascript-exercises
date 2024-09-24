const repeatString = function(a, b) {
  let a = 'hey', b = 0
do {
  b++
  if (b < 3){
  a = a + a
  }
} while (b < 3)
return a
}
// Do not edit below this line
module.exports = repeatString;
