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
- **Errors occur at runtime** if incorrect input types are used (handled for some cases, to stop the program from crashing).
- **Manual type checks** are needed for input validation.
- **Unsupported operations (e.g., division)** could cause unexpected behavior.

---

## TypeScript Implementation (TS1.ts)

**Key Points:**
- **Compile-time type checking** prevents invalid inputs before execution.
- **Static typing eliminates manual type checks.**
- **Safer and more maintainable** due to restricted input values.

---

## Conclusion

This repository demonstrates how TypeScript’s static type checking results in safer, more maintainable code compared to JavaScript’s runtime type checks. The additional comparison file provides deeper insights into these differences using measurable software metrics and CFG visualizations.
