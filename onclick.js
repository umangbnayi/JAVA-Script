let x=0;
let y=0;
let z=0;


document.getElementById("ans").onclick = function()
{
    x = document.getElementById("a1").value;
    x=Number(x);

    y = document.getElementById("b1").value;
    y=Number(y);
    
    z= Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

    document.getElementById("c").innerHTML = z;
}