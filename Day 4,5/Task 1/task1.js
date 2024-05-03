var pics =document.getElementsByClassName("pic")
// console.log(imgs)
var count=0;
var setinter=function(){
    if(count < pics.length-1){
        pics[count+1].setAttribute("src","./marbels/marble3.jpg")
        pics[count].setAttribute("src","./marbels/marble1.jpg")
        count++;
    }
    else{
        count=0;
        pics[count].setAttribute("src","./marbels/marble3.jpg")
        pics[pics.length-1].setAttribute("src","./marbels/marble1.jpg")
    }
}
var picInterval=setInterval(setinter,500);
var parent= document.getElementsByClassName("parent")[0]
parent.addEventListener("mouseenter",function(){
    clearInterval(picInterval);
});
parent.addEventListener("mouseleave",function(){
    picInterval=setInterval(setinter,500);
})