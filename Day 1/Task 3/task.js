do
{
    var string= prompt("Enter String")
}while(!isNaN(string))

// var revString="";
// for(var i=(string.length - 1);i>=0;i--)
// {
//     revString+=string[i];
// }
var revString = string.split("").reverse().join("");

var caseSensitive= confirm("Do you need cosider case sensiitve?")
if(caseSensitive)
{
    (string==revString)?document.writeln("<h1>String is palindrome</h1>"):document.writeln("<h1>String is not palindrome</h1>")
}
else
{
    (string.toLowerCase==revString.toLowerCase)?document.writeln("<h1>String is palindrome</h1>"):document.writeln("<h1>String is not palindrome</h1>")
}