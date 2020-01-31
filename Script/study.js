var cardArray = document.getElementsByClassName("flip-card-container");
var sizeArray = document.getElementsByClassName("flip-card-box");
var numCards = cardArray.length;

for (curr = 0; curr < numCards; curr++)
{
  cardArray[curr].style.width = sizeArray[curr].offsetWidth + "px";
}
