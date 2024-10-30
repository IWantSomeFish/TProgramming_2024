import Armor from '../armor/armorInterface';
import KnightWeapon from '../weapon/knightWeapon/knightWeapon';

abstract class Character {
  name: string;
  private _maxHP: number;
  private _currentHP: number;
  private _currentArmor: Armor;
  private _currentWeapon: KnightWeapon;

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
    console.log(result)
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
