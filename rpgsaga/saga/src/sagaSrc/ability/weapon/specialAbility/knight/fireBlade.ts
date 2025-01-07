import elementChange from '../../../../effects/changeElement';
import effect from '../../../../effects/effectAbstract';
import abilityTarget from '../../../../enums/abilityTarget';
import Elements from '../../../../enums/elementsEnum';
import ability from '../../../abilityAbstract';

class fireBlade extends ability {
  protected _name: string = 'Огненный клинок';
  protected _discription: string = `Изменяет урон оружия на огонь на три хода`;
  protected _onUseEffect: elementChange = new elementChange();
  protected _damage: number = 0;
  protected _abilityElement: Elements = undefined;
  readonly _abilityTarget: abilityTarget = abilityTarget.onSelf;
  onUse(): effect {
    this._onUseEffect.setDefaultType(Elements.fire);
    return this._onUseEffect;
  }
}
export default fireBlade;
