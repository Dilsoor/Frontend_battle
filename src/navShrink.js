let navbar = document.getElementById("navbar");
  
function shrink() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.classList.add("navbar-shrink");
    // navbar.style.padding = "60px 0 15px";
  } else {
    navbar.classList.remove("navbar-shrink");
    // navbar.style.padding = "73px 0 20px";
  }
}

export default shrink;