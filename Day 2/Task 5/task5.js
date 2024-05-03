function write(string)
{
    document.writeln("<h1>You are "+string+"</h1>");
}
function whoAmIGame()
{
    if(confirm("Do you fly?"))
    {
        if(confirm("Are you wild?"))
        {
            write("Eagle");
        }
        else
        {
            write("Parrot");
        }
    }
    else
    {
        if(confirm("Do you live under sea?"))
        {
            if(confirm("Are you wild?"))
            {
                write("Shark");
            }
            else
            {
                write("Dolphin");
            }
        }
        else
        {
            if(confirm("Are you wild?"))
            {
                write("Lion");
            }
            else
            {
                write("Cat");
            }
        }
    }
}
whoAmIGame();