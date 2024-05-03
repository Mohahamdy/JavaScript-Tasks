function getNumbers(num)
{
    var numbers=[];
    for(var i = 0;i < num;i++)
    {
        numbers.push(Number(prompt("Enter number"+(i+1)+"")))
    }
    return numbers;
}
var values=getNumbers(5);
function sortAsc()
{
    return values.sort(function(a,b){return a-b})
}
function sortDesc()
{
    return values.sort(function(a,b){return b-a})
}
document.writeln("<h1>Sorting</h1> <hr> "+
"<h2><span style='color:red'>u'have entered the valyes: </span>"+values+"</h2>"+
"<h2><span style='color:red'>ur values after being sorted descending: </span>"+sortDesc()+"</h2>"+
"<h2><span style='color:red'>ur values after being sorted ascending: </span>"+sortAsc()+"</h2>");
