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
|**Lines of Code (LOC)** |               12       |    5                      |
| **Cyclomatic Complexity (CC)** | 6                    | 3                       |
| **Halstead Effort (E)**        | ~6806.04              | ~4223.71                  |
| **Maintainability Index (MI)**  | ~99.02                | ~115.91                 |


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
| **Metric**               | **Calculation**                      | **Result**       |
|--------------------------|--------------------------------------|------------------|
| **Unique Operators (n₁)**   | Unique operators in code             | 15               |
| **Total Operators (N₁)**   | Count of all operator occurrences    | 52               |
| **Unique Operands (n₂)**    | Unique operands in code              | 8                |
| **Total Operands (N₂)**     | Count of all operand occurrences     | 22              |
| **Vocabulary (n)**       | n₁ + n₂ = 15 + 8                   | 22               |
| **Program Length (N)**   | N₁ + N₂ = 52 + 22                    | 74               |
| **Volume (V)**           | 74 × log₂(22)                        | ~329.99 bits     |
| **Difficulty (D)**       | (15/2) × (22/8)                     | ~20.625          |
| **Effort (E)**           | 20.625 × 329.99                       | ~6806.04375            |


---

### TypeScript `calculateTS`:

| Metric               | Calculation                                      | Value        |
|----------------------|--------------------------------------------------|-------------|
| **Total Operators (N₁)**   | Count of all operator occurrences            | ≈ 35        |
| **Total Operands (N₂)**    | Count of all operand occurrences             | ≈ 17        |
| **Total Tokens (N)**       | N = N₁ + N₂                                  | 52          |
| **Distinct Operators (n₁)** | Unique operators in code                     | ≈ 15        |
| **Distinct Operands (n₂)**  | Unique operands in code                      | ≈ 7         |
| **Vocabulary (n = n₁ + n₂)** | Sum of distinct operators & operands        | 22         |
| **Volume (V)**             | V = N × log₂(n) = 52 × log₂(22)               | ≈ 231.890   |
| **Difficulty (D)**         | D = (n₁ / 2) × (N₂ / n₂) = (15/2) × (17/7)   | ≈ 18.2142   |
| **Effort (E)**             | E = V × D = 231.890 × 18.21                   | ≈ 4223.7107 |



## 3. Maintainability Index (MI)

The Maintainability Index is computed using the **formula:**

MI = max(0, (171 - 5.2 × ln(E) - 0.23 × CC - 16.2 × ln(LOC)) / 171) × 100

### Maintainability Index (MI) Calculation

#### JavaScript `calculate`:

**Values:**
- **CC:** 6
- **E:** ≈ 329.99
- **LOC:** ≈ 12

MI = $171 - 5.2 \cdot \ln(329.99) - 0.23 \cdot (6) - 16.2 \cdot \ln(12)$ ≈  99.209


---

#### TypeScript `calculateTS`:

**Values:**
- **CC:** 3
- **E:** ≈ 231.890
- **LOC:** ≈ 5

MI = $171 - 5.2 \cdot \ln(231.890) - 0.23 \cdot (3) - 16.2 \cdot \ln(5)$ ≈  115.91

