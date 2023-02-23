// Gallery Page Animation
export function galleryHomeAnimation() {
  let tl = gsap.timeline();
  tl.to("#loader", 1, { translateY: "-100%", ease: "Expo.easeInOut" });
  tl.to(".anim-wrap-2", 1, { translateY: "100%", ease: "Expo.easeOut" });
  tl.to(
    ".anim-wrap-1",
    1,
    { translateY: "100%", ease: "Expo.easeOut" },
    "-=0.5"
  );
  tl.from(
    "#main-navbar",
    1,
    { translateY: "-100%", ease: "Expo.easeOut" },
    "-=0.5"
  );
  tl.to(
    "#gallery-home .heading",
    1,
    { translateY: "0%", opacity: 1, ease: "Expo.easeOut" },
    "-=.5"
  );
  tl.to(
    "#gallery-home .sub-heading",
    1,
    { translateY: "0%", opacity: 1, ease: "Expo.easeOut" },
    "-=1"
  );
  tl.to(
    ".main_f",
    1,
    { translateY: "2%", opacity: 1, ease: "Expo.easeOut" },
    2,
    "-=0.5"
  );
}
