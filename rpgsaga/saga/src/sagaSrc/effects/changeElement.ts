import effectTarget from '../enums/effectTarget';
import elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class ElementChange extends effect {
  readonly name: string = 'Изменение элемента';
  readonly discription: string = `Меняет элемент снаряжения на`;
  protected _duration: number = 3;
  protected _effectType: elements = elements.pure;
  readonly effectTarget: effectTarget = effectTarget.armorType;
  protected _isApplied: boolean = false;
  private _defaultType: elements = undefined;

  setDefaultType(value: elements) {
    this._effectType = value;
  }
  takeBasicElement(type: elements) {
    this._defaultType = type;
  }
  useEffect(): elements {
    this._isApplied = true;
    return this._effectType;
  }
  effectEnd(): elements {
    return this._defaultType;
  }
}
export default ElementChange;
