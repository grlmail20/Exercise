var x = ["hi", "hello","sunday","day","h"];

function findShort(arr)
{

	var output = arr[0];

	for (var i=0; i < arr.length; i++)
	{
		if (arr[i].length < output.length)
		  output = arr[i];
	}

	return output
}

console.log("The shortest string from this array is- " +findShort(x));

