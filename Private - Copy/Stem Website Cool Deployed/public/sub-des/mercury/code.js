var g = document.getElementById("canvas-gravity")
var gtx = g.getContext("2d");

var simGoing = 0;
function gravitySimulation(grav) {
    if (simGoing == 0) {
        simGoing = 1
        var x = g.width/2-  15;
        var y = 10;
        var gravity = grav/5;
        var vol = 0;
        const update = setInterval(updateGravity, 30);
        
        function updateGravity() {
            gtx.fillStyle = "white"
            gtx.fillRect(0, 0, g.width, g.height)
            gtx.fillStyle = "red"
            gtx.fillRect(x, y, 30, 20);

            vol += gravity;
            if (y+vol > g.height - 10) {
                clearInterval(update)
                gtx.fillStyle = "white"
                gtx.fillRect(0, 0, g.width, g.height)
                gtx.fillStyle = "red"
                gtx.fillRect(x, g.height-20, 30, 20);
                simGoing = 0;
            } else {
                y += vol;
            }
        }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}