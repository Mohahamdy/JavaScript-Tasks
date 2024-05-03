function show()
{
    var tagName = document.getElementsByClassName("tag")[0].value.toLowerCase();
    var tagsLength = document.getElementsByTagName(tagName).length;
    var className = document.getElementsByTagName("input")[1].value;
    var classLength = document.getElementsByClassName(className).length;
    var id = document.querySelector(".id").value
    var idValue = !!document.getElementById(id);
    var name = document.querySelectorAll(".name")[0].value
    var nameLength = document.getElementsByName(name).length;

    var textArea = document.getElementById("text");
    textArea.innerText = ""+tagName+":"+tagsLength+" ,"+className+":"+classLength+" ,id:"+idValue+" ,Name:"+nameLength+"";
    
}