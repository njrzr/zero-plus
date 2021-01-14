let loader = document.getElementById("loader");

window.addEventListener("load", () => {
  loader.classList.toggle("hide");
})

let photoIndex = 0;
let photo = document.getElementById("photo-show");
let previousButton = document.getElementById("previous-button");
let nextButton = document.getElementById("next-button");

const photos = [
  "images/pic01.webp",
  "images/pic02.webp",
  "images/pic03.webp",
  "images/pic04.webp",
  "images/pic05.webp"
];

// previous button function
previousButton.addEventListener("click", () => {
  if (photoIndex <= 0) {
    photo.src = photos[photos.length - 1];
    photoIndex = photos.length - 1;

  }
  else {
    photo.src = photos[photoIndex - 1];
    photoIndex--;
  }
});

// next button function
nextButton.addEventListener("click", () => {
  if (photoIndex >= photos.length - 1) {
    photo.src = photos[0];
    photoIndex = 0;
  }
  else {
    photo.src = photos[photoIndex + 1]
    photoIndex++;
  }
});
