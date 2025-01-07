import ability from '../ability/abilityAbstract';
import Armor from '../armor/armorAbstract';
import effect from '../effects/effectAbstract';
import Class from '../enums/classesEnum';
import effectTarget from '../enums/effectTarget';
import weapon from '../weapon/weaponAbstract';

class Character {
  readonly _name: string;
  readonly _chracterClass: Class;
  protected _maxHP: number;
  protected _currentHP: number;
  protected _currentArmor: Armor;
  protected _currentWeapon: weapon;
  protected _canToAct: boolean = true;
  protected _superimposedEffects: effect[] = [];

  constructor(name: string, charClass: Class, maxHP: number, armor: Armor, weapon: weapon) {
    this._chracterClass = charClass;
    this._name = name;
    this._maxHP = maxHP;
    this._currentHP = maxHP;
    this._currentArmor = armor;
    this._currentWeapon = weapon;
  }
  takeAttack(attack: ability) {
    if (attack.effect !== undefined) {
      if (attack.effect.getEffectType !== this._currentArmor.defType) {
        this.addNewEffect(attack.effect);
      }
    }
    const damage = this._currentArmor.reduceDamage(attack.damage, attack.abilityType);
    this._currentHP = this._currentHP - damage;
  }

  addNewEffect(effect: effect) {
    this._superimposedEffects.push(effect);
  }
  deleteEndedEffect() {
    for (let i = 0; i < this._superimposedEffects.length; i++) {
      if (this._superimposedEffects[i].getDuration <= 0) {
        this.applyEffect(this._superimposedEffects[i]);
        this._superimposedEffects.splice(i, 1);
      }
    }
  }
  reduceEffectDuration() {
    for (let i = 0; i < this._superimposedEffects.length; i++) {
      this._superimposedEffects[i].reduceDuration();
      if (this._superimposedEffects[i].isApplied === false) {
        this.applyEffect(this._superimposedEffects[i]);
      }
    }
  }
  applyEffect(effect: effect): void {
    let result;
    if (effect.getDuration != -1) {
      result = effect.useEffect();
    } else {
      result = effect.effectEnd();
    }
    switch (effect._effectTarget) {
      case effectTarget.charHP:
        this._currentHP = this._currentHP + result;
        break;
      case effectTarget.canToAct:
        this._canToAct = this._canToAct + result;
        break;
      case effectTarget.armorDefense:
        this._currentArmor.changeDefence(result);
        break;
      case effectTarget.weaponDamage:
        this._currentWeapon.changeDamane(result);
    }
  }
  set actAbility(value: boolean){
    this._canToAct = value;
  }
  get getEffects(): effect[] {
    return this._superimposedEffects;
  }
  get characterHP(): number{
    return this._currentHP;
  }
  get canToAct(): boolean{
    return this._canToAct;
  }
  get currentArmor(): Armor{
    return this._currentArmor;
  }
  get currentWeapon(): weapon{
    return this._currentWeapon;
  }
}

export default Character;
