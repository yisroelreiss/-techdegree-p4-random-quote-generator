/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/

const quotes = [
    { quote: 'When you have a dream, you’ve got to grab it and never let go.', source: 'Carol Burnett', citation: "University of Texas Rio" , year: "2021" },
    { quote: 'Nothing is impossible. The word itself says I’m possible!', source: 'Audrey Hepburn' },
    { quote: 'There is nothing impossible to they who will try.', source: 'Alexander the Great' },
    { quote: 'Life has got all those twists and turns. You’ve got to hold on tight and off you go', source: 'Nicole Kidman' },
    { quote: 'Keep your face always toward the sunshine, and shadows will fall behind you.', source: 'Walt Whitman' }
];


/***
 * `getRandomQuote` function
***/

const getRandomQuote = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

/***
 * `printQuote` function
***/

const printQuote = (arr) => {
  let randomQuote = getRandomQuote(arr);
  let html = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`
  if (randomQuote.citation) {
    html+= `<span class="citation"> ${randomQuote.citation}</span>`
  }  
  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year}</span>`;
  }
  html += `</p>`; 
  document.getElementById('quote-box').innerHTML = html; 
};

// console.log(printQuote(quotes));

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote(quotes), false);

