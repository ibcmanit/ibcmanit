// footer Animation
export function footerAnimation() {
  let tl = gsap.timeline({
    ease: "Expo.easeOut",
  });

  const elements = [
    ".footer-left span .heading",
    ".address h3",
    ".contact h3",
    ".quick-links h3",
  ];

  const setTwo = [".address p", ".contact p"];

  tl.to("#footer .wrapper", { top: "20%", duration: 1 });

  elements.forEach((element) => {
    tl.to(element, { translateY: "0%", duration: 1 }, "-=0.5");
  });
  tl.to("#cform input", { opacity: 1, duration: 1 }, "-=2");
  tl.to("#cform button", { opacity: 1, duration: 1 }, "-=1.5");
  setTwo.forEach((element) => {
    tl.to(element, { opacity: 1, duration: 1 }, "-=1");
  });
  tl.to(".footer-links li", { opacity: 1, duration: 1, stagger: 0.2 }, "-=1");
  tl.to("#cform .social", { opacity: 1, duration: 1 }, "-=2");
}
