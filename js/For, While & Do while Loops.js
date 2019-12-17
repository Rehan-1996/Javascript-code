// for(let i=0;i<10;i++)
// {
//     console.log(i)
// }

// let j=0;
// while(j<10)
// { 
    
//     console.log(j);
//     if(j==5)
//     {
//         break;
//     }
//     j+=1;
   
// }
// console.log("done");

// let j=0;
// do
// { 
//     if(j===5)
//     {
//         j+=1;
//         continue;
//     }
//     console.log(j+1);
//     j+=1;  
// }while(j<10);
// console.log("done");

// }
//  let k=0;
//  do{
     
//      console.log(k);
//      k+=1;
//  }while(k<10)

//For Each Loop
// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach(function(element){
//  console.log(element);
// });
//OR
// let arr=[1,2,3,4,5,6,7,8,9];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element,(typeof element));
    
// }


//object literal
let obj ={
    name : "Muhammad Rehan Akhtar",
    Subjetc : "BSSE",
    City : "BUrewala",

}
for(let key in obj)
{
    console.log(`${key} of object is ${obj[key]}`);
}