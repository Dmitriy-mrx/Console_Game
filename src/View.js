

class View {
  render(track, counter) {
    // Тут всё рисуем.
    console.clear();
    console.log('Kill 10 enemy');
    console.log(track.join(' '));
    console.log('\n\n');
    console.log(`Score: "${counter}" `);

  }
}

module.exports = View;
