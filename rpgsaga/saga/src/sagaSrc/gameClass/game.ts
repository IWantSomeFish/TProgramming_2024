import character from '../character/characterAbstract';
import classEnum from '../enums/classesEnum';
import characterFabric from '../fabric/characterFabric';
import abilityTarget from '../enums/abilityTarget';
import ability from '../ability/abilityAbstract';
import effect from '../effects/effectAbstract';

import { Logger } from './logger';
import { readAnswer } from './inputFuncs';

export class Game {
  protected _teamOne: character[] = [];
  protected _teamTwo: character[] = [];
  protected _turnOrder: character[] = [];
  protected _turnTeamOrder: number[] = [];
  readonly classArr: classEnum[] = [classEnum.knight, classEnum.mage, classEnum.archer];
  private charFabric: characterFabric = new characterFabric();
  private gameLogger: Logger = new Logger();

  public async gameInit() {
    const mode: number = await this.askForGameMode();
    await this.chooseGamemode(mode);
    this.shuffleOrder();
    while (this._teamOne.length !== 0 || this._teamTwo.length !== 0) {
      const currentTurn = this.newTurn();
      currentTurn[0].reduceEffectDuration();
      currentTurn[0].deleteEndedEffect();
      const currAttack: ability = currentTurn[0].chooseAttack();
      this.gameLogger.logCast(currentTurn[0], currAttack);
      const target: character[] = this.chooseTarget(currentTurn, currAttack);
      for (let i = 0; i < target.length; i++) {
        const result: [number, effect] = target[i].takeAttack(currAttack);
        this.gameLogger.logAttack(currentTurn[0], currAttack, target[i]);
        this.gameLogger.logResult(target[i], result[0]);
        this.gameLogger.logEffect(target[i], result[1]);
      }
      const deadmanList: character[] = this.checkDead();
      for (let i = 0; i < deadmanList.length; i++) {
        this.gameLogger.logDead(deadmanList[i]);
      }
    }
    this.gameLogger.logWinner(this._teamOne, this._teamTwo);
  }
  newTurn(): [character, number] {
    const turnChar = this._turnOrder[0];
    const turnTeam = this._turnTeamOrder[0];
    this._turnOrder.splice(0, 1);
    this._turnOrder.push(turnChar);
    this._turnTeamOrder.splice(0, 1);
    this._turnTeamOrder.push(turnTeam);
    return [turnChar, turnTeam];
  }
  chooseTarget(char: [character, number], attack: ability): character[] {
    const target: character[] = [];
    switch (attack.abilityTarget) {
      case abilityTarget.onSelf:
        target.push(char[0]);
        break;
      case abilityTarget.oneAllay:
        if (char[1] === 1) {
          target.push(this._teamOne[this.createRandomNuber(0, this._teamOne.length - 1)]);
        } else {
          target.push(this._teamTwo[this.createRandomNuber(0, this._teamTwo.length - 1)]);
        }
        break;
      case abilityTarget.oneEnemy:
        if (char[1] === 1) {
          target.push(this._teamTwo[this.createRandomNuber(0, this._teamTwo.length - 1)]);
        } else {
          target.push(this._teamOne[this.createRandomNuber(0, this._teamOne.length - 1)]);
        }
        break;
      case abilityTarget.allAllay:
        if (char[1] === 1) {
          for (let i = 0; i < this._teamOne.length; i++) {
            target.push(this._teamOne[i]);
          }
        } else {
          for (let i = 0; i < this._teamTwo.length; i++) {
            target.push(this._teamTwo[i]);
          }
        }
        break;
      case abilityTarget.allEnemy:
        if (char[1] === 2) {
          for (let i = 0; i < this._teamOne.length; i++) {
            target.push(this._teamOne[i]);
          }
        } else {
          for (let i = 0; i < this._teamTwo.length; i++) {
            target.push(this._teamTwo[i]);
          }
        }
        break;
    }
    return target;
  }
  initDuel(charClass: classEnum) {
    const playerChar = this.charFabric.createCharacter(charClass);
    this._teamOne.push(playerChar);
    this._teamTwo.push(this.charFabric.createCharacter(this.classArr[this.createRandomNuber(0, 2)]));
  }
  initTeams(teamSize: number) {
    for (let i = 0; i < teamSize; i++) {
      this._teamOne.push(this.charFabric.createCharacter(this.classArr[this.createRandomNuber(0, 2)]));
      this._teamTwo.push(this.charFabric.createCharacter(this.classArr[this.createRandomNuber(0, 2)]));
    }
  }
  async chooseGamemode(value: number): Promise<void> {
    let charClass: classEnum;
    let teamSize: number;
    switch (value) {
      case 1:
        console.log('Выбраны дуэли\n');
        charClass = await this.askForClass();
        this.initDuel(charClass);
        break;
      case 2:
        console.log('Выбран командный режим\n');
        teamSize = await this.askForTeamSize();
        this.initTeams(teamSize);
        break;
    }
  }
  private async askForGameMode(): Promise<number> {
    const gameMode: string = await readAnswer('Выберите игровой режим: \n 1. Дуэль \n 2. Команда на команду\n');
    const number: number = parseInt(gameMode);
    if (isNaN(number) || number < 1 || number > 2) {
      console.log('Некорректный ввод, попробуйте снова\n');
      await this.askForGameMode();
    } else {
      return number;
    }
  }
  private async askForTeamSize(): Promise<number> {
    const teamSize: string = await readAnswer('Введите размер команд (он будет равный для обеих)\n');
    const number: number = parseInt(teamSize);
    if (isNaN(number)) {
      console.log('Некорректный ввод, попробуйте снова\n');
      await this.askForTeamSize();
    } else {
      return number;
    }
  }
  private async askForClass(): Promise<classEnum> {
    const charClass: string = await readAnswer('Выберите класс \n 1. Рыцарь \n 2. Маг \n 3. Стрелок\n');
    const number: number = parseInt(charClass);
    if (isNaN(number) || number < 1 || number > 3) {
      console.log('Некорректный ввод, попробуйте снова\n');
      await this.askForClass();
    } else {
      switch (number) {
        case 1:
          return classEnum.knight;
        case 2:
          return classEnum.mage;
        case 3:
          return classEnum.archer;
      }
    }
  }
  shuffleOrder() {
    const array: character[] = [];
    const teamArray: number[] = [];
    for (let i = 0; i < this._teamOne.length; i++) {
      array.push(this._teamOne[i]);
      teamArray.push(1);
    }
    for (let j = 0; j < this._teamTwo.length; j++) {
      array.push(this._teamTwo[j]);
      teamArray.push(2);
    }
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [teamArray[currentIndex], teamArray[randomIndex]] = [teamArray[randomIndex], teamArray[currentIndex]];
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    this._turnTeamOrder = teamArray;
    this._turnOrder = array;
  }
  checkDead(): character[] {
    const deadArr: character[] = [];
    for (let i = 0; i < this._teamOne.length; i++) {
      if (this._teamOne[i].characterHP === 0 || this._teamOne[i].characterHP < 0) {
        this._teamOne.splice(i, 1);
      }
    }
    for (let i = 0; i < this._teamTwo.length; i++) {
      if (this._teamTwo[i].characterHP === 0 || this._teamTwo[i].characterHP < 0) {
        this._teamTwo.splice(i, 1);
      }
    }
    for (let i = 0; i < this._turnOrder.length; i++) {
      if (this._turnOrder[i].characterHP === 0 || this._turnOrder[i].characterHP < 0) {
        deadArr.push(this._turnOrder[i]);
        this._turnOrder.splice(i, 1);
        this._turnTeamOrder.splice(i, 1);
      }
    }
    return deadArr;
  }
  private createRandomNuber(min: number, max: number): number {
    const randomNumber = Math.random() * (max - min) + min;
    return Number(randomNumber.toFixed(0));
  }
  get teamOne(): character[] {
    return this._teamOne;
  }
  get teamTwo(): character[] {
    return this._teamTwo;
  }
  get turnOrder(): character[] {
    return this._turnOrder;
  }
  get turnTeamOrder(): number[] {
    return this._turnTeamOrder;
  }
}
