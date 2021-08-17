// Toggle Button for navLinks
const navLinks = document.querySelectorAll(".nav-links");
let prevActiveLink = navLinks[0];
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLink.classList.add("active");
    prevActiveLink.classList.remove("active");
    prevActiveLink = navLink;
  });
});
