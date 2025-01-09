import effectTarget from '../enums/effectTarget';
import elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class ArmorBreak extends effect {
  readonly name: string = 'Разрушение брони';
  readonly discription: string = 'Уменьшает броню на 10 на два хода';
  protected _duration: number = 2;
  protected _effectType: elements = elements.physic;
  readonly effectTarget: effectTarget = effectTarget.armorDefense;
  protected _isApplied: boolean = false;

  effectEnd(): number {
    return 10;
  }
  useEffect(): number {
    return -10;
  }
}
export default ArmorBreak;
