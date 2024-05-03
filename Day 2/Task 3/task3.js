function write(string)
{
    document.writeln("<h1>"+string+"</h1>");
}
function FizzBuzzGame(num){
    if(num % 3 == 0 && num % 5 == 0)
    {
        write("fizz buzz");
    }
    else if(num % 3 == 0)
    {
        write("fizz");
    }
    else if(num % 5 == 0)
    {
        write("buzz");
    }
    else 
    {
        write("none");
    }
}
var number = Number(prompt("Enter a number"))
FizzBuzzGame(number);
