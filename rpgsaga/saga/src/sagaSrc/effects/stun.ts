import effectTarget from '../enums/effectTarget';
import elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class Stun extends effect {
  readonly name: string = 'Оглушение';
  readonly discription: string = 'Оглушает врага на ход';
  protected _duration: number = 1;
  protected _effectType: elements = elements.wind;
  readonly effectTarget: effectTarget = effectTarget.canToAct;
  protected _isApplied: boolean = false;
  useEffect(): boolean {
    return false;
  }
  effectEnd(): void {}
}
export default Stun;
