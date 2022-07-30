const QuoteBank = [
   {
      quote: "That which dosent kill us makes us stronger",
      author: "Friedrich Nietzsche"
   }, {
     quote: "When the going gets tough, the tough get going.",
     author: "Joe Kennedy" 
   }, {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
   }
];


window.onload = init;
            function init() {
               generateQuote()
            
            }
            
function generateQuote() {
               let quoteSize = QuoteBank.length;
               let randomIndex = Math.floor(Math.random() * quoteSize);
               let randomQuoteData = QuoteBank[randomIndex];
               let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22How%20wonderful%20it%20is%20that%20nobody%20need%20wait%20a%20single%20moment%20before%20starting%20to%20improve%20the%20world.%22%20Anne%20Frank";


               document.getElementById("tweet-quote").href = twitterLink;
                document.getElementById("text").innerText = randomQuoteData.quote;
               document.getElementById("author").innerText = randomQuoteData.author;
}            
console.log(QuoteBank)
