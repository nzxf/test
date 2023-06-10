const myFunctions = (() => {
  // TESTER
  const info = () => console.log('You are connected to myFunctions');
  // ADD S (IF PLURAL)
  const isPlural = (num) => (num > 1 ? 's' : '');
  // ELEMENT MAKER
  const elMaker = (type, parent, text = '', ...classNames) => {
    const element = document.createElement(type);
    if (classNames) {
      classNames.forEach((className) => element.classList.add(className));
    }
    element.innerText = text;
    parent.append(element);
    return element;
  };
  // ELEMENT MODIFIER
  return { info, isPlural, elMaker };
})();

export { myFunctions };
