
async function FetchData(){
    try{
        let res = await fetch('https://pastic1-bee.onrender.com/Books')
        res = await res.json()
        console.log(res)
        displayproduct(res)
    }catch(err){
        console.log(err)
    }
}

FetchData()



let cartArr = JSON.parse(localStorage.getItem("cart")) || []

let container = document.querySelector(".inner")
  function displayproduct(data){
    container.innerHTML=null
    data.forEach((product)=>{
    let card = document.createElement("div")
    let image = document.createElement("img")
    let name =  document.createElement("h3")
    let authname = document.createElement("p")
    let genre = document.createElement('p')
    let price =document.createElement("p")
    let pages = document.createElement('p')
    let addtocart = document.createElement("button")

    addtocart.textContent="Add to Cart"

    image.src=product.image;
    name.textContent=`Book : ${product.name}`
    authname.textContent=`Author : ${product.author}`
    genre.textContent=`Genre : ${product.genre}`
    price.textContent=`Price : ${product.price}`
    pages.textContent=`Pages : ${product.pages}`







    card.append(image,name,authname,genre,price,pages,addtocart)
    container.append(card)

  })
  }
