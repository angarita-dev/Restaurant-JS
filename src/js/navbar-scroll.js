window.onscroll = function() { scrollFunction() };

function scrollFunction() {
	x = document.getElementById("navbar");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    x.classList.add('nav-down');
    x.classList.remove('nav-up');
  } else {
    x.classList.remove('nav-down');
    x.classList.add('nav-up');
  }
}