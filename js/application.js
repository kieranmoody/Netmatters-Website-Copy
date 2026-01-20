//cookies functionality
function consentFunctionality() {
  const cookieWrapper = document.querySelector("#cookie-wrapper");
  const cookieAccept = document.querySelector("#cookie-accept-button");

  // Check localStorage on load
  const consent = localStorage.getItem("cookiesConsent");

  if (consent === "accepted") {
    cookieWrapper.style.display = "none";
  } else {
    cookieWrapper.style.display = "block";
  }

  // Handle accept click
  cookieAccept.addEventListener("click", function () {
    localStorage.setItem("cookiesConsent", "accepted");
    cookieWrapper.style.display = "none";
  });
}

consentFunctionality();


$(document).ready(function () {
  $('.still-bar-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 250,
    arrows: false,
    pauseOnHover: true,
    dots: true,
  });
});

$(document).ready(function () {
  $('.partner-carousel').slick({
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 250,
    variableWidth: true,
    arrows: false,
    pauseOnHover: true,

    swipe: false,
    draggable: false,
    touchMove: false,
  });
});

$(document).ready(function () {
  $('.clients-carousel').slick({
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 250,
    variableWidth: true,
    arrows: false,
    pauseOnHover: true,
    
    swipe: false,
    draggable: false,
    touchMove: false,
  });
});




var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");

window.addEventListener('scroll', function() {
    last_scroll_position = window.scrollY;

    // add sticky class once you scroll past top
    if (last_scroll_position > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // scroll hide/show logic
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        header.classList.remove("slideDown");
        header.classList.add("slideUp");
    } else if (new_scroll_position > last_scroll_position) {
        header.classList.remove("slideUp");
        header.classList.add("slideDown");
    }

    new_scroll_position = last_scroll_position;
});



//Hamburger
var $hamburger = $(".hamburger");
var $menu = $("#menu-wrapper");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    if ($hamburger.hasClass("is-active")) {
      openNav();
      $menu.css("display", "block");
    } else {
      $menu.css("display", "none");
      closeNav();
    }
  });

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("menu-wrapper").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("menu-wrapper").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
