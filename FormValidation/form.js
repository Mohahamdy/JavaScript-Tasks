var submit = document.getElementById("submit")
var userName = document.getElementById("name")
var nameErorr = document.getElementById("nameError")
var email = document.getElementById("email")
var emailrgex =/^\w*@\w*.com$/
var emailErorr = document.getElementById("emailError")
var password = document.getElementById("password")
var passwordError = document.getElementById("passwordError")
var gender = document.getElementsByName("gender")
var genderErorr = document.getElementById("genderErorr")
var Sports = document.getElementsByName("Sports")
var sportErorr = document.getElementById("sportErorr")
var country = document.getElementById("country")
var countryErorr = document.getElementById("countryErorr")

function change(e){
    e.preventDefault();
    if(userName.value == "")
    {
        nameErorr.innerHTML="<span style='color:red;display:block'>Name is required</span>"
    }
    else{
        nameErorr.innerHTML=""
    }
    if(emailrgex.test(email.value))
    {
        emailErorr.innerHTML=""
    }
    else{
        emailErorr.innerHTML="<span style='color:red;display:block'>Email is not valid</span>"
    }
    if(password.value.length >= 8)
    {
        passwordError.innerHTML=""
    }
    else{
        passwordError.innerHTML="<span style='color:red;display:block'>Password at least 8 char</span>"
    }
    if(gender[0].checked || gender[1].checked)
    {
        genderErorr.innerHTML=""
    }
    else{
        genderErorr.innerHTML="<span style='color:red;display:block'>Select gender</span>"
    }
    if((Sports[0].checked) || (Sports[1].checked))
    {
        sportErorr.innerHTML=""
    }
    else{
        sportErorr.innerHTML="<span style='color:red;display:block'>Select sport</span>"
    if(country.value =="")
    {
        countryErorr.innerHTML="<span style='color:red;display:block'>Country is Required</span>"
    }
    else{
        countryErorr.innerHTML=""
    }
    }
    
}