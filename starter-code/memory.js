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
    this.globalScore = 0;

    this._shuffleCard = function() {
      for (let i = this.cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
      console.log(this.cards);
      }
};

MemoryGame.prototype.selectCard = function(card) {
  console.log("carta recibida!",card);

  var longitud = this.selectedCards.length;
  var isEmpty = this.selectedCards.length == 0;

  this.selectedCards.push(card.split('/')[1]);

  if (!isEmpty){
    if (this.selectedCards[longitud-1] === this.selectedCards[longitud]
        || this.selectedCards[longitud-2] === this.selectedCards[longitud-1]){
        if (this.selectedCards[longitud]===this.selectedCards[longitud-1]){
          this.correctPairs++;
        }
        return true;
    } else if (!isEmpty) {
      this.selectedCards.pop();
      return false;
    }

  } else return true;

};

MemoryGame.prototype.finished = function() {
  this.globalScore = this.correctPairs / this.pairsClicked;
  if (this.correctPairs == 12) return true;
  else return false;

};




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

  startGame();

  $('.card').on('click', function(){

      var elemento = this;
      var cartaVuelta = elemento.getElementsByClassName('front')[0];
      cartaVuelta.classList.add("fliped");
      var nombreCarta = elemento.getElementsByClassName('back')[0].getAttribute("name");
      if (!memoryGame.selectCard(nombreCarta)){
        memoryGame.pairsClicked++;
        cartaVuelta.classList.remove("fliped");
      } else updateCount()

   });

   function updateCount(){
     $('#pairs_guessed').html(memoryGame.correctPairs);
     $('#pairs_clicked').html(memoryGame.pairsClicked);
     if (memoryGame.finished()) $('#global_score').html(memoryGame.globalScore);
   }

   function startGame(){
     var listaCartasPuestas;
     listaCartasPuestas = document.getElementsByClassName('front');

     for (var i = 0; i < listaCartasPuestas.length; i++) {
       listaCartasPuestas[i].classList.add('fliped');
     }

     setTimeout(function () {
       for (let item of listaCartasPuestas) {
           item.classList.remove('fliped');
       }
     }, 2000);

   }


});
