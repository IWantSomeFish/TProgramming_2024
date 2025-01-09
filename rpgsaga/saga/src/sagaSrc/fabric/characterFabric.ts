import armor from '../armor/armorAbstract';
import character from '../character/characterAbstract';
import weapon from '../weapon/weaponAbstract';
import classEnum from '../enums/classesEnum';

import armorFabric from './armorFabrics/armorFabric';
import fabric from './fabricAbstract';
import weaponFabric from './weaponFabric';

class CharacterFabric extends fabric {
  private weaponFabric = new weaponFabric();
  private armorFabric = new armorFabric();

  public createCharacter(type: classEnum): character {
    switch (type) {
      case classEnum.knight:
        return this.createKnight();
      case classEnum.mage:
        return this.createMage();
      case classEnum.archer:
        return this.createArcher();
    }
  }
  private createKnight(): character {
    const charNames: string[] = ['Harald', 'Robin', 'Fernando'];
    const charHP: number = this.createRandomNuber(10, 20);
    const charName: string = charNames[this.createRandomNuber(0, charNames.length - 1)];
    const charWeapon: weapon = this.weaponFabric.createWeapon(classEnum.knight);
    const charArmor: armor = this.armorFabric.createArmor();
    return new character(charName, classEnum.knight, charHP, charArmor, charWeapon);
  }
  private createMage(): character {
    const charNames: string[] = ['Hedosley', 'Emanthe', 'Emara', 'Eguthea'];
    const characterHP: number = this.createRandomNuber(10, 15);
    const charName: string = charNames[this.createRandomNuber(0, charNames.length - 1)];
    const charWeapon: weapon = this.weaponFabric.createWeapon(classEnum.mage);
    const charArmor: armor = this.armorFabric.createArmor();
    return new character(charName, classEnum.mage, characterHP, charArmor, charWeapon);
  }
  private createArcher(): character {
    const charNames: string[] = ['Rodib Good', 'Arrow', 'Kinessa'];
    const characterHP: number = this.createRandomNuber(5, 15);
    const charName: string = charNames[this.createRandomNuber(0, charNames.length - 1)];
    const charWeapon: weapon = this.weaponFabric.createWeapon(classEnum.archer);
    const charArmor: armor = this.armorFabric.createArmor();
    return new character(charName, classEnum.archer, characterHP, charArmor, charWeapon);
  }
  public createConcreteChar(name: string, charClass: classEnum, hp: number, charWeapon: weapon, charArmor: armor) {
    return new character(name, charClass, hp, charArmor, charWeapon);
  }
}
export default CharacterFabric;
