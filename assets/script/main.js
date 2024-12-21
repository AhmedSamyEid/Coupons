// document.getElementById("category").addEventListener("change", function () {
//   const helperText = document.getElementById("helper-text");

//   if (this.value) {
//     helperText.style.opacity = "0"; 
//     setTimeout(() => {
//       helperText.style.display = "none"; 
//     }, 300); 
//   }
// });


const slideContainer = document.querySelector('.big-slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

rightArrow.addEventListener('click', () => {
  const totalImages = slideContainer.children.length;
  const imageWidth = slideContainer.children[0].clientWidth;
  
  if (currentIndex < totalImages - 1) {
    currentIndex++;
    slideContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
});

leftArrow.addEventListener('click', () => {
  const imageWidth = slideContainer.children[0].clientWidth;

  if (currentIndex > 0) {
    currentIndex--;
    slideContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
});
