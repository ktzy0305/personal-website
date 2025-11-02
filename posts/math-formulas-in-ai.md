---
title: "Mathematical Formulas in Machine Learning"
date: "2025-11-01"
description: "Documenting the mathematical formulas in Machine Learning"
---

## Activation Functions

$$
\text{Sigmoid(x)} = \frac{e^x}{e^x + 1} = \frac{1}{1 + e^{-x}}
$$

$$
\text{Tanh(x)} = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

$$
\text{ReLU(x)} = \text{max}(0, x)
$$

## Loss Functions

### 1. Mean Absolute Error
$$
\text{MAE} = \frac{1}{n} \sum_{i = 1}^{n} \vert y_i - \hat{y_{i}} \vert
$$

### 2. Mean Squared Error
$$
\text{MSE} = \frac{1}{n} \sum_{i = 1}^{n} (y_i - \hat{y_{i}})^{2}
$$


### 3. KL Divergence

Measures the distance between two distributions $P(x)$ and $Q(x)$.

$$
D_{\text{KL}}(P \Vert Q) = \sum_{x} P(x) \cdot \log{(\frac{P(x)}{Q(x)})}
$$