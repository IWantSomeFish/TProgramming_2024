import elementChange from '../../effects/changeElement';
import abilityTarget from '../../enums/abilityTarget';
import elements from '../../enums/elementsEnum';
import ability from '../abilityAbstract';

class ChangeType extends ability {
  readonly name: string = 'Изменение брони';
  protected _discription: string = `Меняет тип защиты персонажа`;
  protected _onUseEffect: elementChange = new elementChange();
  protected _damage: number = 0;
  protected _abilityElement: elements = elements.pure;
  readonly abilityTarget: abilityTarget = abilityTarget.onSelf;
  onUse(): void {
    this._onUseEffect.setDefaultType(elements.wind);
  }
}
export default ChangeType;
