
document.addEventListener('DOMContentLoaded', function() {
    let tl = new gsap.timeline();

    tl.from(".modal-container", {
      opacity: 0,
      y: -100,
      duration: 0.5,
      ease: "power1.inOut",
    });
})