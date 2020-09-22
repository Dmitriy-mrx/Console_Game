const keypress = require('keypress');


// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.
class Key {
  constructor(game) {
    this.keyboard = {
      q: () => game.hero.moveRight(),
      w: () => game.hero.attack(),
      e: () => game.hero.moveLeft(),
      t: () => console.log('t'),
      y: () => console.log('y'),
    };
  }



  runInteractiveConsole() {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in this.keyboard) {
          this.keyboard[key.name]();
        }
        // Прерывание программы.
        if (key.ctrl && key.name === 'c') {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
}



module.exports = Key;
