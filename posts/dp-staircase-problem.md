---
title: "Dynamic Programming: Solving the Staircase Problem"
date: "2024-05-30"
---

# Introduction

In this blog post, we'll explore the dynamic programming approach to solving the classic "staircase problem" using Python. The staircase problem involves finding the number of distinct ways to climb a staircase of `n` steps, with the possibility of taking 1 or 2 steps at a time.

## Problem Statement

Given a staircase with `n` steps, find the number of distinct ways to climb it, where at each step you can either take 1 or 2 steps.

## Overlapping Subproblems
1. Suppose we want to find the number of distinct ways to climb a staircase of n steps. 
2. If we consider the last step taken, it can either be a single step from n-1 or a double step from n-2. 
3. Therefore, the number of ways to climb n steps is the sum of the number of ways to climb n-1 steps and n-2 steps.
4. This property allows us to break down the problem into smaller subproblems (climbing n-1 and n-2 steps) and combine their solutions to find the solution to the original problem (climbing n steps).

## Optimal Substructure
1. Suppose, for the sake of contradiction, that $$T'(n)$$ is not an optimal solution to $$T(n)$$.
2. Let $$T'(n)$$ be a solution to $$T(n)$$ that is not optimal, meaning there exists another solution $$T''(n)$$ that is better than $$T'(n)$$.
3. Consider a staircase with n steps. By assumption, $$T'(n)$$ is not an optimal solution, so there exists another solution $$T''(n)$$ that is better than $$T'(n)$$.
4. Analyzing the last step of $$T''(n)$$. There are two cases:
- Case 1: The last step of $$T''(n)$$ is a single step. In this case, we can remove this step to get a solution for $$T(n-1)$$. Call this solution $$T''(n-1)$$.
- Case 2: The last step of $$T''(n)$$ is a double step. In this case, we can remove these two steps to get a solution for $$T(n-2)$$. Call this solution $$T''(n-2)$$.
5. By the induction hypothesis, $$T'(n-1)$$ and $$T'(n-2)$$ are optimal solutions for $$T(n-1)$$ and $$T(n-2)$$, respectively.
6. Now, we can construct a new solution for $$T(n)$$ by combining the optimal solutions for $$T(n-1)$$ and $$T(n-2)$$: $$T'(n) = T'(n-1) + T'(n-2)$$
7. By construction, $$T'(n)$$ is at least as good as $$T''(n)$$, since we've combined optimal solutions for the subproblems. This contradicts our assumption that $$T''(n)$$ is better than $$T'(n)$$.
8. Therefore, our assumption that $$T'(n)$$ is not an optimal solution to $$T(n)$$ must be false, and we conclude that T(n) has an optimal substructure.

## Recurrence Formula
The recurrence formula for the staircase problem is given by:

$$
  dp[i] = \begin{cases}
  1 \quad \text{for } 0 \leq i < 2, \\
  dp[i − 1] + dp[i − 2] \quad \text{for } i \geq 2
\end{cases}
$$

## Dynamic Programming Approach

Dynamic programming is a technique used to solve problems by breaking them down into simpler subproblems and solving each subproblem only once. We'll use dynamic programming to efficiently solve the staircase problem by building up solutions to smaller subproblems.

Let's define a function `count_ways(n)` that takes the number of steps `n` as input and returns the number of distinct ways to climb the staircase.

We use an array of size $$n + 1$$ to store the number of ways required for each step.


```python
def count_ways(n):
    # Base cases
    if n == 0:
        return 1
    elif n < 0:
        return 0
    
    # Initialize an array to store solutions to subproblems
    dp = [0] * (n + 1)
    
    # Base cases
    dp[0] = 1
    dp[1] = 1
    
    # Build up solutions to larger subproblems
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    # Return the solution to the original problem
    return dp[n]

# Example usage
n = 5
print(f"Number of distinct ways to climb {n} steps: {count_ways(n)}")
