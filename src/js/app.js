import GoblinGame from './GoblinGame';

const game = new GoblinGame(
  document.getElementsByClassName('hole-board')[0],
  4,
);
game.init();
