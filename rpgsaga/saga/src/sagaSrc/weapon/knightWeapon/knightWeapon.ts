import Weapon from '../weaponInterface';

abstract class KnightWeapon implements Weapon {
  name: string;
  private _baseDamage: number;
  private _currentDamage: number;
  private _critChance: number;
  private _critMultiple: number;
  private _attackType: string;

  public set currentDamage(damage: number) {
    this._currentDamage = damage;
  }

  public get attackType() {
    return this._attackType;
  }

  constructor(name: string, baseDamage: number, critChance: number, critMultiplier: number, attackType: string) {
    this.name = name;
    this._baseDamage = baseDamage;
    this._currentDamage = baseDamage;
    this._critChance = critChance;
    this._critMultiple = critMultiplier;
    this._attackType = attackType;
  }

  changeDamage(value: number): void {
    if (this._currentDamage + value <= 0) {
      this._currentDamage = 0;
    } else {
      this._currentDamage = this._currentDamage + value;
    }
  }
  multiplyDamage(value: number): void {
    this._currentDamage = this._currentDamage * value;
  }

  attack() {
    if (Math.random() * 100 <= this._critChance) {
      return this._currentDamage * this._critMultiple;
    } else {
      return [this._currentDamage, this._attackType];
    }
  }

  setDamageDefault() {
    this._currentDamage = this._baseDamage;
  }
}
export default KnightWeapon;
