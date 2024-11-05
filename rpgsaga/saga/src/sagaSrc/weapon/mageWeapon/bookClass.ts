import Character from '../../character/characterAbstract';

import MageWaepon from './mageWeapon';

class book extends MageWaepon {
  specialAbility(target: Character) {
    target.changeCharHP(5);
  }
  constructor(name: string, baseDamage: number, attackType: string) {
    super(name, baseDamage, attackType);
  }

}
export default book;
