import effectTarget from '../enums/effectTarget';
import elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class DefUp extends effect {
  readonly name: string = 'Повышение защиты';
  readonly discription: string = 'Увеличивает защиту на 10';
  protected _duration: number = 2;
  protected _effectType: elements = elements.pure;
  readonly effectTarget: effectTarget = effectTarget.armorDefense;
  protected _isApplied: boolean = false;
  useEffect(): number {
    this._isApplied = true;
    return 10;
  }
  effectEnd(): number {
    return -10;
  }
}
export default DefUp;
