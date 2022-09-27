document.getElementById("answer").onclick = function()
{
    const correct = document.getElementById("opt1") ;

    if(correct.checked)
    {
        document.getElementById("answerdis").innerHTML = "Answer is : Correct ";
    }
    else{
        document.getElementById("answerdis").innerHTML = "Answer is : Wrong ";
    }
}