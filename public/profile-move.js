// Move profile images into hero div for side-by-side layout
(function() {
  var imgs = document.querySelector('.hero-profile-imgs');
  var hero = document.querySelector('.hero');
  if (imgs && hero) hero.appendChild(imgs);
})();
