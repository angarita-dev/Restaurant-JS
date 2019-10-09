window.onscroll = function() { scrollFunction() };

function scrollFunction() {
	x = document.getElementById("navbar");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		x.classList.add('down');
  } else {
		x.classList.remove('down');
  }
}