function bgchange(val) {
  document.body.style.background = val;
  localStorage.setItem('backgroundColor', val);
}

// Retrieve the color from local storage on page load
window.addEventListener('load', function() {
  const savedColor = localStorage.getItem('backgroundColor');
  if (savedColor) {
    document.body.style.background = savedColor;
  }
});

function changeNavbarColor(color) {
  const navbar = document.querySelector('.navbar');
  navbar.style.background = color;
  localStorage.setItem('navbarColor', color);
}

// Retrieve the color from local storage on page load
window.addEventListener('load', function() {
  const savedColor = localStorage.getItem('navbarColor');
  if (savedColor) {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = savedColor;
  }
});

