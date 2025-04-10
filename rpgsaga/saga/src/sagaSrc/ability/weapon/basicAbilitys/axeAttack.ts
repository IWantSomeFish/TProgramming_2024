import abilityTarget from '../../../enums/abilityTarget';
import elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class AxeAttack extends ability {
  readonly name: string = 'Атака топором';
  protected _discription: string = `Обычная атака топором, наносит ${this._damage} урона`;
  protected _onUseEffect = undefined;
  protected _damage: number = 10;
  readonly abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: elements = elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default AxeAttack;
