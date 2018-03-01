var ageJohn = 15;
var ageMark = 15;
var ageRoy = 15;
var heightJohn = 150;
var heightMark = 150;
var heightRoy = 150;

var totalJohn = heightJohn + (5 * ageJohn);
var totalMark = heightMark + (5 * ageMark);
var totalRoy = heightRoy + (5 * ageRoy);

console.log('John: ' + totalJohn);
console.log('Mark: ' + totalMark);
console.log('Roy: ' + totalRoy);

if(totalJohn > totalMark && totalJohn > totalRoy)
    console.log('John is the winner with a score of' + ' ' + totalJohn);
else if(totalJohn < totalMark && totalRoy < totalMark)
    console.log('Mark is the winner with a score of' + ' ' + totalMark)
else if(totalRoy > totalJohn && totalRoy > totalMark)
    console.log('Roy is the winner with a score of' + ' ' + totalRoy);
else
    console.log('All are the winners');