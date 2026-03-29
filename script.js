const track = document.querySelector(".slide-track");

const slides = document.querySelectorAll(".slide");

slides.forEach(slide => {

const clone = slide.cloneNode(true);

track.appendChild(clone);

});



/* BACK TO TOP BUTTON */

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

};

topBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};



/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

hamburger.addEventListener("click", ()=>{

nav.classList.toggle("show");

});

/* ZATVARANJE HAMBURGERA KLIKOM IZVAN */

document.addEventListener("click", function(event){

const nav = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

const isClickInsideMenu = nav.contains(event.target);
const isClickHamburger = hamburger.contains(event.target);

if(!isClickInsideMenu && !isClickHamburger){

nav.classList.remove("show");

}

});



