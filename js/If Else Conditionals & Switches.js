const age=45;
let rehan=true;
let lion;
// if(age==45) mean its not  check type of variable
//if(age===45)mean its also check type of varibale. 
if(age==45)
{
    console.log("Age is 45")
}
else if(age!=30)
{
    console.log("Age is 45 also")
}
else{
    console.log("Age is not 45")
}

if(rehan)
{
    console.log("Rehan is true")
}

if(typeof lion!="defined")
{
    console.log("its not define")
}

//switch Statement
switch (age) {
    case 45:
        console.log("your age is 45")
        break;
    case 18:
        console.log("your age is 18")
        break;          
    case 20:
        console.log("your age is 20")
        break;    
    default:
        console.log("your age is unknow")
        break;
}