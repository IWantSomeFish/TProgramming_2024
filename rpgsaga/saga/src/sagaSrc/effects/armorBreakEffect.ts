import effectTarget from '../enums/effectTarget';
import Elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class armorBreak extends effect {
  readonly _name: string = 'Разрушение брони';
  readonly _discription: string = 'Уменьшает броню на 10 на два хода';
  protected _duration: number = 2;
  protected _effectType: Elements = Elements.physic;
  readonly _effectTarget: effectTarget = effectTarget.armorDefense;
  protected _isApplied: boolean = false;

  effectEnd(): number {
    return 10;
  }
  useEffect(): number {
    return -10;
  }
}
export default armorBreak;
