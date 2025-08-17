/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);//no change needed. JS implicitly converts string to number. 

let isValid = Boolean("false");
if (isValid) {//isValid is assigned booleanvalue true
    console.log("This is valid!");//no change needed, code is executed properly
}

let str = "25";
let age = Number(str);//converted the age string to a number
let totalAge = age + 5;//now it properly adds 5 to the age
console.log("Total Age: " + totalAge);

//my example of implicit type conversion

let answer = "The answer is:" + 58;
console.log(answer);//JavaScript implicitly changes the number to a string to combine.

//my example of explicit type conversion

let greeting = "Hello";
let a1 = Boolean(greeting);//converts string into boolean
let emptyGreeting = "";//empty string is falsy value
let a2 = Boolean(emptyGreeting);//converts empty string into boolean
console.log(a1)
console.log(a2)
