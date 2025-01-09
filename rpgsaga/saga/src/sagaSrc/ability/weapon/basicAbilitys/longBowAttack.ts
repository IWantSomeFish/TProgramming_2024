import abilityTarget from '../../../enums/abilityTarget';
import elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class LongBowAttack extends ability {
  readonly name: string = 'Выстрел из лука';
  protected _discription: string = `Обычная атака из лука, наносит ${this._damage} урона`;
  protected _onUseEffect = undefined;
  protected _damage: number = 20;
  readonly abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: elements = elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default LongBowAttack;
