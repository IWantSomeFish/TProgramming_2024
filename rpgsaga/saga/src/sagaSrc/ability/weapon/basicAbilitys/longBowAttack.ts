import abilityTarget from '../../../enums/abilityTarget';
import Elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class longBowAttack extends ability {
  protected _name: string = 'Выстрел из лука';
  protected _discription: string = `Обычная атака из лука, наносит ${this._damage} урона`;
  protected _onUseEffect = undefined;
  protected _damage: number = 20;
  readonly _abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: Elements = Elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default longBowAttack;
