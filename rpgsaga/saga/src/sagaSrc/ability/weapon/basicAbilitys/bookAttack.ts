import abilityTarget from '../../../enums/abilityTarget';
import Elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class bookAttack extends ability {
  protected _name: string = 'Атака книгой';
  protected _discription: string = `Обычная атака книгой, наносит ${this._damage} урона всем врагам`;
  protected _onUseEffect = undefined;
  protected _damage: number = 15;
  readonly _abilityTarget: abilityTarget = abilityTarget.allEnemy;
  protected _abilityElement: Elements = Elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default bookAttack;
