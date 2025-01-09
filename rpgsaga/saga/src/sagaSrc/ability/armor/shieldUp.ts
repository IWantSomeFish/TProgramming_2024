import effect from '../../effects/effectAbstract';
import defUp from '../../effects/shieldUp';
import abilityTarget from '../../enums/abilityTarget';
import elements from '../../enums/elementsEnum';
import ability from '../abilityAbstract';

class ShieldUp extends ability {
  readonly name: string = 'Поднять щиты!';
  protected _discription: string = `Добавляет 10 защиты`;
  protected _onUseEffect: effect = new defUp();
  protected _damage: number = 0;
  protected _abilityElement: elements = elements.pure;
  readonly abilityTarget: abilityTarget = abilityTarget.onSelf;
  onUse(): void {}
}
export default ShieldUp;
