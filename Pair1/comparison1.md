# Comparison of JavaScript `calculate` and TypeScript `calculateTS` Functions

This document compares two functions based on four metrics:
1. **Lines of Code (LOC)**
2. **Cyclomatic Complexity (CC)**
3. **Halstead Effort (E)**
4. **Maintainability Index (MI)**


----
# Metrics Comparison

| Metric                  | JavaScript `calculate` | TypeScript `calculateTS` |
|-------------------------|----------------------|-------------------------|
|**Lines of Code (LOC)** |                      |                          |
| **Cyclomatic Complexity (CC)** | 6                    | 3                       |
| **Halstead Effort (E)**        | ~3523                | ~893                    |
| **Maintainability Index (MI)**  | ~50.8                | ~63.8                   |


# Detailed Explanation with Calculations

## 1. Control Flow Graphs (CFG)

The following images represent the control flow graphs for each function:

### JavaScript `calculate` CFG:
![JavaScript CFG](calculate_cfg.pdf)

### TypeScript `calculateTS` CFG:
![TypeScript CFG](calculateTS_cfg.pdf)

# Cyclomatic Complexity Calculation for `calculate` and `calculateTS` Functions

As mentioned in the paper the formula for cyclomatic complexity is: 

$$
M = E - N + 2P
$$

where:
- **E** is the number of edges in the control flow graph,
- **N** is the number of nodes in the control flow graph,
- **P** is the number of connected components.

For a single connected component (i.e., \(P = 1\)), this formula simplifies to:

$$
M = E - N + 2
$$

---

## 1. JavaScript `calculate` Function

### Control Flow Graph Parameters

Based on our analysis of the JavaScript `calculate` function:
- **Edges (E):** 17
- **Nodes (N):** 13
- **Connected Components (P):** 1

### Cyclomatic Complexity Calculation

$$
M = 17 - 13 + 2 = 6
$$

Thus, the cyclomatic complexity of the JavaScript `calculate` function is **6**.

---

##  TypeScript `calculateTS` Function

### Control Flow Graph Parameters

Based on our analysis of the TypeScript `calculateTS` function:
- **Edges (E):** 8
- **Nodes (N):** 7
- **Connected Components (P):** 1

### Cyclomatic Complexity Calculation

$$
M = 8 - 7 + 2 = 3
$$

Thus, the cyclomatic complexity of the TypeScript `calculateTS` function is **3**.


## 3. Halstead Effort (E)

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
V = N × log₂(n) ≈ 56 × log₂(25)  
log₂(25) ≈ 4.64, → V ≈ 56 × 4.64 ≈ 260  

**Difficulty (D):**  
D = (n₁ / 2) × (N₂ / n₂) ≈ (13 / 2) × (25 / 12)  
≈ 6.5 × 2.083 ≈ 13.54  

**Effort (E):**  
E = V × D ≈ 260 × 13.54 ≈ 3523  

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
V = N × log₂(n) ≈ 29 × log₂(15)  
log₂(15) ≈ 3.91, → V ≈ 29 × 3.91 ≈ 113.3  

**Difficulty (D):**  
D = (n₁ / 2) × (N₂ / n₂) ≈ (7 / 2) × (18 / 8)  
≈ 3.5 × 2.25 ≈ 7.88  

**Effort (E):**  
E = V × D ≈ 113.3 × 7.88 ≈ 893  


## 3. Maintainability Index (MI)

The Maintainability Index is computed using the **formula:**

MI = max(0, (171 - 5.2 × ln(E) - 0.23 × CC - 16.2 × ln(LOC)) / 171) × 100

### Maintainability Index (MI) Calculation

#### JavaScript `calculate`:

**Values:**
- **CC:** 6
- **E:** ≈ 3523
- **LOC:** ≈ 12

**Intermediate Calculations:**
- ln(3523) ≈ 8.17, ln(12) ≈ 2.48  
- MI_raw = 171 - (5.2 × 8.17 + 0.23 × 6 + 16.2 × 2.48)  
- ≈ 171 - (42.48 + 1.38 + 40.26)  
- ≈ 171 - 84.12 ≈ 86.88  

**Final Calculation:**
- MI ≈ (86.88 / 171) × 100 ≈ 50.8  

---

#### TypeScript `calculateTS`:

**Values:**
- **CC:** 3
- **E:** ≈ 893
- **LOC:** ≈ 5

**Intermediate Calculations:**
- ln(893) ≈ 6.79, ln(5) ≈ 1.61  
- MI_raw = 171 - (5.2 × 6.79 + 0.23 × 3 + 16.2 × 1.61)  
- ≈ 171 - (35.31 + 0.69 + 26.08)  
- ≈ 171 - 62.08 ≈ 108.92  

**Final Calculation:**
- MI ≈ (108.92 / 171) × 100 ≈ 63.8  
