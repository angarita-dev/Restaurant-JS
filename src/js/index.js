import scrollNav from './modules/navbar-scroll';
import tabSelector from './modules/navbar-tab-select';

import home from './modules/home';
import about from './modules/about';
import contact from './modules/contact';


const domMounter = () => {
  const container = document.getElementById('content');

  const homeBtn = document.getElementById('home-btn');
  const aboutBtn = document.getElementById('about-btn');
  const contactBtn = document.getElementById('contact-btn');

  const dismount = (container) => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };

  const mount = (container, content) => {
    const wrapped = document.createElement('div');
    wrapped.classList.add('container');
    content.map((element) => wrapped.appendChild(element));
    container.appendChild(wrapped);
  };

  const display = (container, content) => {
    container.classList.add('fade-out');
    setTimeout(() => {
      dismount(container);
      mount(container, content);
      container.classList.remove('fade-out');
    }, 600);
    container.classList.add('fade-in');
  };

  homeBtn.addEventListener('click', () => { display(container, home()); });
  aboutBtn.addEventListener('click', () => { display(container, about()); });
  contactBtn.addEventListener('click', () => { display(container, contact()); });
};

const init = (() => {
  tabSelector();
  scrollNav();
  domMounter();
})();