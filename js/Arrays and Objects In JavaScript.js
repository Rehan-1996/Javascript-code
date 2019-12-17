console.log("Arrays and Objects In JavaScript");

let marks=[12,13,14,15,17,15];
let fruit=["orange","apple","bananna","guava"];
let mixed=[22,"rehan",23.44];

let arr= new Array();
 console.log(marks);
 console.log(fruit);
 console.log(mixed);
 console.log(marks.length);
// All method change the original Array 
 console.log(marks.push(223));//add in last of array
 console.log(marks.pop());//reomove from l;ast of array
 console.log(marks.unshift(1008));//add in first index of array
 console.log(marks.shift());//remove from first index of array
 console.log(marks.splice(1,2));//remove from index 1 to 2.start from 1 and remove 2 element. 
 console.log(marks.reverse());
 console.log(marks);


//  Object  its use for complex values and have string,number,array etc in it
 let myobj={
 'first name':"Rehan",
 name:'Akhtar',
 channel:"code with rehan",
 isactive:true,
 arre:[1,2,3,4,5]
 }
//  first method to access the object elemnts
 console.log(myobj);
 console.log(myobj.channel);
 console.log(myobj.arre);

//  second method to access the object elements
 console.log(myobj["first name"]);
 console.log(myobj['is active'])