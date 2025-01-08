import effect from '../../effects/effectAbstract';
import defUp from '../../effects/shieldUp';
import abilityTarget from '../../enums/abilityTarget';
import Elements from '../../enums/elementsEnum';
import ability from '../abilityAbstract';

class shieldUp extends ability {
  readonly_name: string = 'Поднять щиты!';
  protected _discription: string = `Добавляет 10 защиты`;
  protected _onUseEffect: effect = new defUp();
  protected _damage: number = 0;
  protected _abilityElement: Elements = Elements.pure;
  readonly _abilityTarget: abilityTarget = abilityTarget.onSelf;
  onUse(): void {}
}
export default shieldUp;
