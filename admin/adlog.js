
let userEl=document.getElementById("username")
let passEl=document.getElementById("pass")
let logEl=document.getElementById("do-login")
let divEl=document.querySelector(".sanju")
let diEl=document.querySelector(".venky")



logEl.addEventListener("click",()=>{
    let a=userEl.value
let b=passEl.value
    let c=document.createElement("h2")
    let d=document.createElement("h3")

    divEl.append(c)
    // diEl.append(d)
    if(a=="abc" && b==123){
    logEl.href="admin.html"
   
    }else{
        c.innerText="Wrong credentials"
    }
    d.innerText=`Welcome ${a}`
})