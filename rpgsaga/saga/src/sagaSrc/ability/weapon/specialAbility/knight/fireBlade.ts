import elementChange from '../../../../effects/changeElement';
import effect from '../../../../effects/effectAbstract';
import abilityTarget from '../../../../enums/abilityTarget';
import elements from '../../../../enums/elementsEnum';
import ability from '../../../abilityAbstract';

class FireBlade extends ability {
  readonly name: string = 'Огненный клинок';
  protected _discription: string = `Изменяет урон оружия на огонь на три хода`;
  protected _onUseEffect: elementChange = new elementChange();
  protected _damage: number = 0;
  protected _abilityElement: elements = undefined;
  readonly abilityTarget: abilityTarget = abilityTarget.onSelf;
  onUse(): effect {
    this._onUseEffect.setDefaultType(elements.fire);
    return this._onUseEffect;
  }
}
export default FireBlade;
