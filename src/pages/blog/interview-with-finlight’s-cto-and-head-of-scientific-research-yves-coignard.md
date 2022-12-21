---
templateKey: blog-post
keywords: Interview with Finlight’s CTO and Head of Scientific Research, Yves Coignard
title: Interview with Finlight’s CTO and Head of Scientific Research, Yves Coignard
author: JB Tanqueray
date: 2022-12-21T14:48:11.432Z
description: Default description
image:
  src: /img/yvinterview.jpg
  alt: Image description
---
A few questions to our CTO and Head of Scientific Research, Yves Coignard

1) What is your background?

In a former life, I was working in asset management, with a strong background in statistics and a PhD in theory of decision making.

2) What did you learn?

As a quantitative engineer, I have become an expert in third-party risk management software. I have managed all sorts of structured or guaranteed funds. I have verified the veracity of Richard Michaud’s assertion “optimisers are risk maximisers”.

As a head of equity management, with a high quality financial analysis team next-door, I have seen how difficult it is to outperform the market, or even to know which of my portfolio managers were likely to outperform. I asked many questions and imposed reporting requirements to my portfolio managers, but even with this kind of “insider” information, it was hard to spot the best performers in my own team. Therefore, this has led me to believe that the capacity of external fund selectors to do efficient fund picking is limited.

As the founder of a volatility hedge fund boutique, I realised that it was possible to build powerful tools from scratch for this complex asset class. I also met a family office client that would become my partner at Finlight, as we exchanged buyer and seller views on investment best practice.

3) How does that reflect on Finlight’s approach?

From this exchange came the founding principles of Finlight:\
-Maximum loss is a key risk indicator for family offices\
-Asset mix explains more than 90% of the long term performance of a portfolio, and as such deserves all our attention\
-Disciplined dynamic changes of the asset mix according to market variations can dramatically improve the risk/return profile of a portfolio

4) Could you please tell us more?

We know that even very good risk and return estimates are flawed to some extent by estimation error, so we needed to adopt statistically robust methods to minimise the effect of those errors on the final result. For that we extended Black-Litterman’s approach, combining it with Choueifaty-Coignard’s Maximum Diversification and Vanna-Volga option pricing method. This led to the Dual Risk methodology, separating portfolio construction risk metric from portfolio volatility estimation.

Bearing in mind that the worst crises are caused by unforeseen events, and as such not reflected in past asset prices, we let naive diversification be a strong pillar of our systems.

We also expanded Constant Proportion Portfolio Insurance (CPPI) technique and blended it with Kelly criterion to achieve an efficient Dynamic Asset Allocation Strategy (DAAS).

We mixed parametric and historical Value-at-Risk measurement to obtain a reliable long-term estimate of maximum loss, free of parametric (esp. log-normal) assumptions.

5) Conclusion?

DRAASTIC© is the result of this construction. It can generate any number of portfolios (with varying risk/return levels and varying investment constraints) that are built according to our founding principles, without amplifying estimation error.

It is used to find the asset mix that is best fitted to a set of goals and constraints.

It also manages the dynamic changes in the asset mix necessary to protect a portion of the invested capital.