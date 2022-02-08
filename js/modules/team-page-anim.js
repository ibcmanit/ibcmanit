// Team Page Animation
export function teamHomeAnimation() {
  let tl = gsap.timeline();

  tl.to("#loader", 1, { translateY: "-100%", ease: "Expo.easeInOut" });
  tl.to(".anim-wrap-2", {
    translateY: "100%",
    duration: 1,
    ease: "Expo.easeOut",
  });
  tl.to(
    ".anim-wrap-1",
    { translateY: "100%", duration: 1, ease: "Expo.easeOut" },
    "-=.5"
  );
  tl.from(
    "#main-navbar",
    { translateY: "-100%", duration: 1, ease: "Expo.easeOut" },
    "-=.5"
  );
  tl.to(
    "#team-home .heading",
    { translateY: "0%", opacity: 1, duration: 1, ease: "Expo.easeOut" },
    "-=.5"
  );
  tl.to(
    "#team-home .sub-heading",
    { translateY: "0%", opacity: 1, duration: 1, ease: "Expo.easeOut" },
    "-=1"
  );
  tl.fromTo(
    "#photo",
    { clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)" },
    {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
      duration: 2,
      ease: "Expo.easeOut",
    },
    "-=1"
  );
  tl.fromTo(
    "#photo img",
    { scale: 1.5 },
    { scale: 1, duration: 2, ease: "Expo.easeOut" },
    "-=2"
  );
  tl.from(
    "#photo",
    { translateY: 100, duration: 2, ease: "Expo.easeOut" },
    "-=2"
  );
}
