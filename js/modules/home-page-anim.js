// Home Animations
export function homeAnimation() {
  let tl = gsap.timeline({ ease: "Expo.easeOut" });

  tl.to("#loader", {
    translateY: "-100%",
    duration: 1,
    ease: "Expo.easeInOut",
  });
  tl.fromTo(
    ".anim-wrapper-three",
    { top: "0%" },
    {
      top: "100%",
      duration: 1,
    }
  );
  tl.fromTo(
    ".anim-wrapper-two",
    { top: "0%" },
    {
      top: "100%",
      duration: 1,
    },
    "-=0.5"
  );
  tl.fromTo(
    ".anim-wrapper-one",
    { top: "0%" },
    { top: "100%", duration: 1 },
    "-=0.5"
  );
  tl.fromTo(".home-img", { scale: 1.5 }, { scale: 1, duration: 1 }, "-=1");
  tl.fromTo(
    ".home-content h3",
    { translateY: -100, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 1 }
  );
  tl.fromTo(
    ".home-content h1",
    { translateY: -100, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 1 },
    "-=0.5"
  );
  tl.fromTo(
    ".home-content a",
    { translateY: 100, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 1 },
    "-=1"
  );
  tl.fromTo(
    ".current-event",
    { translateY: "100%", opacity: 0 },
    { translateY: "0%", opacity: 1, duration: 1 },
    "-=0.5"
  );
  tl.fromTo(
    "#main-navbar",
    { translateY: "-100%", opacity: 0 },
    { translateY: "0%", opacity: 1, duration: 1 },
    "-=1"
  );
  tl.fromTo(
    ".icon--menu-toggle",
    {
      opacity: 0,
      translateX: 100,
    },
    { opacity: 1, translateX: 0, duration: 1 },
    "-=1"
  );
}

// about Animation
export function aboutAnimation() {
  let tl = gsap.timeline({
    ease: "Expo.easeOut",
  });

  tl.to(".about-left .wrapper", { scaleX: "100%", duration: 1 });

  tl.to(
    ".img-wrap",
    { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1 },
    "-=0.5"
  );
  tl.to(".img-anim-wrap", { top: "100%", duration: 1 }, "-=.5");

  tl.to(".about-img", { scale: 1, duration: 1 }, "-=1");
  tl.to(
    "#about-heading",
    { translateY: "0%", opacity: 1, duration: 1 },
    "-=0.5"
  );
  tl.to(".about-text", { opacity: 1, duration: 1, stagger: 0.2 }, "-=0.5");
  tl.to(
    ".about-right .button",
    { translateY: "0%", opacity: 1, duration: 1 },
    "-=0.5"
  );
}
