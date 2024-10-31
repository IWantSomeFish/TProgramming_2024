import Axe from '../../weapon/knightWeapon/axeClass';
import Sword from '../../weapon/knightWeapon/swordClass';
import Fabric from '../fabricAbstract';

class KnightWeaponFabric extends Fabric {
  public createWeapon() {
    const weaponTypes = ['sword', 'axe'];
    const weaponType = weaponTypes[this.createRandomNuber(0, weaponTypes.length - 1)];
    const damageTypes = ['fire', 'ice', 'psyhic', 'thunder'];
    switch (weaponType) {
      case 'sword':
        const swordNames = ['Excalibur', 'Demon Slayer', 'Night', 'Day'];
        const swordName = swordNames[this.createRandomNuber(0, swordNames.length - 1)];
        const swordDamage = this.createRandomNuber(5, 10);
        const swordCritChance = this.createRandomNuber(10, 30);
        const swordCritMultiplier = this.createRandomNuber(10, 30) / 10;
        const swordDamageType = damageTypes[this.createRandomNuber(0, damageTypes.length - 1)];
        return new Sword(swordName, swordDamage, swordCritChance, swordCritMultiplier, swordDamageType);

      case 'axe':
        const axeNames = ['Dual Moon', 'Axe of Gorrosh', 'Mooncrasher'];
        const axeName = axeNames[this.createRandomNuber(0, axeNames.length - 1)];
        const axeDamage = this.createRandomNuber(10, 15);
        const axeCritChance = this.createRandomNuber(5, 15);
        const axeCritMultipluer = this.createRandomNuber(5, 15);
        const axeDamageType = damageTypes[this.createRandomNuber(0, damageTypes.length - 1)];
        return new Axe(axeName, axeDamage, axeCritChance, axeCritMultipluer, axeDamageType);
    }
  }
}
export default knightWeaponFabric;
