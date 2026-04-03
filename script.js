// ======================
// SLIDER (DUPLICIRANJE)
// ======================
const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");

if (track && slides.length > 0) {
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });
}


// ======================
// BACK TO TOP BUTTON
// ======================
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  topBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
}


// ======================
// HAMBURGER MENU
// ======================
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // zatvaranje klikom izvan
  document.addEventListener("click", function (event) {
    const isClickInsideMenu = nav.contains(event.target);
    const isClickHamburger = hamburger.contains(event.target);

    if (!isClickInsideMenu && !isClickHamburger) {
      nav.classList.remove("show");
    }
  });
}


// ======================
// UTM + SOURCE TRACKING
// ======================
document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);

  // spremi UTM u session (da se ne izgubi)
  if (params.toString()) {
    sessionStorage.setItem("utm_params", params.toString());
  }

  const savedParams = new URLSearchParams(sessionStorage.getItem("utm_params"));

  function setField(name, value) {
    const field = document.querySelector(`input[name="${name}"]`);
    if (field && value) field.value = value;
  }

  // UTM
  setField("utm_source", savedParams.get("utm_source"));
  setField("utm_medium", savedParams.get("utm_medium"));
  setField("utm_campaign", savedParams.get("utm_campaign"));

  // SOURCE LOGIKA (kombinirana)
  let source = "direct";

  if (savedParams.get("utm_source")) {
    source = savedParams.get("utm_source");
  } else if (document.referrer.includes("google")) {
    source = "google-organic";
  } else if (document.referrer.includes("facebook")) {
    source = "facebook";
  } else if (document.referrer.includes("instagram")) {
    source = "instagram";
  } else if (document.referrer.includes("wa.me")) {
    source = "whatsapp";
  }

  setField("source", source);

  // sakrij UTM iz URL-a
  if (window.location.search) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

});

// Postavlja trenutnu godinu u element s id-em "year"
document.getElementById("year").innerHTML = new Date().getFullYear();




