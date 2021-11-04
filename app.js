const btn = document.querySelector('button');
const bodyElement = document.querySelector('body');
const hexCode = document.querySelector('h2');

const hex = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

const hexCodeGenerator = () => {
  let code = '';
  let randomNumber;
  for (let i = 0; i <= 5; i++) {
    randomNumber = Math.floor(Math.random() * 15);
    code += hex[randomNumber];
  }
  return '#' + code;
};

const onClickHandler = () => {
  let genratedColorHex = hexCodeGenerator();
  bodyElement.style.backgroundColor = genratedColorHex;
  hexCode.textContent = genratedColorHex;
  hexCode.style.color = genratedColorHex;
};

btn.addEventListener('click', onClickHandler);
