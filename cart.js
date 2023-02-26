let data =JSON.parse(localStorage.getItem("cart")) || [];
// console.log(data)
let parent = document.getElementById("cartproduct");

 window.addEventListener("load", ()=>{
   

    renderItem(data)
    

  
 })

function renderItem(data){
    console.log(data)
    data.map((item,index)=>{
    
    
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", item.image);
        let genre = document.createElement("p");
        genre.innerText = item.genre;
        let name = document.createElement("p");
        name.innerText=item.name;
        let price = document.createElement("span");
        price.setAttribute("id","price")
        price.innerText = item.price;
        let remove = document.createElement("button");
        remove.setAttribute("id","remove");
        remove.innerText = "Remove"
        remove.addEventListener("click",function(){
            console.log("work")
            data.splice(index,1);
            localStorage.setItem("cartItems",JSON.stringify(data))
            renderItem(data)
            location.reload()
        })
        div.append(image,genre,name,price,remove);
        parent.append(div);
    
      })
}

let parent2 = document.getElementById("productprice");
let carttotal = [];
let data2 = JSON.parse(localStorage.getItem("cart")) || [];
window.addEventListener("load", ()=>{
    data.map((item)=>{
        // console.log(item.price)
    let p = item.price;
    let bag = item.price;
    for(let i=0;i<=p.length;i++){
        if(p[i]==="₹"||p[i]===","){
            continue;
        }
        else{
        bag += p[i];
        }
    }
   
    carttotal.push(bag)
   
    
   
  
    parent2.append(); 
    })
    let total=0;
    // console.log(carttotal)
    for(let item of carttotal){
        total+=item;
      final=total;
    }

    let displayprice = document.getElementById("bag_price")
    displayprice.innerText =total;
    let total1 = document.getElementById("total")
    total1.innerText = total;
    console.log(total)
    localStorage.setItem("total",JSON.stringify(total))
})
