import abilityTarget from '../../../enums/abilityTarget';
import Elements from '../../../enums/elementsEnum';
import ability from '../../abilityAbstract';

class axeAttack extends ability {
  protected _name: string = 'Атака топором';
  protected _discription: string = `Обычная атака топором, наносит ${this._damage} урона`;
  protected _onUseEffect = undefined;
  protected _damage: number = 10;
  readonly _abilityTarget: abilityTarget = abilityTarget.oneEnemy;
  protected _abilityElement: Elements = Elements.physic;
  onUse(): number {
    return this._damage;
  }
}
export default axeAttack;
