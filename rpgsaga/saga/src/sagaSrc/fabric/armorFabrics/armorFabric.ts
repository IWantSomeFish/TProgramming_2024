import ability from '../../ability/abilityAbstract';
import Armor from '../../armor/armorAbstract';
import armorAF from '../abilityFabrics/armorAF';
import Elements from '../../enums/elementsEnum';
import fabric from '../fabricAbstract';

class ArmorFabric extends fabric {
  private specialFabric = new armorAF();
  private armorNames = ['Steel Plate', 'Black rock', 'Vail of night', 'Daybreaker'];
  private elements: Elements[] = [
    Elements.fire,
    Elements.physic,
    Elements.thunder,
    Elements.thunder,
    Elements.water,
    Elements.wind,
  ];
  public createArmor(): Armor {
    const armorName = this.armorNames[this.createRandomNuber(0, this.armorNames.length - 1)];
    const defence = this.createRandomNuber(5, 10);
    const defenceType = this.elements[this.createRandomNuber(0, this.elements.length - 1)];
    return new Armor(armorName, defence, defenceType, this.specialFabric.createAbility());
  }
  public createConctereArmor(name: string, defence: number, defenceType: Elements, armorAbility: ability): Armor {
    return new Armor(name, defence, defenceType, armorAbility);
  }
}
export default ArmorFabric;
