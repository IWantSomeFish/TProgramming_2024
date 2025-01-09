import effect from '../../../../effects/effectAbstract';
import freeze from '../../../../effects/freeze';
import abilityTarget from '../../../../enums/abilityTarget';
import elements from '../../../../enums/elementsEnum';
import ability from '../../../abilityAbstract';

class IceSpike extends ability {
  readonly name: string = 'Ледяные шипы';
  protected _onUseEffect: effect = new freeze();
  protected _damage: number = 20;
  protected _abilityElement: elements = elements.water;
  readonly abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _discription: string = `Наносит ${this._damage} урона и поджигает цель на ${this._onUseEffect.getDuration} хода`;
  onUse(): number {
    return this._damage;
  }
}
export default IceSpike;
