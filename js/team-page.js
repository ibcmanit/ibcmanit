import { teamHomeAnimation } from "./modules/team-page-anim.js"
import { footerAnimation } from "./modules/footer-anim.js";

// AOS
AOS.init({ once: true, duration: 1000 });


// Nav Logo Animation
gsap.to("#nav-logo path", { repeat: -1, yoyo: true, strokeDashoffset: 0, duration: 2, stagger: 0.25, ease: "power4.easeOut" });


$(document).ready(function () {
  // Home Animation
  teamHomeAnimation();
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
const footerSection = document.querySelector("#footer");

const options = {
  threshold: window.innerWidth > 992 ? 0.5 : 0.2,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        footerAnimation();
        observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(footerSection);


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


// Change content on mobile
if(window.innerWidth < 992) {
  const content = document.querySelectorAll(".card-content h1");

  content.forEach((element) => {
    let len = element.innerHTML.match(/([\s]+)/g).length;
    if(len < 2) {
      element.innerHTML = element.innerHTML.replace(/\s/g, '<br>');
    } else {
      let newContent = element.innerHTML.split(/([\s]+)/g);
      newContent = newContent[0] + newContent[1] + newContent[2] + '<br>' + newContent[4];
      element.innerHTML = newContent;
    }
  })
}

// team image animation
if(window.innerWidth > 992) {
  gsap.to("#photo img", {
    repeat: -1,
    yoyo: true,
    objectPosition: "0px 100%",
    duration: 15,
    ease: Linear.easeNone,
  });
} else {
  gsap.to("#photo img", {
    repeat: -1,
    yoyo: true,
    objectPosition: "100% 0px",
    duration: 30,
    ease: Linear.easeNone,
  });
}