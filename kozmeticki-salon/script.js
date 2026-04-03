// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-right");

hamburger.addEventListener("click", () => {

if(navMenu.style.display === "flex"){
navMenu.style.display = "none";
}else{
navMenu.style.display = "flex";
}

});


// LIGHTBOX GALERIJA

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

lightbox.addEventListener("click", () => {
lightbox.style.display = "none";
});


// ANIMACIJA SEKCIJA PRI SCROLLU

function reveal(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(section => {

const windowHeight = window.innerHeight;
const elementTop = section.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
section.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);
reveal();


// LOGO ANIMACIJA

window.addEventListener("scroll", () => {

const logo = document.querySelector(".logo");

if(window.scrollY > 50){
logo.style.transform = "scale(1.2)";
}else{
logo.style.transform = "scale(1)";
}

});
