const aboutContent = (() => {
  let header = document.createElement('h2');
  header.appendChild(document.createTextNode('We are a pioneers in the intangible restaurant market, serving the best functions in the whole web.'));
  let whatAboutYou = document.createElement('h3');
  whatAboutYou.appendChild(document.createTextNode('what about you?'));
  let face = document.createElement('h3');
  face.appendChild(document.createTextNode('(⚆ _ ⚆)'))
  return [header, whatAboutYou, face];
});

export default aboutContent