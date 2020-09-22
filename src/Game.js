
const Key = require('./keyboard.js')
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.


class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero(0, this.boomerang); 
    this.enemy = new Enemy();
    this.view = new View(this);
    this.track = [];
    this.flag = false;
    this.key = new Key(this);
    this.regenerateTrack();
    this.counter = 0;

  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin
    this.track[this.boomerang.position] = this.boomerang.skin

    this.enemy.moveLeft()
    this.boomerang.fly(this.flag)

  }

  check() {
    if (this.hero.position >= this.enemy.position) {

      this.hero.die()
    }
    if (this.boomerang.position >= this.enemy.position) {

      this.enemy.die()
      this.enemy.generateSkin()
      this.counter++
    }
    if (this.boomerang.position <= this.hero.position) {
      this.boomerang.position = this.hero.position + 1
      this.flag = false
    }
    if (this.counter >= 11) {
      console.log('you win!');
      process.exit()
    }


  }

  play() {
    this.key.runInteractiveConsole()
    setInterval(() => {
      // Let's play!

      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.counter);
    }, 100);
  }
}

module.exports = Game;
