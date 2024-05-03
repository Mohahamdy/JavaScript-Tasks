function reverseNums(){
    var reversNums = [];
    for(var i = arguments.length - 1; i >= 0; i--)
    {
        reversNums.push(arguments[i]);
    }
    return reversNums;
}
var nums = reverseNums(1,2,3,4,5);
console.log(nums);

function reverseNumbers(){
    var reversNumbres = [];
    for(var i = 0; i < arguments.length; i++)
    {
        reversNumbres.push(arguments[i]);
    }
    return reversNumbres.reverse();
}
var nums = reverseNumbers(1,2,3,4,5);
console.log(nums);