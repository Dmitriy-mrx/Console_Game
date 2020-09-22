// Бумеранг является оружием.


class Boomerang {
  constructor() {
    this.skin = '🤜';
    this.position = 0;
  }

  fly(flag) {
    if (flag) {
      this.moveRight();
    } else {
      this.moveLeft();
    }
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 5;
  }
}

module.exports = Boomerang;
