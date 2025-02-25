function calculateTS(a: number, b: number, operation: "add" | "subtract" | "multiply"): number {
  if (operation === "add") return a + b;
  if (operation === "subtract") return a - b;
  return a * b;
}

console.log(calculateTS(5, 3, "add")); //works fine 
// console.log(calculateTS(5, "3", "add")); //compile time error

