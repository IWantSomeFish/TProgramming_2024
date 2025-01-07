import ability from '../ability/abilityAbstract';
import axeAttack from '../ability/weapon/basicAbilitys/axeAttack';
import bookAttack from '../ability/weapon/basicAbilitys/bookAttack';
import crossBowAttack from '../ability/weapon/basicAbilitys/crossBowAttack';
import longBowAttack from '../ability/weapon/basicAbilitys/longBowAttack';
import staffAttack from '../ability/weapon/basicAbilitys/staffAttack';
import swordAttack from '../ability/weapon/basicAbilitys/swordAttack';
import weapon from '../weapon/weaponAbstract';
import Class from '../enums/classesEnum';
import Weapons from '../enums/weaponsEnum';

import archerWAF from './abilityFabrics/waponAbilityFabric/archerWAF';
import knightWAF from './abilityFabrics/waponAbilityFabric/knightWAF';
import mageWAF from './abilityFabrics/waponAbilityFabric/mageWAF';
import fabric from './fabricAbstract';

class weaponFabric extends fabric {
  protected knightAbility = new knightWAF();
  protected mageAbility = new mageWAF();
  protected acherAbility = new archerWAF();
  public createWeapon(type: Class) {
    switch (type) {
      case Class.knight:
        const knightWeapons = [Weapons.sword, Weapons.axe];
        switch (knightWeapons[this.createRandomNuber(0, knightWeapons.length - 1)]) {
          case Weapons.sword:
            const sword = this.createSword();
            return sword;
          case Weapons.axe:
            const axe = this.createAxe();
            return axe;
        }
      case Class.mage:
        const mageWeapons = [Weapons.staff, Weapons.book];
        switch (mageWeapons[this.createRandomNuber(0, mageWeapons.length - 1)]) {
          case Weapons.staff:
            const staff = this.createStaff();
            return staff;
          case Weapons.book:
            const book = this.createBook();
            return book;
        }
      case Class.archer:
        const archerWeapons = [Weapons.longbow, Weapons.crossbow];
        switch (archerWeapons[this.createRandomNuber(0, archerWeapons.length - 1)]) {
          case Weapons.longbow:
            const longBow = this.createLongBow();
            return longBow;
          case Weapons.crossbow:
            const crossBow = this.createCrossBow();
            return crossBow;
        }
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
export default weaponFabric;
