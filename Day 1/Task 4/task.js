do
{
    var Name= prompt("Enter Name")
}while(!isNaN(Name))

do
{
    var phoneNumber= prompt("Enter Phone Number")
}while(isNaN(phoneNumber) || phoneNumber.length != 8)

do
{ 
    var mobileNumber= prompt("Enter Mobile Number")
    var rgexMobile= /^01[012][0-9]{8}$/;
}while(isNaN(mobileNumber) || !rgexMobile.test(mobileNumber))

do
{
    var Email= prompt("Email")
    var rgexEmail= /^[a-z]{3}@\d{3}.com$/;
}while(!rgexEmail.test(Email))

// var Date = new Date().toLocaleString('en-us',{
//     weekday:'short',
//     month : 'short',
//     day: 'numeric',
//     year: 'numeric'
// })

var Date = new Date().toDateString();

var color = prompt("Enter Color")

document.writeln("<h1>User Info: </h1> <hr> ");

document.writeln("<h2><span style='color:"+color+"'>Welcome dear guest </span>"+Name+"</h2>");
document.writeln("<h2><span style='color:"+color+"'>Your phone number is </span>"+phoneNumber+"</h2>");
document.writeln("<h2><span style='color:"+color+"'>Your mobile number is </span>"+mobileNumber+"</h2>");
document.writeln("<h2><span style='color:"+color+"'>Your Email is </span>"+Email+"</h2>");
document.writeln("<h2 style='margin-top:200px'><span style='color:"+color+"'>Today is </span>"+Date+"</h2>");


