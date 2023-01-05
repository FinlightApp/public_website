---
templateKey: blog-post
keywords: "NLP, RNN vs API: The battle of acronyms"
title: "NLP, RNN vs API : The battle of acronyms"
author: JB Tanqueray
date: 2020-06-30T09:53:41.645Z
description: Default description
image:
  src: /img/artificialIntelligence.jpg
  alt: Image description
---
It is a strange and disturbing fact that gathering formatted, structured data from a custodian or private bank is so tricky. One solution that seemed promising was banking APIs[1]. Still, after a few years, it appears that those are expensive (both in terms of integration, because no two APIs are the same and users generally need to pay licensing fees), and not always providing high quality information. Moreover, not all banks have APIs, leaving integration service providers looking for alternatives, or doing the work manually.

An alternative approach, gathering growing interest, is to use the basic documents provided to all investors: their PDF statements. Almost all of them are now available in “PDF text”[2] format, which saves the hassle of OCR[3], and those documents are structured enough for a human eye to read it. Now, how do we make this computer readable?

NLP and RNN

Two “AI labelled” techniques can help: NLP[4], which identifies synonyms (in the statement context, it is “quantity = nominal”, or “name = denomination”), and RNN[5], which helps manage the many small differences between two banks formats, and discards irrelevant information.

With adequate problem specification, proper training, and some double checks from financial databases, those tools extract all the useful information from a simple PDF bank statement.

How does a computer achieve that?

The very first thing to do when using NLP is to go through a word embedding process. This maps every word in the corpus used to train the NLP engine into a multi-dimensional mathematical space based on the frequency of proximity of words. Let us take an example: we process a bunch of emails, all of which end with statements such as “Have a good day” or “Have a great day”. Word embedding computes that “good” and “great” are often found in the same context of certain phrases. Hence, they have very close values in the mathematical space, which are interpreted as words that have very close meanings. This can be used to find an equivalence between two different wordings of the same concept.

Word embedding, enhanced with RNN can be used to “reproduce” the human eye’s job of slicing and dicing the various elements of a statement and putting each item in the right bucket. That’s where problem specification matters: a human is needed to specify the degrees of freedom the computer has to explore using a neural network. Typically, those degrees of freedom are:

· Columns width

· Number of lines per asset

· Coordinates of the relevant item (e.g. ISIN code is 2nd row, 1st column)


By varying the parameters across these degrees of freedom, the RNN measures the corresponding quality of output (number of valid ISIN codes, percentage of total portfolio value extracted…) and thus can determine the optimal set of parameters.

Although 100% accuracy is probably out of reach, the gain in terms of data integration can be huge. Data gathered in this way can be exported in several formats, or integrated into apps.

Drawbacks:

· The initial work is cumbersome

· It needs a lot of market data to train and control the quality (e.g. is the extracted ISIN code a valid one? Does the pricing of the asset seem realistic?)

Advantages:

· Wide coverage of banks: can reach 100% of banks producing PDF reports

· Cost-saving: the marginal cost of adding banks is very low

· Easy integration: due to the connection with other databases, enriching statements (with sector, currency exposure, underlying of derivatives or funds) is straightforward

· Flexibility: the reporting format is no longer subject to bank’s own format

In conclusion, NLP+RNN will let you get what banks seem to be reluctant to offer: an easy integration of your statements and operations, with a bonus of adding external data. This might be the right arm twister to reach a new level of interactivity and transparency in finance.

Further readings:

What Are Word Embeddings for Text?

Introduction to Word Embedding and Word2Vec

Understanding Recurrent Neural Networks in 6 Minutes

Open Banking APIs: What, Why, When, Who, Where

1. Application programming interface
2. PDF documents can be scanned documents (i.e. an image) or a computer generated document with computer readable text inside it.
3. Optical Character Recognition
4. Natural Language Processing
5. Recursive Neural Network