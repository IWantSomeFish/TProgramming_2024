import Character from '../../character/characterAbstract';

import MageWaepon from './mageWeapon';

class book extends MageWaepon {
  constructor(name: string, baseDamage: number, attackType: string) {
    super(name, baseDamage, attackType);
  }

  secialAbility(target: Character) {
    target.changeCharHP(5);
  }
}
export default book;
