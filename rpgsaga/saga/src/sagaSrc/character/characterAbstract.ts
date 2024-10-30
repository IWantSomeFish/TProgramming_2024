import Armor from '../armor/armorInterface';
import KnightWeapon from '../weapon/knightWeapon/knightWeapon';

abstract class Character {
  name: string;
  protected _maxHP: number;
  protected _currentHP: number;
  protected _currentArmor: Armor;
  protected _currentWeapon: KnightWeapon;

  constructor(name: string, maxHP: number, armor: Armor, weapon: KnightWeapon) {
    this.name = name;
    this._maxHP = maxHP;
    this._currentHP = maxHP;
    this._currentArmor = armor;
    this._currentWeapon = weapon;
  }
  public get weapon() {
    return this._currentWeapon;
  }

  takeDamage(damage: number, damageType: string) {
    const result = this._currentArmor.reduceDamage(damage, damageType);
    if (this._currentHP - damage < 0) {
      this._currentHP = 0;
    } else {
      this._currentHP = this._currentHP - result;
    }
  }

  changeCharHP(amount: number) {
    if (this._currentHP + amount > this._maxHP) {
      this._currentHP = this._maxHP;
    } else {
      this._currentHP = this._currentHP + amount;
    }
  }
}

export default Character;
