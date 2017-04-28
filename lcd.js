function timeMaker (num) {
 var strings = [
  [[' ', '_', ' '], ['|', ' ', '|'], ['|', '_', '|']],
  [[' ', ' ', ' '], [' ', ' ', '|'], [' ', ' ', '|']],
  [[' ', '_', ' '], [' ', '_', '|'], ['|', '_', ' ']],
  [[' ', '_', ' '], [' ', '_', '|'], [' ', '_', '|']],
  [[' ', ' ', ' '], ['|', '_', '|'], [' ', ' ', '|']],
  [[' ', '_', ' '], ['|', '_', ' '], [' ', '_', '|']],
  [[' ', '_', ' '], ['|', '_', ' '], ['|', '_', '|']],
  [['_', '_', ' '], [' ', '/', ' '], ['/', ' ', ' ']],
  [[' ', '_', ' '], ['|', '_', '|'], ['|', '_', '|']],
  [[' ', '_', ' '], ['|', '_', '|'], [' ', ' ', '|']]
 ];
 var numString = num.toString();
 var result = '';
 for (var i = 0; i < numString.length; i++) {
  var line = [];
  for (var j = 0; j < numString.length; j++) {
   if (j === 0) {
    line = [line.concat(strings[Number(numString[j])][i]).join('')];
   } else if (j === 2 && (i === 1 || i === 2)) {
    line = [line.concat(' . ',  strings[Number(numString[j])][i]).join('')];
   } else if (j === 2) {
    line = [line.concat('   ',  strings[Number(numString[j])][i]).join('')];
   } else {
    line = [line.concat(' ',  strings[Number(numString[j])][i]).join('')];
   }
  }
  console.log(line);
  result += line + '\n';
 }
 return result;
}

console.log(timeMaker(65522));
setInterval(function() {
 var time = new Date();
 console.log(time.getHours());
 console.log(time.getMinutes());
 console.log(time.getSeconds());
}, 1000000);

function lcd (num) {
 var strings = [
  [[' ', '_', ' '], ['|', ' ', '|'], ['|', '_', '|']],
  [[' ', ' ', ' '], [' ', ' ', '|'], [' ', ' ', '|']],
  [[' ', '_', ' '], [' ', '_', '|'], ['|', '_', ' ']],
  [[' ', '_', ' '], [' ', '_', '|'], [' ', '_', '|']],
  [[' ', ' ', ' '], ['|', '_', '|'], [' ', ' ', '|']],
  [[' ', '_', ' '], ['|', '_', ' '], [' ', '_', '|']],
  [[' ', '_', ' '], ['|', '_', ' '], ['|', '_', '|']],
  [['_', '_', ' '], [' ', '/', ' '], ['/', ' ', ' ']],
  [[' ', '_', ' '], ['|', '_', '|'], ['|', '_', '|']],
  [[' ', '_', ' '], ['|', '_', '|'], [' ', ' ', '|']]
 ];
 var numString = num.toString();
 var result = '';
 for (var i = 0; i < numString.length; i++) {
  var line = [];
  for (var j = 0; j < numString.length; j++) {
   line = [line.concat(' ',  strings[Number(numString[j])][i]).join('')];
  }
  result += line + '\n';
 }
 return result;
}
