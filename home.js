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

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});