import knight from '../character/knight';
import mage from '../character/mage';

import ArmorFabric from './armorFabric';
import weaponFabric from './weaponFabric';

function createRandomNuber(min: number, max: number): number {
  const randomNumber = Math.random() * (max - min) + min;
  return Number(randomNumber.toFixed(0));
}
class CharacterFabric {
  weaponfabric = new weaponFabric();
  aromorfabric = new ArmorFabric();
  private knightNames: string[] = ['Harald', 'Robin', 'Fernando'];
  private mageNames: string[] = ['Hedosley', 'Emanthe', 'Emara', 'Eguthea'];
  public createChar(type: string) {
    switch (type) {
      case 'knight':
        const knightHP = createRandomNuber(10, 20);
        const knightName = this.knightNames[createRandomNuber(0, this.knightNames.length - 1)];
        const knightWeapon = this.weaponfabric.createWeapon('knight');
        const knightArmor = this.aromorfabric.createArmor('knight');
        return new knight(knightName, knightHP, knightWeapon, knightArmor);

      case 'mage':
        const mageHP = createRandomNuber(10, 15);
        const mageName = this.mageNames[createRandomNuber(0, this.mageNames.length - 1)];
        const mageWeapon = this.weaponfabric.createWeapon('mage');
        const mageArmor = this.aromorfabric.createArmor('mage');
        return new mage(mageName, mageHP, mageArmor, mageWeapon);
    }
  }
}
export default CharacterFabric;
