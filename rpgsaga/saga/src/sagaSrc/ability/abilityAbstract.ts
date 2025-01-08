import effect from '../effects/effectAbstract';
import abilityTarget from '../enums/abilityTarget';
import Elements from '../enums/elementsEnum';

abstract class ability {
  readonly _name: string;
  protected _discription: string;
  protected _onUseEffect: effect;
  protected _damage: number;
  protected _abilityElement: Elements;
  readonly _abilityTarget: abilityTarget;
  abstract onUse(): any;
  get abilityTarget(): abilityTarget {
    return this._abilityTarget;
  }
  get abilityType(): Elements {
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
    console.log(this._name);
    console.log(this._discription);
    console.log('При применении накладывает эффект');
    this._onUseEffect.effectDiscription();
  }
}
export default ability;
