import effect from '../../../effects/effectAbstract';
import abilityTarget from '../../../enums/abilityTarget';
import elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class StaffAttack extends ability {
  readonly name: string = 'Атака посохом';
  protected _discription: string = `Обычная атака мечом, наносит ${this._damage} урона`;
  protected _onUseEffect: effect = undefined;
  protected _damage: number = 10;
  readonly abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: elements = elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default StaffAttack;
