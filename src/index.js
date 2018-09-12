module.exports = function solveEquation(equation) {
  var info = equation.split(" ");
  var a = +info[0];
  var b = +info.slice(3, 5).join("");
  var c = +info.slice(7, 9).join("");
  var d = b * b - 4 * a * c;
  var result = [];
  result.push(Math.round((-b - Math.sqrt(d)) / (2 * a)));
  result.push(Math.round((-b + Math.sqrt(d)) / (2 * a)));
  result.sort((a, b) => a - b);
  return result;
}
