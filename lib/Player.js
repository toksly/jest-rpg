const Potion = require('../lib/Potion');
function Player(name = 'Dave') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
  }
  
  module.exports = Player;