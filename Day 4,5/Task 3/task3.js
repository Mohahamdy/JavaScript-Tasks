var srcImgs=["./imags/1.jpg","./imags/2.jpg","./imags/3.jpg"]
var btn4 = document.getElementsByClassName("btn1")[1];
var btn1 = document.getElementsByClassName("btn1")[0];
var btn2 = document.getElementsByClassName("btn2")[0]
var img=document.getElementsByTagName("img")[0]
var index=0;
btn4.addEventListener("click",function(){
    if(index <2)
    {
        index++
        img.setAttribute("src",srcImgs[index])
    }
    else{
        index=0
        img.setAttribute("src",srcImgs[index])
    }
})
btn1.addEventListener("click",function(){
    if(index >0)
    {
        index--;
        img.setAttribute("src",srcImgs[index])
    }
    else{
        index=2
        img.setAttribute("src",srcImgs[index])
    }
    // console.log(index)
})
var setPicsInterval=function(){
    if(index < 2){
        index++;
        img.setAttribute("src",srcImgs[index])
        
    }
    else{
    index=0;
    img.setAttribute("src",srcImgs[index])
    }
    console.log(index)
}
var picInterval=0;
function play()
{
    if(picInterval == 0){
        picInterval =setInterval(setPicsInterval,1000);
    }
}

function stop(){
    clearInterval(picInterval)
    picInterval=0;
}