function convertToInteger(x, base) {
  const a = parseInt(x, base);
  const b = "Это конвертировать нельзя";
  if (isNaN(a)) { return b; }
  return a;
}

console.log(convertToInteger('0xF', 16));
// Вернет 15

console.log(convertToInteger('321', 10));
// Вернет 321

console.log(convertToInteger('Пишу какой текст', 10));
// Вернет "Это конвертировать нельзя"
