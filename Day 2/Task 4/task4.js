function CharacterGame(sentence ,letter)
{
    var indexes=[]
    for(var i=0; i<sentence.length;i++)
    {
    if(sentence[i]==letter){indexes.push(i);}
    }
    return indexes;
}

var sentence = prompt("Enter a sentance");
var letter = prompt("Enter a letter")
var indexesArr = CharacterGame(sentence,letter)

document.writeln("<h1>Indexes of letter '"+letter+"' is "+indexesArr+"</h1>");