import { Game } from './sagaSrc/gameClass/game';

const randGame: Game = new Game();
randGame.initTeams(4);
randGame.shuffleOrder();
for (let i = 0; i < randGame.teamOne.length; i++) {
  console.log(randGame.teamOne[i].name);
  console.log(randGame.teamTwo[i].name);
}
for (let i = 0; i < randGame.turnOrder.length; i++) {
  console.log(randGame.turnOrder[i].name);
}
const result = randGame.newTurn();
console.log(result[0].chooseAttack());
const testGame = new Game();
testGame.gameInit();
