document.getElementById("count").onclick = function()
{
    let x = Math.floor((Math.random() * 6) + 1) ; 
    document.getElementById("player1").innerHTML = "bumber comes is : " + x ;
}