let numer=String(34);
console.log(numer,(typeof numer))

let date = String( new Date());
console.log(date,(typeof date));

let arr=String([1,2,3,4,5]);
console.log(arr.length,(typeof arr))

let i=8;
console.log(i.toString());

let k = Number("56");
console.log(k  , (typeof k));

let num = parseInt("23");
console.log(num,(typeof num));

let num1=parseFloat("100.00");
console.log(num1.toFixed(3),(typeof num1));//tofixed how many digit you show in decimel.

// Type coercion
let mystr="234";
let mynum=10;
console.log(mystr + mynum);//23410