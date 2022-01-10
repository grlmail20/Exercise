const a = parseFloat(prompt("Enter the value in Kilograms"));
function retPound(a)
{
return a*2.205;
}
console.log("The Value of " +a +" kg in Pounds = " +retPound(a) +" lbs");
const b = parseFloat(prompt("Enter the value in Pounds"));
function retKilo(b)
{
return b/2.205;
}
console.log("The Value of " +b +" lb in Kilograms = " +retKilo(b) +" kgs");

