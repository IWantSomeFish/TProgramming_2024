import effectTarget from '../enums/effectTarget';
import elements from '../enums/elementsEnum';

import effect from './effectAbstract';

class Burn extends effect {
  readonly name: string = 'Горение';
  readonly discription: string = 'Наносит 3 урона каждый ход на протяжении 3 ходов';
  protected _duration: number = 3;
  protected _effectType: elements = elements.fire;
  readonly effectTarget: effectTarget = effectTarget.charHP;
  protected _isApplied: boolean = false;
  useEffect(): number {
    return -3;
  }
  effectEnd(): void {}
}
export default Burn;
