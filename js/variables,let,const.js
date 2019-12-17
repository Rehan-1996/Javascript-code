// variable declaration in javascript

// we can declare variable by keyward var,const,let

// Rule for javascript variables
// 1. cannot start with number
// 2.can start with letter,_,$ and numbers,
// 3.Are case sensitive
 
// by using var we can store value again in variable
// var has scope in whole code
var name="rehan Akhtar";
name="Muhammad Rehan Akhtar"
// console.log(name);
var channel="rehan records";
var city="Lahore";
var marks=34;
console.log(name,channel,marks);
// we can not change value of variable by keyword const
const owername="Akhtar";


// let keyword has block level scope,it may in if condition and for loop
{
    //now city in block is local variable by using let.

let city="karachi"; //result  will be "karachi" because it block
city="Multan"; // city value change to "multan"
console.log(city);
}
console.log(city) // lahore



// we can assign new array to arr1 but push and pop in array.
const arr1=[1,3,2,7,4,8];
arr1.push(45);
console.log(arr1);

// Most commen programming CAse Type
// 1.camelCase
// 2.kebab-case
// 3.snake_case
// 4.PascalCase
