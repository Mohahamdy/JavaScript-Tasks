var submit = document.getElementById("submit")
var userName = document.getElementById("name")
var nameErorr = document.getElementById("nameErorr")
var email = document.getElementById("email")
var emailrgex =/^\w*@\w*.com$/
var emailErorr = document.getElementById("emailErorr")
var pass = document.getElementById("pass")
var passEror = document.getElementById("passEror")
var gender = document.getElementsByName("gender")
var genderErorr = document.getElementById("genderErorr")
var Sports = document.getElementsByName("Sports")
var sportErorr = document.getElementById("sportErorr")
var country = document.getElementById("country")
var countryErorr = document.getElementById("countryErorr")
submit.addEventListener("click",function(){
    if(userName.value == "")
    {
        nameErorr.innerHTML="- Name is required"
    }
    else{
        nameErorr.innerHTML=""
    }
    if(emailrgex.test(email.value))
    {
        emailErorr.innerHTML=""
    }
    else{
        emailErorr.innerHTML="- Email is not valid"
    }
    if(pass.value.length >= 8)
    {
        passEror.innerHTML=""
    }
    else{
        passEror.innerHTML="- Passowrd must be at least 8 character"
    }
    if(gender[0].checked || gender[1].checked)
    {
        genderErorr.innerHTML=""
    }
    else{
        genderErorr.innerHTML="- Please select your gender"
    }
    if((Sports[0].checked && Sports[1].checked) || (Sports[0].checked && Sports[2].checked) || (Sports[1].checked && Sports[2].checked))
    {
        sportErorr.innerHTML=""
    }
    else{
        sportErorr.innerHTML="- Please select at least two sports"
    }
    if(country.value =="")
    {
        countryErorr.innerHTML="- Please select your country"
    }
    else{
        countryErorr.innerHTML=""
    }
})
