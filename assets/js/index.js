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

// Path: assets/js/index.js
