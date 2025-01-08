import effect from '../../../../effects/effectAbstract';
import freeze from '../../../../effects/freeze';
import abilityTarget from '../../../../enums/abilityTarget';
import Elements from '../../../../enums/elementsEnum';
import ability from '../../../abilityAbstract';

class iceSpike extends ability {
  readonly _name: string = 'Огненный шар';
  protected _onUseEffect: effect = new freeze();
  protected _damage: number = 20;
  protected _abilityElement: Elements = Elements.water;
  readonly _abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _discription: string = `Наносит ${this._damage} урона и поджигает цель на ${this._onUseEffect.getDuration} хода`;
  onUse(): number {
    return this._damage;
  }
}
export default iceSpike;
