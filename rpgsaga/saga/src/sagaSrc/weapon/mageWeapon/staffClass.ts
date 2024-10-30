import character from '../../character/characterAbstract';

import mageWeapon from './mageWeapon';

class Staff extends mageWeapon {
  constructor(name: string, baseDamage: number, attackType: string) {
    super(name, baseDamage, attackType);
  }

  magicMissile(target: character) {
    target.takeDamage((this.currentDamage + 20), this.attackType);
  }
}
export default Staff;
