import Armor from '../armor/armorAbstract';
import Character from '../character/characterAbstract';
import weapon from '../weapon/weaponAbstract';
import Class from '../enums/classesEnum';

import ArmorFabric from './armorFabrics/armorFabric';
import fabric from './fabricAbstract';
import weaponFabric from './weaponFabric';

class characterFabric extends fabric {
  private weaponFabric = new weaponFabric();
  private armorFabric = new ArmorFabric();

  public createCharacter(type: Class): Character {
    switch (type) {
      case Class.knight:
        return this.createKnight();
      case Class.mage:
        return this.createMage();
      case Class.archer:
        return this.createArcher();
    }
  }
  private createKnight(): Character {
    const charNames: string[] = ['Harald', 'Robin', 'Fernando'];
    const charHP: number = this.createRandomNuber(10, 20);
    const charName: string = charNames[this.createRandomNuber(0, charNames.length - 1)];
    const charWeapon: weapon = this.weaponFabric.createWeapon(Class.knight);
    const charArmor: Armor = this.armorFabric.createArmor();
    return new Character(charName, Class.knight, charHP, charArmor, charWeapon);
  }
  private createMage(): Character {
    const charNames: string[] = ['Hedosley', 'Emanthe', 'Emara', 'Eguthea'];
    const characterHP: number = this.createRandomNuber(10, 15);
    const charName: string = charNames[this.createRandomNuber(0, charNames.length - 1)];
    const charWeapon: weapon = this.weaponFabric.createWeapon(Class.mage);
    const charArmor: Armor = this.armorFabric.createArmor();
    return new Character(charName, Class.mage, characterHP, charArmor, charWeapon);
  }
  private createArcher(): Character {
    const charNames: string[] = ['Rodib Good', 'Arrow', 'Kinessa'];
    const characterHP: number = this.createRandomNuber(5, 15);
    const charName: string = charNames[this.createRandomNuber(0, charNames.length - 1)];
    const charWeapon: weapon = this.weaponFabric.createWeapon(Class.archer);
    const charArmor: Armor = this.armorFabric.createArmor();
    return new Character(charName, Class.archer, characterHP, charArmor, charWeapon);
  }
  public createConcreteChar(name: string, charClass: Class, hp: number, charWeapon: weapon, charArmor: Armor) {
    return new Character(name, charClass, hp, charArmor, charWeapon);
  }
}
export default characterFabric;
