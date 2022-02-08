
document.addEventListener('DOMContentLoaded', function() {
    let tl = new gsap.timeline();

    tl.to(".modal-container", {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
})