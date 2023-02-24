
async function FetchData(page=1){
    try{
        let res = await fetch(`https://pastic4-bee.onrender.com/Books?_limit=10&_page=${page}`)
        let totalitem = res.headers.get('X-Total-Count');
        let totalpage=Math.ceil(totalitem/10)
        res = await res.json()
        console.log(res)
        displayproduct(res)
        paginationbtns(totalpage);
    }catch(err){
        console.log(err)
    }
}

FetchData()

async function fullldata(){
  try{
    let res = await fetch('https://pastic4-bee.onrender.com/Books')
    res = await res.json()
    console.log(res)
    
  }catch(err){
    console.log(err)
  }
}

let cartArr = JSON.parse(localStorage.getItem("cart")) || []

let container = document.querySelector(".inner")
const paginationDiv=document.getElementById('pagination-wrapper');
  function displayproduct(data){
    container.innerHTML=null
    data.forEach((product)=>{
    let card = document.createElement("div")
    // card.classList.add("cardiv")
    card.setAttribute("class","cardiv")
    let image = document.createElement("img")
    // image.classList.add("cardimg")
    image.setAttribute("class","cardimg")
    let name =  document.createElement("h3")
    // name.classList.add("cardname")
    name.setAttribute("class","cardname")
    let authname = document.createElement("p")
    // authname.classList.add("cardauth")
    authname.setAttribute("class","cardauth")
    let genre = document.createElement('p')
    // genre.classList.add("cardgenre")
    genre.setAttribute("class","cardgenre")
    let price =document.createElement("p")
    // price.classList.add("cardprice")
    price.setAttribute("class","cardprice")
    let pages = document.createElement('p')
    // pages.classList.add("cardpage")
    pages.setAttribute("class","cardpage")
    let addtocart = document.createElement("button")
    // addtocart.classList.add("cardadd")
    addtocart.setAttribute("class","cardadd")
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
  function paginationbtns(page){
    let btn=[]
    for(let i=1;i<=page;i++){
      btn.push(`<button class='pagination-button' data-page-number=${i}>
      ${i}</button>`)
    }
    paginationDiv.innerHTML=btn.join("")
  
  let all_btn=document.querySelectorAll(".pagination-button")
  
  for(let btns of all_btn){
    btns.addEventListener('click',(e)=>{
      console.log(e.target.dataset.pageNumber);
      FetchData(e.target.dataset.pageNumber)
    })
  }
  
  }

  function 
