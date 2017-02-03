# <Demo>    

Check out the DEMO of [summarize.world](http://summarize.world)

# Summarizing text

This module provides an API for making summary of text.

The solution is based on the [https://en.wikipedia.org/wiki/PageRank](PageRank Algorithm).

## Example

We get a description from Wikipedia about umbrellas (https://en.wikipedia.org/wiki/Umbrella) 

The regular resume of this text would be:

*Umbrellas and parasols are primarily hand-held portable devices sized for personal use. The word "umbrella" typically refers to a device used for protection from rain. Umbrella canopies may be made of fabric or flexible plastic.*

A resume based on asked question, for example "What is the price of umbrella?" is:

*Umbrella canopies may be made of fabric or flexible plastic. Umbrellas are available in a range of price and quality points, ranging from inexpensive, modest quality models sold at discount stores to expensive, finely made, designer-labeled models. Another distinction can be made between manually operated umbrellas and spring-loaded automatic umbrellas which spring open at the press of a button.*

The API allows the end user to select how many sentences to be displayed. In the exmaple above we selected 3.

##Installation
```
npm install text-summary
```
##Usage
```
var summarize = require ("text-summary");

var text ="Put some text here.";
var numberSentences = 2;
var question = "What is the price of an umbrella?";

var summary = summarize.summary(text, numberSentences);

var summaryWithQuestion = summarize.summaryWithQuestion(question, text, numberSentences);

console.log(summary);

```


# License

MIT
