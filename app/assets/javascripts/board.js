function Board() {
  this.cards = [];
  this.displayedArray = [];
  this.currentPlayer = null;
  playerCount = 0;
  //value = 0;

  // var cards = [1, 1, 2, 2, 3, 3, 4, 4,];
  // var length = cards.length;
};

Board.prototype.shuffle = function(cards){ //v1.0
  var cards = [1, 1, 2, 2, 3, 3, 4, 4,];

    for(var j, x, i = cards.length; i; j = Math.floor(Math.random() * i),
      x = cards[--i], cards[i] = cards[j], cards[j] = x);
      this.cards = cards;


};

Board.prototype.displayCard = function() {
  // var numberscontainer = $(#birds-container);
  // this.cards.forEach(function(cardValue, index) {
  //   $('#' + index).text(cardValue);
  // });

if (!$(this).hasClass('clicked')){
  $(this).toggleClass('clicked')
  var id = $(this).attr('id');
  var value = board.cards[id];
  $(this).text(value);
  board.displayedArray.push(id);
  console.log(board.displayedArray);

//THIS WORKS BELOW
    if (board.displayedArray.length === 2) {
    board.checkMatch(board.displayedArray[0], board.displayedArray[1]);
     // forget all the numbers i have remembered

     board.displayedArray = [];
   }
 }
};

//console.log('The card at index ' + index + ' is ' + cardValue);
// Take the card's value
// Find the corresponding div on the page
// Replace the text inside this div to be the value of the card


Board.prototype.checkMatch = function(id1, id2) {
//Need a for loop i<3 to limit the number of cards displayed at one time?
//2 card values
//var card1 = $(this).attr('id'); |would it be better to have card1 and card2
//var card2 = $(this).attr('id'); |at top of page, available to all functions?
//compare the 2 card values
  // if card1 != card2
  // some sort of timeout function/ that will flip the cards backover? or
    //write a new function to have the cards flip back over.
  //if card1 === card2;
    // count ++

  // TIMEOUT CODE
  //  var timeout
  //  function timeoutFxn() {
  //    timeout = setTimeout(function() {displayCard}, 2500);
  //  }

  var value1 = board.cards[id1];
  var value2 = board.cards[id2];

  if (value1 != value2) {

    setTimeout(function() {
      $('#' + id1).toggleClass('clicked').text('Number');
      $('#' + id2).toggleClass('clicked').text('Number');
      //do some stuff here
    }, 1000);

  }

  if (value1 === value2) {
    playerCount++;
    console.log('PlayerCount: '+ playerCount);
  }


};







Board.prototype.startGame = function() {
  // $.get(cards);
  board.shuffle();
}
