var sum = 0; 
while(num !=0 && num != NaN && sum <= 100)
{
    var num=Number(prompt("Enter Number"))
    sum+=num
}
document.writeln("<h1>Sum of entered numbers= "+sum+"</h1>")