function rightRiemannSum(f, a, b, n = 1000000) {
  if (a > b) {
    [a, b] = [b, a]
  }

  const dx = (b - a) / n;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    const x = a + i * dx;
    sum += f(x);
  }

  return sum * dx;
}

const F = (x) => x ** 2 - x + 1;

const inputA = prompt("Введите начальную точку интервала (a):");
const inputB = prompt("Введите конечную точку интервала (b):");

const a = parseFloat(inputA);
const b = parseFloat(inputB);

const result = rightRiemannSum(F, a, b);
alert(`Результат интегрирования F(x) на отрезке [${a}, ${b}]: ${result}`);
