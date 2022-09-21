

import { homeAnimation, aboutAnimation } from "./modules/home-page-anim.js";
import { footerAnimation } from "./modules/footer-anim.js";

AOS.init({once: true, duration: 1000});

// Nav Logo Animation
gsap.to("#nav-logo path", { repeat: -1, yoyo: true, strokeDashoffset: 0, duration: 2, stagger: 0.25, ease: "power4.easeOut" });


$(document).ready(function () {
  // Home Animation
  homeAnimation();
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

const abtSection = document.querySelector("#about");
const footerSection = document.querySelector("#footer");

let sections = [abtSection, footerSection];

const options = {
  threshold: window.innerWidth>992?0.5:0.2,
}
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if(entry.target.id === "about") {
        aboutAnimation();
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

// change content on resize
if(window.innerWidth<992) {
  const currEventContent = document.querySelector("#curr-event-content");
  currEventContent.innerHTML = "MARKET GURU IS BACK!";
}



// Dropdown
const teamDropdown = document.querySelector("#team-dropdown");
var rect = teamDropdown.getBoundingClientRect();
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


// Contact form validation
const email = document.querySelector("#sub-email");
const submit = document.querySelector("#sub-submit");


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

email.addEventListener("focus", () => {
  email.classList.remove("error");
  submit.disabled = false;
  submit.classList.remove("disabled");
});

email.addEventListener("focusout", () => {
  if (!validateEmail(email.value)) {
    email.classList.add("error");
    submit.disabled = true;
    submit.classList.add("disabled");
  }
});

email.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    submit.click();
  }
});