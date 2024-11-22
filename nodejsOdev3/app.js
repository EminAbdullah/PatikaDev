const { circleArea, circleCircumference } = require('./circle');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Lütfen dairenin yarıçapını giriniz: ', (input) => {
  const radius = parseFloat(input);

  if (isNaN(radius) || radius <= 0) {
    console.log('Geçerli bir yarıçap değeri giriniz');
  } else {
    console.log(`Dairenin Alanı (r=${radius}): ${circleArea(radius).toFixed(2)}`);
    console.log(`Dairenin Çevresi (r=${radius}): ${circleCircumference(radius).toFixed(2)}`);
  }

  rl.close();
});
