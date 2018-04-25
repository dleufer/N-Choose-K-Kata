# [Kata: n-choose-k calculator](https://www.codewars.com/kata/quick-n-choose-k-calculator)

This kata asks us to create a function that calculates **binomial functions**.

For example, if I have 52 cards, and I want to choose 5 of them, the function should tell me how many different ways I can choose 5 cards from the deck of 52 (in this case, the answer is 2,598,960).

This is also called **n choose k**: given a set of **n** items, how many ways can I choose **k** items.

n_choose_k: Function
* Args: 2
  * n: Number -> the total number of items in the main group.
  * k: Number -> the size of the group we want to extract from the main group.
* Return: Number
  * This function outputs the number of ways that I can choose k-size groups from this set of n items.
* Behavior: Given a group of n items, this function calculates how many ways I can choose a group of k items from the main group.

'''js
// copy of your polished solution for easy reference.
'''


### Index
* [Input Analysis](#input-analysis)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)
* [Resource Estimation](#resource-estimation)
* [Scaffolding](#scaffolding)
* [Language Features](#language-features)
* [Bugs & Challenges](#bugs-challenges)
* [Use Cases](#use-cases)
* [Learning Journal](#learning-journal)

---

## Input Analysis

* What is k's symmetrical number?
  * n = 3 -> (1,2), (0, 3)
  * n = 4 -> (0,4), (1,3), (2)
  * we could convert larger partners to smaller partners to make it work more efficiently.
* is n even or odd?
* are n and k >= or equal to 0?
* is n > k?
* are they whole numbers?


What groupings will you have to consider when building your solution?  
* 0 =< k =< n
  * This is the "all good" scenario
* n and/or k are less than 0
* k is greater than n
* n is even or odd

How did you use this information to select your test cases?


[TOP](#index)

___

## Solution Explanation

Explain your solution in detail, however works for you.  Perhaps by using a specific input to illustrate, by describing your strategy, or by including a diagram [directly from Sketchboard.io](https://sketchboard.io/blog/2014/03/06/github-sketchboard.html).

[TOP](#index)

---

## Constraints

What constraints did you place on yourself, and why?  Did they end up being helpful or not?

[TOP](#index)

___


## Resource Estimation

Estimate how what resources you will require, and how much of each.  


[TOP](#index)

___

## Scaffolding

Provide a link to Gist you used to construct your solution's scaffolding.  What difficulties did you have making it?  How helpful was it in coming up with your finished solution?

[TOP](#index)

___


## Language Features

List the language features used in your solution.

The focus of these exercises are to strengthen you problem solving skills, not to learn the newest ES6 tricks. When you have the choice between to different language features it is better to choose the option that is easiest to read, most common, or most consistent with the rest of your solution.  

Keeping track of the language features you use will enable you separate the problem solving strategy from the implementation.  Being aware of this difference will be an asset later on when you're faced with larger applications and popular frameworks.

[TOP](#index)

---

## Challenges & Bugs

What particular challenges & bugs did you come across when you were filling in your scaffolding?

Were they logic bugs? Language bugs?

Did you have trouble keeping track of which part of the challenge you were solving?

[TOP](#index)

___

## Use Cases

List 5+ use cases for your solution.  They can be stand-alone, part of an application, or impractical.  Your use cases can be overly complicated, or very basic. What's important is that you come up with as many and as diverse use cases as possible.


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem:


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
