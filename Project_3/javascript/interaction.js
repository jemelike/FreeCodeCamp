$("document").ready(
    $("button.btnReg").hover(function() {
        $(this).css("color", "#4894D7");
        $(this).css("background-color", "white");
        $(this).css("border-radius", "15px");
        $(this).css("border", "20px solid white");
        $(this).css("height", "50px");
        $(this).css("width", "150px");
    })
);
var text = "";
var urlTweet = "https://twitter.com/intent/tweet?" + text + "&via=twitterdev";

var quotes = [{
    "quote": "Say what~~~~~~",
    "author": "Jo Em"
}]

function getQuoteInfo() {
    var index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

function addToQuotes(quote, author) {
    quotes.push([quote, author]);
}

function placeQuote() {
    quoteInfo = getQuoteInfo();

    text = quoteInfo["quote"] + quoteInfo["author"];

    $("#quote_author").append("text: " + text + "");
    $("#quote").remove("");
    $("#quote_author").append("<p id=\"quote\">\"" + quoteInfo.quote + "\"</p>");
    $("#author").remove("");
    $("#quote_author").remove("#author").append("<p id=\"author\">" + quoteInfo.author + "</p>");
}

console.log(text);

function setTweet() {}