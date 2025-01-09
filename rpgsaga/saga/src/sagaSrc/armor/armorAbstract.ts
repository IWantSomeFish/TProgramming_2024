import ability from '../ability/abilityAbstract';
import elements from '../enums/elementsEnum';

class Armor {
  readonly name: string;
  protected _baseDefence: number;
  protected _currentDefence: number;
  protected _armorElement: elements;
  protected _armorAbility: ability;

  constructor(name: string, baseDefence: number, elementDefType: elements, special: ability) {
    this.name = name;
    this._baseDefence = baseDefence;
    this._currentDefence = baseDefence;
    this._armorElement = elementDefType;
    this._armorAbility = special;
  }
  get defType(): elements {
    return this._armorElement;
  }
  get armorAbility(): ability {
    return this._armorAbility;
  }
  reduceDamage(damage: number, damageType: elements): number {
    let result: number;
    if (damageType === this._armorElement) {
      result = 0;
    } else {
      result = damage - this._currentDefence;
      if (result < 0) {
        result = 0;
      }
    }
    return result;
  }

  changeDefence(defence: number) {
    if (this._currentDefence + defence <= 0) {
      this._currentDefence = 0;
    } else {
      this._currentDefence = this._currentDefence + defence;
    }
  }
  multiplyDefence(value: number): void {
    this._currentDefence = this._currentDefence * value;
  }
  setDefenceDefault() {
    this._currentDefence = this._baseDefence;
  }
  get currentDefense(): number {
    return this._currentDefence;
  }
}
export default Armor;
