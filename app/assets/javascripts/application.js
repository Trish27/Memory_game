// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var board = new Board();
board.shuffle();

$(function() {
  console.log('Load');
  fetchBirds();
  //makeBoard();

  $('.card').on('click', board.displayCard)

});

function fetchBirds() {

    $.get('/birds')
      .done(function(data) {
      data.forEach(renderBird)

    });
}

// var makeBoard = function() {
//   for(var row = 0; row < 2; row++) {
//     var rowDiv = $('<div class="row">').appendTo($('body'))
//     for(var col = 0; col < 4; col++) {
//       $('<div class="cell">').attr('id', row * 3 + col).appendTo(rowDiv);
//     }
//   }
//   $('<div id="hud">').appendTo($('body'));
// };



 function renderBird(data) {
   var birdContainer = $('#birds-container');
   var card = $('<div>').addClass('card');
   var name = $('<h5>').appendTo($('<div>')).addClass('name');
   var image = $('<img>').appendTo($('<div>').addClass('image'));

   name.text(data.name);
   image.attr('src', data.image_url);


  card.attr('id', data.id)
    .append(name)
    .append(image)
    .appendTo(birdContainer);

}
