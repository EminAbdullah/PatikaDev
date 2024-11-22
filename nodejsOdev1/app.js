const args = process.argv.slice(2);
const radius = parseFloat(args[0]);

if (isNaN(radius) || radius <= 0) {
  console.log("Lütfen geçerli bir pozitif sayı giriniz!");
} else {
  const area = Math.PI * Math.pow(radius, 2);
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
}