
function name(value1)
{
    console.log(`My name is ${value}.`);
}

function age(value2 , callback)
{
    console.log(`my age is ${value2}.`)
    callback(value);
}

age(22,name);