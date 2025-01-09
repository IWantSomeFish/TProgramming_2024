import ability from '../ability/abilityAbstract';
import axeAttack from '../ability/weapon/basicAbilitys/axeAttack';
import bookAttack from '../ability/weapon/basicAbilitys/bookAttack';
import crossBowAttack from '../ability/weapon/basicAbilitys/crossBowAttack';
import longBowAttack from '../ability/weapon/basicAbilitys/longBowAttack';
import staffAttack from '../ability/weapon/basicAbilitys/staffAttack';
import swordAttack from '../ability/weapon/basicAbilitys/swordAttack';
import weapon from '../weapon/weaponAbstract';
import classEnum from '../enums/classesEnum';
import weapons from '../enums/weaponsEnum';

import archerWAF from './abilityFabrics/waponAbilityFabric/archerWAF';
import knightWaf from './abilityFabrics/waponAbilityFabric/knightWAF';
import mageWaf from './abilityFabrics/waponAbilityFabric/mageWAF';
import fabric from './fabricAbstract';

class WeaponFabric extends fabric {
  protected knightAbility = new knightWaf();
  protected mageAbility = new mageWaf();
  protected acherAbility = new archerWAF();
  public createWeapon(type: classEnum) {
    const knightWeapons = [weapons.sword, weapons.axe];
    const mageWeapons = [weapons.staff, weapons.book];
    const archerWeapons = [weapons.longbow, weapons.crossbow];
    let charWeapon: weapon;
    switch (type) {
      case classEnum.knight:
        switch (knightWeapons[this.createRandomNuber(0, knightWeapons.length - 1)]) {
          case weapons.sword:
            charWeapon = this.createSword();
            return charWeapon;
          case weapons.axe:
            charWeapon = this.createAxe();
            return charWeapon;
        }
        break;
      case classEnum.mage:
        switch (mageWeapons[this.createRandomNuber(0, mageWeapons.length - 1)]) {
          case weapons.staff:
            charWeapon = this.createStaff();
            return charWeapon;
          case weapons.book:
            charWeapon = this.createBook();
            return charWeapon;
        }
        break;
      case classEnum.archer:
        switch (archerWeapons[this.createRandomNuber(0, archerWeapons.length - 1)]) {
          case weapons.longbow:
            charWeapon = this.createLongBow();
            return charWeapon;
          case weapons.crossbow:
            charWeapon = this.createCrossBow();
            return charWeapon;
        }
        break;
    }
  }
  private createSword(): weapon {
    const weaponNames = ['Excalibur', 'Demon Slayer', 'Night', 'Day'];
    const weaponName = weaponNames[this.createRandomNuber(0, weaponNames.length - 1)];
    const critChance = this.createRandomNuber(10, 30);
    const critMultiplier = this.createRandomNuber(10, 30) / 10;
    return new weapon(weaponName, critChance, critMultiplier, new swordAttack(), this.knightAbility.createAbility());
  }
  private createAxe(): weapon {
    const weaponNames = ['Dual Moon', 'Axe of Gorrosh', 'Mooncrasher'];
    const weaponName = weaponNames[this.createRandomNuber(0, weaponNames.length - 1)];
    const critChance = this.createRandomNuber(10, 15);
    const critMultiplier = this.createRandomNuber(10, 30) / 10;
    return new weapon(weaponName, critChance, critMultiplier, new axeAttack(), this.knightAbility.createAbility());
  }
  private createStaff(): weapon {
    const weaponNames = ['Staff of wizardy', 'Black Tree', 'Stop Sign'];
    const weaponName = weaponNames[this.createRandomNuber(0, weaponNames.length - 1)];
    const critChance = 0;
    const critMultiplier = 0;
    return new weapon(weaponName, critChance, critMultiplier, new staffAttack(), this.mageAbility.createAbility());
  }
  private createBook(): weapon {
    const weaponNames = ['Necronominicon', 'Book of Wizard', 'Book of Revelations'];
    const weaponName = weaponNames[this.createRandomNuber(0, weaponNames.length - 1)];
    const critChance = 0;
    const critMultiplier = 0;
    return new weapon(weaponName, critChance, critMultiplier, new bookAttack(), this.mageAbility.createAbility());
  }
  private createLongBow(): weapon {
    const weaponNames = ['Bow', 'Elephant'];
    const weaponName = weaponNames[this.createRandomNuber(0, weaponNames.length - 1)];
    const critChance = this.createRandomNuber(10, 30);
    const critMultiplier = this.createRandomNuber(10, 30) / 10;
    return new weapon(weaponName, critChance, critMultiplier, new longBowAttack(), this.acherAbility.createAbility());
  }
  private createCrossBow(): weapon {
    const weaponNames = ['Vampirekiller', 'Doobstick'];
    const weaponName = weaponNames[this.createRandomNuber(0, weaponNames.length - 1)];
    const critChance = this.createRandomNuber(10, 30);
    const critMultiplier = this.createRandomNuber(10, 30) / 10;
    return new weapon(weaponName, critChance, critMultiplier, new crossBowAttack(), this.acherAbility.createAbility());
  }
  public createConcreteWeapon(
    name: string,
    critChance: number,
    critMultiplier: number,
    baseAttack: ability,
    specialAttack: ability,
  ): weapon {
    return new weapon(name, critChance, critMultiplier, baseAttack, specialAttack);
  }
}
export default WeaponFabric;
