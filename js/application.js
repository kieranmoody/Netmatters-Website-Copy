/*cookies functionality*/
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
var $website = $("html")
  $hamburger.on("click", function(e) {
    e.stopPropagation();

    $hamburger.toggleClass("is-active");
    if ($hamburger.hasClass("is-active")) {
      $menu.css("display", "block");
      $website.addClass("menu-active");
    } else {
      $menu.css("display", "none");
      $website.removeClass("menu-active");
    }
  });

var $main = $("#menu-colorchange");
$main.on("click", function () {
  if ($website.hasClass("menu-active")) {
    $hamburger.removeClass("is-active");
    $menu.css("display", "none");
    $website.removeClass("menu-active");
  }
});