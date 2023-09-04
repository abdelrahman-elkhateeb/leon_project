//used to make the nav bar clickable
let nav = document.querySelector(".container .navbar .drop-menu");
let img = document.querySelector(".container .navbar img");

img.addEventListener("click", () => {
  if (nav.style.visibility === "visible") {
    nav.style.visibility = "hidden";
  } else {
    nav.style.visibility = "visible";
  }
  nav.classList.toggle("open-menu");
});

//end function
