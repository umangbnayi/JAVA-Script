let x = Math.floor((Math.random() * 6) + 1) ;
let y = 0 ; 
document.getElementById("submit").onclick = function()
{
    let z = document.getElementById("guessin").value ;
    y +=y;

    if(x==z)
    {
        alert(`your guess is correct , after ${y} number of times `);
    }
    else
    {
        alert(`your guess is incoreect ! `);
    }
}