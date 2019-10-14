const scrollNav = (() => {
  const scrollFunction = (() => {
    const nav = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      nav.classList.add('nav-down');
      nav.classList.remove('nav-up');
    } else {
      nav.classList.remove('nav-down');
      nav.classList.add('nav-up');
    }
  });
  window.addEventListener('scroll', () => { scrollFunction(); });
});

export default scrollNav;