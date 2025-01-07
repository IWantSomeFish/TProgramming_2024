import abilityTarget from '../../../enums/abilityTarget';
import Elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class crossBowAttack extends ability {
  protected _name: string = 'Выстрел из арбалета';
  protected _discription: string = `Обычная выстрел из арбалета, наносит ${this._damage} урона`;
  protected _onUseEffect = undefined;
  protected _damage: number = 30;
  readonly _abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: Elements = Elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default crossBowAttack;
