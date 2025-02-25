# Comparison of JavaScript `calculate` and TypeScript `calculateTS` Functions

This document compares two functions based on four metrics:
1. **Cyclomatic Complexity (CC)**
2. **Halstead Effort (E)**
3. **Maintainability Index (MI)**
4. **Control Flow Graphs (CFG)**

----
# Metrics Comparison

| Metric                  | JavaScript `calculate` | TypeScript `calculateTS` |
|-------------------------|----------------------|-------------------------|
|** Lines of Code (LOC) ** |                      |                          |
| **Cyclomatic Complexity (CC)** | 6                    | 3                       |
| **Halstead Effort (E)**        | ~3523                | ~893                    |
| **Maintainability Index (MI)**  | ~50.8                | ~63.8                   |



Detailed Calculations
1. Cyclomatic Complexity (CC)
JavaScript calculate:

Decision Points:
if (typeof a !== "number" || typeof b !== "number")
if (typeof operation !== "string")
if (operation === "add")
if (operation === "subtract")
if (operation === "multiply")
Calculation: CC = (Number of decisions) + 1 = 5 + 1 = 6
TypeScript calculateTS:

Decision Points:
if (operation === "add")
if (operation === "subtract")
Calculation: CC = (Number of decisions) + 1 = 2 + 1 = 3
2. Halstead Effort (E)
JavaScript calculate:

Token Estimates:
Total Operators (N₁): ≈ 31
Total Operands (N₂): ≈ 25
Total Tokens (N): 56
Distinct Operators (n₁): ≈ 13
Distinct Operands (n₂): ≈ 12
Vocabulary (n = n₁ + n₂): 25
Calculations:
Volume (V):
V = N × log₂(n) ≈ 56 × log₂(25)
log₂(25) ≈ 4.64, so V ≈ 56 × 4.64 ≈ 260
Difficulty (D):
D = (n₁ / 2) × (N₂ / n₂) ≈ (13/2) × (25/12) ≈ 6.5 × 2.083 ≈ 13.54
Effort (E):
E = V × D ≈ 260 × 13.54 ≈ 3523
TypeScript calculateTS:

Token Estimates:
Total Operators (N₁): ≈ 11
Total Operands (N₂): ≈ 18
Total Tokens (N): 29
Distinct Operators (n₁): ≈ 7
Distinct Operands (n₂): ≈ 8
Vocabulary (n = n₁ + n₂): 15
Calculations:
Volume (V):
V = N × log₂(n) ≈ 29 × log₂(15)
log₂(15) ≈ 3.91, so V ≈ 29 × 3.91 ≈ 113.3
Difficulty (D):
D = (n₁ / 2) × (N₂ / n₂) ≈ (7/2) × (18/8) ≈ 3.5 × 2.25 ≈ 7.88
Effort (E):
E = V × D ≈ 113.3 × 7.88 ≈ 893
3. Maintainability Index (MI)
The Maintainability Index is computed with the formula:

MI = max(0, ((171 - 5.2 × ln(E) - 0.23 × CC - 16.2 × ln(LOC)) / 171) × 100)

JavaScript calculate:

Values:
CC = 6, E ≈ 3523, LOC ≈ 12
ln(3523) ≈ 8.17, ln(12) ≈ 2.48
Calculation:
MI_raw = 171 - (5.2 × 8.17 + 0.23 × 6 + 16.2 × 2.48)
≈ 171 - (42.48 + 1.38 + 40.26) ≈ 171 - 84.12 ≈ 86.88
MI ≈ (86.88 / 171) × 100 ≈ 50.8
TypeScript calculateTS:

Values:
CC = 3, E ≈ 893, LOC ≈ 5
ln(893) ≈ 6.79, ln(5) ≈ 1.61
Calculation:
MI_raw = 171 - (5.2 × 6.79 + 0.23 × 3 + 16.2 × 1.61)
≈ 171 - (35.31 + 0.69 + 26.08) ≈ 171 - 62.08 ≈ 108.92
MI ≈ (108.92 / 171) × 100 ≈ 63.8
Control Flow Graphs (CFG)
The following images represent the control flow graphs generated for each function using Python and Graphviz:

JavaScript calculate CFG:

TypeScript calculateTS CFG:


