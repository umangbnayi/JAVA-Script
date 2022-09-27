const p = new Promise((resolve , reject)=>
{
    let x = 1;
    if(x == 1){
        resolve("this is true !!" )
    }
    else{
        reject("this is false !!")
    }
})

p.then(console.log("hey im true and the first"))
.catch(console.log("im false but first ."))