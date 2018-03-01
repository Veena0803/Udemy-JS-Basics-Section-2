// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/







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