import ability from '../ability/abilityAbstract';
import character from '../character/characterAbstract';
import effect from '../effects/effectAbstract';

export class Logger {
  public logCast(caster: character, attack: ability): string {
    const str = `${caster.name} использует ${attack.name}`;
    console.log(str);
    return str;
  }
  public logAttack(caster: character, attack: ability, target: character): string {
    const str = `${caster.name} использует ${attack.name} на ${target.name}`;
    console.log(str);
    return str;
  }
  public logResult(target: character, damage: number): string {
    const str = `${target.name} получает ${damage} урона`;
    console.log(str);
    return str;
  }
  public logEffect(target: character, incomingEffect: effect): string {
    let str: string;
    if (incomingEffect !== undefined) {
      str = `${target.name} получает эффект ${incomingEffect.name} на ${incomingEffect.getDuration} хода(ов)`;
    } else {
      str = `${target.name} не получает эффектов`;
    }
    return str;
  }
  public logDead(curpse: character): string {
    const str: string = `${curpse.name} умер. Печально`;
    return str;
  }
  public logWinner(teamOne: character[], teamTwo: character[]): string {
    if (teamOne.length === 0 && teamTwo.length !== 0) {
      const str = 'Победила первая команда';
      console.log(str);
      return str;
    } else if (teamOne.length !== 0 && teamTwo.length === 0) {
      const str = 'Победила вторая команда';
      console.log(str);
      return str;
    } else if (teamOne.length === 0 && teamTwo.length === 0) {
      const str = 'Ничья';
      console.log(str);
      return str;
    }
  }
}
