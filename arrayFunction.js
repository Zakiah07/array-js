const name = "Zakiah Potter";

//GET THE FIRST NAME
console.log(name.substring(0,6)); Zakiah

//GET THE LAST NAME
console.log(name.substring(7,12)); Potter
console.log(name.substring(6)); Potter

//GET THE FIRST TWO LETTERS OF FIRST NAME
console.log(name.substring(0,2)); Za

//GET THE LAST TWO LETTERS OF THE LAST NAME
console.log(name.substring(9)); er
console.log(name.substring(name.length - 2)); er //BETTER WAY
console.log(name.substring(-2)); Zakiah Potter

const nameAndAge = "Zakiah Potter-24";

//GET THE NAME
console.log(nameAndAge.substring(0,11)); Zakiah Potter
const dashIndex = nameAndAge.indexOf("-");
console.log(dashIndex); 13
console.log(nameAndAge.substring(0, dashIndex)); Zakiah Potter

//GET THE AGE
console.log(nameAndAge.substring(dashIndex + 1)); 24