abstract class Armor {
  name: string;
  protected _baseDefence: number;
  protected _currentDefence: number;
  protected _elementDefType: string;

  constructor(name: string, baseDefence: number, elementDefType: string) {
    this.name = name;
    this._baseDefence = baseDefence;
    this._currentDefence = baseDefence;
    this._elementDefType = elementDefType;
  }

  public set defence(amount: number) {
    this._currentDefence = amount;
  }

  reduceDamage(damage: number, damageType: string): number {
    let result: number;
    if (damageType === this._elementDefType) {
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
  multiplyDamage(value: number): void {
    this._currentDefence = this._currentDefence * value;
  }
  setDefenceDefault() {
    this._currentDefence = this._baseDefence;
  }
}
export default Armor;
