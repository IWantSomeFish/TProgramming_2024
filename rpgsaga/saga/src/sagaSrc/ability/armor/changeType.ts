import elementChange from '../../effects/changeElement';
import abilityTarget from '../../enums/abilityTarget';
import Elements from '../../enums/elementsEnum';
import ability from '../abilityAbstract';

class changeType extends ability {
  protected _name: string = 'Изменение брони';
  protected _discription: string = `Меняет тип защиты персонажа`;
  protected _onUseEffect: elementChange = new elementChange();
  protected _damage: number = 0;
  protected _abilityElement: Elements = Elements.pure;
  readonly _abilityTarget: abilityTarget = abilityTarget.onSelf;
  onUse(): void {
    this._onUseEffect.setDefaultType(Elements.wind);
  }
}
export default changeType;
