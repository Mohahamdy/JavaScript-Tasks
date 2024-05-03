function getNumbers(num)
{
    var numbers=[];
    for(var i = 0;i < num;i++)
    {
        numbers.push(Number(prompt("Enter number"+(i+1)+"")))
    }
    return numbers;
}
var values=getNumbers(3);
function add(){
    return values[0]+values[1]+values[2];
}
function multi(){
    return values[0]*values[1]*values[2];
}
function div(){
    return values[0]/values[1]/values[2];
}
document.writeln("<h1>Adding - Multiplying - Dividing of 3 Values</h1> <hr> "+
"<h2><span style='color:red'>Sum of the 3 values </span>"+values[0]+"+"+values[1]+"+"+values[2]+"="+add()+"</h2>"+
"<h2><span style='color:red'>Multiplication of the 3 values </span>"+values[0]+"*"+values[1]+"*"+values[2]+"="+multi()+"</h2>"+
"<h2><span style='color:red'>Division of the 3 values </span>"+values[0]+"/"+values[1]+"/"+values[2]+"="+div()+"</h2>");