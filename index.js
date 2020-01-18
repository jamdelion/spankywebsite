(function() { //good practise to wrap JS in this
  "use strict";

  HTMLElement.prototype.show = function() {
    this.style.display = "";
  };

  HTMLElement.prototype.hide = function() {
    this.style.display = "none";
  };

  HTMLElement.prototype.toggle = function() {
    if (this.style.display === "none") {
      this.show();
    } else {
      this.hide();
    }
  };

  //on load
  function init() {

    // IMAGE CAROUSEL
    var slideIndex = 0;
    var images = [];
    var timeLapse = 1000;
    var slide = document.querySelector(".imageHolder");

    // Buttons
    var playButton = document.querySelector('.pause');
    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");
    var playIcon = document.getElementById('playIcon');

    // Image list
    images[0] = "images/img1.JPG";
    images[1] = "images/img2.JPG";
    images[2] = "images/img3.JPG";
    images[3] = "images/img4.jpg";
    images[4] = "images/img5.jpg";
    // set initial slide to img1
    slide.src = images[0];


    // dots
    // get array of dot elements
    var dotsArray = document.getElementsByClassName("dot");
    // initially dots[0] is active
    // if playing, slideIndex dot is active (follows slideIndex)
    dotsArray[slideIndex].classList.toggle("active");

    // make dots clickable
    for (var j = 0; j < dotsArray.length; j++) {
      dotsArray[j].onclick = function(event) {
        // if the carousel not playing, change the image to the same index as the dot
        var dotIndex = Array.from(dotsArray).indexOf(event.target);
        if (playButton.classList.contains("play")) {
          slide.src = images[dotIndex];
          // match the slideIndex with the dotIndex
          slideIndex = dotIndex;
          // change unclicked dots to not active
          Array.from(dotsArray).forEach(function(dot) {
            dot.classList.remove("active")
          });
          dotsArray[dotIndex].classList.toggle("active");
        }
      }
    }


    // on click play slides
    playButton.onclick = function() {
      // does playbutton class contains "play" (true or false)
      var playing = !playButton.classList.toggle("play");
      // change icon from play to pause icon if slideshow playing
      playIcon.classList.toggle("fas");
      playIcon.classList.toggle("hidden");
      pauseIcon.classList.toggle("fas");
      pauseIcon.classList.toggle("hidden");
      // if "play" not in classlist, playslides (start function)
      if (playing) {
        playSlides();
      }
    }

    // Automatic play (change images)
    function playSlides() {
      if (!playButton.classList.contains("play")) {
        nextSlide();
        setTimeout(playSlides, timeLapse);
      }
    }
    // deactivate next/prev buttons? (make grey)

    function nextSlide() {
      // change unclicked dots to not active
      Array.from(dotsArray).forEach(function(dot) {
        dot.classList.remove("active")
      });
      // active dot
      // dotsArray[i].classList.toggle("active");
      if (slideIndex < images.length - 1) {
        slideIndex++;
      } else {
        slideIndex = 0;
      }
      slide.src = images[slideIndex];
      dotsArray[slideIndex].classList.toggle("active");
    }

    nextButton.onclick = function() {
      if (playButton.classList.contains("play")) {
        nextSlide();
      }
    }

    function prevSlide() {
      dotsArray[slideIndex].classList.toggle("active");
      if (slideIndex !== 0) {
        slideIndex--;
      } else {
        slideIndex = images.length - 1;
      }
      slide.src = images[slideIndex];
      dotsArray[slideIndex].classList.toggle("active");
    }

    prevButton.onclick = function() {
      if (playButton.classList.contains("play")) {
        prevSlide();
      }
    }

    document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 37:
          prevSlide();
          break;
        case 39:
          nextSlide();
          break;
      }
    };


    // end of init function
  }



})(); //end of function wrapper
