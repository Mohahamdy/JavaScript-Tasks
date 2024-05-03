function add() {
    var sum = 0;
    if(arguments.length == 0)
    {
        throw "No numbers";
    }
    else{
        for(var i = 0; i < arguments.length; i++)
        {
            if(isNaN(arguments[i]) || typeof arguments[i] != "number"){
                throw "Invalid number";
            }
            sum += arguments[i];
        }
        return sum;
    }
}
var sum =add(1,2,'3');
console.log(sum);