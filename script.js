// 'use strict';

const carousel = document.querySelector(".carousel_2"),
  firstImg = document.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;
let firstImgWidth = firstImg.clientWidth + 14;
const captionText = document.getElementById("caption");

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.id == "left") {
      carousel.scrollLeft -= firstImgWidth;
    } else {
      carousel.scrollLeft += firstImgWidth;
    }
  });
});

const autoSlide = () => {
  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiff;
  // console.log(valDifference);
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);




const modal = document.getElementById("myModal");



const modalContent = document.querySelector(".modal-content");

const openModal = (img) => {
  modal.style.display = "block";

  modalContent.src =  img.src;
 
};

const closeModal = () => {
  modal.style.display = "none";
};

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

modal.addEventListener("click", closeModal);
