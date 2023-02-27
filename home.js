const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const images = document.querySelectorAll('.slider-container img');
const backwardButton = document.querySelector('.slider-button-backward');
const forwardButton = document.querySelector('.slider-button-forward');

let currentIndex = 0;

function forward() {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  updateSlider();
}

function backward() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateSlider();
}

function updateSlider() {
  const translateX = `translateX(-${currentIndex * (100 + 20)}%)`;
  sliderContainer.style.transform = translateX;
}

slider.addEventListener('mouseenter', () => {
  backwardButton.style.display = 'block';
  forwardButton.style.display = 'block';
});

slider.addEventListener('mouseleave', () => {
  backwardButton.style.display = 'none';
  forwardButton.style.display = 'none';
});

forwardButton.addEventListener('click', forward);
backwardButton.addEventListener('click', backward);

updateSlider();











//////////////////sign in/signup functionality end////////////////////////////////////////

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

<<<<<<< HEAD
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
=======

SignIn.addEventListener("click",function(event){
  event.preventDefault();
  console.log("working")
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  alert("Sign Up Successful");
  window.location.assign("./home.html")

})



let one = document.getElementById("carti");

one.addEventListener("click",()=>{
  window.location.href="cart.html"
})

let two = document.getElementById("book");
two.addEventListener("click",()=>{
  window.location.href="product.html"
})


let log_in = document.getElementById("clic");
log_in.addEventListener("click",()=>{
  console.log("working")
  window.location.href = "login.html"
})
>>>>>>> cad8d95398ba89e8c3f523ccc8ea0b1cd7564233
