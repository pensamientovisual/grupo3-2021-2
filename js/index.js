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

var windowInitWidth = window.innerWidth;
var nums = document.getElementsByClassName('num');

// get the value of num font-size
var numFontSize = window.getComputedStyle(nums[0]).getPropertyValue("font-size");
numFontSize = Number(numFontSize.replace("px", ""));

console.log(numFontSize);

// update the text font-size when resizing the window
window.addEventListener("resize", function() {
  for( var i = 0; i < nums.length; i++) {
    nums[i].style.fontSize = (window.innerWidth / windowInitWidth * numFontSize) + 'px';
    console.log(nums[i].style.fontSize)
  }
})
