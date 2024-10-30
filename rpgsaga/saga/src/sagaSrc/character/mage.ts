import Armor from '../armor/armorInterface';
import KnightWeapon from '../weapon/knightWeapon/knightWeapon';
import MageWaepon from '../weapon/mageWeapon/mageWeapon';

import Character from './characterAbstract';

class Mage extends Character {
  constructor(name: string, maxHP: number, armor: Armor, weapon: MageWaepon) {
    super(name, maxHP, armor, weapon);
  }
}
export default Mage;
