


let cartArr = JSON.parse(localStorage.getItem("cart")) || []

let container = document.querySelector(".inner")

displayproduct(cartArr)

function displayproduct(data){
    container.innerHTML=null
data.forEach((product,index)=>{  



    let card = document.createElement("div")
     card.setAttribute("class","cardiv")

     let outerimg = document.createElement("div")
     outerimg.setAttribute("class","outer")
   
    let image = document.createElement("img") 
    image.setAttribute("class","cardimg")

    let div2=document.createElement("div")
    div2.setAttribute("class","div2")


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

    
    let del = document.createElement("button")
    del.setAttribute("class","carddelete")
    del.textContent="Delete"

    image.src=product.image;
    name.textContent=`Book : ${product.name}`
    authname.textContent=`Author : ${product.author}`
    genre.textContent=`Genre : ${product.genre}`
    price.textContent=`Price : ${product.price}`
    pages.textContent=`Pages : ${product.pages}`
    
     del.addEventListener('click',()=>{
      cartArr.splice(index,1)
      localStorage.setItem("cart",JSON.stringify(cartArr))
      displayproduct()
     })


    outerimg.append(image)
    div2.append(name,authname,genre,price,pages,del)
    card.append(outerimg,div2)
    container.append(card)

  })


  }
























//   return`
//   <div id="outer"style="display:flex;">
//    <div>
//       <img src="${product.image}" style="width:30%;"/>
//     </div>
//     <div>
//     <h2 id="name"> Name: ${product.name}</h2>
//   <p> Author : ${product.author}</p>
//   <p> Genre : ${product.genre}</p>
//      <p> Price : ${product.price}</p?
//      <p> Page : ${product.page}</p>

//    </div> 
// </div>

//    `