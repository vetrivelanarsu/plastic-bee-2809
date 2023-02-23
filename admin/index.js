let tbodyel = document.querySelector("tbody")
let countEl=document.getElementById("count")
let global = []
getdata()
async function getdata() {
    let req = await fetch("https://pastic1-bee.onrender.com/Books")
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

        card.append(td2, td3, td1, td6, td4, td5)

    });
}