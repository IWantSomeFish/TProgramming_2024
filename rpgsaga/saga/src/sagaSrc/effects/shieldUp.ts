import effectTarget from '../enums/effectTarget';
import Elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class defUp extends effect {
  readonly _name: string = 'Повышение защиты';
  readonly _discription: string = 'Увеличивает защиту на 10';
  protected _duration: number = 2;
  protected _effectType: Elements = Elements.pure;
  readonly _effectTarget: effectTarget = effectTarget.armorDefense;
  protected _isApplied: boolean = false;
  useEffect(): number {
    this._isApplied = true;
    return 10;
  }
  effectEnd(): number {
    return -10;
  }
}
export default defUp;
