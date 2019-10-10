const contactContent = (() => {
  let header = document.createElement('h2');
  header.appendChild(document.createTextNode('You can\'t touch me, I\'m intangible, remember?'));
  let joke = document.createElement('h3');
  joke.innerHTML = '<h3>just kidding, you can check where I <a class="outside-link" href="https://github.com/codingAngarita/Restaurant-JS" target="_blank">currently live</a> or meet the <a href="https://github.com/codingAngarita" class="outside-link" target="_blank">chef</a></h3>';
  let face = document.createElement('h2');
  face.appendChild(document.createTextNode('(⚆ _ ⚆)'))
  return [header, joke, face];
});

export default contactContent