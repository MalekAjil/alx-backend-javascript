// 0-calcul.js
function calculateNumber(type, a, b) {
  if (type == "SUM")
    return Math.round(a) + Math.round(b);
  else if (type == "SUBTRACT")
    return Math.round(a) - Math.round(b);
  else if (type == "DIVIDE") {
    var bb = Math.round(b);
    if (bb == 0)
      return "Error"
    return Math.round(a) / bb;
  }
}

module.exports = calculateNumber;
