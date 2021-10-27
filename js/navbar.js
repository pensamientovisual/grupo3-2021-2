/*https://gist.github.com/bomsn/a9a73a76aac632983b7fc10768bb6359*/


$(document).ready(function () {
    let menuScrollTimer = null;
    $("#navbar a").click(function (e) {
        // Prevent default behaviour ( scroll to element )
        e.preventDefault();
        if (menuScrollTimer === null) {
            // Highlight the clicked item
            $('#navbar a.active').removeClass('active');
            $(this).addClass('active');
            // Smooth scroll to the target section
            let target = $(this).attr('href');
            $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 10);
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

            $('#navbar a').each(function (event) {
                if (windowTop >= $($(this).attr('href')).offset().top - 100) {
                    $('#navbar .active').removeClass('active');
                    $(this).addClass('active');
                }
            });
        }
    });
});


window.onscroll = function() {myFunction()};    /*https://www.w3schools.com/howto/howto_js_navbar_sticky.asp*/

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}