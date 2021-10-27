/* window.onscroll = function() {myFunction()};    /*https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$(document).ready(function () {
  $(window).scroll(function (e) {
    // Our logic here
  });

// Detect how far are we from the top of the page
let windowTop = $(this).scrollTop();
// Loop through every navigation menu item
$('.nav a').each(function (event) {

    // Check for the current navigation item associated section
    // Check how far the associated section is from the top
    // If the associated section is as far as the user have scrolled, add 'active' class to the item.
    if (windowTop >= $($(this).attr('href')).offset().top - 100) {
        // Remove 'active' from previously highlighted menu items
        $('.nav .active').removeClass('active');

        // Highlight the current menu item by adding 'active' class
        $(this).addClass('active');
    }
});
});

/*

$(document).ready(function () {
  let menuScrollTimer = null;
  $(".nav a").click(function (e) {
      // Prevent default behaviour ( scroll to element )
      e.preventDefault();
      if (menuScrollTimer === null) {
          // Highlight the clicked item
          $('.nav a.active').removeClass('active');
          $(this).addClass('active');
          // Smooth scroll to the target section
          let target = $(this).attr('href');
          $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 1050);
          // Set `menuScrollTimer` timer
          // This will prevents multiple clicks on menu items whule the smooth scroll is taking effect
          // This will also prevent the scroll logic from running
          menuScrollTimer = setTimeout(function () {
              clearTimeout(menuScrollTimer);
              menuScrollTimer = null;
          }, 1050);
      }
  });

  $(window).scroll(function (e) {
      // Avoid triggering the logic if the scroll event is triggerd from clicking one of the items
      if (menuScrollTimer === null) {
          let windowTop = $(this).scrollTop();

          $('.nav a').each(function (event) {
              if (windowTop >= $($(this).attr('href')).offset().top - 100) {
                  $('.nav .active').removeClass('active');
                  $(this).addClass('active');
              }
          });
      }
  });
});

FIN PEDAZO CÓDIGO NO USADO*/