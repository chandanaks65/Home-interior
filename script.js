document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('discount-popup');
  var closeBtn = document.querySelector('.close-btn');

  // Show the popup after a short delay
  setTimeout(function() {
    popup.style.display = 'block';
  }, 2000); // 2 seconds delay

  // Close the popup when the close button is clicked
  closeBtn.onclick = function() {
    popup.style.display = 'none';
  };

  // Close the popup when clicking outside the popup content
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  };

  // Initialize carousel index
  var carouselIndex = 0;

  // Function to update the carousel display
  function updateCarousel() {
    var slides = document.querySelectorAll('.carousel-slide img');
    if (carouselIndex >= slides.length) { carouselIndex = 0; }
    if (carouselIndex < 0) { carouselIndex = slides.length - 1; }
    var offset = -carouselIndex * 100;
    document.querySelector('.carousel-slide').style.transform = 'translateX(' + offset + '%)';
  }

  // Function to change carousel slide
  function changeSlide(n) {
    carouselIndex += n;
    updateCarousel();
  }

  // Add event listeners for carousel navigation
  document.querySelector('.prev-btn').addEventListener('click', function() {
    changeSlide(-1);
  });

  document.querySelector('.next-btn').addEventListener('click', function() {
    changeSlide(1);
  });
});

// Function to close the popup (outside of DOMContentLoaded listener)
function closePopup() {
  document.getElementById('discount-popup').style.display = 'none';
}

// Function for countdown timer
var countDownDate = new Date("June 30, 2024 23:59:59").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
