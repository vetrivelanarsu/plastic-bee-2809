
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


async function filterdata(){
  try{
      let res = await fetch(`https://pastic4-bee.onrender.com/Books`)
   
      res = await res.json()
      console.log(res)
      filtered(res)
      // filterdata(res)
     
  }catch(err){
      console.log(err)
  }
}

let filterp = document.querySelector('#filter')

filterp.addEventListener("change",filterg)
function filterg(){
  filterdata()
}
function filtered(data){
  let value=filterp.value;
  if(value==""){
    FetchData()
  }else{
    data=data.filter((product)=>{
      return product.genre == value
    })
    displayproduct(data)
  }
}



let cartArr = JSON.parse(localStorage.getItem("cart")) || []

let container = document.querySelector(".inner")
const paginationDiv=document.getElementById('pagination-wrapper');








  function displayproduct(data){
    container.innerHTML=null
    data.forEach((product,index)=>{
    let card = document.createElement("div")
 
    card.setAttribute("class","cardiv")
    let image = document.createElement("img")
 
    image.setAttribute("class","cardimg")
    let name =  document.createElement("h3")
   
    name.setAttribute("class","cardname")
    let authname = document.createElement("p")
  
    authname.setAttribute("class","cardauth")
    let genre = document.createElement('p')
  
    genre.setAttribute("class","cardgenre")
    let price =document.createElement("p")
  
    price.setAttribute("class","cardprice")
    let pages = document.createElement('p')
    
    pages.setAttribute("class","cardpage")
    let addtocart = document.createElement("button")
   
    addtocart.setAttribute("class","cardadd")
    addtocart.textContent="Add to Cart"

    image.src=product.image;
    name.textContent=`Book : ${product.name}`
    authname.textContent=`Author : ${product.author}`
    genre.textContent=`Genre : ${product.genre}`
    price.textContent=`Price : ${product.price}`
    pages.textContent=`Pages : ${product.pages}`
    
     addtocart.addEventListener('click',()=>{
      if(checkduplicate(product)){
        alert("product Already in the Cart")
      }else{
      cartArr.push(product)
      cartArr.splice(index,1)
      localStorage.setItem("cart",JSON.stringify(cartArr))
      alert("Product Added to Cart")
      }
     })




    card.append(image,name,authname,genre,price,pages,addtocart)
    container.append(card)

  })
  }
   function checkduplicate(product){
    for(let i=0;i<cartArr.length;i++){
      if(cartArr[i].id===product.id){
        return true
      }
    }
    return false
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
let ascending = document.querySelector(".asc")
let descending = document.querySelector(".desc")

ascending.addEventListener("click",()=>{
  console.log("asc")
  let res = fetch("https://pastic4-bee.onrender.com/Books?_limit=10&_page=2&_sort=name&_order=asc")
  res.then((res)=>{
    let data =res.json()
    return data
  })
  .then((res)=>{
    console.log(res)
    displayproduct(res)
  })
  .catch((err)=>{
    console.log(err)
  })
})

descending.addEventListener("click",()=>{
  console.log("desc")
  let res = fetch("https://pastic4-bee.onrender.com/Books?_limit=10&_page=2&_sort=name&_order=desc")
  res.then((res)=>{
    let data =res.json()
    return data
  })
  .then((data)=>{
    console.log(data)
    displayproduct(data)
  })
  .catch((err)=>{
    console.log(err)
  })
})

let ascendingprice= document.querySelector(".ascp")
let descendingprice = document.querySelector(".descp")

ascendingprice.addEventListener("click",()=>{
  console.log("asc")
  let res = fetch("https://pastic4-bee.onrender.com/Books?_limit=10&_page=2&_sort=price&_order=asc")
  res.then((res)=>{
    let data =res.json()
    return data
  })
  .then((res)=>{
    console.log(res)
    displayproduct(res)
  })
  .catch((err)=>{
    console.log(err)
  })
})

descendingprice.addEventListener("click",()=>{
  console.log("desc")
  let res = fetch("https://pastic4-bee.onrender.com/Books?_limit=10&_page=2&_sort=price&_order=desc")
  res.then((res)=>{
    let data =res.json()
    return data
  })
  .then((data)=>{
    console.log(data)
    displayproduct(data)
  })
  .catch((err)=>{
    console.log(err)
  })
})

// search 

let searchvalue = document.querySelector('#in')
let searchForm = document.querySelector("#btn")


var res
async function searchdata(){
  try{
    res=await fetch('https://pastic4-bee.onrender.com/Books')
    res=await res.json()
  
        
    
  }catch(err){
    console.log(err)
  }
}
searchdata()

searchForm.addEventListener("click", (e) => {
  e.preventDefault();

   
  let search = searchvalue.value
  console.log(search)
   console.log(res)
  let filtered = res.filter((el) => {
    
    if (el.name.toUpperCase().includes(search.toUpperCase()) ===true){
      return true;
    } else {
      return false;
    }
  });
   displayproduct(filtered);
});
