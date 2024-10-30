import Armor from '../armor/armorInterface';
import KnightWeapon from '../weapon/knightWeapon/knightWeapon';

import Character from './characterAbstract';

class Mage extends Character {
  constructor(name: string, maxHP: number, armor: Armor, weapon: KnightWeapon) {
    super(name, maxHP, armor, weapon);
  }
}
export default Mage;
