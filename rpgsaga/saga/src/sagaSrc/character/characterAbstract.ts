import ability from '../ability/abilityAbstract';
import armor from '../armor/armorAbstract';
import effect from '../effects/effectAbstract';
import classEnum from '../enums/classesEnum';
import effectTarget from '../enums/effectTarget';
import weapon from '../weapon/weaponAbstract';

class Character {
  readonly name: string;
  readonly chracterClass: classEnum;
  protected _maxHP: number;
  protected _currentHP: number;
  protected _currentArmor: armor;
  protected _currentWeapon: weapon;
  protected _canToAct: boolean = true;
  protected _superimposedEffects: effect[] = [];

  constructor(name: string, charClass: classEnum, maxHP: number, charArmor: armor, charWeapon: weapon) {
    this.chracterClass = charClass;
    this.name = name;
    this._maxHP = maxHP;
    this._currentHP = maxHP;
    this._currentArmor = charArmor;
    this._currentWeapon = charWeapon;
  }
  chooseAttack(): ability {
    const randInt = this.createRandomNuber(1,3);
    if (randInt === 1) {
      return this._currentWeapon.attack(this._currentWeapon.baseAttack);
    } else if (randInt === 2) {
      return this._currentWeapon.attack(this._currentWeapon.specialAttack);
    } else if (randInt === 3) {
      return this._currentArmor.armorAbility;
    }
  }
  takeAttack(attack: ability): [number, effect] {
    if (attack.effect !== undefined) {
      if (attack.effect.getEffectType !== this._currentArmor.defType) {
        this.addNewEffect(attack.effect);
      }
    }
    const damage = this._currentArmor.reduceDamage(attack.damage, attack.abilityType);
    this._currentHP = this._currentHP - damage;
    let incomingEffect: effect = undefined;
    if (attack.effect !== undefined) {
      incomingEffect = attack.effect;
    }
    return [damage, incomingEffect];
  }

  addNewEffect(incomingEffect: effect) {
    this._superimposedEffects.push(incomingEffect);
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
  applyEffect(incomingEffect: effect): void {
    let result;
    if (incomingEffect.getDuration !== -1) {
      result = incomingEffect.useEffect();
    } else {
      result = incomingEffect.effectEnd();
    }
    switch (incomingEffect.effectTarget) {
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
  set actAbility(value: boolean) {
    this._canToAct = value;
  }
  get getEffects(): effect[] {
    return this._superimposedEffects;
  }
  get characterHP(): number {
    return this._currentHP;
  }
  get canToAct(): boolean {
    return this._canToAct;
  }
  get currentArmor(): armor {
    return this._currentArmor;
  }
  get currentWeapon(): weapon {
    return this._currentWeapon;
  }
  private createRandomNuber(min: number, max: number): number {
    const randomNumber = Math.random() * (max - min) + min;
    return Number(randomNumber.toFixed(0));
  }
}

export default Character;
