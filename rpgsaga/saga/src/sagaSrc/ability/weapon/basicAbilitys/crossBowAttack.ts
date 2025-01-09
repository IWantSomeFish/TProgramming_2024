import abilityTarget from '../../../enums/abilityTarget';
import elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class CrossBowAttack extends ability {
  readonly name: string = 'Выстрел из арбалета';
  protected _discription: string = `Обычная выстрел из арбалета, наносит ${this._damage} урона`;
  protected _onUseEffect = undefined;
  protected _damage: number = 30;
  readonly abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: elements = elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default CrossBowAttack;
