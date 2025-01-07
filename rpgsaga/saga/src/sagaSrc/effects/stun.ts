import effectTarget from '../enums/effectTarget';
import Elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class stun extends effect {
  readonly _name: string = 'Оглушение';
  readonly _discription: string = 'Оглушает врага на ход';
  protected _duration: number = 1;
  protected _effectType: Elements = Elements.wind;
  readonly _effectTarget: effectTarget = effectTarget.canToAct;
  protected _isApplied: boolean = false;
  useEffect(): boolean {
    return false;
  }
  effectEnd(): void {}
}
export default stun;
