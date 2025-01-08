import effect from '../../../../effects/effectAbstract';
import armorBreak from '../../../../effects/armorBreakEffect';
import abilityTarget from '../../../../enums/abilityTarget';
import Elements from '../../../../enums/elementsEnum';
import ability from '../../../abilityAbstract';

class holyStrike extends ability {
  readonly _name: string = 'Пролом защиты';
  protected _discription: string = `Атака, уменьшающая защиту цели на 10, наносит ${this._damage} урона`;
  protected _onUseEffect: effect = new armorBreak();
  protected _damage: number = 5;
  readonly _abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: Elements = Elements.physic;

  onUse(): number {
    return this._damage;
  }
}
export default holyStrike;
