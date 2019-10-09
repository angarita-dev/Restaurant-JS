import scrollNav from './modules/navbar-scroll';
import tabSelector from './modules/navbar-tab-select';
import digitalMenu from './modules/digital-menu';

import home from './modules/home';
import about from './modules/about';
import contact from './modules/contact';


const domMounter = () => {
  const container = document.getElementById('content');

  const homeBtn = document.getElementById('home-btn');
  const aboutBtn = document.getElementById('about-btn');
  const contactBtn = document.getElementById('contact-btn');

  const mount = (container, content) => {
    const wraped = `<div class="container">${content}</div>`;
    container.classList.add('fade-out');
    setTimeout(() => { 
      container.innerHTML = wraped;
      container.classList.remove('fade-out');
    }, 600);
    container.classList.add('fade-in')
  }

  homeBtn.addEventListener('click', () => { mount(container, home()) } );
  aboutBtn.addEventListener('click', () => { mount(container, about()) } );
  contactBtn.addEventListener('click', () => { mount(container, contact()) } );
}

const init = (() => {
  digitalMenu();
  tabSelector();
  scrollNav();
  domMounter();
})();