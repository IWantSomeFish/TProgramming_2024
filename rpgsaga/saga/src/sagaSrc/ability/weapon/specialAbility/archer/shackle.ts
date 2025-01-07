import effect from '../../../../effects/effectAbstract';
import stun from '../../../../effects/stun';
import abilityTarget from '../../../../enums/abilityTarget';
import Elements from '../../../../enums/elementsEnum';
import ability from '../../../abilityAbstract';

class shackle extends ability {
  protected _name: string = 'Связка';
  protected _discription: string = `Наносит  ${this.damage} урона`;
  protected _onUseEffect: effect = new stun();
  protected _damage: number = 10;
  protected _abilityElement: Elements = Elements.wind;
  readonly _abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  onUse(): number {
    return this._damage;
  }
}
export default shackle;
