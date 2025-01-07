import effectTarget from '../enums/effectTarget';
import Elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class freeze extends effect {
  readonly _name: string = 'Заморозка';
  readonly _discription: string = 'Оглушает врага на два хода';
  protected _duration: number = 2;
  protected _effectType: Elements = Elements.water;
  readonly _effectTarget: effectTarget = effectTarget.canToAct;
  protected _isApplied: boolean = false;
  useEffect(): boolean {
    return false;
  }
  effectEnd(): void {}
}
export default freeze;
