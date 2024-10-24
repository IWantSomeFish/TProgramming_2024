import Armor from '../armor/armorInterface';
import Weapon from '../weapon/weaponInterface';

interface character {
  name: string;
  maxHP: number;
  currentHP: number;
  maxMana: number;
  currentMana: number;
  currentArmor: Armor;
  currentWeapon: Weapon;

  takeDamage(damage: number): void;
}
