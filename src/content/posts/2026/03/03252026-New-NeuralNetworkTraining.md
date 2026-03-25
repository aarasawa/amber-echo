---
title: Neural Network Training
published: 2026-03-25
description: 'Choosing activation functions and multiclass classification'
image: ''
tags: ['Coursera', 'ML', 'Neural Networks']
category: 'Machine Learning'
draft: false 
lang: 'en'
---

# Activation Functions
The bulk of what makes layering in neural networks capable are the activation functions used for computing a result. The ones introduced have been linear and sigmoid. For this, the rectified linear unit is introduced for handling cases were `y >= 0`. 

## Choosing an Activation Function
Depending on the needs of `y`, you can pick an activation function:
| Expression | Use Case  | Regression Type |
| - | :- | -: |
| y = 0 OR y = 1 | Binary Classification | Sigmoid |
| y = + OR y = - | Value Prediction | Linear |
| y = 0 AND y > 0 | Positive Value Prediction | Rectified Linear |