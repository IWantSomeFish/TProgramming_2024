import exp = require('constants');

import effectTarget from '../enums/effectTarget';
import Elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class burn extends effect {
  readonly _name: string = 'Горение';
  readonly _discription: string = 'Наносит 3 урона каждый ход на протяжении 3 ходов';
  protected _duration: number = 3;
  protected _effectType: Elements = Elements.fire;
  readonly _effectTarget: effectTarget = effectTarget.charHP;
  protected _isApplied: boolean = false;
  useEffect(): number {
    return -3;
  }
  effectEnd(): void {}
}
export default burn;
