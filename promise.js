/*    const p = new Promise((resolve , reject)=>
    {
        let x = 1;
        if(x == 1){
            return resolve("this is true !!" )
        }
        else{
            return reject("this is false !!")
        }
    })

    p.then(value=>{console.log(value)
                    return value;})
    .catch(error=> alert(error)) */



/*
    document.getElementById("button").onclick = function(){
    let input_age = document.getElementById("input").value;
    input_age = Number(input_age)
    const p = new Promise((resolve,reject)=>{
                                            let age=18;
                                            if (age<input_age)
                                                {
                                                    resolve("You are eligible for voting !")
                                                }
                                                else
                                                {
                                                    reject("you are not allowed to vote !")
                                                }
                                            })

    p.then((value)=>alert("YES !!" + value))
      .catch((error)=> alert("NO !!" + error))
                }


*/
/*
document.getElementById("button").onclick = function()
{
let input_age = document.getElementById("input").value;
    input_age = Number(input_age)
            async function xyz()
            {
                let age=18;
                     if (age<input_age)
                          {
                              return("You are eligible for voting !")
                          }
                          else
                          {
                              throw("you are not allowed to vote !")
                          }
            }

            async function display()
            {
                try{
                let x = await xyz();
                alert(x)
                }
                catch(error){
                    alert(error)
                }
            }
        display();
}

*/