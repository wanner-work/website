---
image: /images/projects/cash.png
title: Cash
tagline: personal project
description: Platform to track and analyse your spendings. Built with Next.js and Supabase.
link: https://cash.wanner.work
published: 11.02.2025
tags:
  public:
    - personal
    - next.js
    - pwa
  hidden:
    - clavis
priority: true
---

## Why another expense tracker?

While traveling through Australia, I realized how important it is to keep track of your expenses. While there are many
apps available for this purpose, they are often way to complicated and have so many features that It get's overwhelming.

![admin bereich](../images/cash-1.png)

I wanted to create a simple and user-centric platform that allows us to easily track
and analyze our spending habits and define a budget for specific spending categories. **Nothing more, nothing less.**

![admin bereich](../images/cash-4.png)

## The Tech Stack

Based on Next.js with TailwindCSS and Supabase as the backend as a service, I created a progressive web app that can
be used on either mobile or as a plain web app through the browser.

![admin bereich](../images/cash-3.png)

## Core Features

1. Create a wallet (e.g. personal, household, etc.) and invite other users to it
2. Create categories per wallet and define a budget (either monthly or a yearly) per category
3. Create expenses and assign them to a category
4. Create recurring expenses (e.g. rent, subscriptions, etc.) which are automatically created every month or year
5. Visualize your expenses and see how much you have spent in each category and how much budget is left
6. (Experimental) Generate a report of your expenses with AI to get insights and tips on how to save money

![admin bereich](../images/cash-5.png)

## Learnings

While building this project, I learned that simplicity is key. I had to make sure that the app is easy to use and
understand, while still being powerful enough to meet the needs of the users. This is a delicate balance that requires
careful consideration and iteration which would not have been possible without direct user feedback (thanks to my wife).

Also, I learned that it is extremely important to be able to create an expense as quickly and easy as possible. As soon
as it takes more than 15 seconds to create an expense, the user will not do it anymore because it is too much effort.

![admin bereich](../images/cash-2.png)
