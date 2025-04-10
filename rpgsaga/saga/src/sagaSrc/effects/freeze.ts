import effectTarget from '../enums/effectTarget';
import elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class Freeze extends effect {
  readonly name: string = 'Заморозка';
  readonly discription: string = 'Оглушает врага на два хода';
  protected _duration: number = 2;
  protected _effectType: elements = elements.water;
  readonly effectTarget: effectTarget = effectTarget.canToAct;
  protected _isApplied: boolean = false;
  useEffect(): boolean {
    return false;
  }
  effectEnd(): void {}
}
export default Freeze;
