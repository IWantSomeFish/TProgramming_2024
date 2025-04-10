import effect from '../../../../effects/effectAbstract';
import armorBreak from '../../../../effects/armorBreakEffect';
import abilityTarget from '../../../../enums/abilityTarget';
import elements from '../../../../enums/elementsEnum';
import ability from '../../../abilityAbstract';

class HolyStrike extends ability {
  readonly name: string = 'Пролом защиты';
  protected _discription: string = `Атака, уменьшающая защиту цели на 10, наносит ${this._damage} урона`;
  protected _onUseEffect: effect = new armorBreak();
  protected _damage: number = 5;
  readonly abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: elements = elements.physic;

  onUse(): number {
    return this._damage;
  }
}
export default HolyStrike;
