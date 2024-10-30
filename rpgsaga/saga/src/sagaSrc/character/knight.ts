import armor from '../armor/armorInterface';
import KnightWeapon from '../weapon/knightWeapon/knightWeapon';

import character from './characterAbstract';

class Knight extends character {
  constructor(name: string, maxHP: number, currentWeapon: KnightWeapon, currentArmor: armor) {
    super(name, maxHP, currentArmor, currentWeapon);
  }
}

export default Knight;
