let counter=0;

document.getElementById("dbutton").onclick = function()
{
    counter -= 1 ;
    document.getElementById("count").innerHTML = counter;
}

document.getElementById("rbutton").onclick = function()
{
    counter = 0 ;
    document.getElementById("count").innerHTML = counter;
}

document.getElementById("ibutton").onclick = () =>
{
    counter += 1 ;
    document.getElementById("count").innerHTML = counter;
}