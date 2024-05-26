---
title: "Recurrences"
date: "2024-05-26"
description: "An introduction to recurrence relations and their applications."
---

Recurrence relations are equations that define sequences of values using recursion and initial conditions. They are widely used in computer science, mathematics, and various other fields to describe the behavior of sequences and solve problems related to them.

## What is a Recurrence Relation?

A recurrence relation is a way of defining a sequence of numbers where each term is defined as a function of one or more of its preceding terms. In its simplest form, a recurrence relation for a sequence \( \{a_n\} \) is written as:

$$a_n = f(a_{n-1}, a_{n-2}, \ldots, a_{n-k})$$

where $$f$$ is a function that relates $$a_n$$ to previous terms $$a_{n-1}, a_{n-2}, \ldots, a_{n-k}$$.

## Examples of Recurrence Relations

### Fibonacci Sequence

One of the most famous examples of a recurrence relation is the Fibonacci sequence. The Fibonacci sequence is defined as follows:

$$
\begin{cases}
  F_0 = 0, \\
  F_1 = 1, \\
  F_n = F_{n-1} + F_{n-2} \quad \text{for } n \geq 2.
\end{cases}
$$

Each term in the Fibonacci sequence is the sum of the two preceding terms. This simple relation produces a sequence that grows exponentially.

### Factorial Sequence

Another example is the factorial sequence, which is defined by:

$$ 
\begin{cases}
  0! = 1, \\
  n! = n \cdot (n-1)! \quad \text{for } n \geq 1.
\end{cases}
$$

This recurrence relation describes the product of all positive integers up to $$n$$.

## Solving Recurrence Relations

There are several methods to solve recurrence relations, including:

### Iteration

Iteration involves repeatedly applying the recurrence relation to express the \( n \)-th term directly in terms of the initial conditions. For example, iterating the Fibonacci recurrence relation yields:

$$
F_n = F_{n-1} + F_{n-2} = (F_{n-2} + F_{n-3}) + F_{n-2} = \ldots 
$$

### Characteristic Equation

For linear homogeneous recurrence relations with constant coefficients, we can use the characteristic equation method. Consider the relation:

$$ a_n = c_1 a_{n-1} + c_2 a_{n-2} + \ldots + c_k a_{n-k} $$

We assume a solution of the form $$ a_n = r^n $$ and solve the characteristic equation:

$$ r^n = c_1 r^{n-1} + c_2 r^{n-2} + \ldots + c_k r^{n-k} $$

This equation simplifies to:

$$ r^k - c_1 r^{k-1} - c_2 r^{k-2} - \ldots - c_k = 0 $$

The roots of this polynomial give us the general solution to the recurrence relation.

### Example: Solving a Second-Order Linear Recurrence

Consider the relation:

$$ a_n = 3a_{n-1} - 2a_{n-2} $$

The characteristic equation is:

$$ r^2 - 3r + 2 = 0 $$

Factoring, we get:

$$ (r-1)(r-2) = 0 $$

So, the roots are $$ r = 1 $$ and $$ r = 2 $$. Thus, the general solution is:

$$ a_n = A \cdot 1^n + B \cdot 2^n = A + B \cdot 2^n $$

To determine $$ A $$ and $$ B $$, we use the initial conditions.

## Applications of Recurrence Relations

Recurrence relations are used in various fields:

- **Computer Science:** Algorithm analysis (e.g., the runtime of recursive algorithms)
- **Mathematics:** Combinatorics, number theory
- **Economics:** Modeling economic processes over time
- **Biology:** Population models

## Conclusion

Recurrence relations provide a powerful tool for defining and analyzing sequences. Understanding how to formulate and solve these relations is essential for tackling a wide range of problems in different disciplines.

---

*Note: This post includes LaTeX code for rendering mathematical expressions. If you are viewing this and the equations do not render correctly, please ensure that your browser supports LaTeX rendering or try viewing this post in a different environment.*