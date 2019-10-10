const tabSelector = (() => {
  const elements = document.getElementsByClassName('tab');
  const addClass = x => x.classList.add('selected');
  const removeClass = () => {
    for (let tab of elements) {
      tab.classList.remove('selected');
    }
  };
  const toggleClass = (element) => {
    removeClass();
    addClass(element);
  };
  const addEventListener = () => {
    for (let tab of elements) {
      tab.addEventListener('click', (() => { toggleClass(tab) }));
    }
  };
  return addEventListener();
});

export default tabSelector;