var add = document.getElementById("btn")
var userName = document.getElementById("name")
var spanName = document.getElementsByClassName("name")[0]
var age = document.getElementById("age")
var spanAge = document.getElementsByClassName("age")[0]
var tbody = document.getElementsByTagName("tbody")[0]
var i = 1;
add.addEventListener("click", function(){
    
    if(userName.value == "" || userName.value.length < 3)
    {
        spanName.innerHTML="<span style='color:red;display:block'>- Invalid Name -</span>"
        userName.value = "";
    }
    else
    {
        spanName.innerHTML=""
    }
    if(Number(age.value) <18 || !isNaN(age.value))
    {
        spanAge.innerHTML="<span style='color:red;display:block'>- Invalid Age -</span>"
        age.value = "";
    }
    else
    {
        spanAge.innerHTML=""
    }
    if(age.value != "" && userName.value != ""){
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
    var btn = document.createElement("button")
    td4.appendChild(btn)
    btn.innerText = "Delete"
    td1.textContent = i
    i++;
    td2.textContent = userName.value
    td3.textContent = age.value
    tr.append(td1, td2, td3, td4)
    tbody.append(tr)
    btn.addEventListener("click", function()
    {
        tr.remove();
    }
    )
    }
}
)
