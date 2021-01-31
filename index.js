// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){


console.log("JS is working");

var navbar = document.getElementById("navbar");

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 

window.onscroll = function() {stickyNav()};


var sticky = navbar.offsetTop;

});