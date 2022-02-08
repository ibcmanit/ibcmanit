import { eventPage, morePageAnimation } from "./modules/event-page-anim.js";
import { footerAnimation } from "./modules/footer-anim.js";

// AOS
AOS.init({once: true, duration: 1000});


// Nav Logo Animation
gsap.to("#nav-logo path", { repeat: -1, yoyo: true, strokeDashoffset: 0, duration: 2, stagger: 0.25, ease: "power4.easeOut" });



$(document).ready(function () {
  // Event Animation
  eventPage();
  // smooth scroll
  $(".scroll").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });
});



// Intersection Observer

const moreSection = document.querySelector("#more");
const footerSection = document.querySelector("#footer");

let sections = [moreSection, footerSection];

const options = {
  threshold: window.innerWidth > 992 ? 0.5 : 0.2,
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if(entry.target.id === "more") {
        morePageAnimation();
        observer.unobserve(entry.target);
      } else {
        footerAnimation();
        observer.unobserve(entry.target);
      }
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
})

// Dropdown
const teamDropdown = document.querySelector("#team-dropdown");
var rect = teamDropdown.getBoundingClientRect();
console.log(rect);
const dropdown = document.querySelector(".dropdown");

dropdown.style.left = `${rect.left}px`;

teamDropdown.addEventListener("click", () => {
  dropdown.classList.toggle("show");
})

// Mobile Nav
const navCheckBox = document.querySelector("#page-nav-toggle");
const navLinks = document.querySelectorAll(".main-navigation ul li");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.innerHTML !== '<a>TEAM</a>' && link.innerHTML !== '<a><i class="fas fa-arrow-left"></i></a>') {
      navCheckBox.checked = false;
    }
  });
});


// Secondary Dropdown
const mNav = document.querySelector("#m-nav");
const tNav = document.querySelector("#t-nav");
const backToggle = document.querySelector("#back-toggle");
const toggleNav = document.querySelector("#toggle-nav");

toggleNav.addEventListener("click", () => {
  tNav.classList.toggle("tnav-toggle");
  mNav.classList.toggle("mnav-toggle");
})

backToggle.addEventListener("click", () => {
  tNav.classList.toggle("tnav-toggle");
  mNav.classList.toggle("mnav-toggle");
})