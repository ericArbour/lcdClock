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
   } else if (j === 4 && (i === 1 || i === 2)) {
    line = [line.concat(' . ',  strings[Number(numString[j])][i]).join('')];
   } else if (j === 4) {
    line = [line.concat('   ',  strings[Number(numString[j])][i]).join('')];
   } else {
    line = [line.concat(' ',  strings[Number(numString[j])][i]).join('')];
   }
  }
  result += line + '\n';
 }
 return result;
}

setInterval(function() {
 var time = new Date();
 var hours = time.getHours().toString().length < 2 ? "0" + time.getHours() : time.getHours().toString();
 var minutes = time.getMinutes().toString().length < 2 ? "0" + time.getMinutes() : time.getMinutes().toString();
 var seconds = time.getSeconds().toString().length < 2 ? "0" + time.getSeconds() : time.getSeconds().toString();
 console.log(timeMaker(hours + minutes + seconds));
}, 1000);

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
