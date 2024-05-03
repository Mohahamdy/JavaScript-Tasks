//var string= prompt("Enter String")
do
{
    var string= prompt("Enter String")
}while(!isNaN(string))
var char=prompt("Enter Character")
var count =0
for(var i=0;i< string.length;i++)
{
    if(string.charAt(i) == char)
        count+=1;
}
console.log(count)
document.writeln("<h1>Count of character '"+char+"' in string '"+string+"' is "+count+"</h1>")