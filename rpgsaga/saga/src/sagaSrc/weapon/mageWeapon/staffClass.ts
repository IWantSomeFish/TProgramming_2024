import character from '../../character/characterAbstract';

import mageWeapon from './mageWeapon';

class Staff extends mageWeapon {
  constructor(name: string, baseDamage: number, attackType: string) {
    super(name, baseDamage, attackType);
  }

  specialAbility(target: character) {
    target.takeDamage((this._currentDamage + 20), this._attackType);
  }
}
export default Staff;
