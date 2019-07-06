var array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var input=prompt('please select a number from 0 to 9 to delete!' ) ;
console.log(input);
array.splice(input,1);
console.log(array );
//end