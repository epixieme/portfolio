// import { DotLottie } from "@lottiefiles/dotlottie-web";

const links = document.querySelectorAll(".nav-link");

function handleNavLinks(event) {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  console.log(event.target);
  event.target.classList.add("active");
}
links.forEach((link) => {
  link.addEventListener("click", handleNavLinks);
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const header = document.querySelector("header[id]");

  // Function to remove the active class from all nav links
  const removeActiveClasses = () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  };

  // Function to add the active class to the current section nav link
  const addActiveClass = () => {
    let currentSection = "home";

    sections.forEach((section) => {
      // const sectionTop = section.offsetTop;
      const sectionTop = section.offsetTop - header.offsetHeight;

      if (window.scrollY === 0) {
        currentSection = header.getAttribute("id");
      } else if (window.scrollY >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });

    removeActiveClasses();
    navLinks.forEach((link) => {
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  };
  addActiveClass();
  window.addEventListener("scroll", addActiveClass);
});

function handleGetinTouch(getInTouchButton) {
  console.log(getInTouchButton);
  // const getInTouchButton = document.querySelector("#banner button div");
  console.log("click");
  getInTouchButton.classList.add("get-in-touch");

  setTimeout(() => {
    getInTouchButton.classList.remove("get-in-touch");
  }, 600);
}

const getInTouchButton = document.querySelector("#banner button div");
getInTouchButton.addEventListener("click", () =>
  handleGetinTouch(getInTouchButton)
);

const pageHeader = document.querySelector(".page-header");
const toggleMenu = document.querySelector(".toggle-menu");
const player = document.querySelector("lottie-player");
const menuWrapper = document.querySelector(".menu-wrapper");
const menuOpenedClass = "menu-open";

toggleMenu.addEventListener("click", function (e) {
  console.log("click");
  e.preventDefault();
  pageHeader.classList.toggle(menuOpenedClass);
  if (pageHeader.classList.contains(menuOpenedClass)) {
    this.setAttribute("aria-label", "Close navigation");
    this.setAttribute("aria-expanded", "true");
    player.getLottie().playSegments([0, 45], true);
  } else {
    this.setAttribute("aria-label", "Open navigation");
    this.setAttribute("aria-expanded", "false");
    player.getLottie().playSegments([45, 0], true);
    //player.getLottie().playSegments([46, 90], true);
  }
});
