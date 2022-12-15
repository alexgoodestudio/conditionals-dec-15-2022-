var ageRequiredToDrive = 16;
var currentAge= 15;
var canPersonDrive = currentAge >= ageRequiredToDrive;
console.log (canPersonDrive);

var firstName=("Tim");
if (firstName == "Joe") {
  console.log ('Hello Joe');
} else {
  console.log ('Hello'+' ' + firstName);
}

var costOfMilk= (2);
if (costOfMilk<2){
  console.log('We will buy 2 gallons please!')
}
else if(costOfMilk<3){
  console.log('We will take 1 gallon!')
}else{
  console.log('None Today!')
}

//Switch//
var grade ='A';
switch(grade){
  case'A':
    console.log('90-100');
    break;
  case 'B':
    console.log('80-89')
    break;
  case 'C':
    console.log('70-79')
    break;
  default:
    console.log('0-69')
}
//incrementing
for (let i = 0; i < 10; i++){
  console.log(i)
}
//incrementing even numbers
for (let i = 0; i< 20; i++){
  if(i % 2 == 0)
  console.log(i)
} 

let names = ['Sam','Tom', 'Hiliary'];
for (let  i = 0; i < names.length; i++){
  console.log(names[i]);
}
// While Loop
let A = 0;

while (A < 10){
  console.log(A)
  A++

}
//Do While Loop

do {
  console.log(a);
 } while(a > 10)
