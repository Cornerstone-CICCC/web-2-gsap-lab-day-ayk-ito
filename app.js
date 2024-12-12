gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

// section1

const timelineSectionOne = gsap.timeline();
timelineSectionOne
  .from(".section1 h1 span:last-child", { x: "100vw", duration: 1 })
  .from(".section1 h1 span:first-child", { x: "-100vw", duration: 1 }, "-=0.8")
  .fromTo(
    ".section1 p",
    { opacity: 0, transformOrigin: "left top", rotate: "90deg" },
    { opacity: 1, rotate: "0deg", duration: 1 }
  )
  .from(".section1 img", { y: "100vh", duration: 0.5 });

// section2
const timelineSectionTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2 h2",
    toggleActions: "play none reverse none",
  },
});
timelineSectionTwo
  .from(".section2 h2 span", {
    y: "-100vh",
    duration: 1,
    stagger: 0.5,
  })
  .from(".section2 p", { opacity: 0, duration: 1, scaleX: 0 });

// section3
const timelineSectionThree = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    end: "botomm top",
    toggleActions: "play none reverse none",
    // markers: true,
  },
});

timelineSectionThree
  .from(".section3 h2", { x: "-10vw", duration: 2, scale: 30 })
  .from(".section3 p span", { opacity: 0, duration: 1, y: "100vh", stagger: 0.2 })
  .to(".section3 p span", { backgroundColor: "white", color: "grey", duration: 1 }, "<");

gsap.to(".horizontal-sections", {
  scrollTrigger: {
    trigger: ".horizontal-sections",
    toggleActions: "play none reverse none",
    start: "top top",
    scrub: true,
    pin: true,
    // markers: true,
  },
  xPercent: "-34.1",
});

// section4
const timelineSectionFour = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "center top",
    toggleActions: "play none reverse none",
    // markers: true,
  },
});
timelineSectionFour.from(".portfolio-item", { x: "100vw", duration: 2, stagger: 1, opacity: 0 });

// section5
function splitTextToSpans(selector) {
  const element = document.querySelector(selector);
  const text = element.innerText;
  element.innerHTML = text
    .split(/(?!^)/)
    .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
}

const timelineSectionFive = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    toggleActions: "play none reverse none",
    start: "top top",
    scrub: true,
    pin: true,
    // markers: true,
  },
});
splitTextToSpans(".section5 h2");

timelineSectionFive
  .from(".section5 h2 span", { y: "-100vh", duration: 2, stagger: 0.3 })
  .from(".section5 p", { y: "5vh", duration: 2, opacity: 0 })
  .from(".section5 button", { duration: 1, scale: 0 })
  .to(".section5", { backgroundColor: "black", duration: 2 })
  .from(".section5", { backgroundPosition: "120% 90%", duration: 2 }, "-=1");
