// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){


// Sticky navbar

let navbar = document.getElementById("navbar");

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 

window.onscroll = function() {stickyNav()};

let sticky = navbar.offsetTop;

// collapsible FAQs

let expandables = document.getElementsByClassName("expandable");

for (let i = 0; i < expandables.length; i++) {
  expandables[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

});