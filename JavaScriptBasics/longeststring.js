let a = prompt("Enter the 1st string");
let b = prompt("Enter the 2nd string");
function retGreat(a,b)
{
if (a.length > b.length)
return a;
else
return b;
}
console.log("The largest string is " +retGreat(a,b));