// герой.

class Hero {
  constructor(position = 0, boomerang) {
    this.skin = '🤬'; 
    this.position = position;
    this.newSkin = '💀';
    this.boomerang = boomerang
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly(true);
  }

  new() {
    this.newSkin = '💀';

  }

  die() {
    this.new()
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
