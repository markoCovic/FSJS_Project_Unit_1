/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: '“Well, maybe I don’t need your money. Wait, wait, I said maybe!”', 
    source: 'Rachel Green',
    year: '1994'
  },
  {
    quote: '“Joey doesn’t share food!”', 
    source: 'Joey Tribbiani',
    year: '1995'
  },
  {
    quote: '“Hi, I’m Chandler. I make jokes when I’m uncomfortable.”', 
    source: 'Chandler Bing',
    year: '1996'
  },
  {
    quote: '“I wish I could, but I don’t want to.”', 
    source: 'Phoebe Buffay',
    year: '1997'
  },
  {
    quote: '“You go down there, and you suck up to him. I mean, you suck like you’ve never sucked before.“', 
    source: 'Monica Galler',
    year: '1998'
  },
  {
    quote: '“It tastes like feet!”', 
    source: 'Ross Galler',
    year: '1999'
  },
  {
    quote: '“How you doin’?”', 
    source: 'Joey Tribbiani',
    year: '2000'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes) {
  const randomQuote = Math.floor( Math.random() * 7);
  console.log(randomQuote);
  return randomQuote;
  };
  

/***  
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);