import effect from '../effects/effectAbstract';
import abilityTarget from '../enums/abilityTarget';
import elements from '../enums/elementsEnum';

abstract class Ability {
  readonly name: string;
  protected _discription: string;
  protected _onUseEffect: effect;
  protected _damage: number;
  protected _abilityElement: elements;
  readonly abilityTarget: abilityTarget;
  abstract onUse();
  get getAbilityTarget(): abilityTarget {
    return this.abilityTarget;
  }
  get abilityType(): elements {
    return this._abilityElement;
  }
  get effect(): effect {
    return this._onUseEffect;
  }
  get damage(): number {
    return this._damage;
  }
  set damage(value: number) {
    this._damage = value;
  }
  abitilyDiscription() {
    console.log(this.name);
    console.log(this._discription);
    console.log('При применении накладывает эффект');
    this._onUseEffect.effectDiscription();
  }
}
export default Ability;
