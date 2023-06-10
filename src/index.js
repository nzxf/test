import './style.css';
import { myFunctions } from './functions';
const elMaker = myFunctions.elMaker;
const content = document.querySelector('#content');

// IIFE
const calc = (() => {
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;

  return { add, multiply };
})();
// console.log(calc.add(34, 52));

const myWallet = (() => {
  let _money = 0;
  let _cards = [
    { name: 'debit', amount: 1 },
    { name: 'coupon', amount: 4 },
  ];
  // MONEY
  const get = (num) => (_money += num);
  const pay = (num) => (_money -= num);
  // CARD
  const info = () => {
    let result = [];
    result.push('Right now the content of your wallet are ');
    _cards.forEach((each) => {
      result.push(`${each.amount} ${each.name} card${isPlural(each.amount)}, `);
    });
    result.push(`and ${_money} dollar${isPlural(_money)}`);
    return console.log(result.join(''));
  };
  //CLOSURE
  return { info, get, pay };
})();

const avatars = [
  'https://cdn-icons-png.flaticon.com/512/921/921111.png',
  'https://cdn-icons-png.flaticon.com/512/921/921112.png',
  'https://cdn-icons-png.flaticon.com/512/921/921076.png',
  'https://cdn-icons-png.flaticon.com/512/921/921079.png',
  'https://cdn-icons-png.flaticon.com/512/921/921128.png',
  'https://cdn-icons-png.flaticon.com/512/921/921133.png',
  'https://cdn-icons-png.flaticon.com/512/921/921090.png',
  'https://cdn-icons-png.flaticon.com/512/921/921138.png',
  'https://cdn-icons-png.flaticon.com/512/921/921117.png',
  'https://cdn-icons-png.flaticon.com/512/921/921115.png',
];

let min = 0;
let max = avatars.length;
let currentNum = min;

const updatePanel = () => {
  const allPanels = document.querySelectorAll('.panel');
  allPanels.forEach((p) => p.classList.remove('panel-active'));
  const activePanel = document.querySelector(`.panel-${currentNum}`);
  activePanel.classList.add('panel-active');
};
const updateImage = () => {
  image.style.backgroundImage = `url(${avatars[currentNum]})`;
};
const autoSlide = (interval) => {
  setInterval(() => {
    currentNum += 1;
    if (currentNum === max) {
      currentNum = min;
    }
    updatePanel();
    updateImage();
  }, interval);
};

const imageContainer = elMaker('div', content, '', 'image-container');
const prev = elMaker('button', imageContainer, '', 'prev-button', 'buttons');
prev.value = '<'
const image = elMaker('div', imageContainer, '', 'image');
const next = elMaker('button', imageContainer, '', 'next-button', 'buttons');
next.value = '>'
const panelContainer = elMaker('div', content);
for (let i = 0; i < avatars.length; i++) {
  const panel = elMaker('button', panelContainer, '', 'panel', `panel-${i}`);
  panel.value = i;
}

const panels = document.querySelectorAll('.panel');
panels.forEach((panel) =>
  panel.addEventListener('click', () => {
    document
      .querySelectorAll('.panel')
      .forEach((p) => p.classList.remove('panel-active'));
    panel.classList.add('panel-active');
    currentNum = parseInt(panel.value);
    image.style.backgroundImage = `url(${avatars[currentNum]})`;

    console.log(currentNum);
  })
);

const twoButtons = document.querySelectorAll('.buttons');
twoButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (currentNum !== min && button.value === '<') {
      currentNum -= 1;
    } else if (currentNum !== max - 1 && button.value === '>') {
      currentNum += 1;
    }
    updatePanel();
    updateImage();
  })
);

updateImage();
updatePanel();
autoSlide(3000);
