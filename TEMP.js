


document.getElementById("submit").onclick = function()
{
    temp = document.getElementById("ip").value;
    temp = Number(temp);

    if(document.getElementById("opt1").checked)
    {
        temp = tocalcius(temp);
        document.getElementById("answer").innerHTML = temp + "C";
    }

    else if(document.getElementById("opt2").checked)
    {
        temp = tofarnhit(temp);
        document.getElementById("answer").innerHTML = temp + "F";
    }

    else
    {
        alert(`Select the option !! `);
    }
}

function tocalcius(temp){
    return (temp-32)*(5/9);
}

function tofarnhit(temp){
    return temp+97;
}
