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

// Path: assets/js/index.js
