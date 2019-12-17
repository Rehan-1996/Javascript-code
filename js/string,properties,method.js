const name="Rehan";
const Greeting="Good Morning";
console.log(name+" "+Greeting);

 let html="<h1>I am Boy<\h1>"+"<p>i am paragraph<\p>";
 html=html.concat ("i am html plus","i am page");// its concatinate function but not working now.
 console.log(html);

//  console.log(html.indexOf(">"));
//  console.log(html.lastIndexOf('<'));
//  console.log(html.charAt(3));
//  console.log(html.endsWith("page"));
//  console.log(html.includes("plus"));
// console.log(html.substring(1,6));
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html.slice(2,8));
// console.log(html.split(" "));
// console.log(html.replace("this ","it"));

// Template Literal
// let fruit1  ="orange";
// let fruit2 ="Apple";
// let myhtml =`hello ${name}
//            <h1> i love ${fruit1} and ${fruit2}.</h1>
//            <p>${name} ${Greeting}</p>
// `
// document.body.innerHTML = myhtml;


let str0="Introductions";
let str1="i am programmer and i watch code with harry.";
html1=`
<h1>${str0}</h1>
<p>${str1}</p>

`
document.body.innerHTML=html1;