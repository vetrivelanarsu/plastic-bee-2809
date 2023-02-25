let tbodyel = document.querySelector("tbody")
let countEl=document.getElementsByClassName(".counter")

let authorEl=document.getElementById("author")
let genreEl=document.getElementById("genre")
let imageEl=document.getElementById("image")
let isbnEl=document.getElementById("isbn")
let nameEl=document.getElementById("name")
let pagesEl=document.getElementById("Pages")
let priceEl=document.getElementById("price")
let idEl=document.getElementById("id")
let countp = document.getElementById("p-counter")
let c=0
let stCount=document.getElementById("s-count")
let sCount=document.getElementById("o-stock")





let buttonEl=document.querySelector(".btn")
let btnEl=document.querySelector(".btns")

let AddPro=document.getElementById("btn")
let tordersel = document.getElementById("torders")

let formel=document.querySelector("form")

AddPro.addEventListener("click",(e)=>{ 
    idEl.style.display="none"
    btnEl.style.display="none"
  e.preventDefault();
    document.getElementById("vac").style.display="block"
    let obj={
        
        author:authorEl.value,
        image:imageEl.value,
        isbn:isbnEl.value,
        name:nameEl.value,
        pages:pagesEl.value,
        price:priceEl.value,
    
    }
    buttonEl.addEventListener("click",(e)=>{
        e.preventDefault();
        // global.forEach((ele, ind) => {
            //if (ind == i) {
                console.log("hi")
                fetch(`https://jsonplaceholder.typicode.com/posts`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body:JSON.stringify(obj)

                    
                }).then(Response => console.log(Response.status))
           // }

        // })
       

        })


})






let global = []
getdata()
async function getdata() {
    let req = await fetch("https://pastic4-bee.onrender.com/Books")
    let data = await req.json()

    display(data)
    global = data
    console.log(data)
    console.log(data.length)
    countp.textContent=data.length
}

function display(data) {
    tbodyel.innerHTML=""
    data.forEach((element, i) => {

        let card = document.createElement("tr")
        tbodyel.append(card)

        let td1 = document.createElement("td")
        td1.innerText = element.price

        let td2 = document.createElement("td")
        td2.innerText = element.name



        let td3 = document.createElement("td")
        td3.innerText = element.author



        let td4 = document.createElement("td")
        td4.innerText = "Active"
        td4.style.color = "green"
        td4.style.fontWeight = "700"
        td4.setAttribute("id", "td4")

        let td5 = document.createElement("td")
        td5.innerText = "Delete"
        td5.style.color = "red"
        td5.style.cursor = "pointer"


        let td6 = document.createElement("td")
        td6.innerText = element.isbn

        

        let td8= document.createElement("td")
        td8.innerText = "Edit"
        td8.style.cursor="pointer"

        td8.addEventListener("click",(e)=>{
           e.preventDefault();
           buttonEl.style.display="none"
            
           document.getElementById("vac").style.display="block"
            console.log("hello")

             
        })
        btnEl.addEventListener("click",(e)=>{
           
                e.preventDefault();

                let obj={

                    author:authorEl.value,
                    image:imageEl.value,
                    isbn:isbnEl.value,
                    name:nameEl.value,
                    pages:pagesEl.value,
                    price:priceEl.value,
                
                }
                // global.forEach((ele, ind) => {


                    if (i == idEl.value) {
            
                    

                        console.log("done")
                        fetch(`https://jsonplaceholder.typicode.com/posts/${idEl.value}`, {
                            method: "PUT",
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body:JSON.stringify(obj)
        
                            
                        }).then(Response => console.log(Response.status))
                    }
                    
        
                // })
        
                })

        
        td5.addEventListener("click", () => {
            global.forEach((ele, ind) => {
                if (ind == i) {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${ind + 1}`, {
                        method: "DELETE",
                        headers: {
                            'Content-type': 'application/json'
                        },
                    }).then(Response => console.log(Response.status))
                }

            })
        })

        card.append(td2, td3, td1, td6, td4, td5,td8)

    });
}

 let togglebtn = document.querySelectorAll(".checkbox")[0];
let search = document.querySelectorAll(".fa-solid fa-magnifying-glass")[0]
let body = document.querySelectorAll("#interface")[0];
let dash = document.querySelectorAll(".i-name")[0]
togglebtn.addEventListener("click", () => {
  console.log("toggle")
  body.classList.toggle("dark")
  dash.classList.toggle("dark")
}) 



formel.addEventListener("submit", (e) => {
    e.preventDefault()
    let textel = searchinp.value
   
    let filtered = global.filter((element) => {
      if (element.name.toUpperCase().includes(textel.toUpperCase()) == true) { 
        return true
      } else {
        return false
      }
    })
    display(filtered)
    
  })

  countEl.addEventListener("click", ()=>{
    c++
    console.log("hi")
    tordersel.textContent = c
    // stCount.textContent --
    if(stCount.textContent>=0){
      stCount.textContent--
      if(stCount.textContent==-1){
        stCount.textContent=5
        
          sCount.textContent++
        
      }
  
    }
  })