import ability from '../ability/abilityAbstract';

class weapon {
  readonly _name: string;
  protected _critChance: number;
  protected _critMultiplier: number;
  protected _damage: number;
  protected _baseAttack: ability;
  protected _specialAttack: ability;

  constructor(name: string, critChance: number, critMultiplier: number, baseAttack: ability, specialAttack: ability) {
    this._name = name;
    this._critChance = critChance;
    this._critMultiplier = critMultiplier;
    this._baseAttack = baseAttack;
    this._specialAttack = specialAttack;
  }
  get baseAttack() {
    return this._baseAttack;
  }
  get specialAttack() {
    return this._specialAttack;
  }
  attack(attack: ability): ability {
    if (Math.random() * 100 <= this._critChance) {
      attack.damage = attack.damage * this._critMultiplier;
      return attack;
    }
  }
  changeDamane(value: number): void {
    this._damage = this._damage + value;
    if (this._damage < 0) {
      this._damage = 0;
    }
  }
}
export default weapon;
