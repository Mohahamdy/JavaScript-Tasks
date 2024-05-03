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
var dateExpire = new Date;
dateExpire.setDate(dateExpire.getDate()+3);
function setCookie(key, value){
    document.cookie = key + "=" + value + ";expires=" + dateExpire
}
var item = document.getElementById("item");
var counter = getCookie("count");
counter++;
setCookie("count",counter);
var gender = getCookie("gender");
var img ;
if (gender == 'male')
{
    img = "<img src='./1.jpg'>";
}
else
{
    img = "<img src='./2.jpg'>";
}
var body = document.getElementsByTagName("body")[0];
body.innerHTML = `
${img}
<p style="display: inline;font-size:20px;margin-top:138px">Welcome <span style="color: ${getCookie("color")}">${getCookie("name")}</span> you have visted the site <span style="color: ${getCookie("color")}">${getCookie("count")}</span> time ;)</p>
`
