let tbodyel = document.querySelector("tbody")
let countEl=document.getElementById("count")

let authorEl=document.getElementById("author")
let genreEl=document.getElementById("genre")
let imageEl=document.getElementById("image")
let isbnEl=document.getElementById("isbn")
let nameEl=document.getElementById("name")
let pagesEl=document.getElementById("Pages")
let priceEl=document.getElementById("price")
let idEl=document.getElementById("id")

let buttonEl=document.querySelector(".btn")
let btnEl=document.querySelector(".btns")

let AddPro=document.getElementById("btn")

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
    countEl.textContent=data.length
}

function display(data) {
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