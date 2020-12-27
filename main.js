symbols = {
  "~": 1,
  v: 2,
  ">": 3,
  E: 4,
  "=": 5,
  0: 6,
  s: 7,
  "(": 8,
  ")": 9,
  ",": 10,
  "+": 11,
  "*": 12,
  x: 13,
  y: 17,
  z: 19,
};
symbolsInvs = {
  1: "~",
  2: "v",
  3: ">",
  4: "E",
  5: "=",
  6: "0",
  7: "s",
  8: "(",
  9: ")",
  10: ",",
  11: "+",
  12: "*",
  13: "x",
  17: "y",
  19: "z",
};

isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;

  for (i = 2; i < number; i++) if (number % i === 0) return false;

  return true;
};

function* nextPrime() {
  let i = 1;
  while (true) {
    if (isPrime(i)) yield i;
    ++i;
  }
}

godelNumbering = (numbers) => {
  if (numbers.length === 0) return 0;

  let primes = [];
  let np = nextPrime();
  while (primes.length < numbers.length) primes.push(np.next().value);

  let encoding = Math.pow(2, numbers[0]);
  if (numbers.length > 1)
    for (j = 1; j < numbers.length; j++)
      encoding = encoding * Math.pow(primes[j], numbers[j]);

  return encoding;
};

createGodelNumber = (expression) => {
  let symbolizedExpression = [];
  for (i in expression) symbolizedExpression.push(symbols[expression[i]]);
  return godelNumbering(symbolizedExpression);
};

findExpression = (godelNumber) => {
  let np = nextPrime();
  let expression = "";

  for (i = 0; i < 10; i++) {
    prime = np.next().value;

    if (godelNumber == 1) break;

    counter = 0;
    while (godelNumber % prime == 0) {
      godelNumber = godelNumber / prime;
      ++counter;
    }

    if (counter !== 0) expression += symbolsInvs[counter];
  }

  return expression;
};

// console.log(findExpression(createGodelNumber("~x")));
