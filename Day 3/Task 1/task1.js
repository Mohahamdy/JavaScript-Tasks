function sortAsc(values)
{
    return values.sort(function(a,b){return a-b})
}
function sortDesc(values)
{
    return values.sort(function(a,b){return b-a})
}
var Numbers=[]
function add()
{
    var inp = document.getElementById("input");
    var number = Number(inp.value);
    Numbers.push(number);
    inp.value ="";
}

function showResult()
{
    var p1 = document.getElementById("p1");
    p1.innerHTML="Inputs: ("+Numbers+")";
    var p2 = document.getElementById("p2");
    p2.innerHTML="Output: "+sortAsc(Numbers)[1]+","+sortDesc(Numbers)[1]+""
}