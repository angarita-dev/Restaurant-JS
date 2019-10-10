const homeContent = (() => {
  const header = document.createElement('h2');
  header.appendChild(document.createTextNode('Welcome to our intangible restaurant'));
  const info = document.createElement('h4');
  info.innerHTML = '<h4>You can ask for the <span class="code">menu()</span> over there, in the <span class="code">developer console</span></h4>';
  return [header, info];
});

export default homeContent;