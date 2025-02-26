# Comparison of JavaScript and TypeScript Calculator Implementations

This repository contains two implementations of a simple calculator:
- **JS1.js**: A plain JavaScript version.
- **TS1.ts**: A TypeScript version.

Additionally, this repository includes a **detailed comparison file** where we analyze these implementations based on key software metrics:
- **Lines of Code (LOC)**
- **Cyclomatic Complexity (CC)**
- **Maintainability Index (MI)**
- **Halstead Metrics**

The repository also contains **two images of Control Flow Graphs (CFGs)** for both implementations to visualize their structural differences.

---

## JavaScript Implementation (JS1.js)

**Key Points:**
- **Errors occur at runtime** if incorrect input types are used.
- **Manual type checks** are needed for input validation.
- **Unsupported operations (e.g., division)** could cause unexpected behavior.

---

## TypeScript Implementation (TS1.ts)

**Key Points:**
- **Compile-time type checking** prevents invalid inputs before execution.
- **Static typing eliminates manual type checks.**
- **Safer and more maintainable** due to restricted input values.

---

## Further Comparison

For an in-depth analysis of these implementations, please refer to the **detailed comparison file** in this repository. It includes:
- **Metric comparisons (LOC, CC, MI, Halstead Metrics)**
- **Control Flow Graph (CFG) images** showcasing structural differences

By examining these aspects, we highlight how TypeScript enhances robustness and maintainability over JavaScript.

---

## Conclusion

This repository demonstrates how TypeScript’s static type checking results in safer, more maintainable code compared to JavaScript’s runtime type checks. The additional comparison file provides deeper insights into these differences using measurable software metrics and CFG visualizations.
