function calculate(op) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  let res = 0;

  if (op === '+') res = n1 + n2;
  else if (op === '-') res = n1 - n2;
  else if (op === '*') res = n1 * n2;
  else if (op === '/') res = n1 / n2;

  document.getElementById("result").textContent = "Result: " + res;
}
