import Mage from '../../character/mage';
import mageArmorFabric from '../armorFabrics/mageArmorFabric';
import Fabric from '../fabricAbstract';
import MageWeaponFabric from '../weaponFabrics/mageWeaponFabric';

class mageFabric extends Fabric {
  private mageNames: string[] = ['Hedosley', 'Emanthe', 'Emara', 'Eguthea'];
  private weaponFabric = new MageWeaponFabric();
  private armorFabric = new mageArmorFabric();
  public createMage(): Mage {
    const mageHP = this.createRandomNuber(10, 15);
    const mageName = this.mageNames[this.createRandomNuber(0, this.mageNames.length - 1)];
    const mageWeapon = this.weaponFabric.createWeapon();
    const mageArmor = this.armorFabric.createArmor();
    return new Mage(mageName, mageHP, mageArmor, mageWeapon);
  }
}
export default mageFabric;
