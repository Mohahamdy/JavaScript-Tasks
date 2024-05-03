var btn =document.getElementById("btn")
btn.addEventListener("click",function(){
    var message="Your message will be displayed charactar by character ;) few scenods and this window will terminate ..."
    var newWindow =window.open("","WINDOW","width=400,height=400")
    var index=0
    var messageInterval=setInterval(function(){
    if(index < message.length){
    newWindow.document.write(message[index])
    index++;
    console.log(index)
    }
    else{
        clearInterval(messageInterval)
        setTimeout(function() {
            newWindow.close();
        }, 800);
    }
    },100)
})


