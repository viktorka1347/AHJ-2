export default class GoblinGame {
  constructor(board, size) {
    this.board = board;
    this.size = size;
    this.activeIndex = -1;
  }

  init() {
    let html = '';
    for (let i = 0; i < this.size ** 2; i++) {
      html += '<div class="hole"></div>';
    }
    this.board.innerHTML = html;
    this.holes = this.board.querySelectorAll('.hole');

    this.goblin = document.createElement('img');
    this.goblin.src = 'img/goblin.png';
    this.goblin.className = 'goblin';

    this.moveGoblin();
    setInterval(() => this.moveGoblin(), 1000);
  }

  moveGoblin() {
    const oldIndex = this.activeIndex;
    do {
      this.activeIndex = Math.trunc(Math.random() * this.size ** 2);
    } while (this.activeIndex === oldIndex);

    this.holes[this.activeIndex].appendChild(this.goblin);
  }
}
