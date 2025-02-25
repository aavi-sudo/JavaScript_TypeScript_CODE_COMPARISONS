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
|**Lines of Code (LOC)** |                      |                          |
| **Cyclomatic Complexity (CC)** | 6                    | 3                       |
| **Halstead Effort (E)**        | ~3523                | ~893                    |
| **Maintainability Index (MI)**  | ~50.8                | ~63.8                   |



# Detailed Calculations

## 1. Cyclomatic Complexity (CC)

### JavaScript `calculate`:

#### Decision Points:
- `if (typeof a !== "number" || typeof b !== "number")`
- `if (typeof operation !== "string")`
- `if (operation === "add")`
- `if (operation === "subtract")`
- `if (operation === "multiply")`

#### Calculation:
\[
CC = (\text{Number of decisions}) + 1 = 5 + 1 = 6
\]

### TypeScript `calculateTS`:

#### Decision Points:
- `if (operation === "add")`
- `if (operation === "subtract")`

#### Calculation:
\[
CC = (\text{Number of decisions}) + 1 = 2 + 1 = 3
\]

---

## 2. Halstead Effort (E)

### JavaScript `calculate`:

#### Token Estimates:
- **Total Operators (N₁):** ≈ 31  
- **Total Operands (N₂):** ≈ 25  
- **Total Tokens (N):** 56  
- **Distinct Operators (n₁):** ≈ 13  
- **Distinct Operands (n₂):** ≈ 12  
- **Vocabulary (n = n₁ + n₂):** 25  

#### Calculations:

**Volume (V):**  
\[
V = N \times \log_2(n) \approx 56 \times \log_2(25)
\]
\[
\log_2(25) \approx 4.64, \quad V \approx 56 \times 4.64 \approx 260
\]

**Difficulty (D):**  
\[
D = \left(\frac{n₁}{2}\right) \times \left(\frac{N₂}{n₂}\right) \approx \left(\frac{13}{2}\right) \times \left(\frac{25}{12}\right)
\]
\[
\approx 6.5 \times 2.083 \approx 13.54
\]

**Effort (E):**  
\[
E = V \times D \approx 260 \times 13.54 \approx 3523
\]

---

### TypeScript `calculateTS`:

#### Token Estimates:
- **Total Operators (N₁):** ≈ 11  
- **Total Operands (N₂):** ≈ 18  
- **Total Tokens (N):** 29  
- **Distinct Operators (n₁):** ≈ 7  
- **Distinct Operands (n₂):** ≈ 8  
- **Vocabulary (n = n₁ + n₂):** 15  

#### Calculations:

**Volume (V):**  
\[
V = N \times \log_2(n) \approx 29 \times \log_2(15)
\]
\[
\log_2(15) \approx 3.91, \quad V \approx 29 \times 3.91 \approx 113.3
\]

**Difficulty (D):**  
\[
D = \left(\frac{n₁}{2}\right) \times \left(\frac{N₂}{n₂}\right) \approx \left(\frac{7}{2}\right) \times \left(\frac{18}{8}\right)
\]
\[
\approx 3.5 \times 2.25 \approx 7.88
\]

**Effort (E):**  
\[
E = V \times D \approx 113.3 \times 7.88 \approx 893
\]

---

## 3. Maintainability Index (MI)

The Maintainability Index is computed using the formula:

\[
MI = \max(0, \left(171 - 5.2 \times \ln(E) - 0.23 \times CC - 16.2 \times \ln(LOC)\right) / 171) \times 100
\]

### JavaScript `calculate`:

**Values:**
- **CC:** 6
- **E:** ≈ 3523
- **LOC:** ≈ 12

**Intermediate Calculations:**
\[
\ln(3523) \approx 8.17, \quad \ln(12) \approx 2.48
\]
\[
MI_{\text{raw}} = 171 - (5.2 \times 8.17 + 0.23 \times 6 + 16.2 \times 2.48)
\]
\[
\approx 171 - (42.48 + 1.38 + 40.26) \approx 171 - 84.12 \approx 86.88
\]

**Final Calculation:**
\[
MI \approx \left(\frac{86.88}{171}\right) \times 100 \approx 50.8
\]

---

### TypeScript `calculateTS`:

**Values:**
- **CC:** 3
- **E:** ≈ 893
- **LOC:** ≈ 5

**Intermediate Calculations:**
\[
\ln(893) \approx 6.79, \quad \ln(5) \approx 1.61
\]
\[
MI_{\text{raw}} = 171 - (5.2 \times 6.79 + 0.23 \times 3 + 16.2 \times 1.61)
\]
\[
\approx 171 - (35.31 + 0.69 + 26.08) \approx 171 - 62.08 \approx 108.92
\]

**Final Calculation:**
\[
MI \approx \left(\frac{108.92}{171}\right) \times 100 \approx 63.8
\]

---

## 4. Control Flow Graphs (CFG)

The following images represent the control flow graphs generated for each function using Python and Graphviz:

### JavaScript `calculate` CFG:
![JavaScript CFG](calculate_cfg.pdf)

### TypeScript `calculateTS` CFG:
![TypeScript CFG](calculateTS_cfg.pdf)
