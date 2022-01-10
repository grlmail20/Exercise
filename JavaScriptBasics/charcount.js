function char_count(str)
{
var letter_count = 0;
for (var position = 0; position < str.length; position++)
{
letter_count= letter_count+1;
}
return letter_count;
}

console.log(char_count('Holiday'));

