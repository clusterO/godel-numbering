import { symbols, symbols_inverse } from "./symbols.js";

function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;

  const sqrt = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function* nextPrime() {
  let i = 2;
  while (true) {
    if (isPrime(i)) yield i;
    i++;
  }
}

function godelNumbering(numbers) {
  if (numbers.length === 0) return 0;

  const primes = [];
  const np = nextPrime();

  let encoding = 1;
  for (const num of numbers) {
    const prime = np.next().value;
    primes.push(prime);
    encoding *= Math.pow(prime, num);
  }

  return encoding;
}

function createGodelNumber(expression, symbols) {
  const symbolizedExpression = [];
  for (const char of expression) {
    const symbol = symbols[char];
    if (symbol !== undefined) {
      symbolizedExpression.push(symbol);
    }
  }
  return godelNumbering(symbolizedExpression);
}

const symbolsCount = Object.keys(symbols).length;
function findExpression(godelNumber, symbolsInvs) {
  const np = nextPrime();
  let expression = "";

  for (let i = 0; i < symbolsCount; i++) {
    const prime = np.next().value;

    if (godelNumber === 1) break;

    let counter = 0;
    while (godelNumber % prime === 0) {
      godelNumber /= prime;
      counter++;
    }

    if (counter !== 0) {
      const symbol = symbolsInvs[counter];
      if (symbol) {
        expression += symbol;
      } else {
        console.error(`Invalid Godel number: ${godelNumber}`);
        break;
      }
    }
  }

  return expression;
}

// Usage

const expression = "~x";
const godelNumber = createGodelNumber(expression, symbols);
console.log(`Godel Number for "${expression}": ${godelNumber}`);

const retrievedExpression = findExpression(godelNumber, symbols_inverse);
console.log(
  `Retrieved Expression for Godel Number ${godelNumber}: ${retrievedExpression}`
);
