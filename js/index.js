d3.xml("mapa-svg/america-bordes.svg")
  .then(data => {
    d3.select("#svg-mapa").node().append(data.documentElement)
  });

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

