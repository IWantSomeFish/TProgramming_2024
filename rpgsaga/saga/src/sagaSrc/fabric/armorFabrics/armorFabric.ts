import ability from '../../ability/abilityAbstract';
import armor from '../../armor/armorAbstract';
import armorAf from '../abilityFabrics/armorAF';
import elements from '../../enums/elementsEnum';
import fabric from '../fabricAbstract';

class ArmorFabric extends fabric {
  private specialFabric = new armorAf();
  private armorNames = ['Steel Plate', 'Black rock', 'Vail of night', 'Daybreaker'];
  private elements: elements[] = [
    elements.fire,
    elements.physic,
    elements.thunder,
    elements.thunder,
    elements.water,
    elements.wind,
  ];
  public createArmor(): armor {
    const armorName = this.armorNames[this.createRandomNuber(0, this.armorNames.length - 1)];
    const defence = this.createRandomNuber(5, 10);
    const defenceType = this.elements[this.createRandomNuber(0, this.elements.length - 1)];
    return new armor(armorName, defence, defenceType, this.specialFabric.createAbility());
  }
  public createConctereArmor(name: string, defence: number, defenceType: elements, armorAbility: ability): armor {
    return new armor(name, defence, defenceType, armorAbility);
  }
}
export default ArmorFabric;
