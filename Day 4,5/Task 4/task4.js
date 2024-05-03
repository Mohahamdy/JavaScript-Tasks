var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var img = document.getElementById("img")
img.setAttribute("width","600");
    img.setAttribute("hieght","250");
btn1.addEventListener("click",function(){
    img.setAttribute("src","./1.jpg");
})
btn2.addEventListener("click",function(){
    img.setAttribute("src","./2.jpg");
    
})