//******************************************************************
// Game Logic
//******************************************************************
var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;

    this._shuffleCard = function() {

      for (let i = this.cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
      console.log(this.cards);
      }
};


//MemoryGame.prototype._shuffleCard = function() {};

MemoryGame.prototype.selectCard = function(card) {};

MemoryGame.prototype.finished = function() {};




//******************************************************************
// HTML/CSS Interactions
//******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  console.log(memoryGame.cards);
  memoryGame._shuffleCard();


  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;


  $('.card').on('click', function(){

    var elemento = this;
    console.log(elemento);
    var idBuscada = elemento.getElementsByClassName('front')[0];
    idBuscada.classList.add("fliped");
    console.log(idBuscada);


   });


});




//    Mi original intento esto de abajo creo que no servirá
$(document).ready(function(){

console.log("enganchado");


var a = 0;

console.log(a);


var acuamanCard ={
    number: 1,
    name: 'acuaman',
    image: './img/acuaman.jpg',
};

var batmanCard = {
  number: 2,
  name: 'batman',
  image: './img/batman.jpg',
};

var captainAmericaCard = {
  number: 3,
  name: 'captain-america',
  image: './img/captain-america.jpg',
};

var fantasticFourCard ={
  number:4,
  name: 'fantastic-four',
  image: './img/fantastic-four.jpg',
};

var flashCard ={
  number:5,
  name: 'flash',
  image: './img/flash.jpg'
};

var greenArrowCard ={
  number:6,
  name: 'green-arrow',
  image: './img/green-arrow.jpg'
};

var greenLanternCard={
  number:7,
  name: 'green-lantern',
  image: './img/green-lantern.jpg'
};

var ironmanCard ={
  number:8,
  name: 'ironman',
  image: './img/ironman.jpg'
};

var spidermanCard ={
  number:9,
  name: 'spiderman',
  image: './img/spiderman.jpg'
};

var supermanCard ={
  number:10,
  name: 'superman',
  image: './img/superman.jpg'
};

var theAvengersCard ={
  number:11,
  name: 'the-avengers',
  image: './img/the-avengers.jpg'
};

var thorCard ={
  number:12,
  name: 'thor',
  image: 'thor.jpg'
};

//var arrayCartas=[acuamanCard,batmanCard,captainAmericaCard,
//    fantasticFourCard,flashCard,greenArrowCard,greenLanternCard,
//    ironmanCard,spidermanCard,supermanCard,theAavengersCard,thorCard];


});
