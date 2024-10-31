import knight from '../../character/knight';
import KnightArmorFabric from '../armorFabrics/knightArmorFabric';
import Fabric from '../fabricAbstract';
import knightWeaponFabric from '../weaponFabrics/knightWeaponFabric';

class knightFabric extends Fabric {
  private weaponFabric = new knightWeaponFabric();
  private armorFabric = new KnightArmorFabric();
  private knightNames: string[] = ['Harald', 'Robin', 'Fernando'];

  createKnight(): knight {
    const knightHP = this.createRandomNuber(10, 20);
    const knightName = this.knightNames[this.createRandomNuber(0, this.knightNames.length - 1)];
    const knightWeapon = this.weaponFabric.createWeapon();
    const knightArmor = this.armorFabric.createArmor();
    return new knight(knightName, knightHP, knightWeapon, knightArmor);
  }
}
export default knightFabric;
