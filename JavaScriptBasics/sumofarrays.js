var x=[1,2,3,4,5];


function sum(arr)
{

  var s=0;

for(var i=0;i< arr.length ;i++)
  {
    s=s+arr[i];
  }
  return s;

}


console.log(sum(x));