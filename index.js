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

function getMetaData(){
  var data = {
      "@context": "http://schema.org",
      "@type": "MusicGroup",
      // "@id": "https://musicbrainz.org/artist/xxxxxx",
      "name": "Colonel Spanky's Love Ensemble",
  "alternateName": "Colonel Spanky's",
  "description": "A Cambridge-based, brass-driven 10-piece funk-pop band.",
      "logo": {
          "@type": "ImageObject",
          "url": "https://colonelspankys.co.uk/images/logo.png"
      },
      "image": {
          "@type": "ImageObject",
          "url": "https://colonelspankys.co.uk/images/rhinocorn.jpg"
      },
      "url": "https://colonelspankys.co.uk/",
      "genre": [
          "Funk",
          "Covers",
          "Brass",
          "Jazz",
          "Ska",
          "Jazz-Funk",
          "Pop",
          "Reggae",
          "Classics",
      ],
      "sameAs": [
          "https://www.facebook.com/Colonel.Spankys.Love.Ensemble",
          "https://www.twitter.com/colonelspankys",
          "https://www.instagram.com/colonelspankysloveensemble",
          "https://www.youtube.com/user/ColonelSpankys",
          "https://soundcloud.com/user-469963949",
          "https://colonelspankys.bandcamp.com/"
      ],
      "member": [
          {
              "@type": "OrganizationRole",
              "member": {
                  "@type": "Person",
                  "name": "Jo Humphrey"
                  // "alternateName": "Alternative Name",
                  // "givenName": "Real Name if different",
                  // "sameAs": "https://yourwebsite.com/bio/"
              },
              "roleName": [
                  "manager",
                  "backing vocals",
                  "drums",
                  "percussion",
                  "drum kit"
              ]
          }
      ]
  };
  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify( data );
  document.getElementsByTagName('head')[0].appendChild(script);
 }