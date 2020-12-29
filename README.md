## Godel Numbering

The Godel Numbering program is a JavaScript implementation of the Godel numbering system. This system assigns unique numbers to mathematical expressions or symbols using prime factorization. The program provides functions to convert expressions to Godel numbers and vice versa.

### Features

- Symbol Mapping: The program includes mappings between symbols and their corresponding numeric representations. This allows for seamless conversion between expressions and Godel numbers.

- Prime Number Generation: The program generates an infinite sequence of prime numbers using the concept of generators. These primes are used in the Godel numbering process.

- Godel Numbering: The `createGodelNumber` function takes an expression as input and converts it into a Godel number. The Godel number is calculated by assigning a unique number to the expression using prime factorization.

- Expression Retrieval: The `findExpression` function takes a Godel number as input and retrieves the original expression. It uses prime factorization to identify the symbols present in the Godel number and reconstructs the expression.

### Usage

To use the Godel Numbering program, follow these steps:

1. Make sure you have Node.js installed on your machine.

2. Copy the code from the provided source files into your JavaScript project or create a new JavaScript file.

3. Invoke the desired functions based on your requirements:

   - Use `createGodelNumber(expression)` to convert an expression to a Godel number.
   - Use `findExpression(godelNumber)` to retrieve the original expression from a Godel number.

4. Customize the `symbols` and `symbolsInvs` objects to modify the mapping between symbols and their numeric representations if needed.

### Example

Here's an example usage of the Godel Numbering program:

```javascript
const expression = "~x";
const godelNumber = createGodelNumber(expression);
console.log(`Godel Number for "${expression}": ${godelNumber}`);

const retrievedExpression = findExpression(godelNumber);
console.log(
  `Retrieved Expression for Godel Number ${godelNumber}: ${retrievedExpression}`
);
```

This will output:

```
Godel Number for "~x": 26
Retrieved Expression for Godel Number 26: ~x
```

### Notes

- The program supports a limited set of symbols defined in the `symbols` and `symbolsInvs` objects. You can extend these objects to include additional symbols if required.

- The program is optimized for small expressions and may not perform efficiently with large or complex expressions.

- Feel free to modify the code to suit your specific needs or integrate it into your existing projects.

Enjoy using the Godel Numbering program! If you have any questions or suggestions, please feel free to reach out.
