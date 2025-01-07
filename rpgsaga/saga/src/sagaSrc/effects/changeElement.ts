import effectTarget from '../enums/effectTarget';
import Elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class elementChange extends effect {
  readonly _name: string = 'Изменение элемента';
  readonly _discription: string = `Меняет элемент снаряжения на`;
  protected _duration: number = 3;
  protected _effectType: Elements = Elements.pure;
  readonly _effectTarget: effectTarget = effectTarget.armorType;
  protected _isApplied: boolean = false;
  private _defaultType: Elements = undefined;

  setDefaultType(value: Elements) {
    this._effectType = value;
  }
  takeBasicElement(type: Elements) {
    this._defaultType = type;
  }
  useEffect(): Elements {
    this._isApplied = true;
    return this._effectType;
  }
  effectEnd(): Elements {
    return this._defaultType;
  }
}
export default elementChange;
