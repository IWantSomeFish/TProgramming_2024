import abilityTarget from '../../../enums/abilityTarget';
import elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class BookAttack extends ability {
  readonly name: string = 'Атака книгой';
  protected _discription: string = `Обычная атака книгой, наносит ${this._damage} урона всем врагам`;
  protected _onUseEffect = undefined;
  protected _damage: number = 15;
  readonly abilityTarget: abilityTarget = abilityTarget.allEnemy;
  protected _abilityElement: elements = elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default BookAttack;
