// Events Page Animation
export function eventPage() {
  var tl = gsap.timeline();
  tl.to("#loader", {
    translateY: "-100%",
    duration: 1,
    ease: "Expo.easeInOut",
  });
  tl.to(".left-color .two", {
    translateX: "100%",
    duration: 1,
    ease: "power3.easeOut",
  });
  tl.to(
    ".left-color .one",
    { translateX: "100%", duration: 1, ease: "power3.easeOut" },
    "-=0.5"
  );
  tl.fromTo(
    ".hc-right .sub-heading",
    { opacity: 0, y: "-100%" },
    { opacity: 1, y: 0, duration: 1, ease: "power3.easeOut" },
    "-=.5"
  );
  tl.fromTo(
    ".hc-right .heading",
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "power3.easeOut" },
    "-=0.5"
  );
  tl.fromTo(
    ".hc-right p",
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "power3.easeOut" },
    "-=.5"
  );
  tl.fromTo(
    ".hc-left img",
    { scale: 1.5, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    {
      scale: 1,
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "Expo.easeOut",
    },
    "-=2"
  );
  tl.fromTo(
    "#main-navbar",
    { translateY: "-100%" },
    { translateY: "0%", duration: 1, ease: "Expo.easeOut" },
    "-=1.5"
  );
}

export function morePageAnimation() {
  var tl = gsap.timeline();

  tl.to("#more-wrap", {
    width: `${window.innerWidth < 992 ? "100%" : "75%"}`,
    duration: 1,
    ease: "Expo.easeOut",
  });
  tl.to(
    "#more-wrap .two",
    { translateX: "100%", duration: 1, ease: "power3.easeOut" },
    "-=.5"
  );
  tl.to(
    "#more-wrap .one",
    { translateX: "100%", duration: 1, ease: "power3.easeOut" },
    "-=.5"
  );
  tl.to(
    ".content-right img",
    {
      scale: 1,
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "Expo.easeOut",
    },
    "-=0.5"
  );
  tl.to(
    ".content-left",
    { translateX: "0%", opacity: 1, duration: 1, ease: "Expo.easeOut" },
    "-=1"
  );
}
