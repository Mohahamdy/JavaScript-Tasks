var userName = document.getElementById('userName');
var age = document.getElementById('age');
var genderElement = document.getElementById("male");
var gender;
var dateExpire = new Date;
dateExpire.setDate(dateExpire.getDate()+3);
var expiredDate = new Date;
expiredDate.setDate(expiredDate.getDate()-1);
var count = 0;
function setCookie(key, value){
    document.cookie = key + "=" + value + ";expires=" + dateExpire
}
function getAllCookie(){
    return document.cookie;
}
function getCookie(key){
    var name = key + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return ""; 
}
function deletCookie(key, value){
    document.cookie = key + "=" + value + ";expires=" + expiredDate
}
function change(){
    var color = document.getElementById('color').value
    if (genderElement.checked){
        gender = "male";
    }
    else{
        gender = "female";
    }
    setCookie("name",userName.value);
    setCookie("age",age.value);
    setCookie("gender",gender);
    setCookie("color",color);
    setCookie("count",count);
    window.location.href = "./home.html";
}
