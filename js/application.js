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
var stickyHeader = document.getElementById("sticky-header");

window.addEventListener('scroll', function() {
    last_scroll_position = window.scrollY;

    // add sticky class once you scroll past top
    if (last_scroll_position > 0) {
        stickyHeader.classList.add('sticky');
        stickyHeader.style.display = "block";
    } else {
        stickyHeader.classList.remove('sticky');
        stickyHeader.style.display = "none";
    }

    // scroll hide/show logic
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        stickyHeader.classList.remove("slideDown");
        stickyHeader.classList.add("slideUp");
    } else if (new_scroll_position > last_scroll_position) {
        stickyHeader.classList.remove("slideUp");
        stickyHeader.classList.add("slideDown");
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

//Accordion
var accordion = $("#accordion-trigger")
var accordionMenu = $("#accordion-hidden")
accordion.on("click", function(e) {
    e.stopPropagation();
    
    accordion.toggleClass("is-open");
    if (accordion.hasClass("is-open")) {
      accordionMenu.css("display", "block");
    } else {
      accordionMenu.css("display", "none");
    }
  });



//contact form verification

let formDirty = false;
const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");

    //If the user has interacted with the form, do they really want to refresh?
document.addEventListener("DOMContentLoaded", () => {
    
    //If the user has content in the form, do they really want to refresh?
    window.addEventListener("beforeunload", (event) => {
        if (!formDirty) return;
        event.preventDefault();
    });

    //The user has typed something = dirty form
    form.addEventListener("input", () => {
    const hasData = [...form.elements].some(el =>
        el.tagName === "INPUT" || el.tagName === "TEXTAREA" ? el.value.trim() !== "" : false
    );
    formDirty = hasData;
});

  //Dynamic validation as user types
    const fields = ['name', 'email', 'telephone', 'message', 'company'];
    fields.forEach(id => {
      const input = document.getElementById(id);
      if (!input) return;

      input.addEventListener('input', () => {
          //Validate only this field
          switch(id) {
              case 'name':
                  input.value.trim() === "" 
                      ? markInvalid(input, "Name is required")
                      : markValid(input);
                  break;

              case 'email':
                  if (input.value.trim() === "") {
                      markInvalid(input, "Email is required");
                  } else if (!emailRegex.test(input.value.trim())) {
                      markInvalid(input, "Enter a valid email address");
                  } else {
                      markValid(input);
                  }
                  break;

              case 'telephone':
                  input.value.trim() === "" 
                      ? markInvalid(input, "Phone is required")
                      : markValid(input);
                  break;

              case 'message':
                  input.value.trim() === "" 
                      ? markInvalid(input, "Message cannot be empty")
                      : markValid(input);
                  break;

              case 'company':
              if (input.value.trim() !== "") {
                  markValid(input);
              } else {
                  input.classList.remove("input-valid");
              }
              break;
          }
      });
     });

});

    //Verifying the email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function markInvalid(input, message) {
    const errorBox = input.nextElementSibling;

    input.classList.add("input-invalid");
    input.classList.remove("input-valid");
    console.log("invalid");

    if (errorBox) {
        errorBox.textContent = message;
        errorBox.classList.add("show");
    }
}

function markValid(input) {
    const errorBox = input.nextElementSibling;

    input.classList.remove("input-invalid");
    input.classList.add("input-valid");
  console.log("valid");
    if (errorBox) {
        errorBox.textContent = "";
        errorBox.classList.remove("show");
    }
}



function validateForm() {
    let valid = true;
    let emailInvalid = false;
    let missingFields = false;

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("telephone");
    const messageInput = document.getElementById("message");

    //FIRST NAME
    if (nameInput.value.trim() === "") {
        markInvalid(nameInput, "Name is required");
        console.log("Name is required");//Test
        valid = false;
        missingFields = true;
    } else {
        markValid(nameInput);
        console.log("Name Success");//Test
    }

    //EMAIL
    if (emailInput.value.trim() === "") {
        markInvalid(emailInput, "Email is required");
        console.log("Email is required");//Test
        valid = false;
        missingFields = true;
    }
    else if (!emailRegex.test(emailInput.value.trim())) {
        markInvalid(emailInput, "Enter a valid email address");
        console.log("Enter a valid email address");//Test
        valid = false;
        emailInvalid = true;
    } else {
        markValid(emailInput);
        console.log("Email Success");//Test
    }

    //Phone
    if (phoneInput.value.trim() === "") {
        markInvalid(phoneInput, "Phone is required");
        console.log("Phone is required");//Test
        valid = false;
        missingFields = true;
    } else {
        markValid(phoneInput);
        console.log("Phone Success");//Test
    }

    //MESSAGE
    if (messageInput.value.trim() === "") {
        markInvalid(messageInput, "Message cannot be empty");
        console.log("Message cannot be empty");//Test
        valid = false;
        missingFields = true;
    } else {
        markValid(messageInput);
        console.log("Message Success");//Test
    }

    //RESULT LOGIC
    if (!valid) {

        if (emailInvalid) {
            showFormStatus("Your email address format is invalid.", false);
        } else if (missingFields) {
            showFormStatus("Please fill in all required fields.", false);
        }

        return false;
    }

    showFormStatus("Form Completed Successfully!", true);
    formDirty = false;
    return true;
}


function showFormStatus(message, success = false) {
    const formStatus = document.getElementById("form-status");

    formStatus.textContent = message;

    //remove old state
    formStatus.classList.remove("show", "alert-success", "alert-danger");

    //restart animation
    void formStatus.offsetHeight;

    formStatus.classList.add("show");

    if (success) {
        formStatus.classList.add("alert-success");
    } else {
        formStatus.classList.add("alert-danger");
    }

    clearTimeout(formStatus._timeout);
    formStatus._timeout = setTimeout(() => {
        formStatus.classList.remove("show");
    }, 3500);
}