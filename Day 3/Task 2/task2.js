var string=[];
function get()
{
    var input = document.getElementById("input");
    string = input.value;
    input.value="";
}
function makeFirstCapital(string)
{
    var slicedString = string.split(" ");
    var sentence = [];
    for (var i = 0; i < slicedString.length; i++) 
    {
    sentence.push(slicedString[i].charAt(0).toUpperCase() + slicedString[i].slice(1));
    }
    var sentence =sentence.join(" ");
    return sentence;
}
function showResult()
{
    // var p1 = document.getElementById("p1");
    // p1.innerHTML="Inputs: '"+string+"'";
    // var p2 = document.getElementById("p2");
    // p2.innerHTML="Output: "+makeFirstCapital(string);+""

    var p1 = document.createElement("p");
    p1.textContent="Inputs: '"+string+"'";
    document.body.appendChild(p1);
    var p2 = document.createElement("p");
    p2.textContent="Output: "+makeFirstCapital(string);+"";
    document.body.appendChild(p2);
    
}