const menu = (() => {
  const menu = () => {
    console.log('Welcome to the intangible restaurant!, this is today\'s menu: \n\t 1.RegExp soup. \n\t 2.Recursive salad. \n\t 3.Chef\'s specialty. \n\n When you make up your mind just order(plate)');
  }
  const order = (plate) => {
    switch (plate) {
      case 1:
        console.log('Wonderfull choice! /:)/');
        break;
      case 2:
        console.log('The stack of plates is full now, cannot serve your salad :/');
        break;
      case 3:
        console.log('Enjoy your Ruby on Fries with JavaSauce topping!');
        break;
      default:
        console.log('hmm, that plate is not available today, maybe tomorrow?');
        break;
    }
  }
  window.menu = menu;
  window.order = order;
})

export default menu; 