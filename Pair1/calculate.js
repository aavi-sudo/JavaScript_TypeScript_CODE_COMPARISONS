function calculate(a, b, operation) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input: Numbers required.");
  }
  if (typeof operation !== "string") {
    throw new Error("Invalid operation type.");
  }
  if (operation === "add") return a + b;
  if (operation === "subtract") return a - b;
  if (operation === "multiply") return a * b;
  throw new Error("Invalid operation.");
}

console.log(calculate(5, 3, "add")); //works
console.log(calculate(5, "3", "add")); //runtime error

