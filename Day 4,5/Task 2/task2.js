var input = 0;
var circles = document.getElementsByClassName("circle")
var interal = setInterval(function (){
    input++;
    if(input < 4)
    {
        for(var i=0;i<circles.length;i++)
    {
        circles[i].classList.remove("cred","corange","cgreen")
    }
    if(input == 1)
    {
        circles[0].classList.add("cred")
    }
    else if(input == 2)
    {
        circles[1].classList.add("corange")
    }
    else if(input == 3)
    {
        circles[2].classList.add("cgreen")
    }
    }
    else{
        input=0;
    }
}, 1000);
