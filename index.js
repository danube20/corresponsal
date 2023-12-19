const bankType = document.getElementById('bank')
const resetBtn = document.getElementById('reset');
const oneHundredThousand = document.getElementById('oneHundredThousand');
const fiftyThousand = document.getElementById('fiftyThousand');
const twentyThousand = document.getElementById('twentyThousand');
const tenThousand = document.getElementById('tenThousand');
const fiveThousand = document.getElementById('fiveThousand');
const twoThousand = document.getElementById('twoThousand');
const oneThousand = document.getElementById('oneThousand');
const fiveHundred = document.getElementById('fiveHundred');
const twoHundred = document.getElementById('twoHundred');
const oneHundred = document.getElementById('oneHundred');
const fifty = document.getElementById('fifty');
const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');

calculateBtn.onclick = () => {
  const oneHundredThousandValue = oneHundredThousand.value * 100000;
  const fiftyThousandValue = fiftyThousand.value * 50000;
  const twentyThousandValue = twentyThousand.value * 20000;
  const tenThousandValue = tenThousand.value * 10000;
  const fiveThousandValue = fiveThousand.value * 5000;
  const twoThousandValue = twoThousand.value * 2000;
  const oneThousandValue = oneThousand.value * 1000;
  const fiveHundredValue = fiveHundred.value * 500;
  const twoHundredValue = twoHundred.value * 200;
  const oneHundredValue = oneHundred.value * 100;
  const fiftyValue = fifty.value * 50;
  const sum =
    oneHundredThousandValue +
    fiftyThousandValue +
    twentyThousandValue +
    tenThousandValue +
    fiveThousandValue +
    twoThousandValue +
    oneThousandValue +
    fiveHundredValue +
    twoHundredValue +
    oneHundredValue +
    fiftyValue;

  result.textContent = sum;

  if (bankType.textContent === 'Banco de Bogotá') {
    if (sum > 44000000) {
      result.style.color = 'red'
    } else {
      result.style.color = 'green'
    }
  }
  console.log(bankType.textContent);
  if (bankType.textContent === 'Bancolombia') {
    if (sum > 5000000) {
      result.style.color = 'red'
    } else {
      result.style.color = 'green'
    }
  }
};

resetBtn.onclick = () => {
  oneHundredThousand.value = 0;
  fiftyThousand.value = 0;
  twentyThousand.value = 0;
  tenThousand.value = 0;
  fiveThousand.value = 0;
  twoThousand.value = 0;
  oneThousand.value = 0;
  fiveHundred.value = 0;
  twoHundred.value = 0;
  oneHundred.value = 0;
  fifty.value = 0;
  result.textContent = 0;
};
